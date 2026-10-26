# Chapter 1 — Interview questions and answers

Use these questions for self-review after completing the
[chapter notes](./notes.md) and [coding exercises](./exercises.md). Try
answering aloud before reading each answer.

## Core questions

### 1. What is React?

React is a JavaScript library for building user interfaces using reusable,
composable components.

### 2. Why is React called component-based?

React applications are built by combining independent UI components into larger
interfaces. Components help organize rendering and reuse.

### 3. What is a React component?

A component is a reusable piece of UI, commonly a function that returns JSX.
It can receive data through props and can participate in rendering and user
interaction.

### 4. What is JSX?

JSX is a syntax extension used to describe UI in JavaScript or TypeScript. A
build tool transforms it into JavaScript the runtime can execute.

### 5. Is JSX HTML?

No. JSX resembles HTML, but it is JavaScript syntax used to describe UI
elements. It has its own rules and is transformed during the build.

### 6. What is TypeScript?

TypeScript extends JavaScript with a static type system and development-time
tooling. TypeScript source is transformed into JavaScript for execution.

### 7. Does the browser directly execute TypeScript?

Browsers execute JavaScript. A toolchain typically type-checks and transforms
TypeScript source into JavaScript before it runs.

### 8. What is type inference?

Type inference is TypeScript's ability to determine a value's type from its
initializer or context. For example, `const age = 30` is inferred as a number.

### 9. Why use TypeScript with React?

It can make props and data contracts clearer, improve editor support, detect
many type-related mistakes, and make refactoring safer.

### 10. How do you type React component props?

Define a type or interface for the props and use it to type the component
parameter:

```tsx
interface UserProps {
  name: string;
  age: number;
}

function User({ name, age }: UserProps) {
  return (
    <p>
      {name} — {age}
    </p>
  );
}
```

### 11. What is the difference between JavaScript and TypeScript?

JavaScript is the language executed by the runtime. TypeScript adds static type
checking and other development-time features, and is typically transformed
into JavaScript before execution.

### 12. What is `any` in TypeScript?

`any` opts out of most type checking for a value. Excessive use removes much of
TypeScript's benefit. Prefer a specific type, or `unknown` with narrowing when
the value is not yet known.

### 13. What is the difference between props and state?

Props are inputs passed to a component by its parent. State is data managed by
a component or another state owner that can change over time. State and hooks
are covered in detail in later chapters.

### 14. Why should components be small and focused?

Focused components are easier to understand, test, reuse, maintain, and debug.
The goal is meaningful responsibility boundaries, not making every line its
own component.

### 15. Can TypeScript prevent all runtime errors?

No. TypeScript catches many type-related problems during development, but
network failures, invalid external data, logic errors, and other runtime
problems remain possible. Runtime validation and tests are still important.

### 16. Does TypeScript make JavaScript faster?

Not inherently. TypeScript primarily improves development-time checking and
tooling. Runtime performance depends on the JavaScript that runs and how the
application is implemented.

### 17. Why is TypeScript useful for large React applications?

Explicit contracts help teams understand data, editor tooling helps navigate
code, and the type checker can identify many affected locations during a
refactor.

### 18. What is component composition?

Component composition is building a larger interface by combining smaller
components. For example:

```tsx
function Dashboard() {
  return (
    <>
      <Header />
      <Sidebar />
      <Content />
    </>
  );
}
```

## Practice prompts

1. Explain how typed props can catch an incorrect component invocation.
2. Describe when you would use an explicit annotation and when you would rely on
   inference.
3. Draw a component tree for a dashboard you have used.
4. Explain one thing TypeScript cannot guarantee about data received from an
   API.
5. Describe the relationship between data, types, components, and rendered UI.
