# AI Proto Design System Registry

A custom design system registry for v0 and AI-powered development, built with Next.js and shadcn/ui.

## Features

- **Custom Design System**: Sidebar-specific color tokens and modern design system
- **v0 Integration**: Open any component or block directly in v0.dev for AI-powered editing
- **Registry API**: RESTful API endpoints for serving registry items
- **Component Library**: Reusable UI components built with shadcn/ui
- **Page Blocks**: Complete page layouts and application blocks

## Getting Started

### 1. Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:3000`

### 2. Registry Viewer

Visit `/registry` to browse all available components, themes, and blocks.

### 3. Dashboard Demo

Visit `/dashboard` to see the dashboard block in action.

## Registry Structure

The registry is defined in `public/registry.json` and includes:

### Themes (`registry:theme`)
- **theme**: Global CSS variables and Tailwind configuration

### UI Components (`components:ui`)
- **button**: Button component with variants
- **card**: Card component with header, content, and footer
- **input**: Input component
- **tabs**: Tabs component with content
- **sidebar**: Custom sidebar component with sidebar-specific colors
- **badge**: Badge component for labels

### Page Blocks (`blocks:page`)
- **dashboard**: Complete dashboard layout with sidebar, header, and content

## API Endpoints

### Main Registry
- `GET /api/registry` - Returns the complete registry

### Individual Items
- `GET /api/registry/[name]` - Returns a specific registry item with file contents

## v0 Integration

Each registry item includes an "Open in v0" button that:
1. Constructs a URL to the registry item's API endpoint
2. Opens v0.dev with the registry item pre-loaded
3. Allows AI-powered editing with your design system context

## Custom Design System

### Sidebar Colors
The design system includes custom sidebar color tokens:
- `--sidebar`: Background color
- `--sidebar-foreground`: Text color
- `--sidebar-primary`: Primary accent color
- `--sidebar-primary-foreground`: Primary text color
- `--sidebar-accent`: Secondary accent color
- `--sidebar-accent-foreground`: Secondary text color
- `--sidebar-border`: Border color
- `--sidebar-ring`: Focus ring color

### Usage
```css
.sidebar {
  background-color: var(--sidebar);
  color: var(--sidebar-foreground);
}
```

## MCP Integration

For AI code editors like Cursor, add this to your MCP configuration:

```json
{
  "mcpServers": {
    "shadcn": {
      "command": "npx",
      "args": ["-y", "shadcn@canary", "registry:mcp"],
      "env": {
        "REGISTRY_URL": "http://localhost:3000/api/registry"
      }
    }
  }
}
```

## Adding New Components

1. Create the component in `components/ui/`
2. Add it to `public/registry.json`
3. Update the registry viewer if needed

## Adding New Blocks

1. Create the block in `components/blocks/`
2. Add it to `public/registry.json`
3. Create a page to showcase it

## Deployment

When deploying to production:

1. Update the `REGISTRY_URL` in MCP configuration
2. Ensure all registry files are accessible
3. Consider adding authentication if needed

## Customization

### Colors
Modify `app/globals.css` to customize the design system colors.

### Fonts
Update `app/layout.tsx` to use custom fonts with `next/font/google`.

### Components
Customize shadcn/ui components in `components/ui/` to match your brand.

## License

This project is open source and available under the MIT License.
