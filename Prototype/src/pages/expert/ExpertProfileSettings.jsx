import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { 
  User,
  Calendar,
  DollarSign,
  Target,
  Heart,
  Share2,
  Check,
  MapPin,
  Phone,
  Mail,
  Building,
  Globe,
  ChevronDown,
  Shield,
  Edit,
  FileText,
  Award,
  Briefcase
} from 'lucide-react'
import categoriesData from '@/data/categories.json'

const ExpertProfileSettings = () => {
  const { categories } = categoriesData
  const [activeTab, setActiveTab] = useState('basic')
  const [showVerificationModal, setShowVerificationModal] = useState(false)
  const [selectedExpertiseArea, setSelectedExpertiseArea] = useState('All Expertise')
  const [selectedExpertiseSkills, setSelectedExpertiseSkills] = useState(['Software Development', 'Product Development', 'Leadership & Team Building']) // Pre-selected for demo
  const [expandedExpertiseAreas, setExpandedExpertiseAreas] = useState(['Technology & Innovation']) // Pre-expanded for demo

  // Mock expert data
  const expert = {
    name: 'David Collins',
    title: 'Passionate Software Engineer Crafting Innovative Solution',
    phone: '901-234-5678',
    location: 'UAE',
    avatar: '/api/placeholder/120/120',
    verified: true,
    email: 'david.collins@email.com',
    company: 'Collins Consulting',
    timezone: 'GMT+4',
    language: 'English',
    gender: 'Male',
    bio: 'Passionate software engineer with 10+ years of experience building scalable solutions. I help teams and individuals level up their technical skills and build better products.'
  }

  const tabs = [
    { id: 'basic', label: 'Basic Information', icon: User },
    { id: 'professional', label: 'Professional Profile', icon: Target },
    { id: 'availability', label: 'Availability', icon: Calendar },
    { id: 'fees', label: 'My Fees', icon: DollarSign },
    { id: 'charity', label: 'Charity', icon: Heart },
    { id: 'socials', label: 'Socials', icon: Share2 }
  ]

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()
  }

  const TabIcon = ({ icon: Icon, isActive }) => (
    <Icon className={`w-4 h-4 ${isActive ? 'text-foreground' : 'text-muted-foreground'}`} />
  )

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="w-8 h-8 bg-foreground text-background rounded-lg flex items-center justify-center font-bold">
              T
            </div>
            <h1 className="text-2xl font-semibold">Profile Settings</h1>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-12 gap-6">
          {/* Sidebar Navigation */}
          <div className="col-span-3">
            <Card className="border-2">
              <CardContent className="p-0">
                <div className="p-6 border-b">
                  {/* Expert Header */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative">
                      <Avatar className="w-20 h-20">
                        <AvatarImage src={expert.avatar} alt={expert.name} />
                        <AvatarFallback className="text-lg">{getInitials(expert.name)}</AvatarFallback>
                      </Avatar>
                      {expert.verified && (
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{expert.name}</h3>
                      {expert.verified && (
                        <Badge variant="secondary" className="text-xs bg-green-100 text-green-700">
                          Verified
                        </Badge>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{expert.title}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      <span>{expert.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span>{expert.location}</span>
                    </div>
                  </div>
                </div>

                {/* Navigation Tabs */}
                <div className="p-2">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                        activeTab === tab.id
                          ? 'bg-gray-100 text-foreground font-medium'
                          : 'text-muted-foreground hover:bg-gray-50 hover:text-foreground'
                      }`}
                    >
                      <TabIcon icon={tab.icon} isActive={activeTab === tab.id} />
                      <span className="text-sm">{tab.label}</span>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="col-span-9">
            <Card className="border-2">
              <CardContent className="p-8">
                {/* Basic Information Tab */}
                {activeTab === 'basic' && (
                  <div className="space-y-8">
                    {/* Header */}
                    <div className="flex items-center justify-between pb-6 border-b border-gray-200">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center">
                          <User className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-gray-900">Basic Information</h2>
                          <p className="text-sm text-gray-600">Personal details and account information</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      {/* First Name + Last Name */}
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-3">First Name *</label>
                          <input
                            type="text"
                            defaultValue="David"
                            className="w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                            placeholder="Enter your first name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-3">Last Name *</label>
                          <input
                            type="text"
                            defaultValue="Collins"
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
                              defaultValue={expert.email}
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
                              defaultValue={expert.location}
                              className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all appearance-none bg-white"
                            >
                              <option value="">Select your country</option>
                              <option value="United States">United States</option>
                              <option value="Canada">Canada</option>
                              <option value="United Kingdom">United Kingdom</option>
                              <option value="Germany">Germany</option>
                              <option value="France">France</option>
                              <option value="Australia">Australia</option>
                              <option value="Singapore">Singapore</option>
                              <option value="Japan">Japan</option>
                              <option value="UAE">UAE</option>
                              <option value="India">India</option>
                              <option value="Other">Other</option>
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
                              defaultValue={expert.gender}
                              className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all appearance-none bg-white"
                            >
                              <option value="">Select gender</option>
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                              <option value="Non-binary">Non-binary</option>
                              <option value="Prefer not to say">Prefer not to say</option>
                            </select>
                            <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-3">Language Preference *</label>
                          <div className="relative">
                            <Globe className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <select
                              defaultValue={expert.language}
                              className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all appearance-none bg-white"
                            >
                              <option value="">Select preferred language</option>
                              <option value="English">English</option>
                              <option value="Arabic">Arabic</option>
                              <option value="English & Arabic">English & Arabic</option>
                            </select>
                            <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                          </div>
                        </div>
                      </div>

                      {/* Password + Confirm Password */}
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-3">New Password</label>
                          <input
                            type="password"
                            className="w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                            placeholder="Enter new password (optional)"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-3">Confirm Password</label>
                          <input
                            type="password"
                            className="w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                            placeholder="Confirm new password"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4 pt-6">
                      <Button variant="outline" className="border-2 border-foreground">
                        Discard changes
                      </Button>
                      <Button className="bg-green-500 hover:bg-green-600 text-white">
                        Save Changes
                      </Button>
                    </div>
                  </div>
                )}

                {/* Availability Tab */}
                {activeTab === 'availability' && (
                  <div>
                    <h2 className="text-xl font-semibold mb-6">Set Your Availability</h2>
                    <div className="text-center py-12">
                      <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-medium mb-2">Connect with Calendly</h3>
                      <p className="text-sm text-gray-600 mb-6">
                        Sync your availability with Calendly to manage your booking schedule
                      </p>
                      <Button 
                        variant="outline" 
                        className="border-2 border-gray-300 hover:border-gray-900 px-6"
                      >
                        <Calendar className="w-4 h-4 mr-2" />
                        Connect Calendly
                      </Button>
                    </div>
                  </div>
                )}

                {/* My Fees Tab */}
                {activeTab === 'fees' && (
                  <div>
                    <h2 className="text-xl font-semibold mb-2">Manage Consultation Charges</h2>
                    <p className="text-sm text-muted-foreground mb-6">Platform fee: 20% per transaction (includes support & secure payments).</p>
                    
                    <div className="space-y-6">
                      <h3 className="text-lg font-medium">General Consultation</h3>
                      <p className="text-sm text-gray-600">
                        Open-ended consultation where clients choose the duration
                      </p>
                      
                      <Card className="border border-gray-200">
                        <CardContent className="p-4 space-y-4">
                          <div className="flex items-center gap-3">
                            <input
                              type="checkbox"
                              defaultChecked={true}
                              className="w-4 h-4 text-gray-900 border-gray-300 rounded focus:ring-gray-900"
                            />
                            <label className="text-sm font-medium">Enable general consultation</label>
                          </div>
                          
                          <div className="space-y-3">
                            <label className="text-sm font-medium block">Set pricing for each duration:</label>
                            
                            <div className="flex items-center gap-4">
                              <span className="text-sm w-16">15 min</span>
                              <div className="flex items-center">
                                <span className="text-lg font-medium mr-2">$</span>
                                <input
                                  type="number"
                                  defaultValue="150"
                                  className="w-24 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-center"
                                  placeholder="150"
                                />
                              </div>
                              <div className="text-xs text-gray-500">
                                Client pays: $150 | You get: $120
                              </div>
                            </div>
                            
                            <div className="flex items-center gap-4">
                              <span className="text-sm w-16">30 min</span>
                              <div className="flex items-center">
                                <span className="text-lg font-medium mr-2">$</span>
                                <input
                                  type="number"
                                  defaultValue="300"
                                  className="w-24 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-center"
                                  placeholder="300"
                                />
                              </div>
                              <div className="text-xs text-gray-500">
                                Client pays: $300 | You get: $240
                              </div>
                            </div>
                            
                            <div className="flex items-center gap-4">
                              <span className="text-sm w-16">45 min</span>
                              <div className="flex items-center">
                                <span className="text-lg font-medium mr-2">$</span>
                                <input
                                  type="number"
                                  defaultValue="450"
                                  className="w-24 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-center"
                                  placeholder="450"
                                />
                              </div>
                              <div className="text-xs text-gray-500">
                                Client pays: $450 | You get: $360
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="flex gap-4 mt-8">
                      <Button variant="outline" className="border-2 border-foreground">
                        Discard changes
                      </Button>
                      <Button className="bg-green-500 hover:bg-green-600 text-white">
                        Save
                      </Button>
                    </div>
                  </div>
                )}

                {/* Professional Profile Tab */}
                {activeTab === 'professional' && (
                  <div className="space-y-8">
                    {/* Header */}
                    <div className="flex items-center justify-between pb-6 border-b border-gray-200">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center">
                          <Target className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-gray-900">Professional Profile</h2>
                          <p className="text-sm text-gray-600">Your professional background and expertise</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      {/* Professional Title */}
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Professional Title</label>
                        <div className="relative">
                          <Building className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                          <input
                            type="text"
                            placeholder="e.g., Senior Product Manager, Marketing Director"
                            defaultValue={expert.title}
                            className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gray-900 focus:outline-none"
                          />
                        </div>
                      </div>

                      {/* Short Description */}
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Short Description</label>
                        <div className="relative">
                          <Edit className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                          <textarea
                            placeholder="Brief description of your background and expertise..."
                            defaultValue={expert.bio}
                            className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gray-900 focus:outline-none min-h-[100px] resize-none"
                          />
                        </div>
                      </div>

                      {/* Expertise - Hierarchical */}
                      <div className="space-y-3">
                        <label className="text-sm font-medium">Expertise</label>
                        <p className="text-xs text-gray-500">Select expertise areas and specific skills that match your background</p>
                        
                        <div className="border border-gray-200 rounded-lg p-4 max-h-96 overflow-y-auto">
                          <div className="space-y-2">
                            {/* All Expertise Option */}
                            <div className="flex items-center space-x-2">
                              <Checkbox 
                                id="all-expertise-profile"
                                checked={selectedExpertiseArea === 'All Expertise'}
                                onCheckedChange={(checked) => {
                                  if (checked) {
                                    setSelectedExpertiseArea('All Expertise')
                                    setSelectedExpertiseSkills([])
                                    setExpandedExpertiseAreas([])
                                  }
                                }}
                              />
                              <Label htmlFor="all-expertise-profile" className="text-sm font-medium cursor-pointer">
                                All Expertise Areas
                              </Label>
                            </div>
                            
                            {/* Main Categories with Subcategories */}
                            {categories.map((category) => (
                              <div key={category.name} className="space-y-1">
                                {/* Main Category */}
                                <div className="flex items-center space-x-2">
                                  <Checkbox 
                                    id={`profile-${category.name}`}
                                    checked={selectedExpertiseArea === category.name}
                                    onCheckedChange={(checked) => {
                                      if (checked) {
                                        setSelectedExpertiseArea(category.name)
                                        // Expand this category when selected
                                        if (!expandedExpertiseAreas.includes(category.name)) {
                                          setExpandedExpertiseAreas([...expandedExpertiseAreas, category.name])
                                        }
                                      } else {
                                        setSelectedExpertiseArea('All Expertise')
                                        // Optionally collapse when unchecked
                                        setExpandedExpertiseAreas(expandedExpertiseAreas.filter(name => name !== category.name))
                                      }
                                    }}
                                  />
                                  <button
                                    onClick={() => {
                                      // Toggle expansion
                                      if (expandedExpertiseAreas.includes(category.name)) {
                                        setExpandedExpertiseAreas(expandedExpertiseAreas.filter(name => name !== category.name))
                                      } else {
                                        setExpandedExpertiseAreas([...expandedExpertiseAreas, category.name])
                                      }
                                    }}
                                    className="flex items-center gap-1 text-sm font-medium cursor-pointer hover:text-blue-600 flex-1 text-left"
                                  >
                                    <ChevronDown className={`w-3 h-3 transition-transform ${
                                      expandedExpertiseAreas.includes(category.name) ? 'rotate-180' : ''
                                    }`} />
                                    {category.name}
                                  </button>
                                </div>
                                
                                {/* Subcategories (only show if expanded) */}
                                {expandedExpertiseAreas.includes(category.name) && (
                                  <div className="space-y-1 ml-6">
                                    {category.subcategories.map((subcategory) => (
                                      <div key={subcategory.name} className="flex items-center space-x-2">
                                        <Checkbox 
                                          id={`profile-${subcategory.name}`}
                                          checked={selectedExpertiseSkills.includes(subcategory.name)}
                                          onCheckedChange={(checked) => {
                                            if (checked) {
                                              setSelectedExpertiseSkills([...selectedExpertiseSkills, subcategory.name])
                                            } else {
                                              setSelectedExpertiseSkills(selectedExpertiseSkills.filter(skill => skill !== subcategory.name))
                                            }
                                          }}
                                        />
                                        <Label htmlFor={`profile-${subcategory.name}`} className="text-xs font-normal cursor-pointer text-gray-700">
                                          {subcategory.name}
                                        </Label>
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        {/* Selected count */}
                        <p className="text-xs text-gray-500">
                          {selectedExpertiseSkills.length} specific {selectedExpertiseSkills.length === 1 ? 'skill' : 'skills'} selected
                          {selectedExpertiseArea !== 'All Expertise' && ` in ${selectedExpertiseArea}`}
                        </p>
                        
                        {/* Selected skills display */}
                        {selectedExpertiseSkills.length > 0 && (
                          <div className="flex flex-wrap gap-1 mt-2">
                            {selectedExpertiseSkills.map((skill) => (
                              <Badge key={skill} variant="secondary" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex gap-4 pt-6">
                      <Button variant="outline" className="border-2 border-foreground">
                        Discard changes
                      </Button>
                      <Button className="bg-green-500 hover:bg-green-600 text-white">
                        Save Changes
                      </Button>
                    </div>
                  </div>
                )}

                {/* Charity Tab */}
                {activeTab === 'charity' && (
                  <div>
                    <h2 className="text-xl font-semibold mb-2">Donate for charity (Optional)</h2>
                    <p className="text-sm text-muted-foreground mb-6">
                      Inspire others by supporting a cause you love. (You'll manage donations directly — Taptime doesn't handle transactions)
                    </p>

                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Charity Name</label>
                        <input 
                          type="text" 
                          className="w-full p-3 border-2 border-gray-200 rounded-lg" 
                          placeholder="Type here..."
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Charity Website URL</label>
                        <input 
                          type="url" 
                          className="w-full p-3 border-2 border-gray-200 rounded-lg" 
                          placeholder="Type here..."
                        />
                      </div>
                    </div>

                    <div className="flex gap-4 mt-8">
                      <Button variant="outline" className="border-2 border-foreground">
                        Discard changes
                      </Button>
                      <Button className="bg-green-500 hover:bg-green-600 text-white">
                        Save
                      </Button>
                    </div>
                  </div>
                )}

                {/* Socials Tab */}
                {activeTab === 'socials' && (
                  <div>
                    <h2 className="text-xl font-semibold mb-6">Socials</h2>

                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">LinkedIn Profile</label>
                        <input 
                          type="url" 
                          className="w-full p-3 border-2 border-gray-200 rounded-lg" 
                          placeholder="Type here..."
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">X Profile</label>
                        <input 
                          type="url" 
                          className="w-full p-3 border-2 border-gray-200 rounded-lg" 
                          placeholder="Type here..."
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Reddit</label>
                        <input 
                          type="url" 
                          className="w-full p-3 border-2 border-gray-200 rounded-lg" 
                          placeholder="Type here..."
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Threads</label>
                        <input 
                          type="url" 
                          className="w-full p-3 border-2 border-gray-200 rounded-lg" 
                          placeholder="Type here..."
                        />
                      </div>
                    </div>

                    <div className="flex gap-4 mt-8">
                      <Button variant="outline" className="border-2 border-foreground">
                        Discard changes
                      </Button>
                      <Button className="bg-green-500 hover:bg-green-600 text-white">
                        Save
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Verification Modal */}
      {showVerificationModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <Card className="w-full max-w-md mx-4 border-2 border-foreground">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <CardTitle>Get Verified on Taptime</CardTitle>
              <p className="text-sm text-muted-foreground">
                Show your audience you're real. Share your booking link, tag us, and we'll verify you fast.
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium mb-4">Follow the steps for get verified</h3>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <span className="text-sm font-medium text-green-600">Step 1:</span>
                    <span className="text-sm">Add your booking link in atleast one social media channel - LinkedIn / X / Threads / TikTok / Instagram</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-sm font-medium text-green-600">Step 2:</span>
                    <span className="text-sm">Tag us @taptime.ai</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-sm font-medium text-green-600">Step 3:</span>
                    <span className="text-sm">You will be verified within 72 hours</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-sm font-medium text-green-600">Step 4:</span>
                    <span className="text-sm">Share your post here - INPUT LINK FIELD</span>
                  </div>
                </div>
              </div>
              
              <div>
                <input 
                  type="url" 
                  className="w-full p-3 border-2 border-gray-200 rounded-lg" 
                  placeholder="Paste Here..."
                />
              </div>
              
              <div className="flex gap-3 pt-4">
                <Button 
                  variant="outline" 
                  className="flex-1 border-2 border-foreground"
                  onClick={() => setShowVerificationModal(false)}
                >
                  Cancel
                </Button>
                <Button 
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white"
                  onClick={() => setShowVerificationModal(false)}
                >
                  Get Verified
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}

export default ExpertProfileSettings