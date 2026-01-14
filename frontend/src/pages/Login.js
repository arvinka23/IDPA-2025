import React, { useState } from 'react';
import api from '../api';
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

  const features = [
    {
      title: 'Kontenplan & Buchungen',
      description: 'Konten anlegen, Buchungssätze erfassen und automatisch verknüpfen.',
      image: 'https://img.icons8.com/fluency/64/accounting.png'
    },
    {
      title: 'Automatische Bilanz',
      description: 'Bilanz wird aus den erfassten Buchungen automatisch erzeugt.',
      image: 'https://img.icons8.com/fluency/64/bank-card-front-side.png'
    },
    {
      title: 'Liquiditätsanalyse',
      description: 'Liquide Mittel im Diagramm mit Trendverlauf visualisiert.',
      image: 'https://img.icons8.com/fluency/64/combo-chart.png'
    },
    {
      title: 'Geldflussrechnung',
      description: 'Operative, Finanzierungs- und Investitionstätigkeiten übersichtlich gegliedert.',
      image: 'https://img.icons8.com/fluency/64/cash-in-hand.png'
    },
    {
      title: 'Warnsystem',
      description: 'Automatische Hinweise bei kritischen Liquiditätsständen.',
      image: 'https://img.icons8.com/fluency/64/high-importance.png'
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const endpoint = isLogin ? '/api/auth/login' : '/api/auth/register';
      const response = await api.post(endpoint, formData);

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
        <div className="features-promo">
          <h2>Willkommen beim Liquiditätsnachweis</h2>
          <p>
            Erfassen Sie Buchungssätze und lassen Sie die Bilanz sowie Liquiditätsnachweise automatisch erstellen.
          </p>
          <div className="features-section">
            <h3>Funktionen</h3>
            <div className="features-grid">
              {features.map((feature) => (
                <div className="feature-card" key={feature.title}>
                  <div className="feature-image">
                    <img src={feature.image} alt={feature.title} />
                  </div>
                  <div className="feature-content">
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="login-main">
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
        </div>
      </div>
    </div>
  );
};

export default Login;

