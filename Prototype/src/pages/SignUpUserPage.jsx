import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
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
    // Basic Info
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    
    // Profile Info
    location: '',
    company: '',
    jobTitle: '',
    industry: '',
    experience: '',
    
    // Goals & Interests
    primaryGoal: '',
    interests: [],
    expertiseNeeded: [],
    budget: '',
    sessionFrequency: ''
  })

  const steps = [
    { step: 1, title: 'Basic Information', description: 'Tell us about yourself' },
    { step: 2, title: 'Professional Profile', description: 'Your work and experience' },
    { step: 3, title: 'Goals & Interests', description: 'What you want to achieve' },
    { step: 4, title: 'Welcome!', description: 'Your account is ready' }
  ]

  const industries = [
    'Technology', 'Finance', 'Healthcare', 'Marketing', 'Design', 'Business',
    'Education', 'Consulting', 'Real Estate', 'Legal', 'Media', 'Other'
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

  const budgetRanges = [
    '$50 - $100 per session',
    '$100 - $250 per session', 
    '$250 - $500 per session',
    '$500+ per session'
  ]

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
    if (currentStep < 4) {
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
          
          {/* Step 1: Basic Information */}
          {currentStep === 1 && (
            <Card className="border-2 border-foreground">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Basic Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
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
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="john.smith@example.com"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Password</label>
                    <input
                      type="password"
                      value={formData.password}
                      onChange={(e) => handleInputChange('password', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="••••••••"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Confirm Password</label>
                    <input
                      type="password"
                      value={formData.confirmPassword}
                      onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="••••••••"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number (Optional)</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 2: Professional Profile */}
          {currentStep === 2 && (
            <Card className="border-2 border-foreground">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5" />
                  Professional Profile
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Location</label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="San Francisco, CA"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Company</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Acme Corp"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Job Title</label>
                    <input
                      type="text"
                      value={formData.jobTitle}
                      onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Product Manager"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Industry</label>
                  <select
                    value={formData.industry}
                    onChange={(e) => handleInputChange('industry', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select your industry</option>
                    {industries.map(industry => (
                      <option key={industry} value={industry}>{industry}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Years of Experience</label>
                  <select
                    value={formData.experience}
                    onChange={(e) => handleInputChange('experience', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select experience level</option>
                    <option value="0-2">0-2 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="6-10">6-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Goals & Interests */}
          {currentStep === 3 && (
            <Card className="border-2 border-foreground">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Goals & Interests
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-3">What's your primary goal?</label>
                  <div className="space-y-2">
                    {primaryGoals.map(goal => (
                      <button
                        key={goal}
                        onClick={() => handleInputChange('primaryGoal', goal)}
                        className={`w-full p-3 text-left border rounded-lg transition-colors ${
                          formData.primaryGoal === goal
                            ? 'border-blue-500 bg-blue-50 text-blue-700'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        {goal}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-3">
                    What expertise are you looking for? (Select all that apply)
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {expertiseAreas.map(area => (
                      <button
                        key={area}
                        onClick={() => handleArrayToggle('expertiseNeeded', area)}
                        className={`p-3 text-sm text-left border rounded-lg transition-colors ${
                          formData.expertiseNeeded.includes(area)
                            ? 'border-blue-500 bg-blue-50 text-blue-700'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        {area}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-3">Session Budget</label>
                  <div className="space-y-2">
                    {budgetRanges.map(range => (
                      <button
                        key={range}
                        onClick={() => handleInputChange('budget', range)}
                        className={`w-full p-3 text-left border rounded-lg transition-colors ${
                          formData.budget === range
                            ? 'border-blue-500 bg-blue-50 text-blue-700'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        {range}
                      </button>
                    ))}
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
                {currentStep === 3 ? 'Create Account' : 'Continue'}
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