# Sound Realms Web

[![Netlify Status](https://api.netlify.com/api/v1/badges/454468ff-0aa0-4c6b-8ae4-ea131afddb11/deploy-status)](https://app.netlify.com/sites/sound-realms/deploys)

The website of Sound Realms.

Visit the page at [www.soundrealms.com](https://www.soundrealms.com).

The live version runs on Node v. 20 – this is configurable on [Netlify](https://app.netlify.com/sites/sound-realms).

## Project setup
```bash
npm ci
```

## Development server
```bash
npm run dev
```

## Production build
```bash
npm run build
```

## Lint the source tree
```bash
npm run lint
```

## Runtime API configuration
The site now reads its API endpoints from Vite environment variables, with production defaults kept in `src/apiConfig.js`.

Set these variables in `.env.local` or the Netlify site config when you need to override them:

- `VITE_CHECKOUT_SESSION_URL`
- `VITE_UNLOCKED_CONTENT_URL`
- `VITE_USE_ACTIVATION_CODE_URL`
- `VITE_ANALYTICS_URL`
