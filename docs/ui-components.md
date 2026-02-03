# UI Components - shadcn/ui Standards

## Core Principle

**ALWAYS use shadcn/ui components. DO NOT create custom UI components.**

## Component Usage

### Installation
When a shadcn/ui component is needed but not yet installed:
```bash
npx shadcn@latest add [component-name]
```

### Available Components
All components from [shadcn/ui](https://ui.shadcn.com/) are available:
- **Forms**: Button, Input, Label, Textarea, Select, Checkbox, Radio, Switch
- **Layout**: Card, Separator, Tabs, Dialog, Sheet, Popover
- **Feedback**: Alert, Toast, Progress, Skeleton
- **Data**: Table, Badge, Avatar
- **Navigation**: Dropdown Menu, Navigation Menu, Command
- And many more...

## Implementation Rules

### ✅ DO
- Import shadcn/ui components from `@/components/ui/[component]`
- Use component variants and props for customization
- Compose shadcn components together for complex UIs
- Style using Tailwind utility classes within shadcn components

### ❌ DON'T
- Create custom button, input, or form components
- Build UI primitives from scratch
- Use raw HTML elements for interactive UI (use shadcn wrappers)
- Copy shadcn code and modify it - use the official components

## Example Pattern

```tsx
// ✅ Correct
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function MyForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Form Title</CardTitle>
      </CardHeader>
      <CardContent>
        <Input placeholder="Enter text" />
        <Button>Submit</Button>
      </CardContent>
    </Card>
  )
}

// ❌ Wrong - Don't create custom components
export function CustomButton({ children }) {
  return <button className="px-4 py-2 bg-blue-500">{children}</button>
}
```

## Styling Conventions

All buttons must be **black with white text** (project standard):
```tsx
<Button className="bg-black text-white hover:bg-gray-800">
  Click Me
</Button>
```

## Form Handling

Use shadcn's form components with React Hook Form:
```tsx
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
```

## Reference
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [Component Examples](https://ui.shadcn.com/examples)
