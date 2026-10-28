# React TypeScript Mastery

A practical React + TypeScript learning platform built with Vite, Redux Toolkit, Sass, ESLint, and Prettier.

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

| Command                | Purpose                                  |
| ---------------------- | ---------------------------------------- |
| `npm run dev`          | Start the Vite development server        |
| `npm run build`        | Type-check and create a production build |
| `npm run preview`      | Preview the production build locally     |
| `npm run typecheck`    | Run TypeScript project checks            |
| `npm run lint`         | Run ESLint                               |
| `npm run lint:fix`     | Apply automatic ESLint fixes             |
| `npm run format`       | Format supported files with Prettier     |
| `npm run format:check` | Check formatting without changing files  |

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
├── styles/               # Global and application SCSS styles
├── types/                # Shared TypeScript types
├── utils/                # Framework-agnostic helpers
├── App.tsx
└── main.tsx
```

Feature-specific state and logic should live with the feature. Put genuinely shared UI in `components/`, shared hooks in `hooks/`, and app-wide state setup in `app/`.

Styles are authored in Sass (`.scss`) and compiled by Vite. Global resets and design tokens live in `src/styles/global.scss`; page and component styles live in `src/styles/app.scss`.

The chapter-based learner experience is implemented in the React app. Select **Explore the course** to open the dashboard; it uses hash-based chapter and lesson URLs so direct links work on GitHub Pages. Chapter notes, exercises, and interview questions are rendered from Git-tracked Markdown. The original wireframe is retained at [docs/course-platform-layout.html](./docs/course-platform-layout.html).

The static-content [development roadmap](./docs/ROADMAP.md) explains the implementation and publishing phases. Published chapter materials are organized under [docs/course-content](./docs/course-content/README.md); [Chapter 1](./docs/course-content/chapter-01/README.md), [Chapter 2](./docs/course-content/chapter-02/README.md), [Chapter 3](./docs/course-content/chapter-03/README.md), [Chapter 4](./docs/course-content/chapter-04/README.md), and [Chapter 5](./docs/course-content/chapter-05/README.md) include notes, coding exercises, and interview questions. Add each published YouTube video ID to its lesson's `videoId` in `src/features/course/courseData.ts`.

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
