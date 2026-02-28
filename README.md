# Game Verse

> A full-featured game discovery application built with React and TypeScript.

Game Verse lets users browse, search, and filter video games using data from the [RAWG.io API](https://rawg.io/apidocs) — one of the largest gaming databases available. The project was built to demonstrate a production-quality frontend architecture using modern tooling including React Query for server state, Zustand for client state, and Chakra UI for accessible, responsive design.

**Live Demo:** [gameverse.shahzadtariq.com](https://gameverse.shahzadtariq.com/)

![Game Verse Preview](public/preview.png)

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Security Considerations](#security-considerations)
- [License](#license)

---

## Features

- **Game Discovery** — Browse thousands of games with genre, platform, and rating filters applied in real time.
- **Search** — Instant search with debounced input to minimize unnecessary API calls.
- **Sorting** — Sort results by relevance, release date, rating, and more.
- **Infinite Scrolling** — Content loads progressively as the user scrolls, avoiding pagination overhead.
- **Animated UI** — Smooth page transitions and card animations via Framer Motion.
- **Responsive Design** — Fully functional across mobile, tablet, and desktop viewports.
- **Efficient Data Fetching** — React Query handles caching, background refetching, and request deduplication automatically.

---

## Tech Stack

| Layer             | Technology           | Version |
| ----------------- | -------------------- | ------- |
| UI Framework      | React                | 18      |
| Language          | TypeScript           | 5       |
| Component Library | Chakra UI            | 2       |
| Server State      | TanStack React Query | 4       |
| Client State      | Zustand              | 4       |
| Animations        | Framer Motion        | 12      |
| Routing           | React Router DOM     | 6       |
| HTTP Client       | Axios                | 1       |
| Data Source       | RAWG.io REST API     | —       |

---

## Getting Started

### Prerequisites

- Node.js 16 or higher
- npm or yarn

### Installation

Clone the repository and install dependencies:

```sh
git clone https://github.com/Shaz-gill/react-typescript-game-verse.git
cd react-typescript-game-verse
npm install
```

### Environment Setup

This project uses the RAWG.io API. Create a free account at [rawg.io](https://rawg.io/apidocs) to obtain an API key, then add it to the project:

```sh
# .env
VITE_RAWG_API_KEY=your_api_key_here
```

### Running the App

```sh
npm run dev
```

The development server will start at `http://localhost:5173`.

### Building for Production

```sh
npm run build
```

Output is generated in the `dist/` directory and can be served by any static hosting provider.

---

## Project Structure

```
src/
├── components/       # Reusable UI components
├── hooks/            # Custom React hooks (data fetching, filters)
├── pages/            # Route-level page components
├── services/         # Axios instance and API helpers
├── store/            # Zustand state slices
└── types/            # Shared TypeScript interfaces and types
```

---

## Security Considerations

The current implementation includes the API key directly in the client bundle, which is acceptable for a demo project but should not be used in production. For a production deployment:

- Move all RAWG API calls to a backend service or serverless function.
- Store the API key as a server-side environment variable, never exposing it to the client.
- Add rate limiting and request validation on the server layer.

---

## License

This project is licensed under the [MIT License](LICENSE).
