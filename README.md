# React TypeScript Mastery

A starter repository for a maintainable React + TypeScript learning platform, built with Vite, Redux Toolkit, ESLint, and Prettier.

## Requirements

- Node.js 20.19+ or 22.12+
- npm 10+

## Quick start

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Type-check and create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run typecheck` | Run TypeScript project checks |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Apply automatic ESLint fixes |
| `npm run format` | Format supported files with Prettier |
| `npm run format:check` | Check formatting without changing files |

## Architecture

```text
src/
├── app/                 # App-level providers and Redux store
├── assets/              # Imported static assets
├── components/          # Shared, reusable UI components
├── features/             # Feature-based modules (UI, state, API, types)
├── hooks/                # Shared custom React hooks
├── layouts/              # Page layouts
├── pages/                # Route-level screens
├── routes/               # Routing configuration (add when needed)
├── services/             # Shared API/client integrations
├── styles/               # Global styles and design tokens
├── types/                # Shared TypeScript types
├── utils/                # Framework-agnostic helpers
├── App.tsx
└── main.tsx
```

Feature-specific state and logic should live with the feature. Put genuinely shared UI in `components/`, shared hooks in `hooks/`, and app-wide state setup in `app/`.

## Redux Toolkit

- Configure the store in `src/app/store.ts`.
- Add feature reducers under `src/features/<feature>/`.
- Use the typed `useAppDispatch` and `useAppSelector` hooks from `src/app/hooks.ts`.
- Use `createSlice` for client state and RTK Query (`createApi`) when you add server-state fetching.
- Avoid putting every value in Redux. Keep temporary UI state local to the component where practical.

The example `counter` feature demonstrates a typed Redux slice and selector flow.

## Quality checks

Before opening a pull request:

```bash
npm run typecheck
npm run lint
npm run format:check
npm run build
```

## Suggested next steps

1. Add React Router when multiple lesson pages are needed.
2. Add RTK Query and a typed API base URL when the backend is ready.
3. Add Jest or Vitest for unit tests, choosing one test runner for the project.
4. Add CI to run typecheck, lint, formatting checks, tests, and build on each pull request.
5. Add `.env.example` for documented, non-secret environment variables.
