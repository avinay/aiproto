"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Code, Palette, Layout } from "lucide-react"

interface RegistryItem {
  name: string
  type: string
  registryDependencies: string[]
  files: Array<{
    name: string
    path: string
    target: string
  }>
}

interface Registry {
  registry: RegistryItem[]
}

export default function RegistryPage() {
  const [registry, setRegistry] = useState<Registry | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/registry')
      .then(res => res.json())
      .then(data => {
        setRegistry(data)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error loading registry:', error)
        setLoading(false)
      })
  }, [])

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'registry:theme':
        return <Palette className="h-4 w-4" />
      case 'components:ui':
        return <Code className="h-4 w-4" />
      case 'blocks:page':
        return <Layout className="h-4 w-4" />
      default:
        return <Code className="h-4 w-4" />
    }
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'registry:theme':
        return 'Theme'
      case 'components:ui':
        return 'UI Component'
      case 'blocks:page':
        return 'Page Block'
      default:
        return type
    }
  }

  const openInV0 = (itemName: string) => {
    const baseUrl = window.location.origin
    const registryUrl = `${baseUrl}/api/registry/${itemName}`
    const v0Url = `https://v0.dev/chat/api/open?url=${encodeURIComponent(registryUrl)}`
    window.open(v0Url, '_blank')
  }

  if (loading) {
    return (
      <div className="container mx-auto py-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading registry...</p>
        </div>
      </div>
    )
  }

  if (!registry) {
    return (
      <div className="container mx-auto py-8">
        <div className="text-center">
          <p className="text-destructive">Failed to load registry</p>
        </div>
      </div>
    )
  }

  const themes = registry.registry.filter(item => item.type === 'registry:theme')
  const components = registry.registry.filter(item => item.type === 'components:ui')
  const blocks = registry.registry.filter(item => item.type === 'blocks:page')

  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">AI Proto Design System Registry</h1>
        <p className="text-muted-foreground">
          A custom design system registry for v0 and AI-powered development
        </p>
      </div>

      <Tabs defaultValue="all" className="space-y-6">
        <TabsList>
          <TabsTrigger value="all">All ({registry.registry.length})</TabsTrigger>
          <TabsTrigger value="themes">Themes ({themes.length})</TabsTrigger>
          <TabsTrigger value="components">Components ({components.length})</TabsTrigger>
          <TabsTrigger value="blocks">Blocks ({blocks.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {registry.registry.map((item) => (
              <Card key={item.name} className="group">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {getTypeIcon(item.type)}
                      <CardTitle className="text-lg">{item.name}</CardTitle>
                    </div>
                    <Badge variant="secondary">{getTypeLabel(item.type)}</Badge>
                  </div>
                  <CardDescription>
                    {item.files.length} file{item.files.length !== 1 ? 's' : ''}
                    {item.registryDependencies.length > 0 && (
                      <span className="block mt-1">
                        Dependencies: {item.registryDependencies.join(', ')}
                      </span>
                    )}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Button 
                      onClick={() => openInV0(item.name)}
                      className="w-full"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Open in v0
                    </Button>
                    <div className="text-xs text-muted-foreground">
                      Files: {item.files.map(f => f.name).join(', ')}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="themes" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {themes.map((item) => (
              <Card key={item.name} className="group">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {getTypeIcon(item.type)}
                      <CardTitle className="text-lg">{item.name}</CardTitle>
                    </div>
                    <Badge variant="secondary">{getTypeLabel(item.type)}</Badge>
                  </div>
                  <CardDescription>
                    {item.files.length} file{item.files.length !== 1 ? 's' : ''}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    onClick={() => openInV0(item.name)}
                    className="w-full"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Open in v0
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="components" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {components.map((item) => (
              <Card key={item.name} className="group">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {getTypeIcon(item.type)}
                      <CardTitle className="text-lg">{item.name}</CardTitle>
                    </div>
                    <Badge variant="secondary">{getTypeLabel(item.type)}</Badge>
                  </div>
                  <CardDescription>
                    {item.files.length} file{item.files.length !== 1 ? 's' : ''}
                    {item.registryDependencies.length > 0 && (
                      <span className="block mt-1">
                        Dependencies: {item.registryDependencies.join(', ')}
                      </span>
                    )}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    onClick={() => openInV0(item.name)}
                    className="w-full"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Open in v0
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="blocks" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {blocks.map((item) => (
              <Card key={item.name} className="group">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {getTypeIcon(item.type)}
                      <CardTitle className="text-lg">{item.name}</CardTitle>
                    </div>
                    <Badge variant="secondary">{getTypeLabel(item.type)}</Badge>
                  </div>
                  <CardDescription>
                    {item.files.length} file{item.files.length !== 1 ? 's' : ''}
                    {item.registryDependencies.length > 0 && (
                      <span className="block mt-1">
                        Dependencies: {item.registryDependencies.join(', ')}
                      </span>
                    )}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    onClick={() => openInV0(item.name)}
                    className="w-full"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Open in v0
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
