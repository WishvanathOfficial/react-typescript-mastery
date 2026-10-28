# Chapter 3 — JSX with TypeScript

JSX is the bridge between JavaScript logic and the user interface. TypeScript
makes that bridge safer by checking the values passed to elements and
components.

In the previous chapters, we introduced React components and set up a React +
TypeScript project. Now we will learn how to describe a component's UI with
JSX, embed expressions, pass typed props, and compose content with children.

## Learning goals

- Explain what JSX is and why it is transformed before it runs.
- Follow JSX's structural and naming rules.
- Use JavaScript expressions to render dynamic values.
- Understand how TypeScript checks intrinsic element attributes and component
  props.
- Type reusable component children with `ReactNode`.
- Build a Course Landing Section from small, typed components.

## 1. What Is JSX?

JSX is a syntax extension commonly used with React. It lets us describe UI
using syntax that resembles HTML inside JavaScript or TypeScript:

```tsx
function Welcome() {
  return <h1>Welcome to React!</h1>;
}
```

JSX is not HTML. It is part of the source code and is transformed by the
project's compiler and build tooling into JavaScript that React can use. The
browser runs the resulting JavaScript, not raw JSX.

```text
JSX source → build transformation → JavaScript → React renders the UI
```

The exact output depends on the React and build-tool configuration. The
important point is that JSX makes UI structure easier to read and compose.

### 1.1 JSX and React elements

Without JSX, a UI element can be described with a function call:

```tsx
const heading = React.createElement('h1', null, 'Welcome to React');
```

JSX expresses the same intent more clearly:

```tsx
const heading = <h1>Welcome to React</h1>;
```

Think of JSX as a readable description of a React element tree, rather than as
HTML pasted into JavaScript.

### 1.2 JSX, expressions, and components

JSX can contain expressions that use values from the surrounding function:

```tsx
function UserGreeting() {
  const userName = 'Learner';

  return (
    <section>
      <h1>Hello, {userName}</h1>
      <p>Welcome back to your dashboard.</p>
    </section>
  );
}
```

JSX also lets us compose components:

```tsx
function Header() {
  return <header>Company Portal</header>;
}

function App() {
  return (
    <main>
      <Header />
      <h1>Dashboard</h1>
    </main>
  );
}
```

`<header>` is a built-in HTML element. `<Header />` refers to a React
component. Component names conventionally begin with an uppercase letter so
they can be distinguished from lowercase intrinsic elements such as `<div>`.

## 2. JSX Rules and Common Syntax

JSX resembles HTML, but it follows JavaScript-oriented syntax rules. These
rules help the compiler form a well-structured element tree.

### 2.1 Return one root element

A component's returned JSX must form one root tree. Wrap sibling elements in a
parent:

```tsx
function App() {
  return (
    <div>
      <h1>Hello</h1>
      <p>Welcome</p>
    </div>
  );
}
```

If an extra DOM element is not needed, use a Fragment:

```tsx
function App() {
  return (
    <>
      <h1>Hello</h1>
      <p>Welcome</p>
    </>
  );
}
```

### 2.2 Close every element

JSX requires elements to be properly closed. Empty elements use a self-closing
tag:

```tsx
function CourseImage() {
  return (
    <section>
      <img src="/course-cover.jpg" alt="React course cover" />
      <input aria-label="Search lessons" />
    </section>
  );
}
```

Nested elements must also be correctly ordered:

```tsx
<div>
  <h1>Course</h1>
  <p>Learn React and TypeScript.</p>
</div>
```

Treat JSX as a tree: every opening tag has a matching closing tag, unless it
is self-closing.

### 2.3 Use `className` and `htmlFor`

JSX uses JavaScript property names for common DOM attributes:

```tsx
function EmailField() {
  return (
    <div className="field">
      <label htmlFor="email">Email</label>
      <input id="email" name="email" type="email" />
    </div>
  );
}
```

Use `className` instead of HTML's `class`, and `htmlFor` instead of `for` on a
label.

### 2.4 Comments and capitalization

Write a comment inside JSX as a JavaScript comment wrapped in braces:

```tsx
function Dashboard() {
  return (
    <main>
      {/* The page's primary content */}
      <h1>Dashboard</h1>
    </main>
  );
}
```

Use lowercase names for intrinsic elements (`<button />`) and uppercase names
for React components (`<UserCard />`). A lowercase `<userCard />` is treated
as an intrinsic or custom element, not as the `UserCard` component.

## 3. Using JavaScript Values in JSX

Curly braces mark a JavaScript or TypeScript expression inside JSX:

```tsx
function Profile() {
  const name = 'Learner';
  const yearsOfExperience = 3;

  return (
    <section>
      <h1>{name}</h1>
      <p>{yearsOfExperience} years of experience</p>
    </section>
  );
}
```

The expression is evaluated and its renderable result is placed in the UI.
Curly braces accept expressions, not statements such as `if` or `for`.

### 3.1 Calculations and functions

Calculations and function calls can be used when they keep the markup clear:

```tsx
function formatPrice(price: number): string {
  return `₹${price.toLocaleString('en-IN')}`;
}

function ProductPrice() {
  const price = 75_000;
  const quantity = 2;

  return (
    <p>
      {formatPrice(price)} × {quantity} = {formatPrice(price * quantity)}
    </p>
  );
}
```

Move complex logic into a variable or helper function before the `return`
instead of embedding a long calculation in JSX.

### 3.2 Boolean values and conditional rendering

Booleans are useful for choosing what to render, but `true` and `false` are
not displayed as text nodes. Use a conditional expression:

```tsx
function CourseStatus({ isPublished }: { isPublished: boolean }) {
  return (
    <p>{isPublished ? 'This course is available.' : 'This course is being prepared.'}</p>
  );
}
```

For optional content, logical `&&` is common:

```tsx
function Notice({ hasUpdate }: { hasUpdate: boolean }) {
  return <>{hasUpdate && <p>A new lesson is available.</p>}</>;
}
```

Be careful with numeric conditions: `count && <Notice />` renders `0` when
`count` is zero. Use `count > 0 && <Notice />` when a boolean condition is
intended.

### 3.3 Arrays and objects

Render arrays by mapping each item to an element with a stable key:

```tsx
function SkillList() {
  const skills = ['React', 'TypeScript', 'Accessibility'];

  return (
    <ul>
      {skills.map((skill) => (
        <li key={skill}>{skill}</li>
      ))}
    </ul>
  );
}
```

Keys help React match items when a list changes. Prefer a stable identifier
from the data; avoid using an array index when items can be reordered,
inserted, or removed.

Objects are data, not directly renderable text. Select the properties needed
for the UI:

```tsx
const user = { name: 'Learner', role: 'Frontend Developer' };

function UserSummary() {
  return (
    <article>
      <h2>{user.name}</h2>
      <p>{user.role}</p>
    </article>
  );
}
```

## 4. JSX Attributes and Type Safety

Attributes describe an element or provide props to a component:

```tsx
<button type="button" disabled>
  Save
</button>
```

### 4.1 Static and dynamic values

String attributes can use quotes, while dynamic values use braces:

```tsx
const imageUrl = '/course-cover.jpg';
const isDisabled = false;

function CourseCover() {
  return <img src={imageUrl} alt="Course cover" hidden={isDisabled} />;
}
```

Boolean attributes should receive a boolean value. Do not write
`disabled="false"` when you mean the boolean `false`; that is a string and
still represents a present HTML attribute.

### 4.2 Event handlers

Pass a function to an event handler; do not call it while rendering:

```tsx
function SaveButton() {
  function handleSave() {
    console.log('Saved');
  }

  return (
    <button type="button" onClick={handleSave}>
      Save
    </button>
  );
}
```

When an explicit event type is useful, React provides types such as
`ChangeEvent`:

```tsx
import { useState, type ChangeEvent } from 'react';

function SearchBox() {
  const [query, setQuery] = useState('');

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value);
  }

  return <input aria-label="Search" value={query} onChange={handleChange} />;
}
```

TypeScript can often infer an inline handler's event type from the element
attribute, so explicit annotations are not required everywhere.

### 4.3 Component props are typed JSX attributes

When a component is used in JSX, its attributes are props. Define the expected
contract with TypeScript:

```tsx
interface UserCardProps {
  name: string;
  age: number;
}

function UserCard({ name, age }: UserCardProps) {
  return (
    <article>
      <h2>{name}</h2>
      <p>{age} years old</p>
    </article>
  );
}

function App() {
  return <UserCard name="Learner" age={30} />;
}
```

`age={30}` is valid; `age="30"` is a type error because the value is a string.
The same principle applies to native element attributes, which TypeScript
checks using the React JSX types.

For a finite set of values, use a union type:

```tsx
type CourseLevel = 'Beginner' | 'Intermediate' | 'Advanced';

interface Course {
  title: string;
  level: CourseLevel;
  isPublished: boolean;
}
```

Use spread props only when it improves clarity. If a component's inputs are
hidden behind several spreads, it becomes harder to see where its values come
from.

## 5. JSX Children and `ReactNode`

Content nested between a component's opening and closing tags is passed to the
component as `children`:

```tsx
<Card>
  <h2>React Course</h2>
  <p>Learn React with TypeScript.</p>
</Card>
```

Type general renderable children with `ReactNode`:

```tsx
import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
}

function Card({ children }: CardProps) {
  return <section className="card">{children}</section>;
}
```

`ReactNode` is broad: it can represent elements, strings, numbers, fragments,
arrays of renderable values, and empty values such as `null`. Use a narrower
element type only when the component specifically requires a React element
rather than arbitrary renderable content.

Children can be optional when the component is meaningful without nested
content:

```tsx
interface PanelProps {
  title: string;
  children?: ReactNode;
}

function Panel({ title, children }: PanelProps) {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
```

This pattern is useful for layout components: the component controls the
structure, while its caller supplies the content.

## 6. Common JSX Mistakes

Keep these checks in mind when JSX does not compile or render as expected:

| Mistake                                  | Better approach                                |
| ---------------------------------------- | ---------------------------------------------- |
| Returning sibling roots                  | Wrap them in a parent or Fragment              |
| Leaving an element unclosed              | Close it or use a self-closing tag             |
| Writing `class` on an element            | Use `className`                                |
| Writing `for` on a label                 | Use `htmlFor`                                  |
| Placing a variable outside braces        | Write `{value}`                                |
| Rendering an object directly             | Render the properties the UI needs             |
| Passing `"false"` to a boolean attribute | Pass `false` as a boolean                      |
| Rendering an array without keys          | Use a stable key for each list item            |
| Lowercase component name                 | Start component names with an uppercase letter |
| Putting complex logic in markup          | Calculate a named value before `return`        |

## 7. Mini Project — Course Landing Section with JSX

Build a small, reusable landing section using JSX and TypeScript. It should
display:

```text
Course Landing Section
├── Course title, description, and instructor
├── Course statistics
├── Skills list
├── Published or draft status
└── Enroll action
```

### 7.1 Define the course model

```ts
export type CourseLevel = 'Beginner' | 'Intermediate' | 'Advanced';

export interface Course {
  title: string;
  description: string;
  instructor: string;
  level: CourseLevel;
  students: number;
  lessons: number;
  durationHours: number;
  skills: string[];
  isPublished: boolean;
}
```

The union type prevents unsupported level values from being used by mistake.

### 7.2 Create a reusable section

```tsx
import type { ReactNode } from 'react';

interface SectionProps {
  title: string;
  children: ReactNode;
}

function Section({ title, children }: SectionProps) {
  return (
    <section className="section">
      <h2>{title}</h2>
      <div className="section-content">{children}</div>
    </section>
  );
}

export default Section;
```

The section owns its heading and layout, while its caller supplies the
content through `children`.

### 7.3 Compose the course UI

The following example demonstrates typed data, dynamic expressions,
conditional rendering, list rendering, attributes, and children:

```tsx
import type { Course } from './types/course';
import Section from './components/Section';

const course: Course = {
  title: 'React with TypeScript',
  description: 'Build clear, reusable interfaces with confidence.',
  instructor: 'Alex Morgan',
  level: 'Intermediate',
  students: 2400,
  lessons: 32,
  durationHours: 12,
  skills: ['React', 'TypeScript', 'Component design'],
  isPublished: true,
};

function CourseLandingSection() {
  return (
    <main className="course-page">
      <section className="course-hero">
        <span className="course-level">{course.level}</span>
        <h1>{course.title}</h1>
        <p>{course.description}</p>
        <p>
          Instructor: <strong>{course.instructor}</strong>
        </p>
      </section>

      <Section title="Course statistics">
        <dl className="course-stats">
          <div>
            <dt>Students</dt>
            <dd>{course.students.toLocaleString()}</dd>
          </div>
          <div>
            <dt>Lessons</dt>
            <dd>{course.lessons}</dd>
          </div>
          <div>
            <dt>Duration</dt>
            <dd>{course.durationHours} hours</dd>
          </div>
        </dl>
      </Section>

      <Section title="Skills you will practise">
        <ul className="skills">
          {course.skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </Section>

      <p className={course.isPublished ? 'published' : 'draft'}>
        {course.isPublished
          ? 'This course is currently available.'
          : 'This course is being prepared.'}
      </p>
      <button type="button" disabled={!course.isPublished}>
        Enroll in the course
      </button>
    </main>
  );
}

export default CourseLandingSection;
```

Use fictional sample data in your practice project. Keep the example focused:
the goal is to practise JSX and typed component contracts, not to build a
complete enrollment system.

### 7.4 Component structure

As the section grows, extract focused components such as `CourseHero`,
`CourseStats`, `CourseStatus`, and `Section`. Each component should have a
clear responsibility and explicit prop types. Avoid creating abstractions
that make a small example harder to follow.

## 8. JSX Best Practices

- Format JSX so the element tree is easy to scan.
- Move calculations and complicated conditions out of the returned markup.
- Extract a section when it has a clear responsibility or useful reuse.
- Define component contracts with specific TypeScript types instead of `any`.
- Use `ReactNode` for general renderable children.
- Use stable keys when rendering lists.
- Prefer predictable data structures and meaningful component names.

## 9. Memory Points

- JSX describes UI with JavaScript-like syntax; it is not HTML.
- Build tooling transforms JSX into JavaScript that React can use.
- Use one root element or a Fragment and close all JSX tags.
- Use `className`, `htmlFor`, braces for expressions, and uppercase component
  names.
- Render arrays with `map` and stable keys; render object properties rather
  than the object itself.
- JSX attributes pass values to DOM elements or component props.
- TypeScript checks props and many attributes during development.
- `children` is content nested inside a component, and `ReactNode` is a
  common type for general renderable content.
- Keep JSX readable by moving complex logic into named values and functions.

## 10. Interview Questions and Answers

### 1. What is JSX?

JSX is a syntax extension commonly used with React to describe UI inside
JavaScript or TypeScript source.

### 2. Is JSX HTML?

No. JSX resembles HTML, but it is source syntax that build tooling transforms
into JavaScript.

### 3. Why is JSX useful?

It provides a readable way to describe UI while placing expressions and
component composition close to the structure they affect.

### 4. How do you embed a JavaScript expression in JSX?

Use curly braces, for example `<h1>Hello, {name}</h1>`.

### 5. Can you put an `if` statement directly inside JSX braces?

No. Braces in JSX contain expressions. Use a ternary or logical expression,
or calculate a value before returning JSX.

### 6. Why must a component return one root?

The returned JSX must form one element tree. Wrap siblings in a parent element
or a Fragment.

### 7. What is a Fragment?

A Fragment groups multiple elements without adding another DOM element.

### 8. Why do JSX tags need to be closed?

JSX must have a well-formed element tree so it can be parsed and transformed.
Empty elements use self-closing syntax.

### 9. What is the difference between `class` and `className`?

JSX uses the `className` property to set an element's CSS class.

### 10. Why is `htmlFor` used on a label?

`htmlFor` is the JSX property used to associate a label with an element ID.

### 11. How are comments written inside JSX?

Use JavaScript comment syntax inside braces: `{/* comment */}`.

### 12. Why do React component names start with uppercase letters?

Capitalization distinguishes component references such as `<UserCard />` from
lowercase intrinsic elements such as `<div />`.

### 13. How do you render an array in JSX?

Use `map` to return an element for each item and give each element a stable
`key`.

### 14. Why does React need keys for lists?

Keys help React match list items between renders, especially when items are
added, removed, or reordered.

### 15. Can an object be rendered directly as JSX text?

Generally no. Render the object's relevant properties or transform its data
into renderable content.

### 16. How do you conditionally render one of two outputs?

Use a conditional expression such as
`isPublished ? <Published /> : <Draft />`.

### 17. How does logical `&&` render optional content?

When the condition is truthy, the expression to the right is rendered; when it
is false, React renders no element. Ensure a numeric left side cannot
accidentally display `0`.

### 18. How should a boolean JSX attribute receive a false value?

Pass the boolean `false`, such as `disabled={false}`. A string like
`"false"` is not the boolean value.

### 19. What is a component prop?

A prop is a value supplied to a component through its JSX attributes.

### 20. How does TypeScript help with component props?

A props interface or type defines the expected values, allowing TypeScript to
report invalid or missing values during development.

### 21. How do you pass an event handler?

Pass a function reference to the event prop, such as `onClick={handleSave}`.
Calling it during render, as in `onClick={handleSave()}`, runs it too early.

### 22. When should a React event be explicitly typed?

When it improves clarity or inference is insufficient. React provides types
such as `ChangeEvent<HTMLInputElement>`.

### 23. What is `children`?

`children` is the prop that receives content nested between a component's
opening and closing tags.

### 24. What is `ReactNode`?

`ReactNode` is a broad React type for values that can be rendered, including
elements, text, numbers, fragments, arrays, and empty values.

### 25. What is the difference between `ReactNode` and an element type?

`ReactNode` covers many renderable values. An element type is narrower and
represents a React element value specifically.

### 26. How do you make children optional?

Declare `children?: ReactNode` in the component's props type.

### 27. What is component composition?

Composition is building a larger UI by combining smaller components, often
passing content through props and children.

### 28. Why move complex calculations outside JSX?

Named values and helper functions make the markup easier to read, understand,
and test.

### 29. Is JSX required to use React?

No. React elements can be created without JSX, but JSX is widely used because
it makes UI descriptions more readable.

### 30. How do JSX and TypeScript complement each other?

JSX describes the UI structure, while TypeScript checks the values and
contracts used by that UI, including component props and many element
attributes.

## Chapter summary

JSX is a readable way to describe a React element tree in JavaScript or
TypeScript. We practised its structural rules, expressions, attributes,
conditional and list rendering, and typed component props. We also used
`ReactNode` to create a reusable layout component that accepts nested content.
The Course Landing Section combines these techniques into one small,
composed interface.
