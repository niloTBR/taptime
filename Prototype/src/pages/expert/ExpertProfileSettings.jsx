import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
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
  Edit
} from 'lucide-react'

const ExpertProfileSettings = () => {
  const [activeTab, setActiveTab] = useState('profile')
  const [showVerificationModal, setShowVerificationModal] = useState(false)

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
    { id: 'profile', label: 'My Profile', icon: User },
    { id: 'availability', label: 'Availability', icon: Calendar },
    { id: 'fees', label: 'My Fees', icon: DollarSign },
    { id: 'expertise', label: 'Expertise & Industries', icon: Target },
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
                {/* My Profile Tab */}
                {activeTab === 'profile' && (
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-xl font-semibold">Personal Information</h2>
                      <Button 
                        variant="outline" 
                        className="border-2 border-foreground"
                        onClick={() => setShowVerificationModal(true)}
                      >
                        <Shield className="w-4 h-4 mr-2" />
                        Get Verified
                      </Button>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Full Name*</label>
                        <input 
                          type="text" 
                          defaultValue={expert.name}
                          className="w-full p-3 border-2 border-gray-200 rounded-lg" 
                          placeholder="Full Name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email*</label>
                        <input 
                          type="email" 
                          defaultValue={expert.email}
                          className="w-full p-3 border-2 border-gray-200 rounded-lg" 
                          placeholder="Email Address"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Phone Number*</label>
                        <input 
                          type="tel" 
                          defaultValue={expert.phone}
                          className="w-full p-3 border-2 border-gray-200 rounded-lg" 
                          placeholder="Phone Number"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Company*</label>
                        <input 
                          type="text" 
                          defaultValue={expert.company}
                          className="w-full p-3 border-2 border-gray-200 rounded-lg" 
                          placeholder="Company name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Short Description*</label>
                        <textarea 
                          defaultValue={expert.title}
                          className="w-full p-3 border-2 border-gray-200 rounded-lg h-20" 
                          placeholder="Position..."
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Timezone*</label>
                        <select className="w-full p-3 border-2 border-gray-200 rounded-lg">
                          <option>GMT+4 (UAE)</option>
                          <option>GMT+0 (London)</option>
                          <option>GMT-5 (New York)</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Gender*</label>
                        <select className="w-full p-3 border-2 border-gray-200 rounded-lg">
                          <option>Male</option>
                          <option>Female</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Language Preference*</label>
                        <input 
                          type="text" 
                          defaultValue="English"
                          className="w-full p-3 border-2 border-gray-200 rounded-lg" 
                          placeholder="Type here..."
                        />
                      </div>
                    </div>

                    <div className="mt-6">
                      <label className="block text-sm font-medium mb-2">Bio*</label>
                      <textarea 
                        defaultValue={expert.bio}
                        className="w-full p-3 border-2 border-gray-200 rounded-lg h-32" 
                        placeholder="Enter your bio"
                      />
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

                {/* Availability Tab */}
                {activeTab === 'availability' && (
                  <div>
                    <h2 className="text-xl font-semibold mb-6">Set Your Availability</h2>
                    <div className="text-center py-12">
                      <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-500">Availability calendar coming soon...</p>
                      <p className="text-sm text-gray-400 mt-2">Set your working hours, time slots, and buffer time</p>
                    </div>
                  </div>
                )}

                {/* My Fees Tab */}
                {activeTab === 'fees' && (
                  <div>
                    <h2 className="text-xl font-semibold mb-2">Manage Consultation Charges</h2>
                    <p className="text-sm text-muted-foreground mb-6">Platform fee: 20% per transaction (includes support & secure payments).</p>
                    
                    <div className="space-y-6">
                      <div className="grid grid-cols-3 gap-6">
                        <div>
                          <label className="block text-sm font-medium mb-2">What are your fees ?</label>
                          <div className="flex gap-2">
                            <input 
                              type="number" 
                              defaultValue="500"
                              className="flex-1 p-3 border-2 border-gray-200 rounded-lg" 
                              placeholder="$ 500"
                            />
                            <select className="p-3 border-2 border-gray-200 rounded-lg">
                              <option>60 min</option>
                              <option>30 min</option>
                              <option>90 min</option>
                            </select>
                          </div>
                        </div>
                        <div className="text-center">
                          <label className="block text-sm font-medium mb-2">Client pays</label>
                          <div className="text-2xl font-bold">$ 500</div>
                        </div>
                        <div className="text-center">
                          <label className="block text-sm font-medium mb-2">What you get</label>
                          <div className="text-2xl font-bold">$ 400</div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">What are your fees for bundle session ?</label>
                        <div className="flex gap-2">
                          <input 
                            type="number" 
                            defaultValue="2500"
                            className="flex-1 p-3 border-2 border-gray-200 rounded-lg" 
                            placeholder="$ 2500"
                          />
                          <select className="p-3 border-2 border-gray-200 rounded-lg">
                            <option>6 Sessions</option>
                            <option>3 Sessions</option>
                            <option>10 Sessions</option>
                          </select>
                        </div>
                      </div>

                      <Card className="p-4 bg-gray-50">
                        <h3 className="font-medium mb-2">Bundle Details</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          This package includes multiple consultation sessions at a discounted rate. Each session is scheduled for a fixed duration, and the bundle must be used within the validity period.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium mb-2">Number of Sessions</label>
                            <select className="w-full p-3 border-2 border-gray-200 rounded-lg">
                              <option>6 Sessions</option>
                              <option>3 Sessions</option>
                              <option>10 Sessions</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2">Duration of Each Session</label>
                            <select className="w-full p-3 border-2 border-gray-200 rounded-lg">
                              <option>60 minutes</option>
                              <option>30 minutes</option>
                              <option>90 minutes</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2">Validity Period</label>
                            <select className="w-full p-3 border-2 border-gray-200 rounded-lg">
                              <option>3 months</option>
                              <option>6 months</option>
                              <option>1 year</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2">Mode of Session</label>
                            <select className="w-full p-3 border-2 border-gray-200 rounded-lg">
                              <option>Zoom/Google Meet</option>
                              <option>In-person</option>
                              <option>Phone Call</option>
                            </select>
                          </div>
                        </div>
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

                {/* Expertise & Industries Tab */}
                {activeTab === 'expertise' && (
                  <div>
                    <h2 className="text-xl font-semibold mb-6">Expertise & Industries</h2>
                    <div className="text-center py-12">
                      <Target className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-500">Expertise selection coming soon...</p>
                      <p className="text-sm text-gray-400 mt-2">Select your areas of expertise and industries</p>
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