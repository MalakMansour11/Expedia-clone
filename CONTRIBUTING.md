# Contributing to Chalo Ghume — Expedia Clone

Thanks for your interest in contributing! This document covers how to get set up and submit changes.

## Getting set up

1. Fork the repository and clone your fork.
2. Install dependencies: `npm install --legacy-peer-deps`
3. Set up your own Firebase project and add its config to `src/01_firebase/config_firebase.js` (see README for details). Never commit real Firebase credentials in a pull request — use placeholder values in any code samples.
4. Run `npm start` and `npm run server` in separate terminals to develop locally.

## Making a change

1. Create a branch off `main` with a descriptive name, e.g. `fix/hotel-filter-bug` or `feature/flight-sort`.
2. Make your changes, keeping commits small and focused.
3. Run `npm run build` locally to confirm the project still compiles before opening a PR.
4. Follow the existing code style (functional components, hooks, Redux Thunk for async actions).

## Submitting a pull request

1. Push your branch and open a PR against `main`.
2. Describe what the change does and why, and link any related issue.
3. Include screenshots or a short clip for UI changes.
4. Be responsive to review feedback — small follow-up commits are fine.

## Reporting bugs

Open an issue with:

- Steps to reproduce
- Expected vs. actual behavior
- Browser/OS and screenshots if relevant

## Code of conduct

Be respectful and constructive in issues, PRs, and reviews. This is a learning project — questions and first-time contributions are welcome.
