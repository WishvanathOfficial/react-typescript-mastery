# Chapter 5 — Functional Components and Component Design

Good component design is not about creating more components. It is about
giving every component a clear responsibility. This chapter covers functional
components, predictable rendering, composition, component boundaries, and
designing an Employee Directory.

## Learning objectives

By the end of this chapter, you should be able to:

- write functional components with typed props;
- identify a component's primary responsibility;
- keep rendering predictable and handle side effects separately;
- compose interfaces from focused components and children;
- distinguish smart and presentational components as a design pattern;
- recognize prop drilling, premature abstraction, and over-componentization;
- organize an Employee Directory into maintainable pieces.

## Lessons

1. [Functional Components](./notes.md#1-functional-components)
2. [Component Responsibility](./notes.md#2-component-responsibility)
3. [Pure Components](./notes.md#3-pure-components)
4. [Component Composition](./notes.md#4-component-composition)
5. [Smart and Presentational Components](./notes.md#5-smart-and-presentational-components)
6. [Mini Project: Employee Directory Component Design](./exercises.md#mini-project-employee-directory-component-design)
7. [Improving Component Design](./notes.md#7-improving-the-component-design)
8. [Common Component Design Mistakes](./notes.md#8-common-component-design-mistakes)

## Chapter materials

- [Chapter notes and examples](./notes.md)
- [Coding exercises and Employee Directory project](./exercises.md)
- [Scenario-based interview questions and answers](./interview-questions.md)

## Suggested study flow

Read the notes and review the component trees. Build the directory in small
steps, keeping the feature state in its coordinator and passing typed props
and callbacks to focused UI components. Finish by reviewing the interview
scenarios.

## Prerequisites

Complete [Chapter 1](../chapter-01/README.md) through
[Chapter 4](../chapter-04/README.md), or have familiarity with React
components, JSX, TypeScript props, state, and Hooks.
