# Chapter 3 — Interview questions and answers

Practise answering these questions after completing the
[chapter notes](./notes.md) and [coding exercises](./exercises.md).

## Core questions

### 1. What is JSX?

JSX is a syntax extension commonly used with React to describe UI inside
JavaScript or TypeScript source code.

### 2. Is JSX HTML?

No. It looks similar to HTML but is part of the source code and is transformed
by build tooling into JavaScript.

### 3. Why do React developers use JSX?

JSX makes UI structure readable while allowing expressions and component
composition to live close to the interface they describe.

### 4. How does JSX become usable by the browser?

The project's compiler and build tooling transform JSX into JavaScript that
React can use. The browser does not directly run raw JSX.

### 5. How do you embed a value in JSX?

Wrap a JavaScript or TypeScript expression in curly braces, such as
`<p>{userName}</p>`.

### 6. Can JSX braces contain statements?

No. Braces contain expressions. Move statements such as `if` outside the JSX
or express the condition with a ternary or logical expression.

### 7. Why must a component return one root element?

The returned markup must form one React element tree. Use a parent element or
a Fragment to group siblings.

### 8. What does a Fragment do?

A Fragment groups multiple elements without adding an extra DOM node.

### 9. What is the JSX syntax for an empty element?

Use a self-closing tag, such as `<img src="/cover.jpg" alt="Cover" />`.

### 10. Why is `className` used instead of `class`?

JSX uses the `className` property to set an element's CSS class.

### 11. Why is `htmlFor` used on labels?

`htmlFor` is the JSX property that associates a label with a form control ID.

### 12. How are comments written inside JSX?

Use JavaScript comment syntax inside braces: `{/* comment */}`.

### 13. How does React distinguish a component from an HTML element?

Component names conventionally begin with an uppercase letter, while
intrinsic HTML element names are lowercase.

### 14. How do you render a list?

Map the data to JSX elements and assign each element a stable `key`.

### 15. What is the purpose of a `key`?

A key helps React identify an item across renders when a list changes. A
stable ID is preferable to an array index when items can move or change.

### 16. Can an object be rendered directly?

Generally no. Select the object's properties needed for the UI or map its data
to renderable elements.

### 17. How do you render one of two UI states?

Use a conditional expression such as
`isPublished ? <Published /> : <Draft />`.

### 18. What should you watch for when using `&&` for conditional rendering?

If the left side is a number such as `0`, React can render that number. Use a
boolean comparison such as `count > 0 && <Notice />`.

### 19. How should a boolean attribute be set dynamically?

Pass a boolean expression, such as `disabled={isDisabled}`. A string like
`"false"` is not equivalent to the boolean `false`.

### 20. How do you handle a button click in JSX?

Pass a function reference: `onClick={handleClick}`. Do not invoke the handler
during rendering unless the returned value is intentionally the handler.

### 21. How can an input change event be typed?

Use React's event types, for example
`ChangeEvent<HTMLInputElement>`, when an explicit annotation is useful.

### 22. What are component props?

Props are values passed to a component through JSX attributes.

### 23. How does TypeScript check props?

The component's props type declares required names and value types. TypeScript
checks call sites and reports missing or incompatible values.

### 24. Why use a union type for course level?

A union such as `'Beginner' | 'Intermediate' | 'Advanced'` permits only the
listed values and catches unsupported values during development.

### 25. What is `children`?

`children` is the prop containing content nested between a component's opening
and closing tags.

### 26. What is `ReactNode`?

`ReactNode` is a broad type for renderable React content, including elements,
strings, numbers, fragments, arrays, and empty values.

### 27. When would you use an element type instead of `ReactNode`?

Use an element type when a prop must specifically be a React element. Use
`ReactNode` when any generally renderable content is acceptable.

### 28. How can children be optional?

Declare the prop as `children?: ReactNode`.

### 29. What is component composition?

Composition builds larger interfaces from smaller components, supplying
values through props and nested content through children.

### 30. Why should complex logic be moved out of JSX?

Named values and helpers make the UI easier to read, test, and maintain.

### 31. Is JSX mandatory when using React?

No. React elements can be created without JSX, but JSX is widely used for its
readable UI syntax.

### 32. What can TypeScript check in JSX?

It can check component props and many intrinsic element attributes, as well
as types used by the surrounding JavaScript or TypeScript expressions. It
does not validate arbitrary runtime data by itself.

## Scenario prompts

1. A list renders but React warns that children need keys. What should you
   inspect and what makes a good key?
2. A component needs to accept either text or several nested elements. Which
   children type would you choose and why?
3. A conditional `{count && <Notice />}` displays `0`. How would you fix it?
4. TypeScript accepts a declared type, but an API returns malformed data. Why
   is an additional runtime check needed?
5. A component has a large inline conditional and calculation. How could you
   make the returned JSX easier to read?
