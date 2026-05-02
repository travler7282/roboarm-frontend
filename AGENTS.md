# AGENTS.md - roboarm-frontend

This file provides repository-specific guidance for coding agents.

## Repository Scope

This repository is a standalone RoboArm frontend app.

- Stack: React 19 + TypeScript + Vite
- Entry point: `src/main.tsx`
- Main UI: `src/App.tsx`
- Build output: `dist/`

Do not assume monorepo folders such as `apps/`, `backends/`, or workspace scripts exist.

## Deployment Model

The app is deployed as static assets under the subpath:

- `/apps/roboarm/`

Vite base must remain aligned with that subpath unless a deployment migration is explicitly requested.

## Branch and Workflow Mapping

- `dev` -> `.github/workflows/deploy_dev.yml`
- `main` -> `.github/workflows/deploy_prod.yml`

Both workflows deploy `dist/` to S3 under `apps/roboarm/` and invalidate CloudFront for `/apps/roboarm/*`.

## Common Commands

Run from repository root:

```bash
npm install
npm run dev
npm run lint
npm run test
npm run build
```

## Guardrails

- Do not commit build artifacts such as `dist/`.
- Do not add backend build/test steps to CI in this repository.
- Keep changes focused on frontend app code, frontend tests, and static hosting/deploy configuration.
