# Chalo Ghume - Expedia Clone

A React and Redux web application that replicates core Expedia functionality: searching, filtering, and booking hotels and flights, with a cart and an admin panel. Built as the Prelude Project for SE 3290 (Software Project Management), based on the open-source project by Kumkum Dutta and team.

## Tech Stack

- React 18
- Redux, Redux Thunk, and React-Redux
- Firebase Authentication (phone/OTP)
- json-server (mock REST API for hotel, flight, and admin data)
- Chakra UI and styled-components
- Axios and React Router

## Features

### User Experience

- Landing page
- Login and signup via Firebase phone OTP
- Flight and hotel detail browsing
- Flight, hotel, and holiday package search
- Search result sorting and filtering
- Flight and hotel booking
- Cart section

### Admin Panel

- Manage hotel and flight listings
- View booking requests and user details
- Oversee cart and transaction workflows

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS) and npm
- A free [Firebase project](https://console.firebase.google.com/) with the Phone sign-in provider enabled

### 1. Clone and Install

```bash
git clone https://github.com/YOUR-USERNAME/Expedia-clone.git
cd Expedia-clone
npm install --legacy-peer-deps
```

`--legacy-peer-deps` is required because of a peer-dependency mismatch between React 18 and some testing-library packages.

### 2. Configure Firebase

1. Create a project in the [Firebase Console](https://console.firebase.google.com/).
2. Enable **Authentication > Sign-in method > Phone**.
3. Register a web app and copy the generated `firebaseConfig` object.
4. Paste it into `src/01_firebase/config_firebase.js`, replacing the placeholder values.

### 3. Run Locally

Run the React app:

```bash
npm start
```

In a second terminal, run the mock API:

```bash
npm run server
```

The React app runs at `http://localhost:3000`, and json-server runs at `http://localhost:8080`. Both processes need to be running for search, listings, and the admin panel to work.

### 4. Build for Production

```bash
npm run build
```

This outputs an optimized production bundle to `build/`.

## Deployment

This project can be deployed to any static host that supports Create React App builds.

### Vercel (Recommended)

1. Push your fork to GitHub.
2. In Vercel, select **Add New > Project** and import the repository.
3. Vercel auto-detects the Create React App build settings.
4. Deploy, then verify authentication, search, booking, and the admin panel on the live URL.

## Project Structure

```text
src/
├── 01_firebase/       # Firebase config and initialization
├── Components/        # Shared UI components (Navbar, Footer, etc.)
├── Pages/
│   ├── Admin/          # Admin dashboard, product/hotel/flight management
│   ├── Flights/        # Flight search, listing, and cards
│   ├── Stay/           # Hotel search, filters, and listing
│   └── ThingsTodo/     # Destination browsing
├── Redux/              # Store, reducers, and actions (auth, hotels, flights)
└── App.js

db.json                # Mock data served by json-server
```

## Contributing

See `CONTRIBUTING.md` for guidelines on submitting issues and pull requests.

## Credits

Originally built by Kumkum Dutta (Team Lead), Ashish, Amit, Sagar Balsaraf, and Sarim. Adapted for SE 3290 coursework. Modified by Ben Boldog, Gavin Herum, and Malak Mansour.

