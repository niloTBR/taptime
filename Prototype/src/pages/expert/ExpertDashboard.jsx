import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line } from 'recharts'
import { 
  Calendar,
  Clock,
  Star,
  DollarSign,
  TrendingUp,
  Video,
  Bell,
  Plus,
  CheckCircle,
  ArrowRight,
  MessageCircle,
  Award,
  Target,
  Users,
  BookOpen,
  Edit,
  Mail,
  Phone,
  MapPin,
  Building,
  Eye,
  ArrowUp,
  CreditCard,
  Download,
  Receipt,
  Shield,
  AlertCircle,
  Building2,
  Settings,
  User,
  Heart,
  Share2,
  Check,
  Globe,
  ChevronDown
} from 'lucide-react'

const ExpertDashboard = () => {
  const [activeTab, setActiveTab] = useState('upcoming')
  const [showSessionDetail, setShowSessionDetail] = useState(false)
  const [selectedSession, setSelectedSession] = useState(null)
  const [showVerificationModal, setShowVerificationModal] = useState(false)

  // Mock expert data from onboarding
  const expert = {
    name: 'Dr. Michael Chen',
    title: 'Product Strategy Expert',
    email: 'michael.chen@email.com',
    phone: '+1 (555) 987-6543',
    location: 'San Francisco, CA',
    company: 'Chen Consulting',
    industry: 'Technology Consulting',
    experience: '10+ years',
    avatar: '/api/placeholder/40/40',
    joinDate: 'August 2023',
    verified: true,
    hourlyRate: 200,
    specialization: 'Product Strategy & Leadership',
    bio: 'Helping companies build products that customers love through strategic planning and data-driven decisions.',
    expertise: ['Product Strategy', 'Team Leadership', 'Market Analysis', 'Roadmap Planning']
  }

  const stats = {
    thisMonth: {
      earnings: 8640,
      sessions: 43,
      students: 38,
      rating: 4.9
    },
    growth: {
      earnings: +12,
      sessions: +8,
      students: +15,
      rating: +0.1
    }
  }

  const earningsData = [
    { month: 'Jan', earnings: 6200 },
    { month: 'Feb', earnings: 7400 },
    { month: 'Mar', earnings: 8640 }
  ]

  const sessionsData = [
    { month: 'Jan', sessions: 32 },
    { month: 'Feb', sessions: 38 },
    { month: 'Mar', sessions: 43 }
  ]

  const upcomingSessions = [
    {
      id: 1,
      clientName: 'Sarah Johnson',
      clientTitle: 'Product Manager at TechCorp',
      date: 'Tomorrow',
      time: '2:00 PM',
      duration: '60 min',
      topic: 'Product Roadmap Review',
      summary: 'Review current product strategy and identify areas for improvement. Discuss market positioning and competitive analysis.',
      cost: '$200',
      avatar: '/api/placeholder/40/40'
    },
    {
      id: 2,
      clientName: 'David Thompson',
      clientTitle: 'Startup Founder',
      date: 'March 25',
      time: '10:00 AM',
      duration: '90 min',
      topic: 'Startup Strategy Deep Dive',
      summary: 'Comprehensive strategy session covering product-market fit, go-to-market strategy, and scaling plans.',
      cost: '$300',
      avatar: '/api/placeholder/40/40'
    }
  ]

  const pastSessions = [
    {
      id: 1,
      clientName: 'Emily Rodriguez',
      clientTitle: 'Head of Product',
      date: 'Mar 18',
      rating: 5,
      topic: 'Team Leadership Workshop',
      duration: '75 min',
      cost: '$250',
      feedback: 'Incredible insights on building high-performing product teams. Michael provided actionable frameworks we immediately implemented.'
    },
    {
      id: 2,
      clientName: 'James Wilson',
      clientTitle: 'VP Product',
      date: 'Mar 15',
      rating: 5,
      topic: 'Product Strategy Session',
      duration: '60 min',
      cost: '$200',
      feedback: 'Exceptional strategic guidance. Helped us pivot our roadmap and focus on what truly matters for our customers.'
    }
  ]

  const conversations = [
    {
      id: 1,
      clientName: 'Sarah Johnson',
      lastMessage: 'Thank you for the session prep materials!',
      time: '1 hour ago',
      unread: 2,
      avatar: '/api/placeholder/40/40'
    },
    {
      id: 2,
      clientName: 'David Thompson',
      lastMessage: 'Looking forward to our deep dive tomorrow.',
      time: '3 hours ago',
      unread: 0,
      avatar: '/api/placeholder/40/40'
    }
  ]

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()
  }

  const formatGrowth = (value) => {
    const prefix = value > 0 ? '+' : ''
    return `${prefix}${value}%`
  }

  const getGrowthColor = (value) => {
    return value > 0 ? 'text-green-600' : value < 0 ? 'text-red-600' : 'text-gray-500'
  }

  const sidebarSections = [
    {
      title: 'Sessions',
      items: [
        { id: 'upcoming', label: 'Upcoming', count: upcomingSessions.length, icon: Calendar },
        { id: 'past', label: 'Past Sessions', count: pastSessions.length, icon: Clock },
        { id: 'meetings', label: 'All Meetings', icon: Users },
        { id: 'reviews', label: 'Reviews', icon: Star }
      ]
    },
    {
      title: 'Profile',
      items: [
        { id: 'profile', label: 'My Profile', icon: User },
        { id: 'availability', label: 'Availability', icon: Calendar },
        { id: 'fees', label: 'My Fees', icon: DollarSign },
        { id: 'expertise', label: 'Expertise & Industries', icon: Target },
        { id: 'charity', label: 'Charity', icon: Heart },
        { id: 'socials', label: 'Socials', icon: Share2 }
      ]
    },
    {
      title: 'Billing',
      items: [
        { id: 'billing', label: 'Billing & Payouts', icon: CreditCard }
      ]
    }
  ]


  const SidebarIcon = ({ icon: Icon, isActive }) => (
    <Icon className={`w-4 h-4 ${isActive ? 'text-foreground' : 'text-muted-foreground'}`} />
  )

  const ProfileSettings = () => (
    <Card className="border-2">
      <CardContent className="p-8">
        <>
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
        </>
      </CardContent>
    </Card>
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
            <h1 className="text-2xl font-semibold">Expert Dashboard</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <Button className="rounded-full">
              <Plus className="w-4 h-4 mr-2" />
              Add Availability
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Bell className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Analytics Header Section */}
      <section className="bg-gray-50 border-b px-6 py-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-lg font-semibold mb-4">This Month's Performance</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Monthly Earnings */}
            <Card className="border-2">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Monthly Earnings</span>
                  </div>
                  <TrendingUp className="w-4 h-4 text-green-600" />
                </div>
                <p className="text-2xl font-bold mb-2">${stats.thisMonth.earnings.toLocaleString()}</p>
                <div className="h-8 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={earningsData}>
                      <Line dataKey="earnings" stroke="#000000" strokeWidth={2} dot={false} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            {/* Total Sessions */}
            <Card className="border-2">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Total Sessions</span>
                  </div>
                  <TrendingUp className="w-4 h-4 text-blue-600" />
                </div>
                <p className="text-2xl font-bold mb-2">{stats.thisMonth.sessions}</p>
                <div className="h-8 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={sessionsData}>
                      <Bar dataKey="sessions" fill="#000000" radius={[2, 2, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            {/* Top Expertise */}
            <Card className="border-2">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Top Expertise</span>
                  </div>
                  <span className="text-xs text-muted-foreground">4 areas</span>
                </div>
                <p className="text-2xl font-bold mb-3">Product</p>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="secondary" className="bg-purple-100 text-purple-700 text-xs px-2 py-1">
                    Product Strategy
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700 text-xs px-2 py-1">
                    Team Leadership
                  </Badge>
                  <Badge variant="secondary" className="bg-green-100 text-green-700 text-xs px-2 py-1">
                    Market Analysis
                  </Badge>
                </div>
              </CardContent>
            </Card>
            
            {/* Average Rating */}
            <Card className="border-2">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Average Rating</span>
                  </div>
                  <TrendingUp className="w-4 h-4 text-yellow-600" />
                </div>
                <p className="text-2xl font-bold mb-2">{stats.thisMonth.rating}</p>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span>Based on {stats.thisMonth.sessions} sessions</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-3 h-3 ${i < Math.floor(stats.thisMonth.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <div className="max-w-7xl mx-auto flex gap-6 p-6">
        {/* Unified Navigation Sidebar */}
        <div className="w-80">
          <Card className="border-2">
            <CardContent className="p-0">
              {sidebarSections.map((section, sectionIndex) => (
                <div key={section.title}>
                  <div className="px-4 py-3 border-b bg-gray-50">
                    <h3 className="font-medium text-sm text-foreground">{section.title}</h3>
                  </div>
                  <div className="p-2">
                    {section.items.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-left transition-colors ${
                          activeTab === item.id
                            ? 'bg-gray-100 text-foreground font-medium'
                            : 'text-muted-foreground hover:bg-gray-50 hover:text-foreground'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <SidebarIcon icon={item.icon} isActive={activeTab === item.id} />
                          <span className="text-sm">{item.label}</span>
                        </div>
                        {item.count > 0 && (
                          <Badge variant="secondary" className="text-xs">
                            {item.count}
                          </Badge>
                        )}
                      </button>
                    ))}
                  </div>
                  {sectionIndex < sidebarSections.length - 1 && <div className="border-b" />}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
        
        {/* Main Content Area */}
        <div className="flex-1">
          
          {/* Content */}
          {activeTab === 'upcoming' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingSessions.map((session) => (
                <Card 
                  key={session.id} 
                  className="group hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 hover:border-foreground cursor-pointer h-full relative"
                  onClick={() => {
                    setSelectedSession(session)
                    setShowSessionDetail(true)
                  }}
                >
                  {/* Client Photo Header */}
                  <div className="relative h-32 overflow-hidden rounded-t-lg bg-gray-100">
                    <img 
                      src={session.avatar} 
                      alt={session.clientName}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    
                    {/* Session Type Badge */}
                    <div className="absolute top-3 right-3">
                      <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm text-black text-xs px-2 py-1 shadow-sm">
                        Upcoming
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-6 flex flex-col min-h-0">
                    <div className="flex-1 space-y-4 text-left">
                      {/* Client Info */}
                      <div>
                        <h3 className="font-semibold text-base leading-tight text-left">
                          {session.clientName}
                        </h3>
                        <p className="text-xs text-muted-foreground mt-1 text-left">
                          {session.clientTitle}
                        </p>
                      </div>
                      
                      {/* Session Topic and Summary */}
                      <div>
                        <h4 className="font-medium text-sm mb-1">{session.topic}</h4>
                        <p className="text-xs text-muted-foreground text-left leading-relaxed line-clamp-2">
                          {session.summary}
                        </p>
                      </div>
                      
                      {/* Session Details */}
                      <div className="space-y-1 text-xs text-muted-foreground">
                        <p>📅 {session.date} at {session.time}</p>
                        <p>⏱️ {session.duration}</p>
                        <p className="text-green-600 font-medium">✓ Confirmed</p>
                      </div>
                    </div>

                    {/* Actions - Always at Bottom */}
                    <div className="mt-auto flex-shrink-0 pt-4">
                      <div className="flex justify-between items-center">
                        <div className="flex gap-2 w-full">
                          <Button 
                            size="sm" 
                            className="rounded-full px-3 py-1 text-xs h-8 flex-1"
                          >
                            Start Session
                          </Button>
                          
                          <Button 
                            size="sm" 
                            variant="outline"
                            className="rounded-full border-2 border-foreground px-3 py-1 text-xs h-8"
                          >
                            View
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
          
          {activeTab === 'past' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastSessions.map((session) => (
                <Card 
                  key={session.id} 
                  className="group hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 hover:border-foreground cursor-pointer h-full relative"
                >
                  {/* Client Photo Header */}
                  <div className="relative h-32 overflow-hidden rounded-t-lg bg-gray-100">
                    <img 
                      src="/api/placeholder/300/120" 
                      alt={session.clientName}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    
                    {/* Session Type Badge */}
                    <div className="absolute top-3 right-3">
                      <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm text-black text-xs px-2 py-1 shadow-sm">
                        Completed
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-6 flex flex-col min-h-0">
                    <div className="flex-1 space-y-4 text-left">
                      {/* Client Rating and Info */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-4 h-4 ${i < session.rating ? 'fill-black text-black' : 'text-gray-300'}`} 
                            />
                          ))}
                        </div>
                        <span className="text-xs text-muted-foreground">{session.date}</span>
                      </div>

                      {/* Client Name and Title */}
                      <div>
                        <h3 className="font-semibold text-base leading-tight text-left">
                          {session.clientName}
                        </h3>
                        <p className="text-xs text-muted-foreground mt-1 text-left">
                          {session.clientTitle}
                        </p>
                      </div>
                      
                      {/* Session Topic and Feedback */}
                      <div>
                        <h4 className="font-medium text-sm mb-1">{session.topic}</h4>
                        <p className="text-xs text-muted-foreground text-left leading-relaxed line-clamp-2">
                          {session.feedback}
                        </p>
                      </div>
                      
                      {/* Session Details */}
                      <div className="space-y-1 text-xs text-muted-foreground">
                        <p>⏱️ {session.duration}</p>
                        <p className="text-green-600 font-medium">💰 Earned {session.cost}</p>
                      </div>
                    </div>

                    {/* Actions - Always at Bottom */}
                    <div className="mt-auto flex-shrink-0 pt-4">
                      <div className="flex justify-between items-center">
                        <div className="flex gap-2 w-full">
                          <Button 
                            size="sm" 
                            className="rounded-full px-3 py-1 text-xs h-8 flex-1"
                          >
                            Contact Again
                          </Button>
                          
                          <Button 
                            size="sm" 
                            variant="outline"
                            className="rounded-full border-2 border-foreground px-3 py-1 text-xs h-8"
                          >
                            View
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
          
          
          {activeTab === 'meetings' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">All Meetings</h2>
                <div className="flex gap-2">
                  <Button 
                    variant={activeTab === 'meetings' ? 'default' : 'outline'} 
                    size="sm"
                    className="rounded-full"
                  >
                    Upcoming meeting
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="rounded-full"
                  >
                    Completed meeting
                  </Button>
                </div>
              </div>

              {/* All Meetings Table */}
              <Card className="border-2">
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="border-b">
                        <tr className="text-left">
                          <th className="p-4 text-sm font-medium text-muted-foreground">Name</th>
                          <th className="p-4 text-sm font-medium text-muted-foreground">Email</th>
                          <th className="p-4 text-sm font-medium text-muted-foreground">Date</th>
                          <th className="p-4 text-sm font-medium text-muted-foreground">Time</th>
                          <th className="p-4 text-sm font-medium text-muted-foreground">Duration</th>
                          <th className="p-4 text-sm font-medium text-muted-foreground">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {upcomingSessions.concat(pastSessions.map(session => ({
                          ...session,
                          clientName: session.clientName,
                          clientTitle: session.clientTitle,
                          date: session.date,
                          time: '10:00 AM',
                          duration: session.duration,
                          email: `${session.clientName.toLowerCase().replace(' ', '.')}@email.com`
                        }))).map((session, index) => (
                          <tr key={index} className="border-b hover:bg-gray-50">
                            <td className="p-4">
                              <div>
                                <div className="font-medium text-sm">{session.clientName}</div>
                              </div>
                            </td>
                            <td className="p-4 text-sm text-muted-foreground">
                              {session.email || `${session.clientName.toLowerCase().replace(' ', '.')}@email.com`}
                            </td>
                            <td className="p-4 text-sm">{session.date}</td>
                            <td className="p-4 text-sm">{session.time}</td>
                            <td className="p-4 text-sm">{session.duration}</td>
                            <td className="p-4">
                              <Button 
                                size="sm" 
                                className="text-green-600 hover:text-green-700 bg-transparent hover:bg-green-50 border-none shadow-none p-2"
                              >
                                Join →
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  
                  {/* Pagination */}
                  <div className="flex items-center justify-between px-4 py-4 border-t">
                    <div className="text-sm text-muted-foreground">
                      Total: {upcomingSessions.length + pastSessions.length}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">Lines per page</span>
                      <select className="border rounded px-2 py-1 text-sm">
                        <option>10</option>
                        <option>25</option>
                        <option>50</option>
                      </select>
                      <div className="flex items-center gap-1">
                        <Button variant="outline" size="sm" disabled>
                          ←
                        </Button>
                        <Button variant="default" size="sm" className="bg-green-500 hover:bg-green-600">
                          1
                        </Button>
                        <Button variant="outline" size="sm">
                          2
                        </Button>
                        <span className="text-sm px-2">...</span>
                        <Button variant="outline" size="sm">
                          4
                        </Button>
                        <Button variant="outline" size="sm">
                          5
                        </Button>
                        <Button variant="outline" size="sm">
                          →
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">Reviews</h2>
              
              <div className="grid grid-cols-2 gap-6">
                {/* Total Reviews */}
                <Card className="border-2">
                  <CardContent className="p-6">
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">Total Reviews</h3>
                    <div className="text-3xl font-bold text-green-600 mb-1">160</div>
                    <p className="text-sm text-muted-foreground">Number of reviews of all time</p>
                  </CardContent>
                </Card>

                {/* Average Ratings */}
                <Card className="border-2">
                  <CardContent className="p-6">
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">Average ratings</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-3xl font-bold text-green-600">4.8</span>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${i < 4 ? 'fill-green-500 text-green-500' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Rating Breakdown */}
              <Card className="border-2">
                <CardContent className="p-6">
                  <h3 className="font-medium mb-4">Rating Breakdown</h3>
                  <div className="space-y-3">
                    {[
                      { stars: 5, count: 120, percentage: 75 },
                      { stars: 4, count: 25, percentage: 16 },
                      { stars: 3, count: 7, percentage: 4 },
                      { stars: 2, count: 5, percentage: 3 },
                      { stars: 1, count: 3, percentage: 2 }
                    ].map((rating) => (
                      <div key={rating.stars} className="flex items-center gap-4">
                        <div className="flex items-center gap-1 w-12">
                          <Star className="w-3 h-3 fill-green-500 text-green-500" />
                          <span className="text-sm">{rating.stars}</span>
                        </div>
                        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-green-500 rounded-full" 
                            style={{ width: `${rating.percentage}%` }}
                          />
                        </div>
                        <span className="text-sm text-muted-foreground w-8">{rating.count}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Review from users */}
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Review from users</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="border-b">
                        <tr className="text-left">
                          <th className="p-4 text-sm font-medium text-muted-foreground">Name</th>
                          <th className="p-4 text-sm font-medium text-muted-foreground">Ratings & Reviews</th>
                          <th className="p-4 text-sm font-medium text-muted-foreground">Date</th>
                          <th className="p-4 text-sm font-medium text-muted-foreground">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          {
                            name: 'Harry Brooks',
                            email: 'brooks@gmail.com',
                            rating: 5,
                            review: 'The session was extremely insightful. The expert broke down complex topics into simple, actionable steps.',
                            date: '3rd Sep 2025',
                            avatar: '/api/placeholder/40/40'
                          },
                          {
                            name: 'Isabella Grace Harrington',
                            email: 'isabell209@gmail.com',
                            rating: 4,
                            review: 'I really appreciated the patience and clarity. I left the call with a clear roadmap.',
                            date: '4th Sep 2025',
                            avatar: '/api/placeholder/40/40'
                          },
                          {
                            name: 'Sophia Martinez',
                            email: 'martinez999@gmail.com',
                            rating: 4,
                            review: 'Highly professional and knowledgeable. Definitely booking another session soon.',
                            date: '5th Sep 2025',
                            avatar: '/api/placeholder/40/40'
                          },
                          {
                            name: 'Robin Grace Harrington',
                            email: 'grace007@gmail.com',
                            rating: 4,
                            review: 'Felt like talking to a mentor who genuinely cared about my growth.',
                            date: '5th Sep 2025',
                            avatar: '/api/placeholder/40/40'
                          },
                          {
                            name: 'Emily Carter',
                            email: 'emily456@gmail.com',
                            rating: 3,
                            review: 'The expert gave me practical advice that I could apply the same day.',
                            date: '6th Sep 2025',
                            avatar: '/api/placeholder/40/40'
                          },
                          {
                            name: 'Sophie Grace Harrington',
                            email: 'sophie889@gmail.com',
                            rating: 3,
                            review: 'Super easy to understand and very encouraging throughout the session.',
                            date: '6th Sep 2025',
                            avatar: '/api/placeholder/40/40'
                          }
                        ].map((review, index) => (
                          <tr key={index} className="border-b hover:bg-gray-50">
                            <td className="p-4">
                              <div className="flex items-center gap-3">
                                <Avatar className="w-10 h-10">
                                  <AvatarImage src={review.avatar} alt={review.name} />
                                  <AvatarFallback>{getInitials(review.name)}</AvatarFallback>
                                </Avatar>
                                <div>
                                  <div className="font-medium text-sm">{review.name}</div>
                                  <div className="text-xs text-muted-foreground">{review.email}</div>
                                </div>
                              </div>
                            </td>
                            <td className="p-4 max-w-md">
                              <div className="flex items-center gap-1 mb-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star 
                                    key={i} 
                                    className={`w-3 h-3 ${i < review.rating ? 'fill-green-500 text-green-500' : 'text-gray-300'}`} 
                                  />
                                ))}
                                <span className="text-sm font-medium ml-1">{review.rating}</span>
                              </div>
                              <p className="text-sm text-muted-foreground">{review.review}</p>
                            </td>
                            <td className="p-4 text-sm">{review.date}</td>
                            <td className="p-4">
                              <div className="flex gap-2">
                                <Button variant="outline" size="sm" className="w-8 h-8 p-0">
                                  <Eye className="w-4 h-4" />
                                </Button>
                                <Button variant="outline" size="sm" className="w-8 h-8 p-0">
                                  <Download className="w-4 h-4" />
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  
                  {/* Pagination */}
                  <div className="flex items-center justify-between px-4 py-4 border-t">
                    <div className="text-sm text-muted-foreground">
                      Total: 6
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">Lines per page</span>
                      <select className="border rounded px-2 py-1 text-sm">
                        <option>10</option>
                        <option>25</option>
                        <option>50</option>
                      </select>
                      <div className="flex items-center gap-1">
                        <Button variant="outline" size="sm" disabled>
                          ←
                        </Button>
                        <Button variant="default" size="sm" className="bg-green-500 hover:bg-green-600">
                          1
                        </Button>
                        <Button variant="outline" size="sm">
                          2
                        </Button>
                        <span className="text-sm px-2">...</span>
                        <Button variant="outline" size="sm">
                          4
                        </Button>
                        <Button variant="outline" size="sm">
                          5
                        </Button>
                        <Button variant="outline" size="sm">
                          →
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === 'billing' && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">Billing & Payouts</h2>
              
              {/* Verification Status */}
              <Card className="border-2">
                <CardContent className="p-6">
                  <div className="p-4 border rounded-lg bg-yellow-50 border-yellow-200">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertCircle className="w-4 h-4 text-yellow-600" />
                      <span className="font-medium text-sm text-yellow-800">Verification Pending</span>
                    </div>
                    <p className="text-xs text-yellow-700 mb-2">
                      Your bank details are being verified. This usually takes 1-2 business days.
                    </p>
                    <Button variant="outline" size="sm" className="text-xs border-yellow-300 text-yellow-700">
                      View Status
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Bank Details */}
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle>Bank Account</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="p-3 border rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-sm">Chase Bank</p>
                          <p className="text-xs text-muted-foreground">••••••4242</p>
                          <p className="text-xs text-muted-foreground">Routing: ••••••1234</p>
                        </div>
                        <div className="flex items-center gap-1">
                          <Shield className="w-4 h-4 text-yellow-500" />
                          <span className="text-xs text-yellow-600">Pending</span>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full mt-4 text-sm">
                      <Edit className="w-4 h-4 mr-2" />
                      Update Bank Details
                    </Button>
                  </CardContent>
                </Card>
                
                {/* Payout Schedule */}
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle>Payout Schedule</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="p-3 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm">Next Payout</span>
                        <span className="font-medium text-sm">$2,640</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">Expected Date</span>
                        <span className="text-xs text-muted-foreground">April 1, 2024</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Recent Payments */}
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Recent Payments</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded border">
                      <div>
                        <p className="font-medium text-sm">Payout #PAY-001</p>
                        <p className="text-xs text-muted-foreground">Mar 1, 2024 • $2,140</p>
                      </div>
                      <Badge variant="secondary" className="text-xs bg-green-100 text-green-700">
                        Completed
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded border">
                      <div>
                        <p className="font-medium text-sm">Payout #PAY-002</p>
                        <p className="text-xs text-muted-foreground">Feb 1, 2024 • $1,880</p>
                      </div>
                      <Badge variant="secondary" className="text-xs bg-green-100 text-green-700">
                        Completed
                      </Badge>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4 text-sm">
                    <Receipt className="w-4 h-4 mr-2" />
                    View All Payments
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}
          
          {(activeTab === 'profile' || activeTab === 'availability' || activeTab === 'fees' || activeTab === 'expertise' || activeTab === 'charity' || activeTab === 'socials') && (
            <ProfileSettings />
          )}
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

      {/* Session Detail Overlay Sidebar */}
      {showSessionDetail && selectedSession && (
        <div className="fixed inset-0 bg-black/50 z-50">
          <div className="fixed right-0 top-0 h-full w-96 bg-white shadow-xl overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Session Details</h2>
                <Button 
                  variant="outline" 
                  size="icon"
                  className="rounded-full"
                  onClick={() => setShowSessionDetail(false)}
                >
                  ×
                </Button>
              </div>
              
              {/* Client Info */}
              <div className="flex items-center gap-4 mb-6">
                <Avatar className="w-16 h-16">
                  <AvatarImage src={selectedSession.avatar} alt={selectedSession.clientName} />
                  <AvatarFallback>{getInitials(selectedSession.clientName)}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-lg">{selectedSession.clientName}</h3>
                  <p className="text-muted-foreground">{selectedSession.clientTitle}</p>
                </div>
              </div>
              
              {/* Session Info */}
              <div className="space-y-4 mb-6">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium mb-2">{selectedSession.topic}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{selectedSession.summary}</p>
                  <div className="flex items-center gap-4 text-sm">
                    <span>📅 {selectedSession.date} at {selectedSession.time}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm mt-1">
                    <span>⏱️ {selectedSession.duration}</span>
                    <span>💰 {selectedSession.cost}</span>
                  </div>
                </div>
              </div>
              
              {/* Actions */}
              <div className="space-y-3">
                <Button className="w-full rounded-full">
                  <Video className="w-4 h-4 mr-2" />
                  Start Session
                </Button>
                <Button variant="outline" className="w-full rounded-full border-2 border-foreground">
                  <Calendar className="w-4 h-4 mr-2" />
                  Reschedule
                </Button>
                <Button variant="outline" className="w-full rounded-full border-2 border-foreground">
                  <Clock className="w-4 h-4 mr-2" />
                  Send Reminder
                </Button>
              </div>
              
              {/* Session Conversation */}
              <div className="mt-6 pt-6 border-t">
                <h4 className="font-medium mb-3">Conversation with Student</h4>
                <div className="space-y-3 mb-4">
                  {/* Previous messages */}
                  <div className="p-3 bg-blue-50 rounded-lg ml-6">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-medium">You</span>
                      <span className="text-xs text-muted-foreground">Yesterday 3:20 PM</span>
                    </div>
                    <p className="text-sm">Looking forward to our session tomorrow! I've prepared some materials based on your goals.</p>
                  </div>
                  
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-medium">{selectedSession.clientName}</span>
                      <span className="text-xs text-muted-foreground">Yesterday 4:15 PM</span>
                    </div>
                    <p className="text-sm">Perfect! I'm excited to dive into the roadmap discussion. Thanks for the prep work.</p>
                  </div>
                  
                  <div className="p-3 bg-blue-50 rounded-lg ml-6">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-medium">You</span>
                      <span className="text-xs text-muted-foreground">Today 9:30 AM</span>
                    </div>
                    <p className="text-sm">Just sent you the session agenda and some pre-reading materials via email.</p>
                  </div>
                </div>
                
                {/* New message input */}
                <div className="flex gap-2 mb-4">
                  <input 
                    type="text" 
                    className="flex-1 p-2 border-2 border-gray-200 rounded-lg" 
                    placeholder="Message your student..."
                  />
                  <Button size="sm" className="rounded-lg">
                    Send
                  </Button>
                </div>
              </div>
              
              {/* Session Prep */}
              <div className="pt-4 border-t">
                <h4 className="font-medium mb-3">Session Preparation</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span>Review client background</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span>Prepare session materials</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span>Test video setup</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ExpertDashboard