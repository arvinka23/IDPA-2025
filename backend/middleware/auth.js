const jwt = require('jsonwebtoken');

// Secret Key für JWT (in Produktion zwingend via ENV setzen)
// Render/Railway/Fly: als Environment Variable `JWT_SECRET` konfigurieren.
const JWT_SECRET = process.env.JWT_SECRET || 'liquiditaetsnachweis_secret_key_2025';

// Middleware um zu prüfen ob User eingeloggt ist
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Format: "Bearer TOKEN"

  if (!token) {
    return res.status(401).json({ error: 'Zugriff verweigert. Kein Token vorhanden.' });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Ungültiger oder abgelaufener Token.' });
    }
    req.user = user;
    next();
  });
};

module.exports = { authenticateToken, JWT_SECRET };

