import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';
import './Liquiditaet.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const Liquiditaet = () => {
  const [liquiditaetData, setLiquiditaetData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [chartType, setChartType] = useState('bar');
  const [hasBuchungen, setHasBuchungen] = useState(false);

  useEffect(() => {
    checkBuchungenAndFetch();
  }, []);

  const checkBuchungenAndFetch = async () => {
    try {
      // Zuerst prüfen, ob Buchungen vorhanden sind
      const buchungenResponse = await axios.get('/api/buchungssaetze');
      const buchungen = buchungenResponse.data;
      
      if (!buchungen || buchungen.length === 0) {
        setLoading(false);
        setHasBuchungen(false);
        alert('Es gibt nicht genug Buchungen.\n\nBitte erstellen Sie zuerst Buchungen, bevor Sie die Liquiditätsanalyse anzeigen können.');
        return;
      }
      
      setHasBuchungen(true);
      // Wenn Buchungen vorhanden sind, Liquiditätsdaten laden
      const response = await axios.get('/api/liquiditaet');
      setLiquiditaetData(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Fehler beim Laden der Daten:', error);
      setLoading(false);
      alert('Fehler beim Laden der Daten. Bitte versuchen Sie es erneut.');
    }
  };

  const fetchLiquiditaetData = async () => {
    try {
      const response = await axios.get('/api/liquiditaet');
      setLiquiditaetData(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Fehler beim Laden der Liquiditätsdaten:', error);
      setLoading(false);
    }
  };

  const calculateTotalLiquiditaet = () => {
    return liquiditaetData.reduce((sum, item) => {
      return sum + parseFloat(item.saldo || 0);
    }, 0);
  };

  const getChartData = () => {
    const liquiditaetKonten = liquiditaetData.filter(item => 
      item.kontenart === 'Kasse' || item.kontenart === 'Bank'
    );

    return {
      labels: liquiditaetKonten.map(item => item.kontenname),
      datasets: [
        {
          label: 'Liquide Mittel (CHF)',
          data: liquiditaetKonten.map(item => parseFloat(item.saldo || 0)),
          backgroundColor: [
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 99, 132, 0.6)',
            'rgba(255, 205, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
          ],
          borderColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(255, 205, 86, 1)',
            'rgba(75, 192, 192, 1)',
          ],
          borderWidth: 2,
        },
      ],
    };
  };

  const getLiquiditaetTrendData = () => {
    // Simulierte Trend-Daten (in einer echten App würden diese aus historischen Daten kommen)
    const months = ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun'];
    const trendData = months.map((month, index) => {
      const baseAmount = calculateTotalLiquiditaet();
      const variation = (Math.random() - 0.5) * baseAmount * 0.3;
      return baseAmount + variation;
    });

    return {
      labels: months,
      datasets: [
        {
          label: 'Liquiditätstrend (CHF)',
          data: trendData,
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          tension: 0.4,
          fill: true,
        },
      ],
    };
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Liquiditätsübersicht',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value) {
            return value.toLocaleString('de-DE', {
              style: 'currency',
              currency: 'CHF'
            });
          }
        }
      }
    }
  };

  const trendOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Liquiditätstrend (Simulation)',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value) {
            return value.toLocaleString('de-DE', {
              style: 'currency',
              currency: 'CHF'
            });
          }
        }
      }
    }
  };

  const getLiquiditaetStatus = () => {
    const total = calculateTotalLiquiditaet();
    if (total > 100000) return { status: 'excellent', message: 'Ausgezeichnete Liquidität' };
    if (total > 50000) return { status: 'good', message: 'Gute Liquidität' };
    if (total > 10000) return { status: 'warning', message: 'Liquidität könnte besser sein' };
    return { status: 'danger', message: 'Kritische Liquidität - Handlungsbedarf!' };
  };

  if (loading) {
    return <div className="loading">Lade Liquiditätsdaten...</div>;
  }

  // Wenn keine Buchungen vorhanden sind, zeige nur eine leere Seite
  if (!hasBuchungen) {
    return (
      <div className="liquiditaet">
        <div className="page-header">
          <h1>Liquiditätsanalyse</h1>
          <p>Grafische Darstellung der liquiden Mittel und Trendanalyse</p>
        </div>
        <div className="empty-state">
          <p>Es gibt nicht genug Buchungen.</p>
          <p>Bitte erstellen Sie zuerst Buchungen, bevor Sie die Liquiditätsanalyse anzeigen können.</p>
        </div>
      </div>
    );
  }

  const liquiditaetStatus = getLiquiditaetStatus();
  const totalLiquiditaet = calculateTotalLiquiditaet();

  return (
    <div className="liquiditaet">
      <div className="page-header">
        <h1>Liquiditätsanalyse</h1>
        <p>Grafische Darstellung der liquiden Mittel und Trendanalyse</p>
        <button 
          className="btn btn-primary"
          onClick={checkBuchungenAndFetch}
        >
          Daten aktualisieren
        </button>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-value">
            {totalLiquiditaet.toLocaleString('de-DE', {
              style: 'currency',
              currency: 'CHF'
            })}
          </div>
          <div className="stat-label">Gesamte Liquide Mittel</div>
        </div>
        <div className={`stat-card status-${liquiditaetStatus.status}`}>
          <div className="stat-value">{liquiditaetStatus.message}</div>
          <div className="stat-label">Liquiditätsstatus</div>
        </div>
      </div>

      <div className="grid grid-2">
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Liquiditätsübersicht</h2>
            <p className="card-subtitle">Aufschlüsselung nach Konten</p>
            <div className="chart-controls">
              <button 
                className={`btn ${chartType === 'bar' ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setChartType('bar')}
              >
                Balkendiagramm
              </button>
              <button 
                className={`btn ${chartType === 'line' ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setChartType('line')}
              >
                Liniendiagramm
              </button>
            </div>
          </div>
          <div className="chart-container">
            {chartType === 'bar' ? (
              <Bar data={getChartData()} options={chartOptions} />
            ) : (
              <Line data={getChartData()} options={chartOptions} />
            )}
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Liquiditätstrend</h2>
            <p className="card-subtitle">Entwicklung über Zeit (Simulation)</p>
          </div>
          <div className="chart-container">
            <Line data={getLiquiditaetTrendData()} options={trendOptions} />
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Detaillierte Liquiditätsaufstellung</h2>
          <p className="card-subtitle">Alle liquiden Mittel im Überblick</p>
        </div>
        
        {liquiditaetData.length === 0 ? (
          <div className="empty-state">
            <p>Keine Liquiditätsdaten verfügbar. Erstellen Sie zuerst Konten und Buchungen!</p>
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
                  <th>Saldo</th>
                </tr>
              </thead>
              <tbody>
                {liquiditaetData.map((item) => (
                  <tr key={item.kontonummer}>
                    <td>{item.kontonummer}</td>
                    <td>{item.kontenname}</td>
                    <td>
                      <span className={`badge badge-${item.kontenart ? item.kontenart.toLowerCase() : 'default'}`}>
                        {item.kontenart || 'N/A'}
                      </span>
                    </td>
                    <td>
                      <span className={`badge badge-${item.aktivpassiv ? item.aktivpassiv.toLowerCase() : 'default'}`}>
                        {item.aktivpassiv || 'N/A'}
                      </span>
                    </td>
                    <td className={`betrag ${parseFloat(item.saldo || 0) >= 0 ? 'positive' : 'negative'}`}>
                      {parseFloat(item.saldo || 0).toLocaleString('de-DE', {
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

      <div className={`alert alert-${liquiditaetStatus.status}`}>
        <h3>Liquiditätsbewertung</h3>
        <p>{liquiditaetStatus.message}</p>
        {liquiditaetStatus.status === 'danger' && (
          <div className="warning-actions">
            <h4>Empfohlene Maßnahmen:</h4>
            <ul>
              <li>Forderungen beschleunigt einziehen</li>
              <li>Kreditlinie prüfen</li>
              <li>Investitionen verschieben</li>
              <li>Liquiditätsplanung verstärken</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Liquiditaet;
