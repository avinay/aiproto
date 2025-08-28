"use client"

import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  Sidebar, 
  SidebarHeader, 
  SidebarSearch,
  SidebarContent, 
  SidebarSection,
  SidebarItem, 
  SidebarFooter,
  SidebarUser
} from "@/components/ui/sidebar"
import { 
  BarChart3, 
  Users, 
  Settings, 
  Home, 
  FileText, 
  Mail,
  Search,
  Plus,
  Zap,
  Bell,
  HelpCircle
} from "lucide-react"

export function Dashboard() {
  const [collapsed, setCollapsed] = React.useState(false)

  return (
    <div className="flex h-screen bg-background">
      <Sidebar collapsed={collapsed} onCollapsedChange={setCollapsed}>
        <SidebarHeader collapsed={collapsed}>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <Zap className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="text-lg font-semibold">AI Proto</span>
          </div>
        </SidebarHeader>

        <SidebarSearch collapsed={collapsed} placeholder="Search..." />

        <SidebarContent>
          <SidebarSection title="Main" collapsed={collapsed}>
            <SidebarItem 
              active 
              icon={<Home className="h-4 w-4" />}
              collapsed={collapsed}
            >
              Dashboard
            </SidebarItem>
            <SidebarItem 
              icon={<Users className="h-4 w-4" />}
              badge="12"
              collapsed={collapsed}
            >
              Users
            </SidebarItem>
            <SidebarItem 
              icon={<BarChart3 className="h-4 w-4" />}
              collapsed={collapsed}
            >
              Analytics
            </SidebarItem>
            <SidebarItem 
              icon={<FileText className="h-4 w-4" />}
              badge="3"
              collapsed={collapsed}
            >
              Reports
            </SidebarItem>
            <SidebarItem 
              icon={<Mail className="h-4 w-4" />}
              collapsed={collapsed}
            >
              Messages
            </SidebarItem>
          </SidebarSection>
        </SidebarContent>

        <SidebarFooter collapsed={collapsed}>
          <SidebarUser
            name="Admin User"
            email="admin@aiproto.com"
            collapsed={collapsed}
          />
          <div className="mt-2 space-y-1">
            <SidebarItem 
              icon={<Bell className="h-4 w-4" />}
              badge="2"
              collapsed={collapsed}
            >
              Notifications
            </SidebarItem>
            <SidebarItem 
              icon={<HelpCircle className="h-4 w-4" />}
              collapsed={collapsed}
            >
              Help
            </SidebarItem>
            <SidebarItem 
              icon={<Settings className="h-4 w-4" />}
              collapsed={collapsed}
            >
              Settings
            </SidebarItem>
          </div>
        </SidebarFooter>
      </Sidebar>
      
      <div className="flex-1 flex flex-col">
        <header className="border-b bg-card px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search..."
                  className="pl-10 w-80"
                />
              </div>
            </div>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              New Project
            </Button>
          </div>
        </header>
        
        <main className="flex-1 p-6">
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">Dashboard</h1>
              <p className="text-muted-foreground">
                Welcome to your AI Proto dashboard
              </p>
            </div>
            
            <Tabs defaultValue="overview" className="space-y-4">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="reports">Reports</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        Total Users
                      </CardTitle>
                      <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">1,234</div>
                      <p className="text-xs text-muted-foreground">
                        +20.1% from last month
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        Active Projects
                      </CardTitle>
                      <FileText className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">56</div>
                      <p className="text-xs text-muted-foreground">
                        +12 new this week
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        Revenue
                      </CardTitle>
                      <BarChart3 className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">$45,231</div>
                      <p className="text-xs text-muted-foreground">
                        +180.1% from last month
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        Messages
                      </CardTitle>
                      <Mail className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">89</div>
                      <p className="text-xs text-muted-foreground">
                        +5 unread messages
                      </p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                  <Card className="col-span-4">
                    <CardHeader>
                      <CardTitle>Recent Activity</CardTitle>
                      <CardDescription>
                        You have 3 new notifications today.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <div className="flex-1">
                            <p className="text-sm font-medium">New user registered</p>
                            <p className="text-xs text-muted-foreground">2 minutes ago</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="w-2 h-2 bg-accent rounded-full"></div>
                          <div className="flex-1">
                            <p className="text-sm font-medium">Project updated</p>
                            <p className="text-xs text-muted-foreground">1 hour ago</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="w-2 h-2 bg-destructive rounded-full"></div>
                          <div className="flex-1">
                            <p className="text-sm font-medium">System alert</p>
                            <p className="text-xs text-muted-foreground">3 hours ago</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="col-span-3">
                    <CardHeader>
                      <CardTitle>Quick Actions</CardTitle>
                      <CardDescription>
                        Common tasks and shortcuts
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <Button variant="outline" className="w-full justify-start">
                        <Plus className="h-4 w-4 mr-2" />
                        Create Project
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Users className="h-4 w-4 mr-2" />
                        Invite User
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <BarChart3 className="h-4 w-4 mr-2" />
                        View Analytics
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Settings className="h-4 w-4 mr-2" />
                        Settings
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="analytics" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Analytics Overview</CardTitle>
                    <CardDescription>
                      Detailed analytics and insights
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Analytics content would go here...
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="reports" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Reports</CardTitle>
                    <CardDescription>
                      Generate and view reports
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Reports content would go here...
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}
