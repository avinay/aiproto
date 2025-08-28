"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { 
  ChevronLeft, 
  ChevronRight, 
  Search, 
  User,
  Settings,
  LogOut
} from "lucide-react"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  collapsed?: boolean
  onCollapsedChange?: (collapsed: boolean) => void
}

const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
  ({ className, children, collapsed = false, onCollapsedChange, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex h-full flex-col border-r bg-sidebar text-sidebar-foreground transition-all duration-300",
          collapsed ? "w-16" : "w-64",
          className
        )}
        {...props}
      >
        {children}
        <div className="border-t p-2">
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-center"
            onClick={() => onCollapsedChange?.(!collapsed)}
          >
            {collapsed ? (
              <ChevronRight className="h-4 w-4" />
            ) : (
              <ChevronLeft className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>
    )
  }
)
Sidebar.displayName = "Sidebar"

interface SidebarHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  collapsed?: boolean
}

const SidebarHeader = React.forwardRef<HTMLDivElement, SidebarHeaderProps>(
  ({ className, children, collapsed = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex h-14 items-center border-b px-4", className)}
        {...props}
      >
        {collapsed ? (
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <span className="text-sm font-bold">A</span>
          </div>
        ) : (
          children
        )}
      </div>
    )
  }
)
SidebarHeader.displayName = "SidebarHeader"

interface SidebarSearchProps extends React.HTMLAttributes<HTMLDivElement> {
  placeholder?: string
  collapsed?: boolean
}

const SidebarSearch = React.forwardRef<HTMLDivElement, SidebarSearchProps>(
  ({ className, placeholder = "Search...", collapsed = false, ...props }, ref) => {
    if (collapsed) {
      return (
        <div
          ref={ref}
          className={cn("p-2", className)}
          {...props}
        >
          <Button variant="ghost" size="sm" className="w-full justify-center">
            <Search className="h-4 w-4" />
          </Button>
        </div>
      )
    }

    return (
      <div
        ref={ref}
        className={cn("p-4", className)}
        {...props}
      >
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder={placeholder}
            className="pl-10"
          />
        </div>
      </div>
    )
  }
)
SidebarSearch.displayName = "SidebarSearch"

interface SidebarContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const SidebarContent = React.forwardRef<HTMLDivElement, SidebarContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex-1 overflow-auto", className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)
SidebarContent.displayName = "SidebarContent"

interface SidebarSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  title?: string
  collapsed?: boolean
}

const SidebarSection = React.forwardRef<HTMLDivElement, SidebarSectionProps>(
  ({ className, children, title, collapsed = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("space-y-1 p-2", className)}
        {...props}
      >
        {title && !collapsed && (
          <h3 className="px-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            {title}
          </h3>
        )}
        {children}
      </div>
    )
  }
)
SidebarSection.displayName = "SidebarSection"

interface SidebarItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  active?: boolean
  icon?: React.ReactNode
  badge?: string | number
  collapsed?: boolean
  href?: string
}

const SidebarItem = React.forwardRef<HTMLDivElement, SidebarItemProps>(
  ({ className, children, active = false, icon, badge, collapsed = false, href, ...props }, ref) => {
    const Component = href ? 'a' : 'div'
    
    return (
      <Component
        ref={ref}
        href={href}
        className={cn(
          "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground cursor-pointer",
          active && "bg-sidebar-primary text-sidebar-primary-foreground",
          collapsed && "justify-center px-2",
          className
        )}
        {...props}
      >
        {icon && <span className="flex-shrink-0">{icon}</span>}
        {!collapsed && (
          <>
            <span className="flex-1">{children}</span>
            {badge && (
              <Badge variant="secondary" className="ml-auto">
                {badge}
              </Badge>
            )}
          </>
        )}
      </Component>
    )
  }
)
SidebarItem.displayName = "SidebarItem"

interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  title: string
  icon?: React.ReactNode
  collapsed?: boolean
  defaultOpen?: boolean
}

const SidebarGroup = React.forwardRef<HTMLDivElement, SidebarGroupProps>(
  ({ className, children, title, icon, collapsed = false, defaultOpen = false, ...props }, ref) => {
    const [isOpen, setIsOpen] = React.useState(defaultOpen)

    if (collapsed) {
      return (
        <div
          ref={ref}
          className={cn("p-1", className)}
          {...props}
        >
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            {icon}
          </Button>
        </div>
      )
    }

    return (
      <div
        ref={ref}
        className={cn("space-y-1", className)}
        {...props}
      >
        <Button
          variant="ghost"
          className="w-full justify-between px-3 py-2 h-auto"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex items-center gap-3">
            {icon}
            <span className="text-sm font-medium">{title}</span>
          </div>
          <ChevronRight className={cn(
            "h-4 w-4 transition-transform",
            isOpen && "rotate-90"
          )} />
        </Button>
        {isOpen && (
          <div className="ml-6 space-y-1">
            {children}
          </div>
        )}
      </div>
    )
  }
)
SidebarGroup.displayName = "SidebarGroup"

interface SidebarFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  collapsed?: boolean
}

const SidebarFooter = React.forwardRef<HTMLDivElement, SidebarFooterProps>(
  ({ className, children, collapsed = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("border-t p-4", className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)
SidebarFooter.displayName = "SidebarFooter"

interface SidebarUserProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  email: string
  avatar?: string
  collapsed?: boolean
}

const SidebarUser = React.forwardRef<HTMLDivElement, SidebarUserProps>(
  ({ className, name, email, avatar, collapsed = false, ...props }, ref) => {
    if (collapsed) {
      return (
        <div
          ref={ref}
          className={cn("flex justify-center p-2", className)}
          {...props}
        >
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
            <User className="h-4 w-4 text-primary-foreground" />
          </div>
        </div>
      )
    }

    return (
      <div
        ref={ref}
        className={cn("flex items-center gap-3 p-2", className)}
        {...props}
      >
        <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
          {avatar ? (
            <img src={avatar} alt={name} className="h-8 w-8 rounded-full" />
          ) : (
            <User className="h-4 w-4 text-primary-foreground" />
          )}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium truncate">{name}</p>
          <p className="text-xs text-muted-foreground truncate">{email}</p>
        </div>
        <Button variant="ghost" size="sm">
          <Settings className="h-4 w-4" />
        </Button>
      </div>
    )
  }
)
SidebarUser.displayName = "SidebarUser"

export {
  Sidebar,
  SidebarHeader,
  SidebarSearch,
  SidebarContent,
  SidebarSection,
  SidebarItem,
  SidebarGroup,
  SidebarFooter,
  SidebarUser,
}
