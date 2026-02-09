# Design System — Vue.js

A reusable, framework-agnostic Vue 3 component library styled after [shadcn/ui](https://ui.shadcn.com/), built with TypeScript, Tailwind CSS v4, and Storybook.

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

| Component       | Description                                                                      |
| --------------- | -------------------------------------------------------------------------------- |
| **Button**      | Primary, secondary, outline, ghost, danger, and link variants with loading state |
| **Checkbox**    | Checkbox with label, error, and indeterminate state                              |
| **Combobox**    | Searchable select with filtering, keyboard navigation, and clear                 |
| **DatePicker**  | Native date, date-range, month, week, time, and datetime picker                  |
| **InputOtp**    | One-time password input with auto-focus, paste, and masking                      |
| **Label**       | Styled label with required indicator and size variants                           |
| **RadioGroup**  | Radio button group with vertical/horizontal layout                               |
| **Select**      | Dropdown select with placeholder, error, and hint                                |
| **Slider**      | Range slider with progress fill, value display, and sizes                        |
| **TextInput**   | Text input with label, hint, error, and size variants                            |
| **Textarea**    | Multi-line input with character count and resize control                         |
| **Toggle**      | Switch toggle with size variants                                                 |
| **ToggleGroup** | Multi-select toggle group with outline and solid variants                        |

### Feedback

| Component       | Description                                            |
| --------------- | ------------------------------------------------------ |
| **Alert**       | Info, success, warning, and danger alerts with dismiss |
| **AlertDialog** | Confirmation dialog with default and danger variants   |
| **Modal**       | Dialog with overlay, sizes, and keyboard/close control |
| **Sonner**      | Toast notifications with composable API (useSonner)    |
| **Spinner**     | Loading spinner with sizes, variants, and overlay mode |
| **Tooltip**     | Positioned tooltip with delay and arrow                |

### Data Display

| Component      | Description                                                      |
| -------------- | ---------------------------------------------------------------- |
| **Avatar**     | Image, initials, or placeholder with status indicator            |
| **Badge**      | Labeled badge with dot, removable, and outline variants          |
| **Calendar**   | Standalone calendar with date selection and min/max              |
| **Card**       | Container with header, body, and footer slots                    |
| **Carousel**   | Slide carousel with autoplay, arrows, and dots                   |
| **Chart**      | SVG-based bar, line, and donut chart                             |
| **DataTable**  | Sortable, searchable, paginated data table with page size select |
| **Skeleton**   | Loading placeholder with text, circular, and rectangular         |
| **Table**      | Simple data table with striped, hoverable, and custom cells      |
| **Typography** | Semantic text styles (h1–h4, lead, code, blockquote)             |

### Navigation

| Component          | Description                                   |
| ------------------ | --------------------------------------------- |
| **Breadcrumb**     | Navigation breadcrumb with separator options  |
| **Command**        | Command palette with search and keyboard (⌘K) |
| **Dropdown**       | Action menu with keyboard support             |
| **Menubar**        | Horizontal menu bar with dropdown submenus    |
| **NavigationMenu** | Navigation with mega-menu dropdowns           |
| **Pagination**     | Page navigation with ellipsis and info text   |
| **Sidebar**        | Collapsible sidebar with sections and badges  |
| **Tabs**           | Underline and pills tab variants              |

### Layout

| Component       | Description                                      |
| --------------- | ------------------------------------------------ |
| **AspectRatio** | Maintains a fixed width-to-height ratio          |
| **Resizable**   | Draggable resizable panels (horizontal/vertical) |
| **ScrollArea**  | Custom styled scrollbar container                |
| **Separator**   | Horizontal/vertical divider with optional label  |

### Overlay

| Component       | Description                                       |
| --------------- | ------------------------------------------------- |
| **Accordion**   | Expandable sections with single/multiple mode     |
| **Collapsible** | Toggle content visibility with slot-based trigger |
| **ContextMenu** | Right-click context menu with shortcuts           |
| **Drawer**      | Slide-out panel from any side with sizes          |
| **HoverCard**   | Floating card triggered on hover                  |
| **Popover**     | Click-triggered floating content panel            |
| **Sheet**       | Side/bottom sheet with title and description      |

### Other

| Component    | Description                                          |
| ------------ | ---------------------------------------------------- |
| **Progress** | Progress bar with variants, sizes, and indeterminate |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) >= 20
- [pnpm](https://pnpm.io/) >= 9

### Installation

```bash
pnpm install
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
├── src/
│   ├── components/
│   │   ├── index.ts              # Barrel exports
│   │   └── ui/
│   │       ├── accordion/
│   │       ├── alert/
│   │       ├── alert-dialog/
│   │       ├── aspect-ratio/
│   │       ├── avatar/
│   │       ├── badge/
│   │       ├── breadcrumb/
│   │       ├── button/
│   │       ├── calendar/
│   │       ├── card/
│   │       ├── carousel/
│   │       ├── chart/
│   │       ├── checkbox/
│   │       ├── collapsible/
│   │       ├── combobox/
│   │       ├── command/
│   │       ├── context-menu/
│   │       ├── data-table/
│   │       ├── date-picker/
│   │       ├── drawer/
│   │       ├── dropdown/
│   │       ├── hover-card/
│   │       ├── input-otp/
│   │       ├── label/
│   │       ├── menubar/
│   │       ├── modal/
│   │       ├── multi-step-form/
│   │       ├── navigation-menu/
│   │       ├── pagination/
│   │       ├── popover/
│   │       ├── progress/
│   │       ├── radio-group/
│   │       ├── resizable/
│   │       ├── scroll-area/
│   │       ├── select/
│   │       ├── separator/
│   │       ├── sheet/
│   │       ├── sidebar/
│   │       ├── skeleton/
│   │       ├── slider/
│   │       ├── sonner/
│   │       ├── spinner/
│   │       ├── table/
│   │       ├── tabs/
│   │       ├── text-input/
│   │       ├── textarea/
│   │       ├── toggle/
│   │       ├── toggle-group/
│   │       ├── tooltip/
│   │       └── typography/
│   ├── styles/
│   │   └── main.css              # Tailwind CSS import
│   └── env.d.ts
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
