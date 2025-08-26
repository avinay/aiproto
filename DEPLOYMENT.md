# Deployment Guide for v0.app Integration

## 🚀 Quick Deployment to Vercel

Your registry is now ready to be deployed and integrated with v0.app!

### Step 1: Deploy to Vercel

1. **Go to [Vercel](https://vercel.com)**
2. **Sign in with GitHub**
3. **Click "New Project"**
4. **Import your repository**: `avinay/aiproto`
5. **Deploy** (Vercel will automatically detect it's a Next.js project)

### Step 2: Get Your Deployment URL

After deployment, Vercel will give you a URL like:
- `https://aiproto-avinay.vercel.app` (or similar)

### Step 3: Update Registry URL

Once deployed, update the `baseUrl` in `public/registry.json`:

```json
{
  "baseUrl": "https://your-actual-vercel-url.vercel.app",
  // ... rest of registry
}
```

Then commit and push:
```bash
git add public/registry.json
git commit -m "Update registry URL for production"
git push origin main
```

### Step 4: Add to v0.app

1. **Go to [v0.app](https://v0.app)**
2. **Sign in to your account**
3. **Go to Settings** (if available)
4. **Add your registry URL**: `https://your-vercel-url.vercel.app/api/registry`

## 🔗 Testing Your Registry

### Test the API Endpoints

1. **Main Registry**: `https://your-vercel-url.vercel.app/api/registry`
2. **Individual Items**: `https://your-vercel-url.vercel.app/api/registry/button`

### Test the Registry Viewer

Visit: `https://your-vercel-url.vercel.app/registry`

### Test the Dashboard

Visit: `https://your-vercel-url.vercel.app/dashboard`

## 🤖 MCP Integration for AI Editors

Update your MCP configuration with the production URL:

```json
{
  "mcpServers": {
    "shadcn": {
      "command": "npx",
      "args": ["-y", "shadcn@canary", "registry:mcp"],
      "env": {
        "REGISTRY_URL": "https://your-vercel-url.vercel.app/api/registry"
      }
    }
  }
}
```

## 📝 Using with v0.app

Once deployed and configured:

1. **Open v0.app**
2. **Start a new chat**
3. **Use your custom components** by referencing them in your prompts
4. **The AI will have access to your design system**

### Example Prompts

- "Create a dashboard using my custom sidebar component"
- "Build a form with my design system's input and button components"
- "Make a page with my custom card layout"

## 🔄 Continuous Deployment

Your registry will automatically update when you:
1. Make changes to your components
2. Push to the `main` branch
3. Vercel will redeploy automatically

## 🎯 Next Steps

1. **Deploy to Vercel** (see Step 1 above)
2. **Test all endpoints** work correctly
3. **Add your registry to v0.app**
4. **Start building with your custom design system!**

## 📞 Support

If you encounter any issues:
1. Check the Vercel deployment logs
2. Verify your API endpoints are working
3. Test the registry viewer locally first
4. Open an issue on the GitHub repository

---

**Your registry is ready to power AI-powered development! 🚀**
