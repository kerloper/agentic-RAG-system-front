# Kerloper RAG UI

A minimal, efficient chat interface for querying the Kerloper RAG knowledge base. Built with Vue 3 and powered by a retrieval-augmented generation backend.

## Description

Kerloper RAG UI is a single-page chat application that provides an intuitive interface for users to ask questions and receive answers sourced from a knowledge base. The application handles API communication, displays loading states, manages errors gracefully, and presents both answers and their sources in a clean, user-friendly format.

## Tech Stack

- **Vue 3** - Progressive JavaScript framework with Composition API
- **Tailwind CSS** - Utility-first CSS framework for responsive design
- **Vuex 4** - State management for centralized application state
- **useFetch** - Custom composable for handling HTTP requests to the backend API

## Features

- **Single Page Chat Interface** - Streamlined UX for asking questions and viewing answers
- **API Integration** - Seamless communication with backend via POST `/api/ask` endpoint
- **Answer & Sources Display** - Presents answers alongside relevant source citations
- **Loading State** - Visual feedback while waiting for backend responses
- **Error Handling** - Graceful error states when backend is unreachable
- **Responsive Design** - Works across desktop and mobile devices

## Project Structure

```
src/
├── components/        # Vue components (chat interface, message displays, etc.)
├── store/            # Vuex store modules for state management
├── composables/      # Reusable composition functions (useFetch, API calls, etc.)
├── App.vue          # Root application component
└── main.js          # Application entry point
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager
- **Kerloper RAG Core backend** running locally on `http://localhost:3000`

### Installation

1. Install dependencies:

```bash
npm install
```

2. Configure the backend API URL (see [Environment Variables](#environment-variables))

3. Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the next available port).

### Build for Production

```bash
npm run build
```

## Environment Variables

Create a `.env` file in the project root with the following variable:

```env
VITE_API_URL=http://localhost:3000
```

**`VITE_API_URL`** - The base URL for the Kerloper RAG Core backend API. The application will send requests to `{VITE_API_URL}/api/ask`.

## Requirements

This frontend application requires the **Kerloper RAG Core backend** to be running locally. The backend provides:
- The `/api/ask` endpoint that accepts POST requests with questions
- Response data containing answers and source citations
- Error responses for invalid or unreachable states

Ensure the backend is started and accessible at the configured API URL before using the application.

## License

All rights reserved.