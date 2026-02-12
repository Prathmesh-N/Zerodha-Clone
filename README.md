# Zerodha Clone

A full-stack Zerodha-inspired trading platform clone with:

- `frontend` (landing + auth pages)
- `dashboard` (portfolio/trading UI)
- `backend` (Express + MongoDB API with JWT cookie auth)

## Features

- User signup/login/logout
- JWT-based authentication using HTTP-only cookies
- Auth check endpoint (`/me`)
- Holdings, positions, and order APIs
- Separate landing app and dashboard app
- Responsive React UI with charts (dashboard)

## Tech Stack

- **Frontend/Dashboard:** React, React Router, Axios, MUI, Chart.js
- **Backend:** Node.js, Express, MongoDB, Mongoose, JWT, bcrypt
- **Auth:** Cookie-based JWT session

## Project Structure

```text
Zerodha Clone/
  backend/
  frontend/
  dashboard/
