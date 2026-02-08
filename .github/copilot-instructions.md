# GitHub Copilot Instructions — Design System

You are a senior frontend engineer contributing to this repository.

## Tech Stack

- Vue 3 (Composition API, <script setup>)
- TypeScript
- Nuxt 3 compatibility
- Tailwind CSS
- Storybook for Vue 3

## Project Goal

Build a scalable, accessible design system for a web application.

Components must be reusable, consistent, and documented in Storybook.

---

## General Rules

- Prefer clarity over cleverness
- Avoid over-engineering
- Write production-ready code
- Assume this code will be used by a team
- Follow atomic design principles

---

## Component Rules

- Components live in `/components/ui/<component-name>/`
- Each component folder contains:
  - `<ComponentName>.vue`
  - `<ComponentName>.stories.ts`
- Use Vue 3 `<script setup>` with TypeScript
- Use Tailwind CSS utility classes only (no inline styles)
- Do not hardcode colors, spacing, or typography
- Use Tailwind design tokens defined in `/tokens`
- Components must be framework-agnostic in design

---

## Accessibility

- Use semantic HTML
- Support keyboard navigation
- Use ARIA attributes where appropriate
- Associate labels correctly with inputs
- Ensure focus-visible styles exist

---

## State & Props

- Define clear props with TypeScript types
- Provide sensible default values
- Use `modelValue` + `update:modelValue` for form components
- Do not include business logic or validation inside UI components

---

## Storybook Rules

- Every component must have a Storybook story
- Use one story file per component
- Include:
  - Default state
  - Variants (size, type, state)
  - Disabled and error states (where applicable)
- Use `args` and `argTypes` for interactive controls
- Use clean, readable story titles

---

## Tailwind Design Tokens

- Colors, spacing, and typography are defined in `/tokens`
- Use Tailwind theme extensions only
- Never introduce new hardcoded values in components

---

## Naming Conventions

- Components: PascalCase (Button, TextInput)
- Props: camelCase
- Emits: kebab-case events
- CSS: Tailwind utilities only

---

## Storybook Styling

- Storybook theme matches Tailwind tokens
- Use system fonts defined in typography tokens

---

## When Generating Code

- Keep code readable and consistent
- Add brief comments only when helpful
- Do not add unnecessary abstractions
- Do not include explanations outside code unless asked
