# Design System — Vue.js

A reusable, framework-agnostic Vue 3 component library built with TypeScript, Tailwind CSS v4, and Storybook.

> **Live Demo:** [https://engr-lukman.github.io/design-system-vuejs](https://engr-lukman.github.io/design-system-vuejs)

## Tech Stack

- **Vue 3** — Composition API with `<script setup>`
- **TypeScript** — Strict type-checked components
- **Tailwind CSS v4** — Utility-first styling using default theme
- **Storybook** — Interactive component documentation
- **Vite** — Build tooling with library mode output
- **pnpm** — Package manager

## Components

### Form

| Component         | Description                                                                |
| ----------------- | -------------------------------------------------------------------------- |
| **Button**        | Primary, secondary, outline, ghost, and danger variants with loading state |
| **TextInput**     | Text input with label, hint, error, and size variants                      |
| **Textarea**      | Multi-line input with character count and resize control                   |
| **Select**        | Dropdown select with placeholder, error, and hint                          |
| **RadioGroup**    | Radio button group with vertical/horizontal layout                         |
| **Checkbox**      | Checkbox with label, error, and indeterminate state                        |
| **Toggle**        | Switch toggle with size variants                                           |
| **MultiStepForm** | Step wizard with linear/non-linear navigation                              |

### Feedback

| Component   | Description                                            |
| ----------- | ------------------------------------------------------ |
| **Alert**   | Info, success, warning, and danger alerts with dismiss |
| **Modal**   | Dialog with overlay, sizes, and keyboard/close control |
| **Spinner** | Loading spinner with overlay mode                      |
| **Tooltip** | Positioned tooltip with delay and arrow                |

### Data Display

| Component  | Description                                             |
| ---------- | ------------------------------------------------------- |
| **Avatar** | Image, initials, or placeholder with status indicator   |
| **Badge**  | Labeled badge with dot, removable, and rounded variants |
| **Card**   | Container with header, body, and footer slots           |

### Navigation

| Component      | Description                                  |
| -------------- | -------------------------------------------- |
| **Breadcrumb** | Navigation breadcrumb with separator options |
| **Dropdown**   | Action menu with keyboard support            |
| **Pagination** | Page navigation with ellipsis and info text  |
| **Tabs**       | Underline and pills tab variants             |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) >= 20
- [pnpm](https://pnpm.io/) >= 9

### Installation

```bash
pnpm install
```

### Development

Start the Vite dev server:

```bash
pnpm dev
```

### Storybook

Browse all components interactively:

```bash
pnpm storybook
```

Build a static Storybook site:

```bash
pnpm build-storybook
```

### Production Build

Outputs ES module, CommonJS, and CSS to `dist/`:

```bash
pnpm build
```

### Lint & Format

```bash
pnpm lint
pnpm format
```

## Project Structure

```
├── .github/
│   ├── copilot-instructions.md
│   └── workflows/
│       └── deploy-storybook.yml
├── .storybook/
│   ├── main.ts
│   └── preview.ts
├── components/
│   ├── index.ts                  # Barrel exports
│   └── ui/
│       ├── alert/
│       ├── avatar/
│       ├── badge/
│       ├── breadcrumb/
│       ├── button/
│       ├── card/
│       ├── checkbox/
│       ├── dropdown/
│       ├── modal/
│       ├── multi-step-form/
│       ├── pagination/
│       ├── radio-group/
│       ├── select/
│       ├── spinner/
│       ├── tabs/
│       ├── text-input/
│       ├── textarea/
│       ├── toggle/
│       └── tooltip/
├── dev/                          # Vite dev app entry
├── styles/
│   └── main.css                  # Tailwind CSS import
├── eslint.config.js
├── tsconfig.json
├── vite.config.ts
└── package.json
```

## Usage (as a library)

```ts
import { Button, TextInput, Modal } from 'design-system-vuejs'
import 'design-system-vuejs/styles'
```

## Deployment

Storybook is automatically deployed to GitHub Pages when the `version` field in `package.json` is updated on the `main` branch. See [deploy-storybook.yml](.github/workflows/deploy-storybook.yml) for the workflow.

## License

MIT

## Author

**Mohammad Lukman Hussain**
[engr-lukman.github.io](https://engr-lukman.github.io/)
