import React, { useState, useEffect } from 'react';
import api from '../api';
import './Bilanz.css';

const Bilanz = () => {
  const [bilanz, setBilanz] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBilanz();
  }, []);

  const fetchBilanz = async () => {
    try {
      const response = await api.get('/api/liquiditaet');
      setBilanz(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Fehler beim Laden der Bilanz:', error);
      setLoading(false);
    }
  };

  const calculateTotal = (aktivpassiv) => {
    return bilanz
      .filter(item => item.aktivpassiv === aktivpassiv)
      .reduce((sum, item) => sum + parseFloat(item.saldo || 0), 0);
  };

  const aktivTotal = calculateTotal('Aktiv');
  const passivTotal = calculateTotal('Passiv');

  if (loading) {
    return <div className="loading">Lade Bilanz...</div>;
  }

  return (
    <div className="bilanz">
      <div className="page-header">
        <h1>Bilanz</h1>
        <p>Automatisch generierte Bilanz basierend auf den Buchungssätzen</p>
        <button 
          className="btn btn-primary"
          onClick={fetchBilanz}
        >
          Bilanz aktualisieren
        </button>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Bilanz</h2>
          <p className="card-subtitle">
            Stand: {new Date().toLocaleDateString('de-DE')}
          </p>
        </div>

        {bilanz.length === 0 ? (
          <div className="empty-state">
            <p>Keine Bilanzdaten verfügbar. Erstellen Sie zuerst Konten und Buchungen!</p>
          </div>
        ) : (
          <div className="bilanz-container">
            <div className="bilanz-side aktiv">
              <h3>Aktiva</h3>
              <div className="bilanz-items">
                {bilanz
                  .filter(item => item.aktivpassiv === 'Aktiv')
                  .map((item) => (
                    <div key={item.kontonummer} className="bilanz-item">
                      <span className="kontonummer">{item.kontonummer}</span>
                      <span className="kontenname">{item.kontenname}</span>
                      <span className="saldo">
                        {parseFloat(item.saldo || 0).toLocaleString('de-DE', {
                          style: 'currency',
                          currency: 'CHF'
                        })}
                      </span>
                    </div>
                  ))}
                <div className="bilanz-total">
                  <span className="total-label">Summe Aktiva:</span>
                  <span className="total-value">
                    {aktivTotal.toLocaleString('de-DE', {
                      style: 'currency',
                      currency: 'CHF'
                    })}
                  </span>
                </div>
              </div>
            </div>

            <div className="bilanz-side passiv">
              <h3>Passiva</h3>
              <div className="bilanz-items">
                {bilanz
                  .filter(item => item.aktivpassiv === 'Passiv')
                  .map((item) => (
                    <div key={item.kontonummer} className="bilanz-item">
                      <span className="kontonummer">{item.kontonummer}</span>
                      <span className="kontenname">{item.kontenname}</span>
                      <span className="saldo">
                        {parseFloat(item.saldo || 0).toLocaleString('de-DE', {
                          style: 'currency',
                          currency: 'CHF'
                        })}
                      </span>
                    </div>
                  ))}
                <div className="bilanz-total">
                  <span className="total-label">Summe Passiva:</span>
                  <span className="total-value">
                    {passivTotal.toLocaleString('de-DE', {
                      style: 'currency',
                      currency: 'CHF'
                    })}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {bilanz.length > 0 && (
          <div className="bilanz-summary">
            <div className={`summary-item ${Math.abs(aktivTotal - passivTotal) < 0.01 ? 'balanced' : 'unbalanced'}`}>
              <span className="summary-label">Bilanzsumme:</span>
              <span className="summary-value">
                {aktivTotal.toLocaleString('de-DE', {
                  style: 'currency',
                  currency: 'CHF'
                })}
              </span>
            </div>
            {Math.abs(aktivTotal - passivTotal) < 0.01 ? (
              <div className="alert alert-success">
                ✅ Bilanz ist ausgeglichen
              </div>
            ) : (
              <div className="alert alert-danger">
                ⚠️ Bilanz ist nicht ausgeglichen (Differenz: {(aktivTotal - passivTotal).toLocaleString('de-DE', {
                  style: 'currency',
                  currency: 'CHF'
                })})
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Bilanz;
