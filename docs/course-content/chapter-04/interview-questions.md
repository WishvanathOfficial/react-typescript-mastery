# Chapter 4 — Scenario-Based Interview Questions and Answers

Technical interviews often test whether you understand how React works in real
situations rather than simply asking definitions. The following scenarios are
particularly important.

## Scenario 1 — A Child Needs to Update Parent Data

**Question**

A parent component owns a user's name. A child component contains a button that
should change the name. Should the child directly modify the prop?

**Answer**

No. Props should be treated as read-only. The parent should own the state and
pass a callback to the child.

```tsx
interface ChildProps {
  name: string;
  onChangeName: (name: string) => void;
}

function Child({ name, onChangeName }: ChildProps) {
  return (
    <div>
      <p>{name}</p>
      <button type="button" onClick={() => onChangeName('Rahul')}>
        Change Name
      </button>
    </div>
  );
}
```

The parent owns the state:

```tsx
function Parent() {
  const [name, setName] = useState('Wishvanath');

  return <Child name={name} onChangeName={setName} />;
}
```

The data flow is:

```text
Parent State
  ↓
Props
  ↓
Child
  ↓
Callback
  ↓
Parent State Update
```

## Scenario 2 — State Starts as `null`

**Question**

An API call will eventually return a `User`, but initially there is no user.
How should the state be typed?

**Answer**

Use a union type:

```tsx
interface User {
  id: number;
  name: string;
}

const [user, setUser] = useState<User | null>(null);
```

This tells TypeScript that the state can contain either a `User` or `null`.

## Scenario 3 — Updating Based on Previous State

**Question**

You have a counter and want to increment it. Which approach is safer when the
new value depends on the previous value?

**Answer**

Use the functional updater:

```tsx
setCount((previousCount) => previousCount + 1);
```

This explicitly tells React that the next value depends on the previous
state.

## Scenario 4 — Adding an Item to an Array

**Question**

You have:

```tsx
const [skills, setSkills] = useState<string[]>(['React', 'TypeScript']);
```

How do you add `"Node.js"` without mutating the existing array?

**Answer**

Create a new array:

```tsx
setSkills((previousSkills) => [...previousSkills, 'Node.js']);
```

## Scenario 5 — Updating One Object in an Array

**Question**

You have an array of employees and want to update one employee's role. How
would you do it?

**Answer**

Use `map()` and return a new object for the matching employee:

```tsx
setEmployees((previousEmployees) =>
  previousEmployees.map((employee) =>
    employee.id === employeeId
      ? {
          ...employee,
          role: 'Lead Engineer',
        }
      : employee,
  ),
);
```

This preserves immutability.

## Scenario 6 — Optional Prop

**Question**

A component's title is optional and should default to `"Dashboard"`. How
would you define it?

**Answer**

```tsx
interface HeaderProps {
  title?: string;
}

function Header({ title = 'Dashboard' }: HeaderProps) {
  return <h1>{title}</h1>;
}
```

## Scenario 7 — Restricting a Prop to Specific Values

**Question**

A button should accept only primary, secondary, or danger. How would you type
it?

**Answer**

Use a union type:

```tsx
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'danger';
}
```

This prevents invalid values such as:

```tsx
<Button variant="success" />
```

## Scenario 8 — Should Derived Data Be State?

**Question**

You have:

```tsx
const [firstName, setFirstName] = useState('Wishvanath');
const [lastName, setLastName] = useState('Sah');
```

Should you also store `fullName` in state?

**Answer**

Usually no. Derive it:

```tsx
const fullName = `${firstName} ${lastName}`;
```

This avoids duplicated state and multiple sources of truth.

## Scenario 9 — Object State Update

**Question**

You have:

```tsx
interface Profile {
  name: string;
  role: string;
}

const [profile, setProfile] = useState<Profile>({
  name: 'Wishvanath',
  role: 'Engineer',
});
```

How do you update only the role?

**Answer**

```tsx
setProfile((previousProfile) => ({
  ...previousProfile,
  role: 'Lead Engineer',
}));
```

The spread operator preserves the existing properties.

## Scenario 10 — Child Needs Only One Property

**Question**

A parent has a large `User` object, but a child only needs the user's name.
Should you always pass the entire object?

**Answer**

Not necessarily. If the child only needs the name, passing only the required
data can make the component's contract clearer.

```tsx
interface UserNameProps {
  name: string;
}
```

Usage:

```tsx
<UserName name={user.name} />
```

The appropriate choice depends on component design and reuse.

## Scenario 11 — Two Components Need the Same State

**Question**

Two sibling components need access to the same selected user. Where should
the state live?

**Answer**

Usually, move the shared state to their closest common parent.

```text
       Parent
       /    \
      ↓      ↓
  Child A  Child B
```

The parent owns:

```tsx
const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
```

and passes the required value and callbacks to both children. This is
commonly called lifting state up.

## Scenario 12 — Why Not Mutate State Directly?

**Question**

Why is this problematic?

```tsx
skills.push('React');
```

**Answer**

Because it directly mutates the existing state array. Instead:

```tsx
setSkills((previousSkills) => [...previousSkills, 'React']);
```

React state should be updated by providing a new value rather than mutating
the existing value.

## Scenario 13 — Form State

**Question**

You are building a login form with email and password. Should these values be
state?

**Answer**

If the component needs to respond to user input and submit the current values,
local state is a common approach.

```tsx
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
```

The values can then be connected to controlled inputs.

## Scenario 14 — Loading State

**Question**

A component fetches data from an API. What state might you need?

**Answer**

A common design includes:

```tsx
const [isLoading, setIsLoading] = useState(true);
const [error, setError] = useState<string | null>(null);
const [user, setUser] = useState<User | null>(null);
```

This allows the UI to represent different states:

```text
Loading
  ↓
Success → User
  ↓
Failure → Error
```

The exact architecture depends on the application's data-fetching strategy.

## Scenario 15 — Props or State?

**Question**

A modal has an `isOpen` value. Should it always be state?

**Answer**

Not necessarily. If the parent controls whether the modal is open, `isOpen`
can be a prop:

```tsx
<Modal isOpen={isModalOpen} />
```

The actual state may live in the parent:

```tsx
const [isModalOpen, setIsModalOpen] = useState(false);
```

The important question is: which component should own the changing value?
