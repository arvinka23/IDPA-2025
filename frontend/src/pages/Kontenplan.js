import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Kontenplan.css';

const Kontenplan = () => {
  const [konten, setKonten] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    kontonummer: '',
    kontenname: '',
    kontenart: '',
    aktivpassiv: ''
  });

  useEffect(() => {
    fetchKontenplan();
  }, []);

  const fetchKontenplan = async () => {
    try {
      const response = await axios.get('/api/kontenplan');
      setKonten(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Fehler beim Laden des Kontenplans:', error);
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/kontenplan', formData);
      alert('ERFOLG: Konto erfolgreich erstellt!');
      setFormData({ kontonummer: '', kontenname: '', kontenart: '', aktivpassiv: '' });
      setShowForm(false);
      fetchKontenplan();
    } catch (error) {
      console.error('Fehler beim Erstellen des Kontos:', error);
      if (error.response && error.response.status === 500) {
        alert('FEHLER: Diese Kontonummer existiert bereits. Bitte wählen Sie eine andere Nummer.');
      } else {
        alert('FEHLER: Das Konto konnte nicht erstellt werden. Bitte versuchen Sie es erneut.');
      }
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (loading) {
    return <div className="loading">Lade Kontenplan...</div>;
  }

  return (
    <div className="kontenplan">
      <div className="page-header">
        <h1>Kontenplan</h1>
        <p>Verwalten Sie Ihren Kontenplan für die automatische Kontierung</p>
        <button 
          className="btn btn-primary"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? 'Formular schließen' : 'Neues Konto hinzufügen'}
        </button>
      </div>

      {showForm && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Neues Konto erstellen</h2>
          </div>
          <form onSubmit={handleSubmit} className="kontenplan-form">
            <div className="form-group">
              <label className="form-label">Kontonummer</label>
              <input
                type="text"
                name="kontonummer"
                value={formData.kontonummer}
                onChange={handleInputChange}
                className="form-input"
                placeholder="z.B. 1000"
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Kontenname</label>
              <input
                type="text"
                name="kontenname"
                value={formData.kontenname}
                onChange={handleInputChange}
                className="form-input"
                placeholder="z.B. Kasse"
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Kontenart</label>
              <select
                name="kontenart"
                value={formData.kontenart}
                onChange={handleInputChange}
                className="form-select"
                required
              >
                <option value="">Bitte wählen...</option>
                <option value="Kasse">Kasse</option>
                <option value="Bank">Bank</option>
                <option value="Forderungen">Forderungen</option>
                <option value="Verbindlichkeiten">Verbindlichkeiten</option>
                <option value="Eigenkapital">Eigenkapital</option>
                <option value="Aufwand">Aufwand</option>
                <option value="Ertrag">Ertrag</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Aktiv/Passiv</label>
              <select
                name="aktivpassiv"
                value={formData.aktivpassiv}
                onChange={handleInputChange}
                className="form-select"
                required
              >
                <option value="">Bitte wählen...</option>
                <option value="Aktiv">Aktiv</option>
                <option value="Passiv">Passiv</option>
              </select>
            </div>
            <div className="form-actions">
              <button type="submit" className="btn btn-primary">
                Konto erstellen
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
          <h2 className="card-title">Aktueller Kontenplan</h2>
          <p className="card-subtitle">
            {konten.length} Konten definiert
          </p>
        </div>
        
        {konten.length === 0 ? (
          <div className="empty-state">
            <p>Noch keine Konten definiert. Erstellen Sie Ihr erstes Konto!</p>
          </div>
        ) : (
          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th>Kontonummer</th>
                  <th>Kontenname</th>
                  <th>Kontenart</th>
                  <th>Aktiv/Passiv</th>
                  <th>Erstellt</th>
                </tr>
              </thead>
              <tbody>
                {konten.map((konto) => (
                  <tr key={konto.id}>
                    <td>{konto.kontonummer}</td>
                    <td>{konto.kontenname}</td>
                    <td>
                      <span className={`badge badge-${konto.kontenart.toLowerCase()}`}>
                        {konto.kontenart}
                      </span>
                    </td>
                    <td>
                      <span className={`badge badge-${konto.aktivpassiv.toLowerCase()}`}>
                        {konto.aktivpassiv}
                      </span>
                    </td>
                    <td>
                      {new Date(konto.created_at).toLocaleDateString('de-DE')}
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

export default Kontenplan;
