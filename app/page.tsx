import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Palette, 
  Code, 
  Layout, 
  ExternalLink, 
  ArrowRight,
  Sparkles
} from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold">AI Proto</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A custom design system registry for v0 and AI-powered development
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Palette className="h-5 w-5 text-primary" />
                <CardTitle>Design System</CardTitle>
              </div>
              <CardDescription>
                Custom theme with sidebar colors and modern design tokens
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/registry">
                <Button className="w-full">
                  View Registry
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Code className="h-5 w-5 text-primary" />
                <CardTitle>UI Components</CardTitle>
              </div>
              <CardDescription>
                Reusable components built with shadcn/ui and custom styling
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/registry">
                <Button variant="outline" className="w-full">
                  Browse Components
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Layout className="h-5 w-5 text-primary" />
                <CardTitle>Page Blocks</CardTitle>
              </div>
              <CardDescription>
                Complete page layouts and application blocks
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Link href="/dashboard">
                  <Button variant="outline" className="w-full">
                    View Dashboard
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/sidebar">
                  <Button variant="outline" className="w-full">
                    Enhanced Sidebar
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/admission">
                  <Button variant="outline" className="w-full">
                    Student Admission
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/salesforce-demo">
                  <Button variant="outline" className="w-full">
                    Salesforce Demo
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Features</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>v0 Integration</CardTitle>
                  <CardDescription>
                    Open any component or block directly in v0.dev for AI-powered editing
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <ExternalLink className="h-4 w-4" />
                    Click &quot;Open in v0&quot; buttons in the registry
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Custom Theme</CardTitle>
                  <CardDescription>
                    Sidebar-specific color tokens and modern design system
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <div className="w-4 h-4 rounded bg-sidebar-primary"></div>
                    <div className="w-4 h-4 rounded bg-sidebar-accent"></div>
                    <div className="w-4 h-4 rounded bg-sidebar-border"></div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Quick Start</h2>
            <Tabs defaultValue="registry" className="space-y-4">
              <TabsList>
                <TabsTrigger value="registry">Registry</TabsTrigger>
                <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
                <TabsTrigger value="v0">v0 Integration</TabsTrigger>
              </TabsList>
              
              <TabsContent value="registry" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Explore the Registry</CardTitle>
                    <CardDescription>
                      Browse all available components, themes, and blocks
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link href="/registry">
                      <Button>
                        Go to Registry
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="dashboard" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>View Dashboard</CardTitle>
                    <CardDescription>
                      See the dashboard block in action with all components
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link href="/dashboard">
                      <Button>
                        View Dashboard
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="v0" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Use with v0</CardTitle>
                    <CardDescription>
                      Open any registry item in v0.dev for AI-powered development
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">
                        1. Go to the registry page
                      </p>
                      <p className="text-sm text-muted-foreground">
                        2. Click &quot;Open in v0&quot; on any component
                      </p>
                      <p className="text-sm text-muted-foreground">
                        3. Start building with AI assistance
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
