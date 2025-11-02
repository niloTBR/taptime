import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
  DropdownMenuLabel,
  DropdownMenuSeparator
} from '@/components/ui/dropdown-menu'
import { 
  User, 
  Mail, 
  Lock, 
  Phone, 
  MapPin, 
  Briefcase,
  Target,
  Star,
  Check,
  ChevronRight,
  ArrowLeft,
  Globe
} from 'lucide-react'

const SignUpUserPage = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Already captured from initial signup
    firstName: 'John', // Pre-filled from signup
    lastName: 'Smith', // Pre-filled from signup  
    email: 'john.smith@example.com', // Pre-filled from signup
    
    // Step 1: Basic onboarding info
    phone: '',
    bio: '',
    country: '',
    
    // Step 2: Account Security
    password: '',
    confirmPassword: '',
    
    // Step 3: Goals and interests
    primaryGoals: [], // Changed to array for multiselect
    expertiseNeeded: [],
    budgetRange: [100] // Slider value, starting at $100
  })

  const steps = [
    { step: 1, title: 'Basic Information', description: 'Complete your profile' },
    { step: 2, title: 'Account Security', description: 'Create your password' },
    { step: 3, title: 'Goals & Interests', description: 'Help us match you with experts' },
    { step: 4, title: 'Welcome!', description: 'Your account is ready' }
  ]

  const countries = [
    'United States', 'Canada', 'United Kingdom', 'Australia', 'Germany', 'France',
    'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Switzerland', 'Singapore',
    'Japan', 'South Korea', 'India', 'Brazil', 'Mexico', 'Spain', 'Italy', 'Other'
  ]

  const primaryGoals = [
    'Start a new business',
    'Grow my existing business',
    'Advance my career',
    'Learn new skills',
    'Get expert advice on a project',
    'Network with industry professionals'
  ]

  const expertiseAreas = [
    'Business Strategy', 'Marketing & Growth', 'Product Development', 'Fundraising',
    'Sales', 'Leadership', 'Technology', 'Design', 'Finance', 'Operations'
  ]

  const formatBudget = (value) => {
    if (value >= 500) return '$500+'
    return `$${value}`
  }

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleArrayToggle = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }))
  }

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-6 px-4 border-b">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => window.history.back()}
                className="rounded-full"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <div>
                <h1 className="text-xl font-semibold">Sign Up As User</h1>
                <p className="text-sm text-muted-foreground">
                  Join TapTime to connect with industry experts
                </p>
              </div>
            </div>
            <Badge variant="secondary" className="bg-blue-100 text-blue-700">
              <User className="w-3 h-3 mr-1" />
              User Account
            </Badge>
          </div>
        </div>
      </section>

      {/* Progress Bar */}
      <section className="py-4 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.step} className="flex items-center">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    currentStep >= step.step 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-200 text-gray-500'
                  }`}>
                    {currentStep > step.step ? <Check className="w-4 h-4" /> : step.step}
                  </div>
                  <div className="hidden sm:block">
                    <div className={`text-sm font-medium ${
                      currentStep >= step.step ? 'text-blue-600' : 'text-gray-500'
                    }`}>
                      {step.title}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {step.description}
                    </div>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-12 h-px mx-4 ${
                    currentStep > step.step ? 'bg-blue-600' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-2xl">
          
          {/* Step 1: Tell us about yourself */}
          {currentStep === 1 && (
            <Card className="border-2 border-foreground">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Tell us about yourself
                </CardTitle>
                <p className="text-sm text-muted-foreground mt-2">
                  Welcome {formData.firstName}! Help us personalize your experience.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Smith"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    className="w-full p-3 border border-gray-200 rounded-lg bg-gray-50 text-gray-500 cursor-not-allowed"
                    placeholder="john.smith@example.com"
                    disabled
                    readOnly
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Country</label>
                  <select
                    value={formData.country}
                    onChange={(e) => handleInputChange('country', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select your country</option>
                    {countries.map(country => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Short Bio</label>
                  <textarea
                    value={formData.bio}
                    onChange={(e) => handleInputChange('bio', e.target.value)}
                    rows={3}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tell us a bit about yourself, your background, or what you're working on..."
                  />
                </div>

              </CardContent>
            </Card>
          )}

          {/* Step 2: Account Security */}
          {currentStep === 2 && (
            <Card className="border-2 border-foreground">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="w-5 h-5" />
                  Account Security
                </CardTitle>
                <p className="text-sm text-muted-foreground mt-2">
                  Create a secure password for your account
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Password <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="password"
                      value={formData.password}
                      onChange={(e) => handleInputChange('password', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="••••••••"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Confirm Password <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="password"
                      value={formData.confirmPassword}
                      onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="••••••••"
                    />
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  <p>Password must be at least 8 characters long and include:</p>
                  <ul className="list-disc list-inside mt-1 space-y-1">
                    <li>At least one uppercase letter</li>
                    <li>At least one lowercase letter</li>
                    <li>At least one number</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Your goals and interests */}
          {currentStep === 3 && (
            <Card className="border-2 border-foreground">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Your goals and interests
                </CardTitle>
                <p className="text-sm text-muted-foreground mt-2">
                  Help us match you with the right experts
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Primary Goals - Dropdown Multiselect */}
                <div>
                  <label className="block text-sm font-medium mb-3">Primary Goals</label>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="w-full justify-between">
                        {formData.primaryGoals.length === 0 
                          ? "Select your goals..." 
                          : `${formData.primaryGoals.length} goal${formData.primaryGoals.length > 1 ? 's' : ''} selected`
                        }
                        <ChevronRight className="h-4 w-4 transform rotate-90" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-80 max-h-64 overflow-y-auto">
                      <DropdownMenuLabel>Choose all that apply</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      {primaryGoals.map(goal => (
                        <DropdownMenuCheckboxItem
                          key={goal}
                          checked={formData.primaryGoals.includes(goal)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              handleInputChange('primaryGoals', [...formData.primaryGoals, goal])
                            } else {
                              handleInputChange('primaryGoals', formData.primaryGoals.filter(g => g !== goal))
                            }
                          }}
                          onSelect={(e) => e.preventDefault()}
                          className="cursor-pointer"
                        >
                          {goal}
                        </DropdownMenuCheckboxItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                  {formData.primaryGoals.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1">
                      {formData.primaryGoals.map(goal => (
                        <Badge key={goal} variant="secondary" className="text-xs">
                          {goal}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>

                {/* Expertise Areas - Dropdown Multiselect */}
                <div>
                  <label className="block text-sm font-medium mb-3">Expertise Areas</label>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="w-full justify-between">
                        {formData.expertiseNeeded.length === 0 
                          ? "Select expertise areas..." 
                          : `${formData.expertiseNeeded.length} area${formData.expertiseNeeded.length > 1 ? 's' : ''} selected`
                        }
                        <ChevronRight className="h-4 w-4 transform rotate-90" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-80 max-h-64 overflow-y-auto">
                      <DropdownMenuLabel>Choose all that apply</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      {expertiseAreas.map(area => (
                        <DropdownMenuCheckboxItem
                          key={area}
                          checked={formData.expertiseNeeded.includes(area)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              handleInputChange('expertiseNeeded', [...formData.expertiseNeeded, area])
                            } else {
                              handleInputChange('expertiseNeeded', formData.expertiseNeeded.filter(e => e !== area))
                            }
                          }}
                          onSelect={(e) => e.preventDefault()}
                          className="cursor-pointer"
                        >
                          {area}
                        </DropdownMenuCheckboxItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                  {formData.expertiseNeeded.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1">
                      {formData.expertiseNeeded.map(area => (
                        <Badge key={area} variant="secondary" className="text-xs">
                          {area}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>

                {/* Budget Range - Slider */}
                <div>
                  <label className="block text-sm font-medium mb-3">
                    Session Budget: {formatBudget(formData.budgetRange[0])} per session
                  </label>
                  <div className="px-4">
                    <Slider
                      value={formData.budgetRange}
                      onValueChange={(value) => handleInputChange('budgetRange', value)}
                      max={500}
                      min={50}
                      step={25}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-2">
                      <span>$50</span>
                      <span>$150</span>
                      <span>$250</span>
                      <span>$350</span>
                      <span>$500+</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 4: Welcome */}
          {currentStep === 4 && (
            <Card className="border-2 border-green-500">
              <CardContent className="p-12 text-center space-y-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                
                <div>
                  <h2 className="text-2xl font-semibold mb-2">Welcome to TapTime!</h2>
                  <p className="text-muted-foreground">
                    Your account has been created successfully. You can now start browsing and booking sessions with experts.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-medium mb-4">What's Next?</h3>
                  <div className="space-y-3 text-sm text-left">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-xs font-medium text-blue-600">1</span>
                      </div>
                      <span>Browse our expert directory to find the right match</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-xs font-medium text-blue-600">2</span>
                      </div>
                      <span>Book your first session with an expert</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-xs font-medium text-blue-600">3</span>
                      </div>
                      <span>Get personalized advice and achieve your goals</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="flex-1 rounded-full bg-blue-600 hover:bg-blue-700"
                    onClick={() => window.location.href = '/browse'}
                  >
                    Browse Experts
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button 
                    variant="outline"
                    className="flex-1 rounded-full border-2 border-foreground"
                    onClick={() => window.location.href = '/'}
                  >
                    <Globe className="w-4 h-4 mr-2" />
                    Back to Homepage
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Navigation Buttons */}
          {currentStep < 4 && (
            <div className="flex justify-between pt-6">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
                className="rounded-full px-6 border-2 border-foreground"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>
              
              <Button
                onClick={nextStep}
                className="rounded-full px-6 bg-blue-600 hover:bg-blue-700"
              >
                {currentStep === 1 ? 'Continue' : currentStep === 2 ? 'Continue' : 'Create Account'}
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default SignUpUserPage