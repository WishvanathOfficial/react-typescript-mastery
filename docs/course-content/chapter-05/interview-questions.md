# Chapter 5 — Scenario-Based Interview Questions and Answers

These questions focus on situations an interviewer may present during a React

- TypeScript interview.

## Scenario 1 — Your component has become 800 lines long

**Interviewer**

You have a React component that is around 800 lines long. It contains forms,
API calls, tables, filters, modals, and multiple sections of JSX. How would
you improve it?

**Answer**

I would first identify the different responsibilities inside the component.
For example:

```text
EmployeePage
├── EmployeeHeader
├── EmployeeFilters
├── EmployeeTable
├── EmployeeModal
└── EmployeeStats
```

I would extract independent UI responsibilities into smaller components and
move reusable business logic into custom Hooks or utility functions where
appropriate. I would not split the component simply based on line count. I
would split it based on responsibility, reuse, and maintainability.

## Scenario 2 — How would you decide whether something should become a component?

**Interviewer**

When looking at a large JSX file, how do you decide what should be extracted
into a component?

**Answer**

I look for repeated UI, a distinct responsibility, complex JSX, a logical UI
section, reusable behavior, or a section that can be independently tested.
For example, an employee card is naturally a separate component because it
has a clear responsibility and may be reused.

## Scenario 3 — What is component composition?

**Interviewer**

Explain component composition with a real-world example.

**Answer**

Component composition means creating a larger UI by combining smaller
components:

```text
Dashboard
├── Header
├── Sidebar
└── Content
    ├── Stats
    └── EmployeeList
```

Instead of making `Dashboard` responsible for every detail, each smaller
component handles a specific part of the interface. React's `children` prop
is also commonly used for composition.

## Scenario 4 — How would you design a reusable Card component?

**Interviewer**

You have employee cards, project cards, and course cards. How would you avoid
duplicating the card layout?

**Answer**

I would create a reusable structural component and allow the parent to
provide the content:

```tsx
import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
}

function Card({ children }: CardProps) {
  return <div className="card">{children}</div>;
}
```

Then it can be composed with different content:

```tsx
<Card>
  <h2>Employee</h2>
  <p>Frontend Engineer</p>
</Card>

<Card>
  <h2>Project</h2>
  <p>Admin Dashboard</p>
</Card>
```

This uses composition rather than hardcoding content into the reusable
component.

## Scenario 5 — What makes a component pure?

**Interviewer**

What do you mean when you say a React component should be pure?

**Answer**

A component should produce predictable UI based on its current inputs and
state. I avoid modifying external variables or performing side effects during
rendering. Operations such as data fetching, subscriptions, or browser-side
effects should be handled through appropriate mechanisms such as event
handlers or `useEffect`.

## Scenario 6 — Can a component with state be considered pure?

**Interviewer**

If a component uses `useState`, can you still call it pure?

**Answer**

Yes. Using state does not automatically make a component impure. React
rendering should remain predictable based on the component's current props
and state:

```tsx
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button type="button" onClick={() => setCount((previousCount) => previousCount + 1)}>
      {count}
    </button>
  );
}
```

The state is managed by React, and rendering derives the UI from the current
state.

## Scenario 7 — Smart vs presentational components

**Interviewer**

What is the difference between smart and presentational components?

**Answer**

A presentational component primarily focuses on displaying UI. A smart
component generally coordinates state, data fetching, or business logic. For
example:

```text
API → EmployeeContainer → employees → EmployeeList → EmployeeCard
```

However, I would not apply this pattern rigidly. In modern React applications,
Hooks, Context, server-state solutions, and feature-based architecture can
provide other ways to separate responsibilities.

## Scenario 8 — A child component needs to update parent state

**Interviewer**

The search input is inside a child component, but the filtered employee list
is controlled by the parent. What would you do?

**Answer**

I would keep the state in the closest common parent and pass a callback to
the child:

```tsx
interface SearchProps {
  value: string;
  onChange: (value: string) => void;
}
```

The child calls `onChange(event.target.value)`. The parent owns the state:

```tsx
const [searchTerm, setSearchTerm] = useState('');
```

This is a common example of lifting state up.

## Scenario 9 — When should you create a custom Hook instead of another component?

**Interviewer**

You have reusable logic for searching employees, but the UI is different in
two pages. Would you create a component?

**Answer**

If the reusable part is primarily behavior rather than UI, I would consider a
custom Hook:

```tsx
const { searchTerm, setSearchTerm, filteredEmployees } = useEmployeeSearch(employees);
```

The UI can then remain different on each page while the search logic is
reused.

## Scenario 10 — When should you not split a component?

**Interviewer**

Is smaller always better when designing React components?

**Answer**

No. Creating too many tiny components can make the application harder to
follow. I would extract a component when there is a meaningful responsibility,
reuse opportunity, or architectural boundary. The goal is not the smallest
possible component; it is clear responsibility and maintainability.

## Scenario 11 — You have five components receiving the same data

**Interviewer**

Several components receive the same user information through multiple levels
of props. What would you consider?

**Answer**

First, I would determine whether the components genuinely need the data. If
the data is passed through intermediate components that do not use it, that
could indicate prop drilling. Depending on the scope and complexity, I might
consider component composition, Context API, a custom Hook, or a state
management solution. I would choose the simplest solution that solves the
actual problem.

## Scenario 12 — Why shouldn't a component mutate props?

**Interviewer**

What happens if a child component directly modifies an object received
through props?

**Answer**

Props should be treated as read-only. I would avoid changing a prop object
inside a child:

```tsx
employee.name = 'New Name';
```

Instead, the child can notify the parent through a callback such as
`onEmployeeUpdate(updatedEmployee)`. The appropriate state owner can then
update the state immutably.

## Scenario 13 — How would you design an employee table?

**Interviewer**

You need an employee table with sorting, filtering, pagination, and row
actions. Would you put everything into one component?

**Answer**

I would separate responsibilities:

```text
EmployeePage
├── EmployeeToolbar
│   ├── SearchInput
│   └── DepartmentFilter
├── EmployeeTable
│   └── EmployeeRow
├── Pagination
└── EmployeeModal
```

The parent or a dedicated Hook can coordinate the state and data operations.
The exact architecture depends on the complexity of the feature.

## Scenario 14 — A component is reused in three places but needs different layouts

**Interviewer**

You have a reusable employee component, but each page needs a slightly
different layout. How would you design it?

**Answer**

I would consider composition rather than adding many boolean props. Instead
of a component with flags such as `showLocation`, `showDepartment`,
`showActions`, `compact`, and `showAvatar`, I might create a reusable base
component and compose different content around it. This keeps the API easier
to understand.

## Scenario 15 — How do you know whether a component API is becoming bad?

**Interviewer**

What are signs that a component is receiving too many props?

**Answer**

Warning signs include many boolean props, props that are rarely used
together, deeply nested configuration objects, props controlling unrelated
behaviors, the parent needing to understand too many internal details, and
frequent changes to the component API.

For example:

```tsx
<EmployeeCard
  compact
  showAvatar
  showLocation
  showDepartment
  showActions
  enableEdit
  enableDelete
  showStatus
/>
```

This may indicate that the component is trying to serve too many use cases.
I would investigate whether composition or separate focused components
would provide a cleaner design.
