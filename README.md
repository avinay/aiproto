# AI Proto - Custom Design System Registry

A custom design system registry for v0 and AI-powered development, built with Next.js and shadcn/ui.

![AI Proto Registry](https://img.shields.io/badge/Registry-v0.dev%20Ready-blue)
![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.0-38B2AC)

## 🚀 Features

- **Custom Design System**: Sidebar-specific color tokens and modern design system
- **v0 Integration**: Open any component or block directly in v0.dev for AI-powered editing
- **Registry API**: RESTful API endpoints for serving registry items
- **Component Library**: Reusable UI components built with shadcn/ui
- **Page Blocks**: Complete page layouts and application blocks

## 🎨 Design System

This registry includes a custom design system with:

- **Sidebar Colors**: Custom color tokens for sidebar components
- **Modern UI**: Built with shadcn/ui and Tailwind CSS
- **Dark Mode**: Full dark mode support
- **Responsive**: Mobile-first responsive design

### Sidebar Color Tokens

```css
--sidebar: Background color
--sidebar-foreground: Text color
--sidebar-primary: Primary accent color
--sidebar-primary-foreground: Primary text color
--sidebar-accent: Secondary accent color
--sidebar-accent-foreground: Secondary text color
--sidebar-border: Border color
--sidebar-ring: Focus ring color
```

## 📦 Registry Contents

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

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/aiproto.git
cd aiproto

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:3000`

### Registry Viewer

Visit `/registry` to browse all available components, themes, and blocks.

### Dashboard Demo

Visit `/dashboard` to see the dashboard block in action.

## 🔗 v0 Integration

Each registry item includes an "Open in v0" button that:
1. Constructs a URL to the registry item's API endpoint
2. Opens v0.dev with the registry item pre-loaded
3. Allows AI-powered editing with your design system context

### Using with v0.app

1. Deploy this repository to Vercel or similar platform
2. Update the registry URL in v0.app settings
3. Start building with your custom design system!

## 📡 API Endpoints

### Main Registry
- `GET /api/registry` - Returns the complete registry

### Individual Items
- `GET /api/registry/[name]` - Returns a specific registry item with file contents

## 🤖 MCP Integration

For AI code editors like Cursor, add this to your MCP configuration:

```json
{
  "mcpServers": {
    "shadcn": {
      "command": "npx",
      "args": ["-y", "shadcn@canary", "registry:mcp"],
      "env": {
        "REGISTRY_URL": "https://your-deployed-url.vercel.app/api/registry"
      }
    }
  }
}
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Manual Deployment

```bash
# Build the project
npm run build

# Start the production server
npm start
```

## 📝 Adding New Components

1. Create the component in `components/ui/`
2. Add it to `public/registry.json`
3. Update the registry viewer if needed

## 📝 Adding New Blocks

1. Create the block in `components/blocks/`
2. Add it to `public/registry.json`
3. Create a page to showcase it

## 🎨 Customization

### Colors
Modify `app/globals.css` to customize the design system colors.

### Fonts
Update `app/layout.tsx` to use custom fonts with `next/font/google`.

### Components
Customize shadcn/ui components in `components/ui/` to match your brand.

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.

---

Built with ❤️ for the AI-powered development community
