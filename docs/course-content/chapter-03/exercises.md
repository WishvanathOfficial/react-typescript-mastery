# Chapter 3 — Coding exercises

Use these exercises with the [chapter notes](./notes.md). Work in a React +
TypeScript practice project and run its development server or production build
to check your work.

## Exercise 1 — Describe a UI with JSX

Create a `Welcome` component that returns a heading and a paragraph. Compose
it inside an `App` component.

**Check your work**

- Both component names begin with uppercase letters.
- The returned elements have one root or use a Fragment.
- Every JSX tag is properly closed.

## Exercise 2 — Fix JSX syntax

Create a small profile card containing an image, a heading, and a label/input
pair. Use `className` for CSS classes and `htmlFor` for the label. Make sure
empty elements use self-closing syntax.

**Extension:** add a JSX comment above the card heading.

## Exercise 3 — Render values and conditions

Create a typed `CourseStatus` component with `isPublished: boolean`. Render a
different message and CSS class for published and draft courses.

```tsx
interface CourseStatusProps {
  isPublished: boolean;
}
```

**Check your work**

- The component handles both boolean values.
- The status text is rendered with a conditional expression.
- No boolean is displayed directly as text.

## Exercise 4 — Render a typed list

Create a `SkillList` component that accepts `skills: string[]`. Render every
skill as an `<li>` and use a stable key.

**Extension:** replace the strings with objects containing `id` and `name`,
then use `id` as the key.

## Exercise 5 — Type component attributes

Create a `CourseBadge` component with `title: string` and
`level: 'Beginner' | 'Intermediate' | 'Advanced'`. Render the props, then
temporarily pass an unsupported level and observe the TypeScript diagnostic.
Restore a valid value afterward.

## Exercise 6 — Compose content with children

Create a `Section` component with a `title` and required `children`. Type
children with `ReactNode` from React:

```tsx
import type { ReactNode } from 'react';

interface SectionProps {
  title: string;
  children: ReactNode;
}
```

Use it with a paragraph, then use it with a list. The same layout component
should support both.

## Mini project: Course Landing Section with JSX

Build a responsive course landing section using typed data and reusable
components. Keep all sample course and instructor data fictional.

### Suggested structure

```text
src/
├── components/
│   ├── CourseHero.tsx
│   ├── CourseStats.tsx
│   ├── CourseStatus.tsx
│   └── Section.tsx
├── types/
│   └── course.ts
├── App.tsx
└── index.css
```

### Requirements

1. Define and export a `Course` interface with `title`, `description`,
   `instructor`, `level`, `students`, `lessons`, `durationHours`, `skills`,
   and `isPublished`.
2. Define `level` as the union
   `'Beginner' | 'Intermediate' | 'Advanced'`.
3. Create a typed `CourseHero` that renders the course level, title,
   description, and instructor.
4. Create `CourseStats` to render student count, lesson count, and duration.
5. Create `CourseStatus` to render a published or draft message using
   conditional JSX.
6. Create `Section` with a `title` and `children: ReactNode`.
7. Render the course skills from an array and provide each item a stable key.
8. Compose the pieces in `App.tsx` using one typed fictional course object.
9. Add simple, readable styling without installing a dependency for basic
   layout.
10. Ensure the enroll button is disabled while the course is not published.

### Completion checklist

- [ ] The project compiles without type errors.
- [ ] Course data matches the shared `Course` type.
- [ ] Components receive data through typed props.
- [ ] Children render inside the reusable `Section`.
- [ ] Skills render from an array with stable keys.
- [ ] Published and draft states both render correctly.
- [ ] `npm run build` completes successfully.
- [ ] JSX is readable and complex calculations are outside the markup.

### Reflection

1. Which values are component props, and which are nested children?
2. Which type prevents unsupported course levels?
3. Why does each mapped skill need a key?
4. What would change if course data came from an API?
5. Which parts of the section have a clear reason to be separate components?
