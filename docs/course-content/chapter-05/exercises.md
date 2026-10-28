# Chapter 5 — Coding exercises

Use these exercises with the [chapter notes](./notes.md). Build in a React +
TypeScript practice project and run the project's checks when finished.

## Exercise 1 — Create a typed functional component

Create a `WelcomeCard` component that accepts a `name: string` and
`role: string`, then displays both values. Use either a function declaration
or an arrow function, and follow the naming convention for React components.

**Check your work**

- The component name begins with an uppercase letter.
- Props have an explicit TypeScript contract.
- Passing a number for `role` produces a type error.

## Exercise 2 — Identify component responsibilities

Start with a single page that renders a heading, search input, employee
statistics, employee cards, and an empty message. Sketch a component tree
before changing the code.

Extract components only where they provide a meaningful responsibility,
reuse opportunity, or make the parent easier to understand.

**Reflection**

- Which component owns the feature-level state?
- Which components only render data?
- Does any extracted component simply add indirection?

## Exercise 3 — Compose with children

Create a reusable `Card` component that accepts `children: ReactNode` and
provides a shared wrapper. Use it with employee information and with project
information.

**Check your work**

- `ReactNode` is imported as a type.
- The card controls the shared structure.
- The caller controls the card content.

## Exercise 4 — Keep rendering predictable

Create a `Price` component that receives a numeric price and renders it. Then
inspect a component that calls `Math.random()`, increments a module-level
variable, or writes to browser storage during render.

Move side effects into an appropriate event handler or Effect. Avoid changing
external data as part of rendering.

## Mini project: Employee Directory Component Design

Build an Employee Directory with focused components and clear data flow. Use
fictional employee data only.

### Suggested structure

```text
src/
├── components/
│   ├── EmployeeCard.tsx
│   ├── EmployeeHeader.tsx
│   ├── EmployeeList.tsx
│   ├── EmployeeSearch.tsx
│   ├── EmployeeStats.tsx
│   └── EmptyState.tsx
├── data/
│   └── employees.ts
├── types/
│   └── employee.ts
├── App.tsx
└── index.css
```

### Requirements

1. Define a `Department` union containing `Engineering`, `Design`, `Product`,
   and `HR`.
2. Define an `Employee` interface with `id`, `name`, `role`, `location`, and
   `department`.
3. Create fictional employee data in a typed `Employee[]`.
4. Create `EmployeeHeader` to display the directory heading and description.
5. Create `EmployeeStats` with typed total employee and department counts.
   Calculate the values in the coordinator and pass them through props.
6. Create `EmployeeSearch` with controlled search and department values, plus
   typed callbacks for changes.
7. Create `EmployeeCard` to display one employee, and `EmployeeList` to render
   cards with stable employee IDs as keys.
8. Create `EmptyState` to display a helpful no-results message.
9. Keep search and department filter state in the page-level coordinator.
   Derive the filtered list from the source employee data.
10. Render the list when there are matches and the empty state when there
    are not.
11. Add simple, responsive styling without a dependency for basic layout.

### Suggested component tree

```text
EmployeeDirectory
├── EmployeeHeader
├── EmployeeStats
├── EmployeeSearch
├── EmployeeList
│   └── EmployeeCard
└── EmptyState
```

### Completion checklist

- [ ] The employee data matches its TypeScript interface.
- [ ] The department union prevents unsupported department values.
- [ ] Search and filter state have one clear owner.
- [ ] Search input and department selection use typed callback props.
- [ ] Employee cards receive data through props and use stable keys.
- [ ] The empty state appears when there are no matching employees.
- [ ] Components have clear responsibilities and no unnecessary abstractions.
- [ ] `npm run build` completes successfully.

### Reflection

1. Why does the page-level component own search and department state?
2. Which components are primarily presentational?
3. What makes `EmployeeCard` a useful component boundary?
4. When might a custom Hook be more appropriate than another component?
5. What signs would prompt you to revisit the component API?
