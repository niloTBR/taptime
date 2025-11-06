import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar } from '@/components/ui/calendar'
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
  ChevronDown,
  ArrowLeft,
  Globe,
  Award,
  Calendar as CalendarIcon,
  Heart,
  Plus,
  Trash2,
  Clock,
  Package,
  Zap
} from 'lucide-react'

const SignUpExpertPage = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    // Step 1: Personal Information (includes user fields)
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    location: '',
    gender: '',
    languagePreference: '',
    
    // Step 2: Professional & Expertise
    title: '',
    shortDescription: '',
    industry: '',
    expertise: [],
    
    // Step 3: Availability
    timezone: '',
    slotDuration: '',
    bufferTime: '',
    availableSlots: {},
    
    // Step 4: Session Types
    structuredSessions: [],
    flexibleConsultation: {
      enabled: true,
      basePrice: '',
      durations: [
        { duration: '15 min', price: '' },
        { duration: '30 min', price: '' },
        { duration: '45 min', price: '' }
      ]
    },
    
    // Step 5: Charity (Optional)
    charityName: '',
    charityWebsite: ''
  })

  const steps = [
    { step: 1, title: 'Personal Information', description: 'Tell us about yourself' },
    { step: 2, title: 'Professional & Expertise', description: 'Your professional background and expertise' },
    { step: 3, title: 'Set Your Availability', description: 'When you\'re available' },
    { step: 4, title: 'Session Types & Pricing', description: 'Create your session offerings' },
    { step: 5, title: 'Donate for charity', description: 'Optional charity support' }
  ]

  // Step 1: Personal Information options
  const countries = [
    'United States', 'Canada', 'United Kingdom', 'Germany', 'France', 'Australia', 
    'Singapore', 'Japan', 'UAE', 'India', 'Other'
  ]

  const genderOptions = [
    'Male', 'Female', 'Non-binary', 'Prefer not to say'
  ]

  const languageOptions = [
    'English', 'Arabic', 'English & Arabic'
  ]

  // Step 2: Expertise categories and tags
  const expertiseCategories = [
    {
      id: 'business-startups',
      title: 'Business & Startups',
      image: '/api/placeholder/150/100'
    },
    {
      id: 'top-experts',
      title: 'Top Experts',
      image: '/api/placeholder/150/100'
    },
    {
      id: 'career-professional',
      title: 'Career & Professional',
      image: '/api/placeholder/150/100'
    },
    {
      id: 'marketing-brand',
      title: 'Marketing & Brand',
      image: '/api/placeholder/150/100'
    },
    {
      id: 'tech-product',
      title: 'Tech & Product',
      image: '/api/placeholder/150/100'
    },
    {
      id: 'wellness-mental',
      title: 'Wellness & Mental Clarity',
      image: '/api/placeholder/150/100'
    }
  ]

  const expertiseTags = [
    'Leadership & Team Building',
    'Scaling Startups',
    'Fundraising & Pitching',
    'Exit Strategy & M&A'
  ]

  const industries = [
    'Fundraising & Pitching',
    'Leadership & Team Building',
    'Exit Strategy & M&A',
    'Music Production',
    'Blockchain Development',
    'Product Engineering',
    'SaaS Growth Strategy',
    'Artificial Intelligence & Machine Learning',
    'Human-Centered Design',
    'SEO & Performance Marketing',
    'Social Media Growth',
    'Content Creation & Monetization'
  ]

  // Step 3: Availability options
  const timezones = [
    'America/Los_Angeles (PST)',
    'America/New_York (EST)',
    'Europe/London (GMT)',
    'Europe/Berlin (CET)',
    'Asia/Dubai (GST)',
    'Asia/Singapore (SGT)',
    'Other'
  ]

  const durationOptions = [
    '15 min', '30 min', '45 min', '60 min'
  ]

  const bufferOptions = [
    '5 min', '10 min', '15 min', '30 min'
  ]

  // Step 4: Session options
  const sessionDurations = [
    { label: '15 min', value: '15' },
    { label: '30 min', value: '30' },
    { label: '45 min', value: '45' },
    { label: '60 min', value: '60' }
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

  const handleSubmit = () => {
    // Handle form submission
    console.log('Submitting expert application:', formData)
    setIsSubmitted(true)
  }

  // Session management functions
  const addStructuredSession = () => {
    setFormData(prev => ({
      ...prev,
      structuredSessions: [
        ...prev.structuredSessions,
        {
          id: `session-${Date.now()}`,
          title: '',
          description: '',
          duration: '15 min',
          price: ''
        }
      ]
    }))
  }

  const updateStructuredSession = (sessionId, field, value) => {
    setFormData(prev => ({
      ...prev,
      structuredSessions: prev.structuredSessions.map(session =>
        session.id === sessionId ? { ...session, [field]: value } : session
      )
    }))
  }

  const removeStructuredSession = (sessionId) => {
    setFormData(prev => ({
      ...prev,
      structuredSessions: prev.structuredSessions.filter(session => session.id !== sessionId)
    }))
  }

  const updateFlexiblePrice = (duration, price) => {
    setFormData(prev => ({
      ...prev,
      flexibleConsultation: {
        ...prev.flexibleConsultation,
        durations: prev.flexibleConsultation.durations.map(d =>
          d.duration === duration ? { ...d, price } : d
        )
      }
    }))
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
          
          {/* Step 1: Personal Information */}
          {currentStep === 1 && (
            <Card className="border-2 border-foreground shadow-lg">
              <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100 border-b">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  Professional Profile
                </CardTitle>
                <p className="text-sm text-gray-600 mt-2">Build your professional presence on TapTime</p>
              </CardHeader>
              <CardContent className="space-y-8 p-8">
                
                <div className="space-y-6">
                  
                  {/* First Name + Last Name */}
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">First Name *</label>
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className="w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">Last Name *</label>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        className="w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  {/* Email + Location */}
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">Email Address *</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                          placeholder="Enter your professional email"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">Location *</label>
                      <div className="relative">
                        <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <select
                          value={formData.location}
                          onChange={(e) => handleInputChange('location', e.target.value)}
                          className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all appearance-none bg-white"
                          required
                        >
                          <option value="">Select your country</option>
                          {countries.map(country => (
                            <option key={country} value={country}>{country}</option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Gender + Language Preference */}
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">Gender *</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <select
                          value={formData.gender}
                          onChange={(e) => handleInputChange('gender', e.target.value)}
                          className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all appearance-none bg-white"
                          required
                        >
                          <option value="">Select gender</option>
                          {genderOptions.map(gender => (
                            <option key={gender} value={gender}>{gender}</option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">Language Preference *</label>
                      <div className="relative">
                        <Globe className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <select
                          value={formData.languagePreference}
                          onChange={(e) => handleInputChange('languagePreference', e.target.value)}
                          className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all appearance-none bg-white"
                          required
                        >
                          <option value="">Select preferred language</option>
                          {languageOptions.map(language => (
                            <option key={language} value={language}>{language}</option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Password + Confirm Password */}
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">Password *</label>
                      <div className="relative">
                        <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="password"
                          value={formData.password}
                          onChange={(e) => handleInputChange('password', e.target.value)}
                          className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                          placeholder="Create secure password"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">Confirm Password *</label>
                      <div className="relative">
                        <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="password"
                          value={formData.confirmPassword}
                          onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                          className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                          placeholder="Confirm your password"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 2: Professional & Expertise */}
          {currentStep === 2 && (
            <Card className="border-2 border-foreground">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Professional & Expertise
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Professional Title */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Professional Title</label>
                  <div className="relative">
                    <Briefcase className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="e.g., Senior Product Manager, Marketing Director"
                      value={formData.title}
                      onChange={(e) => setFormData({...formData, title: e.target.value})}
                      className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gray-900 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Short Description */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Short Description</label>
                  <div className="relative">
                    <FileText className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                    <textarea
                      placeholder="Brief description of your background and expertise..."
                      value={formData.shortDescription}
                      onChange={(e) => setFormData({...formData, shortDescription: e.target.value})}
                      className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gray-900 focus:outline-none min-h-[100px] resize-none"
                    />
                  </div>
                </div>


                {/* Industry */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Industry</label>
                  <div className="relative">
                    <Briefcase className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                    <select
                      value={formData.industry}
                      onChange={(e) => setFormData({...formData, industry: e.target.value})}
                      className="w-full pl-10 pr-10 py-3 border-2 border-gray-200 rounded-lg focus:border-gray-900 focus:outline-none appearance-none"
                    >
                      <option value="">Select your industry</option>
                      <option value="business-startups">Business & Startups</option>
                      <option value="technology-software">Technology & Software</option>
                      <option value="marketing-brand">Marketing & Brand</option>
                      <option value="career-professional">Career & Professional Development</option>
                      <option value="finance-investment">Finance & Investment</option>
                      <option value="healthcare-wellness">Healthcare & Wellness</option>
                      <option value="creative-design">Creative & Design</option>
                      <option value="education-training">Education & Training</option>
                      <option value="real-estate">Real Estate</option>
                      <option value="legal-consulting">Legal & Consulting</option>
                      <option value="other">Other</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray-400" />
                  </div>
                </div>

                {/* Expertise */}
                <div className="space-y-3">
                  <label className="text-sm font-medium">Areas of Expertise</label>
                  <p className="text-xs text-gray-500">Select all areas that apply to your expertise</p>
                  <div className="grid grid-cols-2 gap-3 max-h-48 overflow-y-auto p-2 border border-gray-200 rounded-lg">
                    {[
                      'Leadership & Team Building',
                      'Scaling Startups', 
                      'Fundraising & Pitching',
                      'Product Development',
                      'Marketing Strategy',
                      'Data Science & Analytics',
                      'Software Development', 
                      'UX/UI Design',
                      'Financial Planning',
                      'Career Coaching',
                      'Content Creation',
                      'Public Speaking',
                      'Project Management',
                      'Digital Marketing',
                      'Business Strategy',
                      'Sales & Customer Success',
                      'Operations & Process Improvement',
                      'Legal & Compliance',
                      'Human Resources',
                      'Other'
                    ].map(skill => (
                      <label
                        key={skill}
                        className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={formData.expertise.includes(skill)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setFormData({...formData, expertise: [...formData.expertise, skill]})
                            } else {
                              setFormData({...formData, expertise: formData.expertise.filter(s => s !== skill)})
                            }
                          }}
                          className="w-4 h-4 text-gray-900 border-gray-300 rounded focus:ring-gray-900"
                        />
                        <span className="text-sm">{skill}</span>
                      </label>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500">Selected: {formData.expertise.length} areas</p>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Set Your Availability */}
          {currentStep === 3 && (
            <Card className="border-2 border-foreground">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalendarIcon className="w-5 h-5" />
                  Set Your Availability
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center py-12">
                <CalendarIcon className="w-16 h-16 text-gray-400 mb-4" />
                <h3 className="text-lg font-medium mb-2">Connect with Calendly</h3>
                <p className="text-sm text-gray-600 mb-6 text-center">
                  Sync your availability with Calendly to manage your booking schedule
                </p>
                <Button 
                  variant="outline" 
                  className="border-2 border-gray-300 hover:border-gray-900 px-6"
                >
                  <CalendarIcon className="w-4 h-4 mr-2" />
                  Connect Calendly
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Step 4: Session Types & Pricing */}
          {currentStep === 4 && (
            <Card className="border-2 border-foreground">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5" />
                  Session Types & Pricing
                </CardTitle>
                <p className="text-sm text-gray-600 mt-2">
                  Create the session types that clients will see when booking with you. You can always modify these later.
                </p>
              </CardHeader>
              <CardContent className="space-y-8">
                
                {/* Structured Sessions */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium">Structured Sessions</h3>
                    <Button
                      type="button"
                      onClick={addStructuredSession}
                      variant="outline"
                      size="sm"
                      className="border-2 border-gray-300 hover:border-gray-900"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Add Session
                    </Button>
                  </div>
                  <p className="text-sm text-gray-600">
                    Pre-defined consultation types with specific topics and durations
                  </p>
                  
                  {formData.structuredSessions.map((session) => (
                    <Card key={session.id} className="border border-gray-200">
                      <CardContent className="p-4 space-y-4">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium text-sm">Session Details</h4>
                          <Button
                            type="button"
                            onClick={() => removeStructuredSession(session.id)}
                            variant="ghost"
                            size="sm"
                            className="text-red-500 hover:text-red-700"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium mb-2 block">Session Title*</label>
                            <input
                              type="text"
                              value={session.title}
                              onChange={(e) => updateStructuredSession(session.id, 'title', e.target.value)}
                              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                              placeholder="Product Strategy Review"
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            <div>
                              <label className="text-sm font-medium mb-2 block">Duration</label>
                              <select
                                value={session.duration}
                                onChange={(e) => updateStructuredSession(session.id, 'duration', e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                              >
                                <option value="15 min">15 min</option>
                                <option value="30 min">30 min</option>
                                <option value="45 min">45 min</option>
                                <option value="60 min">60 min</option>
                              </select>
                            </div>
                            <div>
                              <label className="text-sm font-medium mb-2 block">Price ($)</label>
                              <input
                                type="number"
                                value={session.price}
                                onChange={(e) => updateStructuredSession(session.id, 'price', e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                                placeholder="500"
                              />
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <label className="text-sm font-medium mb-2 block">Description</label>
                          <textarea
                            value={session.description}
                            onChange={(e) => updateStructuredSession(session.id, 'description', e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 h-20 resize-none"
                            placeholder="Get clarity on whether you've achieved PMF and what to focus on next"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                  
                  {formData.structuredSessions.length === 0 && (
                    <div className="text-center py-8 border-2 border-dashed border-gray-300 rounded-lg">
                      <Clock className="w-8 h-8 mx-auto text-gray-400 mb-2" />
                      <p className="text-sm text-gray-500">No structured sessions yet</p>
                      <p className="text-xs text-gray-400">Add pre-defined consultation types</p>
                    </div>
                  )}
                </div>

                {/* Flexible Consultation */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">General Consultation</h3>
                  <p className="text-sm text-gray-600">
                    Open-ended consultation where clients choose the duration
                  </p>
                  
                  <Card className="border border-gray-200">
                    <CardContent className="p-4 space-y-4">
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={formData.flexibleConsultation.enabled}
                          onChange={(e) => setFormData(prev => ({
                            ...prev,
                            flexibleConsultation: {
                              ...prev.flexibleConsultation,
                              enabled: e.target.checked
                            }
                          }))}
                          className="w-4 h-4 text-gray-900 border-gray-300 rounded focus:ring-gray-900"
                        />
                        <label className="text-sm font-medium">Enable general consultation</label>
                      </div>
                      
                      {formData.flexibleConsultation.enabled && (
                        <div className="space-y-3">
                          <label className="text-sm font-medium block">Set pricing for each duration:</label>
                          {formData.flexibleConsultation.durations.map((duration) => (
                            <div key={duration.duration} className="flex items-center gap-4">
                              <span className="text-sm w-16">{duration.duration}</span>
                              <div className="flex items-center">
                                <span className="text-lg font-medium mr-2">$</span>
                                <input
                                  type="number"
                                  value={duration.price}
                                  onChange={(e) => updateFlexiblePrice(duration.duration, e.target.value)}
                                  className="w-24 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-center"
                                  placeholder="500"
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>

                {/* Platform Fee Info */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-sm mb-2">Platform Fee</h4>
                  <p className="text-xs text-gray-600">
                    TapTime charges a 20% platform fee on all sessions. This includes payment processing, support, and platform maintenance.
                  </p>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 5: Donate for charity (Optional) */}
          {currentStep === 5 && (
            <Card className="border-2 border-foreground">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  Donate for charity (Optional)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center space-y-4">
                  <p className="text-gray-600">
                    Inspire others by supporting a cause you love (You'll manage donations directly — TapTime doesn't handle transactions.)
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Charity Name</label>
                    <input
                      type="text"
                      value={formData.charityName}
                      onChange={(e) => handleInputChange('charityName', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                      placeholder="Charity Name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Charity Website URL</label>
                    <input
                      type="url"
                      value={formData.charityWebsite}
                      onChange={(e) => handleInputChange('charityWebsite', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                      placeholder="Charity Website URL"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          )}


          {/* Navigation Buttons */}
          {!isSubmitted && (
            <div className="flex justify-between pt-6">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
                className="rounded-full px-6 border-2 border-foreground"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              
              <Button
                onClick={currentStep === 5 ? handleSubmit : nextStep}
                className={`rounded-full px-6 ${
                  currentStep === 5 
                    ? 'bg-green-600 hover:bg-green-700' 
                    : 'bg-gray-900 hover:bg-gray-800'
                }`}
              >
                {currentStep === 5 ? 'Submit Application' : 'Next'}
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          )}

          {/* Success Message Overlay */}
          {isSubmitted && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <Card className="max-w-md w-full mx-4 border-2 border-green-500">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8 text-green-600" />
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-semibold mb-2">Application Submitted!</h2>
                    <p className="text-muted-foreground">
                      Thank you for applying to become a TapTime expert. We're reviewing your application and will get back to you soon.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium mb-3">What happens next?</h3>
                    <div className="space-y-2 text-sm text-left">
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                          <span className="text-xs font-medium text-green-600">1</span>
                        </div>
                        <span>Our team reviews your application (2-3 days)</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                          <span className="text-xs font-medium text-green-600">2</span>
                        </div>
                        <span>We may schedule a brief interview call</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                          <span className="text-xs font-medium text-green-600">3</span>
                        </div>
                        <span>Once approved, you'll get access to your dashboard</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <Button 
                      className="w-full rounded-full bg-green-600 hover:bg-green-700"
                      onClick={() => window.location.href = '/'}
                    >
                      <Globe className="w-4 h-4 mr-2" />
                      Back to Homepage
                    </Button>
                    <Button 
                      variant="outline"
                      className="w-full rounded-full border-2 border-foreground"
                      onClick={() => window.location.href = '/join-expert'}
                    >
                      <Award className="w-4 h-4 mr-2" />
                      Learn More About Experts
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default SignUpExpertPage