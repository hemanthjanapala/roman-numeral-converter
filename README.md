# Roman Numeral Converter – Full Stack Project

Hi! This is a personal full-stack project I built as part of the Adobe GenStudio Engineering Test. The idea is simple: you give the app a number between 1 and 3999, and it gives you back the Roman numeral version.

I built the backend from scratch (no libraries for conversion), connected it to a React frontend, styled it with Adobe's React Spectrum, and wrapped the whole thing in Docker so it's easy to run.

---

## Tech Stack

- **Backend:** Node.js, Express, CORS
- **Frontend:** React (TypeScript), React Spectrum UI
- **Metrics:** express-prom-bundle (Prometheus-style metrics)
- **Containerization:** Docker, Docker Compose
- **Observability:** Console logs, basic tracing, and `/metrics` endpoint

---

## Features

- Convert numbers (1–3999) to Roman numerals
- Handles invalid inputs with clear errors
- Nice clean UI using Adobe React Spectrum
- Works in light/dark mode based on system settings
- Metrics endpoint: `http://localhost:8080/metrics`
- Runs fully in Docker

---

## Clone This Repository

To get started, clone the repository to your local machine:

```bash
git clone https://github.com/your-username/roman-numeral-converter.git
cd roman-numeral-converter
```

---
## How to Run It

### Prerequisites
- Make sure you have [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed

### Run the App
Open terminal in the project root (where `docker-compose.yml` is) and run:

```bash
docker-compose up --build
```

- The backend will run on: `http://localhost:8080`
- The frontend will be on: `http://localhost:3000`

### Use It
1. Open your browser and go to [http://localhost:3000](http://localhost:3000)
2. Enter a number like `2024`
3. Click "Convert to Roman"
4. You should see: `MMXXIV`

---

## Roman Numeral Logic

I wrote the conversion function myself using a basic map of decimal values to Roman symbols. It loops through the values and builds the Roman numeral string.

> The conversion rules are based on [this Roman numeral system reference](https://en.wikipedia.org/wiki/Roman_numerals).
---

## Observability

I added basic observability features:

| Feature   | Tool/Method           |
|-----------|------------------------|
| Logs      | `console.log()` usage in backend |
| Metrics   | `express-prom-bundle` at `/metrics` |
| Tracing   | Simple `Date.now()` timings around conversion |

---
## Why I Chose These Dependencies

- **Express** – Lightweight, fast, and flexible web server to handle routing and middleware. Perfect for simple REST APIs like this one.
- **CORS** – To allow cross-origin requests between the frontend (React app) and backend (Node.js server).
- **React + React Spectrum** – React is required for the test, and Spectrum gives a beautiful, accessible UI out of the box with built-in light/dark theming.
- **Jest** – Easy-to-use testing framework for both unit and integration tests.
- **Supertest** – Great tool for making HTTP assertions in integration tests without spinning up an actual server.
- **express-prom-bundle** – Quickly exposes Prometheus-style metrics without custom setup. Perfect for observability with minimal code.

---


## Testing

This project uses **Jest** for unit and integration testing.

### What’s Covered:
- **Unit Tests** for the Roman numeral conversion logic
- **Integration Tests** for the backend API endpoint `/romannumeral`
- Edge cases like non-numeric, missing, or out-of-range input are also tested

### How to Run Tests:

In the `server/` directory, run:

```bash
npm install
npm test
```

To view test coverage:

```bash
npx jest --coverage
```

You’ll get a full report of tested lines, functions, and branches.


## Project Structure

```
roman-numeral-converter/
├── server/         # Express backend
│   ├── index.js
│   └── Dockerfile
├── client/         # React frontend
│   ├── src/
│   └── Dockerfile
└── docker-compose.yml
```

---

## Notes

- This was a fun little project to build and containerize!
- I stuck to the rules: no external Roman numeral packages, and everything runs inside Docker.
- I'm happy with how clean and portable it turned out.

---

## License

This project was developed for a coding test and is intended for demonstration and learning purposes.