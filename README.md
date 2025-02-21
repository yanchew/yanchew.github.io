# Yanchew Website

Eine moderne Unternehmenswebsite, entwickelt mit Next.js, TypeScript und Tailwind CSS.

## Technologie-Stack

- **Frontend Framework:** Next.js 14
- **Sprache:** TypeScript
- **Styling:** Tailwind CSS
- **UI Komponenten:** Custom Components
- **Icons:** Radix UI Icons
- **Theming:** Dark/Light Mode mit next-themes

## Projektstruktur

```
projekt-b/
├── src/
│   ├── app/              # Next.js App Router
│   ├── components/       # React Komponenten
│   └── lib/             # Utilities und Hilfsfunktionen
├── public/              # Statische Dateien
└── ...
```

## Entwicklung

### Voraussetzungen

- Node.js (LTS Version)
- npm oder yarn
- Git

### Installation

1. Repository klonen:
   ```bash
   git clone git@github.com:yanchew/ProjectB.git
   cd ProjectB
   ```

2. Abhängigkeiten installieren:
   ```bash
   npm install
   ```

3. Entwicklungsserver starten:
   ```bash
   npm run dev
   ```

### Branch-Struktur

- `main` - Produktionsversion
- `develop` - Entwicklungsversion
- `feature/*` - Feature-Branches
- `bugfix/*` - Bugfix-Branches
- `release/*` - Release-Branches

### Entwicklungsworkflow

1. Neuen Feature-Branch erstellen:
   ```bash
   git checkout develop
   git checkout -b feature/name-des-features
   ```

2. Änderungen committen:
   ```bash
   git add .
   git commit -m "Beschreibung der Änderungen"
   ```

3. Feature-Branch pushen:
   ```bash
   git push -u origin feature/name-des-features
   ```

4. Pull Request erstellen von Feature-Branch nach `develop`

## Deployment

Die Website wird automatisch bei Push auf den `main` Branch deployed.

## Lizenz

ISC 