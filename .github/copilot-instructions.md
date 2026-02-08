# GitHub Copilot Instructions — Vue Design System

You are contributing to a reusable Vue 3 design system.

The design system is implemented using Vue 3 Composition API but must remain
framework-agnostic and usable in any Vue-based application
(e.g. Vite, Nuxt, Quasar, Vue CLI, etc).

---

## Package Manager

- This project uses **pnpm** only
- Never suggest npm or yarn commands
- Always use pnpm for install, dev, build, and storybook commands

---

## Core Technology

- Vue 3
- Composition API
- <script setup>
- TypeScript
- Tailwind CSS v4
- Storybook for Vue 3

---

## Design System Principles

- Components must be **framework-agnostic**
- Do NOT use framework-specific features (Nuxt, Quasar, Vuetify, etc)
- No reliance on runtime plugins, auto-imports, or global injections
- Components should work in any Vue 3 environment

---

## Component Architecture

- Components live in `/components/ui/<component-name>/`
- Each component folder contains:
  - `<ComponentName>.vue`
  - `<ComponentName>.stories.ts`
- Use Atomic Design concepts where appropriate
- Components must be reusable and composable

---

## Component Implementation Rules

- Use `<script setup lang="ts">`
- Use Vue Composition API only
- No Options API
- No external UI libraries
- Use Tailwind CSS v4 utility classes only
- Do not hardcode colors, spacing, or typography
- Design tokens are defined via `@theme` in `/styles/main.css`
- Avoid global CSS dependencies

---

## Tailwind CSS v4

- This project uses **Tailwind CSS v4** (not v3)
- There is **no `tailwind.config.js`** — all configuration lives in CSS
- The Vite plugin `@tailwindcss/vite` is used instead of PostCSS
- There is **no `postcss.config.js`**
- Design tokens are registered via `@theme` blocks in `/styles/main.css`
- Use `@import "tailwindcss"` instead of `@tailwind` directives
- Custom colors, spacing, and typography are defined as CSS theme variables

---

## Props & Events

- Define explicit, typed props
- Provide sensible defaults
- Use `modelValue` and `update:modelValue` for v-model compatibility
- Emit only UI-related events
- Do not include business logic or validation

---

## Accessibility

- Use semantic HTML
- Ensure keyboard navigation works
- Use ARIA attributes when required
- Ensure focus-visible styles are present
- Associate labels correctly with form controls

---

## Storybook

- Every component must have a Storybook story
- Use one story file per component
- Stories must demonstrate:
  - Default state
  - Variants
  - Disabled and error states (if applicable)
- Use args and argTypes for controls
- Keep stories minimal and readable

---

## Design Tokens

- All design tokens are defined in `/styles/main.css` via `@theme`
- Tokens include:
  - colors
  - spacing
  - typography (font families, sizes, weights)
- Components must reference tokens through Tailwind utilities only
- Token JS definitions in `/tokens` are kept for reference and type safety

---

## Naming Conventions

- Components: PascalCase
- Props: camelCase
- Emits: kebab-case
- Folders: kebab-case

---

## Code Quality

- Prefer clarity over cleverness
- Avoid premature abstraction
- Keep files focused and readable
- Add comments only when necessary

---

## Commands

When suggesting commands, always use pnpm:

- `pnpm install`
- `pnpm dev`
- `pnpm build`
- `pnpm storybook`

Never suggest npm or yarn commands.
