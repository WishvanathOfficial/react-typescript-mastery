# Chapter 4 — Coding exercises

These exercises complement the
[chapter notes](./notes.md). Practise in a React + TypeScript project and run
the build to check your types.

## Exercise 1 — Define component props

Create a `UserCard` component that accepts a required `name` and an optional
`role`. Provide a default role of `"Learner"`.

```tsx
interface UserCardProps {
  name: string;
  role?: string;
}
```

Render the name and role. Use the component once with both props and once
without `role`.

**Check your work**

- `name` is required and has type `string`.
- `role` can be omitted.
- The default value appears when no role is supplied.
- Passing a number for either prop produces a TypeScript error.

## Exercise 2 — Pass a callback prop

Create a `RenameButton` component that accepts a label and an
`onRename: (name: string) => void` callback. Render a button that calls
`onRename` with a new name when clicked.

Use the component from a parent that owns the name in state and displays the
current value.

**Check your work**

- The child does not mutate a prop.
- The parent owns the name state.
- The parent passes the current name and callback through props.
- Clicking the button updates the parent's displayed name.

## Exercise 3 — Type state and use functional updates

Create a counter using `useState`. Add increment and decrement buttons. Add a
reset button that returns the count to zero.

Use functional updates for increment and decrement:

```tsx
setCount((previousCount) => previousCount + 1);
```

**Extension:** add a nullable selected-user state using
`useState<User | null>(null)` and render a loading or empty message until a
user is selected.

## Exercise 4 — Update objects and arrays immutably

Create a profile editor with `name` and `role` fields stored in typed object
state. Update one field at a time while preserving the other field.

Then create a skills list stored as `string[]`. Add a skill and remove a skill
without calling mutating methods such as `push` or changing the existing
array.

**Check your work**

- Object updates spread the previous object before changing a property.
- Array additions create a new array.
- Array removals use `filter`.
- The existing value is not mutated.

## Mini project: Shopping Cart Item Manager

Build a small interactive cart to practise typed props, state ownership,
callback props, and immutable array updates.

### Suggested structure

```text
src/
├── components/
│   ├── CartItem.tsx
│   ├── CartList.tsx
│   └── CartSummary.tsx
├── types/
│   └── cart.ts
├── App.tsx
└── index.css
```

### Requirements

1. Define and export a `CartItem` type with `id`, `name`, `price`, and
   `quantity`.
2. Keep the cart items in state in the parent component.
3. Render each cart item with a reusable `CartItem` component and a stable
   key.
4. Pass typed callbacks to increase or decrease an item's quantity.
5. Remove an item when its quantity reaches zero, or provide a separate
   remove action.
6. Calculate the total from the current cart items instead of storing a
   duplicate total in state.
7. Disable the decrease action when an item's quantity is one if the chosen
   behavior does not allow zero quantities.
8. Use a union type for any constrained values, such as a filter or item
   status.
9. Use fictional sample product data.

### Completion checklist

- [ ] Cart data matches the `CartItem` type.
- [ ] The parent owns the shared cart state.
- [ ] Child components receive data and callbacks through typed props.
- [ ] Updates use functional state setters when based on previous state.
- [ ] Array items are added, updated, and removed immutably.
- [ ] The total is derived from cart state.
- [ ] `npm run build` completes successfully.

### Reflection

1. Which component owns the cart state, and why?
2. Why should a child call a callback instead of mutating its item prop?
3. Why is the total derived instead of stored as separate state?
4. Which update uses `map`, and which uses `filter`?
5. When would it make sense to lift the cart state higher in the tree?
