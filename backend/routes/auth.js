const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../middleware/auth');

const router = express.Router();

// Registrierung
router.post('/register', async (req, res) => {
  const { username, password, email, firma } = req.body;
  const db = req.app.locals.db;

  try {
    // Passwort hashen
    const hashedPassword = await bcrypt.hash(password, 10);

    // User in Datenbank speichern
    db.run(
      'INSERT INTO users (username, password, email, firma) VALUES (?, ?, ?, ?)',
      [username, hashedPassword, email, firma],
      function(err) {
        if (err) {
          if (err.message.includes('UNIQUE')) {
            return res.status(400).json({ error: 'Benutzername existiert bereits.' });
          }
          return res.status(500).json({ error: err.message });
        }

        // JWT Token erstellen
        const token = jwt.sign(
          { id: this.lastID, username: username },
          JWT_SECRET,
          { expiresIn: '24h' }
        );

        res.json({
          message: 'Registrierung erfolgreich',
          token: token,
          user: { id: this.lastID, username, email, firma }
        });
      }
    );
  } catch (error) {
    res.status(500).json({ error: 'Registrierung fehlgeschlagen.' });
  }
});

// Login
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const db = req.app.locals.db;

  db.get('SELECT * FROM users WHERE username = ?', [username], async (err, user) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    if (!user) {
      return res.status(401).json({ error: 'Benutzername oder Passwort falsch.' });
    }

    // Passwort überprüfen
    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(401).json({ error: 'Benutzername oder Passwort falsch.' });
    }

    // JWT Token erstellen
    const token = jwt.sign(
      { id: user.id, username: user.username },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.json({
      message: 'Login erfolgreich',
      token: token,
      user: { id: user.id, username: user.username, email: user.email, firma: user.firma }
    });
  });
});

// User-Info abrufen (geschützt)
router.get('/me', (req, res) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Nicht authentifiziert.' });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Ungültiger Token.' });
    }

    const db = req.app.locals.db;
    db.get('SELECT id, username, email, firma FROM users WHERE id = ?', [user.id], (err, userData) => {
      if (err || !userData) {
        return res.status(404).json({ error: 'User nicht gefunden.' });
      }
      res.json(userData);
    });
  });
});

module.exports = router;

