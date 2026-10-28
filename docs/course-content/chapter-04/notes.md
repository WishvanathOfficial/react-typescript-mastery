# Chapter 4 — Props and State with TypeScript

Props define what a component receives. State defines what a component manages
and changes.

In the previous chapters, we learned to create React applications, organize
project files, write JSX, and combine JSX with TypeScript. We have already
seen props in examples such as:

```tsx
<UserCard name="Learner" age={30} />
```

Here, `name` and `age` are props. Real applications also respond to
interactions: users click buttons, enter text, select options, open menus, add
and remove products, update profiles, filter lists, submit forms, and toggle
settings. When application data changes as a result of interaction, React
needs a way to manage that changing data. That is where state comes in.

```text
Props → data received by a component
State → data managed by a component
```

With TypeScript, we can make both props and state strongly typed. The result
is a clearer data contract and more predictable UI.

## Learning goals

- Type required, optional, object, union, and function props.
- Provide defaults for optional props.
- Manage local state with `useState` and TypeScript.
- Update object and array state without mutation.
- Decide whether data belongs in props or state.
- Keep one source of truth and derive values when possible.

## 1. Props with TypeScript

Props are values passed from a parent component to a child component:

```tsx
function App() {
  return <UserCard name="Learner" role="Frontend Developer" />;
}
```

`UserCard` receives the `name` and `role` props. Describe the component's
expected inputs with a TypeScript interface:

```tsx
interface UserCardProps {
  name: string;
  role: string;
}

function UserCard({ name, role }: UserCardProps) {
  return (
    <article>
      <h2>{name}</h2>
      <p>{role}</p>
    </article>
  );
}
```

The interface is the component contract: `name` and `role` are both required
strings. TypeScript reports an error if a required prop is missing or if a
value has the wrong type.

### 1.1 Required props

Every property in an interface is required unless it is marked optional:

```tsx
interface ProductCardProps {
  name: string;
  price: number;
  category: string;
}
```

This usage supplies all three properties:

```tsx
<ProductCard name="Laptop" price={75000} category="Electronics" />
```

If `category` is omitted, TypeScript reports an error. Required props help
prevent a component from silently receiving incomplete data.

### 1.2 Props with different types

Props can contain strings, numbers, booleans, arrays, objects, functions,
renderable React content, and union types. For example:

```tsx
interface Employee {
  id: number;
  name: string;
  role: string;
}

interface EmployeeCardProps {
  employee: Employee;
  isSelected: boolean;
}

function EmployeeCard({ employee, isSelected }: EmployeeCardProps) {
  return (
    <article>
      <h2>{employee.name}</h2>
      <p>{employee.role}</p>
      {isSelected && <strong>Selected</strong>}
    </article>
  );
}
```

The caller supplies an `Employee` object and a boolean:

```tsx
<EmployeeCard
  employee={{
    id: 1,
    name: 'Learner',
    role: 'Frontend Developer',
  }}
  isSelected
/>
```

For shared data models, define the model once and reuse it across components.

### 1.3 Function props

A child may need to notify its parent when an action occurs. Pass a callback
through a function prop:

```tsx
interface ActionButtonProps {
  label: string;
  onClick: () => void;
}

function ActionButton({ label, onClick }: ActionButtonProps) {
  return (
    <button type="button" onClick={onClick}>
      {label}
    </button>
  );
}
```

The parent supplies the callback:

```tsx
function App() {
  function handleSave() {
    console.log('Saved');
  }

  return <ActionButton label="Save" onClick={handleSave} />;
}
```

A callback can accept parameters too:

```tsx
interface UserActionsProps {
  onSelect: (userId: number) => void;
}

function UserActions({ onSelect }: UserActionsProps) {
  return (
    <button type="button" onClick={() => onSelect(101)}>
      Select user
    </button>
  );
}
```

The function type `(userId: number) => void` describes its input and indicates
that callers should not expect a return value.

### 1.4 Object props

When a group of values describes one entity, a component can receive a
structured object rather than many separate values:

```tsx
interface User {
  name: string;
  role: string;
  location: string;
  experience: number;
}

interface UserCardProps {
  user: User;
}

function UserCard({ user }: UserCardProps) {
  return (
    <article>
      <h2>{user.name}</h2>
      <p>{user.role}</p>
      <p>{user.location}</p>
      <p>{user.experience} years of experience</p>
    </article>
  );
}
```

Choose between individual props and an object based on the component's
responsibility and reuse. Prefer a clear contract over passing an unnecessarily
large object.

## 2. Optional Props and Default Values

Mark a property optional with `?`:

```tsx
interface ProfileProps {
  name: string;
  role?: string;
}
```

The caller may provide `role` or omit it:

```tsx
<Profile name="Learner" role="Frontend Developer" />
<Profile name="Learner" />
```

An optional value may be `undefined`, so the component must handle that case.
It can conditionally render the value:

```tsx
function Profile({ name, role }: ProfileProps) {
  return (
    <article>
      <h2>{name}</h2>
      {role && <p>{role}</p>}
    </article>
  );
}
```

### 2.1 Defaults during destructuring

Provide a default while destructuring the props:

```tsx
interface ButtonProps {
  label?: string;
}

function Button({ label = 'Submit' }: ButtonProps) {
  return <button type="button">{label}</button>;
}
```

`<Button />` uses `"Submit"`; `<Button label="Save" />` uses `"Save"`.
Optionality describes whether the caller may omit a prop. The default value
describes the component's behavior when the value is omitted or `undefined`.

Optional boolean props can also have defaults:

```tsx
interface ModalProps {
  title: string;
  isClosable?: boolean;
}

function Modal({ title, isClosable = true }: ModalProps) {
  return (
    <section>
      <h2>{title}</h2>
      {isClosable && <button type="button">Close</button>}
    </section>
  );
}
```

### 2.2 Union types for props

Use a union when a prop should accept only specific values:

```tsx
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'danger';
}
```

These are valid:

```tsx
<Button variant="primary" />
<Button variant="secondary" />
<Button variant="danger" />
```

This is invalid because `"success"` is not part of the union:

```tsx
<Button variant="success" />
```

Optional union props can have a default as well:

```tsx
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger';
}

function Button({ variant = 'primary' }: ButtonProps) {
  return (
    <button className={`button button-${variant}`} type="button">
      Submit
    </button>
  );
}
```

## 3. State with `useState`

Props are received by a component; state is managed by a component. React's
`useState` Hook stores local state:

```tsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button type="button" onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
```

The general pattern is:

```tsx
const [state, setState] = useState(initialValue);
```

The setter requests a state update. React then renders the component with the
updated state.

### 3.1 Type inference and explicit types

TypeScript often infers a useful state type from the initial value:

```tsx
const [count, setCount] = useState(0); // number
const [name, setName] = useState('Learner'); // string
```

When the initial value does not describe every value the state can later
contain, provide a type argument. For data that may not have loaded yet:

```tsx
interface User {
  id: number;
  name: string;
  role: string;
}

const [user, setUser] = useState<User | null>(null);
```

The state can contain either a `User` or `null`. The component should account
for both:

```tsx
function UserProfile({ user }: { user: User | null }) {
  if (!user) {
    return <p>Loading user...</p>;
  }

  return <h2>{user.name}</h2>;
}
```

### 3.2 Updating from previous state

Use the functional updater when the next value depends on the previous value:

```tsx
setCount((previousCount) => previousCount + 1);
```

The updater receives the previous state and returns the next state. This makes
the dependency explicit and is the safer pattern for updates based on current
state:

```tsx
function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((previousCount) => previousCount + 1);
  }

  return (
    <button type="button" onClick={increment}>
      {count}
    </button>
  );
}
```

When state changes, React schedules a render so the UI can reflect the new
value:

```text
Initial state → render → user interaction → state update → render → updated UI
```

### 3.3 Choose state for UI-relevant data

Good state candidates are values that change over time and affect what the
user sees, such as:

- whether a modal is open;
- the selected tab or item;
- search text and form values;
- loading or error status;
- expanded sections.

Not every value needs to be state. If a value can be calculated from existing
data, derive it instead:

```tsx
const firstName = 'Learner';
const lastName = 'One';
const fullName = `${firstName} ${lastName}`;
```

Avoid separate `fullName` state when it can always be calculated from
`firstName` and `lastName`. Store the minimum state necessary and prefer one
source of truth.

## 4. Object and Array State

Applications commonly manage profile objects, form objects, product lists,
and arrays of employees. TypeScript can describe their shapes, and React state
should be updated by creating new values rather than mutating existing ones.

### 4.1 Object state

Define the object shape and use it as the state type:

```tsx
interface Profile {
  name: string;
  role: string;
  location: string;
}

const [profile, setProfile] = useState<Profile>({
  name: 'Learner',
  role: 'Frontend Developer',
  location: 'Hyderabad',
});
```

To update one property, copy the existing properties and replace the value:

```tsx
setProfile((previousProfile) => ({
  ...previousProfile,
  role: 'Lead Engineer',
}));
```

Do not directly assign to `profile.role`. State should be treated as
immutable.

### 4.2 Nested object updates

Copy every object level that changes:

```tsx
interface Address {
  city: string;
  country: string;
}

interface User {
  name: string;
  address: Address;
}

const [user, setUser] = useState<User>({
  name: 'Learner',
  address: {
    city: 'Hyderabad',
    country: 'India',
  },
});

setUser((previousUser) => ({
  ...previousUser,
  address: {
    ...previousUser.address,
    city: 'Bengaluru',
  },
}));
```

The outer user and nested address are both copied, so the existing state
objects are not mutated.

### 4.3 Array state

Use an array type such as `string[]` or `Product[]`:

```tsx
const [skills, setSkills] = useState<string[]>(['React', 'TypeScript']);
```

Add an item by returning a new array:

```tsx
setSkills((previousSkills) => [...previousSkills, 'Node.js']);
```

Remove items with `filter`, which returns a new array:

```tsx
setSkills((previousSkills) => previousSkills.filter((skill) => skill !== 'Node.js'));
```

Update one item with `map`, returning a new object for the item that changed:

```tsx
interface Product {
  id: number;
  name: string;
  price: number;
}

setProducts((previousProducts) =>
  previousProducts.map((product) =>
    product.id === productId ? { ...product, price: newPrice } : product,
  ),
);
```

Avoid mutating the existing array or its objects with methods such as
`push`, or direct property assignments. Create a new state value instead.

## 5. Props vs State

Props and state are closely related, but serve different purposes:

| Feature             | Props                          | State                       |
| ------------------- | ------------------------------ | --------------------------- |
| Source              | Parent component               | Component itself            |
| Purpose             | Pass data or configuration     | Manage changing data        |
| Direct modification | Treat as read-only             | Update through its setter   |
| Can change?         | Parent can provide a new value | Yes, through a state update |
| Typical use         | Data and configuration         | Interaction and UI state    |

Props describe what a component receives. State describes what a component
manages.

### 5.1 Parent-owned state and callbacks

A child should not directly change a prop. If a child interaction needs to
change parent-owned data, the parent can pass a callback:

```tsx
interface ChildProps {
  value: number;
  onChange: (value: number) => void;
}

function Parent() {
  const [value, setValue] = useState(0);

  return <Child value={value} onChange={setValue} />;
}

function Child({ value, onChange }: ChildProps) {
  return (
    <button type="button" onClick={() => onChange(value + 1)}>
      {value}
    </button>
  );
}
```

The parent owns the state, passes its current value through props, and
provides a callback the child can call. When multiple components need the
same changing data, move the state to their closest common parent. This is
called lifting state up.

### 5.2 Decide whether data belongs in props or state

Use props when a parent owns the value and a child needs to display it, receive
configuration, or request a change through a callback.

Use state when a value changes over time, user interaction changes it, and
the component owns the behavior that changes it.

For example, `isOpen` can be a prop if a parent controls a modal:

```tsx
<Modal isOpen={isModalOpen} />
```

The actual state may live in the parent:

```tsx
const [isModalOpen, setIsModalOpen] = useState(false);
```

The key question is: which component should own the changing value?

### 5.3 Avoid duplicated or excessive state

Do not store a value in state if it can be derived from other values. Avoid
using `any` for state when a meaningful type is available, and do not
automatically turn every variable into state. Ask whether the value changes
over time and whether the UI needs to respond.

A component receiving many unrelated props may indicate that its boundary
should be reconsidered. A structured object or more focused component
responsibilities can make the contract clearer, but do not add abstraction
without a reason.

## 6. Common Mistakes with Props and State

### 6.1 Mutating props

Avoid assigning to a prop such as `user.name`. Props are read-only inputs. A
child can request a change through a callback provided by its parent.

### 6.2 Mutating state

Avoid mutating an existing array:

```tsx
items.push(newItem);
```

Instead, use the setter to provide a new array:

```tsx
setItems((previousItems) => [...previousItems, newItem]);
```

### 6.3 Storing derived values

Avoid duplicate state when a value can be calculated from existing values.
For example, derive a full name from the current first and last names.

### 6.4 Using `any` for state

Avoid opting out of type checking:

```tsx
const [user, setUser] = useState<any>(null);
```

Prefer a meaningful model, for example `useState<User | null>(null)`.

### 6.5 Using too much state

Store values in state only when they change and the UI needs to respond to
those changes. Other values can be regular variables or derived values.

## 7. Memory Points

### Props

- Props are data passed from a parent to a child and should be treated as
  read-only.
- Interfaces describe prop contracts; required props must be supplied.
- Optional props use `?`, and destructuring can provide defaults.
- Props can contain objects, arrays, functions, and union types.
- Callback props let children request changes from parents.

### State

- State is managed by a component with `useState`.
- TypeScript can infer simple state types; explicit types help when the
  initial value does not describe every possible value.
- `User | null` is common for data that may not have loaded yet.
- Use functional updates when the next value depends on the previous state.
- State updates cause React to render the component with the new state.
- Avoid unnecessary state and derive values when possible.

### Objects, arrays, and architecture

- Do not mutate state directly.
- Use object spread to copy and update objects.
- Use array spread to add items, `filter` to remove them, and `map` to update
  them.
- Parent components can own state and pass values and callbacks through props.
- Lift state up when components need to share changing data.
- Prefer one source of truth.

## 8. Quick Revision Sheet

```text
Props → data from parent → child component
State → data owned by component → interaction → update → re-render
```

Typed props:

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

Typed state and immutable updates:

```tsx
const [count, setCount] = useState(0);

interface Profile {
  name: string;
  role: string;
}

const [profile, setProfile] = useState<Profile>({
  name: 'Learner',
  role: 'Engineer',
});

setProfile((previousProfile) => ({
  ...previousProfile,
  role: 'Lead Engineer',
}));

const [skills, setSkills] = useState<string[]>(['React', 'TypeScript']);

setSkills((previousSkills) => [...previousSkills, 'Node.js']);
setSkills((previousSkills) => previousSkills.filter((skill) => skill !== 'Node.js'));
```

The central idea is: props describe what a component receives; state describes
what it manages and changes. TypeScript can make both contracts more
predictable.
