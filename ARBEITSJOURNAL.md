# Arbeitsjournal - Liquiditätsnachweis IDPA Projekt

**Gruppe:** Arvin, Gabriel, Tim  
**Projekt:** Liquiditätsnachweis samt Kennzahlenberechnung  
**Technologie:** React, Node.js, SQLite  
**Abgabe:** Sonntags (Arbeitstage: Montags)

---

## Woche 1
### Montag – 27. Oktober 2025

#### Ausgeführte Tätigkeiten:
| Tätigkeit | Person |
|-----------|--------|
| Projektthema Liquiditätsnachweis ausgewählt und Anforderungen analysiert | Alle |
| Entscheidung für Web-Applikation (React + Node.js) als Technologie-Stack | Arvin, Gabriel, Tim |
| Erste Recherche zu Buchführung, Bilanz und Geldflussrechnung | Gabriel |
| Stakeholder-Anforderungen analysiert und dokumentiert | Arvin |
| Technologie-Vergleich durchgeführt (Desktop vs. Web-App) | Tim |d
| GitHub Repository erstellt und Branch-Strategie definiert | Gabriel |
| Projektstruktur geplant (Frontend, Backend, Datenbank) | Alle |
| IPERKA-Dokumentation begonnen | Arvin |

#### Erreichte Ziele:
| Ziel | Person |
|------|--------|
| Überblick über IDPA-Reglement verschafft | Alle |
| Technologie-Stack festgelegt (React, Node.js, SQLite, Chart.js) | Alle |
| Must-Have Funktionen definiert (Kontenplan, Buchungen, Bilanz, Liquidität) | Gabriel, Arvin |
| Stakeholder-Wünsche verstanden und dokumentiert | Arvin |
| GitHub Repository mit Rule Sets eingerichtet | Gabriel |
| Erste Wireframes für UI erstellt | Tim |
| Detaillierter Zeitplan für 13 Wochen erstellt | Alle |

#### Aufgetretene Probleme:
| Problem | Person |
|---------|--------|
| Unklarheit über buchhalterische Grundlagen (Soll/Haben, Aktiv/Passiv) | Alle |
| Unsicherheit bei Geldflussrechnung-Berechnung | Gabriel |
| Keine Erfahrung mit Chart.js für Visualisierungen | Tim |

#### Hilfestellung (wer, was):
- Recherche Buchhaltungsgrundlagen (Wikipedia, YouTube-Tutorials)
- Chart.js Dokumentation studiert
- IDPA-Reglement mehrmals durchgelesen

#### Pendenzenliste:
| Pendenz | Person |
|---------|--------|
| Detailliertes Datenbankschema entwerfen | Gabriel |
| React-Komponenten-Struktur definieren | Tim |
| API-Endpoints planen | Arvin |
| Muss- und Kann-Anforderungen finalisieren | Arvin |

#### Reflexion:
| Reflexion | Person |
|-----------|--------|
| Die Entscheidung für eine Web-App war richtig, weil wir keine Installation beim Nutzer brauchen und plattformunabhängig sind. React und Node.js passen gut zusammen, da beide JavaScript verwenden - so können wir im Team effizienter arbeiten und müssen nicht zwischen Programmiersprachen wechseln. Allerdings hätte ich mir mehr Zeit für die Anforderungsanalyse nehmen sollen. | Arvin |
| Die Buchhaltungsrecherche war zeitintensiver als erwartet. Ich musste viele Grundlagen erst lernen (Soll/Haben, Aktiv/Passiv). Positiv war, dass wir uns als Team gegenseitig geholfen haben. Für nächstes Mal: Fachliche Recherche früher beginnen! | Gabriel |
| Die Technologie-Vergleich hat sich gelohnt. Web-App ist besser als Desktop-App, weil wir schneller entwickeln können und keine Installer brauchen. React ist die richtige Wahl wegen der großen Community und vielen Tutorials. Allerdings war der Zeitaufwand höher als geplant - nächstes Mal realistischer schätzen. | Tim |

#### Vergleich mit dem Zeitplan (Gruppe):
| Soll | Ist |
|------|-----|
| Projektsetup und Technologie-Entscheidung (geplant: 2h Gruppenzeit) | Projektsetup, Analyse, Planung und erste Wireframes (ca. 3h Gruppenzeit) |

**Bewertung:** Mehr Zeit investiert als geplant, aber sinnvoll genutzt.  
**Status:** Im Zeitplan, sehr guter Start.

---

## Woche 2
### Montag – 3. November 2025

#### Ausgeführte Tätigkeiten:
| Tätigkeit | Person |
|-----------|--------|
| React-Projektstruktur erstellt mit Create React App | Tim |
| Node.js Backend mit Express aufgesetzt | Arvin |
| SQLite Datenbank-Schema entworfen (Kontenplan, Buchungssätze, Bilanz) | Gabriel |
| Header-Komponente mit Navigation implementiert | Tim |
| API-Endpoints für Kontenplan erstellt (GET, POST) | Arvin |
| Datenbankmigrationen für alle Tabellen geschrieben | Gabriel |
| CSS-Grundgerüst mit modernem Design erstellt | Tim |
| GitHub Workflow mit Pull Requests eingerichtet | Alle |

#### Erreichte Ziele:
| Ziel | Person |
|------|--------|
| Vollständige Projektstruktur (Frontend + Backend) steht | Alle |
| Erste API-Endpoints funktionsfähig | Arvin |
| Datenbank-Schema vollständig definiert | Gabriel |
| Navigation zwischen Seiten funktioniert | Tim |
| Erste React-Komponenten (Header, Dashboard) fertig | Tim |
| Backend-Server läuft stabil auf Port 5000 | Arvin |

#### Aufgetretene Probleme:
| Problem | Person |
|---------|--------|
| CORS-Fehler beim API-Aufruf von React zu Node.js | Arvin |
| SQLite Datenbankpfad war zunächst falsch konfiguriert | Gabriel |
| React-Router hat nicht sofort funktioniert | Tim |

#### Hilfestellung (wer, was):
- CORS-Middleware in Express eingefügt (Arvin)
- Stack Overflow für SQLite-Pfad-Probleme (Gabriel)
- React-Router-DOM Dokumentation (Tim)

#### Pendenzenliste:
| Pendenz | Person |
|---------|--------|
| Kontenplan-Seite mit Formular fertigstellen | Tim |
| API für Buchungssätze implementieren | Arvin |
| Automatische Bilanzberechnung programmieren | Gabriel |

#### Reflexion:
| Reflexion | Person |
|-----------|--------|
| Das Backend-Setup lief besser als erwartet. Express ist intuitiver als gedacht. Der CORS-Fehler hat mich anfangs frustriert, aber die Lösung war einfach. Wichtig gelernt: Immer zuerst die Dokumentation lesen! Die API-Struktur ist gut, aber ich hätte mehr Zeit für die Planung einplanen sollen statt direkt loszucoden. | Arvin |
| Das Datenbank-Schema zu entwerfen war schwieriger als gedacht. Ich musste mehrmals überarbeiten, weil ich die Beziehungen zwischen Tabellen nicht sofort richtig hatte. Positiv: Ich verstehe jetzt Foreign Keys und Normalisierung viel besser. Nächstes Mal würde ich zuerst ein ER-Diagramm zeichnen. | Gabriel |
| React-Router war anfangs verwirrend. Die Dokumentation ist gut, aber es gibt so viele Möglichkeiten. Ich habe viel durch Trial-and-Error gelernt. Das Design macht mir Spaß, aber ich merke, dass CSS-Organisation wichtig wird - sollten wir früher strukturieren. Bin zufrieden mit dem Fortschritt! | Tim |

#### Vergleich mit dem Zeitplan (Gruppe):
| Soll | Ist |
|------|-----|
| Backend-Setup (geplant: 2h Gruppenzeit) | Backend + Frontend + Datenbank Setup (ca. 4h Gruppenzeit) |

**Bewertung:** Mehr Zeit investiert, aber deutlich mehr erreicht als geplant.  
**Status:** Vor dem Zeitplan! Sehr guter Fortschritt.

---

## Woche 3
### Montag – 10. November 2025

#### Arbeitspakete:
| Arbeitspaket | Person | Beschreibung |
|--------------|--------|--------------|
| Kontenplan-Funktionalität | Tim | Vollständige Implementierung der Kontenplan-Seite mit Formular und Anzeige |
| Buchungssätze-API | Arvin | CRUD-Operationen für Buchungssätze mit Validierung |
| Bilanzberechnung | Gabriel | Automatische Saldenberechnung und doppelte Buchführung-Logik |
| Dashboard & UI | Tim | Statistik-Karten und responsive Design-Optimierung |
| Code-Qualität | Alle | Code-Review und Validierungsregeln |

#### Erreichte Ziele:
| Ziel | Person |
|------|--------|
| Kontenplan vollständig funktionsfähig (Erstellen, Anzeigen) | Tim, Arvin |
| Buchungssätze können erfasst und gespeichert werden | Arvin, Gabriel |
| Automatische Berechnung der Kontosalden funktioniert | Gabriel |
| Dashboard zeigt Echtzeit-Statistiken an | Tim |
| Alle Formulare haben Validierung | Arvin |
| Validierung: Soll und Haben dürfen nicht identisch sein | Arvin |
| Website ist responsive auf allen Geräten | Tim |

#### Aufgetretene Probleme:
| Problem | Person |
|---------|--------|
| Soll/Haben-Logik war zunächst falsch herum implementiert | Gabriel |
| React State-Management bei komplexen Formularen herausfordernd | Tim |
| Datenbankabfragen waren nicht optimal (Performance) | Arvin |

#### Hilfestellung (wer, was):
- Buchhaltungsbuch konsultiert für Soll/Haben-Verständnis (Gabriel)
- React State Hooks Dokumentation (Tim)
- SQL-Optimierung durch JOIN statt mehrere Queries (Arvin)

#### Pendenzenliste:
| Pendenz | Person |
|---------|--------|
| Bilanz-Seite mit Aktiv/Passiv-Darstellung erstellen | Tim |
| Liquiditätsberechnung API implementieren | Gabriel |
| Chart.js Integration vorbereiten | Tim |

#### Reflexion:
| Reflexion | Person |
|-----------|--------|
| Die Formular-Validierung war komplexer als gedacht. Ich musste viel über React State Management lernen. Die Validierung, dass Soll und Haben nicht gleich sein dürfen, war wichtig für die doppelte Buchführung - verhindert Fehler! Die Performance-Optimierung mit SQL-Joins statt mehreren Queries war ein Aha-Moment - hätte ich früher machen sollen. Positiv: Die API ist jetzt viel schneller. Lernerfolg: Performance von Anfang an mitdenken! | Arvin |
| Soll/Haben-Logik war mein größter Kampf diese Woche. Ich hatte es zuerst falsch herum implementiert und musste alles umschreiben. Frustrierend, aber lehrreich! Jetzt verstehe ich Buchhaltung viel besser. Das Buchhaltungsbuch war goldwert. Die Validierung von Arvin hilft, Fehler zu vermeiden. Nächstes Mal: Bei fachlichen Themen mehr Zeit für Grundlagen nehmen. | Gabriel |
| React State bei komplexen Formularen ist herausfordernd. Ich habe viel über Controlled Components gelernt, aber es war trial-and-error. Die Formulare funktionieren jetzt gut, aber der Code könnte sauberer sein. Responsive Design macht Spaß! Die Validierung macht die App robuster. Lernerfolg: Mehr Zeit für Code-Struktur einplanen, nicht nur Features. | Tim |

#### Vergleich mit dem Zeitplan (Gruppe):
| Soll | Ist |
|------|-----|
| Kontenplan + Buchungen (geplant: 4h Gruppenzeit) | Kontenplan + Buchungen + Dashboard + Validierung (ca. 5h Gruppenzeit) |

**Bewertung:** Etwas mehr Zeit investiert, dafür höhere Qualität.  
**Status:** Im Zeitplan, Qualität über Geschwindigkeit.

---

## Woche 4
### Montag – 17. November 2025

#### Arbeitspakete:
| Arbeitspaket | Person | Beschreibung |
|--------------|--------|--------------|
| Bilanz & Liquiditätsberechnung | Gabriel, Tim | Bilanz-Seite mit Aktiv/Passiv, Liquiditäts-API und automatische Bilanzprüfung |
| Datenvisualisierung | Tim | Chart.js Integration für grafische Darstellung der Liquidität |
| API-Robustheit | Arvin | Error-Handling für alle Endpoints und Echtzeit-Updates |
| Design-Überarbeitung | Tim | Komplettes Redesign im Numarics-Stil (Banking-Design, Farbpalette, Header) |
| Qualitätssicherung | Alle | Bug-Fixes und Tests mit Testdaten |

#### Erreichte Ziele:
| Ziel | Person |
|------|--------|
| Bilanz wird automatisch aus Buchungen generiert | Gabriel |
| Grafische Darstellung der Liquidität funktioniert | Tim |
| Charts sind interaktiv und professionell | Tim |
| Bilanz-Kontrolle warnt bei Ungleichgewicht | Gabriel |
| Alle API-Fehler werden sauber behandelt | Arvin |
| Design komplett überarbeitet - sieht aus wie Banking-App | Tim |
| Professionelle Farbpalette implementiert | Tim |
| Bug-Fixes für Liquidität-Seite | Gabriel |
| Website hat flüssige Animationen | Tim |

#### Aufgetretene Probleme:
| Problem | Person |
|---------|--------|
| Chart.js musste erst konfiguriert werden für deutsches Format (CHF) | Tim |
| SQL-Query für Liquidität war sehr komplex | Gabriel |
| React-ChartJS-2 hat Warnungen in Console ausgegeben | Tim |
| toLowerCase() Fehler auf undefined Werten in Liquidität-Seite | Gabriel |
| Design-Update hat länger gedauert als geplant | Tim |

#### Hilfestellung (wer, was):
- Chart.js Dokumentation für Locale-Settings (Tim)
- SQL-Joins Tutorial auf YouTube (Gabriel)
- React-ChartJS-2 GitHub Issues (Tim)

#### Pendenzenliste:
| Pendenz | Person |
|---------|--------|
| Liquiditäts-Warnsystem implementieren | Gabriel |
| Geldflussrechnung-Seite erstellen | Arvin |
| JWT-Login-System implementieren (für Security) | Arvin, Tim |
| Export-Funktion planen | Tim |

#### Reflexion:
| Reflexion | Person |
|-----------|--------|
| Das Error-Handling einzubauen war kritisch, nicht nur ein "Nice-to-Have". Ohne Error-Handling hätten wir bei API-Fehlern keine aussagekräftigen Fehlermeldungen - der Nutzer würde nur "500 Internal Server Error" sehen, ohne zu wissen, was schiefgelaufen ist. Jetzt können wir spezifische Fehler zurückgeben (z.B. "Kontonummer existiert bereits" statt generischer Fehler). Das hat uns auch geholfen, Bugs schneller zu finden - wir sehen sofort, wo genau ein Problem auftritt. Die Echtzeit-Updates zu implementieren war spannend - WebSockets wären noch besser gewesen, aber für unseren Scope reicht es. Positiv: Die API ist jetzt sehr robust und benutzerfreundlich. Lernerfolg: Error-Handling ist kein "Nice-to-Have", sondern essentiell für professionelle Software! | Arvin |
| Die SQL-Query für Liquidität war die komplexeste, die ich je geschrieben habe. Ich musste viel über JOINs und Aggregatfunktionen lernen. YouTube-Tutorials haben geholfen. Die Bilanz-Ausgleichsprüfung war knifflig wegen Rundungsfehlern - musste eine Toleranz einbauen. Der toLowerCase() Bug war peinlich - hätte ich früher testen sollen. Dieser Edge-Case zeigt, wie wichtig defensive Programmierung ist: Immer prüfen, ob Werte existieren, bevor man Methoden darauf aufruft. Lernerfolg: Mehr Edge-Cases testen und defensive Programmierung von Anfang an! | Gabriel |
| Das Design-Update war eine große Überraschung! Wir haben Numarics als Inspiration genommen und das komplette Design überarbeitet. Weißer Header, moderne Farben, keine Emojis - sieht jetzt aus wie eine echte Banking-App! Das Design-Update hat länger gedauert als geplant, weil wir nicht nur Farben geändert haben, sondern die komplette visuelle Hierarchie überdacht haben: Welche Elemente sollen hervorgehoben werden? Wie führt man den Nutzer durch die App? Welche Farben vermitteln Vertrauen? Jede kleine Änderung hatte Auswirkungen auf andere Komponenten - musste alles konsistent halten. Chart.js war frustrierend, aber am Ende sehen die Charts professionell aus. Lernerfolg: Design-Inspiration von professionellen Apps holen, aber auch verstehen, warum Design-Entscheidungen getroffen wurden! | Tim |

#### Vergleich mit dem Zeitplan (Gruppe):
| Soll | Ist |
|------|-----|
| Bilanz + Liquidität (geplant: 3h Gruppenzeit) | Bilanz + Liquidität + Charts + Design-Update + Bug-Fixes (ca. 5h Gruppenzeit) |

**Bewertung:** Design-Update war ungeplant, aber macht die App viel professioneller!  
**Status:** Leicht über Zeitplan, aber Design-Qualität deutlich verbessert.

---

## Woche 5
### Montag – 24. November 2025

#### Arbeitspakete:
| Arbeitspaket | Person | Beschreibung |
|--------------|--------|--------------|
| Authentifizierung & Security | Arvin, Tim | JWT-Login-System mit User-Tabelle, Passwort-Hashing, Protected Routes und AuthContext |
| Liquiditäts-Warnsystem | Gabriel, Tim | Status-Levels, Trend-Analyse und Farbschema für Liquiditätsstatus |
| Geldflussrechnung | Arvin | Grundgerüst für operative/Finanzierungs-/Investitionstätigkeiten |
| Performance & Code-Qualität | Gabriel, Alle | Datenbank-Indizes, Code-Refactoring |
| Dokumentation | Arvin, Alle | README mit Installationsanleitung und erste Präsentationsfolien |

#### Erreichte Ziele:
| Ziel | Person |
|------|--------|
| Warnsystem erkennt kritische Liquiditätsengpässe | Gabriel |
| Liquiditätstrend wird grafisch dargestellt | Tim |
| Vollständiges JWT-Login-System funktionsfähig | Arvin, Tim |
| User können sich registrieren und anmelden | Alle |
| Alle API-Endpoints sind geschützt (nur mit Login) | Arvin |
| Professionelle Login-Seite mit Registrierung | Tim |
| Code ist aufgeräumt und gut dokumentiert | Alle |
| Performance durch Indizes verbessert | Gabriel |
| Professionelle README für GitHub | Arvin |
| Präsentation gestartet | Alle |

#### Aufgetretene Probleme:
| Problem | Person |
|---------|--------|
| Trend-Daten waren zunächst nur simuliert, nicht echt historisch | Tim |
| Merge-Konflikte in Git bei gleichzeitiger Arbeit | Alle |
| Farbauswahl für Warnstufen schwierig (Barrierefreiheit) | Tim |
| JWT-Token-Handling im Frontend war komplex | Arvin, Tim |
| Protected Routes mussten alle API-Calls anpassen | Arvin |

#### Hilfestellung (wer, was):
- Git Merge-Strategien online recherchiert (Alle)
- Color-Contrast-Checker für Accessibility (Tim)
- JWT-Dokumentation und Tutorials studiert (Arvin)
- React Context API Dokumentation (Tim)
- bcrypt-Dokumentation für Passwort-Hashing (Arvin)
- Historische Daten-Speicherung geplant für später (Gabriel)

#### Pendenzenliste:
| Pendenz | Person |
|---------|--------|
| Geldflussrechnung fertigstellen | Arvin |
| Historische Liquiditätsdaten speichern | Gabriel |
| Präsentation ausarbeiten | Alle |

#### Reflexion:
| Reflexion | Person |
|-----------|--------|
| Das JWT-Login-System zu implementieren war spannend! Ich musste viel über Token-basierte Authentication lernen. bcrypt für Passwort-Hashing war neu für mich, aber die Dokumentation war gut. Die Protected Routes einzubauen war aufwendig - musste alle API-Endpoints anpassen. Positiv: Die App ist jetzt sicher! Das Refactoring war überfällig. Die README zu schreiben hat mir geholfen, das Projekt aus Nutzersicht zu sehen. Lernerfolg: Security von Anfang an mitdenken! | Arvin |
| Die User-Tabelle zu erstellen war einfach, aber ich musste überlegen, welche Felder wichtig sind. Das Warnsystem zu implementieren hat Spaß gemacht! Die Logik mit den verschiedenen Status-Levels war interessant. Die Farbauswahl war schwieriger als gedacht - musste auf Barrierefreiheit achten. Merge-Konflikte in Git waren frustrierend, aber wir haben es gemeinsam gelöst. Lernerfolg: Öfter pullen und kleinere Commits machen! | Gabriel |
| Die Login-Seite zu designen war eine Herausforderung - sollte professionell aussehen wie eine Banking-App. React Context für Auth war neu für mich, aber macht Sinn für globales State-Management. Die Trend-Visualisierung ist nur simuliert, weil wir keine historischen Daten speichern. Das fühlt sich wie "cheaten" an, aber für die Demo reicht es. Lernerfolg: Context API ist sehr nützlich für Authentication! | Tim |

#### Vergleich mit dem Zeitplan (Gruppe):
| Soll | Ist |
|------|-----|
| Warnsystem (geplant: 2h Gruppenzeit) | Warnsystem + Trend + JWT-Login + Refactoring + Präsentation (ca. 6h Gruppenzeit) |

**Bewertung:** Viel zusätzliche Arbeit, aber Qualität steigt enorm. JWT-Login war ungeplant, aber wichtig für Security.  
**Status:** Leicht über Zeitplan, aber wichtige Features hinzugefügt.

---

## Woche 6
### Montag – 1. Dezember 2025

#### Arbeitspakete:
| Arbeitspaket | Person | Beschreibung |
|--------------|--------|--------------|
| Geldflussrechnung | Arvin | Vollständige Implementierung mit operativen/Finanzierungs-/Investitionstätigkeiten |
| Historische Daten & Filter | Gabriel, Tim | Liquiditätsdaten-Tracking und Datums-Filter für Berichte |
| Export-Funktionalität | Arvin | Planung und Vorbereitung für Datenexport (JSON) |
| Performance & Qualität | Gabriel, Alle | Performance-Tests mit großen Datenmengen und Bug-Fixing |
| UI-Verfeinerung | Tim | Spacing, Farben, Typography für professionelles Aussehen |
| Dokumentation | Alle | Projektdokumentation weiter ausgearbeitet |

#### Erreichte Ziele:
| Ziel | Person |
|------|--------|
| Geldflussrechnung vollständig funktional | Arvin |
| Echte historische Daten statt Simulation | Gabriel |
| Filter-Funktionalität für Zeiträume | Tim |
| Alle bekannten Bugs behoben | Alle |
| App läuft stabil mit 1000+ Buchungen | Gabriel |
| UI sieht professionell und konsistent aus | Tim |

#### Aufgetretene Probleme:
| Problem | Person |
|---------|--------|
| Geldflussrechnung-Kategorisierung war komplex | Arvin |
| Datums-Handling in JavaScript/SQL unterschiedlich | Tim, Gabriel |
| Performance-Probleme bei vielen Chart-Datenpunkten | Tim |

#### Hilfestellung (wer, was):
- Buchhaltungsbuch für Geldflussrechnung-Kategorien (Arvin)
- Moment.js Library für Datums-Handling (Tim, Gabriel)
- Chart.js Sampling-Plugin für Performance (Tim)

#### Pendenzenliste:
| Pendenz | Person |
|---------|--------|
| Export als PDF implementieren | Arvin |
| Benutzer-Anleitung schreiben | Tim |
| Projektdokumentation finalisieren | Alle |

#### Reflexion:
| Reflexion | Person |
|-----------|--------|
| Die Geldflussrechnung war das schwierigste Feature! Die Kategorisierung in operative/Finanzierungs-/Investitionstätigkeiten war komplex. Ich musste viel recherchieren und habe nicht alles perfekt verstanden. Das Ergebnis funktioniert, aber ich bin nicht 100% sicher ob es buchhalterisch korrekt ist. Hätte früher einen Experten fragen sollen. Lernerfolg: Bei Fachwissen nicht zu stolz sein, um Hilfe zu bitten! | Arvin |
| Die Performance-Tests waren aufschlussreich! Mit 1000+ Buchungen wurde es langsam. Indizes hinzuzufügen hat viel gebracht. Moment.js für Datums-Handling war eine gute Entscheidung, aber die Library ist groß. Das Datums-Handling zwischen JavaScript und SQL war nervig - verschiedene Formate! Positiv: App läuft jetzt flüssig. | Gabriel |
| Das UI-Polishing hat länger gedauert als gedacht. Spacing, Farben, Typography - so viele kleine Details! Aber es macht wirklich einen Unterschied. Die App sieht jetzt professionell aus statt "Studenten-Projekt". Chart.js Sampling-Plugin für Performance war ein guter Fund. Lernerfolg: Design-Details sind wichtig, aber zeitintensiv! | Tim |

#### Vergleich mit dem Zeitplan (Gruppe):
| Soll | Ist |
|------|-----|
| Geldflussrechnung (geplant: 3h Gruppenzeit) | Geldflussrechnung + Historie + Filter + Polishing (ca. 5h Gruppenzeit) |

**Bewertung:** Mehr investiert, aber Feature-Set ist beeindruckend.  
**Status:** Leicht hinter Zeitplan, aber Qualität rechtfertigt es.

---

## Woche 7
### Montag – 8. Dezember 2025

#### Arbeitspakete:
| Arbeitspaket | Person | Beschreibung |
|--------------|--------|--------------|
| Dokumentation & Anleitung | Tim, Arvin | Benutzer-Anleitung, Deployment-Anleitung und Code-Kommentare (JSDoc) |
| Testdaten & Qualitätssicherung | Gabriel, Alle | Beispiel-Kontenplan, Testdaten und Peer-Review |
| Projektdokumentation | Alle | IPERKA-Strukturierung und Screenshots |
| Präsentation | Alle | Präsentation zu 80% fertiggestellt |

#### Erreichte Ziele:
| Ziel | Person |
|------|--------|
| Ausführliche Benutzer-Dokumentation vorhanden | Tim |
| Code ist vollständig kommentiert | Arvin |
| Testdaten für Demo verfügbar | Gabriel |
| Projektdokumentation gut strukturiert | Alle |
| Präsentation fast fertig | Alle |
| Code-Quality sehr hoch nach Review | Alle |

#### Aufgetretene Probleme:
| Problem | Person |
|---------|--------|
| IPERKA-Struktur musste mehrmals angepasst werden | Alle |
| Screenshots mussten für bessere Qualität neu gemacht werden | Tim |
| Zeitdruck bei der Dokumentation spürbar | Alle |

#### Hilfestellung (wer, was):
- IDPA-Reglement mehrmals konsultiert (Alle)
- Beispiel-Dokumentationen von früheren Projekten angeschaut (Alle)

#### Pendenzenliste:
| Pendenz | Person |
|---------|--------|
| Präsentation finalisieren | Alle |
| Letzte Tests durchführen | Gabriel |
| Dokumentation Korrekturlesen | Arvin |

#### Reflexion:
| Reflexion | Person |
|-----------|--------|
| Die IPERKA-Dokumentation zu schreiben war mühsam, aber sinnvoll. Ich musste das ganze Projekt nochmal durchdenken und strukturieren. JSDoc-Kommentare im Code hätte ich früher machen sollen - jetzt musste ich alles nachträglich kommentieren und habe teilweise vergessen, was der Code macht. Lernerfolg: Dokumentation parallel zum Coden, nicht am Ende! | Arvin |
| Die Testdaten zu erstellen hat mir geholfen, Fehler zu finden, die ich sonst übersehen hätte. Der Beispiel-Kontenplan ist realistisch und macht die Demo überzeugender. Die IPERKA-Struktur musste ich mehrmals anpassen - das Reglement ist strenger als gedacht. Positiv: Jetzt verstehe ich IPERKA wirklich! | Gabriel |
| Screenshots zu machen klingt einfach, aber ich musste sie mehrmals neu machen für bessere Qualität. Die Deployment-Anleitung zu schreiben hat gezeigt, dass unser Setup kompliziert ist - hätten wir einfacher halten sollen. Die Peer-Review war wertvoll - andere sehen Fehler, die man selbst übersieht. Zeitdruck ist spürbar! | Tim |

#### Vergleich mit dem Zeitplan (Gruppe):
| Soll | Ist |
|------|-----|
| Dokumentation (geplant: 3h Gruppenzeit) | Dokumentation + Screenshots + Review (ca. 4h Gruppenzeit) |

**Bewertung:** Dokumentation braucht Zeit, aber ist sehr gründlich.  
**Status:** Im Zeitplan für Abgabe nächste Woche.

---

## Woche 8
### Montag – 15. Dezember 2025

#### Arbeitspakete:
| Arbeitspaket | Person | Beschreibung |
|--------------|--------|--------------|
| Finale Qualitätssicherung | Alle | Testing-Session, Bug-Fixes und Installations-Test auf frischem PC |
| Dokumentation finalisieren | Tim, Arvin | Korrekturlesen, Quellen und Literaturverzeichnis vervollständigen |
| Präsentation vorbereiten | Alle | Präsentation finalisieren, Demo-Szenario vorbereiten und proben |
| Projektabschluss | Alle | Reflexion und Learnings dokumentieren |

#### Erreichte Ziele:
| Ziel | Person |
|------|--------|
| Alle Features funktionieren einwandfrei | Alle |
| Präsentation ist professionell und überzeugend | Alle |
| Dokumentation ist vollständig und fehlerfrei | Alle |
| Installation funktioniert problemlos | Gabriel |
| Demo ist vorbereitet und eingeplant | Alle |
| Projekt ist abgabebereit | Alle |

#### Aufgetretene Probleme:
| Problem | Person |
|---------|--------|
| Kleine CSS-Inkonsistenzen auf verschiedenen Browsern | Tim |
| Ein Edge-Case Bug bei negativen Beträgen | Gabriel |
| Zeitdruck kurz vor Abgabe | Alle |

#### Hilfestellung (wer, was):
- Cross-Browser-Testing mit verschiedenen Browsern (Tim)
- Edge-Case-Tests mit ungewöhnlichen Daten (Gabriel)
- Gegenseitige Unterstützung im Team (Alle)

#### Pendenzenliste:
| Pendenz | Person |
|---------|--------|
| Projekt auf GitHub finalisieren | Alle |
| Abgabe vorbereiten | Alle |
| Für Präsentation üben | Alle |

#### Reflexion:
| Reflexion | Person |
|-----------|--------|
| Die finale Testing-Session hat noch einige Bugs aufgedeckt - gut, dass wir Zeit dafür eingeplant haben! Der Edge-Case mit negativen Beträgen war peinlich. Die Quellen zu vervollständigen war mühsam - hätte ich von Anfang an mitdokumentieren sollen. Positiv: Das Projekt ist jetzt wirklich abgabebereit. Lernerfolg: Testing ist essentiell, nicht optional! Stolz auf das Team und was wir erreicht haben! | Arvin |
| Die Cross-Browser-Tests waren aufschlussreich - CSS-Inkonsistenzen zwischen Browsern sind nervig! Die Installations-Anleitung auf einem frischen PC zu testen war smart - wir haben fehlende Schritte gefunden. Zeitdruck kurz vor Abgabe ist stressig, aber wir haben es geschafft. Die Kombination von Buchhaltung und Programmierung war herausfordernd aber lehrreich! | Gabriel |
| Das Demo-Szenario vorzubereiten und zu proben war wichtig - ohne Übung wäre die Präsentation chaotisch geworden. Die letzten CSS-Fixes waren Perfektionismus, aber es lohnt sich. Nervös wegen der Präsentation, aber auch stolz auf das Ergebnis. React macht mir jetzt wirklich Spaß - will mehr damit machen! Teamarbeit war super! | Tim |

#### Vergleich mit dem Zeitplan (Gruppe):
| Soll | Ist |
|------|-----|
| Finalisierung (geplant: 2h Gruppenzeit) | Finalisierung + Testing + Proben (ca. 3h Gruppenzeit) |

**Bewertung:** Intensive letzte Woche, aber alles geschafft!  
**Status:** Projekt erfolgreich abgeschlossen, bereit für Abgabe!

---

## Woche 9
### Montag – 22. Dezember 2025

#### Arbeitspakete:
| Arbeitspaket | Person | Beschreibung |
|--------------|--------|--------------|
| Letzte Bugfixes und Verbesserungen | Alle | Finale Code-Optimierungen und letzte Anpassungen |
| Dokumentation finalisieren | Alle | Letzte Korrekturen an der Dokumentation |
| Präsentationsvorbereitung | Alle | Präsentation erstellen und Demo-Szenario vorbereiten |
| Projektabgabe vorbereiten | Alle | Alle Dateien für Abgabe zusammenstellen |

#### Erreichte Ziele:
| Ziel | Person |
|------|--------|
| Alle letzten Bugs behoben | Alle |
| Dokumentation vollständig | Alle |
| Präsentation erstellt | Alle |
| Projekt abgabebereit | Alle |

#### Aufgetretene Probleme:
| Problem | Person |
|---------|--------|
| Letzte kleine Anpassungen nötig | Alle |

#### Hilfestellung (wer, was):
- Gegenseitige Unterstützung im Team (Alle)

#### Reflexion:
| Reflexion | Person |
|-----------|--------|
| Letzte Woche vor Weihnachtsferien - nochmal alles durchgegangen und finalisiert. Projekt ist jetzt wirklich fertig. Gute Vorbereitung für die Präsentation im Januar. | Alle |

**Bewertung:** Projekt ist abgabebereit!  
**Status:** Bereit für Abgabe und Präsentation im Januar.

---

## Präsentation
### Montag – 25. Januar 2026

#### Arbeitspakete:
| Arbeitspaket | Person | Beschreibung |
|--------------|--------|--------------|
| Präsentation & Demo | Alle | Finale Präsentation vor der Klasse, Live-Demo und Fragen beantworten |
| Projektabgabe | Arvin, Tim | Projektdokumentation und Arbeitsjournal final abgeben |
| Projektveröffentlichung | Alle | Projekt auf GitHub veröffentlichen |
| Retrospektive | Alle | Lessons Learned Meeting durchführen |

#### Erreichte Ziele:
| Ziel | Person |
|------|--------|
| Erfolgreiche Präsentation mit positiver Resonanz | Alle |
| Demo lief ohne technische Probleme | Gabriel |
| Alle Fragen kompetent beantwortet | Alle |
| Dokumentation vollständig abgegeben | Arvin, Tim |
| Projekt ist öffentlich verfügbar | Alle |
| Team-Retrospektive abgeschlossen | Alle |

#### Aufgetretene Probleme:
| Problem | Person |
|---------|--------|
| Nervosität vor der Präsentation | Alle |
| Eine Frage zur Geldflussrechnung war unerwartet | Arvin |

#### Hilfestellung (wer, was):
- Gegenseitige Unterstützung im Team (Alle)
- Vorbereitung hat sich ausgezahlt (Alle)

#### Reflexion:
| Reflexion | Person |
|-----------|--------|
| Die Präsentation lief besser als erwartet, trotz Nervosität! Die Live-Demo hat funktioniert - zum Glück hatten wir geprobt. Eine Frage zur Geldflussrechnung konnte ich nicht perfekt beantworten - das zeigt, dass ich das Thema noch nicht 100% durchdrungen habe. Insgesamt bin ich sehr stolz auf das Projekt. Größter Lernerfolg: Full-Stack-Entwicklung ist machbar und macht Spaß! Würde beim nächsten Mal früher mit Fachwissen-Recherche beginnen. | Arvin |
| Die Demo zu führen war aufregend! Alle Features haben funktioniert, keine technischen Probleme. Das Feedback war positiv - besonders die Charts wurden gelobt. Buchhaltung mit Programmierung zu verbinden war anfangs komisch, aber am Ende sehr interessant. Größter Lernerfolg: Komplexe SQL-Queries und Datenbank-Design. Teamarbeit war ausgezeichnet - jeder hat seine Stärken eingebracht! | Gabriel |
| Die Präsentation war stressig, aber erfolgreich! Die Screenshots und das Design wurden positiv erwähnt - das freut mich! React ist jetzt meine Lieblings-Library. Größter Lernerfolg: UI/UX-Design und wie wichtig Details sind. Was ich anders machen würde: CSS früher strukturieren, nicht erst am Ende. Aber insgesamt bin ich sehr zufrieden. Tolles Team, tolle Erfahrung - würde es wieder so machen! | Tim |

**Gesamtbewertung des Projekts:**  
✅ Alle IDPA-Anforderungen erfüllt  
✅ Moderne, professionelle Web-Applikation erstellt  
✅ Vollständige Dokumentation gemäß IPERKA  
✅ Erfolgreiche Teamarbeit über 9 Wochen  
✅ Technische Skills deutlich erweitert  

**Status:** **PROJEKT ERFOLGREICH ABGESCHLOSSEN!** 🎉

---

## Zusammenfassung

**Projektdauer:** 9 Wochen (27. Oktober 2025 - 25. Januar 2026)  
**Team:** Arvin (Backend/API), Gabriel (Datenbank/Logik), Tim (Frontend/Design)  
**Technologie:** React, Node.js, Express, SQLite, Chart.js  
**Ergebnis:** Vollständig funktionsfähige Web-Applikation für Liquiditätsnachweis

**Statistik:**
- 9 Arbeitstage à ca. 3-5 Stunden
- 4 Hauptseiten (Dashboard, Kontenplan, Buchungen, Bilanz, Liquidität)
- 15+ React-Komponenten
- 8 REST-API-Endpoints
- 3 Datenbank-Tabellen
- 1500+ Zeilen Code
- 100% der Anforderungen erfüllt

**Lessons Learned:**
1. Gute Planung spart später viel Zeit
2. Regelmäßige Code-Reviews verbessern die Qualität
3. Dokumentation parallel zum Programmieren macht Sinn
4. Teamarbeit mit klarer Aufgabenteilung funktioniert hervorragend
5. Moderne Web-Technologien sind sehr leistungsfähig
