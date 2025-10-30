# BuyMeACoffee Africa API

Express + Prisma backend connected to Neon (PostgreSQL).

## Getting started

1. Copy the appropriate environment template:
   - For local development: `cp .env.example .env.development.local`
   - For production deployments: `cp .env.production.example .env.production`
   Fill in at least:
   - `DATABASE_URL` (Neon connection string with `sslmode=require`)
   - `JWT_SECRET` (strong random string)
   - `GITHUB_CLIENT_ID` / `GITHUB_CLIENT_SECRET` / `GITHUB_REDIRECT_URI`
   - `RATE_LIMIT_GLOBAL_MAX` / `RATE_LIMIT_AUTH_MAX` (tighten for production as needed)
   - Update `CORS_ORIGIN` with the allowed frontend origins
2. Install dependencies from the monorepo root:
   ```bash
   pnpm install --filter buymeacoffee-africa-server --no-frozen-lockfile
   ```
3. Apply the Prisma schema on your Neon database:
   ```bash
   pnpm --filter buymeacoffee-africa-server prisma migrate deploy
   ```
   _If you need to generate fresh SQL migrations locally, run_
   ```bash
   pnpm --filter buymeacoffee-africa-server prisma migrate dev --name init
   ```
4. Start the API:
   ```bash
   pnpm --filter buymeacoffee-africa-server dev
   ```

## Available scripts

- `pnpm --filter buymeacoffee-africa-server dev` – run the API with nodemon
- `pnpm --filter buymeacoffee-africa-server start` – run the compiled API
- `pnpm --filter buymeacoffee-africa-server prisma generate` – regenerate Prisma client
- `pnpm --filter buymeacoffee-africa-server prisma migrate deploy` – apply migrations in production

## Authentication flow

- `POST /api/auth/register` – email/password signup (returns `{ token, user }`)
- `POST /api/auth/login` – email/password login
- `POST /api/auth/github` – GitHub OAuth code exchange (expects `{ code }`)
- `GET /api/auth/me` – returns the authenticated user (requires `Authorization: Bearer <token>`)

The JWT token expires after 1 hour. Rotate the secret periodically and consider adding refresh tokens before production launch.

## Health & monitoring

- `GET /health` – checks database connectivity
- Structured request logs are emitted via `morgan`; integrate your log shipper or monitoring stack here.

## Deployment notes

- The frontend currently rewrites all Vercel routes to `/`. Deploy this API separately (e.g., Render, Railway, or Vercel serverless functions) and point `VITE_API_BASE_URL` to the public API URL.
- Keep environment files out of version control – use `.env.development.local` locally and configure production secrets via your hosting provider’s secret manager.
- Rotate JWT secrets, GitHub OAuth credentials, and database passwords regularly. Tighten rate limits (`RATE_LIMIT_*`) before going live.
