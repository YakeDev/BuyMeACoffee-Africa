# BuyMeACoffee Africa API

Express + Prisma backend connected to Neon (PostgreSQL).

## Getting started

1. Copy `.env.example` to `.env` and fill in:
   - `DATABASE_URL` (Neon connection string with `sslmode=require`)
   - `JWT_SECRET` (strong random string)
   - `GITHUB_CLIENT_ID` / `GITHUB_CLIENT_SECRET` / `GITHUB_REDIRECT_URI`
   - Optional: adjust `CORS_ORIGIN` for your frontend URLs
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
