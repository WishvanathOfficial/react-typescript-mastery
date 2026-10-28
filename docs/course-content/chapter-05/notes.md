# Chapter 5 — Functional Components and Component Design

> Good component design is not about creating more components. It is about
> giving every component a clear responsibility.

React applications become easier to build, test, maintain, and scale when
their UI is divided into well-designed components. In the previous chapter,
we learned how props and state allow components to receive and manage data.
Now we will learn how to decide what should become a component, what
responsibility it should have, when it should be split, how components can be
reused, and how they communicate.

## Learning goals

- Write functional components with typed props.
- Identify responsibility boundaries and avoid components that do too much.
- Keep rendering predictable and handle side effects separately.
- Compose interfaces from smaller components and children.
- Understand smart and presentational components as a useful, non-mandatory
  design pattern.
- Build a maintainable Employee Directory.

## 1. Functional Components

A functional component is a JavaScript or TypeScript function that returns
JSX. Modern React development primarily uses functional components and Hooks:

```tsx
function Welcome() {
  return <h1>Welcome to React</h1>;
}

export default Welcome;
```

Conceptually:

```text
Function → JSX → React renders JSX → User sees UI
```

### 1.1 Functional components with TypeScript

A functional component can receive typed props:

```tsx
interface UserCardProps {
  name: string;
  role: string;
}

function UserCard({ name, role }: UserCardProps) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{role}</p>
    </div>
  );
}
```

Use the component with values that match its contract:

```tsx
<UserCard name="Taylor Chen" role="Frontend Engineer" />
```

Passing a number for `role` would be a TypeScript error because the prop
requires a string.

### 1.2 Component names

React component names should normally start with an uppercase letter:

```tsx
function EmployeeCard() {
  return <div>Employee</div>;
}
```

`<EmployeeCard />` refers to a React component. Lowercase elements such as
`<div />` refer to built-in HTML elements.

### 1.3 Function declarations and arrow functions

Components can also be written as arrow functions:

```tsx
interface ButtonProps {
  label: string;
}

const Button = ({ label }: ButtonProps) => {
  return <button type="button">{label}</button>;
};
```

Both function declarations and arrow function components are valid. Follow
the conventions used consistently by the project.

### 1.4 Components focus on UI responsibilities

An Employee Directory can be composed of focused pieces:

```text
EmployeeDirectory
├── SearchBar
├── EmployeeList
│   └── EmployeeCard
└── EmptyState
```

The directory coordinates the feature. The search bar handles search input,
the list displays a collection, each card displays one employee, and the
empty state communicates that no employees matched. This is easier to
understand than placing all markup and behavior in one large component.

## 2. Component Responsibility

A component should have a clear and understandable responsibility. A page
that fetches data, searches, filters, sorts, calculates statistics, renders
navigation, manages forms, saves data, sends notifications, and renders every
section is difficult to maintain.

A more focused architecture might be:

```text
EmployeePage
├── EmployeeHeader
├── EmployeeStats
├── EmployeeSearch
├── EmployeeFilters
├── EmployeeList
│   └── EmployeeCard
└── EmployeeModal
```

### 2.1 Single responsibility

A useful guideline is the Single Responsibility Principle: a component
should have one primary reason to change. For example, an `EmployeeCard`
could be responsible for displaying one employee's name, role, and location.
Fetching employees, sending email, validating forms, and managing
authentication are separate concerns.

### 2.2 Signs a component may have too many responsibilities

Consider refactoring when a component:

- becomes difficult to scan or understand;
- contains multiple unrelated UI sections;
- mixes substantial business logic and presentation;
- duplicates UI or behavior found elsewhere;
- is difficult to test independently;
- requires changes to unrelated parts for a small feature;
- has a complicated prop API or deeply nested JSX.

A large component is not automatically wrong. Ask whether it still has a
clear responsibility and whether splitting it would make the system easier
to understand.

### 2.3 A focused component

```tsx
interface Employee {
  id: number;
  name: string;
  role: string;
  location: string;
}

interface EmployeeCardProps {
  employee: Employee;
}

function EmployeeCard({ employee }: EmployeeCardProps) {
  return (
    <article>
      <h3>{employee.name}</h3>
      <p>{employee.role}</p>
      <p>{employee.location}</p>
    </article>
  );
}
```

This component has one clear job: display an employee.

## 3. Pure Components

A useful mental model for predictable rendering is:

```text
Same props and state → same rendered output
```

For example:

```tsx
interface PriceProps {
  price: number;
}

function Price({ price }: PriceProps) {
  return <span>${price}</span>;
}
```

With the same `price`, the component describes the same output.

### 3.1 Avoid changing external values during render

Rendering should not modify external state or produce unpredictable results:

```tsx
function EmployeeCard() {
  const employeeId = Math.random();
  return <p>{employeeId}</p>;
}
```

The output can change on each render even though the component received no
new input. Similarly, changing a module-level variable during render creates
behavior outside React's state model:

```tsx
let count = 0;

function Counter() {
  count += 1;
  return <p>{count}</p>;
}
```

Avoid writing to browser storage or starting a network request directly in
the render body. Use an event handler for interaction-driven work, an Effect
for synchronization with external systems, or an appropriate data-fetching
solution.

```tsx
import { useEffect } from 'react';

function EmployeeLoader() {
  useEffect(() => {
    // Synchronize with an external system here.
  }, []);

  return <div>Loading employees...</div>;
}
```

Rendering should describe UI. Side effects should be handled separately.

### 3.2 Pure does not mean “no state”

A component can use state and still render predictably from its current
props and state:

```tsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button type="button" onClick={() => setCount((previousCount) => previousCount + 1)}>
      {count}
    </button>
  );
}
```

The component's output follows its current state; using state does not
automatically make rendering impure.

## 4. Component Composition

Component composition means building larger UI structures by combining
smaller components:

```text
Page
├── Header
├── Sidebar
└── Content
    ├── Card
    ├── Card
    └── Card
```

For example:

```tsx
function Header() {
  return <header>Employee Portal</header>;
}

function Sidebar() {
  return <aside>Navigation</aside>;
}

function Content() {
  return <main>Dashboard content</main>;
}

function Dashboard() {
  return (
    <div>
      <Header />
      <div>
        <Sidebar />
        <Content />
      </div>
    </div>
  );
}
```

Each component stays focused while the parent describes how the pieces fit
together.

### 4.1 Composition with children

The `children` prop lets a reusable component control structure while the
caller supplies its content:

```tsx
import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
}

function Card({ children }: CardProps) {
  return <div className="card">{children}</div>;
}
```

Use the same structure with different content:

```tsx
<Card>
  <h2>Employee details</h2>
  <p>Frontend Engineer</p>
</Card>

<Card>
  <h2>Project summary</h2>
  <p>12 active projects</p>
</Card>
```

Composition offers flexibility, reuse, and less duplicated layout. Prefer it
when a component's structure is common but its inner content differs.

### 4.2 Data-driven reusable components

Avoid hardcoding one employee into a component:

```tsx
function EmployeeCard() {
  return (
    <div>
      <h2>Example Employee</h2>
      <p>Frontend Engineer</p>
    </div>
  );
}
```

Receive the changing data through props instead:

```tsx
interface EmployeeCardProps {
  name: string;
  role: string;
}

function EmployeeCard({ name, role }: EmployeeCardProps) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{role}</p>
    </div>
  );
}
```

The same component can now display different employees.

## 5. Smart and Presentational Components

It can be useful to distinguish components that coordinate data and behavior
from components that primarily render UI. These are design concepts, not
strict React component categories.

### 5.1 Presentational components

A presentational component receives data and displays it:

```tsx
interface EmployeeCardProps {
  name: string;
  role: string;
  location: string;
}

function EmployeeCard({ name, role, location }: EmployeeCardProps) {
  return (
    <article className="employee-card">
      <h3>{name}</h3>
      <p>{role}</p>
      <span>{location}</span>
    </article>
  );
}
```

### 5.2 Components that coordinate data

A coordinating component may own state, connect data, and pass it to
presentational components:

```tsx
import { useState } from 'react';

interface Employee {
  id: number;
  name: string;
  role: string;
}

function EmployeeDirectory() {
  const [employees] = useState<Employee[]>([]);

  return <EmployeeList employees={employees} />;
}
```

In an application, external data should be validated at runtime rather than
asserted into a TypeScript type without checking. The exact data-fetching
strategy can use an Effect or a server-state solution, depending on the app.

The conceptual flow is:

```text
Data source → coordinating component → props → presentational UI
```

Modern React applications also use Hooks, Context, Redux Toolkit,
server-state libraries, and feature-based architecture. Do not apply a
smart/presentational split rigidly; separate responsibilities in the way
that best fits the feature.

## 6. Mini Project — Employee Directory Component Design

Build an Employee Directory that displays employees, searches by name,
filters by department, shows statistics, and presents an empty state when
there are no matches. Focus on the component architecture as well as the
behavior.

### 6.1 Component architecture

```text
EmployeeDirectory
├── EmployeeHeader
├── EmployeeStats
├── EmployeeSearch
├── EmployeeList
│   └── EmployeeCard
└── EmptyState
```

Responsibilities:

- `EmployeeDirectory` owns feature state and coordinates components.
- `EmployeeHeader` displays the page heading.
- `EmployeeStats` displays statistics received through props.
- `EmployeeSearch` collects search and filter values and calls callbacks.
- `EmployeeList` renders an employee collection.
- `EmployeeCard` displays one employee.
- `EmptyState` displays a no-results message.

### 6.2 Define the employee model

```ts
export type Department = 'Engineering' | 'Design' | 'Product' | 'HR';

export interface Employee {
  id: number;
  name: string;
  role: string;
  location: string;
  department: Department;
}
```

The union prevents unsupported department values:

```ts
const department: Department = 'Engineering'; // valid
// const invalidDepartment: Department = 'Finance'; // type error
```

### 6.3 Type the search component

The search component receives its current values and callbacks. It does not
own the directory's feature state:

```tsx
import type { Department } from '../types/employee';

type DepartmentFilter = Department | 'All';

interface EmployeeSearchProps {
  searchTerm: string;
  department: DepartmentFilter;
  onSearchChange: (value: string) => void;
  onDepartmentChange: (value: DepartmentFilter) => void;
}
```

When reading a `<select>` value, remember that `event.target.value` is a
string. Validate it against the allowed values before treating it as a
`Department`; a type assertion alone does not validate runtime input.

### 6.4 Render cards and lists

The card accepts one employee:

```tsx
import type { Employee } from '../types/employee';

interface EmployeeCardProps {
  employee: Employee;
}

function EmployeeCard({ employee }: EmployeeCardProps) {
  return (
    <article className="employee-card">
      <div className="employee-avatar" aria-hidden="true">
        {employee.name.charAt(0)}
      </div>
      <div>
        <h3>{employee.name}</h3>
        <p>{employee.role}</p>
        <span>{employee.location}</span>
        <small>{employee.department}</small>
      </div>
    </article>
  );
}
```

The list renders a card for every employee and provides a stable key:

```tsx
interface EmployeeListProps {
  employees: Employee[];
}

function EmployeeList({ employees }: EmployeeListProps) {
  return (
    <section className="employee-list">
      {employees.map((employee) => (
        <EmployeeCard key={employee.id} employee={employee} />
      ))}
    </section>
  );
}
```

### 6.5 Coordinate state and derived results

Keep the search term and selected department in the directory coordinator.
The filtered list is derived from the source employee data:

```tsx
const [searchTerm, setSearchTerm] = useState('');
const [department, setDepartment] = useState<Department | 'All'>('All');

const filteredEmployees = employees.filter((employee) => {
  const matchesSearch = employee.name.toLowerCase().includes(searchTerm.toLowerCase());
  const matchesDepartment = department === 'All' || employee.department === department;

  return matchesSearch && matchesDepartment;
});
```

For larger lists or expensive calculations, memoization may be considered
after measuring. Avoid adding `useMemo` automatically for simple filtering.

Render either the list or an empty state:

```tsx
{
  filteredEmployees.length > 0 ? (
    <EmployeeList employees={filteredEmployees} />
  ) : (
    <EmptyState message="Try changing your search or department filter." />
  );
}
```

## 7. Improving the Component Design

Component design is iterative. As a feature grows, meaningful subcomponents
may improve clarity:

```text
EmployeeDirectory
├── EmployeeHeader
├── EmployeeStats
│   └── StatCard
├── EmployeeSearch
│   ├── SearchInput
│   └── DepartmentFilter
├── EmployeeList
│   └── EmployeeCard
│       ├── EmployeeAvatar
│       └── EmployeeDetails
└── EmptyState
```

Do not create every possible component in advance. Extract a component when
it provides a meaningful responsibility boundary, reuse opportunity,
composition point, or test boundary.

## 8. Common Component Design Mistakes

### 8.1 Giant components

Avoid putting an entire application into one component. Separate meaningful
responsibilities while keeping a coherent feature coordinator.

### 8.2 Components that do everything

A component that fetches data, owns unrelated business logic, validates
forms, handles navigation, sends notifications, and renders a large page may
have too many responsibilities. Separate work only where it improves
maintainability.

### 8.3 Excessive prop drilling

If data is passed through many components that do not use it, reconsider the
data flow. Depending on the actual complexity, composition, Context, a custom
Hook, or a state management solution may help. Choose the simplest approach
that solves the problem.

### 8.4 Premature abstraction

Do not wrap every small piece of JSX in several generic components. An
abstraction should solve a real problem, not add indirection.

### 8.5 Duplicating business logic

If multiple components implement the same business rule independently, their
results can drift. A focused helper can centralize the rule:

```ts
function getEmployeeStatus(
  active: boolean,
  lastLogin: string | null,
): 'Active' | 'Inactive' {
  return active && lastLogin ? 'Active' : 'Inactive';
}
```

## 9. Memory Points

1. Functional components are functions that return JSX.
2. A component should have a clear responsibility and a primary reason to
   change.
3. Keep rendering predictable; handle side effects separately.
4. Build larger interfaces by composing smaller components.
5. `children` enables flexible composition.
6. Presentational components primarily focus on UI; coordinating components
   may manage state and data. This is a pattern, not a rule.
7. Smaller components are not automatically better. Avoid
   over-componentization.
8. Avoid unnecessary prop drilling and duplicated business logic.
9. Treat props as read-only.
10. Prefer composition to components with many unrelated boolean props.
11. Good component design is about clear boundaries, reusable APIs, and
    predictable behavior—not maximizing the number of components.

## 10. Quick Revision Sheet

| Concept                  | Key idea                                           |
| ------------------------ | -------------------------------------------------- |
| Functional component     | Function that returns JSX                          |
| Component responsibility | Clear purpose for a component                      |
| Single responsibility    | One primary reason to change                       |
| Predictable rendering    | Output follows current inputs and state            |
| Composition              | Build UI from smaller components                   |
| `children`               | Flexible nested content                            |
| Presentational component | Primarily focuses on UI                            |
| Coordinating component   | Coordinates state, data, or behavior               |
| Prop drilling            | Passing data through layers that do not use it     |
| Over-componentization    | Creating abstractions without a meaningful benefit |
| TypeScript               | Describes component contracts and data shapes      |

## 11. Chapter Summary

We moved from creating React components to designing them thoughtfully.
Functional components are the foundation, but good architecture depends on
responsibility and boundaries. We explored typed components, predictable
rendering, side effects, composition with children, smart and presentational
design patterns, and common architecture mistakes.

The Employee Directory demonstrated how a feature can be composed from a
coordinator, header, statistics, search, list, employee cards, and empty
state. The most important lesson is:

> Good React architecture is not about how many components you create. It is
> about how clearly each component owns its responsibility.

The next chapter moves from component design to React Hooks with TypeScript.
