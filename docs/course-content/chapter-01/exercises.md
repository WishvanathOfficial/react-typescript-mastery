# Chapter 1 — Coding exercises

Work through these exercises after reading the
[chapter notes](./notes.md). Type the code rather than copy-pasting it, and
check that your editor and build report the expected types.

## Exercise 1 — Compose a small interface

Create `Welcome` and `App` function components. `App` should render `Welcome`
and one additional paragraph.

**Check your work**

- Both components begin with uppercase names.
- `Welcome` returns a heading.
- `App` composes `Welcome` using `<Welcome />`.

## Exercise 2 — Add a typed component contract

Create a `UserCard` component that accepts a `name` string and an `age` number.
Render both values.

```tsx
interface UserCardProps {
  name: string;
  age: number;
}
```

Try a valid invocation, then temporarily pass a string as `age`. Observe the
TypeScript diagnostic and restore the valid value. Remember: this is
development-time checking, not runtime validation.

## Exercise 3 — Model predictable data

Create a `Product` interface with `id`, `name`, `price`, and `inStock`
properties. Create one valid product object and render its name and price in a
`ProductCard`.

**Extension:** intentionally omit one required property, observe the error, and
then fix it.

## Mini project: Simple Profile Dashboard

Build a small profile dashboard using data and reusable components.

### Requirements

1. Define a `Profile` interface with:
   - `name: string`
   - `role: string`
   - `location: string`
   - `bio: string`
   - `skills: string[]`
   - `projects: number`
   - `experience: number`
2. Put the interface in `src/types/profile.ts`.
3. Create `ProfileCard.tsx`, accepting a typed `profile` prop and showing the
   name, role, location, and bio.
4. Create `SkillList.tsx`, accepting `string[]` and rendering each skill as a
   list item with a stable key.
5. Create `StatCard.tsx`, accepting a label and numeric value.
6. Compose the pieces in `App.tsx` using fictional sample data. Do not publish
   personal contact information or real credentials in course examples.
7. Display at least two statistics, such as projects and years of experience.

### Suggested component contracts

```tsx
interface ProfileCardProps {
  profile: Profile;
}

interface SkillListProps {
  skills: string[];
}

interface StatCardProps {
  label: string;
  value: number;
}
```

### Completion checklist

- [ ] The project compiles without type errors.
- [ ] `Profile` is imported with a type-only import where appropriate.
- [ ] Components receive data through typed props.
- [ ] Skills render from an array and each item has a stable `key`.
- [ ] `App.tsx` composes components instead of owning all markup.
- [ ] Sample content is fictional and does not expose private data.
- [ ] You can explain the flow: `Profile` → component props → rendered UI.

### Hints

- Keep `Profile` in one shared type file so components agree on its shape.
- Keep each component focused on its display responsibility.
- TypeScript can check your declared data shape, but data received from an
  external API would need runtime validation in a real application.
- Start with a simple component contract; avoid building a generic component
  framework for this small dashboard.
