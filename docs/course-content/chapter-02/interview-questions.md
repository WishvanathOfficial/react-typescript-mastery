# Chapter 2 — Interview questions and answers

Practise answering in your own words after completing the
[chapter notes](./notes.md) and [coding exercises](./exercises.md).

## Core questions

### 1. What is Vite?

Vite is a front-end development tool that provides a development server and a
production build workflow.

### 2. Why is Vite commonly used with React?

It provides fast development feedback and a modern build system. React support
is added through its plugin ecosystem.

### 3. What is `package.json`?

It is a project manifest containing metadata, scripts, dependency declarations,
and other package-management information.

### 4. What is the difference between `dependencies` and `devDependencies`?

`dependencies` generally describe packages required by the application at
runtime. `devDependencies` generally describe tools used during development,
testing, linting, or building. The deployment workflow determines which
packages are needed to produce the built static site.

### 5. What is `node_modules/`?

It is where npm installs the project's dependency packages. It is generated
from project configuration and is generally not committed.

### 6. Should `node_modules/` be committed to Git?

Generally no. It can be recreated using the package manifest and lock file with
npm.

### 7. What is `package-lock.json`?

It records the resolved npm dependency tree to make installations more
reproducible. Application repositories generally commit it.

### 8. What does `npm install` do?

It reads the project's dependency declarations and lock information, then
installs the required packages.

### 9. What does `npm run dev` do?

It runs the `dev` script defined in `package.json`. In a typical Vite project,
that starts the development server.

### 10. What does `npm run build` do?

It runs the configured build script. Depending on the script, this can include
TypeScript checks followed by a Vite production build that generates static
assets.

### 11. What is the `dist/` folder?

It commonly contains production build output. It is generated from source and
should not normally be edited manually.

### 12. What is `main.tsx`?

It is commonly the React browser entry point that mounts the root component
into an HTML element.

### 13. What is the purpose of `index.html` in a Vite app?

It is the HTML document Vite uses to host the app. It contains the root DOM
element and loads the application entry module.

### 14. What is the purpose of `vite.config.ts`?

It configures Vite, for example by enabling plugins or setting build and
development-server options.

### 15. What is `tsconfig.json`?

It configures how TypeScript projects are checked and understood. A template
may use referenced or extended app-specific and tooling-specific configs.

### 16. What does `strict: true` do?

It enables a collection of stronger TypeScript checks, helping detect more
type-related mistakes and encouraging clearer types.

### 17. What is the purpose of the TypeScript `jsx` option?

It configures how TypeScript handles JSX syntax. Modern React projects commonly
use the automatic React JSX runtime.

### 18. What does the TypeScript `target` option control?

It describes the JavaScript language level TypeScript emits. The appropriate
setting depends on supported runtimes and the build pipeline.

### 19. What is module resolution?

Module resolution is the process TypeScript uses to locate files and packages
referenced by imports.

### 20. Why can a project have multiple `tsconfig` files?

Browser application code and Node-based tooling can use different compiler
settings and environments. Separate configs allow each project to be checked
appropriately.

### 21. Why make React components reusable?

Meaningfully reusable components reduce duplication and keep interface
behavior and presentation consistent.

### 22. Why separate a shared data type from a component?

A shared model can be reused across components and helps keep their data
contracts consistent. Keep types local when they are truly specific to one
component.

### 23. Why should `any` generally be avoided?

`any` opts out of much of TypeScript's checking. Using it broadly can let
mistakes pass that more specific types would catch.

### 24. What is the purpose of a lock file?

It records resolved dependency information so installs can use a consistent
dependency tree.

### 25. What happens when `npm run dev` is executed?

npm looks up the `dev` entry in `package.json`, executes its command, and in a
typical Vite app starts the development server.

### 26. What happens during a production build?

The configured build tools check and transform source code, then generate
optimized production assets (often in `dist/`) for deployment.

### 27. Why should generated build files not be edited manually?

They are recreated from source and configuration. Manual edits can be lost on
the next build and do not fix the maintained source.

### 28. Why avoid unnecessary dependencies?

Each dependency adds maintenance, update, security, and complexity
considerations.

### 29. What is the role of `App.tsx`?

It commonly defines the root application component and composes other UI
components.

### 30. What is the role of `src/`?

It generally contains application source code, such as components, types,
hooks, pages, and application logic.

## Scenario prompts

1. A teammate edited a file in `node_modules/`, but the change disappeared
   after reinstalling. Explain why and suggest the right place to fix it.
2. A component receives incorrect data. Where would you look for its prop
   contract and the data model?
3. A project has `tsconfig.app.json` and `tsconfig.node.json`. What is the
   likely reason for separating them?
4. A production site is deployed from `dist/`. Which files should be changed
   when a UI fix is needed?
5. Before changing `moduleResolution`, which tooling and imports would you
   inspect?
