import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const salesforceButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        brand:
          "bg-[var(--slds-brand-primary)] text-[var(--slds-text-inverse)] border border-[var(--slds-brand-primary)] hover:bg-[var(--slds-brand-secondary)] hover:border-[var(--slds-brand-secondary)]",
        destructive:
          "bg-[var(--slds-error)] text-[var(--slds-text-inverse)] border border-[var(--slds-error)] hover:bg-[var(--slds-error-dark)] hover:border-[var(--slds-error-dark)]",
        success:
          "bg-[var(--slds-success)] text-[var(--slds-text-inverse)] border border-[var(--slds-success)] hover:bg-[var(--slds-success-dark)] hover:border-[var(--slds-success-dark)]",
        neutral:
          "bg-[var(--slds-bg-primary)] text-[var(--slds-text-primary)] border border-[var(--slds-border-primary)] hover:bg-[var(--slds-bg-secondary)]",
        outline:
          "bg-transparent text-[var(--slds-brand-primary)] border border-[var(--slds-brand-primary)] hover:bg-[var(--slds-brand-primary)] hover:text-[var(--slds-text-inverse)]",
        ghost:
          "bg-transparent text-[var(--slds-text-primary)] hover:bg-[var(--slds-bg-secondary)]",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "brand",
      size: "default",
    },
  }
)

function SalesforceButton({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof salesforceButtonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="salesforce-button"
      className={cn(salesforceButtonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { SalesforceButton, salesforceButtonVariants }
