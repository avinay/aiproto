"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  AlertCircle, 
  CheckCircle, 
  Upload, 
  Calendar,
  MapPin,
  Phone,
  Mail,
  User,
  GraduationCap,
  FileText,
  Plus,
  X
} from "lucide-react"

// Form Field Component
interface FormFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string
  required?: boolean
  error?: string
  hint?: string
  children: React.ReactNode
}

const FormField = React.forwardRef<HTMLDivElement, FormFieldProps>(
  ({ className, label, required = false, error, hint, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("space-y-2", className)} {...props}>
        <Label className="flex items-center gap-1">
          {label}
          {required && <span className="text-destructive">*</span>}
        </Label>
        {children}
        {error && (
          <div className="flex items-center gap-2 text-sm text-destructive">
            <AlertCircle className="h-4 w-4" />
            {error}
          </div>
        )}
        {hint && !error && (
          <p className="text-sm text-muted-foreground">{hint}</p>
        )}
      </div>
    )
  }
)
FormField.displayName = "FormField"

// Enhanced Input Component
interface FormInputProps extends React.ComponentProps<typeof Input> {
  label: string
  required?: boolean
  error?: string
  hint?: string
  icon?: React.ReactNode
}

const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ className, label, required = false, error, hint, icon, ...props }, ref) => {
    return (
      <FormField label={label} required={required} error={error} hint={hint}>
        <div className="relative">
          {icon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              {icon}
            </div>
          )}
          <Input
            ref={ref}
            className={cn(
              icon && "pl-10",
              error && "border-destructive focus-visible:ring-destructive",
              className
            )}
            {...props}
          />
        </div>
      </FormField>
    )
  }
)
FormInput.displayName = "FormInput"

// Enhanced Textarea Component
interface FormTextareaProps extends React.ComponentProps<typeof Textarea> {
  label: string
  required?: boolean
  error?: string
  hint?: string
}

const FormTextarea = React.forwardRef<HTMLTextAreaElement, FormTextareaProps>(
  ({ className, label, required = false, error, hint, ...props }, ref) => {
    return (
      <FormField label={label} required={required} error={error} hint={hint}>
        <Textarea
          ref={ref}
          className={cn(
            error && "border-destructive focus-visible:ring-destructive",
            className
          )}
          {...props}
        />
      </FormField>
    )
  }
)
FormTextarea.displayName = "FormTextarea"

// Enhanced Select Component
interface FormSelectProps extends React.ComponentProps<typeof Select> {
  label: string
  required?: boolean
  error?: string
  hint?: string
  placeholder?: string
  options: { value: string; label: string }[]
  className?: string
}

const FormSelect = React.forwardRef<HTMLButtonElement, FormSelectProps>(
  ({ className, label, required = false, error, hint, placeholder, options, ...props }, ref) => {
    return (
      <FormField label={label} required={required} error={error} hint={hint}>
        <Select {...props}>
          <SelectTrigger
            ref={ref}
            className={cn(
              error && "border-destructive focus-visible:ring-destructive",
              className
            )}
          >
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </FormField>
    )
  }
)
FormSelect.displayName = "FormSelect"

// File Upload Component
interface FileUploadProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string
  required?: boolean
  error?: string
  hint?: string
  accept?: string
  multiple?: boolean
  maxSize?: number // in MB
  onFilesChange?: (files: File[]) => void
  uploadedFiles?: File[]
}

const FileUpload = React.forwardRef<HTMLDivElement, FileUploadProps>(
  ({ 
    className, 
    label, 
    required = false, 
    error, 
    hint, 
    accept = "*/*",
    multiple = false,
    maxSize = 10,
    onFilesChange,
    uploadedFiles = [],
    ...props 
  }, ref) => {
    const [files, setFiles] = React.useState<File[]>(uploadedFiles)
    const fileInputRef = React.useRef<HTMLInputElement>(null)

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFiles = Array.from(event.target.files || [])
      const validFiles = selectedFiles.filter(file => {
        if (file.size > maxSize * 1024 * 1024) {
          alert(`File ${file.name} is too large. Maximum size is ${maxSize}MB.`)
          return false
        }
        return true
      })
      
      const newFiles = multiple ? [...files, ...validFiles] : validFiles
      setFiles(newFiles)
      onFilesChange?.(newFiles)
    }

    const removeFile = (index: number) => {
      const newFiles = files.filter((_, i) => i !== index)
      setFiles(newFiles)
      onFilesChange?.(newFiles)
    }

    return (
      <FormField label={label} required={required} error={error} hint={hint}>
        <div ref={ref} className={cn("space-y-4", className)} {...props}>
          <div
            className={cn(
              "border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors",
              "hover:border-primary hover:bg-primary/5",
              error && "border-destructive hover:border-destructive",
              "focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20"
            )}
            onClick={() => fileInputRef.current?.click()}
          >
            <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">
              Click to upload or drag and drop
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              {accept !== "*/*" ? `Accepted formats: ${accept}` : "All file types accepted"}
              {maxSize && ` • Max size: ${maxSize}MB`}
            </p>
            <input
              ref={fileInputRef}
              type="file"
              accept={accept}
              multiple={multiple}
              onChange={handleFileChange}
              className="hidden"
            />
          </div>

          {files.length > 0 && (
            <div className="space-y-2">
              <p className="text-sm font-medium">Uploaded Files:</p>
              {files.map((file, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg border bg-muted/50"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">{file.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {(file.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeFile(index)}
                    className="h-8 w-8 p-0"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>
      </FormField>
    )
  }
)
FileUpload.displayName = "FileUpload"

// Address Form Component
interface AddressFormProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  description?: string
  onAddressChange?: (address: AddressData) => void
  defaultAddress?: AddressData
}

interface AddressData {
  street: string
  city: string
  state: string
  zipCode: string
  country: string
}

const AddressForm = React.forwardRef<HTMLDivElement, AddressFormProps>(
  ({ className, title = "Address Information", description, onAddressChange, defaultAddress, ...props }, ref) => {
    const [address, setAddress] = React.useState<AddressData>(defaultAddress || {
      street: "",
      city: "",
      state: "",
      zipCode: "",
      country: ""
    })

    const handleChange = (field: keyof AddressData, value: string) => {
      const newAddress = { ...address, [field]: value }
      setAddress(newAddress)
      onAddressChange?.(newAddress)
    }

    return (
      <Card ref={ref} className={className} {...props}>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            {title}
          </CardTitle>
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
        <CardContent className="space-y-4">
          <FormInput
            label="Street Address"
            placeholder="123 Main Street"
            value={address.street}
            onChange={(e) => handleChange('street', e.target.value)}
            icon={<MapPin className="h-4 w-4" />}
            required
          />
          
          <div className="grid grid-cols-2 gap-4">
            <FormInput
              label="City"
              placeholder="New York"
              value={address.city}
              onChange={(e) => handleChange('city', e.target.value)}
              required
            />
            <FormInput
              label="State/Province"
              placeholder="NY"
              value={address.state}
              onChange={(e) => handleChange('state', e.target.value)}
              required
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <FormInput
              label="ZIP/Postal Code"
              placeholder="10001"
              value={address.zipCode}
              onChange={(e) => handleChange('zipCode', e.target.value)}
              required
            />
            <FormSelect
              label="Country"
              placeholder="Select country"
              value={address.country}
              onValueChange={(value) => handleChange('country', value)}
              options={[
                { value: "US", label: "United States" },
                { value: "CA", label: "Canada" },
                { value: "UK", label: "United Kingdom" },
                { value: "AU", label: "Australia" },
                { value: "DE", label: "Germany" },
                { value: "FR", label: "France" }
              ]}
              required
            />
          </div>
        </CardContent>
      </Card>
    )
  }
)
AddressForm.displayName = "AddressForm"

// Contact Form Component
interface ContactFormProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  description?: string
  onContactChange?: (contact: ContactData) => void
  defaultContact?: ContactData
}

interface ContactData {
  email: string
  phone: string
  emergencyContact: {
    name: string
    relationship: string
    phone: string
  }
}

const ContactForm = React.forwardRef<HTMLDivElement, ContactFormProps>(
  ({ className, title = "Contact Information", description, onContactChange, defaultContact, ...props }, ref) => {
    const [contact, setContact] = React.useState<ContactData>(defaultContact || {
      email: "",
      phone: "",
      emergencyContact: {
        name: "",
        relationship: "",
        phone: ""
      }
    })

    const handleChange = (field: keyof ContactData, value: string) => {
      const newContact = { ...contact, [field]: value }
      setContact(newContact)
      onContactChange?.(newContact)
    }

    const handleEmergencyChange = (field: keyof ContactData['emergencyContact'], value: string) => {
      const newContact = {
        ...contact,
        emergencyContact: { ...contact.emergencyContact, [field]: value }
      }
      setContact(newContact)
      onContactChange?.(newContact)
    }

    return (
      <Card ref={ref} className={className} {...props}>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Phone className="h-5 w-5" />
            {title}
          </CardTitle>
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <h4 className="font-medium">Primary Contact</h4>
            <FormInput
              label="Email Address"
              type="email"
              placeholder="student@example.com"
              value={contact.email}
              onChange={(e) => handleChange('email', e.target.value)}
              icon={<Mail className="h-4 w-4" />}
              required
            />
            <FormInput
              label="Phone Number"
              type="tel"
              placeholder="+1 (555) 123-4567"
              value={contact.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              icon={<Phone className="h-4 w-4" />}
              required
            />
          </div>

          <div className="space-y-4">
            <h4 className="font-medium">Emergency Contact</h4>
            <FormInput
              label="Emergency Contact Name"
              placeholder="John Doe"
              value={contact.emergencyContact.name}
              onChange={(e) => handleEmergencyChange('name', e.target.value)}
              icon={<User className="h-4 w-4" />}
              required
            />
            <div className="grid grid-cols-2 gap-4">
              <FormSelect
                label="Relationship"
                placeholder="Select relationship"
                value={contact.emergencyContact.relationship}
                onValueChange={(value) => handleEmergencyChange('relationship', value)}
                options={[
                  { value: "parent", label: "Parent" },
                  { value: "guardian", label: "Guardian" },
                  { value: "spouse", label: "Spouse" },
                  { value: "sibling", label: "Sibling" },
                  { value: "other", label: "Other" }
                ]}
                required
              />
              <FormInput
                label="Emergency Contact Phone"
                type="tel"
                placeholder="+1 (555) 123-4567"
                value={contact.emergencyContact.phone}
                onChange={(e) => handleEmergencyChange('phone', e.target.value)}
                icon={<Phone className="h-4 w-4" />}
                required
              />
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }
)
ContactForm.displayName = "ContactForm"

export {
  FormField,
  FormInput,
  FormTextarea,
  FormSelect,
  FileUpload,
  AddressForm,
  ContactForm,
  type AddressData,
  type ContactData
}
