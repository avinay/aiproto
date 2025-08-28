import * as React from "react"
import { cn } from "@/lib/utils"

interface SalesforceCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  variant?: "default" | "elevated" | "outlined"
}

const SalesforceCard = React.forwardRef<HTMLDivElement, SalesforceCardProps>(
  ({ className, children, variant = "default", ...props }, ref) => {
    const variantClasses = {
      default: "bg-[var(--slds-bg-primary)] border border-[var(--slds-border-primary)] shadow-[0_2px_2px_0_var(--slds-shadow-1)]",
      elevated: "bg-[var(--slds-bg-primary)] border border-[var(--slds-border-primary)] shadow-[0_4px_8px_0_var(--slds-shadow-2)]",
      outlined: "bg-[var(--slds-bg-primary)] border border-[var(--slds-border-secondary)]"
    }

    return (
      <div
        ref={ref}
        className={cn(
          "rounded p-4",
          variantClasses[variant],
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
SalesforceCard.displayName = "SalesforceCard"

interface SalesforceCardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const SalesforceCardHeader = React.forwardRef<HTMLDivElement, SalesforceCardHeaderProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("mb-4", className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)
SalesforceCardHeader.displayName = "SalesforceCardHeader"

interface SalesforceCardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const SalesforceCardContent = React.forwardRef<HTMLDivElement, SalesforceCardContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("text-[var(--slds-text-primary)]", className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)
SalesforceCardContent.displayName = "SalesforceCardContent"

interface SalesforceCardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const SalesforceCardFooter = React.forwardRef<HTMLDivElement, SalesforceCardFooterProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("mt-4 pt-4 border-t border-[var(--slds-border-primary)]", className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)
SalesforceCardFooter.displayName = "SalesforceCardFooter"

export {
  SalesforceCard,
  SalesforceCardHeader,
  SalesforceCardContent,
  SalesforceCardFooter,
}
