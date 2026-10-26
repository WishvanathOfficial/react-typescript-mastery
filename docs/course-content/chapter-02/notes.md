# Chapter 2 — React + TypeScript Project Setup

## Learning goals

- Understand the tools and workflow behind a React + TypeScript application.
- Identify the responsibilities of common generated files and folders.
- Read npm project metadata, scripts, and dependency declarations.
- Understand the purpose of the important TypeScript configuration options.
- Create a clean, reusable, typed React component.
- Organize and run a small Company Team Dashboard.

A strong React application begins with a project foundation that developers
understand. A new project may contain several generated files. Rather than
treating them as mysterious configuration, learn what they do and when a change
is justified.

## 1. What Is Project Setup?

Project setup prepares an application for development. A React + TypeScript
project commonly needs:

```text
Project initialization
  → package installation
  → React and TypeScript configuration
  → build-tool configuration
  → development scripts
  → source folder structure
  → application entry point
```

The goal is a reliable, repeatable foundation before application features are
built.

### 1.1 Why project setup matters

Before starting a project, the team needs a consistent way to organize source,
install dependencies, run development checks, start the app, and produce a
production build. When these responsibilities are unclear, projects become
harder to maintain and deploy.

During development, the flow is roughly:

```text
Developer writes source
  → development server and build tooling
  → browser loads the application
```

For production:

```text
Source code → production build → static assets → host/server → browser
```

Understanding this flow helps when learning deployment, testing, performance,
and CI.

### 1.2 Creating a modern React project with Vite

Vite provides a development server and production build workflow. A React +
TypeScript template can be created with:

```bash
npm create vite@latest my-react-app -- --template react-ts
cd my-react-app
npm install
npm run dev
```

Vite prints a local development URL, often similar to
`http://localhost:5173`. The exact port can vary if that port is already in use.
Focus on understanding the workflow:

```text
Create project → install dependencies → start dev server → open browser
```

Templates and their generated files evolve, so your structure may not exactly
match an older tutorial.

### 1.3 What project creation generates

The template supplies a starting point: source files, project metadata,
configuration, and scripts. It is not a finished application architecture.
As the app grows, organize source code around real features and responsibilities.

### 1.4 Node.js and npm

- **Node.js** is a JavaScript runtime that can run JavaScript programs outside
  the browser. Project tooling such as Vite and TypeScript runs in this
  environment.
- **npm** is a package manager commonly used to install project dependencies
  and execute project scripts.

Check that they are installed:

```bash
node --version
npm --version
```

Use a currently supported Node.js LTS release and follow the version
requirements of the project and its tools.

### 1.5 Installing dependencies

Run:

```bash
npm install
```

npm reads the dependency declarations and lock file, then installs packages in
`node_modules/`. That directory can be large and is generated; it should
generally not be committed to source control. It can be recreated from the
repository's package files.

A typical project includes:

```text
my-react-app/
├── node_modules/          # Installed packages (generated)
├── public/                # Public static assets (optional)
├── src/                   # Application source
├── package.json           # Metadata, scripts, dependency declarations
├── package-lock.json      # Resolved npm dependency tree
├── tsconfig.json          # TypeScript project references/configuration
├── vite.config.ts         # Vite configuration
└── index.html             # HTML document that hosts the app
```

## 2. Understanding Generated Project Files

A React + TypeScript template might look like this:

```text
my-react-app/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts
```

Exact names vary by template and tool version. Understand each file's role
rather than memorizing one template's tree.

### 2.1 `node_modules/`

This directory holds packages installed for the project, such as React, Vite,
and TypeScript. Do not edit package files in this directory; reinstalling can
replace them. If it is missing, restore packages with `npm install`.

### 2.2 `public/`

Use `public/` for files that should be served directly with stable public paths,
such as a favicon or a robots file. Imported assets can instead be referenced
from application modules so the build tool can process them. Follow the
project's asset conventions and use `public/` only when direct serving is
needed.

### 2.3 `src/`

`src/` contains application source code. A small project might start with
`App.tsx` and `main.tsx`. As the application grows, it can gain components,
types, hooks, pages, services, and other feature folders. Start simple and add
structure when it improves the project.

### 2.4 `main.tsx`

`main.tsx` is commonly the browser entry point that mounts the root React
component into the HTML document. A simplified example:

```tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
```

The flow is:

```text
index.html → #root element → main.tsx → <App /> → React UI
```

The non-null assertion in this minimal template example tells TypeScript that
the element exists. In production code, make sure the root element is present
and handle a missing element explicitly if the application's setup requires it.

### 2.5 `App.tsx`

`App.tsx` commonly defines the root application component and composes
components:

```tsx
function App() {
  return (
    <main>
      <h1>Company Team</h1>
    </main>
  );
}

export default App;
```

As the application grows, move reusable pieces into focused component files
rather than making one component responsible for everything.

### 2.6 `index.html`

Vite uses the root `index.html` as the HTML document that hosts the application.
The root element and module entry connect it to React:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React TypeScript App</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

### 2.7 `vite.config.ts`

Vite configuration commonly lives in `vite.config.ts`. A React setup can enable
the React plugin:

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});
```

Configuration may later include plugins, aliases, build options, or development
server settings. Add configuration to meet a real requirement; avoid changing
it without understanding the effect.

### 2.8 `package-lock.json`

The npm lock file records the resolved dependency tree. Commit it in an
application repository so other developers and CI can install a consistent
dependency graph. Use the same package manager consistently.

### 2.9 `.gitignore`

`.gitignore` tells Git which paths should normally not be committed. Typical
entries include generated directories (`node_modules/`, `dist/`), local
environment files, and operating-system metadata. Review the actual file
instead of assuming that a sensitive file is ignored.

## 3. Understanding `package.json` and Scripts

`package.json` describes project metadata, scripts, and dependency
declarations. A simplified example:

```json
{
  "name": "company-dashboard",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "..."
  },
  "devDependencies": {
    "typescript": "...",
    "vite": "..."
  }
}
```

Versions are omitted here for readability. Use the versions declared by your
project rather than copying placeholder values.

### 3.1 Important fields

- `name` identifies the package/project.
- `version` records its package version.
- `private: true` helps prevent accidentally publishing an application as an
  npm package.
- `type: "module"` configures Node.js to interpret `.js` files as ECMAScript
  modules in that package scope.
- `scripts` defines named project commands.
- `dependencies` and `devDependencies` declare packages.

### 3.2 Dependencies and development dependencies

`dependencies` are packages the application needs in its runtime environment.
`devDependencies` are primarily tools used during development, testing,
linting, or building. Exact deployment behavior depends on the hosting/build
workflow: a static host serves the built assets, not the source project.

Do not install packages just because they are popular. Each dependency adds
maintenance, upgrade, security, and complexity costs.

### 3.3 npm scripts

Given:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  }
}
```

Run a script by its name:

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

`npm run dev` finds the `dev` script and starts Vite's development server. This
is how `npm run <name>` works for the other scripts too.

### 3.4 What does a production build do?

A build script runs the configured checks and build tools. For the example
above, `tsc -b` checks the TypeScript project references, and `vite build`
creates optimized static assets. The generated `dist/` directory is deployment
output:

```text
Source files → checks/build → dist/ → static hosting
```

Do not manually edit generated `dist/` files; rebuild from source after
changes. `npm run preview` serves the production build locally so it can be
checked before deployment.

## 4. Understanding `tsconfig.json`

TypeScript configuration tells TypeScript tooling how to understand and check
the project. Modern Vite templates may split configuration among
`tsconfig.json`, `tsconfig.app.json`, and `tsconfig.node.json`. The root file
may mostly contain project references, while browser application and
Node-based tooling use different settings.

Inspect the configuration actually used by the project before making a change.
When a setting is inherited through `extends` or project references, understand
which configuration owns it.

### 4.1 `compilerOptions`

Most compiler behavior is configured under `compilerOptions`:

```json
{
  "compilerOptions": {
    "strict": true,
    "jsx": "react-jsx"
  }
}
```

### 4.2 `strict`

`strict: true` enables a collection of stronger checks. For example, strict
checking can require a function parameter to have a type instead of silently
treating it as `any`. Keeping strict checking enabled helps catch mistakes and
makes contracts clearer.

### 4.3 `target`

`target` describes the JavaScript language level TypeScript emits. The
appropriate target depends on supported runtimes and the build pipeline. Vite
also performs production transformations, so understand how TypeScript and Vite
settings interact before changing this option.

### 4.4 `module`

`module` controls the JavaScript module format TypeScript uses or understands.
Modern front-end code commonly uses ECMAScript imports and exports:

```ts
import { calculateTotal } from './utils';

export function checkout() {
  return calculateTotal();
}
```

### 4.5 `moduleResolution`

`moduleResolution` controls how TypeScript locates imported packages and files.
Vite projects commonly use a bundler-aware resolution mode. Keep the TypeScript
resolution mode aligned with the project's bundler and package export behavior.

### 4.6 `jsx`

The `jsx` setting controls how TypeScript handles JSX. Modern React projects
commonly use the automatic runtime:

```json
{
  "compilerOptions": {
    "jsx": "react-jsx"
  }
}
```

### 4.7 `include`, `exclude`, and project references

`include` and `exclude` help define which files a TypeScript project checks.
Project references allow a larger setup to separate application code from
tooling configuration. In a modern Vite template, inspect the root config and
the referenced app and Node configs together; do not assume every setting
lives in the root file.

## 5. Creating Your First Clean React TypeScript Component

Build a reusable employee card. Begin with a focused component:

```tsx
interface EmployeeCardProps {
  name: string;
  role: string;
  department: string;
}

function EmployeeCard({ name, role, department }: EmployeeCardProps) {
  return (
    <article>
      <h2>{name}</h2>
      <p>{role}</p>
      <span>{department}</span>
    </article>
  );
}

export default EmployeeCard;
```

The component now receives data rather than embedding one person's details.
Use it from the root component:

```tsx
import EmployeeCard from './components/EmployeeCard';

function App() {
  return (
    <main>
      <EmployeeCard
        name="Alex Morgan"
        role="Frontend Engineer"
        department="Engineering"
      />
    </main>
  );
}

export default App;
```

Use fictional sample people in a public learning project. Avoid publishing real
personal details without permission.

### 5.1 Share a data model when appropriate

When multiple components use the same employee shape, move that model into a
type file:

```ts
export interface Employee {
  id: number;
  name: string;
  role: string;
  department: string;
  location: string;
}
```

Then use a type-only import and typed object prop:

```tsx
import type { Employee } from '../types/employee';

interface EmployeeCardProps {
  employee: Employee;
}

function EmployeeCard({ employee }: EmployeeCardProps) {
  return (
    <article>
      <h2>{employee.name}</h2>
      <p>{employee.role}</p>
      <p>
        {employee.department} · {employee.location}
      </p>
    </article>
  );
}

export default EmployeeCard;
```

`import type` makes it explicit that the imported symbol is used only for
type-checking and is not a runtime value.

### 5.2 Clean component principles

A focused component generally has:

- a clear purpose and prop contract;
- predictable, typed data;
- minimal unrelated logic;
- readable JSX.

An employee card should primarily render employee information. It should not
also fetch unrelated API data, authenticate users, or manage application-wide
state. Those responsibilities belong in appropriate application layers as the
project grows.

### 5.3 Naming and project structure

PascalCase filenames are common for React components (`EmployeeCard.tsx`,
`DashboardHeader.tsx`). Lower camelCase is common for utility files
(`formatDate.ts`). Type files are often named for the domain (`employee.ts`).
Conventions vary; consistency within the project matters most.

Do not create many architectural folders before the application needs them.
Start small and introduce clearer boundaries as the project grows.

## 6. Mini project — Company Team Dashboard Setup

Build a dashboard that demonstrates project setup, type modeling, component
reuse, and composition. The complete guided task is in
[the coding exercises](./exercises.md#mini-project-company-team-dashboard-setup).

The target component tree:

```text
App
├── DashboardHeader
├── TeamStats
│   └── StatCard
└── EmployeeList
    └── EmployeeCard
```

A small source structure:

```text
src/
├── components/
│   ├── DashboardHeader.tsx
│   ├── EmployeeCard.tsx
│   ├── EmployeeList.tsx
│   └── StatCard.tsx
├── types/
│   └── employee.ts
├── App.tsx
└── main.tsx
```

Model employees with an `Employee` type containing an ID, name, role,
department, location, years of experience, and a list of skills. The `App`
component owns fictional sample data, derives simple department/location
counts, and passes typed props to child components. `EmployeeList` maps
employees to cards using each employee ID as the React key.

After implementation:

```bash
npm run dev
npm run build
npm run preview
```

Confirm the dashboard renders in the browser and the production build succeeds.

## Common project setup mistakes

1. **Editing `node_modules/`.** Package files can be replaced on installation;
   make changes through project source or package configuration.
2. **Ignoring `package.json`.** Understand the scripts and declared
   dependencies that drive the workflow.
3. **Changing `tsconfig` randomly.** Know what a setting controls and which
   configuration file is active before changing it.
4. **Installing packages without a need.** Every dependency increases ongoing
   maintenance and complexity.
5. **Putting everything in `App.tsx`.** Extract meaningful reusable UI when
   that improves clarity.
6. **Creating too many folders too soon.** Use enough structure to keep the
   current project understandable; let architecture grow with the application.
7. **Committing generated or sensitive files.** Check `.gitignore` and review
   `git status` before publishing.

## Memory points

- Project setup establishes the tools and repeatable workflow for development.
- Node.js runs project tooling; npm installs packages and runs named scripts.
- Vite provides development and production build workflows.
- `src/` normally contains app source; `public/` is for directly served assets.
- `main.tsx` mounts React; `App.tsx` commonly composes the root UI.
- `index.html` provides the root document; Vite uses `vite.config.ts` for
  configuration.
- `package.json` declares project metadata, dependencies, and scripts.
- `package-lock.json` records resolved npm dependency information.
- `tsconfig` files control TypeScript checking and may be split by environment.
- `strict: true` enables stronger type checks; `jsx` configures JSX handling.
- Define data types, pass them through typed props, and compose focused
  components.
- `dist/` is generated build output, not source code.

## Quick revision

Explain the roles of these files without looking them up:

```text
package.json       → project metadata, scripts, dependencies
package-lock.json  → resolved npm dependency tree
tsconfig*.json     → TypeScript project checking/configuration
vite.config.ts     → Vite configuration
index.html         → HTML document hosting the app
main.tsx           → React mounting entry point
App.tsx            → root UI composition
src/               → application source
public/            → directly served static assets (when needed)
node_modules/      → installed packages (generated)
dist/              → production build output (generated)
```

Be able to describe:

```text
Write source → npm run dev → browser
Write source → npm run build → dist/ → deploy
```

## Chapter summary

A React project includes source code, dependencies, build tooling, TypeScript
configuration, scripts, and an application entry point. Understanding how
those parts fit together makes setup and debugging more predictable. This
chapter also turns the concepts into reusable typed components and a small
Company Team Dashboard, preparing us to explore JSX in the next chapter.
