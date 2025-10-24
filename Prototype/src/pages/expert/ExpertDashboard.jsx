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
  ArrowUp
} from 'lucide-react'

const ExpertDashboard = () => {
  const [activeTab, setActiveTab] = useState('upcoming')
  const [showSessionDetail, setShowSessionDetail] = useState(false)
  const [selectedSession, setSelectedSession] = useState(null)

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

  const tabs = [
    { id: 'upcoming', label: 'Upcoming', count: upcomingSessions.length },
    { id: 'past', label: 'Past Sessions', count: pastSessions.length },
    { id: 'students', label: 'My Students' },
    { id: 'schedule', label: 'Schedule' }
  ]

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
      <section className="bg-gray-50 border-b px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-lg font-semibold mb-6">This Month's Performance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="border-2">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Earnings</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ArrowUp className="w-3 h-3 text-green-600" />
                    <span className={`text-xs ${getGrowthColor(stats.growth.earnings)}`}>
                      {formatGrowth(stats.growth.earnings)}
                    </span>
                  </div>
                </div>
                <p className="text-2xl font-bold">${stats.thisMonth.earnings.toLocaleString()}</p>
              </CardContent>
            </Card>
            
            <Card className="border-2">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Sessions</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ArrowUp className="w-3 h-3 text-green-600" />
                    <span className={`text-xs ${getGrowthColor(stats.growth.sessions)}`}>
                      {formatGrowth(stats.growth.sessions)}
                    </span>
                  </div>
                </div>
                <p className="text-2xl font-bold">{stats.thisMonth.sessions}</p>
              </CardContent>
            </Card>
            
            <Card className="border-2">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Students</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ArrowUp className="w-3 h-3 text-green-600" />
                    <span className={`text-xs ${getGrowthColor(stats.growth.students)}`}>
                      {formatGrowth(stats.growth.students)}
                    </span>
                  </div>
                </div>
                <p className="text-2xl font-bold">{stats.thisMonth.students}</p>
              </CardContent>
            </Card>
            
            <Card className="border-2">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Rating</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ArrowUp className="w-3 h-3 text-green-600" />
                    <span className={`text-xs ${getGrowthColor(stats.growth.rating * 100)}`}>
                      +{stats.growth.rating}
                    </span>
                  </div>
                </div>
                <p className="text-2xl font-bold">{stats.thisMonth.rating}</p>
              </CardContent>
            </Card>
          </div>
          
          {/* Charts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-2">
              <CardHeader>
                <CardTitle>Earnings Trend</CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer config={{}} className="h-[200px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={earningsData}>
                      <XAxis dataKey="month" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Line dataKey="earnings" stroke="#000000" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
            
            <Card className="border-2">
              <CardHeader>
                <CardTitle>Session Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer config={{}} className="h-[200px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={sessionsData}>
                      <XAxis dataKey="month" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar dataKey="sessions" fill="#000000" />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
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
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <Avatar className="w-16 h-16">
                  <AvatarImage src={expert.avatar} alt={expert.name} />
                  <AvatarFallback>{getInitials(expert.name)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-lg">{expert.name}</h3>
                    {expert.verified && <Award className="w-4 h-4 text-foreground" />}
                  </div>
                  <p className="text-sm text-muted-foreground">{expert.title}</p>
                </div>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Edit className="w-4 h-4" />
                </Button>
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <span>{expert.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  <span>{expert.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span>{expert.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4 text-muted-foreground" />
                  <span>{expert.company}</span>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t">
                <h4 className="font-medium mb-2">Expertise</h4>
                <div className="flex flex-wrap gap-1">
                  {expert.expertise.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="mt-4">
                <div className="flex items-center justify-between text-sm">
                  <span>Hourly Rate</span>
                  <span className="font-semibold">${expert.hourlyRate}</span>
                </div>
                <div className="flex items-center justify-between text-sm mt-1">
                  <span>Expert since</span>
                  <span>{expert.joinDate}</span>
                </div>
              </div>
              
              <Button 
                variant="outline" 
                className="w-full mt-4 rounded-full border-2 border-foreground"
                onClick={() => window.open(`/expert/${expert.name.toLowerCase().replace(' ', '-')}`, '_blank')}
              >
                <Eye className="w-4 h-4 mr-2" />
                View Public Profile
              </Button>
            </CardContent>
          </Card>
        </div>
        
        {/* Main Content Area */}
        <div className="flex-1">
          {/* Navigation Tabs */}
          <div className="border-b mb-6">
            <div className="flex space-x-8">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2 ${
                    activeTab === tab.id
                      ? 'border-foreground text-foreground'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.label}
                  {tab.count > 0 && (
                    <Badge variant="secondary" className="ml-1">
                      {tab.count}
                    </Badge>
                  )}
                </button>
              ))}
            </div>
          </div>
          
          {/* Tab Content */}
          {activeTab === 'upcoming' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingSessions.map((session) => (
                <Card 
                  key={session.id} 
                  className="border-2 border-foreground cursor-pointer hover:bg-gray-50"
                  onClick={() => {
                    setSelectedSession(session)
                    setShowSessionDetail(true)
                  }}
                >
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {/* Client Info */}
                      <div className="flex items-center gap-3">
                        <Avatar className="w-16 h-16">
                          <AvatarImage src={session.avatar} alt={session.clientName} />
                          <AvatarFallback>{getInitials(session.clientName)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold">{session.clientName}</h3>
                          <p className="text-muted-foreground">{session.clientTitle}</p>
                        </div>
                      </div>
                      
                      {/* Session Details */}
                      <div>
                        <h4 className="font-medium mb-2">{session.topic}</h4>
                        <p className="text-sm text-muted-foreground mb-3">{session.summary}</p>
                        
                        <div className="space-y-1 text-sm text-muted-foreground">
                          <p>📅 {session.date} at {session.time}</p>
                          <p>⏱️ Duration: {session.duration}</p>
                        </div>
                      </div>
                      
                      {/* Price */}
                      <div className="flex items-center justify-between pt-4 border-t">
                        <span className="text-2xl font-bold">{session.cost}</span>
                        <Button className="rounded-full">
                          View Details
                        </Button>
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
                <Card key={session.id} className="border-2 border-foreground">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {/* Client Info - need to add avatar placeholder since past sessions don't have avatar */}
                      <div className="flex items-center gap-3">
                        <Avatar className="w-16 h-16">
                          <AvatarImage src="/api/placeholder/40/40" alt={session.clientName} />
                          <AvatarFallback>{getInitials(session.clientName)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold">{session.clientName}</h3>
                          <p className="text-muted-foreground">{session.clientTitle}</p>
                        </div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      
                      {/* Session Details */}
                      <div>
                        <h4 className="font-medium mb-2">{session.topic}</h4>
                        <p className="text-sm text-muted-foreground mb-3">{session.feedback}</p>
                        
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`w-4 h-4 ${i < session.rating ? 'fill-foreground text-foreground' : 'text-gray-300'}`} 
                              />
                            ))}
                          </div>
                          <span className="text-sm text-muted-foreground">• {session.date}</span>
                        </div>
                      </div>
                      
                      {/* Price and Actions */}
                      <div className="space-y-3 pt-4 border-t">
                        <div className="flex items-center justify-between">
                          <span className="text-xl font-bold">{session.cost}</span>
                          <span className="text-sm text-muted-foreground">{session.duration}</span>
                        </div>
                        
                        <div className="flex gap-2">
                          <Button variant="outline" className="flex-1 rounded-full border-2 border-foreground">
                            Contact Again
                          </Button>
                          <Button variant="outline" className="rounded-full border-2 border-foreground">
                            <MessageCircle className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
          
          
          {activeTab === 'students' && (
            <div className="text-center py-12">
              <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">Student management interface coming soon...</p>
            </div>
          )}
          
          {activeTab === 'schedule' && (
            <div className="text-center py-12">
              <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">Schedule management interface coming soon...</p>
            </div>
          )}
        </div>
      </div>

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