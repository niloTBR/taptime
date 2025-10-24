import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import { 
  Calendar,
  Clock,
  Star,
  Video,
  Plus,
  CheckCircle,
  ArrowRight,
  MessageCircle,
  MoreHorizontal,
  User,
  Settings,
  Bell,
  BookOpen,
  TrendingUp,
  Target,
  MapPin,
  Mail,
  Phone,
  Building,
  Edit
} from 'lucide-react'

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState('upcoming')
  const [showReschedule, setShowReschedule] = useState(false)
  const [selectedSession, setSelectedSession] = useState(null)
  const [showSessionDetail, setShowSessionDetail] = useState(false)

  // Mock user data from onboarding
  const user = {
    name: 'Sarah Johnson',
    email: 'sarah.j@email.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    company: 'TechCorp Inc.',
    role: 'Product Manager',
    industry: 'Technology',
    experience: '5+ years',
    avatar: '/api/placeholder/40/40',
    memberSince: 'January 2024',
    interests: ['Product Strategy', 'Team Leadership', 'Growth Marketing'],
    goals: 'Build better products and lead high-performing teams',
    budget: '$100-250 per session'
  }

  const activityData = [
    { month: 'Jan', sessions: 2 },
    { month: 'Feb', sessions: 4 },
    { month: 'Mar', sessions: 6 }
  ]

  const topicsData = [
    { name: 'Product Strategy', value: 40, color: '#000000' },
    { name: 'Team Leadership', value: 35, color: '#666666' },
    { name: 'Growth Marketing', value: 25, color: '#999999' }
  ]

  const suggestedExperts = [
    {
      name: 'Dr. Robert Kim',
      title: 'AI Product Strategy',
      rating: 4.9,
      sessions: 200,
      price: '$220/hr',
      reason: 'Based on your interest in Product Strategy',
      avatar: '/api/placeholder/40/40'
    },
    {
      name: 'Maria Santos',
      title: 'Team Leadership Coach',
      rating: 4.8,
      sessions: 150,
      price: '$180/hr',
      reason: 'Matches your leadership goals',
      avatar: '/api/placeholder/40/40'
    }
  ]

  const conversations = [
    {
      id: 1,
      expertName: 'Dr. Michael Chen',
      lastMessage: 'Looking forward to our session tomorrow!',
      time: '2 hours ago',
      unread: 1,
      avatar: '/api/placeholder/40/40'
    },
    {
      id: 2,
      expertName: 'Lisa Park',
      lastMessage: 'Here are the resources I mentioned...',
      time: '1 day ago',
      unread: 0,
      avatar: '/api/placeholder/40/40'
    }
  ]

  const upcomingSessions = [
    {
      id: 1,
      expertName: 'Dr. Michael Chen',
      expertTitle: 'Product Strategy Expert',
      date: 'Tomorrow',
      time: '2:00 PM',
      duration: '60 min',
      topic: 'Product Roadmap Review',
      summary: 'Review your current product strategy and identify areas for improvement. We\'ll discuss market positioning and competitive analysis.',
      cost: '$200',
      avatar: '/api/placeholder/40/40'
    },
    {
      id: 2,
      expertName: 'Lisa Park',
      expertTitle: 'Marketing Strategy',
      date: 'March 25',
      time: '10:00 AM',
      duration: '45 min',
      topic: 'Growth Marketing Session',
      summary: 'Deep dive into growth marketing tactics and customer acquisition strategies for your business.',
      cost: '$150',
      avatar: '/api/placeholder/40/40'
    }
  ]

  const pastSessions = [
    {
      id: 1,
      expertName: 'Emily Rodriguez',
      expertTitle: 'UX Design Lead',
      date: 'Mar 18',
      rating: 5,
      topic: 'Design System Consultation',
      duration: '60 min',
      cost: '$180',
      feedback: 'Excellent insights on building scalable design systems. Very actionable advice.',
      hasReview: false
    },
    {
      id: 2,
      expertName: 'James Wilson',
      expertTitle: 'Business Coach',
      date: 'Mar 10',
      rating: 4,
      topic: 'Business Planning Strategy',
      duration: '75 min',
      cost: '$200',
      feedback: 'Great strategic guidance. Helped clarify our business direction.',
      hasReview: true
    },
    {
      id: 3,
      expertName: 'Anna Taylor',
      expertTitle: 'Product Manager',
      date: 'Mar 5',
      rating: 5,
      topic: 'Product Roadmap Planning',
      duration: '60 min',
      cost: '$160',
      feedback: 'Amazing session! Clear roadmap and priorities established.',
      hasReview: true
    }
  ]

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()
  }

  const tabs = [
    { id: 'upcoming', label: 'Upcoming', count: upcomingSessions.length },
    { id: 'past', label: 'Past Sessions', count: pastSessions.length },
    { id: 'analytics', label: 'Analytics' },
    { id: 'discover', label: 'Discover' }
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
            <h1 className="text-2xl font-semibold">Dashboard</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <Button className="rounded-full">
              <Plus className="w-4 h-4 mr-2" />
              Book Session
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Bell className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content with Sidebar */}
      <div className="max-w-7xl mx-auto flex gap-6 p-6">
        {/* Sidebar */}
        <div className="w-80 space-y-6">
          {/* User Profile Card */}
          <Card className="border-2 border-foreground">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <Avatar className="w-16 h-16">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{user.name}</h3>
                  <p className="text-sm text-muted-foreground">{user.role} at {user.company}</p>
                </div>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Edit className="w-4 h-4" />
                </Button>
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <span>{user.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  <span>{user.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span>{user.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4 text-muted-foreground" />
                  <span>{user.industry} • {user.experience}</span>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t">
                <h4 className="font-medium mb-2">Interests</h4>
                <div className="flex flex-wrap gap-1">
                  {user.interests.map((interest, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {interest}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="mt-4">
                <h4 className="font-medium mb-2">Goal</h4>
                <p className="text-sm text-muted-foreground">{user.goals}</p>
              </div>
            </CardContent>
          </Card>
          
          {/* Quick Stats */}
          <Card className="border-2 border-foreground">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">Your Progress</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Total Sessions</span>
                  <span className="font-semibold">{pastSessions.length + upcomingSessions.length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">This Month</span>
                  <span className="font-semibold">6</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Avg Rating Given</span>
                  <span className="font-semibold">4.7 ⭐</span>
                </div>
              </div>
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
            <div className="space-y-4">
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
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={session.avatar} alt={session.expertName} />
                          <AvatarFallback>{getInitials(session.expertName)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold">{session.expertName}</h3>
                          <p className="text-sm text-muted-foreground">{session.expertTitle}</p>
                          <p className="text-sm text-muted-foreground">
                            {session.date} at {session.time} • {session.duration}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">{session.cost}</p>
                        <p className="text-sm text-muted-foreground">{session.topic}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          
          {activeTab === 'past' && (
            <div className="space-y-4">
              {pastSessions.map((session) => (
                <Card key={session.id} className="border-2 border-foreground">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-semibold">{session.topic}</h3>
                        <p className="text-muted-foreground">with {session.expertName} • {session.date}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`w-4 h-4 ${i < session.rating ? 'fill-foreground text-foreground' : 'text-gray-300'}`} 
                              />
                            ))}
                          </div>
                          <span className="text-sm text-muted-foreground">• {session.duration}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">{session.cost}</p>
                        <div className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                      </div>
                    </div>
                    
                    {session.feedback && (
                      <p className="text-sm text-muted-foreground mb-4">{session.feedback}</p>
                    )}
                    
                    <div className="flex gap-3">
                      <Button variant="outline" className="rounded-full border-2 border-foreground">
                        Book Again
                      </Button>
                      {!session.hasReview && (
                        <Button variant="outline" className="rounded-full border-2 border-foreground">
                          Leave Review
                        </Button>
                      )}
                      <Button variant="outline" className="rounded-full border-2 border-foreground">
                        <ArrowRight className="w-4 h-4 mr-2" />
                        View Expert
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
          
          
          {activeTab === 'analytics' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-2 border-foreground">
                  <CardHeader>
                    <CardTitle>Session Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer config={{}} className="h-[200px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={activityData}>
                          <XAxis dataKey="month" />
                          <YAxis />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Bar dataKey="sessions" fill="#000000" />
                        </BarChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </CardContent>
                </Card>
                
                <Card className="border-2 border-foreground">
                  <CardHeader>
                    <CardTitle>Topics of Interest</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer config={{}} className="h-[200px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={topicsData}
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            dataKey="value"
                            label={({ name, value }) => `${name}: ${value}%`}
                          >
                            {topicsData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <ChartTooltip content={<ChartTooltipContent />} />
                        </PieChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
          
          {activeTab === 'discover' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-6">Recommended for You</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {suggestedExperts.map((expert, index) => (
                    <Card key={index} className="border-2 border-foreground">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4 mb-4">
                          <Avatar className="w-16 h-16">
                            <AvatarImage src={expert.avatar} alt={expert.name} />
                            <AvatarFallback>{getInitials(expert.name)}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold">{expert.name}</h3>
                            <p className="text-muted-foreground">{expert.title}</p>
                            <div className="flex items-center gap-2 mt-2">
                              <div className="flex items-center gap-1">
                                <Star className="w-4 h-4 fill-foreground text-foreground" />
                                <span className="font-medium">{expert.rating}</span>
                              </div>
                              <span className="text-sm text-muted-foreground">•</span>
                              <span className="text-sm text-muted-foreground">{expert.sessions} sessions</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-xl font-bold">{expert.price}</p>
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <p className="text-sm text-blue-600 bg-blue-50 px-2 py-1 rounded">
                            💡 {expert.reason}
                          </p>
                        </div>
                        
                        <div className="flex gap-3">
                          <Button className="flex-1 rounded-full">
                            Book Session
                          </Button>
                          <Button 
                            variant="outline" 
                            className="rounded-full border-2 border-foreground"
                            onClick={() => window.open(`/expert/${expert.name.toLowerCase().replace(' ', '-')}`, '_blank')}
                          >
                            View Profile
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
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
              
              {/* Expert Info */}
              <div className="flex items-center gap-4 mb-6">
                <Avatar className="w-16 h-16">
                  <AvatarImage src={selectedSession.avatar} alt={selectedSession.expertName} />
                  <AvatarFallback>{getInitials(selectedSession.expertName)}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-lg">{selectedSession.expertName}</h3>
                  <p className="text-muted-foreground">{selectedSession.expertTitle}</p>
                  <Button 
                    variant="link" 
                    className="p-0 h-auto text-sm"
                    onClick={() => window.open(`/expert/${selectedSession.expertName.toLowerCase().replace(' ', '-')}`, '_blank')}
                  >
                    View Full Profile
                  </Button>
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
                  Join Session
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full rounded-full border-2 border-foreground"
                  onClick={() => {
                    setShowSessionDetail(false)
                    setShowReschedule(true)
                  }}
                >
                  Reschedule
                </Button>
              </div>
              
              {/* Session Conversation */}
              <div className="mt-6 pt-6 border-t">
                <h4 className="font-medium mb-3">Conversation with Expert</h4>
                <div className="space-y-3 mb-4">
                  {/* Previous messages */}
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-medium">{selectedSession.expertName}</span>
                      <span className="text-xs text-muted-foreground">Yesterday 3:20 PM</span>
                    </div>
                    <p className="text-sm">Looking forward to our session tomorrow! I've prepared some materials based on your goals.</p>
                  </div>
                  
                  <div className="p-3 bg-blue-50 rounded-lg ml-6">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-medium">You</span>
                      <span className="text-xs text-muted-foreground">Yesterday 4:15 PM</span>
                    </div>
                    <p className="text-sm">Perfect! I'm excited to dive into the roadmap discussion. Thanks for the prep work.</p>
                  </div>
                  
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-medium">{selectedSession.expertName}</span>
                      <span className="text-xs text-muted-foreground">Today 9:30 AM</span>
                    </div>
                    <p className="text-sm">Just sent you the session agenda and some pre-reading materials via email.</p>
                  </div>
                </div>
                
                {/* New message input */}
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    className="flex-1 p-2 border-2 border-gray-200 rounded-lg" 
                    placeholder="Type a message..."
                  />
                  <Button size="sm" className="rounded-lg">
                    Send
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Reschedule Modal */}
      {showReschedule && selectedSession && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <Card className="w-full max-w-md mx-4 border-2 border-foreground">
            <CardHeader>
              <CardTitle>Reschedule Session</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium">{selectedSession.topic}</h4>
                <p className="text-sm text-muted-foreground">with {selectedSession.expertName}</p>
                <p className="text-sm text-muted-foreground">Currently: {selectedSession.date} at {selectedSession.time}</p>
              </div>
              
              <div className="space-y-3">
                <div>
                  <label className="text-sm font-medium">New Date</label>
                  <input type="date" className="w-full mt-1 p-2 border-2 border-foreground rounded-lg" />
                </div>
                <div>
                  <label className="text-sm font-medium">New Time</label>
                  <select className="w-full mt-1 p-2 border-2 border-foreground rounded-lg">
                    <option>9:00 AM</option>
                    <option>10:00 AM</option>
                    <option>2:00 PM</option>
                    <option>4:00 PM</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium">Reason (Optional)</label>
                  <textarea 
                    className="w-full mt-1 p-2 border-2 border-foreground rounded-lg" 
                    rows="2" 
                    placeholder="Let the expert know why you're rescheduling..."
                  ></textarea>
                </div>
              </div>
              
              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  className="flex-1 rounded-full border-2 border-foreground"
                  onClick={() => setShowReschedule(false)}
                >
                  Cancel
                </Button>
                <Button 
                  className="flex-1 rounded-full"
                  onClick={() => {
                    setShowReschedule(false)
                    setSelectedSession(null)
                  }}
                >
                  Confirm Reschedule
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}

export default UserDashboard