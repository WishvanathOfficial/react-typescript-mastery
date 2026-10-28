# Chapter 4 — Props and State with TypeScript

Props define what a component receives. State defines the changing data a
component manages. This chapter explains how to type both, update state
immutably, and decide where changing data should live.

## Learning objectives

By the end of this chapter, you should be able to:

- define required, optional, object, union, and callback props;
- provide default values for optional props;
- type local state with `useState`, including nullable values;
- update object and array state without mutating existing values;
- use functional state updates when a new value depends on the previous one;
- distinguish props from state and lift shared state to a common parent;
- avoid duplicated or unnecessary state.

## Lessons

1. [Props with TypeScript](./notes.md#1-props-with-typescript)
2. [Optional Props and Default Values](./notes.md#2-optional-props-and-default-values)
3. [State with `useState`](./notes.md#3-state-with-usestate)
4. [Object and Array State](./notes.md#4-object-and-array-state)
5. [Props vs State](./notes.md#5-props-vs-state)
6. [Mini Project: Shopping Cart Item Manager](./exercises.md#mini-project-shopping-cart-item-manager)

## Chapter materials

- [Chapter notes and examples](./notes.md)
- [Coding exercises and Shopping Cart Item Manager project](./exercises.md)
- [Scenario-based interview questions and answers](./interview-questions.md)

## Suggested study flow

Read the notes and type the examples in a React + TypeScript project. Practise
updating state from previous state and changing objects or arrays without
mutation. Build the mini project, then answer the scenarios without looking at
the answers.

## Prerequisites

Complete [Chapter 1](../chapter-01/README.md),
[Chapter 2](../chapter-02/README.md), and
[Chapter 3](../chapter-03/README.md), or have basic familiarity with React
components, JSX, TypeScript interfaces, and array methods such as `map` and
`filter`.
