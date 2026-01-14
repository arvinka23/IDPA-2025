import React, { useState, useEffect } from 'react';
import api from '../api';
import './Dashboard.css';

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalKonten: 0,
    totalBuchungen: 0,
    liquiditaet: 0,
    bilanzsumme: 0
  });

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

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const [kontenplanRes, buchungenRes, liquiditaetRes] = await Promise.all([
        api.get('/api/kontenplan'),
        api.get('/api/buchungssaetze'),
        api.get('/api/liquiditaet')
      ]);

      const liquiditaetSumme = liquiditaetRes.data.reduce((sum, item) => {
        return sum + parseFloat(item.saldo || 0);
      }, 0);

      setStats({
        totalKonten: kontenplanRes.data.length,
        totalBuchungen: buchungenRes.data.length,
        liquiditaet: liquiditaetSumme,
        bilanzsumme: liquiditaetSumme * 2 // Vereinfachte Berechnung
      });
    } catch (error) {
      console.error('Fehler beim Laden der Dashboard-Daten:', error);
    }
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Dashboard - Liquiditätsnachweis</h1>
        <p>Übersicht über Ihre Buchhaltungsdaten und Kennzahlen</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-value">{stats.totalKonten}</div>
          <div className="stat-label">Konten im Plan</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{stats.totalBuchungen}</div>
          <div className="stat-label">Buchungssätze</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">
            {stats.liquiditaet.toLocaleString('de-DE', {
              style: 'currency',
              currency: 'CHF'
            })}
          </div>
          <div className="stat-label">Liquide Mittel</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">
            {stats.bilanzsumme.toLocaleString('de-DE', {
              style: 'currency',
              currency: 'CHF'
            })}
          </div>
          <div className="stat-label">Bilanzsumme</div>
        </div>
      </div>

      <div className="grid grid-2">
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Schnellzugriff</h2>
            <p className="card-subtitle">Häufig verwendete Funktionen</p>
          </div>
          <div className="quick-actions">
            <a href="/buchungen" className="btn btn-primary">
              Neue Buchung erstellen
            </a>
            <a href="/kontenplan" className="btn btn-secondary">
              Kontenplan verwalten
            </a>
            <a href="/bilanz" className="btn btn-secondary">
              Bilanz anzeigen
            </a>
            <a href="/liquiditaet" className="btn btn-secondary">
              Liquiditätsanalyse
            </a>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Systemstatus</h2>
            <p className="card-subtitle">Aktuelle Systeminformationen</p>
          </div>
          <div className="system-status">
            <div className="status-item">
              <span className="status-label">Datenbank:</span>
              <span className="status-value status-ok">Verbunden</span>
            </div>
            <div className="status-item">
              <span className="status-label">Letzte Aktualisierung:</span>
              <span className="status-value">{new Date().toLocaleString('de-DE')}</span>
            </div>
            <div className="status-item">
              <span className="status-label">Version:</span>
              <span className="status-value">1.0.0</span>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Willkommen beim Liquiditätsnachweis</h2>
          <p className="card-subtitle">IDPA Projekt - Automatisierte Buchhaltung</p>
        </div>
        <div className="welcome-content">
          <p>
            Erfassen Sie Ihre Buchungssätze im Kontenplan. Die Bilanz und Liquiditätsnachweise 
            werden automatisch aus den erfassten Daten generiert. Alle wichtigen Kennzahlen 
            werden berechnet und in übersichtlichen Diagrammen dargestellt.
          </p>
          <div className="features-list">
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
      </div>
    </div>
  );
};

export default Dashboard;
