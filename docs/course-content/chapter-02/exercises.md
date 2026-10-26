# Chapter 2 — Coding exercises

Use these exercises with the [chapter notes](./notes.md). Run commands in a
practice project, not inside `node_modules/` or a generated `dist/` folder.

## Exercise 1 — Inspect your environment

Run:

```bash
node --version
npm --version
```

Create or open a Vite React TypeScript project, then run:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

**Check your work**

- You can explain which tool runs the development server.
- You can find the npm scripts in `package.json`.
- You can stop the development server without changing source files.

## Exercise 2 — Trace the application entry point

In your project, locate `index.html`, `src/main.tsx`, and `src/App.tsx`.
Draw the path from the HTML root element to the first rendered React component.

**Check your work**

- Identify the root DOM element.
- Identify which file calls `createRoot`.
- Identify which component is rendered first.
- Explain why `index.html` is not the entire React UI.

## Exercise 3 — Read project configuration

Inspect `package.json`, `package-lock.json`, `vite.config.ts`, and every
TypeScript configuration used by the app.

Write a short note in your own words describing:

- one runtime dependency and one development tool;
- what `npm run dev`, `npm run build`, and `npm run preview` do;
- where strict TypeScript checking and JSX behavior are configured;
- whether the root TypeScript config references other configs.

Do not change compiler settings just to match an example. The goal is to
understand your actual project.

## Exercise 4 — Build a reusable EmployeeCard

Create `src/components/EmployeeCard.tsx` with a typed prop contract:

```tsx
interface EmployeeCardProps {
  name: string;
  role: string;
  department: string;
}
```

Render the values inside an `<article>`, then use the card from `App.tsx` with
fictional sample data. Try supplying the wrong type for one prop, observe the
TypeScript error, and correct it.

## Mini project: Company Team Dashboard Setup

Build a small dashboard with a heading, team statistics, and a list of
employees. The emphasis is project setup and clear component boundaries, not a
large design system.

### Suggested structure

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

### Requirements

1. Define and export an `Employee` interface in `src/types/employee.ts`:
   `id`, `name`, `role`, `department`, `location`, `experience`, and `skills`.
2. Use fictional sample employees. Do not publish real personal details or
   sensitive company information.
3. Create `DashboardHeader` with typed `companyName` and `subtitle` props.
4. Create `StatCard` with a string label and numeric value.
5. Create `EmployeeCard` with a typed `employee` prop. Render the employee's
   role, department, location, experience, and skills.
6. Create `EmployeeList` with an `Employee[]` prop. Render an `EmployeeCard`
   per employee and use `employee.id` as the React `key`.
7. Compose the dashboard in `App.tsx`. Show total employees, distinct
   departments, and distinct locations.
8. Add simple styling consistent with the project. Avoid adding a dependency
   just for basic layout.

### Suggested employee type

```ts
export interface Employee {
  id: number;
  name: string;
  role: string;
  department: string;
  location: string;
  experience: number;
  skills: string[];
}
```

### Completion checklist

- [ ] Project dependencies install successfully.
- [ ] `npm run dev` displays the dashboard.
- [ ] Employee data matches the shared `Employee` type.
- [ ] Components receive data through typed props.
- [ ] Employee cards render from an array with stable keys.
- [ ] Statistics are derived from the data rather than hard-coded.
- [ ] `npm run build` completes successfully.
- [ ] You can explain the purpose of the files you added.

### Reflection

1. Which configuration file did you inspect first, and why?
2. Which component owns the employee array, and which components receive it?
3. What does the build put in `dist/`?
4. Which parts of your structure would you change if the dashboard gained
   filtering and employee detail pages?
