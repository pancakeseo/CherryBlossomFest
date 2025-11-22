# Deployment notes

## Netlify
- Build command: `npm run build`
- Publish directory: `dist/public`
- Node version: 20 (configured in `netlify.toml`).
- Single-page app routing is handled via a wildcard redirect to `/index.html`.

## Bolt hosting
- Build command: `npm run build`
- Start command: `npm start`
- Output directory: `dist/public`
- Node environment: production (`NODE_ENV=production`).

These settings are captured in `bolt.config.json` and `netlify.toml` so hosted deployments automatically pick up the correct build and runtime configuration.

## Cloudflare Pages
- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Assets directory: configured via `wrangler.jsonc` to `dist/public`

The `wrangler.jsonc` file sets the assets directory so `wrangler deploy` uploads the static build instead of expecting a Worker entry point.
