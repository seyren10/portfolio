# Portfolio Project - AI Assistant Instructions

## Project Overview

**Portfolio** is a personal portfolio website built with:
- **Framework**: Astro 5.17 with React 19 integration
- **UI Framework**: shadcn/ui (Radix UI + Maia style) with TailwindCSS 4.1
- **Language**: TypeScript (strict Astro configuration)
- **Icons**: Hugeicons React library
- **Animations**: Motion library

## Quick Start Commands

```bash
npm run dev         # Start development server (http://localhost:3000)
npm run build       # Production build
npm run preview     # Preview production build
npm run lint        # Run ESLint checks
npm run format      # Format code with Prettier
npm run typecheck   # Run TypeScript checks
```

## Project Structure

```
src/
  components/
    ui/             # shadcn/ui components (auto-managed by shadcn CLI)
    *.tsx           # Feature components (ModeToggle, etc.)
  layouts/
    *.astro         # Astro layout templates
  pages/
    *.astro         # Astro page routes (file-based routing)
  lib/
    utils.ts        # Utility functions (includes `cn()` for class merging)
  styles/
    global.css      # Global styling (TailwindCSS directives)
```

## Code Conventions & Patterns

### Path Aliases
Use the `@/` alias (configured in tsconfig.json) for all imports:
```typescript
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
```

### Prettier Configuration
- **No semicolons** - Code ends without `;`
- **80 character print width** - Keep lines readable
- **TailwindCSS class sorting** - Automatic via plugin
- **Double quotes for JSX** - Single quotes only for string literals
- **Trailing commas (es5)** - In multiline structures

**Format code**: `npm run format`

### React Components
- Use **function components** with hooks (standard modern React)
- Import React: `import * as React from "react"`
- Export named functions: `export function MyComponent() { ... }`

Example:
```typescript
import * as React from "react"
import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const [state, setState] = React.useState<Type>("initial")
  
  React.useEffect(() => {
    // effect logic
  }, [])
  
  return <Button>Click me</Button>
}
```

### Astro Pages & Layouts
- Pages in `src/pages/` become routes (file-based routing)
- Use `src/layouts/main.astro` for wrapping page structure
- Import React components using `client:load` or other directives for interactivity

Example:
```astro
---
import { ModeToggle } from "@/components/ModeToggle"
---

<html lang="en">
  <body>
    <ModeToggle client:load />
  </body>
</html>
```

### Component Styling
1. **shadcn/ui components** - Use them with `variant` and `size` props
2. **Utility classes** - TailwindCSS for custom styling
3. **Class merging** - Use `cn()` utility to safely merge Tailwind classes:
   ```typescript
   <Button className={cn("custom-class", isDark && "dark:bg-slate-900")} />
   ```

### Icons
Use **Hugeicons React** library for icons:
```typescript
import { HugeiconsIcon } from "@hugeicons/react"
import { Sun01Icon, Moon02Icon } from "@hugeicons/core-free-icons"

<HugeiconsIcon icon={Sun01Icon} className="h-4 w-4" />
```

### TypeScript
- Strict mode enabled (Astro strict config)
- Use explicit type annotations for React state
- Path alias `@/*` maps to `./src/*`

## Adding/Managing Components

### Adding shadcn/ui Components
```bash
npx shadcn@latest add <component>
# Example: npx shadcn@latest add button
```
This installs components to `src/components/ui/` and manages dependencies.

### Creating Custom Components
1. Create component in `src/components/`
2. Use existing shadcn/ui components or build from primitives
3. Follow Prettier formatting
4. Export as named function

## Quality Assurance

### Linting
```bash
npm run lint        # Check for issues
npm run format      # Auto-fix formatting
npm run typecheck   # Verify TypeScript
```

### Common Issues
- **Class conflicts**: Use `cn()` utility to merge Tailwind classes safely
- **Type errors**: Enable TypeScript strict mode in your editor
- **State in Astro**: Mark interactive components with `client:load`

## Development Workflow

1. **Feature branch**: Create branches for new features
2. **Code locally**: Run `npm run dev` for live development
3. **Format & lint**: Run `npm run format && npm run lint`
4. **Type check**: Run `npm run typecheck` before committing
5. **Build**: Run `npm run build` to verify production build

## Dependencies Snapshot

**Key Production Dependencies**:
- `astro@5.17.1` - Meta-framework
- `react@19.2.4` - UI library
- `tailwindcss@4.1.18` - Styling utility
- `@astrojs/react@4.4.2` - Astro integration
- `radix-ui@1.4.3` + `shadcn` - Component framework
- `@hugeicons/react@1.1.6` - Icon library
- `motion@12.36.0` - Animation library

**Development Tools**: ESLint, TypeScript, Prettier with Astro/Tailwind plugins

## Common Tasks

### Modify theme/colors
Edit `src/styles/global.css` - uses CSS variables defined by shadcn/ui

### Add a new page
Create `.astro` file in `src/pages/` - Astro handles routing automatically

### Add dark mode toggle
Reference `src/components/ModeToggle.tsx` - handles theme state and DOM updates

### Update text/content
Edit `.astro` files in `src/pages/` or component JSX directly
