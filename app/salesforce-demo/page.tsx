"use client"

import { SalesforceButton } from "@/components/ui/salesforce-button"
import { SalesforceCard, SalesforceCardContent, SalesforceCardHeader, SalesforceCardFooter } from "@/components/ui/salesforce-card"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Settings, 
  Plus,
  Save,
  Trash2,
  CheckCircle,
  AlertTriangle,
  Info
} from "lucide-react"

export default function SalesforceDemo() {
  return (
    <div className="min-h-screen bg-[var(--slds-bg-secondary)] p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[var(--slds-text-primary)] mb-2">
            Salesforce Lightning Design System Demo
          </h1>
          <p className="text-[var(--slds-text-secondary)]">
            Showcasing Salesforce colors and components from your registry
          </p>
        </div>

        <Tabs defaultValue="buttons" className="space-y-6">
          <TabsList className="bg-[var(--slds-bg-primary)] border border-[var(--slds-border-primary)]">
            <TabsTrigger value="buttons">Buttons</TabsTrigger>
            <TabsTrigger value="cards">Cards</TabsTrigger>
            <TabsTrigger value="colors">Color Palette</TabsTrigger>
            <TabsTrigger value="demo">Full Demo</TabsTrigger>
          </TabsList>

          <TabsContent value="buttons" className="space-y-6">
            <SalesforceCard>
              <SalesforceCardHeader>
                <h2 className="text-xl font-semibold text-[var(--slds-text-primary)]">Salesforce Button Variants</h2>
              </SalesforceCardHeader>
              <SalesforceCardContent>
                <div className="grid gap-4">
                  <div className="flex flex-wrap gap-4">
                    <SalesforceButton variant="brand">
                      <Plus className="h-4 w-4" />
                      Brand Button
                    </SalesforceButton>
                    <SalesforceButton variant="success">
                      <CheckCircle className="h-4 w-4" />
                      Success Button
                    </SalesforceButton>
                    <SalesforceButton variant="destructive">
                      <Trash2 className="h-4 w-4" />
                      Destructive Button
                    </SalesforceButton>
                    <SalesforceButton variant="neutral">
                      <Settings className="h-4 w-4" />
                      Neutral Button
                    </SalesforceButton>
                    <SalesforceButton variant="outline">
                      <Save className="h-4 w-4" />
                      Outline Button
                    </SalesforceButton>
                    <SalesforceButton variant="ghost">
                      <Info className="h-4 w-4" />
                      Ghost Button
                    </SalesforceButton>
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    <SalesforceButton variant="brand" size="sm">Small</SalesforceButton>
                    <SalesforceButton variant="brand" size="default">Default</SalesforceButton>
                    <SalesforceButton variant="brand" size="lg">Large</SalesforceButton>
                    <SalesforceButton variant="brand" size="icon">
                      <Plus className="h-4 w-4" />
                    </SalesforceButton>
                  </div>
                </div>
              </SalesforceCardContent>
            </SalesforceCard>
          </TabsContent>

          <TabsContent value="cards" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <SalesforceCard>
                <SalesforceCardHeader>
                  <h3 className="font-semibold text-[var(--slds-text-primary)]">Default Card</h3>
                </SalesforceCardHeader>
                <SalesforceCardContent>
                  <p className="text-[var(--slds-text-secondary)]">
                    This is a default Salesforce card with standard styling.
                  </p>
                </SalesforceCardContent>
                <SalesforceCardFooter>
                  <SalesforceButton variant="brand" size="sm">Action</SalesforceButton>
                </SalesforceCardFooter>
              </SalesforceCard>

              <SalesforceCard variant="elevated">
                <SalesforceCardHeader>
                  <h3 className="font-semibold text-[var(--slds-text-primary)]">Elevated Card</h3>
                </SalesforceCardHeader>
                <SalesforceCardContent>
                  <p className="text-[var(--slds-text-secondary)]">
                    This card has elevated shadow for more prominence.
                  </p>
                </SalesforceCardContent>
                <SalesforceCardFooter>
                  <SalesforceButton variant="success" size="sm">Success</SalesforceButton>
                </SalesforceCardFooter>
              </SalesforceCard>

              <SalesforceCard variant="outlined">
                <SalesforceCardHeader>
                  <h3 className="font-semibold text-[var(--slds-text-primary)]">Outlined Card</h3>
                </SalesforceCardHeader>
                <SalesforceCardContent>
                  <p className="text-[var(--slds-text-secondary)]">
                    This card has a stronger border for emphasis.
                  </p>
                </SalesforceCardContent>
                <SalesforceCardFooter>
                  <SalesforceButton variant="outline" size="sm">Outline</SalesforceButton>
                </SalesforceCardFooter>
              </SalesforceCard>
            </div>
          </TabsContent>

          <TabsContent value="colors" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Primary Colors</CardTitle>
                  <CardDescription>Salesforce Blue Palette</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded bg-[var(--slds-blue-500)]"></div>
                      <span className="text-sm">Blue 500: #2196f3</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded bg-[var(--slds-blue-600)]"></div>
                      <span className="text-sm">Blue 600: #1976d2</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded bg-[var(--slds-blue-700)]"></div>
                      <span className="text-sm">Blue 700: #1565c0</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Semantic Colors</CardTitle>
                  <CardDescription>Success, Warning, Error, Info</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded bg-[var(--slds-success)]"></div>
                      <span className="text-sm">Success: #04844b</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded bg-[var(--slds-warning)]"></div>
                      <span className="text-sm">Warning: #fe9339</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded bg-[var(--slds-error)]"></div>
                      <span className="text-sm">Error: #ea001e</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded bg-[var(--slds-info)]"></div>
                      <span className="text-sm">Info: #0176d3</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Neutral Colors</CardTitle>
                  <CardDescription>Gray Scale</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded bg-[var(--slds-gray-100)] border border-[var(--slds-gray-300)]"></div>
                      <span className="text-sm">Gray 100: #f5f5f5</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded bg-[var(--slds-gray-300)]"></div>
                      <span className="text-sm">Gray 300: #e0e0e0</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded bg-[var(--slds-gray-500)]"></div>
                      <span className="text-sm">Gray 500: #9e9e9e</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded bg-[var(--slds-gray-700)]"></div>
                      <span className="text-sm">Gray 700: #616161</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="demo" className="space-y-6">
            <SalesforceCard>
              <SalesforceCardHeader>
                <h2 className="text-xl font-semibold text-[var(--slds-text-primary)]">Salesforce Dashboard Demo</h2>
                <p className="text-[var(--slds-text-secondary)]">A complete example using Salesforce components</p>
              </SalesforceCardHeader>
              <SalesforceCardContent>
                <div className="grid gap-6 md:grid-cols-3">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-[var(--slds-text-primary)]">Quick Actions</h3>
                    <div className="space-y-2">
                      <SalesforceButton variant="brand" className="w-full justify-start">
                        <Plus className="h-4 w-4 mr-2" />
                        New Record
                      </SalesforceButton>
                      <SalesforceButton variant="success" className="w-full justify-start">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Save Changes
                      </SalesforceButton>
                      <SalesforceButton variant="outline" className="w-full justify-start">
                        <Settings className="h-4 w-4 mr-2" />
                        Settings
                      </SalesforceButton>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-[var(--slds-text-primary)]">Recent Activity</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 bg-[var(--slds-success-light)] rounded border border-[var(--slds-success)]">
                        <CheckCircle className="h-4 w-4 text-[var(--slds-success)]" />
                        <div>
                          <p className="text-sm font-medium text-[var(--slds-success-dark)]">Record Created</p>
                          <p className="text-xs text-[var(--slds-text-tertiary)]">2 minutes ago</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-[var(--slds-warning-light)] rounded border border-[var(--slds-warning)]">
                        <AlertTriangle className="h-4 w-4 text-[var(--slds-warning)]" />
                        <div>
                          <p className="text-sm font-medium text-[var(--slds-warning-dark)]">System Alert</p>
                          <p className="text-xs text-[var(--slds-text-tertiary)]">1 hour ago</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-[var(--slds-text-primary)]">Statistics</h3>
                    <div className="space-y-3">
                      <div className="p-4 bg-[var(--slds-bg-primary)] rounded border border-[var(--slds-border-primary)]">
                        <div className="text-2xl font-bold text-[var(--slds-brand-primary)]">1,234</div>
                        <div className="text-sm text-[var(--slds-text-secondary)]">Total Records</div>
                      </div>
                      <div className="p-4 bg-[var(--slds-bg-primary)] rounded border border-[var(--slds-border-primary)]">
                        <div className="text-2xl font-bold text-[var(--slds-success)]">89%</div>
                        <div className="text-sm text-[var(--slds-text-secondary)]">Success Rate</div>
                      </div>
                    </div>
                  </div>
                </div>
              </SalesforceCardContent>
              <SalesforceCardFooter>
                <div className="flex gap-2">
                  <SalesforceButton variant="brand">Primary Action</SalesforceButton>
                  <SalesforceButton variant="neutral">Secondary</SalesforceButton>
                </div>
              </SalesforceCardFooter>
            </SalesforceCard>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
