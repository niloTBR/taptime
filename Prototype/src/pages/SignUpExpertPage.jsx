import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Crown, 
  User, 
  Mail, 
  Lock, 
  Phone, 
  MapPin, 
  Briefcase,
  GraduationCap,
  DollarSign,
  FileText,
  Upload,
  Check,
  ChevronRight,
  ArrowLeft,
  Globe,
  Award,
  Calendar,
  Zap
} from 'lucide-react'

const SignUpExpertPage = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Basic Info
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    
    // Professional Info
    location: '',
    currentTitle: '',
    currentCompany: '',
    industry: '',
    experience: '',
    education: '',
    linkedinUrl: '',
    
    // Expertise & Services
    expertiseAreas: [],
    serviceDescription: '',
    sessionTypes: [],
    availabilityHours: '',
    
    // Rates & Verification
    hourlyRate: '',
    minimumSession: '',
    verificationDocs: [],
    bio: '',
    achievements: []
  })

  const steps = [
    { step: 1, title: 'Basic Information', description: 'Tell us about yourself' },
    { step: 2, title: 'Professional Background', description: 'Your experience and credentials' },
    { step: 3, title: 'Expertise & Services', description: 'What you can help with' },
    { step: 4, title: 'Rates & Verification', description: 'Set your rates and verify identity' },
    { step: 5, title: 'Application Submitted', description: 'We\'ll review your application' }
  ]

  const industries = [
    'Technology', 'Finance', 'Healthcare', 'Marketing', 'Design', 'Business',
    'Consulting', 'Real Estate', 'Legal', 'Media', 'Education', 'Other'
  ]

  const expertiseAreas = [
    'Business Strategy', 'Marketing & Growth', 'Product Management', 'Fundraising',
    'Sales & BD', 'Leadership & Management', 'Technology & Engineering', 'UX/UI Design',
    'Finance & Accounting', 'Operations', 'Legal & Compliance', 'HR & Recruiting'
  ]

  const sessionTypes = [
    'Strategy Sessions', 'Mentorship Calls', 'Portfolio Reviews', 'Mock Interviews',
    'Pitch Practice', 'Technical Reviews', 'Career Guidance', 'Problem Solving'
  ]

  const availabilityOptions = [
    'Weekdays only (9 AM - 5 PM)',
    'Evenings & weekends',
    'Flexible schedule',
    'International time zones available'
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
    if (currentStep < 5) {
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
                <h1 className="text-xl font-semibold">Sign Up As Expert</h1>
                <p className="text-sm text-muted-foreground">
                  Join TapTime to share your expertise and help others succeed
                </p>
              </div>
            </div>
            <Badge variant="secondary" className="bg-purple-100 text-purple-700">
              <Crown className="w-3 h-3 mr-1" />
              Expert Account
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
                      ? 'bg-purple-600 text-white' 
                      : 'bg-gray-200 text-gray-500'
                  }`}>
                    {currentStep > step.step ? <Check className="w-4 h-4" /> : step.step}
                  </div>
                  <div className="hidden sm:block">
                    <div className={`text-sm font-medium ${
                      currentStep >= step.step ? 'text-purple-600' : 'text-gray-500'
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
                    currentStep > step.step ? 'bg-purple-600' : 'bg-gray-200'
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
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Sarah"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Johnson"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="sarah.johnson@example.com"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Password</label>
                    <input
                      type="password"
                      value={formData.password}
                      onChange={(e) => handleInputChange('password', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="••••••••"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Confirm Password</label>
                    <input
                      type="password"
                      value={formData.confirmPassword}
                      onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="••••••••"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 2: Professional Background */}
          {currentStep === 2 && (
            <Card className="border-2 border-foreground">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5" />
                  Professional Background
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Location</label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="San Francisco, CA"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Current Title</label>
                    <input
                      type="text"
                      value={formData.currentTitle}
                      onChange={(e) => handleInputChange('currentTitle', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="VP of Product"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Current Company</label>
                    <input
                      type="text"
                      value={formData.currentCompany}
                      onChange={(e) => handleInputChange('currentCompany', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="TechCorp Inc"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Industry</label>
                  <select
                    value={formData.industry}
                    onChange={(e) => handleInputChange('industry', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
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
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="">Select experience level</option>
                    <option value="3-5">3-5 years</option>
                    <option value="6-10">6-10 years</option>
                    <option value="10-15">10-15 years</option>
                    <option value="15+">15+ years</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Education</label>
                  <input
                    type="text"
                    value={formData.education}
                    onChange={(e) => handleInputChange('education', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="MBA from Stanford University"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">LinkedIn Profile</label>
                  <input
                    type="url"
                    value={formData.linkedinUrl}
                    onChange={(e) => handleInputChange('linkedinUrl', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Expertise & Services */}
          {currentStep === 3 && (
            <Card className="border-2 border-foreground">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Expertise & Services
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-3">
                    What areas can you provide expertise in? (Select all that apply)
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {expertiseAreas.map(area => (
                      <button
                        key={area}
                        onClick={() => handleArrayToggle('expertiseAreas', area)}
                        className={`p-3 text-sm text-left border rounded-lg transition-colors ${
                          formData.expertiseAreas.includes(area)
                            ? 'border-purple-500 bg-purple-50 text-purple-700'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        {area}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Service Description</label>
                  <textarea
                    value={formData.serviceDescription}
                    onChange={(e) => handleInputChange('serviceDescription', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg h-24 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Describe what you can help with and your unique approach..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-3">
                    What types of sessions do you offer? (Select all that apply)
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {sessionTypes.map(type => (
                      <button
                        key={type}
                        onClick={() => handleArrayToggle('sessionTypes', type)}
                        className={`p-3 text-sm text-left border rounded-lg transition-colors ${
                          formData.sessionTypes.includes(type)
                            ? 'border-purple-500 bg-purple-50 text-purple-700'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-3">Availability</label>
                  <div className="space-y-2">
                    {availabilityOptions.map(option => (
                      <button
                        key={option}
                        onClick={() => handleInputChange('availabilityHours', option)}
                        className={`w-full p-3 text-left border rounded-lg transition-colors ${
                          formData.availabilityHours === option
                            ? 'border-purple-500 bg-purple-50 text-purple-700'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 4: Rates & Verification */}
          {currentStep === 4 && (
            <Card className="border-2 border-foreground">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5" />
                  Rates & Verification
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Hourly Rate (USD)</label>
                    <input
                      type="number"
                      value={formData.hourlyRate}
                      onChange={(e) => handleInputChange('hourlyRate', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Minimum Session</label>
                    <select
                      value={formData.minimumSession}
                      onChange={(e) => handleInputChange('minimumSession', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="">Select minimum</option>
                      <option value="15min">15 minutes</option>
                      <option value="30min">30 minutes</option>
                      <option value="60min">60 minutes</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Professional Bio</label>
                  <textarea
                    value={formData.bio}
                    onChange={(e) => handleInputChange('bio', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Write a compelling bio that highlights your expertise, achievements, and what makes you unique..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-3">Verification Documents</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                    <p className="text-sm text-gray-600 mb-2">
                      Upload documents to verify your identity and credentials
                    </p>
                    <p className="text-xs text-gray-400">
                      Accepted: Government ID, Professional Certificates, LinkedIn verification
                    </p>
                    <Button variant="outline" className="mt-4">
                      <Upload className="w-4 h-4 mr-2" />
                      Upload Documents
                    </Button>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-900 mb-2">Application Review Process</h4>
                  <div className="text-sm text-blue-800 space-y-1">
                    <p>• We review all expert applications within 2-3 business days</p>
                    <p>• Our team verifies credentials and professional background</p>
                    <p>• You'll receive an email with next steps once approved</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 5: Application Submitted */}
          {currentStep === 5 && (
            <Card className="border-2 border-green-500">
              <CardContent className="p-12 text-center space-y-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                
                <div>
                  <h2 className="text-2xl font-semibold mb-2">Application Submitted!</h2>
                  <p className="text-muted-foreground">
                    Thank you for applying to become a TapTime expert. We're reviewing your application and will get back to you soon.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-medium mb-4">What happens next?</h3>
                  <div className="space-y-3 text-sm text-left">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                        <span className="text-xs font-medium text-purple-600">1</span>
                      </div>
                      <span>Our team reviews your application and credentials (2-3 days)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                        <span className="text-xs font-medium text-purple-600">2</span>
                      </div>
                      <span>We may schedule a brief interview call</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                        <span className="text-xs font-medium text-purple-600">3</span>
                      </div>
                      <span>Once approved, you'll get access to your expert dashboard</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    variant="outline"
                    className="flex-1 rounded-full border-2 border-foreground"
                    onClick={() => window.location.href = '/join-expert'}
                  >
                    <Award className="w-4 h-4 mr-2" />
                    Learn More About Experts
                  </Button>
                  <Button 
                    className="flex-1 rounded-full bg-purple-600 hover:bg-purple-700"
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
          {currentStep < 5 && (
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
                className="rounded-full px-6 bg-purple-600 hover:bg-purple-700"
              >
                {currentStep === 4 ? 'Submit Application' : 'Continue'}
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default SignUpExpertPage