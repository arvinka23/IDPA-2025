import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

const Login = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    firma: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const endpoint = isLogin ? '/api/auth/login' : '/api/auth/register';
      const response = await axios.post(endpoint, formData);

      // Token speichern
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));

      // Login erfolgreich
      onLogin(response.data.user);
    } catch (error) {
      console.error('Auth Error:', error);
      if (error.response && error.response.data && error.response.data.error) {
        setError(error.response.data.error);
      } else {
        setError('Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.');
      }
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <h1 className="login-title">Liquiditätsnachweis</h1>
            <p className="login-subtitle">
              {isLogin ? 'Melden Sie sich an' : 'Erstellen Sie ein Konto'}
            </p>
          </div>

          {error && (
            <div className="alert alert-danger">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label className="form-label">Benutzername</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Ihr Benutzername"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Passwort</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Ihr Passwort"
                required
              />
            </div>

            {!isLogin && (
              <>
                <div className="form-group">
                  <label className="form-label">E-Mail (optional)</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="ihre.email@firma.ch"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Firma (optional)</label>
                  <input
                    type="text"
                    name="firma"
                    value={formData.firma}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Ihre Firma AG"
                  />
                </div>
              </>
            )}

            <button type="submit" className="btn btn-primary btn-block">
              {isLogin ? 'Anmelden' : 'Registrieren'}
            </button>
          </form>

          <div className="login-footer">
            <button
              type="button"
              className="link-button"
              onClick={() => {
                setIsLogin(!isLogin);
                setError('');
                setFormData({ username: '', password: '', email: '', firma: '' });
              }}
            >
              {isLogin
                ? 'Noch kein Konto? Jetzt registrieren'
                : 'Bereits registriert? Jetzt anmelden'}
            </button>
          </div>
        </div>

        <div className="login-info">
          <h2>Willkommen beim Liquiditätsnachweis</h2>
          <p>
            Verwalten Sie Ihre Buchhaltung professionell mit unserer modernen Web-Applikation.
          </p>
          <ul className="feature-list">
            <li>Automatische Bilanzführung</li>
            <li>Grafische Liquiditätsanalyse</li>
            <li>Geldflussrechnung</li>
            <li>Warnsystem für Liquiditätsengpässe</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Login;

