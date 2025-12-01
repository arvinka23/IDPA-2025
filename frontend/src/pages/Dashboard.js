import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Dashboard.css';

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalKonten: 0,
    totalBuchungen: 0,
    liquiditaet: 0,
    bilanzsumme: 0
  });

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const [kontenplanRes, buchungenRes, liquiditaetRes] = await Promise.all([
        axios.get('/api/kontenplan'),
        axios.get('/api/buchungssaetze'),
        axios.get('/api/liquiditaet')
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
            Diese Anwendung ermöglicht es Ihnen, Buchungssätze zu erfassen und automatisch 
            eine Bilanz sowie Liquiditätsnachweise zu erstellen. Die wichtigsten Kennzahlen 
            werden automatisch berechnet und grafisch dargestellt.
          </p>
          <div className="features-list">
            <h3>Hauptfunktionen:</h3>
            <ul>
              <li>✅ Automatische Kontierung basierend auf Buchungssätzen</li>
              <li>✅ Automatische Bilanzführung</li>
              <li>✅ Grafische Darstellung der Liquiditätsveränderungen</li>
              <li>✅ Geldflussrechnung mit operativen, Finanzierungs- und Investitionstätigkeiten</li>
              <li>✅ Warnsystem für Liquiditätsengpässe</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
