"use client"

import * as React from "react"
import { 
  Sidebar, 
  SidebarHeader, 
  SidebarSearch,
  SidebarContent, 
  SidebarSection,
  SidebarItem, 
  SidebarGroup,
  SidebarFooter,
  SidebarUser
} from "@/components/ui/sidebar"
import { 
  Home, 
  Users, 
  BarChart3, 
  FileText, 
  Mail,
  Settings,
  FolderOpen,
  Calendar,
  CreditCard,
  ShoppingCart,
  Package,
  Truck,
  Bell,
  HelpCircle,
  BookOpen,
  Zap,
  Shield,
  Globe,
  Database,
  Cpu
} from "lucide-react"

export function SidebarNavigation() {
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

        <SidebarSearch collapsed={collapsed} placeholder="Search navigation..." />

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
          </SidebarSection>

          <SidebarSection title="Management" collapsed={collapsed}>
            <SidebarGroup 
              title="Products" 
              icon={<Package className="h-4 w-4" />}
              collapsed={collapsed}
              defaultOpen
            >
              <SidebarItem 
                icon={<ShoppingCart className="h-4 w-4" />}
                collapsed={collapsed}
              >
                Inventory
              </SidebarItem>
              <SidebarItem 
                icon={<Truck className="h-4 w-4" />}
                badge="5"
                collapsed={collapsed}
              >
                Orders
              </SidebarItem>
              <SidebarItem 
                icon={<CreditCard className="h-4 w-4" />}
                collapsed={collapsed}
              >
                Payments
              </SidebarItem>
            </SidebarGroup>

            <SidebarGroup 
              title="Content" 
              icon={<BookOpen className="h-4 w-4" />}
              collapsed={collapsed}
            >
              <SidebarItem 
                icon={<FolderOpen className="h-4 w-4" />}
                collapsed={collapsed}
              >
                Files
              </SidebarItem>
              <SidebarItem 
                icon={<Calendar className="h-4 w-4" />}
                collapsed={collapsed}
              >
                Events
              </SidebarItem>
            </SidebarGroup>
          </SidebarSection>

          <SidebarSection title="System" collapsed={collapsed}>
            <SidebarItem 
              icon={<Database className="h-4 w-4" />}
              collapsed={collapsed}
            >
              Database
            </SidebarItem>
            <SidebarItem 
              icon={<Cpu className="h-4 w-4" />}
              collapsed={collapsed}
            >
              API
            </SidebarItem>
            <SidebarItem 
              icon={<Globe className="h-4 w-4" />}
              collapsed={collapsed}
            >
              Domains
            </SidebarItem>
            <SidebarItem 
              icon={<Shield className="h-4 w-4" />}
              collapsed={collapsed}
            >
              Security
            </SidebarItem>
          </SidebarSection>
        </SidebarContent>

        <SidebarFooter collapsed={collapsed}>
          <SidebarUser
            name="John Doe"
            email="john@example.com"
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
            <div>
              <h1 className="text-2xl font-bold">Dashboard</h1>
              <p className="text-muted-foreground">
                Welcome to your enhanced sidebar navigation
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-sm text-muted-foreground">
                Sidebar is {collapsed ? "collapsed" : "expanded"}
              </div>
            </div>
          </div>
        </header>
        
        <main className="flex-1 p-6">
          <div className="max-w-4xl space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border bg-card p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Users className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Users</h3>
                </div>
                <p className="text-2xl font-bold">1,234</p>
                <p className="text-sm text-muted-foreground">+12% from last month</p>
              </div>
              
              <div className="rounded-lg border bg-card p-6">
                <div className="flex items-center gap-2 mb-4">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Analytics</h3>
                </div>
                <p className="text-2xl font-bold">89.2%</p>
                <p className="text-sm text-muted-foreground">+2.1% from last week</p>
              </div>
              
              <div className="rounded-lg border bg-card p-6">
                <div className="flex items-center gap-2 mb-4">
                  <FileText className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Reports</h3>
                </div>
                <p className="text-2xl font-bold">23</p>
                <p className="text-sm text-muted-foreground">3 pending review</p>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-6">
              <h3 className="text-lg font-semibold mb-4">Sidebar Features</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-medium mb-2">Enhanced Components</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Collapsible sidebar with smooth transitions</li>
                    <li>• Search functionality with collapsed state</li>
                    <li>• Nested navigation groups</li>
                    <li>• Badge support for notifications</li>
                    <li>• User profile section</li>
                    <li>• Section headers for organization</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Design System Integration</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Uses your custom sidebar color tokens</li>
                    <li>• Consistent with existing component patterns</li>
                    <li>• Responsive and accessible</li>
                    <li>• TypeScript support with proper interfaces</li>
                    <li>• Lucide React icons integration</li>
                    <li>• Smooth hover and active states</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
