"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Check, 
  ChevronLeft, 
  ChevronRight, 
  AlertCircle,
  User,
  FileText,
  GraduationCap,
  CreditCard,
  Shield
} from "lucide-react"

interface WizardStep {
  id: string
  title: string
  description?: string
  icon?: React.ReactNode
  status?: 'pending' | 'current' | 'completed' | 'error'
  isOptional?: boolean
}

interface WizardProps extends React.HTMLAttributes<HTMLDivElement> {
  steps: WizardStep[]
  currentStep: number
  onStepChange: (step: number) => void
  onComplete?: () => void
  showStepNumbers?: boolean
  showProgress?: boolean
  allowBackNavigation?: boolean
  allowSkipSteps?: boolean
}

const Wizard = React.forwardRef<HTMLDivElement, WizardProps>(
  ({ 
    className, 
    steps, 
    currentStep, 
    onStepChange, 
    onComplete,
    showStepNumbers = true,
    showProgress = true,
    allowBackNavigation = true,
    allowSkipSteps = false,
    ...props 
  }, ref) => {
    const isLastStep = currentStep === steps.length - 1
    const isFirstStep = currentStep === 0
    const currentStepData = steps[currentStep]
    const completedSteps = steps.filter((_, index) => index < currentStep)
    const progressPercentage = (currentStep / (steps.length - 1)) * 100

    const handleNext = () => {
      if (!isLastStep) {
        onStepChange(currentStep + 1)
      } else if (onComplete) {
        onComplete()
      }
    }

    const handlePrevious = () => {
      if (!isFirstStep && allowBackNavigation) {
        onStepChange(currentStep - 1)
      }
    }

    const handleStepClick = (stepIndex: number) => {
      if (stepIndex <= currentStep || allowSkipSteps) {
        onStepChange(stepIndex)
      }
    }

    return (
      <div
        ref={ref}
        className={cn("w-full max-w-4xl mx-auto", className)}
        {...props}
      >
        {/* Progress Bar */}
        {showProgress && (
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-muted-foreground">
                Step {currentStep + 1} of {steps.length}
              </span>
              <span className="text-sm font-medium text-muted-foreground">
                {Math.round(progressPercentage)}% Complete
              </span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div 
                className="bg-primary h-2 rounded-full transition-all duration-300 ease-in-out"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
        )}

        {/* Step Navigation */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => {
              const isCompleted = index < currentStep
              const isCurrent = index === currentStep
              const isClickable = index <= currentStep || allowSkipSteps
              const stepStatus = step.status || (isCompleted ? 'completed' : isCurrent ? 'current' : 'pending')

              return (
                <div
                  key={step.id}
                  className={cn(
                    "flex flex-col items-center flex-1 relative",
                    index < steps.length - 1 && "after:content-[''] after:absolute after:top-4 after:left-1/2 after:w-full after:h-0.5 after:bg-muted after:-z-10",
                    index < currentStep && "after:bg-primary"
                  )}
                >
                  <button
                    onClick={() => handleStepClick(index)}
                    disabled={!isClickable}
                    className={cn(
                      "flex items-center justify-center w-8 h-8 rounded-full border-2 transition-all duration-200",
                      "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                      isClickable && "cursor-pointer hover:scale-105",
                      !isClickable && "cursor-not-allowed opacity-50",
                      stepStatus === 'completed' && "bg-primary border-primary text-primary-foreground",
                      stepStatus === 'current' && "bg-background border-primary text-primary",
                      stepStatus === 'error' && "bg-destructive border-destructive text-destructive-foreground",
                      stepStatus === 'pending' && "bg-background border-muted-foreground text-muted-foreground"
                    )}
                  >
                    {stepStatus === 'completed' ? (
                      <Check className="h-4 w-4" />
                    ) : showStepNumbers ? (
                      <span className="text-sm font-medium">{index + 1}</span>
                    ) : step.icon ? (
                      step.icon
                    ) : (
                      <span className="text-sm font-medium">{index + 1}</span>
                    )}
                  </button>
                  
                  <div className="mt-2 text-center">
                    <div className="flex items-center gap-1 justify-center">
                      <span className={cn(
                        "text-sm font-medium",
                        stepStatus === 'completed' && "text-primary",
                        stepStatus === 'current' && "text-foreground",
                        stepStatus === 'error' && "text-destructive",
                        stepStatus === 'pending' && "text-muted-foreground"
                      )}>
                        {step.title}
                      </span>
                      {step.isOptional && (
                        <Badge variant="secondary" className="text-xs">Optional</Badge>
                      )}
                    </div>
                    {step.description && (
                      <p className="text-xs text-muted-foreground mt-1 max-w-24">
                        {step.description}
                      </p>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Current Step Content */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            {currentStepData.icon && (
              <div className="p-2 rounded-lg bg-primary/10">
                {currentStepData.icon}
              </div>
            )}
            <div>
              <h2 className="text-xl font-semibold">{currentStepData.title}</h2>
              {currentStepData.description && (
                <p className="text-muted-foreground">{currentStepData.description}</p>
              )}
            </div>
          </div>
          
          {/* Content slot */}
          <div className="min-h-[400px]">
            {/* Content will be passed as children */}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between pt-6 border-t">
          <div className="flex items-center gap-2">
            {currentStepData.isOptional && (
              <Button variant="outline" size="sm">
                Skip this step
              </Button>
            )}
          </div>
          
          <div className="flex items-center gap-2">
            {!isFirstStep && allowBackNavigation && (
              <Button
                variant="outline"
                onClick={handlePrevious}
                className="flex items-center gap-2"
              >
                <ChevronLeft className="h-4 w-4" />
                Previous
              </Button>
            )}
            
            <Button
              onClick={handleNext}
              className="flex items-center gap-2"
            >
              {isLastStep ? (
                <>
                  Complete
                  <Check className="h-4 w-4" />
                </>
              ) : (
                <>
                  Next
                  <ChevronRight className="h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    )
  }
)
Wizard.displayName = "Wizard"

// Step-specific components
interface WizardStepContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  step: WizardStep
  isValid?: boolean
  errorMessage?: string
}

const WizardStepContent = React.forwardRef<HTMLDivElement, WizardStepContentProps>(
  ({ className, children, step, isValid = true, errorMessage, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("space-y-4", className)}
        {...props}
      >
        {!isValid && errorMessage && (
          <div className="flex items-center gap-2 p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive">
            <AlertCircle className="h-4 w-4" />
            <span className="text-sm">{errorMessage}</span>
          </div>
        )}
        {children}
      </div>
    )
  }
)
WizardStepContent.displayName = "WizardStepContent"

// Predefined step icons
const WizardIcons = {
  personal: <User className="h-4 w-4" />,
  academic: <GraduationCap className="h-4 w-4" />,
  documents: <FileText className="h-4 w-4" />,
  payment: <CreditCard className="h-4 w-4" />,
  review: <Shield className="h-4 w-4" />
}

export {
  Wizard,
  WizardStepContent,
  WizardIcons,
  type WizardStep
}
