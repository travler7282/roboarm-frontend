# roboarm-frontend

Standalone React + TypeScript frontend for RoboArm, built with Vite.

## Deployment Path

This app is deployed under:

- Production: `https://www.travler7282.com/apps/roboarm/`
- Development: `https://dev.travler7282.com/apps/roboarm/`

Vite base path is configured to `/apps/roboarm/` in `vite.config.ts`.

## Branch to Environment Mapping

- `dev` branch -> development deployment workflow (`.github/workflows/deploy_dev.yml`)
- `main` branch -> production deployment workflow (`.github/workflows/deploy_prod.yml`)

## Local Development

Run from repository root:

```bash
npm install
npm run dev
```

## Validation Commands

```bash
npm run lint
npm run test
npm run build
```

## CI/CD Summary

Both deploy workflows perform these steps:

1. Install dependencies
2. Lint, test, and build the frontend
3. Sync `dist/` to S3 under `apps/roboarm/`
4. Invalidate CloudFront for `/apps/roboarm/*`

## Backend API Notes

The frontend defaults to RoboArm API endpoints under `/roboarm/api/v1` on the API domain.
If needed, override with `VITE_ROBOARM_API_BASE`.
