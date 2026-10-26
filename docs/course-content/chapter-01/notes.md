# Chapter 1 — Introduction to React and TypeScript

## Learning goals

- Understand React's component-based approach to building user interfaces.
- Understand what TypeScript adds to JavaScript.
- Explain why React and TypeScript work well together.
- Practise a modern component, data-flow, and code-quality mindset.

Modern web applications include dashboards, forms, authentication flows,
interactive tables, reusable components, API integrations, and complex state.
As applications grow, we need a way to organize the user interface and reduce
mistakes in code. React and TypeScript address these needs from different
directions.

## 1. What Is React?

React is a JavaScript library for building user interfaces. Its central idea is
**component-based development**: divide an interface into small, reusable
pieces called components, then compose those pieces into larger interfaces.

An employee dashboard might be composed like this:

```text
EmployeeDashboard
├── Header
├── Sidebar
├── EmployeeSummary
├── EmployeeList
│   ├── EmployeeDetailsCard
│   ├── EmployeeAttendanceCard
│   └── EmployeeCheckInCard
└── Footer
```

Each component can have its own rendering logic and receive data from another
component.

### 1.1 A simple React component

A function component returns JSX:

```tsx
function Welcome() {
  return <h1>Welcome to React!</h1>;
}

function App() {
  return (
    <div>
      <Welcome />
      <p>Let's start learning React.</p>
    </div>
  );
}
```

`Welcome` and `App` are components. `<Welcome />` renders the `Welcome`
component. JSX elements such as `<h1>` and `<p>` describe interface output.
Component names begin with an uppercase letter so React can distinguish them
from built-in HTML elements such as `<div>`.

### 1.2 Why components matter

If the same button is copied across many pages, a design change requires edits
in many places. A component provides one place for shared structure:

```tsx
interface PrimaryButtonProps {
  label: string;
}

function PrimaryButton({ label }: PrimaryButtonProps) {
  return <button className="primary-button">{label}</button>;
}
```

Use it with different data:

```tsx
<PrimaryButton label="Save" />
<PrimaryButton label="Update" />
<PrimaryButton label="Submit" />
```

The key idea is to build small components and compose them into larger
interfaces. Components are most useful when they provide a clear boundary or
reusable responsibility, not simply because a piece of code can be extracted.

### 1.3 React is about UI composition

React is not a replacement for HTML. JSX looks like markup, but it is syntax
used in JavaScript or TypeScript to describe UI. For example:

```tsx
function ProductCard() {
  return (
    <article>
      <img src="/product.jpg" alt="Laptop" />
      <h2>Laptop</h2>
      <p>Professional laptop</p>
      <button>Buy now</button>
    </article>
  );
}

function ProductPage() {
  return (
    <section>
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </section>
  );
}
```

An application can grow from a small component to pages and complete features
by composing pieces together.

### 1.4 Data and the UI

A useful mental model is:

```text
Data → Components → UI → User interaction → Updated data → Updated UI
```

When a user clicks a like button, application state changes and React renders
the UI for the new state. Instead of manually changing individual DOM nodes,
describe what the UI should look like for the current data and state.

## 2. What Is TypeScript?

TypeScript extends JavaScript with a static type system. A type describes the
kind of value code expects:

```ts
let age: number = 30;
age = 'thirty'; // TypeScript reports an error.
```

Types make code contracts more explicit and allow a type checker and editor to
find many mistakes before the code runs.

### 2.1 Why types matter

In JavaScript, a function's expected inputs may be unclear:

```ts
function calculateTotal(price, quantity) {
  return price * quantity;
}
```

With TypeScript, the function can state its contract:

```ts
function calculateTotal(price: number, quantity: number): number {
  return price * quantity;
}
```

The function expects two numbers and returns a number. This improves
readability, editor support, and detection of type-related mistakes.

### 2.2 TypeScript is not a separate runtime

TypeScript does not replace JavaScript in the browser. A build tool removes
TypeScript-only syntax and produces JavaScript for the runtime:

```text
TypeScript source → Type checking/build → JavaScript → Browser/runtime
```

The type annotation in this example is used during development and compilation:

```ts
const username: string = 'Learner';
```

The browser runs the resulting JavaScript. JavaScript fundamentals therefore
remain important when learning TypeScript.

Type checking also cannot validate every value received at runtime. Data from a
network, browser storage, or another external source may need runtime
validation.

### 2.3 Type inference

TypeScript can often infer a value's type:

```ts
const name = 'Learner'; // inferred as string
const score = 30; // inferred as number
```

You do not need to write every type explicitly. Use explicit types where they
clarify a contract, such as a public function or component props, and rely on
inference when the type is already obvious.

### 2.4 Common TypeScript types

```ts
let username: string = 'Learner';
let age: number = 30;
let isActive: boolean = true;
let scores: number[] = [80, 90, 95];
let names: string[] = ['Amit', 'Rahul', 'Priya'];

interface User {
  id: number;
  name: string;
  email: string;
}

const user: User = {
  id: 1,
  name: 'Amit',
  email: 'amit@example.com',
};
```

Types are especially useful in a React app because data is passed between
components, hooks, and services.

## 3. Why Use React with TypeScript?

React and TypeScript solve different problems:

| React                                  | TypeScript                                   |
| -------------------------------------- | -------------------------------------------- |
| Organizes UI into components           | Describes data and function contracts        |
| Renders interfaces                     | Checks many type mistakes during development |
| Handles UI composition and interaction | Improves editor tools and safer refactoring  |

Together, they support a type-safe, component-based UI.

### 3.1 Type-safe props

Props are the data a component receives. TypeScript can describe the expected
shape:

```tsx
interface UserCardProps {
  name: string;
  age: number;
}

function UserCard({ name, age }: UserCardProps) {
  return (
    <article>
      <h2>{name}</h2>
      <p>{age}</p>
    </article>
  );
}
```

The following use is valid:

```tsx
<UserCard name="Amit" age={30} />
```

Passing `age="thirty"` is a type error because `age` expects a number. This
checking is performed by the TypeScript tooling; it does not add runtime
validation to incoming data.

### 3.2 Better developer experience and communication

When types are known, an editor can offer auto-completion, parameter
information, navigation, refactoring support, and clearer error messages.
Types can also act as living documentation:

```ts
function createUser(name: string, age: number, isAdmin: boolean) {
  // Implementation goes here.
}
```

A reader can see the expected inputs without first finding the implementation
or separate documentation.

### 3.3 Safer refactoring

If a shared data shape changes, the type checker can show locations that still
use the old shape:

```ts
interface User {
  id: number;
  firstName: string;
  lastName: string;
}
```

Types do not guarantee a bug-free application, but they make many changes easier
to reason about across a larger codebase.

## 4. Modern React Development Mindset

Learning syntax is only one part of becoming a React developer. Consider
component design, data flow, and clarity as you build.

### 4.1 Think in components

Instead of thinking only about how to build a page, identify the pieces it is
made from:

```text
Dashboard
├── Header
├── Sidebar
├── Statistics
│   ├── StatCard
│   ├── StatCard
│   └── StatCard
├── RecentOrders
└── Footer
```

### 4.2 Think about data flow

For each component, ask:

- What data does it need, and where does that data come from?
- Should it own local state, or receive data through props?
- Which component should handle a user interaction?
- What should update when that interaction happens?

Data commonly flows from parent components to children through props. State
ownership and shared state are explored in later chapters.

### 4.3 Keep components focused

Avoid putting an entire feature into one large component. Split by meaningful
responsibility:

```tsx
function Dashboard() {
  return (
    <>
      <Header />
      <Sidebar />
      <Statistics />
      <UserList />
      <Footer />
    </>
  );
}
```

Focused components are easier to read, test, reuse, maintain, and debug.

### 4.4 Avoid premature abstraction

Reusable code is valuable when it removes a real repeated pattern or clarifies
design. Start simply, notice repetition, and extract a component or function
when that improves the code. Do not build a configurable abstraction before
there is a problem for it to solve.

### 4.5 Treat TypeScript as a design tool

Types describe contracts between parts of an application. A shared product type
can keep data consistent between an API layer and product components:

```ts
interface Product {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
}
```

For example, a component can express its expected product:

```tsx
function ProductCard({ product }: { product: Product }) {
  return (
    <article>
      <h2>{product.name}</h2>
      <p>${product.price}</p>
    </article>
  );
}
```

### 4.6 Use predictable data structures

Make the data shape explicit when it is part of a component or function
contract. Keep in mind that a TypeScript interface describes what code expects;
it does not check an API response at runtime. Runtime validation is a separate
topic for the API chapter.

## 5. A React + TypeScript development flow

A practical feature workflow is:

```text
Requirement → Component design → Data model/types → Implementation
            → Interaction/state → API integration → Testing → Optimization
```

For an employee profile card, define its data:

```ts
interface Employee {
  id: number;
  name: string;
  role: string;
  department: string;
}
```

Then define a component contract:

```tsx
function EmployeeCard({ employee }: { employee: Employee }) {
  return (
    <article>
      <h2>{employee.name}</h2>
      <p>{employee.role}</p>
      <span>{employee.department}</span>
    </article>
  );
}
```

Create data that follows the contract and render it:

```tsx
const employee: Employee = {
  id: 1,
  name: 'Rahul Kumar',
  role: 'Software Engineer',
  department: 'Engineering',
};

<EmployeeCard employee={employee} />;
```

This creates a clear relationship between **data → type → component → UI**.

## 6. Chapter project preview — Simple Profile Dashboard

The project combines a profile card, a list of skills, and reusable statistic
cards. The full step-by-step task and acceptance checklist are in
[the coding exercises](./exercises.md#mini-project-simple-profile-dashboard).

Suggested structure:

```text
src/
├── components/
│   ├── ProfileCard.tsx
│   ├── SkillList.tsx
│   └── StatCard.tsx
├── types/
│   └── profile.ts
├── App.tsx
└── main.tsx
```

## Common beginner mistakes

1. **Treating React as HTML.** JSX resembles markup, but it is syntax for
   describing UI in JavaScript or TypeScript.
2. **Using `any` everywhere.** `any` opts out of useful checking. Prefer a
   specific type and use `unknown` plus narrowing when a value is not yet known.
3. **Creating huge components.** Split the UI around understandable
   responsibilities.
4. **Adding types without a reason.** Use inference where the value is obvious
   and explicit types where they clarify contracts.
5. **Learning React without JavaScript fundamentals.** Practise functions,
   objects, arrays, `map`, `filter`, destructuring, spread syntax, modules,
   promises, `async`/`await`, and closures.
6. **Assuming TypeScript prevents every bug.** It catches many type errors but
   does not replace runtime validation, tests, or sound application logic.

## Memory points

1. React is a JavaScript library for building user interfaces.
2. Components are reusable building blocks that can be composed.
3. Function components commonly return JSX.
4. JSX describes UI; it is not HTML itself.
5. TypeScript adds static type checking to JavaScript.
6. Browser applications run JavaScript produced from TypeScript source.
7. Type inference means explicit annotations are not always necessary.
8. Props describe data a component receives.
9. Components should have clear responsibilities.
10. Avoid excessive use of `any`.
11. React focuses on UI; TypeScript focuses on static types and tooling.
12. Strong JavaScript fundamentals help you learn React and TypeScript.

## Quick revision

Be able to explain this contract and write it without copying:

```tsx
interface UserProps {
  name: string;
  age: number;
}

function UserCard({ name, age }: UserProps) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{age}</p>
    </div>
  );
}
```

Explain what the props type checks, what React renders, and what still requires
runtime checks.

## Chapter summary

React provides a component-based way to build user interfaces. TypeScript adds
static types to JavaScript, helping developers communicate data contracts and
detect many mistakes during development. Together they provide a strong
foundation for maintainable front-end applications.
