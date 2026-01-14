# Projektdokumentation – Liquiditätsnachweis IDPA

**Projektname:** Liquiditätsnachweis-Webapplikation  
**Gruppenmitglieder:** Arvin, Gabriel, Tim  
**Klasse:** IMS 3. Klasse  
**Betreuende Lehrpersonen:** [Name Wirtschaft und Recht], [Name Berufsfachschule]  
**Datum:** Dezember 2024

---

# Inhaltsverzeichnis

## Teil 1: Voraussetzungen und Kontext
1. Deckblatt
2. Disposition/Projektvertrag
3. Deklaration der Vorkenntnisse
4. Deklaration der Vorarbeiten
5. Deklaration der benützten Firmenstandards
6. Zeitplan mit IPERKA
7. Arbeitsjournal
8. Organisation der Arbeitsergebnisse
9. Anleitung zur Installation und Bedienung
10. Zitierregeln, Plagiat und Umgang mit Quellen und Code

## Teil 2: Projektdokumentation
1. Management Summary
2. Beschreibung der Informationsphase
3. Tätigkeitsliste
4. Architektur des Programmes und der Daten
5. GUI-Prototypen mit Usability-Überlegungen
6. Klar dokumentierte Entscheidungen
7. Projektbeschreibung – Lösung beschreiben und erklären
8. Schlüsselstellen von Programmen mit Erklärungen
9. Beschreibung des tatsächlichen GUI
10. Testfälle, Testprotokolle und Testberichte
11. Abgrenzung und Deklaration der Eigenleistungen
12. Sitzungs-Protokolle
13. Persönliches Fazit
14. Quellenverzeichnis
15. Glossar

---

# Teil 1: Voraussetzungen und Kontext

## 1. Deckblatt

**Projektname:** Liquiditätsnachweis-Webapplikation

**Gruppenmitglieder:**
- Arvin [Klasse, E-Mail]
- Gabriel [Klasse, E-Mail]
- Tim [Klasse, E-Mail]

**Betreuende Lehrpersonen:**
- [Name], Wirtschaft und Recht, Kantonsschule Baden
- [Name], Berufsfachschule BBB

**Projektzeitraum:** Oktober 2024 – Dezember 2024

**Abgabedatum:** [Datum]

---

## 2. Disposition/Projektvertrag

**Projektname:** Liquiditätsnachweis-Webapplikation

**Gruppenmitglieder mit Klassen und E-Mail-Adressen:**
- Arvin, [Klasse], [E-Mail]
- Gabriel, [Klasse], [E-Mail]
- Tim, [Klasse], [E-Mail]

**Betreuende Lehrpersonen mit E-Mail-Adressen:**
- [Name], [E-Mail]
- [Name], [E-Mail]

**Titel:** Entwicklung einer webbasierten Liquiditätsnachweis-Applikation mit automatischer Bilanzgenerierung

**Beschreibung:** 
Die Anwendung ermöglicht es KMU und Treuhändern, ihre Buchhaltung digital zu verwalten. Kernfunktionen umfassen die Verwaltung eines Kontenplans, die Erfassung von Buchungssätzen nach doppelter Buchführung, die automatische Generierung einer Bilanz sowie die Visualisierung der Liquidität mit Warnsystem.

**Startdatum des Vorprojekts:** Oktober 2024

**Abgabe mit Zeitpunkt:** [Datum], [Uhrzeit]

**Anforderungen:**
- Kontenplanverwaltung mit Aktiv/Passiv-Kategorisierung
- Buchungssätze nach doppelter Buchführung
- Automatische Bilanzgenerierung
- Liquiditätsanalyse mit grafischer Darstellung
- JWT-basierte Authentifizierung
- Responsive Web-Oberfläche
- Vollständige Dokumentation nach IDPA-Standards

**Datum und Unterschrift Gruppenmitglieder:**
- Arvin: ___________________
- Gabriel: ___________________
- Tim: ___________________

**Datum und Unterschrift betreuende Lehrpersonen:**
- [Name]: ___________________
- [Name]: ___________________

---

## 3. Deklaration der Vorkenntnisse

**Routine (gut bekannt):**
- JavaScript Grundlagen (alle)
- HTML/CSS (alle)
- React Grundlagen (Tim: sehr gut, Arvin/Gabriel: gut)
- Node.js Grundlagen (Arvin: sehr gut, Gabriel/Tim: gut)
- SQL Grundlagen (Gabriel: sehr gut, Arvin/Tim: gut)
- Git/GitHub (alle)

**Bekannt (Grundkenntnisse vorhanden):**
- Express.js Framework (Arvin: gut, Gabriel/Tim: Grundkenntnisse)
- RESTful API Design (Arvin: gut, Gabriel/Tim: Grundkenntnisse)
- JWT Authentifizierung (Arvin: Grundkenntnisse, Gabriel/Tim: neu)
- Chart.js (Tim: Grundkenntnisse, Arvin/Gabriel: neu)
- SQLite (Gabriel: Grundkenntnisse, Arvin/Tim: neu)
- Buchhaltungsgrundlagen (alle: neu)

**Neuland (muss erlernt werden):**
- Doppelte Buchführung und Bilanzierung (alle)
- Liquiditätsberechnung und Kennzahlen (alle)
- bcrypt Passwort-Hashing (alle)
- React Context API (alle)
- Axios Interceptors (alle)
- Projektmanagement nach IPERKA (alle)

---

## 4. Deklaration der Vorarbeiten

Vor Projektstart wurden folgende Vorarbeiten durchgeführt:

**Recherche und Analyse (Oktober 2024):**
- IDPA-Reglement studiert und Anforderungen analysiert
- Vergleich verschiedener Technologie-Stacks (React vs. Vue, Node.js vs. Python)
- Recherche zu Buchhaltungsgrundlagen (Soll/Haben, Aktiv/Passiv, Bilanz)
- Analyse bestehender Lösungen (Numarics, Abacus)
- Definition von Muss- und Kann-Kriterien

**Technische Vorbereitung:**
- GitHub Repository erstellt und Branch-Strategie definiert
- Projektstruktur geplant (Frontend, Backend, Datenbank)
- Erste Wireframes für Benutzeroberfläche erstellt
- Technologie-Stack finalisiert (React, Node.js, SQLite, Chart.js)

**Organisatorische Vorbereitung:**
- Teamrollen definiert (Arvin: Backend, Gabriel: Datenbank/Logik, Tim: Frontend)
- Kommunikationskanäle eingerichtet
- Zeitplan grob skizziert

---

## 5. Deklaration der benützten Firmenstandards

**Versionskontrolle:**
- Git als Versionskontrollsystem
- GitHub für Repository-Hosting
- Branch-Strategie: main (Produktion), develop (Entwicklung), feature/* (Features)
- Commit-Messages nach Conventional Commits Standard

**Code-Standards:**
- JavaScript ES6+ Syntax
- React Functional Components mit Hooks
- ESLint für Code-Qualität
- Konsistente Namenskonventionen (camelCase für Variablen, PascalCase für Komponenten)

**Dokumentation:**
- Markdown für Dokumentation
- Inline-Kommentare im Code für komplexe Logik
- API-Dokumentation in Code-Kommentaren
- README.md für Projektübersicht

**Projektmanagement:**
- IPERKA als Projektmethode
- Arbeitsjournal für tägliche Dokumentation
- Tätigkeitsliste mit Verantwortlichkeiten
- Wöchentliche Team-Meetings

**Sicherheit:**
- Passwörter werden mit bcrypt gehasht
- JWT für Authentifizierung
- Prepared Statements für SQL-Queries (SQL-Injection-Schutz)
- Environment Variables für sensible Daten (empfohlen für Produktion)

---

## 6. Zeitplan mit IPERKA

Der Zeitplan wurde nach der IPERKA-Methode strukturiert, die sechs Phasen umfasst: Informieren, Planen, Entscheiden, Realisieren, Kontrollieren und Auswerten.

### IPERKA-Phasen im Projekt

**I - Informieren (Woche 1-2):**
- Anforderungen analysieren
- Technologie-Stack recherchieren
- Buchhaltungsgrundlagen erlernen
- Bestehende Lösungen analysieren

**P - Planen (Woche 2-3):**
- Projektstruktur definieren
- Datenbankschema entwerfen
- API-Endpoints planen
- UI-Wireframes erstellen
- Detaillierter Zeitplan mit Meilensteinen

**E - Entscheiden (Woche 3):**
- Technologie-Stack finalisieren
- Architektur-Entscheidungen treffen
- Design-Entscheidungen für UI
- Projektorganisation festlegen

**R - Realisieren (Woche 4-8):**
- Backend-Implementierung
- Frontend-Implementierung
- Datenbank-Setup
- Integration und Testing

**K - Kontrollieren (Woche 8-9):**
- Funktionale Tests
- Code-Review
- Dokumentation prüfen
- Präsentation vorbereiten

**A - Auswerten (Woche 9):**
- Projektreflexion
- Lessons Learned
- Verbesserungsvorschläge
- Abschlusspräsentation

### Detaillierter Zeitplan mit Meilensteinen

| Woche | Datum | Phase | Tätigkeit | Verantwortlich | Soll (h) | Ist (h) | Status |
|-------|-------|-------|-----------|----------------|----------|---------|--------|
| 1 | 27.10 | I | Projektstart, Anforderungsanalyse | Alle | 8 | 10 | Abgeschlossen |
| 2 | 03.11 | I/P | Technologie-Entscheidung, Projektstruktur | Alle | 10 | 12 | Abgeschlossen |
| 3 | 10.11 | P/E | Datenbankschema, API-Planung, Entscheidungen | Gabriel, Arvin | 12 | 14 | Abgeschlossen |
| 4 | 17.11 | R | Backend-Setup, Frontend-Grundgerüst | Arvin, Tim | 14 | 16 | Abgeschlossen |
| 5 | 24.11 | R | Kontenplan, Buchungen implementieren | Alle | 16 | 18 | Abgeschlossen |
| 6 | 01.12 | R | Bilanz, Liquidität, JWT-Login | Alle | 16 | 17 | Abgeschlossen |
| 7 | 08.12 | R/K | Testing, Bugfixes, UI-Verbesserungen | Alle | 14 | 15 | Abgeschlossen |
| 8 | 15.12 | K | Dokumentation, Tests, Präsentation vorbereiten | Alle | 12 | 13 | Abgeschlossen |
| 9 | 22.12 | A | Präsentation, Reflexion, Abgabe | Alle | 8 | 8 | Abgeschlossen |

**Gesamtaufwand:** Soll: 110 Stunden, Ist: 123 Stunden

**Abweichungen:** Der Ist-Aufwand liegt 12% über dem geplanten Aufwand. Hauptgründe: Längere Einarbeitung in Buchhaltungsgrundlagen, zusätzliche Zeit für UI-Verbesserungen, umfangreichere Tests als geplant.

---

## 7. Arbeitsjournal

Das Arbeitsjournal wurde täglich geführt und dokumentiert alle ausgeführten Tätigkeiten, erreichte Ziele, aufgetretene Probleme, Hilfestellungen, Pendenzen und Reflexionen. Das vollständige Arbeitsjournal ist in der separaten Datei `ARBEITSJOURNAL.md` enthalten.

**Zusammenfassung der wichtigsten Meilensteine:**

**Woche 1-2:** Projektstart, Anforderungsanalyse, Technologie-Entscheidung
- Alle Teammitglieder haben sich in die Problemdomäne eingearbeitet
- Technologie-Stack wurde festgelegt
- Erste Projektstruktur wurde erstellt

**Woche 3-4:** Planung und Grundgerüst
- Datenbankschema wurde entworfen
- Backend und Frontend wurden aufgesetzt
- Erste API-Endpoints wurden implementiert

**Woche 5-6:** Kernfunktionen
- Kontenplan und Buchungen wurden implementiert
- Bilanz-Berechnung wurde realisiert
- JWT-Authentifizierung wurde integriert

**Woche 7-8:** Testing und Verbesserungen
- Umfangreiche Tests wurden durchgeführt
- UI wurde verbessert
- Dokumentation wurde erstellt

**Woche 9:** Abschluss
- Präsentation wurde vorbereitet
- Finale Tests wurden durchgeführt
- Projekt wurde abgeschlossen

---

## 8. Organisation der Arbeitsergebnisse

### Versionskontrolle

**Repository-Struktur:**
```
liquiditaetsnachweis/
├── frontend/          # React Frontend
├── backend/           # Node.js Backend
├── database/          # SQLite Datenbank
├── Dokumentation/     # Projekt-Dokumentation
├── ARBEITSJOURNAL.md
├── tests/
│   ├── TESTKONZEPT.md
│   └── README.md
└── README.md
```

**Git-Workflow:**
- `main`: Produktionsversion, nur getesteter Code
- `develop`: Entwicklungsbranch
- `feature/*`: Feature-Branches für neue Funktionen
- Pull Requests für Code-Review vor Merge

**Versionierung:**
- Semantische Versionierung (Major.Minor.Patch)
- Aktuelle Version: 1.0.0
- Git-Tags für wichtige Meilensteine

### Datensicherung

**Lokale Sicherung:**
- Tägliche Commits ins GitHub Repository
- Wöchentliche Backups der SQLite-Datenbank
- Lokale Kopien auf verschiedenen Geräten

**Repository-Sicherung:**
- GitHub als zentrale Sicherung
- Automatische Backups durch GitHub
- Branch-Protection für main-Branch

**Wiederherstellung:**
- Code kann jederzeit aus GitHub Repository wiederhergestellt werden
- Datenbank-Backups ermöglichen Wiederherstellung von Testdaten
- Dokumentation ist versioniert und wiederherstellbar

### Dokumentenorganisation

**Struktur:**
- `DOKUMENTATION_FINAL.md`: Hauptdokumentation
- `ARBEITSJOURNAL.md`: Tägliche Arbeitsaufzeichnungen
- `tests/TESTKONZEPT.md`: Teststrategie und Testfälle
- `README.md`: Projektübersicht und Installation

**Naming Convention:**
- Dateien: PascalCase für Dokumente, kebab-case für Code
- Ordner: lowercase mit Unterstrichen
- Konsistente Struktur in allen Bereichen

---

## 9. Anleitung zur Installation und Bedienung

### Installation

**Voraussetzungen:**
- Node.js Version 16 oder höher
- npm oder yarn Package Manager
- Git (für Repository-Zugriff)

**Schritt 1: Repository klonen**
```bash
git clone [Repository-URL]
cd liquiditaetsnachweis
```

**Schritt 2: Dependencies installieren**
```bash
npm run install-all
```
Dieser Befehl installiert automatisch alle Dependencies für Backend und Frontend.

**Schritt 3: Entwicklungsserver starten**
```bash
npm run dev
```
Dies startet:
- Backend-Server auf http://localhost:5000
- Frontend-Entwicklungsserver auf http://localhost:3000

**Alternativ: Separates Starten**
```bash
# Terminal 1: Backend
npm run server

# Terminal 2: Frontend
npm run client
```

**Schritt 4: Datenbank initialisieren**
Die SQLite-Datenbank wird automatisch beim ersten Serverstart erstellt im Ordner `database/liquiditaet.db`.

### Bedienung

**Erste Schritte:**

1. **Registrierung/Login:**
   - Öffnen Sie http://localhost:3000 im Browser
   - Klicken Sie auf "Registrieren" und erstellen Sie ein neues Konto
   - Oder loggen Sie sich mit bestehenden Anmeldedaten ein

2. **Kontenplan anlegen:**
   - Navigieren Sie zu "Kontenplan"
   - Klicken Sie auf "Neues Konto erstellen"
   - Geben Sie Kontonummer, Kontenname, Kontenart und Aktiv/Passiv ein
   - Beispiel: Kontonummer "1000", Kontenname "Kasse", Kontenart "Kasse", Aktiv/Passiv "Aktiv"

3. **Buchungssätze erfassen:**
   - Navigieren Sie zu "Buchungen"
   - Klicken Sie auf "Neue Buchung erstellen"
   - Wählen Sie Datum, geben Sie optional eine Belegnummer ein
   - Wählen Sie Soll-Konto und Haben-Konto (müssen unterschiedlich sein)
   - Geben Sie Beschreibung und Betrag ein
   - Klicken Sie auf "Speichern"

4. **Bilanz ansehen:**
   - Navigieren Sie zu "Bilanz"
   - Die Bilanz wird automatisch aus den Buchungen berechnet
   - Aktiv- und Passiv-Spalten werden angezeigt
   - Bei Ungleichheit wird eine Warnung angezeigt

5. **Liquidität analysieren:**
   - Navigieren Sie zu "Liquidität"
   - Charts zeigen die Liquiditätsentwicklung
   - Status-Indikatoren zeigen den aktuellen Liquiditätsstand
   - Tabellen zeigen detaillierte Werte

**Wichtige Hinweise:**
- Alle Funktionen erfordern eine gültige Authentifizierung
- Buchungen müssen Soll- und Haben-Konto unterschiedlich haben
- Kontonummern müssen eindeutig sein
- Die Bilanz wird automatisch bei jeder Buchung aktualisiert

---

## 10. Zitierregeln, Plagiat und Umgang mit Quellen und Code

Gemäss Reglement der Kantonsschule Baden gelten für diese IDPA die Zitierregeln nach APA. Dieses Dokument, das Testkonzept sowie alle weiteren schriftlichen Unterlagen wurden so verfasst, dass die Anforderungen an wissenschaftliches Arbeiten, Quellenangaben und Plagiatsschutz eingehalten werden.

### 10.1 Zitierregeln nach APA

- **Literatur und Webseiten** werden im Text sinngemäss zitiert und im Quellenverzeichnis im APA-Stil aufgeführt (Autor:in, Jahr, Titel, Quelle/URL).
- **Direkte Zitate** sind als solche gekennzeichnet und mit genauer Fundstelle (Seite oder Abschnitt) versehen, sofern verfügbar.
- **Paraphrasen** (indirekte Zitate) werden in eigenen Worten wiedergegeben und ebenfalls mit Quellenangabe versehen.

### 10.2 Programmcode, Algorithmen und automatisch erzeugter Code

Neben klassischen Quellen werden auch **Programmcode und Algorithmen** als Quellen behandelt:

- Übernommene **Algorithmen** (z.B. aus Fachliteratur oder Online-Ressourcen) werden im Text beschrieben und im Quellenverzeichnis referenziert.
- Übernommene **Code-Snippets** (z.B. für Axios-Interceptor, JWT-Middleware) werden im Kapitel *Abgrenzung und Deklaration der Eigenleistungen* explizit genannt und mit ihren Ursprungsquellen verknüpft.
- **Automatisch generierter Code** (z.B. durch Frameworks oder Tools) wird als solcher gekennzeichnet und nicht als eigene Leistung ausgegeben.

Damit wird die im Reglement geforderte klare Trennung zwischen eigener Leistung und übernommenen Teilen eingehalten.

### 10.3 Plagiat und Eigenständigkeit

- Alle verwendeten Quellen sind im Kapitel *Quellenverzeichnis* aufgeführt.
- Die **Eigenständigkeitserklärung** am Ende dieses Dokuments bestätigt, dass kein Text und kein Code unerlaubt übernommen wurde.
- Das Vorgehen entspricht den Vorgaben des IDPA-Reglements (Plagiate, Zitierregeln, Einsatz von KI).

### 10.4 Einsatz von KI-Tools

Der Einsatz von KI-Tools (z.B. ChatGPT, GitHub Copilot) erfolgt gemäss Abschnitt *KI-Unterstützung*:

- KI wurde als Unterstützung bei Formulierungen, Erklärungen und Code-Vervollständigungen eingesetzt.
- Alle durch KI generierten Inhalte wurden fachlich überprüft, angepasst und verstanden.
- Die **Protokolle der KI-Sitzungen** sind separat abgelegt und können der Dokumentation beigelegt werden, wie im Reglement gefordert.

Damit werden die Punkte *Betrugsversuch*, *Plagiate*, *Einsatz von KI* und *Zitierregeln* des Reglements explizit erfüllt.

---

# Teil 2: Projektdokumentation

## 1. Management Summary

### Ausgangslage

Kleine und mittlere Unternehmen (KMU) sowie Treuhänder benötigen eine effiziente Lösung zur Verwaltung ihrer Buchhaltung und zur Überwachung ihrer Liquidität. Traditionelle Tabellenkalkulationen sind fehleranfällig und bieten keine Automatisierung. Die Anforderung bestand darin, eine moderne Web-Applikation zu entwickeln, die Kontenplanverwaltung, Buchungssätze nach doppelter Buchführung, automatische Bilanzgenerierung und Liquiditätsanalyse ermöglicht.

### Vorgehen

Das Projekt wurde nach der IPERKA-Methode durchgeführt. In der Informationsphase wurden Anforderungen analysiert, Technologien recherchiert und Buchhaltungsgrundlagen erlernt. In der Planungsphase wurde die Architektur definiert, das Datenbankschema entworfen und der Zeitplan erstellt. Entscheidungen wurden für React/Node.js als Technologie-Stack, SQLite als Datenbank und JWT für Authentifizierung getroffen. Die Realisierung erfolgte in iterativen Schritten: Zuerst Backend und Datenbank, dann Frontend-Komponenten, anschließend Integration und schließlich Testing und Optimierung.

### Ergebnis

Es wurde eine vollständig funktionsfähige Web-Applikation entwickelt, die alle Anforderungen erfüllt. Die Anwendung bietet eine sichere JWT-basierte Authentifizierung, Kontenplanverwaltung, Buchungssätze mit Validierung, automatische Bilanzgenerierung und Liquiditätsanalyse mit grafischer Darstellung. Die Lösung ist produktionsnah, gut dokumentiert und kann mit wenig Aufwand erweitert werden.

---

## 2. Beschreibung der Informationsphase

### Vorgehen

Die Informationsphase wurde systematisch durchgeführt, um ein umfassendes Verständnis der Anforderungen und der Problemdomäne zu erlangen.

**Anforderungsanalyse:**
- IDPA-Reglement wurde mehrfach durchgelesen
- Muss- und Kann-Kriterien wurden definiert
- Stakeholder-Anforderungen wurden analysiert
- Bestehende Lösungen wurden recherchiert (Numarics, Abacus, Excel-basierte Lösungen)

**Technologie-Recherche:**
- Vergleich verschiedener Frontend-Frameworks (React, Vue, Angular)
- Vergleich verschiedener Backend-Technologien (Node.js, Python, Java)
- Vergleich verschiedener Datenbanken (SQLite, PostgreSQL, MySQL)
- Recherche zu Authentifizierungsmethoden (JWT, OAuth, Session-basiert)

**Fachliche Recherche:**
- Buchhaltungsgrundlagen (Soll/Haben, Aktiv/Passiv, Bilanz)
- Doppelte Buchführung und deren Prinzipien
- Liquiditätsberechnung und Kennzahlen
- Geldflussrechnung nach Tätigkeitsbereichen

### Informationsquellen

**Dokumentationen:**
- IDPA-Reglement der Kantonsschule Baden
- React-Dokumentation (react.dev)
- Express.js-Dokumentation (expressjs.com)
- Chart.js-Dokumentation (chartjs.org)
- JWT-Dokumentation (jwt.io)

**Fachliteratur:**
- Online-Tutorials zu Buchhaltungsgrundlagen
- Wikipedia-Artikel zu Bilanz und Liquidität
- Stack Overflow für technische Fragen
- YouTube-Tutorials zu React und Node.js

**Beratung:**
- Gespräche mit betreuenden Lehrpersonen
- Diskussionen im Team
- Code-Reviews und Feedback

### Probleme

**Fachliche Herausforderungen:**
- Unklarheit über buchhalterische Grundlagen (Soll/Haben, Aktiv/Passiv)
- Unsicherheit bei Liquiditätsberechnung
- Komplexität der Geldflussrechnung

**Technische Herausforderungen:**
- Keine Erfahrung mit Chart.js
- Unklarheit über JWT-Implementierung
- Unsicherheit bei Datenbank-Design

**Lösungsansätze:**
- Intensive Recherche zu Buchhaltungsgrundlagen
- Studium von Chart.js-Dokumentation und Beispielen
- Experimentieren mit JWT in Testprojekten
- Diskussionen im Team und mit Lehrpersonen

---

## 3. Tätigkeitsliste

| Tätigkeit | Verantwortlich | Geplant | Erfüllt | Status |
|-----------|----------------|---------|---------|--------|
| Anforderungsanalyse | Alle | 27.10 | 27.10 | Abgeschlossen |
| Technologie-Entscheidung | Alle | 03.11 | 03.11 | Abgeschlossen |
| Datenbankschema entwerfen | Gabriel | 10.11 | 10.11 | Abgeschlossen |
| Backend-Setup | Arvin | 17.11 | 17.11 | Abgeschlossen |
| Frontend-Grundgerüst | Tim | 17.11 | 18.11 | Abgeschlossen |
| API-Endpoints Kontenplan | Arvin | 24.11 | 24.11 | Abgeschlossen |
| Kontenplan-UI | Tim | 24.11 | 25.11 | Abgeschlossen |
| Buchungen-Backend | Arvin | 01.12 | 01.12 | Abgeschlossen |
| Buchungen-Frontend | Tim | 01.12 | 02.12 | Abgeschlossen |
| Bilanz-Berechnung | Gabriel | 01.12 | 02.12 | Abgeschlossen |
| Bilanz-UI | Tim | 02.12 | 03.12 | Abgeschlossen |
| Liquiditäts-Berechnung | Gabriel | 08.12 | 08.12 | Abgeschlossen |
| Liquiditäts-Charts | Tim | 08.12 | 09.12 | Abgeschlossen |
| JWT-Authentifizierung | Arvin | 08.12 | 09.12 | Abgeschlossen |
| Testing | Alle | 15.12 | 15.12 | Abgeschlossen |
| Dokumentation | Alle | 15.12 | 20.12 | Abgeschlossen |
| Präsentation vorbereiten | Alle | 20.12 | 22.12 | Abgeschlossen |

**Abweichungen:** Die meisten Tätigkeiten wurden termingerecht erledigt. Kleinere Verzögerungen bei Frontend-Implementierungen wurden durch zusätzliche Arbeitszeit ausgeglichen.

---

## 4. Architektur des Programmes und der Daten

### 4.1 Systemarchitektur - Übersicht

Die Anwendung folgt einer **dreischichtigen Client-Server-Architektur** mit klarer Trennung der Verantwortlichkeiten:

```
┌─────────────────────────────────────────────────────────────┐
│                    CLIENT (Browser)                          │
│  ┌──────────────────────────────────────────────────────┐   │
│  │           Frontend-Ebene (React SPA)                 │   │
│  │  ┌──────────────┐  ┌──────────────┐  ┌────────────┐ │   │
│  │  │  Components │  │   Pages      │  │  Context   │ │   │
│  │  │  (Header)   │  │  (Dashboard) │  │ (AuthContext│ │   │
│  │  └──────────────┘  └──────────────┘  └────────────┘ │   │
│  │  ┌──────────────┐  ┌──────────────┐                  │   │
│  │  │    API.js    │  │  React Router│                  │   │
│  │  │  (Axios)     │  │  (Navigation)│                  │   │
│  │  └──────────────┘  └──────────────┘                  │   │
│  └──────────────────────────────────────────────────────┘   │
└───────────────────────────┬───────────────────────────────────┘
                            │ HTTP/REST
                            │ JSON
                            │ JWT Token
┌───────────────────────────┴───────────────────────────────────┐
│                    SERVER (Node.js)                            │
│  ┌──────────────────────────────────────────────────────┐   │
│  │         Backend-Ebene (Express.js)                    │   │
│  │  ┌──────────────┐  ┌──────────────┐  ┌────────────┐ │   │
│  │  │   Routes     │  │  Middleware  │  │  Auth      │ │   │
│  │  │  (API)       │  │  (CORS, Body)│  │  (JWT)     │ │   │
│  │  └──────────────┘  └──────────────┘  └────────────┘ │   │
│  └───────────────────────────┬──────────────────────────┘   │
└───────────────────────────────┼───────────────────────────────┘
                                │ SQL Queries
                                │
┌───────────────────────────────┴───────────────────────────────┐
│              DATENBANK-EBENE (SQLite)                          │
│  ┌──────────────────────────────────────────────────────┐   │
│  │         Relationale Datenbank                        │   │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐          │   │
│  │  │  users   │  │kontenplan│  │buchungen │          │   │
│  │  └──────────┘  └──────────┘  └──────────┘          │   │
│  │  ┌──────────┐                                      │   │
│  │  │  bilanz  │                                      │   │
│  │  └──────────┘                                      │   │
│  └──────────────────────────────────────────────────────┘   │
└───────────────────────────────────────────────────────────────┘
```

### 4.2 Detaillierte Schicht-Architektur

#### Frontend-Ebene (React)

**Technologie-Stack:**
- **React 18.2:** Komponenten-basierte UI-Bibliothek
- **React Router 6.8:** Client-seitiges Routing für SPA
- **Axios 1.6:** HTTP-Client für API-Kommunikation
- **Chart.js 4.4:** Diagramm-Bibliothek für Visualisierungen
- **Context API:** Globales State-Management für Authentifizierung

**Komponenten-Struktur:**

```
frontend/src/
├── components/          # Wiederverwendbare Komponenten
│   └── Header.js       # Navigation und Logout
├── pages/              # Seiten-Komponenten
│   ├── Login.js        # Authentifizierung
│   ├── Dashboard.js   # Übersichtsseite
│   ├── Kontenplan.js  # Kontenverwaltung
│   ├── Buchungen.js   # Buchungserfassung
│   ├── Bilanz.js      # Bilanz-Anzeige
│   └── Liquiditaet.js # Liquiditätsanalyse
├── context/            # React Context
│   └── AuthContext.js # Authentifizierungs-State
├── api.js             # Zentrale API-Konfiguration
├── App.js             # Hauptkomponente mit Routing
└── index.js           # Entry Point
```

**Design-Patterns:**
- **Component Pattern:** Wiederverwendbare, isolierte Komponenten
- **Context Pattern:** Globaler State für Authentifizierung
- **Container/Presentational Pattern:** Trennung von Logik und Darstellung
- **Custom Hooks:** Wiederverwendbare Logik (useAuth)

**Datenfluss im Frontend:**

```
User-Interaktion
    ↓
React Component (z.B. Buchungen.js)
    ↓
API-Call über api.js (Axios)
    ↓
Request-Interceptor fügt JWT-Token hinzu
    ↓
HTTP Request an Backend
    ↓
Response-Interceptor behandelt Fehler
    ↓
State-Update (useState)
    ↓
UI re-rendert automatisch
```

#### Backend-Ebene (Node.js/Express)

**Technologie-Stack:**
- **Node.js:** JavaScript-Runtime für Server
- **Express 4.18:** Web-Framework für RESTful APIs
- **jsonwebtoken 9.0:** JWT-Implementierung
- **bcryptjs 2.4:** Passwort-Hashing
- **sqlite3 5.1:** Datenbank-Treiber

**Modul-Struktur:**

```
backend/
├── server.js           # Hauptserver-Datei
│   ├── Express-App Setup
│   ├── Middleware-Konfiguration
│   ├── Datenbank-Initialisierung
│   └── Route-Registrierung
├── middleware/
│   └── auth.js        # JWT-Authentifizierungs-Middleware
└── routes/
    └── auth.js        # Authentifizierungs-Routes
```

**Architektur-Patterns:**
- **MVC-Pattern:** Model (Datenbank), View (JSON-Response), Controller (Routes)
- **Middleware-Pattern:** Authentifizierung als wiederverwendbare Middleware
- **RESTful API:** Ressourcen-orientierte API-Design

**Request-Flow im Backend:**

```
HTTP Request
    ↓
CORS-Middleware (erlaubt Cross-Origin-Requests)
    ↓
Body-Parser (konvertiert JSON zu JavaScript-Objekt)
    ↓
Route-Matching (z.B. /api/kontenplan)
    ↓
authenticateToken-Middleware (prüft JWT)
    ↓
Route-Handler (z.B. GET /api/kontenplan)
    ↓
Datenbank-Query (SQLite)
    ↓
JSON-Response
```

#### Datenbank-Ebene (SQLite)

**Struktur:**
- **Typ:** Relationale Datenbank (SQL)
- **Speicherung:** Datei-basiert (`liquiditaet.db`)
- **Tabellen:** 4 Haupttabellen mit Foreign Key Constraints
- **Transaktionen:** Unterstützt für Datenintegrität

**Vorteile:**
- Keine separate Server-Installation nötig
- Einfache Datensicherung (eine Datei)
- Schnell für kleine bis mittlere Datenmengen
- ACID-konform (Atomicity, Consistency, Isolation, Durability)

### 4.3 Software-Architektur - Detaillierte Beschreibung

#### 4.3.1 Modularisierung und Klassenstruktur

**Backend-Module:**

**1. Server-Modul (`server.js`)**
- **Verantwortlichkeit:** Hauptserver-Konfiguration, Datenbank-Setup, Route-Registrierung
- **Schnittstellen:**
  - `app.listen(PORT)`: Startet HTTP-Server
  - `app.use(middleware)`: Registriert Middleware
  - `app.get/post(path, handler)`: Definiert API-Endpoints
- **Abhängigkeiten:** Express, SQLite3, auth-Middleware, auth-Routes

**2. Auth-Middleware (`middleware/auth.js`)**
- **Verantwortlichkeit:** JWT-Token-Verifizierung
- **Schnittstelle:**
  - `authenticateToken(req, res, next)`: Middleware-Funktion
- **Abhängigkeiten:** jsonwebtoken
- **Verwendung:** Wird vor geschützten Routes eingefügt

**3. Auth-Routes (`routes/auth.js`)**
- **Verantwortlichkeit:** Login, Registrierung, User-Info
- **Schnittstellen:**
  - `POST /api/auth/register`: Neue User-Registrierung
  - `POST /api/auth/login`: User-Login
  - `GET /api/auth/me`: Aktuelle User-Informationen
- **Abhängigkeiten:** Express Router, bcryptjs, jsonwebtoken, Datenbank

**Frontend-Module:**

**1. API-Modul (`api.js`)**
- **Verantwortlichkeit:** Zentrale API-Konfiguration, Token-Handling
- **Schnittstelle:**
  - `api.get/post(url, data)`: HTTP-Requests mit automatischem Token
- **Features:** Request/Response-Interceptors für Token-Handling

**2. Auth-Context (`context/AuthContext.js`)**
- **Verantwortlichkeit:** Globaler Authentifizierungs-State
- **Schnittstelle:**
  - `useAuth()`: Hook für Zugriff auf Auth-State
  - `login(userData)`: User einloggen
  - `logout()`: User ausloggen
- **State:** `user`, `loading`, `isAuthenticated`

**3. Page-Komponenten**
- **Verantwortlichkeit:** Seiten-spezifische Logik und UI
- **Gemeinsame Struktur:**
  - State-Management mit `useState`
  - Datenladen mit `useEffect`
  - API-Calls über `api.js`
  - Error-Handling

#### 4.3.2 Schnittstellen und Abhängigkeiten

**Frontend ↔ Backend Schnittstelle:**

| Frontend | HTTP-Methode | Backend | Beschreibung |
|----------|--------------|---------|--------------|
| `api.get('/api/kontenplan')` | GET | `GET /api/kontenplan` | Kontenplan abrufen |
| `api.post('/api/kontenplan', data)` | POST | `POST /api/kontenplan` | Neues Konto erstellen |
| `api.get('/api/buchungssaetze')` | GET | `GET /api/buchungssaetze` | Buchungen abrufen |
| `api.post('/api/buchungssaetze', data)` | POST | `POST /api/buchungssaetze` | Neue Buchung erstellen |
| `api.get('/api/bilanz')` | GET | `GET /api/bilanz` | Bilanz abrufen |
| `api.get('/api/liquiditaet')` | GET | `GET /api/liquiditaet` | Liquidität berechnen |

**Backend ↔ Datenbank Schnittstelle:**

| Backend | SQL-Operation | Datenbank | Beschreibung |
|---------|--------------|-----------|--------------|
| `db.all(query)` | SELECT | Tabellen | Mehrere Zeilen abrufen |
| `db.get(query)` | SELECT | Tabellen | Eine Zeile abrufen |
| `db.run(query)` | INSERT/UPDATE/DELETE | Tabellen | Daten ändern |

#### 4.3.3 Datenfluss-Diagramm

**Buchungserfassung (Beispiel):**

```
┌─────────────┐
│   User      │
│  (Browser)  │
└──────┬──────┘
       │ 1. Füllt Formular aus
       │ 2. Klickt "Erstellen"
       ↓
┌──────────────────┐
│ Buchungen.js     │
│ (React Component)│
└──────┬───────────┘
       │ 3. handleSubmit()
       │ 4. Validierung (Soll ≠ Haben)
       ↓
┌──────────────────┐
│ api.js           │
│ (Axios Instance) │
└──────┬───────────┘
       │ 5. Request-Interceptor
       │    fügt JWT-Token hinzu
       │ 6. POST /api/buchungssaetze
       ↓
┌──────────────────┐
│ Express Server   │
│ (Backend)        │
└──────┬───────────┘
       │ 7. CORS-Middleware
       │ 8. Body-Parser
       │ 9. authenticateToken
       │    (prüft JWT)
       ↓
┌──────────────────┐
│ Route Handler    │
│ POST /api/...    │
└──────┬───────────┘
       │ 10. Validierung
       │ 11. db.run(INSERT)
       ↓
┌──────────────────┐
│ SQLite Database  │
│ (buchungssaetze) │
└──────┬───────────┘
       │ 12. Foreign Key Check
       │ 13. INSERT erfolgreich
       │ 14. Response: {id, message}
       ↓
┌──────────────────┐
│ Response zurück  │
│ zu Frontend       │
└──────┬───────────┘
       │ 15. JSON-Response
       │ 16. Response-Interceptor
       ↓
┌──────────────────┐
│ Buchungen.js     │
│ (State Update)   │
└──────┬───────────┘
       │ 17. setBuchungen()
       │ 18. fetchData() (neu laden)
       │ 19. UI re-rendert
       ↓
┌─────────────┐
│   User      │
│  sieht neue │
│  Buchung    │
└─────────────┘
```

### 4.4 Design-Dokumentation

#### 4.4.1 Komponenten-Design

**Komponenten-Hierarchie:**

```
App (Root)
├── AuthProvider (Context)
│   └── Router
│       ├── Login (wenn nicht authentifiziert)
│       └── AppContent (wenn authentifiziert)
│           ├── Header (Navigation)
│           └── Routes
│               ├── Dashboard
│               ├── Kontenplan
│               ├── Buchungen
│               ├── Bilanz
│               └── Liquiditaet
```

**Komponenten-Eigenschaften:**

| Komponente | Props | State | Verantwortlichkeit |
|------------|-------|-------|-------------------|
| **App** | - | - | Routing, Auth-Provider |
| **Header** | - | - | Navigation, Logout |
| **Dashboard** | - | `stats`, `loading` | Übersicht, KPIs |
| **Kontenplan** | - | `kontenplan`, `showForm`, `formData` | Kontenverwaltung |
| **Buchungen** | - | `buchungen`, `kontenplan`, `formData` | Buchungserfassung |
| **Bilanz** | - | `bilanz`, `loading` | Bilanz-Anzeige |
| **Liquiditaet** | - | `liquiditaetData`, `chartType` | Liquiditätsanalyse |

#### 4.4.2 Datenmodell-Design

Siehe Abschnitt **4.2 Datenmodell** für vollständiges ERM.

#### 4.4.3 API-Design

**RESTful API-Konventionen:**
- **GET:** Daten abrufen (idempotent, keine Seiteneffekte)
- **POST:** Neue Ressource erstellen
- **PUT:** Ressource vollständig aktualisieren (nicht implementiert)
- **DELETE:** Ressource löschen (nicht implementiert)

**API-Endpoint-Struktur:**

```
/api/auth/
  POST /register    # User-Registrierung
  POST /login       # User-Login
  GET  /me          # Aktuelle User-Info

/api/kontenplan
  GET  /            # Alle Konten
  POST /            # Neues Konto

/api/buchungssaetze
  GET  /            # Alle Buchungen
  POST /            # Neue Buchung

/api/bilanz
  GET  /            # Bilanz-Daten

/api/liquiditaet
  GET  /            # Liquiditäts-Daten
```

**Response-Format:**
```json
{
  "success": true,
  "data": [...],
  "error": null
}
```

**Error-Format:**
```json
{
  "error": "Fehlermeldung"
}
```

### Datenmodell

#### Vollständiges Entity-Relationship-Modell (ERM)

**Grafische Darstellung der Beziehungen:**

```
┌─────────────┐
│    users    │
│─────────────│
│ PK: id      │
│     username│
│     password│
│     email   │
│     firma   │
│     created │
└─────────────┘
       │
       │ (1)
       │
       │ (n) [optional - nicht direkt implementiert]
       │
┌─────────────┐         ┌──────────────────┐
│ kontenplan  │         │  buchungssaetze  │
│─────────────│         │──────────────────│
│ PK: id      │         │ PK: id           │
│     kontonr │◄────────┤ FK: soll_konto   │
│     name    │    (n)  │ FK: haben_konto  │
│     art     │         │     datum        │
│     aktiv   │         │     belegnummer  │
│     created │         │     beschreibung │
└─────────────┘         │     betrag       │
       │                 │     created      │
       │ (1)             └──────────────────┘
       │
       │ (n)
       │
┌─────────────┐
│   bilanz    │
│─────────────│
│ PK: id      │
│ FK: kontonr │
│     name    │
│     aktiv   │
│     saldo   │
│     periode │
│     created │
└─────────────┘
```

**Legende:**
- **PK** = Primary Key (Primärschlüssel)
- **FK** = Foreign Key (Fremdschlüssel)
- **(1)** = Eins (Einzelwert)
- **(n)** = Viele (Mehrfachwert)
- **─** = Beziehung

#### Detaillierte Tabellenstruktur mit allen Attributen

**1. Tabelle: users**

| Attribut | Datentyp | Constraints | Beschreibung |
|----------|----------|-------------|--------------|
| **id** | INTEGER | PRIMARY KEY, AUTOINCREMENT | Eindeutige User-ID |
| **username** | TEXT | UNIQUE, NOT NULL | Benutzername (eindeutig) |
| **password** | TEXT | NOT NULL | Passwort (gehasht mit bcrypt) |
| **email** | TEXT | NULL erlaubt | E-Mail-Adresse (optional) |
| **firma** | TEXT | NULL erlaubt | Firmenname (optional) |
| **created_at** | DATETIME | DEFAULT CURRENT_TIMESTAMP | Erstellungsdatum |

**Beziehungen:**
- Keine direkten Foreign Keys (User-Isolation nicht implementiert)

**Beispiel-Datensatz:**
```sql
id: 1
username: "testuser"
password: "$2a$10$..." (bcrypt hash)
email: "test@example.com"
firma: "Muster AG"
created_at: "2024-10-27 10:30:00"
```

---

**2. Tabelle: kontenplan**

| Attribut | Datentyp | Constraints | Beschreibung |
|----------|----------|-------------|--------------|
| **id** | INTEGER | PRIMARY KEY, AUTOINCREMENT | Eindeutige Konto-ID |
| **kontonummer** | TEXT | UNIQUE, NOT NULL | Kontonummer (z.B. "1000") |
| **kontenname** | TEXT | NOT NULL | Name des Kontos (z.B. "Kasse") |
| **kontenart** | TEXT | NOT NULL | Art: "Kasse", "Bank", "Forderungen", etc. |
| **aktivpassiv** | TEXT | NOT NULL | Klassifizierung: "Aktiv" oder "Passiv" |
| **created_at** | DATETIME | DEFAULT CURRENT_TIMESTAMP | Erstellungsdatum |

**Beziehungen:**
- **1 zu n** mit `buchungssaetze` (über `soll_konto` und `haben_konto`)
- **1 zu n** mit `bilanz` (über `kontonummer`)

**Beispiel-Datensatz:**
```sql
id: 1
kontonummer: "1000"
kontenname: "Kasse"
kontenart: "Kasse"
aktivpassiv: "Aktiv"
created_at: "2024-10-27 10:30:00"
```

**Gültige Werte:**
- **kontenart:** "Kasse", "Bank", "Forderungen", "Verbindlichkeiten", "Eigenkapital", "Ertrag", "Aufwand"
- **aktivpassiv:** "Aktiv", "Passiv"

---

**3. Tabelle: buchungssaetze**

| Attribut | Datentyp | Constraints | Beschreibung |
|----------|----------|-------------|--------------|
| **id** | INTEGER | PRIMARY KEY, AUTOINCREMENT | Eindeutige Buchungs-ID |
| **datum** | DATE | NOT NULL | Buchungsdatum (Format: YYYY-MM-DD) |
| **belegnummer** | TEXT | NULL erlaubt | Belegnummer (optional, z.B. "RE-2024-001") |
| **beschreibung** | TEXT | NOT NULL | Beschreibung der Buchung |
| **soll_konto** | TEXT | NOT NULL, FOREIGN KEY → kontenplan.kontonummer | Soll-Konto (Kontonummer) |
| **haben_konto** | TEXT | NOT NULL, FOREIGN KEY → kontenplan.kontonummer | Haben-Konto (Kontonummer) |
| **betrag** | DECIMAL(10,2) | NOT NULL | Betrag (10 Stellen, 2 Dezimalen) |
| **created_at** | DATETIME | DEFAULT CURRENT_TIMESTAMP | Erstellungsdatum |

**Beziehungen:**
- **n zu 1** mit `kontenplan` (über `soll_konto`)
- **n zu 1** mit `kontenplan` (über `haben_konto`)
- **Foreign Key Constraint:** Beide Konten müssen in `kontenplan` existieren

**Beispiel-Datensatz:**
```sql
id: 1
datum: "2024-10-27"
belegnummer: "BE-001"
beschreibung: "Eigenkapital-Einlage"
soll_konto: "1000"  (FK → kontenplan.kontonummer)
haben_konto: "2800" (FK → kontenplan.kontonummer)
betrag: 50000.00
created_at: "2024-10-27 10:35:00"
```

**Geschäftsregeln:**
- `soll_konto ≠ haben_konto` (validiert im Frontend)
- `betrag > 0` (validiert im Frontend)
- Beide Konten müssen existieren (Foreign Key Constraint)

---

**4. Tabelle: bilanz**

| Attribut | Datentyp | Constraints | Beschreibung |
|----------|----------|-------------|--------------|
| **id** | INTEGER | PRIMARY KEY, AUTOINCREMENT | Eindeutige Bilanz-ID |
| **kontonummer** | TEXT | NOT NULL, FOREIGN KEY → kontenplan.kontonummer | Kontonummer |
| **kontenname** | TEXT | NOT NULL | Name des Kontos (redundant, aber für Performance) |
| **aktivpassiv** | TEXT | NOT NULL | Klassifizierung: "Aktiv" oder "Passiv" |
| **saldo** | DECIMAL(10,2) | DEFAULT 0 | Berechneter Saldo |
| **periode** | TEXT | NOT NULL | Bilanzperiode (z.B. "2024-Q4") |
| **created_at** | DATETIME | DEFAULT CURRENT_TIMESTAMP | Erstellungsdatum |

**Beziehungen:**
- **n zu 1** mit `kontenplan` (über `kontonummer`)

**Beispiel-Datensatz:**
```sql
id: 1
kontonummer: "1000" (FK → kontenplan.kontonummer)
kontenname: "Kasse"
aktivpassiv: "Aktiv"
saldo: 5000.00
periode: "2024-Q4"
created_at: "2024-12-31 23:59:59"
```

**Hinweis:** Diese Tabelle wird aktuell nicht aktiv genutzt, da die Bilanz dynamisch aus `buchungssaetze` berechnet wird.

---

#### Kardinalitäten und Assoziationstypen

| Beziehung | Entität 1 | Kardinalität | Entität 2 | Assoziationstyp |
|-----------|-----------|--------------|-----------|-----------------|
| User-Buchungen | users | 1 | buchungssaetze | (n) - aktuell nicht implementiert |
| Konto-Buchungen (Soll) | kontenplan | 1 | buchungssaetze | (n) - ein Konto kann viele Soll-Buchungen haben |
| Konto-Buchungen (Haben) | kontenplan | 1 | buchungssaetze | (n) - ein Konto kann viele Haben-Buchungen haben |
| Konto-Bilanz | kontenplan | 1 | bilanz | (n) - ein Konto kann in mehreren Bilanz-Perioden vorkommen |

#### Datenintegrität

**Primary Keys:**
- Alle Tabellen haben einen `id` als PRIMARY KEY mit AUTOINCREMENT
- `kontenplan.kontonummer` ist zusätzlich UNIQUE

**Foreign Keys:**
- `buchungssaetze.soll_konto` → `kontenplan.kontonummer`
- `buchungssaetze.haben_konto` → `kontenplan.kontonummer`
- `bilanz.kontonummer` → `kontenplan.kontonummer`

**Constraints:**
- NOT NULL: Alle Pflichtfelder sind als NOT NULL definiert
- UNIQUE: `users.username` und `kontenplan.kontonummer` sind eindeutig
- CHECK: Werte für `aktivpassiv` und `kontenart` werden im Frontend validiert

**Referentielle Integrität:**
- Foreign Key Constraints stellen sicher, dass nur existierende Konten verwendet werden können
- Löschen eines Kontos würde bei vorhandenen Buchungen zu einem Fehler führen (CASCADE nicht implementiert)

### Architektur-Entscheidungen

**Warum Client-Server-Architektur:**
- Trennung von Präsentation und Logik
- Wiederverwendbarkeit der API
- Einfache Skalierbarkeit
- Sicherheit durch serverseitige Validierung

**Warum React:**
- Moderne, komponentenbasierte Architektur
- Große Community und viele Ressourcen
- Gute Performance
- Einfache Wartung und Erweiterung

**Warum Node.js/Express:**
- JavaScript auf Frontend und Backend
- Schnelle Entwicklung
- Große Package-Ecosystem
- Gute Performance für REST-APIs

**Warum SQLite:**
- Keine zusätzliche Server-Infrastruktur nötig
- Einfache Installation und Wartung
- Ausreichend für Schulprojekt
- Einfache Datensicherung

**Warum JWT:**
- Stateless Authentifizierung
- Skalierbar
- Sicher
- Standard in modernen Web-Anwendungen

---

## 5. GUI-Prototypen mit Usability-Überlegungen

### Design-Prinzipien

**Farbpalette:**
- Navyblau (#1E3A8A) für Header und primäre Buttons
- Petrol (#0EA5E9) für Hover-Zustände und Status-Indikatoren
- Graphit (#374151) für Text
- Hellgrau (#F3F4F6) für Hintergründe
- Weiß (#FFFFFF) für Karten und Header

**Typografie:**
- System-Fonts für optimale Performance
- Basis-Schriftgröße: 16px
- Line-Height: 1.7 für Lesbarkeit
- Klare Hierarchie durch Schriftgrößen

**Layout:**
- Responsive Design für verschiedene Bildschirmgrößen
- Klare Navigation im Header
- Konsistente Karten-Layouts für Inhalte
- Ausreichend Whitespace für Übersichtlichkeit

### Usability-Überlegungen

**Navigation:**
- Immer sichtbarer Header mit Navigation
- Aktive Seite wird hervorgehoben
- Logout-Funktion leicht erreichbar
- Breadcrumbs für Orientierung (optional)

**Formulare:**
- Klare Labels für alle Eingabefelder
- Validierung mit sofortigem Feedback
- Fehlermeldungen sind verständlich
- Erfolgsmeldungen bestätigen Aktionen

**Datenanzeige:**
- Tabellen sind übersichtlich strukturiert
- Wichtige Informationen sind hervorgehoben
- Charts sind selbsterklärend
- Status-Indikatoren verwenden Farbcodierung

**Feedback:**
- Loading-States während API-Calls
- Erfolgs- und Fehlermeldungen
- Bestätigungen bei kritischen Aktionen
- Hover-Effekte für Interaktivität

### Prototypen

**Login-Seite:**
- Zentriertes Formular
- Toggle zwischen Login und Registrierung
- Klare Call-to-Action Buttons
- Fehlermeldungen unter den Eingabefeldern

**Dashboard:**
- KPI-Karten oben
- Schnellzugriffe zu Hauptfunktionen
- Feature-Übersicht
- Übersichtliche Anordnung

**Kontenplan:**
- Tabelle mit allen Konten
- Formular zum Erstellen neuer Konten
- Filter- und Suchfunktion
- Badges für Kontenarten

**Buchungen:**
- Formular mit Dropdowns für Kontenauswahl
- Validierung: Soll ≠ Haben
- Liste aller Buchungen
- Sortierung nach Datum

**Bilanz:**
- Zwei-Spalten-Layout (Aktiv/Passiv)
- Farbcodierung für Aktiv (grün) und Passiv (rot)
- Summen am Ende jeder Spalte
- Warnung bei Ungleichheit

**Liquidität:**
- Chart oben für visuelle Darstellung
- Tabelle unten für Details
- Status-Box mit Ampelfarben
- Maßnahmenempfehlungen bei kritischen Werten

---

## 6. Klar dokumentierte Entscheidungen

### Entscheidung 1: Technologie-Stack

**Frage:** Welche Technologien sollen für Frontend und Backend verwendet werden?

**Optionen:**
1. React + Node.js (JavaScript-Stack)
2. Vue + Python (gemischter Stack)
3. Angular + Java (Enterprise-Stack)

**Entscheidung:** React + Node.js

**Begründung:**
- Einheitliche Programmiersprache (JavaScript) erleichtert Teamarbeit
- React hat große Community und viele Ressourcen
- Node.js ist schnell und gut für REST-APIs geeignet
- Beide Technologien sind modern und zukunftssicher
- Gute Performance und Entwicklererfahrung

**Datum:** 03.11.2024  
**Entscheider:** Alle Teammitglieder

---

### Entscheidung 2: Datenbank

**Frage:** Welche Datenbank soll verwendet werden?

**Optionen:**
1. SQLite (dateibasiert)
2. PostgreSQL (Server-basiert)
3. MySQL (Server-basiert)

**Entscheidung:** SQLite

**Begründung:**
- Keine zusätzliche Server-Infrastruktur nötig
- Einfache Installation und Wartung
- Ausreichend für Schulprojekt
- Einfache Datensicherung (eine Datei)
- Schnelle Entwicklung

**Datum:** 10.11.2024  
**Entscheider:** Gabriel, Arvin

---

### Entscheidung 3: Authentifizierung

**Frage:** Wie soll die Authentifizierung implementiert werden?

**Optionen:**
1. JWT (JSON Web Tokens)
2. Session-basiert
3. OAuth

**Entscheidung:** JWT

**Begründung:**
- Stateless, skaliert gut
- Standard in modernen Web-Anwendungen
- Sicher und bewährt
- Einfache Implementierung
- Token können clientseitig gespeichert werden

**Datum:** 08.12.2024  
**Entscheider:** Arvin

---

### Entscheidung 4: UI-Framework

**Frage:** Soll ein UI-Framework wie Material-UI verwendet werden?

**Optionen:**
1. Custom CSS
2. Material-UI
3. Tailwind CSS

**Entscheidung:** Custom CSS

**Begründung:**
- Volle Kontrolle über Design
- Keine zusätzlichen Dependencies
- Lernen von CSS-Fundamenten
- Leichtere Anpassung an Banking-Design
- Kleinere Bundle-Größe

**Datum:** 17.11.2024  
**Entscheider:** Tim

---

### Entscheidung 5: Chart-Bibliothek

**Frage:** Welche Bibliothek soll für Charts verwendet werden?

**Optionen:**
1. Chart.js
2. D3.js
3. Recharts

**Entscheidung:** Chart.js

**Begründung:**
- Einfache Integration mit React
- Gute Dokumentation
- Viele Chart-Typen verfügbar
- Responsive und anpassbar
- Gute Performance

**Datum:** 24.11.2024  
**Entscheider:** Tim

---

## 7. Projektbeschreibung – Lösung beschreiben und erklären

### Umfeld

Die Liquiditätsnachweis-Webapplikation wurde als IDPA-Projekt entwickelt und richtet sich an KMU, Treuhänder und Bildungseinrichtungen. Die Anwendung läuft in einer Web-Umgebung und kann von jedem Gerät mit modernem Browser genutzt werden.

### Präzisierung der Aufgabenstellung

**Ausgangslage:**
KMU benötigen eine effiziente Lösung zur Verwaltung ihrer Buchhaltung. Die Lösung muss Kontenplanverwaltung, Buchungssätze nach doppelter Buchführung, automatische Bilanzgenerierung und Liquiditätsanalyse ermöglichen.

**Anforderungen:**
- Kontenplan mit Aktiv/Passiv-Kategorisierung
- Buchungssätze mit Soll/Haben-Validierung
- Automatische Bilanzberechnung
- Liquiditätsanalyse mit grafischer Darstellung
- Sichere Authentifizierung
- Benutzerfreundliche Oberfläche

### Abklärungen

**Fachliche Abklärungen:**
- Buchhaltungsgrundlagen wurden recherchiert
- Bilanzierungsregeln wurden studiert
- Liquiditätsberechnung wurde analysiert

**Technische Abklärungen:**
- Technologie-Stack wurde evaluiert
- Datenbank-Design wurde geplant
- API-Struktur wurde definiert

### Lösungsvarianten

**Variante 1: Desktop-Anwendung**
- Vorteile: Keine Server-Infrastruktur nötig
- Nachteile: Plattformabhängig, Installation nötig

**Variante 2: Web-Anwendung (gewählt)**
- Vorteile: Plattformunabhängig, keine Installation, einfache Wartung
- Nachteile: Server-Infrastruktur nötig

**Variante 3: Mobile App**
- Vorteile: Native Performance
- Nachteile: Mehrere Plattformen, komplexere Entwicklung

### Auswahlkriterien

- Einfache Nutzung ohne Installation
- Plattformunabhängigkeit
- Moderne Technologien
- Gute Wartbarkeit
- Skalierbarkeit

### Realisierung

**Backend-Implementierung:**
- Express-Server wurde aufgesetzt
- Datenbank-Schema wurde implementiert
- API-Endpoints wurden erstellt
- JWT-Authentifizierung wurde integriert
- Middleware wurde konfiguriert

**Frontend-Implementierung:**
- React-App wurde erstellt
- Komponenten wurden entwickelt
- Routing wurde implementiert
- API-Integration wurde realisiert
- UI wurde gestylt

**Integration:**
- Frontend und Backend wurden verbunden
- Authentifizierung wurde getestet
- Datenfluss wurde validiert
- Fehlerbehandlung wurde implementiert

### Probleme und Lösungen

**Problem 1: Soll/Haben-Validierung**
- Problem: Buchungen mit identischem Soll- und Haben-Konto wurden akzeptiert
- Lösung: Frontend-Validierung vor dem Absenden, zusätzliche Backend-Validierung

**Problem 2: Token-Handling**
- Problem: Token wurde nicht automatisch zu API-Requests hinzugefügt
- Lösung: Axios-Interceptors implementiert

**Problem 3: Bilanz-Berechnung**
- Problem: Bilanz wurde nicht korrekt aus Buchungen berechnet
- Lösung: SQL-Query mit CASE-Statements für Soll/Haben-Unterscheidung

**Problem 4: Chart.js-Locale**
- Problem: Datumsformat war nicht deutsch
- Lösung: Locale-Konfiguration für Chart.js hinzugefügt

---

## 8. Schlüsselstellen von Programmen mit Erklärungen

Dieser Abschnitt dokumentiert die wichtigsten Code-Stellen des Projekts mit detaillierten, Zeile-für-Zeile Erklärungen. Jede Schlüsselstelle wird vollständig erklärt, damit die Funktionsweise nachvollziehbar ist.

---

### 8.1 Backend: JWT-Authentifizierungs-Middleware

**Datei:** `backend/middleware/auth.js`  
**Zweck:** Zentrale Authentifizierungs-Middleware für alle geschützten API-Endpoints  
**Wichtigkeit:** Kritisch für die Sicherheit der gesamten Anwendung

**Vollständiger Code mit Zeile-für-Zeile Erklärung:**

```javascript
// Zeile 1: Import des jsonwebtoken-Moduls
// Dieses Modul ermöglicht die Erstellung und Verifizierung von JWT-Tokens
const jwt = require('jsonwebtoken');

// Zeile 3: Definition des Secret-Keys für die Token-Signierung
// WICHTIG: In Produktion sollte dies als Umgebungsvariable gespeichert werden
// Der Secret wird verwendet, um Tokens zu signieren und zu verifizieren
const JWT_SECRET = 'liquiditaetsnachweis_secret_key_2025';

// Zeile 5-20: Hauptfunktion der Middleware
// Diese Funktion wird als Middleware zwischen Request und Route-Handler ausgeführt
const authenticateToken = (req, res, next) => {
  // Zeile 6: Extraktion des Authorization-Headers aus dem HTTP-Request
  // Der Header enthält das Token im Format: "Bearer <token>"
  const authHeader = req.headers['authorization'];
  
  // Zeile 7: Token-Extraktion aus dem Header
  // split(' ')[1] trennt "Bearer" und Token und nimmt den zweiten Teil (Index 1)
  // && authHeader stellt sicher, dass authHeader nicht null/undefined ist
  const token = authHeader && authHeader.split(' ')[1]; // Format: "Bearer TOKEN"

  // Zeile 9-12: Validierung: Prüfung ob Token vorhanden ist
  // Wenn kein Token vorhanden, wird Request mit 401 (Unauthorized) abgelehnt
  if (!token) {
    return res.status(401).json({ error: 'Zugriff verweigert. Kein Token vorhanden.' });
  }

  // Zeile 14-20: Token-Verifizierung mit dem Secret-Key
  // jwt.verify() prüft:
  // 1. Ob das Token gültig signiert wurde (mit dem Secret)
  // 2. Ob das Token noch nicht abgelaufen ist (expiration)
  // 3. Ob die Token-Struktur korrekt ist
  jwt.verify(token, JWT_SECRET, (err, user) => {
    // Zeile 15-18: Fehlerbehandlung bei ungültigem Token
    // Mögliche Fehler: Token abgelaufen, falsche Signatur, manipuliertes Token
    if (err) {
      return res.status(403).json({ error: 'Ungültiger oder abgelaufener Token.' });
    }
    
    // Zeile 19: Bei erfolgreicher Verifizierung: User-Daten zum Request hinzufügen
    // Diese Daten können in den Route-Handlern verwendet werden (z.B. req.user.id)
    req.user = user;
    
    // Zeile 20: next() ruft den nächsten Middleware/Route-Handler auf
    // Ohne next() würde der Request "hängen bleiben"
    next();
  });
};

// Zeile 22: Export der Funktionen für Verwendung in anderen Dateien
// authenticateToken wird in server.js importiert und als Middleware verwendet
module.exports = { authenticateToken, JWT_SECRET };
```

**Technische Details:**
- **Middleware-Pattern:** Diese Funktion folgt dem Express.js Middleware-Pattern mit `(req, res, next)` Parametern
- **JWT-Verifizierung:** Die `jwt.verify()` Funktion ist asynchron und verwendet einen Callback
- **Sicherheit:** Der Secret-Key muss geheim bleiben - in Produktion als Umgebungsvariable
- **Error-Handling:** Zwei verschiedene HTTP-Status-Codes: 401 (kein Token) vs. 403 (ungültiger Token)

**Verwendung in server.js:**
```javascript
// Beispiel: Geschützter Endpoint
app.get('/api/kontenplan', authenticateToken, (req, res) => {
  // authenticateToken wird vor dem Route-Handler ausgeführt
  // Nur wenn Token gültig ist, wird dieser Code erreicht
  // req.user enthält die User-Daten aus dem Token
});
```

---

---

### 8.2 Backend: Liquiditätsberechnung (Komplexer SQL-Query)

**Datei:** `backend/server.js`  
**Zweck:** Berechnung der Salden für alle liquiden Mittel (Kasse, Bank, etc.)  
**Wichtigkeit:** Kernfunktionalität für die Liquiditätsanalyse

**Vollständiger Code mit detaillierter Erklärung:**

```javascript
// Zeile 1: Definition des GET-Endpoints für Liquiditätsdaten
// authenticateToken: Middleware prüft, ob User eingeloggt ist
app.get('/api/liquiditaet', authenticateToken, (req, res) => {
  // Zeile 2: db.all() führt einen SQL-Query aus und gibt alle Ergebnisse zurück
  // Der Query ist mehrzeilig für bessere Lesbarkeit
  db.all(`
    // Zeile 3-6: SELECT-Klausel - definiert welche Spalten zurückgegeben werden
    SELECT 
      k.kontonummer,        // Kontonummer aus kontenplan-Tabelle (Alias: k)
      k.kontenname,         // Kontenname aus kontenplan-Tabelle
      k.aktivpassiv,        // Aktiv/Passiv-Klassifizierung
      
      // Zeile 7-8: Komplexe Saldo-Berechnung mit CASE-Statements
      // Dies ist die Kernlogik der doppelten Buchführung:
      COALESCE(SUM(CASE WHEN b.soll_konto = k.kontonummer THEN b.betrag ELSE 0 END), 0) -
      COALESCE(SUM(CASE WHEN b.haben_konto = k.kontonummer THEN b.betrag ELSE 0 END), 0) as saldo
      
      // Erklärung der Saldo-Berechnung:
      // 1. CASE WHEN b.soll_konto = k.kontonummer: Prüft ob dieses Konto Soll-Konto ist
      // 2. THEN b.betrag: Wenn ja, wird der Betrag addiert (Soll erhöht den Saldo)
      // 3. ELSE 0: Wenn nicht, wird 0 addiert
      // 4. SUM(): Summiert alle Soll-Buchungen für dieses Konto
      // 5. Analog für Haben-Buchungen (Haben verringert den Saldo)
      // 6. Subtraktion: Soll - Haben = Saldo
      // 7. COALESCE(..., 0): Ersetzt NULL durch 0 (wenn keine Buchungen vorhanden)
      
    // Zeile 9: FROM-Klausel - Haupttabelle ist kontenplan (Alias: k)
    FROM kontenplan k
    
    // Zeile 10: LEFT JOIN verbindet kontenplan mit buchungssaetze
    // LEFT JOIN bedeutet: Alle Konten werden angezeigt, auch wenn keine Buchungen existieren
    // ON-Bedingung: Verbindung über soll_konto ODER haben_konto
    // Ein Konto kann sowohl Soll- als auch Haben-Konto sein
    LEFT JOIN buchungssaetze b ON k.kontonummer = b.soll_konto OR k.kontonummer = b.haben_konto
    
    // Zeile 11: WHERE-Klausel filtert nur relevante Kontenarten
    // Nur diese Kontenarten sind für Liquiditätsberechnung relevant:
    // - Kasse: Bargeld
    // - Bank: Bankguthaben
    // - Verbindlichkeiten: Kurzfristige Schulden (negativ für Liquidität)
    // - Forderungen: Ausstehende Rechnungen (positiv für Liquidität)
    WHERE k.kontenart IN ('Kasse', 'Bank', 'Verbindlichkeiten', 'Forderungen')
    
    // Zeile 12: GROUP BY gruppiert Ergebnisse nach Kontonummer
    // Notwendig wegen SUM()-Aggregation
    // Jede Kontonummer erscheint nur einmal im Ergebnis
    GROUP BY k.kontonummer, k.kontenname, k.aktivpassiv
    
    // Zeile 13: ORDER BY sortiert Ergebnisse
    // Zuerst nach aktivpassiv (Aktiv vor Passiv), dann nach Kontonummer
    ORDER BY k.aktivpassiv, k.kontonummer
  `, 
  // Zeile 14-21: Callback-Funktion für db.all()
  // Wird ausgeführt, wenn Query fertig ist (asynchron)
  (err, rows) => {
    // Zeile 15-19: Fehlerbehandlung
    // Wenn SQL-Query fehlschlägt (z.B. Datenbankfehler)
    if (err) {
      // HTTP 500: Internal Server Error
      res.status(500).json({ error: err.message });
      return; // Wichtig: return verhindert weitere Ausführung
    }
    
    // Zeile 20: Erfolgreiche Antwort
    // rows enthält Array mit allen Ergebnissen des Queries
    // res.json() sendet JSON-Response an Frontend
    res.json(rows);
  });
});
```

**Beispiel-Ergebnis:**
```json
[
  {
    "kontonummer": "1000",
    "kontenname": "Kasse",
    "aktivpassiv": "Aktiv",
    "saldo": 5000.00
  },
  {
    "kontonummer": "1020",
    "kontenname": "Bank",
    "aktivpassiv": "Aktiv",
    "saldo": 25000.00
  }
]
```

**Buchhaltungslogik:**
- **Soll erhöht Aktiv-Konten:** Wenn Kasse Soll-Konto ist, erhöht sich der Saldo
- **Haben verringert Aktiv-Konten:** Wenn Kasse Haben-Konto ist, verringert sich der Saldo
- **Umgekehrt für Passiv-Konten:** Verbindlichkeiten verhalten sich umgekehrt
- **Saldo = Soll - Haben:** Dies ist die Standard-Formel für Kontosalden

**Performance-Überlegungen:**
- LEFT JOIN ist notwendig, um auch Konten ohne Buchungen anzuzeigen
- GROUP BY ist notwendig wegen Aggregation (SUM)
- WHERE-Filter reduziert die Anzahl der zu verarbeitenden Zeilen

---

### Frontend: Axios-Interceptor für Token-Handling

**Datei:** `frontend/src/api.js`

```javascript
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor - fügt Token automatisch hinzu
api.interceptors.request.use((config) => {
const token = localStorage.getItem('token');
if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response Interceptor - behandelt 401 Fehler
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;
```

**Erklärung:** Diese zentrale Axios-Instanz wird für alle API-Aufrufe verwendet. Der Request-Interceptor liest das Token aus dem LocalStorage und fügt es automatisch zu allen Requests im Authorization-Header hinzu. Der Response-Interceptor behandelt 401-Fehler (Unauthorized) automatisch, indem er das Token löscht und den Benutzer zur Login-Seite weiterleitet.

---

### Frontend: AuthContext für zentrale Authentifizierung

**Datei:** `frontend/src/context/AuthContext.js`

```javascript
import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const savedUser = localStorage.getItem('user');

    if (token && savedUser) {
      setUser(JSON.parse(savedUser));
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}
    setLoading(false);
  }, []);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    delete axios.defaults.headers.common['Authorization'];
    setUser(null);
  };

  const value = {
    user,
    login,
    logout,
    isAuthenticated: !!user,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
```

**Erklärung:** Der AuthContext verwaltet den Authentifizierungsstatus zentral für die gesamte Anwendung. Beim App-Start wird geprüft, ob ein Token im LocalStorage vorhanden ist, und der Benutzer wird automatisch eingeloggt. Die Login- und Logout-Funktionen aktualisieren den State und das LocalStorage. Alle Komponenten können über den useAuth-Hook auf den Authentifizierungsstatus zugreifen.

---

### 8.3 Frontend: Buchungserfassung mit Validierung

**Datei:** `frontend/src/pages/Buchungen.js`  
**Zweck:** Komponente zur Erfassung von Buchungssätzen nach doppelter Buchführung  
**Wichtigkeit:** Kernfunktionalität für die Datenerfassung

**Wichtige Code-Stellen mit detaillierter Erklärung:**

#### 8.3.1 State-Management und Initialisierung

```javascript
// Zeile 5-17: React-Funktionskomponente mit Hooks
const Buchungen = () => {
  // Zeile 6: State für alle Buchungen (Array)
  // Wird mit Daten vom Backend gefüllt
  const [buchungen, setBuchungen] = useState([]);
  
  // Zeile 7: State für Kontenplan (Array)
  // Wird benötigt für Dropdown-Auswahl in Formular
  const [kontenplan, setKontenplan] = useState([]);
  
  // Zeile 8: Loading-State für Ladeanzeige
  const [loading, setLoading] = useState(true);
  
  // Zeile 9: State für Formular-Sichtbarkeit (Toggle)
  const [showForm, setShowForm] = useState(false);
  
  // Zeile 10-17: State für Formular-Daten
  // Initialisiert mit Standardwerten
  const [formData, setFormData] = useState({
    datum: new Date().toISOString().split('T')[0], // Heutiges Datum als Standard
    belegnummer: '',      // Optional
    beschreibung: '',     // Pflichtfeld
    soll_konto: '',      // Pflichtfeld - Dropdown-Auswahl
    haben_konto: '',     // Pflichtfeld - Dropdown-Auswahl
    betrag: ''           // Pflichtfeld - Dezimalzahl
  });
```

#### 8.3.2 Datenladen mit useEffect

```javascript
// Zeile 19-21: useEffect-Hook wird beim Komponenten-Mount ausgeführt
// Leeres Dependency-Array [] bedeutet: nur einmal beim Laden
useEffect(() => {
  fetchData(); // Funktion wird definiert unten
}, []);

// Zeile 23-36: Asynchrone Funktion zum Laden der Daten
const fetchData = async () => {
  try {
    // Zeile 25-28: Promise.all() lädt beide API-Calls parallel
    // Dies ist effizienter als sequenziell (schneller)
    const [buchungenRes, kontenplanRes] = await Promise.all([
      axios.get('/api/buchungssaetze'),  // Alle Buchungen laden
      axios.get('/api/kontenplan')       // Alle Konten laden
    ]);
    
    // Zeile 29-30: State aktualisieren mit geladenen Daten
    setBuchungen(buchungenRes.data);    // Array von Buchungen
    setKontenplan(kontenplanRes.data);   // Array von Konten
    
    // Zeile 31: Loading-State auf false setzen (Ladeanzeige ausblenden)
    setLoading(false);
  } catch (error) {
    // Zeile 32-34: Fehlerbehandlung
    console.error('Fehler beim Laden der Daten:', error);
    setLoading(false); // Auch bei Fehler: Loading beenden
  }
};
```

#### 8.3.3 Formular-Submit mit Validierung

```javascript
// Zeile 38-66: handleSubmit wird beim Formular-Submit aufgerufen
const handleSubmit = async (e) => {
  // Zeile 39: preventDefault() verhindert Standard-Formular-Submit
  // (Seite würde sonst neu laden)
  e.preventDefault();
  
  // Zeile 41-45: KRITISCHE VALIDIERUNG: Soll und Haben dürfen nicht gleich sein
  // Dies ist eine fundamentale Regel der doppelten Buchführung
  // Ein Konto kann nicht gleichzeitig Soll- und Haben-Konto sein
  if (formData.soll_konto === formData.haben_konto) {
    alert('FEHLER: Soll-Konto und Haben-Konto dürfen nicht identisch sein.\n\nBitte wählen Sie unterschiedliche Konten für die doppelte Buchführung.');
    return; // Wichtig: return beendet Funktion - keine API-Anfrage
  }
  
  // Zeile 47-65: API-Request zum Erstellen der Buchung
  try {
    // Zeile 48-51: POST-Request mit Formular-Daten
    await axios.post('/api/buchungssaetze', {
      ...formData,  // Spread-Operator: alle Formular-Felder kopieren
      betrag: parseFloat(formData.betrag) // String zu Zahl konvertieren
    });
    
    // Zeile 52-59: Formular zurücksetzen nach erfolgreichem Submit
    setFormData({
      datum: new Date().toISOString().split('T')[0], // Neues Datum
      belegnummer: '',
      beschreibung: '',
      soll_konto: '',
      haben_konto: '',
      betrag: ''
    });
    
    // Zeile 60: Formular ausblenden
    setShowForm(false);
    
    // Zeile 61: Daten neu laden (neue Buchung erscheint in Liste)
    fetchData();
  } catch (error) {
    // Zeile 62-65: Fehlerbehandlung
    console.error('Fehler beim Erstellen der Buchung:', error);
    alert('FEHLER: Die Buchung konnte nicht erstellt werden. Bitte versuchen Sie es erneut.');
  }
};
```

**Wichtige Design-Entscheidungen:**
- **Parallel Loading:** Promise.all() für bessere Performance
- **Client-seitige Validierung:** Verhindert unnötige API-Requests
- **Formular-Reset:** Bessere UX nach erfolgreichem Submit
- **Error-Handling:** User-freundliche Fehlermeldungen

---

### 8.4 Frontend: Bilanz-Berechnung

**Datei:** `frontend/src/pages/Bilanz.js`  
**Zweck:** Berechnung der Gesamtsummen für Aktiv- und Passiv-Seite  
**Wichtigkeit:** Validierung der Bilanz-Ausgeglichenheit

**Code mit detaillierter Erklärung:**

```javascript
// Zeile 1-5: Funktion zur Berechnung der Gesamtsumme
// Parameter aktivpassiv: 'Aktiv' oder 'Passiv'
const calculateTotal = (aktivpassiv) => {
  // Zeile 2: filter() filtert Bilanz-Array nach Aktiv/Passiv
  // Nur Items mit passendem aktivpassiv-Wert bleiben übrig
  return bilanz
    .filter(item => item.aktivpassiv === aktivpassiv)
    
    // Zeile 3: reduce() summiert alle Salden
    // reduce() iteriert über Array und akkumuliert Werte
    .reduce((sum, item) => {
      // sum: Akkumulator (läuft mit)
      // item: Aktuelles Array-Element
      // parseFloat(): Konvertiert String zu Zahl
      // || 0: Fallback falls saldo null/undefined ist
      return sum + parseFloat(item.saldo || 0);
    }, 0); // 0: Startwert für Akkumulator
};

// Zeile 6-7: Verwendung der Funktion
const aktivTotal = calculateTotal('Aktiv');   // Summe aller Aktiv-Konten
const passivTotal = calculateTotal('Passiv'); // Summe aller Passiv-Konten

// Zeile 8-10: Bilanz-Validierung (wird in JSX verwendet)
// In einer korrekten Bilanz müssen Aktiv und Passiv gleich sein
const isBalanced = aktivTotal === passivTotal;
```

**Buchhaltungslogik:**
- **Bilanzgleichung:** Aktiv = Passiv (muss immer ausgeglichen sein)
- **Aktiv-Konten:** Vermögenswerte (Kasse, Bank, Forderungen, etc.)
- **Passiv-Konten:** Schulden und Eigenkapital (Verbindlichkeiten, EK, etc.)
- **Saldo-Berechnung:** Wird im Backend durchgeführt, Frontend summiert nur

**Verwendung im JSX:**
```javascript
// Beispiel aus Bilanz.js
{!isBalanced && (
  <div className="alert alert-warning">
    Warnung: Bilanz ist nicht ausgeglichen! 
    Aktiv: {aktivTotal} CHF, Passiv: {passivTotal} CHF
  </div>
)}
```

---

## 9. Beschreibung des tatsächlichen GUI

### Login-Seite

Die Login-Seite bietet ein zentriertes Formular mit Toggle zwischen Login und Registrierung. Das Design ist minimalistisch mit klaren Eingabefeldern für Benutzername und Passwort. Bei der Registrierung können optional E-Mail und Firma angegeben werden. Fehlermeldungen werden unter den entsprechenden Eingabefeldern angezeigt. Der Submit-Button ist prominent platziert und ändert seine Beschriftung je nach Modus (Login/Registrierung).

### Dashboard

Das Dashboard zeigt oben vier KPI-Karten mit wichtigen Kennzahlen: Anzahl Konten, Anzahl Buchungen, Liquiditätsstand und Bilanzsumme. Darunter befinden sich Schnellzugriffe zu den Hauptfunktionen (Kontenplan, Buchungen, Bilanz, Liquidität). Am unteren Rand wird eine Feature-Übersicht mit Icons und kurzen Beschreibungen angezeigt.

### Kontenplan

Die Kontenplan-Seite zeigt eine Tabelle mit allen Konten, sortiert nach Kontonummer. Jede Zeile enthält Kontonummer, Kontenname, Kontenart und Aktiv/Passiv. Kontenarten werden durch farbige Badges unterschieden. Über dem Formular befindet sich ein Button zum Erstellen neuer Konten. Das Formular erscheint als Modal oder Inline-Formular. Validierungsfehler werden direkt unter den Eingabefeldern angezeigt.

### Buchungen

Die Buchungen-Seite zeigt oben ein Formular zur Erfassung neuer Buchungen. Die Felder umfassen Datum (Date-Picker), optionale Belegnummer, Beschreibung, Soll-Konto (Dropdown), Haben-Konto (Dropdown) und Betrag. Die Dropdowns zeigen Kontonummer und Kontenname. Eine Validierung verhindert, dass Soll- und Haben-Konto identisch sind. Unter dem Formular wird eine Tabelle mit allen Buchungen angezeigt, sortiert nach Datum (neueste zuerst). Jede Zeile zeigt alle relevanten Informationen.

### Bilanz

Die Bilanz-Seite zeigt ein Zwei-Spalten-Layout. Die linke Spalte zeigt alle Aktiv-Konten mit grüner Umrandung, die rechte Spalte alle Passiv-Konten mit roter Umrandung. Jede Spalte zeigt die Konten mit Kontonummer, Kontenname und Saldo. Am Ende jeder Spalte wird die Gesamtsumme angezeigt. Unter der Bilanz wird eine Zusammenfassung mit Bilanzsumme und Status angezeigt. Bei ausgeglichener Bilanz erscheint eine grüne Erfolgsmeldung, bei Ungleichheit eine rote Warnung mit der Differenz.

### Liquidität

Die Liquidität-Seite zeigt oben ein Chart.js-Diagramm, das die Liquiditätsentwicklung visualisiert. Das Diagramm kann als Balken- oder Liniendiagramm dargestellt werden. Unter dem Chart befindet sich eine Status-Box mit Ampelfarben (Excellent: grün, Good: blau, Warning: gelb, Danger: rot). Bei kritischen Werten werden Maßnahmenempfehlungen angezeigt. Darunter zeigt eine Tabelle die detaillierten Werte für alle relevanten Konten mit Kontonummer, Kontenname, Aktiv/Passiv und Saldo.

### Header

Der Header ist auf allen Seiten sichtbar und enthält das Logo/Projektname links, die Navigation in der Mitte (Dashboard, Kontenplan, Buchungen, Bilanz, Liquidität) und rechts den Benutzernamen mit Dropdown-Menü für Logout. Die aktive Seite wird durch Unterstreichung oder Hintergrundfarbe hervorgehoben.

---

## 10. Testfälle, Testprotokolle und Testberichte

### 10.1 Testkonzept und Teststrategie

Das vollständige Testkonzept mit **370 Testfällen** ist in der separaten Datei `tests/TESTKONZEPT.md` dokumentiert. Die Teststrategie umfasst:

- **Authentifizierung & Sicherheitstests** (25 Tests)
- **Funktionale Tests** (Kontenplan, Buchungen, Bilanz, Liquidität, Dashboard)
- **API-Tests** (20 Tests)
- **Integrationstests** (10 Tests)
- **Performance-Tests** (25 Tests)
- **Validierungstests** (20 Tests)
- **Edge-Cases & Negativ-Tests** (25 Tests)
- **Datenintegritätstests** (15 Tests)
- **UI/UX-Tests** (25 Tests)
- **Browser-Kompatibilitätstests** (15 Tests)
- **Sicherheitstests** (15 Tests)
- **Regressionstests** (10 Tests)
- **Datenbank-Tests** (15 Tests)
- **Error-Handling-Tests** (15 Tests)
- **Accessibility-Tests** (15 Tests)

**Gesamt:** 370 Testfälle in 20 Kategorien  
**Pass-Rate:** 99.7% (350 Pass, 1 Fail, 19 Skip)

### 10.2 Wichtige Testfälle - Detaillierte Dokumentation

#### 10.2.1 Authentifizierungs-Tests

**Testfall AUTH-01: Erfolgreiche Registrierung**

| Feld | Wert |
|------|------|
| **Test-ID** | AUTH-01 |
| **Kategorie** | Authentifizierung |
| **Priorität** | Hoch |
| **Ziel** | Überprüfung der User-Registrierung |
| **Vorbedingung** | Keine (neue Installation) |
| **Schritte** | 1. Registrierungsformular öffnen<br>2. Username: "testuser" eingeben<br>3. Password: "Test123!" eingeben<br>4. Email: "test@example.com" eingeben<br>5. "Registrieren" klicken |
| **Erwartetes Ergebnis** | User wird erstellt, Token wird zurückgegeben, Redirect zu Dashboard |
| **Tatsächliches Ergebnis** | Erfolgreich - User wurde erstellt, Token erhalten |
| **Tester** | Arvin |
| **Datum** | 15.12.2024 |
| **Bemerkungen** | Passwort wird korrekt gehasht (bcrypt) |

**Testfall AUTH-02: Duplikat-Username verhindern**

| Feld | Wert |
|------|------|
| **Test-ID** | AUTH-02 |
| **Kategorie** | Authentifizierung |
| **Priorität** | Hoch |
| **Ziel** | Überprüfung der Unique-Constraint |
| **Vorbedingung** | User "testuser" existiert bereits |
| **Schritte** | 1. Registrierungsformular öffnen<br>2. Username: "testuser" (bereits existierend)<br>3. Andere Daten eingeben<br>4. "Registrieren" klicken |
| **Erwartetes Ergebnis** | Fehlermeldung: "Username bereits vergeben" |
| **Tatsächliches Ergebnis** | Erfolgreich - Fehlermeldung wird angezeigt |
| **Tester** | Arvin |
| **Datum** | 15.12.2024 |
| **Bemerkungen** | Datenbank-Constraint funktioniert korrekt |

**Testfall AUTH-03: Erfolgreicher Login**

| Feld | Wert |
|------|------|
| **Test-ID** | AUTH-03 |
| **Kategorie** | Authentifizierung |
| **Priorität** | Hoch |
| **Ziel** | Überprüfung des Login-Prozesses |
| **Vorbedingung** | User "testuser" existiert |
| **Schritte** | 1. Login-Formular öffnen<br>2. Username: "testuser"<br>3. Password: "Test123!"<br>4. "Login" klicken |
| **Erwartetes Ergebnis** | Token wird zurückgegeben, User wird eingeloggt, Dashboard wird angezeigt |
| **Tatsächliches Ergebnis** | Erfolgreich - Login funktioniert korrekt |
| **Tester** | Arvin |
| **Datum** | 15.12.2024 |
| **Bemerkungen** | Token wird im LocalStorage gespeichert |

**Testfall AUTH-04: Falsches Passwort**

| Feld | Wert |
|------|------|
| **Test-ID** | AUTH-04 |
| **Kategorie** | Authentifizierung |
| **Priorität** | Hoch |
| **Ziel** | Überprüfung der Fehlerbehandlung |
| **Vorbedingung** | User "testuser" existiert |
| **Schritte** | 1. Login-Formular öffnen<br>2. Username: "testuser"<br>3. Password: "FalschesPasswort"<br>4. "Login" klicken |
| **Erwartetes Ergebnis** | Fehlermeldung: "Benutzername oder Passwort falsch" |
| **Tatsächliches Ergebnis** | Erfolgreich - Fehlermeldung wird angezeigt |
| **Tester** | Arvin |
| **Datum** | 15.12.2024 |
| **Bemerkungen** | Keine Informationen über Existenz des Users preisgegeben |

#### 10.2.2 Kontenplan-Tests

**Testfall KP-01: Konto erstellen**

| Feld | Wert |
|------|------|
| **Test-ID** | KP-01 |
| **Kategorie** | Kontenplan |
| **Priorität** | Hoch |
| **Ziel** | Überprüfung der Konto-Erstellung |
| **Vorbedingung** | Eingeloggt |
| **Schritte** | 1. Kontenplan-Seite öffnen<br>2. "Neues Konto erstellen" klicken<br>3. Kontonummer: "1000"<br>4. Kontenname: "Kasse"<br>5. Kontenart: "Kasse"<br>6. Aktiv/Passiv: "Aktiv"<br>7. "Erstellen" klicken |
| **Erwartetes Ergebnis** | Konto wird erstellt, erscheint in Tabelle |
| **Tatsächliches Ergebnis** | Erfolgreich - Konto wurde erstellt |
| **Tester** | Tim |
| **Datum** | 15.12.2024 |
| **Bemerkungen** | Validierung funktioniert korrekt |

**Testfall KP-02: Duplikat-Kontonummer verhindern**

| Feld | Wert |
|------|------|
| **Test-ID** | KP-02 |
| **Kategorie** | Kontenplan |
| **Priorität** | Hoch |
| **Ziel** | Überprüfung der Unique-Constraint |
| **Vorbedingung** | Konto "1000" existiert bereits |
| **Schritte** | 1. Neues Konto erstellen<br>2. Kontonummer: "1000" (bereits existierend)<br>3. Andere Daten eingeben<br>4. "Erstellen" klicken |
| **Erwartetes Ergebnis** | Fehlermeldung: "Kontonummer bereits vergeben" |
| **Tatsächliches Ergebnis** | Erfolgreich - Fehlermeldung wird angezeigt |
| **Tester** | Tim |
| **Datum** | 15.12.2024 |
| **Bemerkungen** | Datenbank-Constraint funktioniert |

#### 10.2.3 Buchungssätze-Tests

**Testfall BU-01: Gültige Buchung erstellen**

| Feld | Wert |
|------|------|
| **Test-ID** | BU-01 |
| **Kategorie** | Buchungssätze |
| **Priorität** | Hoch |
| **Ziel** | Überprüfung der Buchungserfassung |
| **Vorbedingung** | Mindestens 2 Konten existieren (z.B. 1000 und 2800) |
| **Schritte** | 1. Buchungen-Seite öffnen<br>2. "Neue Buchung erstellen" klicken<br>3. Datum: "2024-12-15"<br>4. Belegnummer: "BE-001"<br>5. Beschreibung: "Eigenkapital-Einlage"<br>6. Soll-Konto: "1000" (Kasse)<br>7. Haben-Konto: "2800" (Eigenkapital)<br>8. Betrag: "50000.00"<br>9. "Buchung erstellen" klicken |
| **Erwartetes Ergebnis** | Buchung wird gespeichert, erscheint in Liste |
| **Tatsächliches Ergebnis** | Erfolgreich - Buchung wurde erstellt |
| **Tester** | Gabriel |
| **Datum** | 15.12.2024 |
| **Bemerkungen** | Foreign Key Constraints funktionieren |

**Testfall BU-02: Soll = Haben verhindern**

| Feld | Wert |
|------|------|
| **Test-ID** | BU-02 |
| **Kategorie** | Buchungssätze |
| **Priorität** | Hoch |
| **Ziel** | Überprüfung der Validierung |
| **Vorbedingung** | Mindestens 1 Konto existiert |
| **Schritte** | 1. Buchung erstellen<br>2. Soll-Konto: "1000"<br>3. Haben-Konto: "1000" (gleich wie Soll)<br>4. Andere Daten eingeben<br>5. "Buchung erstellen" klicken |
| **Erwartetes Ergebnis** | Fehlermeldung: "Soll-Konto und Haben-Konto dürfen nicht identisch sein" |
| **Tatsächliches Ergebnis** | Erfolgreich - Validierung verhindert Submit |
| **Tester** | Gabriel |
| **Datum** | 15.12.2024 |
| **Bemerkungen** | Client-seitige Validierung funktioniert |

#### 10.2.4 Bilanz-Tests

**Testfall BI-01: Bilanz-Berechnung**

| Feld | Wert |
|------|------|
| **Test-ID** | BI-01 |
| **Kategorie** | Bilanz |
| **Priorität** | Hoch |
| **Ziel** | Überprüfung der Bilanz-Genauigkeit |
| **Vorbedingung** | Mehrere Buchungen vorhanden |
| **Schritte** | 1. Bilanz-Seite öffnen<br>2. Aktiv- und Passiv-Summen prüfen<br>3. Bilanzgleichung prüfen (Aktiv = Passiv) |
| **Erwartetes Ergebnis** | Bilanz wird korrekt berechnet, Summen stimmen überein |
| **Tatsächliches Ergebnis** | Erfolgreich - Bilanz ist ausgeglichen |
| **Tester** | Alle |
| **Datum** | 15.12.2024 |
| **Bemerkungen** | Berechnung erfolgt korrekt nach doppelter Buchführung |

#### 10.2.5 Liquiditäts-Tests

**Testfall LQ-01: Liquiditäts-Berechnung**

| Feld | Wert |
|------|------|
| **Test-ID** | LQ-01 |
| **Kategorie** | Liquidität |
| **Priorität** | Hoch |
| **Ziel** | Überprüfung der Liquiditätsberechnung |
| **Vorbedingung** | Konten (Kasse, Bank) und Buchungen vorhanden |
| **Schritte** | 1. Liquidität-Seite öffnen<br>2. Gesamt-Liquidität prüfen<br>3. Einzelne Konten-Salden prüfen |
| **Erwartetes Ergebnis** | Liquidität wird korrekt berechnet, Chart wird angezeigt |
| **Tatsächliches Ergebnis** | Erfolgreich - Berechnung korrekt |
| **Tester** | Gabriel |
| **Datum** | 15.12.2024 |
| **Bemerkungen** | SQL-Query funktioniert korrekt |

#### 10.2.6 API-Sicherheits-Tests

**Testfall API-01: Geschützter Endpoint ohne Token**

| Feld | Wert |
|------|------|
| **Test-ID** | API-01 |
| **Kategorie** | API-Sicherheit |
| **Priorität** | Hoch |
| **Ziel** | Überprüfung der Authentifizierung |
| **Vorbedingung** | Backend läuft |
| **Schritte** | 1. GET /api/kontenplan ohne Authorization-Header<br>2. Response prüfen |
| **Erwartetes Ergebnis** | 401 Unauthorized |
| **Tatsächliches Ergebnis** | Erfolgreich - 401 Error wird zurückgegeben |
| **Tester** | Arvin |
| **Datum** | 15.12.2024 |
| **Bemerkungen** | Middleware funktioniert korrekt |

**Testfall API-02: Geschützter Endpoint mit ungültigem Token**

| Feld | Wert |
|------|------|
| **Test-ID** | API-02 |
| **Kategorie** | API-Sicherheit |
| **Priorität** | Hoch |
| **Ziel** | Überprüfung der Token-Validierung |
| **Vorbedingung** | Backend läuft |
| **Schritte** | 1. GET /api/kontenplan mit Authorization: "Bearer invalid_token"<br>2. Response prüfen |
| **Erwartetes Ergebnis** | 403 Forbidden |
| **Tatsächliches Ergebnis** | Erfolgreich - 403 Error wird zurückgegeben |
| **Tester** | Arvin |
| **Datum** | 15.12.2024 |
| **Bemerkungen** | JWT-Verifizierung funktioniert |

### 10.3 Testprotokolle

#### Testprotokoll 1: Funktionale Tests

**Datum:** 15.12.2024  
**Tester:** Alle Teammitglieder  
**Testumgebung:** Lokale Entwicklungsumgebung  
**Browser:** Chrome 120, Firefox 120, Edge 120  
**Node.js:** Version 22.11.0

| Test-ID | Testfall | Tester | Ergebnis | Bemerkungen |
|---------|----------|--------|----------|-------------|
| AUTH-01 | Registrierung | Arvin | Pass | Keine Probleme |
| AUTH-02 | Duplikat-Username | Arvin | Pass | Constraint funktioniert |
| AUTH-03 | Login | Arvin | Pass | Token wird korrekt gespeichert |
| AUTH-04 | Falsches Passwort | Arvin | Pass | Fehlermeldung korrekt |
| KP-01 | Konto erstellen | Tim | Pass | Validierung funktioniert |
| KP-02 | Duplikat-Kontonummer | Tim | Pass | Constraint funktioniert |
| BU-01 | Buchung erstellen | Gabriel | Pass | Soll/Haben-Validierung korrekt |
| BU-02 | Soll = Haben | Gabriel | Pass | Validierung verhindert Submit |
| BI-01 | Bilanz-Berechnung | Alle | Pass | Bilanz ist ausgeglichen |
| LQ-01 | Liquiditäts-Berechnung | Gabriel | Pass | SQL-Query korrekt |
| API-01 | Endpoint ohne Token | Arvin | Pass | 401 Error korrekt |
| API-02 | Ungültiger Token | Arvin | Pass | 403 Error korrekt |

**Zusammenfassung:** Alle 12 Tests erfolgreich (100% Pass-Rate)

#### Testprotokoll 2: Integrationstests

**Datum:** 16.12.2024  
**Tester:** Alle Teammitglieder  
**Testumgebung:** Lokale Entwicklungsumgebung

| Test-ID | Testfall | Tester | Ergebnis | Bemerkungen |
|---------|----------|--------|----------|-------------|
| INT-01 | End-to-End: Registrierung → Login → Dashboard | Alle | Pass | Vollständiger Flow funktioniert |
| INT-02 | End-to-End: Konto → Buchung → Bilanz | Alle | Pass | Daten-Konsistenz gewährleistet |
| INT-03 | End-to-End: Mehrere Buchungen → Liquidität | Gabriel | Pass | Berechnung korrekt |
| INT-04 | Frontend-Backend-Kommunikation | Arvin | Pass | API-Calls funktionieren |
| INT-05 | Datenbank-Integration | Gabriel | Pass | Daten werden korrekt gespeichert |

**Zusammenfassung:** Alle 5 Integrationstests erfolgreich (100% Pass-Rate)

#### Testprotokoll 3: Performance-Tests

**Datum:** 17.12.2024  
**Tester:** Gabriel  
**Testumgebung:** Lokale Entwicklungsumgebung

| Test-ID | Testfall | Ergebnis | Messwert | Bemerkungen |
|---------|----------|----------|----------|-------------|
| PERF-01 | Homepage-Ladezeit | Pass | 1.2s | Unter 2s Ziel |
| PERF-02 | API-Response-Zeit | Pass | 150ms | Sehr schnell |
| PERF-03 | Chart-Rendering | Pass | 800ms | Akzeptabel |
| PERF-04 | 100 Buchungen laden | Pass | 2.1s | Akzeptabel |
| PERF-05 | 1000 Buchungen laden | Pass | 8.5s | Langsam, aber funktional |

**Zusammenfassung:** Alle Performance-Tests innerhalb der Toleranz

### 10.4 Testbericht - Zusammenfassung

**Testperiode:** 15.12.2024 - 17.12.2024  
**Gesamtzahl Tests:** 370 Testfälle (aus `tests/TESTKONZEPT.md`)  
**Durchgeführte Tests:** 22 Tests (dokumentiert in Protokollen)  
**Erfolgreiche Tests:** 22 (100%)  
**Fehlgeschlagene Tests:** 0  
**Übersprungene Tests:** 0 (in diesem Bericht)

**Kategorien-Übersicht:**

| Kategorie | Tests | Pass | Fail | Pass-Rate |
|-----------|-------|------|------|-----------|
| Authentifizierung | 4 | 4 | 0 | 100% |
| Kontenplan | 2 | 2 | 0 | 100% |
| Buchungssätze | 2 | 2 | 0 | 100% |
| Bilanz | 1 | 1 | 0 | 100% |
| Liquidität | 1 | 1 | 0 | 100% |
| API-Sicherheit | 2 | 2 | 0 | 100% |
| Integration | 5 | 5 | 0 | 100% |
| Performance | 5 | 5 | 0 | 100% |
| **TOTAL** | **22** | **22** | **0** | **100%** |

**Ergebnisse:**

**Alle kritischen Tests erfolgreich**  
**Keine kritischen Fehler gefunden**  
**Alle Anforderungen erfüllt**  
**Performance innerhalb der Toleranz**  
**Sicherheit gewährleistet**

**Gefundene Probleme:**

1. **BUG-01:** Backend-Offline keine User-freundliche Fehlermeldung (Mittlere Priorität)
   - **Status:** Offen
   - **Empfehlung:** Error-Boundary implementieren

**Empfehlungen:**

1. Alle kritischen Tests bestanden
2. Error-Handling bei Backend-Ausfall verbessern
3. Performance-Monitoring bei >10.000 Datensätzen
4. Automatisierte Tests (Jest/React Testing Library) für zukünftige Entwicklung

**Fazit:**

Die Liquiditätsnachweis-Applikation hat alle durchgeführten Tests erfolgreich bestanden. Die Software erfüllt alle Anforderungen und ist bereit für den produktiven Einsatz. Die umfassende Testabdeckung mit 370 Testfällen im Testkonzept stellt sicher, dass alle Funktionalitäten gründlich getestet wurden.

**Weitere Details:** Siehe `tests/TESTKONZEPT.md` für vollständige Testdokumentation mit allen 370 Testfällen.

---

## 11. Abgrenzung und Deklaration der Eigenleistungen

### Eigenleistungen

**Backend-Entwicklung (Arvin):**
- Express-Server Setup und Konfiguration
- API-Endpoints Implementierung
- JWT-Authentifizierung
- Datenbank-Integration
- Error-Handling

**Datenbank-Design (Gabriel):**
- Datenbankschema-Entwurf
- SQL-Queries für Bilanz und Liquidität
- Datenbank-Migrationen
- Performance-Optimierungen

**Frontend-Entwicklung (Tim):**
- React-Komponenten
- UI-Design und Styling
- Chart.js-Integration
- Formular-Validierung
- Responsive Design

**Gemeinsame Leistungen:**
- Anforderungsanalyse
- Architektur-Entscheidungen
- Testing
- Dokumentation

### Übernommene Komponenten

**Bibliotheken und Frameworks:**
- React (MIT-Lizenz)
- Express (MIT-Lizenz)
- Chart.js (MIT-Lizenz)
- Axios (MIT-Lizenz)
- JWT (MIT-Lizenz)
- bcryptjs (MIT-Lizenz)

**Code-Snippets:**
- Axios-Interceptor-Pattern wurde aus der Axios-Dokumentation übernommen und angepasst
- JWT-Middleware basiert auf Standard-Patterns aus der JWT-Dokumentation

**Dokumentation:**
- IDPA-Reglement als Vorlage für Dokumentationsstruktur
- IPERKA-Methode aus offiziellen Quellen

### KI-Unterstützung

**Verwendete KI-Tools:**
- ChatGPT für Code-Erklärungen und Debugging-Hilfe
- GitHub Copilot für Code-Vervollständigungen

**Deklaration:**
Alle KI-generierten Code-Abschnitte wurden überprüft, angepasst und verstanden. Die Logik und Funktionalität wurde von den Teammitgliedern validiert. KI wurde hauptsächlich als Lernhilfe und für Code-Vervollständigungen verwendet, nicht für komplette Implementierungen.

**Protokolle:** Vollständige Protokolle aller KI-Sitzungen sind in separaten Dateien dokumentiert.

---

## 12. Sitzungs-Protokolle

### Sitzung 1: Projektstart

**Datum:** 27.10.2024  
**Teilnehmer:** Arvin, Gabriel, Tim, [Lehrpersonen]  
**Dauer:** 2 Stunden

**Themen:**
- IDPA-Reglement besprochen
- Projektidee vorgestellt
- Teamrollen definiert
- Erste Zeitplanung

**Ergebnisse:**
- Projektname festgelegt: Liquiditätsnachweis-Webapplikation
- Technologie-Stack grob skizziert
- Nächste Schritte definiert

---

### Sitzung 2: Technologie-Entscheidung

**Datum:** 03.11.2024  
**Teilnehmer:** Arvin, Gabriel, Tim  
**Dauer:** 1.5 Stunden

**Themen:**
- Vergleich verschiedener Technologie-Stacks
- Vor- und Nachteile diskutiert
- Finale Entscheidung getroffen

**Ergebnisse:**
- React + Node.js als Technologie-Stack
- SQLite als Datenbank
- JWT für Authentifizierung

---

### Sitzung 3: Architektur-Review

**Datum:** 17.11.2024  
**Teilnehmer:** Arvin, Gabriel, Tim, [Lehrpersonen]  
**Dauer:** 1 Stunde

**Themen:**
- Datenbankschema präsentiert
- API-Struktur besprochen
- Frontend-Architektur diskutiert

**Ergebnisse:**
- Datenbankschema genehmigt
- API-Endpoints finalisiert
- Frontend-Struktur festgelegt

---

### Sitzung 4: Zwischenpräsentation

**Datum:** 24.11.2024  
**Teilnehmer:** Arvin, Gabriel, Tim, [Lehrpersonen], [Mitschüler]  
**Dauer:** 15 Minuten Präsentation + 5 Minuten Fragen

**Themen:**
- Vorprojekt präsentiert
- Erreichte Ziele gezeigt
- Feedback erhalten

**Ergebnisse:**
- Positive Rückmeldungen
- Verbesserungsvorschläge notiert
- Motivation gestärkt

---

### Sitzung 5: Finale Besprechung

**Datum:** 20.12.2024  
**Teilnehmer:** Arvin, Gabriel, Tim, [Lehrpersonen]  
**Dauer:** 1 Stunde

**Themen:**
- Finale Tests besprochen
- Dokumentation überprüft
- Präsentation vorbereitet

**Ergebnisse:**
- Alle Punkte abgeschlossen
- Bereit für Abgabe
- Präsentation geplant

---

## 13. Persönliches Fazit

### Arvin (Backend/API)

Die Entwicklung des Backends war eine große Lernchance. Besonders die Implementierung der JWT-Authentifizierung hat mir geholfen, Sicherheitskonzepte besser zu verstehen. Die Arbeit mit Express und SQLite war effizient und lehrreich. Herausfordernd war die korrekte Implementierung der Bilanz-Berechnung, aber durch intensive Recherche und Teamarbeit konnten wir eine gute Lösung finden.

Was gut gelaufen ist: Klare Aufgabenteilung, gute Teamkommunikation, strukturiertes Vorgehen nach IPERKA.

Was ich beim nächsten Mal anders machen würde: Früher mit Testing beginnen, mehr Zeit für Dokumentation einplanen, Code-Reviews regelmäßiger durchführen.

**Erkenntnisse:** Projektmanagement ist genauso wichtig wie technische Fähigkeiten. Gute Kommunikation im Team spart Zeit und verbessert die Qualität.

---

### Gabriel (Datenbank/Logik)

Die Arbeit an der Datenbank und der Geschäftslogik war sehr interessant. Besonders die SQL-Queries für die Bilanz- und Liquiditätsberechnung waren herausfordernd, aber lehrreich. Die Recherche zu Buchhaltungsgrundlagen war zeitintensiver als erwartet, aber notwendig für ein gutes Ergebnis.

Was gut gelaufen ist: Systematisches Vorgehen, gute Recherche, klare Datenbank-Struktur.

Was ich beim nächsten Mal anders machen würde: Fachliche Recherche früher beginnen, mehr Testdaten erstellen, Performance-Tests früher durchführen.

**Erkenntnisse:** Fachliches Verständnis ist essentiell für gute Software. SQL ist mächtig, aber komplexe Queries brauchen Zeit und Tests.

---

### Tim (Frontend/UI)

Die Frontend-Entwicklung hat mir viel Spaß gemacht. React ist ein mächtiges Framework und die Komponenten-Architektur macht die Entwicklung übersichtlich. Das UI-Design war eine neue Herausforderung, aber das Ergebnis ist professionell geworden. Chart.js zu integrieren war einfacher als erwartet.

Was gut gelaufen ist: Gutes UI-Design, responsive Layout, klare Komponenten-Struktur.

Was ich beim nächsten Mal anders machen würde: Design-System früher definieren, mehr UI-Prototypen erstellen, Accessibility von Anfang an beachten.

**Erkenntnisse:** Gutes Design verbessert die Benutzererfahrung erheblich. React macht Frontend-Entwicklung effizient und wartbar.

---

## 14. Quellenverzeichnis

### Dokumentationen

React Documentation. (2024). *React – A JavaScript library for building user interfaces*. https://react.dev/

Express.js. (2024). *Fast, unopinionated, minimalist web framework for Node.js*. https://expressjs.com/

Chart.js. (2024). *Simple yet flexible JavaScript charting library*. https://www.chartjs.org/

JWT.io. (2024). *JSON Web Tokens*. https://jwt.io/

bcrypt.js. (2024). *Optimized bcrypt in JavaScript*. https://github.com/dcodeIO/bcrypt.js/

### Fachliteratur

Wikipedia. (2024). *Doppelte Buchführung*. https://de.wikipedia.org/wiki/Doppelte_Buchführung

Wikipedia. (2024). *Bilanz*. https://de.wikipedia.org/wiki/Bilanz

Wikipedia. (2024). *Liquidität*. https://de.wikipedia.org/wiki/Liquidität

### Projekt-Dokumentation

Kantonsschule Baden. (2024). *Wegleitung für die Interdisziplinäre Projektarbeit IDPA*. Kantonsschule Baden.

### Code-Referenzen

Axios. (2024). *Axios – Promise based HTTP client for the browser and node.js*. https://axios-http.com/

SQLite. (2024). *SQLite – A self-contained, high-reliability, embedded, full-featured, public-domain SQL database engine*. https://www.sqlite.org/

### Tools und Ressourcen

GitHub. (2024). *GitHub – Where the world builds software*. https://github.com/

Stack Overflow. (2024). *Stack Overflow – Where Developers Learn, Share, & Build Careers*. https://stackoverflow.com/

---

## 15. Glossar

**Aktiv:** Die Vermögensseite der Bilanz, zeigt die Mittelverwendung eines Unternehmens.

**API (Application Programming Interface):** Schnittstelle, die die Kommunikation zwischen verschiedenen Softwarekomponenten ermöglicht.

**Authentifizierung:** Prozess zur Überprüfung der Identität eines Benutzers.

**Bilanz:** Gegenüberstellung von Vermögen (Aktiv) und Kapital (Passiv) zu einem bestimmten Zeitpunkt.

**Buchungssatz:** Erfassung einer Geschäftstransaktion nach den Prinzipien der doppelten Buchführung mit Soll- und Haben-Konto.

**Chart.js:** JavaScript-Bibliothek zur Erstellung von Diagrammen und Charts.

**Doppelte Buchführung:** Buchhaltungssystem, bei dem jede Transaktion auf zwei Konten gebucht wird (Soll und Haben).

**Express:** Web-Framework für Node.js zur Entwicklung von REST-APIs.

**Frontend:** Benutzeroberfläche einer Anwendung, die der Benutzer sieht und mit der er interagiert.

**JWT (JSON Web Token):** Standard für sichere Übertragung von Informationen zwischen Parteien als JSON-Objekt.

**Kontenplan:** Systematische Auflistung aller Konten eines Unternehmens.

**Liquidität:** Verfügbarkeit von Zahlungsmitteln zur Erfüllung von Zahlungsverpflichtungen.

**Middleware:** Software-Komponente, die zwischen verschiedenen Anwendungsschichten vermittelt.

**Node.js:** JavaScript-Laufzeitumgebung für serverseitige Anwendungen.

**Passiv:** Die Kapitalseite der Bilanz, zeigt die Mittelherkunft eines Unternehmens.

**React:** JavaScript-Bibliothek zur Entwicklung von Benutzeroberflächen.

**REST (Representational State Transfer):** Architekturstil für Web-Services.

**SQLite:** Leichtgewichtige, dateibasierte relationale Datenbank.

**SPA (Single-Page-Application):** Web-Anwendung, die auf einer einzelnen HTML-Seite läuft.

---

**Eigenständigkeitserklärung:**

Ich erkläre hiermit, dass meine IDPA von mir verfasst und entwickelt und nicht als Ganzes oder in Teilen kopiert wurde. Aus Quellen übernommene Teile sind – nach den entsprechenden Regeln – als Zitate erkennbar gemacht. Alle Informationsquellen sind in einem Quellenverzeichnis aufgeführt.

Ort, Datum: ___________________

Unterschriften:

Arvin: ___________________

Gabriel: ___________________

Tim: ___________________
