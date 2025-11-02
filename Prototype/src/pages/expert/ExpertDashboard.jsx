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
  ChevronDown,
  X,
  Crown,
  Package,
  Trash2,
  CalendarDays
} from 'lucide-react'

const ExpertDashboard = () => {
  const [activeTab, setActiveTab] = useState('upcoming')
  const [showSessionDetail, setShowSessionDetail] = useState(false)
  const [selectedSession, setSelectedSession] = useState(null)
  const [showVerificationModal, setShowVerificationModal] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [settingsTab, setSettingsTab] = useState('basic')
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('card')

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
      title: 'Analytics',
      items: [
        { id: 'analytics', label: 'Analytics', icon: TrendingUp },
        { id: 'billing', label: 'Billing & Payouts', icon: CreditCard }
      ]
    }
  ]


  const SidebarIcon = ({ icon: Icon, isActive }) => (
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
        {/* Sidebar */}
        <div className="w-80 space-y-6">
          {/* Expert Profile Card */}
          <Card className="border-2 border-foreground">
            <CardContent className="p-4">
              <div className="flex gap-4 mb-4">
                <div className="relative">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={expert.avatar} alt={expert.name} />
                    <AvatarFallback className="text-lg">{getInitials(expert.name)}</AvatarFallback>
                  </Avatar>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="absolute -bottom-1 -right-1 rounded-full w-6 h-6 p-0 bg-white shadow-md"
                  >
                    <Edit className="w-2 h-2" />
                  </Button>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-lg">{expert.name}</h3>
                    {expert.verified && <Crown className="w-4 h-4 text-yellow-500" />}
                  </div>
                  <div className="space-y-1 text-xs">
                    <div className="flex items-center gap-2">
                      <Mail className="w-3 h-3 text-muted-foreground" />
                      <span className="text-muted-foreground truncate">{expert.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-3 h-3 text-muted-foreground" />
                      <span className="text-muted-foreground">{expert.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3 h-3 text-muted-foreground" />
                      <span className="text-muted-foreground">{expert.location}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{stats.thisMonth.rating}</span>
                  <span className="text-xs text-muted-foreground">({stats.thisMonth.sessions} sessions)</span>
                </div>
                <Badge variant="secondary" className="bg-green-100 text-green-700">
                  {expert.verified ? 'Verified Expert' : 'Pending'}
                </Badge>
              </div>
              
              <div className="p-2 bg-green-50 rounded-lg mb-4">
                <div className="flex items-center justify-center gap-2 text-xs text-green-700">
                  <Eye className="w-3 h-3" />
                  <span>Profile visible to clients</span>
                </div>
              </div>
              
              <div className="space-y-3 text-xs">
                <div>
                  <h4 className="font-medium mb-1 text-sm">Professional Title</h4>
                  <p className="text-muted-foreground">{expert.title}</p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-1 text-sm">Bio</h4>
                  <p className="text-muted-foreground">{expert.bio}</p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-1 text-sm">Expertise</h4>
                  <p className="text-muted-foreground">{expert.specialization}</p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-1 text-sm">Hourly Rate</h4>
                  <p className="text-muted-foreground font-medium">${expert.hourlyRate}/hour</p>
                </div>
              </div>
              
              <Button 
                className="w-full mt-4 rounded-full text-sm"
                onClick={() => setShowSettings(true)}
              >
                <Settings className="w-3 h-3 mr-2" />
                Expert Settings
              </Button>
            </CardContent>
          </Card>

          {/* Navigation Sidebar */}
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

          {activeTab === 'analytics' && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">Analytics</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle className="text-lg">Revenue Trend</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer config={{ earnings: { color: '#10b981' } }} className="h-48">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={earningsData}>
                          <XAxis dataKey="month" />
                          <YAxis />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Line 
                            type="monotone" 
                            dataKey="earnings" 
                            stroke="#10b981" 
                            strokeWidth={3}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </CardContent>
                </Card>
                
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle className="text-lg">Session Volume</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer config={{ sessions: { color: '#3b82f6' } }} className="h-48">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={sessionsData}>
                          <XAxis dataKey="month" />
                          <YAxis />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Bar dataKey="sessions" fill="#3b82f6" radius={4} />
                        </BarChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </CardContent>
                </Card>
              </div>
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
          
        </div>
      </div>

      {/* Expert Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-6xl max-h-[90vh] overflow-hidden">
            <div className="flex">
              {/* Settings Sidebar */}
              <div className="w-64 bg-gray-50 p-6 border-r">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold">Expert Settings</h2>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowSettings(false)}
                    className="rounded-full w-8 h-8 p-0"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
                
                <nav className="space-y-2">
                  {[
                    { id: 'basic', label: 'Basic Information', icon: User },
                    { id: 'professional', label: 'Professional Profile', icon: Award },
                    { id: 'sessions', label: 'Session Types', icon: Package },
                    { id: 'availability', label: 'Availability', icon: CalendarDays },
                    { id: 'billing', label: 'Billing & Payments', icon: CreditCard },
                    { id: 'charity', label: 'Charity', icon: Heart }
                  ].map(tab => {
                    const Icon = tab.icon
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setSettingsTab(tab.id)}
                        className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                          settingsTab === tab.id
                            ? 'bg-white shadow-sm font-medium'
                            : 'hover:bg-gray-100 text-gray-600'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        <span className="text-sm">{tab.label}</span>
                      </button>
                    )
                  })}
                </nav>
              </div>
              
              {/* Settings Content */}
              <div className="flex-1 p-6 overflow-y-auto max-h-[90vh]">
                {settingsTab === 'basic' && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold">Basic Information</h3>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">First Name</label>
                        <input 
                          type="text" 
                          defaultValue="Isabella"
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Last Name</label>
                        <input 
                          type="text" 
                          defaultValue="Grace"
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email</label>
                      <input 
                        type="email" 
                        defaultValue={expert.email}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                      />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium mb-2 block">Phone</label>
                      <input 
                        type="tel" 
                        defaultValue={expert.phone}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                      />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium mb-2 block">Title*</label>
                      <input 
                        type="text" 
                        defaultValue={expert.title}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                        placeholder="Founder & CEO of TechNova"
                      />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Short Description*
                        <span className="text-xs text-gray-500 ml-2">100 characters</span>
                      </label>
                      <textarea
                        defaultValue={expert.bio}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 h-24 resize-none"
                        placeholder="Brief description of expertise..."
                        maxLength={100}
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Location*</label>
                        <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900">
                          <option value="US">United States</option>
                          <option value="CA">Canada</option>
                          <option value="GB">United Kingdom</option>
                          <option value="DE">Germany</option>
                          <option value="FR">France</option>
                          <option value="AU">Australia</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Gender*</label>
                        <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900">
                          <option value="">Select gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="non-binary">Non-binary</option>
                          <option value="prefer-not-say">Prefer not to say</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium mb-2 block">Language Preference*</label>
                      <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900">
                        <option value="">Select language</option>
                        <option value="english">English</option>
                        <option value="arabic">Arabic</option>
                        <option value="both">English & Arabic</option>
                      </select>
                    </div>
                  </div>
                )}

                {settingsTab === 'professional' && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold">Professional Profile</h3>
                    
                    {/* Expertise Categories */}
                    <div className="space-y-4">
                      <h4 className="font-medium">Expertise Categories</h4>
                      <div className="grid grid-cols-3 gap-4">
                        {['Business & Startups', 'Career & Professional', 'Marketing & Brand', 'Tech & Product', 'Wellness & Mental', 'Finance & Investment'].map(category => (
                          <button
                            key={category}
                            className="flex flex-col items-center p-4 border-2 rounded-lg transition-all hover:border-gray-400 border-gray-200"
                          >
                            <div className="w-full h-16 bg-gray-200 rounded-lg mb-3 flex items-center justify-center">
                              <span className="text-gray-500 text-xs">📊</span>
                            </div>
                            <span className="text-sm font-medium text-center">{category}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Expertise Tags */}
                    <div className="space-y-4">
                      <h4 className="font-medium">Expertise Tags</h4>
                      <div className="flex flex-wrap gap-3">
                        {['Leadership & Team Building', 'Scaling Startups', 'Fundraising & Pitching', 'Exit Strategy & M&A', 'Product Strategy', 'Market Analysis'].map(tag => (
                          <button
                            key={tag}
                            className="px-4 py-2 border-2 rounded-full text-sm font-medium transition-all border-gray-200 text-gray-600 hover:border-gray-400"
                          >
                            {tag}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Industries */}
                    <div className="space-y-4">
                      <h4 className="font-medium">Industries</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {['Technology', 'Finance', 'Healthcare', 'Marketing', 'Consulting', 'Real Estate', 'Legal', 'Education'].map(industry => (
                          <label
                            key={industry}
                            className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer transition-all border-gray-200 hover:border-gray-400"
                          >
                            <input
                              type="checkbox"
                              className="w-4 h-4 text-gray-900 border-gray-300 rounded focus:ring-gray-900"
                            />
                            <span className="text-sm">{industry}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {settingsTab === 'sessions' && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold">Session Types & Pricing</h3>
                    <p className="text-sm text-gray-600">
                      Manage the session types that clients will see when booking with you.
                    </p>
                    
                    {/* Platform Fee Info */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-sm mb-2">Platform Fee</h4>
                      <p className="text-xs text-gray-600">
                        TapTime charges a 20% platform fee on all sessions. This includes payment processing, support, and platform maintenance.
                      </p>
                    </div>

                    {/* Quick Pricing Setup */}
                    <div className="space-y-4">
                      <h4 className="font-medium">Quick Setup</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium mb-2 block">Base Hourly Rate</label>
                          <div className="flex items-center">
                            <span className="text-lg font-medium mr-2">$</span>
                            <input 
                              type="number" 
                              defaultValue="500"
                              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                              placeholder="500"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-2 block">Default Duration</label>
                          <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900">
                            <option value="15">15 min</option>
                            <option value="30">30 min</option>
                            <option value="45">45 min</option>
                            <option value="60">60 min</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Session Types Summary */}
                    <div className="space-y-3">
                      <h4 className="font-medium">Current Session Types</h4>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-3 border rounded-lg">
                          <div>
                            <span className="font-medium text-sm">General Consultation</span>
                            <p className="text-xs text-gray-600">15/30/45 min options</p>
                          </div>
                          <span className="text-sm font-medium">$500-1500</span>
                        </div>
                        <Button variant="outline" className="w-full border-2 border-gray-300 hover:border-gray-900">
                          <Package className="w-4 h-4 mr-2" />
                          Manage Advanced Session Types
                        </Button>
                      </div>
                    </div>
                  </div>
                )}

                {settingsTab === 'availability' && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold">Availability Settings</h3>
                    
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Timezone</label>
                        <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900">
                          <option value="">Select timezone</option>
                          <option value="PST">America/Los_Angeles (PST)</option>
                          <option value="EST">America/New_York (EST)</option>
                          <option value="GMT">Europe/London (GMT)</option>
                          <option value="CET">Europe/Berlin (CET)</option>
                          <option value="GST">Asia/Dubai (GST)</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Default Slot Duration</label>
                        <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900">
                          <option value="30">30 min</option>
                          <option value="15">15 min</option>
                          <option value="45">45 min</option>
                          <option value="60">60 min</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Buffer Time</label>
                      <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900">
                        <option value="15">15 min</option>
                        <option value="5">5 min</option>
                        <option value="10">10 min</option>
                        <option value="30">30 min</option>
                      </select>
                    </div>

                    <Button className="w-full border-2 border-gray-300 hover:border-gray-900" variant="outline">
                      <CalendarDays className="w-4 h-4 mr-2" />
                      Manage Calendar & Time Slots
                    </Button>
                  </div>
                )}

                {settingsTab === 'billing' && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold">Billing & Payments</h3>
                    
                    {/* Payment Method Selection */}
                    <div className="space-y-4">
                      <h4 className="font-medium">How would you like to receive payments?</h4>
                      <div className="space-y-3">
                        {[
                          { id: 'card', label: 'Credit/Debit Card', icon: '💳' },
                          { id: 'bank', label: 'Bank Transfer', icon: '🏦' },
                          { id: 'paypal', label: 'PayPal', icon: '💰' }
                        ].map(method => (
                          <label
                            key={method.id}
                            className={`flex items-center p-3 border rounded-lg cursor-pointer transition-all ${
                              selectedPaymentMethod === method.id 
                                ? 'border-gray-900 bg-gray-50' 
                                : 'border-gray-200 hover:border-gray-400'
                            }`}
                          >
                            <input
                              type="radio"
                              name="paymentMethod"
                              value={method.id}
                              checked={selectedPaymentMethod === method.id}
                              onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                              className="w-4 h-4 text-gray-900 border-gray-300 focus:ring-gray-900"
                            />
                            <span className="text-lg mr-3 ml-3">{method.icon}</span>
                            <span className="font-medium">{method.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Conditional Payment Forms */}
                    {selectedPaymentMethod === 'card' && (
                      <div className="space-y-4">
                        <h4 className="font-medium">Card Details</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium mb-2 block">Card Number</label>
                            <input 
                              type="text" 
                              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                              placeholder="1234 5678 9012 3456"
                            />
                          </div>
                          <div>
                            <label className="text-sm font-medium mb-2 block">Expiry Date</label>
                            <input 
                              type="text" 
                              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                              placeholder="MM/YY"
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {selectedPaymentMethod === 'bank' && (
                      <div className="space-y-4">
                        <h4 className="font-medium">Bank Account Details</h4>
                        <div className="space-y-4">
                          <div>
                            <label className="text-sm font-medium mb-2 block">Account Holder Name</label>
                            <input 
                              type="text" 
                              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                              placeholder="John Smith"
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="text-sm font-medium mb-2 block">Routing Number</label>
                              <input 
                                type="text" 
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                                placeholder="123456789"
                              />
                            </div>
                            <div>
                              <label className="text-sm font-medium mb-2 block">Account Number</label>
                              <input 
                                type="text" 
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                                placeholder="1234567890"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {settingsTab === 'charity' && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold">Charity Support</h3>
                    <p className="text-sm text-gray-600">
                      Inspire others by supporting a cause you love (You'll manage donations directly — TapTime doesn't handle transactions.)
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Charity Name</label>
                        <input 
                          type="text" 
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                          placeholder="Enter charity name"
                        />
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium mb-2 block">Charity Website URL</label>
                        <input 
                          type="url" 
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                          placeholder="https://charity-website.org"
                        />
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="flex justify-end gap-3 mt-8 pt-6 border-t">
                  <Button variant="outline" onClick={() => setShowSettings(false)}>
                    Cancel
                  </Button>
                  <Button>
                    Save Changes
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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