"use client"

import * as React from "react"
import { 
  Wizard, 
  WizardStepContent, 
  WizardIcons,
  type WizardStep 
} from "@/components/ui/wizard"
import { 
  FormInput, 
  FormTextarea, 
  FormSelect, 
  FileUpload,
  AddressForm,
  ContactForm,
  type AddressData,
  type ContactData
} from "@/components/ui/form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { 
  CheckCircle, 
  AlertCircle, 
  GraduationCap,
  Calendar,
  DollarSign,
  BookOpen,
  Award,
  Globe,
  Users,
  Building
} from "lucide-react"

interface StudentData {
  // Personal Information
  firstName: string
  lastName: string
  dateOfBirth: string
  gender: string
  nationality: string
  
  // Academic Information
  previousSchool: string
  gradeLevel: string
  gpa: string
  academicInterests: string[]
  extracurricularActivities: string[]
  
  // Contact & Address
  contact: ContactData
  address: AddressData
  
  // Documents
  documents: File[]
  
  // Program Selection
  program: string
  startDate: string
  campus: string
  
  // Financial Information
  tuitionPayment: string
  scholarship: boolean
  scholarshipDetails: string
  
  // Additional Information
  specialNeeds: string
  additionalNotes: string
  
  // Agreements
  termsAccepted: boolean
  privacyAccepted: boolean
}

export function StudentAdmission() {
  const [currentStep, setCurrentStep] = React.useState(0)
  const [studentData, setStudentData] = React.useState<StudentData>({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    nationality: "",
    previousSchool: "",
    gradeLevel: "",
    gpa: "",
    academicInterests: [],
    extracurricularActivities: [],
    contact: {
      email: "",
      phone: "",
      emergencyContact: {
        name: "",
        relationship: "",
        phone: ""
      }
    },
    address: {
      street: "",
      city: "",
      state: "",
      zipCode: "",
      country: ""
    },
    documents: [],
    program: "",
    startDate: "",
    campus: "",
    tuitionPayment: "",
    scholarship: false,
    scholarshipDetails: "",
    specialNeeds: "",
    additionalNotes: "",
    termsAccepted: false,
    privacyAccepted: false
  })

  const [errors, setErrors] = React.useState<Record<string, string>>({})

  const steps: WizardStep[] = [
    {
      id: "personal",
      title: "Personal Information",
      description: "Basic details about the student",
      icon: WizardIcons.personal
    },
    {
      id: "academic",
      title: "Academic Background",
      description: "Previous education and achievements",
      icon: WizardIcons.academic
    },
    {
      id: "contact",
      title: "Contact & Address",
      description: "Contact information and location",
      icon: WizardIcons.personal
    },
    {
      id: "documents",
      title: "Required Documents",
      description: "Upload necessary documents",
      icon: WizardIcons.documents
    },
    {
      id: "program",
      title: "Program Selection",
      description: "Choose your academic program",
      icon: WizardIcons.academic
    },
    {
      id: "financial",
      title: "Financial Information",
      description: "Tuition and payment details",
      icon: WizardIcons.payment
    },
    {
      id: "review",
      title: "Review & Submit",
      description: "Review all information",
      icon: WizardIcons.review
    }
  ]

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {}

    switch (step) {
      case 0: // Personal Information
        if (!studentData.firstName) newErrors.firstName = "First name is required"
        if (!studentData.lastName) newErrors.lastName = "Last name is required"
        if (!studentData.dateOfBirth) newErrors.dateOfBirth = "Date of birth is required"
        if (!studentData.gender) newErrors.gender = "Gender is required"
        if (!studentData.nationality) newErrors.nationality = "Nationality is required"
        break

      case 1: // Academic Background
        if (!studentData.previousSchool) newErrors.previousSchool = "Previous school is required"
        if (!studentData.gradeLevel) newErrors.gradeLevel = "Grade level is required"
        if (!studentData.gpa) newErrors.gpa = "GPA is required"
        break

      case 2: // Contact & Address
        if (!studentData.contact.email) newErrors.contactEmail = "Email is required"
        if (!studentData.contact.phone) newErrors.contactPhone = "Phone is required"
        if (!studentData.address.street) newErrors.addressStreet = "Street address is required"
        break

      case 3: // Documents
        if (studentData.documents.length === 0) newErrors.documents = "At least one document is required"
        break

      case 4: // Program Selection
        if (!studentData.program) newErrors.program = "Program selection is required"
        if (!studentData.startDate) newErrors.startDate = "Start date is required"
        if (!studentData.campus) newErrors.campus = "Campus selection is required"
        break

      case 5: // Financial Information
        if (!studentData.tuitionPayment) newErrors.tuitionPayment = "Payment method is required"
        break

      case 6: // Review & Submit
        if (!studentData.termsAccepted) newErrors.termsAccepted = "You must accept the terms"
        if (!studentData.privacyAccepted) newErrors.privacyAccepted = "You must accept the privacy policy"
        break
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleStepChange = (step: number) => {
    if (validateStep(currentStep)) {
      setCurrentStep(step)
    }
  }

  const handleComplete = () => {
    if (validateStep(currentStep)) {
      // Submit the application
      console.log("Application submitted:", studentData)
      alert("Application submitted successfully!")
    }
  }

  const updateStudentData = (field: keyof StudentData, value: any) => {
    setStudentData(prev => ({ ...prev, [field]: value }))
  }

  const updateContactData = (contact: ContactData) => {
    updateStudentData('contact', contact)
  }

  const updateAddressData = (address: AddressData) => {
    updateStudentData('address', address)
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <WizardStepContent step={steps[0]} isValid={!errors.firstName && !errors.lastName}>
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>
                  Please provide the student's basic personal information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <FormInput
                    label="First Name"
                    placeholder="John"
                    value={studentData.firstName}
                    onChange={(e) => updateStudentData('firstName', e.target.value)}
                    error={errors.firstName}
                    required
                  />
                  <FormInput
                    label="Last Name"
                    placeholder="Doe"
                    value={studentData.lastName}
                    onChange={(e) => updateStudentData('lastName', e.target.value)}
                    error={errors.lastName}
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <FormInput
                    label="Date of Birth"
                    type="date"
                    value={studentData.dateOfBirth}
                    onChange={(e) => updateStudentData('dateOfBirth', e.target.value)}
                    error={errors.dateOfBirth}
                    required
                  />
                  <FormSelect
                    label="Gender"
                    placeholder="Select gender"
                    value={studentData.gender}
                    onValueChange={(value) => updateStudentData('gender', value)}
                    options={[
                      { value: "male", label: "Male" },
                      { value: "female", label: "Female" },
                      { value: "other", label: "Other" },
                      { value: "prefer-not-to-say", label: "Prefer not to say" }
                    ]}
                    error={errors.gender}
                    required
                  />
                </div>

                <FormSelect
                  label="Nationality"
                  placeholder="Select nationality"
                  value={studentData.nationality}
                  onValueChange={(value) => updateStudentData('nationality', value)}
                  options={[
                    { value: "US", label: "United States" },
                    { value: "CA", label: "Canada" },
                    { value: "UK", label: "United Kingdom" },
                    { value: "AU", label: "Australia" },
                    { value: "DE", label: "Germany" },
                    { value: "FR", label: "France" },
                    { value: "other", label: "Other" }
                  ]}
                  error={errors.nationality}
                  required
                />
              </CardContent>
            </Card>
          </WizardStepContent>
        )

      case 1:
        return (
          <WizardStepContent step={steps[1]} isValid={!errors.previousSchool && !errors.gradeLevel}>
            <Card>
              <CardHeader>
                <CardTitle>Academic Background</CardTitle>
                <CardDescription>
                  Information about the student's previous education
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormInput
                  label="Previous School"
                  placeholder="Previous school name"
                  value={studentData.previousSchool}
                  onChange={(e) => updateStudentData('previousSchool', e.target.value)}
                  error={errors.previousSchool}
                  required
                />

                <div className="grid grid-cols-2 gap-4">
                  <FormSelect
                    label="Grade Level"
                    placeholder="Select grade level"
                    value={studentData.gradeLevel}
                    onValueChange={(value) => updateStudentData('gradeLevel', value)}
                    options={[
                      { value: "9", label: "Grade 9" },
                      { value: "10", label: "Grade 10" },
                      { value: "11", label: "Grade 11" },
                      { value: "12", label: "Grade 12" },
                      { value: "freshman", label: "Freshman" },
                      { value: "sophomore", label: "Sophomore" },
                      { value: "junior", label: "Junior" },
                      { value: "senior", label: "Senior" }
                    ]}
                    error={errors.gradeLevel}
                    required
                  />
                  <FormInput
                    label="GPA"
                    placeholder="3.5"
                    value={studentData.gpa}
                    onChange={(e) => updateStudentData('gpa', e.target.value)}
                    error={errors.gpa}
                    hint="Enter GPA on a 4.0 scale"
                    required
                  />
                </div>

                <FormTextarea
                  label="Academic Interests"
                  placeholder="Describe the student's academic interests and goals..."
                  value={studentData.academicInterests.join(', ')}
                  onChange={(e) => updateStudentData('academicInterests', e.target.value.split(', ').filter(Boolean))}
                  hint="Separate interests with commas"
                />

                <FormTextarea
                  label="Extracurricular Activities"
                  placeholder="List extracurricular activities, clubs, sports, etc..."
                  value={studentData.extracurricularActivities.join(', ')}
                  onChange={(e) => updateStudentData('extracurricularActivities', e.target.value.split(', ').filter(Boolean))}
                  hint="Separate activities with commas"
                />
              </CardContent>
            </Card>
          </WizardStepContent>
        )

      case 2:
        return (
          <WizardStepContent step={steps[2]} isValid={!errors.contactEmail && !errors.contactPhone}>
            <div className="space-y-6">
              <ContactForm
                title="Contact Information"
                description="Primary contact details and emergency contact"
                onContactChange={updateContactData}
                defaultContact={studentData.contact}
              />
              
              <AddressForm
                title="Address Information"
                description="Current residential address"
                onAddressChange={updateAddressData}
                defaultAddress={studentData.address}
              />
            </div>
          </WizardStepContent>
        )

      case 3:
        return (
          <WizardStepContent step={steps[3]} isValid={!errors.documents}>
            <Card>
              <CardHeader>
                <CardTitle>Required Documents</CardTitle>
                <CardDescription>
                  Please upload the following required documents
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <FileUpload
                    label="Academic Transcript"
                    accept=".pdf,.doc,.docx"
                    maxSize={5}
                    onFilesChange={(files) => updateStudentData('documents', files)}
                    uploadedFiles={studentData.documents}
                    required
                    error={errors.documents}
                    hint="Upload your most recent academic transcript"
                  />
                  
                  <FileUpload
                    label="Birth Certificate"
                    accept=".pdf,.jpg,.jpeg,.png"
                    maxSize={5}
                    onFilesChange={(files) => updateStudentData('documents', files)}
                    uploadedFiles={studentData.documents}
                    required
                    hint="Upload a copy of your birth certificate"
                  />
                  
                  <FileUpload
                    label="ID Document"
                    accept=".pdf,.jpg,.jpeg,.png"
                    maxSize={5}
                    onFilesChange={(files) => updateStudentData('documents', files)}
                    uploadedFiles={studentData.documents}
                    required
                    hint="Passport, driver's license, or government ID"
                  />
                  
                  <FileUpload
                    label="Letters of Recommendation"
                    accept=".pdf,.doc,.docx"
                    multiple
                    maxSize={5}
                    onFilesChange={(files) => updateStudentData('documents', files)}
                    uploadedFiles={studentData.documents}
                    hint="Optional: Letters from teachers or mentors"
                  />
                </div>
              </CardContent>
            </Card>
          </WizardStepContent>
        )

      case 4:
        return (
          <WizardStepContent step={steps[4]} isValid={!errors.program && !errors.startDate}>
            <Card>
              <CardHeader>
                <CardTitle>Program Selection</CardTitle>
                <CardDescription>
                  Choose your academic program and campus
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormSelect
                  label="Academic Program"
                  placeholder="Select your program"
                  value={studentData.program}
                  onValueChange={(value) => updateStudentData('program', value)}
                  options={[
                    { value: "computer-science", label: "Computer Science" },
                    { value: "engineering", label: "Engineering" },
                    { value: "business", label: "Business Administration" },
                    { value: "arts", label: "Liberal Arts" },
                    { value: "sciences", label: "Natural Sciences" },
                    { value: "medicine", label: "Pre-Medicine" },
                    { value: "law", label: "Pre-Law" }
                  ]}
                  error={errors.program}
                  required
                />

                <div className="grid grid-cols-2 gap-4">
                  <FormInput
                    label="Start Date"
                    type="date"
                    value={studentData.startDate}
                    onChange={(e) => updateStudentData('startDate', e.target.value)}
                    error={errors.startDate}
                    required
                  />
                  <FormSelect
                    label="Campus"
                    placeholder="Select campus"
                    value={studentData.campus}
                    onValueChange={(value) => updateStudentData('campus', value)}
                    options={[
                      { value: "main", label: "Main Campus" },
                      { value: "north", label: "North Campus" },
                      { value: "south", label: "South Campus" },
                      { value: "online", label: "Online Program" }
                    ]}
                    error={errors.campus}
                    required
                  />
                </div>
              </CardContent>
            </Card>
          </WizardStepContent>
        )

      case 5:
        return (
          <WizardStepContent step={steps[5]} isValid={!errors.tuitionPayment}>
            <Card>
              <CardHeader>
                <CardTitle>Financial Information</CardTitle>
                <CardDescription>
                  Tuition payment and scholarship information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormSelect
                  label="Tuition Payment Method"
                  placeholder="Select payment method"
                  value={studentData.tuitionPayment}
                  onValueChange={(value) => updateStudentData('tuitionPayment', value)}
                  options={[
                    { value: "full-payment", label: "Full Payment" },
                    { value: "installments", label: "Monthly Installments" },
                    { value: "financial-aid", label: "Financial Aid" },
                    { value: "scholarship", label: "Scholarship" }
                  ]}
                  error={errors.tuitionPayment}
                  required
                />

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="scholarship"
                    checked={studentData.scholarship}
                    onCheckedChange={(checked) => updateStudentData('scholarship', checked)}
                  />
                  <Label htmlFor="scholarship">I am applying for scholarships</Label>
                </div>

                {studentData.scholarship && (
                  <FormTextarea
                    label="Scholarship Details"
                    placeholder="Describe your scholarship application or financial need..."
                    value={studentData.scholarshipDetails}
                    onChange={(e) => updateStudentData('scholarshipDetails', e.target.value)}
                  />
                )}
              </CardContent>
            </Card>
          </WizardStepContent>
        )

      case 6:
        return (
          <WizardStepContent step={steps[6]} isValid={!errors.termsAccepted && !errors.privacyAccepted}>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Application Summary</CardTitle>
                  <CardDescription>
                    Please review all the information before submitting
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <h4 className="font-medium">Personal Information</h4>
                      <p className="text-sm text-muted-foreground">
                        {studentData.firstName} {studentData.lastName}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        DOB: {studentData.dateOfBirth}
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-medium">Academic Information</h4>
                      <p className="text-sm text-muted-foreground">
                        Previous School: {studentData.previousSchool}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        GPA: {studentData.gpa}
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-medium">Program Selection</h4>
                      <p className="text-sm text-muted-foreground">
                        Program: {studentData.program}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Start Date: {studentData.startDate}
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-medium">Documents</h4>
                      <p className="text-sm text-muted-foreground">
                        {studentData.documents.length} document(s) uploaded
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Agreements</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="terms"
                      checked={studentData.termsAccepted}
                      onCheckedChange={(checked) => updateStudentData('termsAccepted', checked)}
                    />
                    <div className="space-y-1">
                      <Label htmlFor="terms" className="text-sm font-medium">
                        I accept the terms and conditions
                      </Label>
                      <p className="text-xs text-muted-foreground">
                        By checking this box, you agree to the school's terms and conditions
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="privacy"
                      checked={studentData.privacyAccepted}
                      onCheckedChange={(checked) => updateStudentData('privacyAccepted', checked)}
                    />
                    <div className="space-y-1">
                      <Label htmlFor="privacy" className="text-sm font-medium">
                        I accept the privacy policy
                      </Label>
                      <p className="text-xs text-muted-foreground">
                        I consent to the collection and processing of my personal data
                      </p>
                    </div>
                  </div>

                  {errors.termsAccepted && (
                    <p className="text-sm text-destructive">{errors.termsAccepted}</p>
                  )}
                  {errors.privacyAccepted && (
                    <p className="text-sm text-destructive">{errors.privacyAccepted}</p>
                  )}
                </CardContent>
              </Card>
            </div>
          </WizardStepContent>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <GraduationCap className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold">Student Admission</h1>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Complete the admission process by filling out all required information. 
            You can save your progress and return later.
          </p>
        </div>

        <Wizard
          steps={steps}
          currentStep={currentStep}
          onStepChange={handleStepChange}
          onComplete={handleComplete}
          showProgress={true}
          allowBackNavigation={true}
          allowSkipSteps={false}
        >
          {renderStepContent()}
        </Wizard>
      </div>
    </div>
  )
}
