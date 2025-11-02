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
  ArrowLeft,
  Globe,
  Award,
  Calendar as CalendarIcon,
  Heart,
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
    title: '',
    shortDescription: '',
    location: '',
    gender: '',
    languagePreference: '',
    
    // Step 2: Expertise & Industries
    expertiseCategories: [],
    expertiseTags: [],
    industries: [],
    
    // Step 3: Availability
    timezone: '',
    slotDuration: '',
    bufferTime: '',
    availableSlots: {},
    
    // Step 4: Consultation Charges
    individualSessionFee: '',
    individualSessionDuration: '',
    bundleSessionFee: '',
    bundleSessionCount: '',
    
    // Step 5: Charity (Optional)
    charityName: '',
    charityWebsite: ''
  })

  const steps = [
    { step: 1, title: 'Personal Information', description: 'Tell us about yourself' },
    { step: 2, title: 'Expertise', description: 'Your areas of expertise' },
    { step: 3, title: 'Set Your Availability', description: 'When you\'re available' },
    { step: 4, title: 'Manage Consultation Charges', description: 'Set your fees' },
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

  const bundleSessionCounts = [
    { label: '3 sessions', value: '3' },
    { label: '5 sessions', value: '5' },
    { label: '8 sessions', value: '8' },
    { label: '10 sessions', value: '10' }
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
            <Card className="border-2 border-foreground">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Basic Account Info */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                      placeholder="Sarah"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
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
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
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
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                      placeholder="••••••••"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Confirm Password</label>
                    <input
                      type="password"
                      value={formData.confirmPassword}
                      onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                      placeholder="••••••••"
                    />
                  </div>
                </div>

                {/* Expert-specific fields */}
                <div>
                  <label className="block text-sm font-medium mb-2">Title*</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                    placeholder="Type Here..."
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Short Description*
                    <span className="text-xs text-gray-500 ml-2">100 characters</span>
                  </label>
                  <textarea
                    value={formData.shortDescription}
                    onChange={(e) => handleInputChange('shortDescription', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 h-24 resize-none"
                    placeholder="Type Here..."
                    maxLength={100}
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Location*</label>
                    <select
                      value={formData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                      required
                    >
                      <option value="">Country name</option>
                      {countries.map(country => (
                        <option key={country} value={country}>{country}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Gender*</label>
                    <select
                      value={formData.gender}
                      onChange={(e) => handleInputChange('gender', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                      required
                    >
                      <option value="">Gender</option>
                      {genderOptions.map(gender => (
                        <option key={gender} value={gender}>{gender}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Language Preference*</label>
                  <select
                    value={formData.languagePreference}
                    onChange={(e) => handleInputChange('languagePreference', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                    required
                  >
                    <option value="">Type here...</option>
                    {languageOptions.map(language => (
                      <option key={language} value={language}>{language}</option>
                    ))}
                  </select>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 2: Expertise */}
          {currentStep === 2 && (
            <Card className="border-2 border-foreground">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Expertise
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Expertise Categories - Visual Cards */}
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-4">
                    {expertiseCategories.map(category => (
                      <button
                        key={category.id}
                        onClick={() => handleArrayToggle('expertiseCategories', category.id)}
                        className={`flex flex-col items-center p-4 border-2 rounded-lg transition-all hover:border-gray-400 ${
                          formData.expertiseCategories.includes(category.id)
                            ? 'border-gray-900 bg-gray-50'
                            : 'border-gray-200'
                        }`}
                      >
                        <div className="w-full h-20 bg-gray-200 rounded-lg mb-3 flex items-center justify-center">
                          <span className="text-gray-500 text-xs">📊</span>
                        </div>
                        <span className="text-sm font-medium text-center">{category.title}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Expertise Tags */}
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-3">
                    {expertiseTags.map(tag => (
                      <button
                        key={tag}
                        onClick={() => handleArrayToggle('expertiseTags', tag)}
                        className={`px-4 py-2 border-2 rounded-full text-sm font-medium transition-all ${
                          formData.expertiseTags.includes(tag)
                            ? 'border-gray-900 bg-gray-50 text-gray-900'
                            : 'border-gray-200 text-gray-600 hover:border-gray-400'
                        }`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Industries */}
                <div className="space-y-4">
                  <h4 className="font-medium text-lg">Industries <span className="text-sm text-gray-500">(3)</span></h4>
                  <div className="grid grid-cols-2 gap-3">
                    {industries.map(industry => (
                      <label
                        key={industry}
                        className={`flex items-center gap-3 p-3 border rounded-lg cursor-pointer transition-all ${
                          formData.industries.includes(industry)
                            ? 'border-gray-900 bg-gray-50'
                            : 'border-gray-200 hover:border-gray-400'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.industries.includes(industry)}
                          onChange={() => handleArrayToggle('industries', industry)}
                          className="w-4 h-4 text-gray-900 border-gray-300 rounded focus:ring-gray-900"
                        />
                        <span className="text-sm">{industry}</span>
                        <span className="ml-auto text-xs">📊</span>
                      </label>
                    ))}
                  </div>
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
              <CardContent className="space-y-6">
                {/* Left Panel - Settings */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="space-y-4">
                    {/* Time Zone */}
                    <div>
                      <label className="block text-sm font-medium mb-2">Time Zone</label>
                      <select
                        value={formData.timezone}
                        onChange={(e) => handleInputChange('timezone', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                      >
                        <option value="">Also timing</option>
                        {timezones.map(timezone => (
                          <option key={timezone} value={timezone}>{timezone}</option>
                        ))}
                      </select>
                    </div>

                    {/* Slot Duration */}
                    <div>
                      <label className="block text-sm font-medium mb-2">Slot Duration</label>
                      <select
                        value={formData.slotDuration}
                        onChange={(e) => handleInputChange('slotDuration', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                      >
                        <option value="">30 min</option>
                        {durationOptions.map(duration => (
                          <option key={duration} value={duration}>{duration}</option>
                        ))}
                      </select>
                    </div>

                    {/* Buffer */}
                    <div>
                      <label className="block text-sm font-medium mb-2">Buffer</label>
                      <select
                        value={formData.bufferTime}
                        onChange={(e) => handleInputChange('bufferTime', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                      >
                        <option value="">15 min</option>
                        {bufferOptions.map(buffer => (
                          <option key={buffer} value={buffer}>{buffer}</option>
                        ))}
                      </select>
                    </div>

                    {/* Connect Calendly */}
                    <Button 
                      variant="outline" 
                      className="w-full border-2 border-gray-300 hover:border-gray-900"
                    >
                      <CalendarIcon className="w-4 h-4 mr-2" />
                      Connect Calendly
                    </Button>

                    {/* Mini Calendar */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <Calendar 
                        mode="single"
                        className="w-full"
                      />
                    </div>
                  </div>

                  {/* Right Panel - Weekly Schedule */}
                  <div className="lg:col-span-2">
                    <div className="space-y-4">
                      {/* Week Header */}
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-medium">Week of Sept 15-21, 2025</h3>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm">❮ Today ❯</Button>
                        </div>
                      </div>

                      {/* Schedule Controls */}
                      <div className="flex gap-4 mb-4">
                        <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
                          <option>Daily</option>
                          <option>Weekly</option>
                          <option>Monthly</option>
                        </select>
                        <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
                          <option>Ends on</option>
                          <option>Never</option>
                          <option>After</option>
                        </select>
                      </div>

                      {/* Weekly Calendar Grid */}
                      <div className="border border-gray-200 rounded-lg overflow-hidden">
                        {/* Day Headers */}
                        <div className="grid grid-cols-7 bg-gray-50">
                          {['Mon 15', 'Tue 16', 'Wed 17', 'Thu 18', 'Fri 19', 'Sat 20', 'Sun 21'].map(day => (
                            <div key={day} className="p-3 text-center text-sm font-medium border-r border-gray-200 last:border-r-0">
                              {day}
                            </div>
                          ))}
                        </div>

                        {/* Time Slots */}
                        <div className="grid grid-cols-8">
                          {/* Time Labels */}
                          <div className="bg-gray-50 border-r border-gray-200">
                            {['8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM'].map(time => (
                              <div key={time} className="p-3 text-xs text-gray-600 border-b border-gray-200 h-12 flex items-center">
                                {time}
                              </div>
                            ))}
                          </div>

                          {/* Calendar Grid */}
                          {Array.from({ length: 7 }).map((_, dayIndex) => (
                            <div key={dayIndex} className="border-r border-gray-200 last:border-r-0">
                              {Array.from({ length: 7 }).map((_, timeIndex) => (
                                <div 
                                  key={timeIndex} 
                                  className="h-12 border-b border-gray-200 cursor-pointer hover:bg-blue-50 transition-colors"
                                  onClick={() => {
                                    // Handle time slot selection
                                    console.log(`Selected: Day ${dayIndex}, Time ${timeIndex}`)
                                  }}
                                />
                              ))}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 4: Manage Consultation Charges */}
          {currentStep === 4 && (
            <Card className="border-2 border-foreground">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5" />
                  Manage Consultation Charges
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Individual Session */}
                <div>
                  <label className="block text-sm font-medium mb-3">What are your fees?*</label>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center">
                      <span className="text-lg font-medium mr-2">$</span>
                      <input
                        type="number"
                        value={formData.individualSessionFee}
                        onChange={(e) => handleInputChange('individualSessionFee', e.target.value)}
                        className="w-20 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-center"
                        placeholder="500"
                      />
                    </div>
                    <select
                      value={formData.individualSessionDuration}
                      onChange={(e) => handleInputChange('individualSessionDuration', e.target.value)}
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                    >
                      <option value="">60 min</option>
                      {sessionDurations.map(duration => (
                        <option key={duration.value} value={duration.value}>{duration.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Bundle Sessions */}
                <div>
                  <label className="block text-sm font-medium mb-3">What are your fees for Bundle sessions?*</label>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center">
                      <span className="text-lg font-medium mr-2">$</span>
                      <input
                        type="number"
                        value={formData.bundleSessionFee}
                        onChange={(e) => handleInputChange('bundleSessionFee', e.target.value)}
                        className="w-24 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-center"
                        placeholder="2500"
                      />
                    </div>
                    <select
                      value={formData.bundleSessionCount}
                      onChange={(e) => handleInputChange('bundleSessionCount', e.target.value)}
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                    >
                      <option value="">6 sessions</option>
                      {bundleSessionCounts.map(bundle => (
                        <option key={bundle.value} value={bundle.value}>{bundle.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Fee Breakdown */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Client pays</div>
                      <div className="text-xl font-semibold text-gray-900">
                        ${formData.individualSessionFee || '500'}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">What you get</div>
                      <div className="text-xl font-semibold text-gray-900">
                        ${formData.individualSessionFee ? (parseInt(formData.individualSessionFee) * 0.8).toFixed(0) : '400'}
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 text-center mt-3">
                    Platform fee: 20% per transaction (includes support & secure payments)
                  </div>
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