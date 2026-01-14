# Liquiditätsnachweis - IDPA Projekt

Eine moderne Web-Applikation für die automatische Erstellung von Liquiditätsnachweisen und Kennzahlenberechnung basierend auf Buchungssätzen.

## Features

- Kontenplanverwaltung mit automatischer Kategorisierung
- Erfassung von Buchungssätzen nach doppelter Buchführung
- Automatische Bilanzgenerierung aus den erfassten Buchungen
- Liquiditätsanalyse mit grafischer Darstellung
- Geldflussrechnung nach Tätigkeitsbereichen
- Warnsystem bei Liquiditätsengpässen

## Technologie-Stack

- Frontend: React 18 + CSS3
- Backend: Node.js + Express
- Datenbank: SQLite
- Visualisierung: Chart.js + React-ChartJS-2
- Authentifizierung: JWT

## Installation

### Voraussetzungen
- Node.js (Version 16 oder höher)
- npm oder yarn

### Setup

1. **Dependencies installieren:**
```bash
npm run install-all
```

2. **Entwicklungsserver starten:**
```bash
npm run dev
```

3. **Anwendung öffnen:**
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## Projektstruktur

```
liquiditaetsnachweis/
├── frontend/              # React Frontend
│   ├── src/
│   │   ├── components/    # React Komponenten
│   │   ├── pages/         # Seiten-Komponenten
│   │   └── styles/        # CSS Styles
├── backend/               # Node.js Backend
│   └── server.js         # Express Server
├── database/              # SQLite Datenbank
└── package.json          # Root Dependencies
```

## Hauptfunktionen

### 1. Kontenplan
- Erstellen und verwalten von Konten
- Automatische Kategorisierung (Aktiv/Passiv)
- Kontenarten: Kasse, Bank, Forderungen, etc.

### 2. Buchungssätze
- Doppelte Buchführung
- Automatische Saldenberechnung
- Belegnummern und Beschreibungen

### 3. Bilanz
- Automatische Bilanzgenerierung
- Echtzeit-Updates bei neuen Buchungen
- Aktiv-/Passiv-Gegenüberstellung

### 4. Liquiditätsanalyse
- Grafische Darstellung der liquiden Mittel
- Trendanalyse über Zeit
- Warnsystem bei kritischen Liquiditätsständen

## API Endpoints

- `GET /api/kontenplan` - Kontenplan abrufen
- `POST /api/kontenplan` - Neues Konto erstellen
- `GET /api/buchungssaetze` - Buchungssätze abrufen
- `POST /api/buchungssaetze` - Neue Buchung erstellen
- `GET /api/bilanz` - Bilanz abrufen
- `GET /api/liquiditaet` - Liquiditätsdaten abrufen

## IDPA Projektziele

- Kontenplanverwaltung mit automatischer Kategorisierung
- Automatische Bilanzgenerierung aus Buchungssätzen
- Grafische Visualisierung der Liquiditätsentwicklung
- Geldflussrechnung nach Tätigkeitsbereichen
- Warnsystem für Liquiditätsengpässe  

## Erweiterungsmöglichkeiten

- Export-Funktionen (PDF, Excel)
- Erweiterte Kennzahlenberechnung
- Multi-Perioden-Analyse
- Mobile App (React Native)

## Lizenz

MIT License - IDPA Projekt 2024
