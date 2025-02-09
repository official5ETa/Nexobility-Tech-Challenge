# Nexobility Tech-Challenge

## Projektbeschreibung
Dieses Projekt wurde im Rahmen der **Nexobility Tech-Challenge** entwickelt und hat das Ziel, eine zentrale Plattform zur **Erfassung und Nachverfolgung von Diebstählen** bereitzustellen.  
Hintergrund ist die steigende Anzahl von Diebstählen, insbesondere in Baumärkten und bei Benzindiebstählen, die von organisierten Banden durchgeführt werden.  
Das System soll die Verwaltung dieser Vorfälle erleichtern und Transparenz über Filialen hinweg schaffen.

## Zielsetzung
Das Projekt soll als **Minimum Viable Product (MVP)** umgesetzt werden und ermöglicht:
- **Diebstähle einfach und umfassend zu erfassen** (inkl. Täter- und Fahrzeugbeschreibung)
- **Eine filter- und sortierbare Übersicht aller Vorfälle** bereitzustellen
- **Eine Detailansicht für erfasste Vorfälle** zur Einsicht aller relevanten Informationen

## Tech-Stack

### Frontend
- **Framework:** Angular 14+ ([Angular](https://angular.dev/))
- **UI-Komponenten:** PrimeNG ([PrimeNG](https://primeng.org/)), Bootstrap ([Bootstrap](https://getbootstrap.com/))
- **Testing:** Jest ([Jest](https://jestjs.io/))
- **Code-Qualität:** ESLint ([ESLint](https://eslint.org/)), Prettier ([Prettier](https://prettier.io/))

### Backend
- **Framework:** NestJS ([NestJS](https://nestjs.com/))
- **Datenbank:** MongoDB ([MongoDB](https://www.mongodb.com/))
- **ORM:** Mongoose ([Mongoose](https://mongoosejs.com/))
- **Testing:** Jest
- **Code-Qualität:** ESLint, Prettier

### Storage & Infrastruktur
- **Dateispeicherung:** S3-kompatibler Speicher ([AWS S3](https://aws.amazon.com/de/s3/) oder [MinIO](https://min.io/))
- **Repository & Versionierung:** GitHub ([GitHub](https://github.com/))
- **Monorepo-Verwaltung:** Nx ([Nx Monorepo](https://nx.dev/))

## Kern-Features

### 1. Vorfälle erfassen
- Neue Diebstahl-Vorfälle mit folgenden Details speichern:
    - **Tatbestand:** Zeitpunkt, Standort, Warenwert, Beschreibung, optionale Bilder/Dokumente
    - **Täter:** Geschlecht, Körpergröße, Statur, Merkmale (Tätowierung, Schmuck, Brille etc.)
    - **Fluchtfahrzeug:** Typ, Kennzeichen, Farbe, optionale Notizen

### 2. Vorfälle übersichtlich anzeigen
- Tabellenansicht aller erfassten Vorfälle mit **Filter- und Sortierfunktionen**
- Navigation zur **Detailansicht eines Vorfalls**

### 3. Vorfälle einsehen
- Detailansicht mit allen erfassten Informationen eines Vorfalls