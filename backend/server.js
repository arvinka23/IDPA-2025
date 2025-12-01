const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const authRoutes = require('./routes/auth');
const { authenticateToken } = require('./middleware/auth');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Database setup
const dbPath = path.join(__dirname, '..', 'database', 'liquiditaet.db');
const db = new sqlite3.Database(dbPath);

// Database in app verfügbar machen
app.locals.db = db;

// Initialize database tables
db.serialize(() => {
  // Users Tabelle
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    email TEXT,
    firma TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )`);

  // Kontenplan Tabelle
  db.run(`CREATE TABLE IF NOT EXISTS kontenplan (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    kontonummer TEXT UNIQUE NOT NULL,
    kontenname TEXT NOT NULL,
    kontenart TEXT NOT NULL,
    aktivpassiv TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )`);

  // Buchungssätze Tabelle
  db.run(`CREATE TABLE IF NOT EXISTS buchungssaetze (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    datum DATE NOT NULL,
    belegnummer TEXT,
    beschreibung TEXT NOT NULL,
    soll_konto TEXT NOT NULL,
    haben_konto TEXT NOT NULL,
    betrag DECIMAL(10,2) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (soll_konto) REFERENCES kontenplan(kontonummer),
    FOREIGN KEY (haben_konto) REFERENCES kontenplan(kontonummer)
  )`);

  // Bilanz Tabelle
  db.run(`CREATE TABLE IF NOT EXISTS bilanz (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    kontonummer TEXT NOT NULL,
    kontenname TEXT NOT NULL,
    aktivpassiv TEXT NOT NULL,
    saldo DECIMAL(10,2) DEFAULT 0,
    periode TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (kontonummer) REFERENCES kontenplan(kontonummer)
  )`);
});

// Auth Routes (öffentlich)
app.use('/api/auth', authRoutes);

// Routes
app.get('/api/health', (req, res) => {
  res.json({ message: 'Liquiditätsnachweis API läuft!' });
});

// Kontenplan Routes (geschützt)
app.get('/api/kontenplan', authenticateToken, (req, res) => {
  db.all('SELECT * FROM kontenplan ORDER BY kontonummer', (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

app.post('/api/kontenplan', authenticateToken, (req, res) => {
  const { kontonummer, kontenname, kontenart, aktivpassiv } = req.body;
  
  db.run(
    'INSERT INTO kontenplan (kontonummer, kontenname, kontenart, aktivpassiv) VALUES (?, ?, ?, ?)',
    [kontonummer, kontenname, kontenart, aktivpassiv],
    function(err) {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ id: this.lastID, message: 'Konto erfolgreich erstellt' });
    }
  );
});

// Buchungssätze Routes (geschützt)
app.get('/api/buchungssaetze', authenticateToken, (req, res) => {
  db.all('SELECT * FROM buchungssaetze ORDER BY datum DESC', (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

app.post('/api/buchungssaetze', authenticateToken, (req, res) => {
  const { datum, belegnummer, beschreibung, soll_konto, haben_konto, betrag } = req.body;
  
  db.run(
    'INSERT INTO buchungssaetze (datum, belegnummer, beschreibung, soll_konto, haben_konto, betrag) VALUES (?, ?, ?, ?, ?, ?)',
    [datum, belegnummer, beschreibung, soll_konto, haben_konto, betrag],
    function(err) {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ id: this.lastID, message: 'Buchungssatz erfolgreich erstellt' });
    }
  );
});

// Bilanz Routes (geschützt)
app.get('/api/bilanz', authenticateToken, (req, res) => {
  db.all('SELECT * FROM bilanz ORDER BY aktivpassiv, kontonummer', (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// Liquiditätsberechnung (geschützt)
app.get('/api/liquiditaet', authenticateToken, (req, res) => {
  db.all(`
    SELECT 
      k.kontonummer,
      k.kontenname,
      k.aktivpassiv,
      COALESCE(SUM(CASE WHEN b.soll_konto = k.kontonummer THEN b.betrag ELSE 0 END), 0) -
      COALESCE(SUM(CASE WHEN b.haben_konto = k.kontonummer THEN b.betrag ELSE 0 END), 0) as saldo
    FROM kontenplan k
    LEFT JOIN buchungssaetze b ON k.kontonummer = b.soll_konto OR k.kontonummer = b.haben_konto
    WHERE k.kontenart IN ('Kasse', 'Bank', 'Verbindlichkeiten', 'Forderungen')
    GROUP BY k.kontonummer, k.kontenname, k.aktivpassiv
    ORDER BY k.aktivpassiv, k.kontonummer
  `, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
  console.log(`API verfügbar unter: http://localhost:${PORT}/api`);
});

// Graceful shutdown
process.on('SIGINT', () => {
  db.close((err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Datenbankverbindung geschlossen.');
    process.exit(0);
  });
});
