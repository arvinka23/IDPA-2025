import React, { useState, useEffect } from 'react';
import api from '../api';
import './Buchungen.css';

const Buchungen = () => {
  const [buchungen, setBuchungen] = useState([]);
  const [kontenplan, setKontenplan] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    datum: new Date().toISOString().split('T')[0],
    belegnummer: '',
    beschreibung: '',
    soll_konto: '',
    haben_konto: '',
    betrag: ''
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [buchungenRes, kontenplanRes] = await Promise.all([
        api.get('/api/buchungssaetze'),
        api.get('/api/kontenplan')
      ]);
      setBuchungen(buchungenRes.data);
      setKontenplan(kontenplanRes.data);
      setLoading(false);
    } catch (error) {
      console.error('Fehler beim Laden der Daten:', error);
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validierung: Soll und Haben dürfen nicht gleich sein
    if (formData.soll_konto === formData.haben_konto) {
      alert('FEHLER: Soll-Konto und Haben-Konto dürfen nicht identisch sein.\n\nBitte wählen Sie unterschiedliche Konten für die doppelte Buchführung.');
      return;
    }
    
    try {
      await api.post('/api/buchungssaetze', {
        ...formData,
        betrag: parseFloat(formData.betrag)
      });
      setFormData({
        datum: new Date().toISOString().split('T')[0],
        belegnummer: '',
        beschreibung: '',
        soll_konto: '',
        haben_konto: '',
        betrag: ''
      });
      setShowForm(false);
      fetchData();
    } catch (error) {
      console.error('Fehler beim Erstellen der Buchung:', error);
      alert('FEHLER: Die Buchung konnte nicht erstellt werden. Bitte versuchen Sie es erneut.');
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const getKontoName = (kontonummer) => {
    const konto = kontenplan.find(k => k.kontonummer === kontonummer);
    return konto ? konto.kontenname : kontonummer;
  };

  if (loading) {
    return <div className="loading">Lade Buchungen...</div>;
  }

  return (
    <div className="buchungen">
      <div className="page-header">
        <h1>Buchungssätze</h1>
        <p>Erfassen Sie neue Buchungen für die automatische Bilanzführung</p>
        <button 
          className="btn btn-primary"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? 'Formular schließen' : 'Neue Buchung erstellen'}
        </button>
      </div>

      {showForm && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Neue Buchung erstellen</h2>
            <p className="card-subtitle">Doppelte Buchführung - Soll und Haben müssen ausgeglichen sein</p>
          </div>
          <form onSubmit={handleSubmit} className="buchungen-form">
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Datum</label>
                <input
                  type="date"
                  name="datum"
                  value={formData.datum}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Belegnummer</label>
                <input
                  type="text"
                  name="belegnummer"
                  value={formData.belegnummer}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="z.B. RE-2024-001"
                />
              </div>
            </div>
            
            <div className="form-group">
              <label className="form-label">Beschreibung</label>
              <input
                type="text"
                name="beschreibung"
                value={formData.beschreibung}
                onChange={handleInputChange}
                className="form-input"
                placeholder="z.B. Verkauf von Waren"
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Soll-Konto</label>
                <select
                  name="soll_konto"
                  value={formData.soll_konto}
                  onChange={handleInputChange}
                  className="form-select"
                  required
                >
                  <option value="">Bitte wählen...</option>
                  {kontenplan.map((konto) => (
                    <option key={konto.id} value={konto.kontonummer}>
                      {konto.kontonummer} - {konto.kontenname}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Haben-Konto</label>
                <select
                  name="haben_konto"
                  value={formData.haben_konto}
                  onChange={handleInputChange}
                  className="form-select"
                  required
                >
                  <option value="">Bitte wählen...</option>
                  {kontenplan.map((konto) => (
                    <option key={konto.id} value={konto.kontonummer}>
                      {konto.kontonummer} - {konto.kontenname}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Betrag (CHF)</label>
              <input
                type="number"
                name="betrag"
                value={formData.betrag}
                onChange={handleInputChange}
                className="form-input"
                placeholder="0.00"
                step="0.01"
                min="0"
                required
              />
            </div>

            <div className="form-actions">
              <button type="submit" className="btn btn-primary">
                Buchung erstellen
              </button>
              <button 
                type="button" 
                className="btn btn-secondary"
                onClick={() => setShowForm(false)}
              >
                Abbrechen
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Buchungssätze</h2>
          <p className="card-subtitle">
            {buchungen.length} Buchungen erfasst
          </p>
        </div>
        
        {buchungen.length === 0 ? (
          <div className="empty-state">
            <p>Noch keine Buchungen erfasst. Erstellen Sie Ihre erste Buchung!</p>
          </div>
        ) : (
          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th>Datum</th>
                  <th>Beleg</th>
                  <th>Beschreibung</th>
                  <th>Soll</th>
                  <th>Haben</th>
                  <th>Betrag</th>
                </tr>
              </thead>
              <tbody>
                {buchungen.map((buchung) => (
                  <tr key={buchung.id}>
                    <td>{new Date(buchung.datum).toLocaleDateString('de-DE')}</td>
                    <td>{buchung.belegnummer || '-'}</td>
                    <td>{buchung.beschreibung}</td>
                    <td>
                      <span className="konto-info">
                        {buchung.soll_konto} - {getKontoName(buchung.soll_konto)}
                      </span>
                    </td>
                    <td>
                      <span className="konto-info">
                        {buchung.haben_konto} - {getKontoName(buchung.haben_konto)}
                      </span>
                    </td>
                    <td className="betrag">
                      {parseFloat(buchung.betrag).toLocaleString('de-DE', {
                        style: 'currency',
                        currency: 'CHF'
                      })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Buchungen;
