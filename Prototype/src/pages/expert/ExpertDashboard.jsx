import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { 
  Calendar,
  Clock,
  Star,
  DollarSign,
  TrendingUp,
  Users,
  MessageCircle,
  Video,
  Phone,
  Settings,
  User,
  BookOpen,
  BarChart3,
  PieChart,
  CreditCard,
  Bell,
  Plus,
  Edit,
  Eye,
  MoreHorizontal,
  CheckCircle,
  XCircle,
  AlertCircle,
  Globe,
  Award,
  Target,
  Zap
} from 'lucide-react'

const ExpertDashboard = () => {
  const [selectedTab, setSelectedTab] = useState('dashboard')
  const [selectedPeriod, setSelectedPeriod] = useState('month')

  // Mock expert data
  const expert = {
    name: 'Dr. Michael Chen',
    title: 'Senior Product Manager & Tech Advisor',
    avatar: '/api/placeholder/40/40',
    rating: 4.9,
    totalSessions: 234,
    joinDate: '2023-08-15',
    verified: true,
    expertise: ['Product Strategy', 'Team Leadership', 'Tech Startups'],
    languages: ['English', 'Mandarin'],
    hourlyRate: 200
  }

  const stats = {
    monthlyEarnings: 8640,
    totalEarnings: 46800,
    sessionsThisMonth: 43,
    totalSessions: 234,
    averageRating: 4.9,
    responseTime: '2 hours',
    completionRate: 98,
    repeatClients: 67
  }

  const upcomingSessions = [
    {
      id: 1,
      clientName: 'Sarah Johnson',
      date: '2024-03-20',
      time: '2:00 PM',
      duration: '60 min',
      type: 'video',
      topic: 'Product Strategy Review',
      fee: '$200',
      status: 'confirmed'
    },
    {
      id: 2,
      clientName: 'Emily Rodriguez',
      date: '2024-03-20',
      time: '4:30 PM',
      duration: '45 min',
      type: 'phone',
      topic: 'Team Management Consultation',
      fee: '$150',
      status: 'pending'
    },
    {
      id: 3,
      clientName: 'David Thompson',
      date: '2024-03-21',
      time: '10:00 AM',
      duration: '90 min',
      type: 'video',
      topic: 'Startup Strategy Deep Dive',
      fee: '$300',
      status: 'confirmed'
    }
  ]

  const recentSessions = [
    {
      id: 1,
      clientName: 'Lisa Park',
      date: '2024-03-18',
      rating: 5,
      feedback: 'Exceptional insights! Michael helped us pivot our product strategy.',
      fee: '$200',
      duration: '60 min',
      topic: 'Product Strategy'
    },
    {
      id: 2,
      clientName: 'James Wilson',
      date: '2024-03-17',
      rating: 5,
      feedback: 'Great advice on scaling engineering teams. Highly recommended!',
      fee: '$200',
      duration: '60 min',
      topic: 'Team Leadership'
    },
    {
      id: 3,
      clientName: 'Anna Taylor',
      date: '2024-03-15',
      rating: 4,
      feedback: 'Very helpful session on market validation strategies.',
      fee: '$200',
      duration: '60 min',
      topic: 'Market Strategy'
    }
  ]

  const earnings = {
    thisMonth: [
      { week: 'Week 1', amount: 2200 },
      { week: 'Week 2', amount: 2800 },
      { week: 'Week 3', amount: 2640 },
      { week: 'Week 4', amount: 1000 }
    ],
    lastMonth: [
      { week: 'Week 1', amount: 2400 },
      { week: 'Week 2', amount: 2600 },
      { week: 'Week 3', amount: 2200 },
      { week: 'Week 4', amount: 2800 }
    ]
  }

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800'
      case 'pending': return 'bg-yellow-100 text-yellow-800'
      case 'cancelled': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getSessionIcon = (type) => {
    switch (type) {
      case 'video': return <Video className="w-4 h-4" />
      case 'phone': return <Phone className="w-4 h-4" />
      default: return <MessageCircle className="w-4 h-4" />
    }
  }

  const tabs = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'sessions', label: 'My Sessions' },
    { id: 'schedule', label: 'Schedule' },
    { id: 'earnings', label: 'Earnings' },
    { id: 'profile', label: 'Profile' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-foreground text-background rounded-lg flex items-center justify-center font-bold">
              T
            </div>
            <h1 className="text-2xl font-semibold">Expert Dashboard</h1>
            <Badge variant="secondary">Join As Expert Panel</Badge>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="rounded-full border-2 border-foreground">
              <Plus className="w-4 h-4 mr-2" />
              Add Availability
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              <Bell className="w-4 h-4" />
            </Button>
            <Avatar className="w-8 h-8">
              <AvatarImage src={expert.avatar} alt={expert.name} />
              <AvatarFallback>{getInitials(expert.name)}</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200 px-6">
        <div className="flex space-x-8">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                selectedTab === tab.id
                  ? 'border-foreground text-foreground'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {selectedTab === 'dashboard' && (
          <div className="space-y-6">
            {/* Welcome Section */}
            <div className="bg-white rounded-lg p-6 border-2 border-foreground">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={expert.avatar} alt={expert.name} />
                    <AvatarFallback>{getInitials(expert.name)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-2xl font-semibold">{expert.name}</h2>
                      {expert.verified && <Award className="w-5 h-5 text-foreground" />}
                    </div>
                    <p className="text-muted-foreground">{expert.title}</p>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-foreground text-foreground" />
                        <span className="text-sm font-medium">{expert.rating}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">•</span>
                      <span className="text-sm text-muted-foreground">{expert.totalSessions} sessions</span>
                      <span className="text-sm text-muted-foreground">•</span>
                      <span className="text-sm text-muted-foreground">${expert.hourlyRate}/hr</span>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="rounded-full border-2 border-foreground">
                  <Eye className="w-4 h-4 mr-2" />
                  View Public Profile
                </Button>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-2 border-foreground">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Monthly Earnings</p>
                      <p className="text-2xl font-bold">${stats.monthlyEarnings.toLocaleString()}</p>
                    </div>
                    <DollarSign className="w-8 h-8 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-foreground">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Sessions This Month</p>
                      <p className="text-2xl font-bold">{stats.sessionsThisMonth}</p>
                    </div>
                    <Calendar className="w-8 h-8 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-foreground">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Average Rating</p>
                      <p className="text-2xl font-bold">{stats.averageRating}</p>
                    </div>
                    <Star className="w-8 h-8 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-foreground">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Response Time</p>
                      <p className="text-2xl font-bold">{stats.responseTime}</p>
                    </div>
                    <Zap className="w-8 h-8 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Performance Metrics */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="border-2 border-foreground">
                <CardHeader>
                  <CardTitle>Performance Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Completion Rate</span>
                      <span className="font-medium">{stats.completionRate}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-foreground h-2 rounded-full" style={{width: `${stats.completionRate}%`}}></div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Repeat Clients</span>
                      <span className="font-medium">{stats.repeatClients}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-foreground h-2 rounded-full" style={{width: `${stats.repeatClients}%`}}></div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-foreground">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button className="w-full rounded-full justify-start">
                      <Calendar className="w-4 h-4 mr-2" />
                      Update Availability
                    </Button>
                    <Button variant="outline" className="w-full rounded-full justify-start border-2 border-foreground">
                      <Edit className="w-4 h-4 mr-2" />
                      Edit Profile
                    </Button>
                    <Button variant="outline" className="w-full rounded-full justify-start border-2 border-foreground">
                      <BarChart3 className="w-4 h-4 mr-2" />
                      View Analytics
                    </Button>
                    <Button variant="outline" className="w-full rounded-full justify-start border-2 border-foreground">
                      <CreditCard className="w-4 h-4 mr-2" />
                      Payout Settings
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Upcoming Sessions */}
            <Card className="border-2 border-foreground">
              <CardHeader>
                <CardTitle>Today's Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingSessions.slice(0, 2).map(session => (
                    <div key={session.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="p-2 bg-white rounded-lg">
                          {getSessionIcon(session.type)}
                        </div>
                        <div>
                          <h3 className="font-medium">{session.clientName}</h3>
                          <p className="text-sm text-muted-foreground">{session.topic}</p>
                          <p className="text-sm text-muted-foreground">{session.time} • {session.duration}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="font-medium">{session.fee}</p>
                          <Badge className={getStatusColor(session.status)}>
                            {session.status}
                          </Badge>
                        </div>
                        <Button variant="outline" size="sm" className="rounded-full">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Feedback */}
            <Card className="border-2 border-foreground">
              <CardHeader>
                <CardTitle>Recent Client Feedback</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentSessions.slice(0, 2).map(session => (
                    <div key={session.id} className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-medium">{session.clientName}</h3>
                          <p className="text-sm text-muted-foreground">{session.topic} • {session.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">{session.fee}</p>
                          <div className="flex items-center gap-1 mt-1">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`w-4 h-4 ${i < session.rating ? 'fill-foreground text-foreground' : 'text-gray-300'}`} 
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">{session.feedback}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {selectedTab === 'sessions' && (
          <div className="space-y-6">
            <Card className="border-2 border-foreground">
              <CardHeader>
                <CardTitle>Session Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Session management interface coming soon...</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {selectedTab === 'schedule' && (
          <div className="space-y-6">
            <Card className="border-2 border-foreground">
              <CardHeader>
                <CardTitle>Schedule Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Schedule management interface coming soon...</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {selectedTab === 'earnings' && (
          <div className="space-y-6">
            {/* Earnings Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-2 border-foreground">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">This Month</p>
                      <p className="text-2xl font-bold">${stats.monthlyEarnings.toLocaleString()}</p>
                    </div>
                    <TrendingUp className="w-8 h-8 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-foreground">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Total Earnings</p>
                      <p className="text-2xl font-bold">${stats.totalEarnings.toLocaleString()}</p>
                    </div>
                    <DollarSign className="w-8 h-8 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-foreground">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Avg per Session</p>
                      <p className="text-2xl font-bold">${expert.hourlyRate}</p>
                    </div>
                    <Target className="w-8 h-8 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-2 border-foreground">
              <CardHeader>
                <CardTitle>Earnings Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Earnings analytics coming soon...</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {selectedTab === 'profile' && (
          <div className="space-y-6">
            <Card className="border-2 border-foreground">
              <CardHeader>
                <CardTitle>Profile Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <User className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Profile management interface coming soon...</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}

export default ExpertDashboard