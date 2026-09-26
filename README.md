# Sound Realms Web

[![Netlify Status](https://api.netlify.com/api/v1/badges/454468ff-0aa0-4c6b-8ae4-ea131afddb11/deploy-status)](https://app.netlify.com/sites/sound-realms/deploys)

The website of Sound Realms.

Visit the page at [www.soundrealms.com](https://www.soundrealms.com).

The live version runs on Node v. 20 – this is configurable on [Netlify](https://app.netlify.com/sites/sound-realms).

## Project setup
```
npm ci
```

### Start the local development server
```
npm run dev
```

### Build for production
```
npm run build
```

### Lint the source tree
```
npm run lint
```

## Optional API endpoint overrides

The site defaults to the production API endpoints in `src/apiConfig.js`. For local or preview testing, set any of these Vite env vars in a `.env.local` file before running `npm run dev`:

```bash
VITE_CHECKOUT_API_URL=https://example.com/api/create-checkout-session
VITE_UNLOCKED_CONTENT_API_URL=https://example.com/api/unlocked-content
VITE_ACTIVATION_CODE_API_URL=https://example.com/api/use-code
VITE_ANALYTICS_API_URL=https://example.com/analytics
```
