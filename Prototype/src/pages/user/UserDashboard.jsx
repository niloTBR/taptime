import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { 
  Search,
  Calendar,
  Clock,
  Star,
  MessageCircle,
  Video,
  Phone,
  DollarSign,
  CreditCard,
  FileText,
  Settings,
  User,
  Heart,
  BookOpen,
  TrendingUp,
  MapPin,
  Mail,
  Bell,
  Plus,
  Filter,
  MoreHorizontal,
  Play,
  CheckCircle,
  XCircle,
  AlertCircle
} from 'lucide-react'

const UserDashboard = () => {
  const [selectedTab, setSelectedTab] = useState('dashboard')
  const [searchQuery, setSearchQuery] = useState('')

  // Mock user data
  const user = {
    name: 'Sarah Johnson',
    email: 'sarah.j@email.com',
    location: 'San Francisco, CA',
    avatar: '/api/placeholder/40/40',
    memberSince: '2024-01-15',
    totalSessions: 12,
    totalSpent: '$1,240'
  }

  const stats = {
    upcomingSessions: 3,
    completedSessions: 12,
    savedExperts: 8,
    totalSpent: 1240
  }

  const upcomingSessions = [
    {
      id: 1,
      expertName: 'Dr. Michael Chen',
      expertTitle: 'Senior Product Manager',
      date: '2024-03-20',
      time: '2:00 PM',
      duration: '60 min',
      type: 'video',
      topic: 'Product Strategy Review',
      status: 'confirmed',
      avatar: '/api/placeholder/40/40'
    },
    {
      id: 2,
      expertName: 'Emily Rodriguez',
      expertTitle: 'UX Design Lead',
      date: '2024-03-22',
      time: '10:00 AM',
      duration: '45 min',
      type: 'phone',
      topic: 'Design System Consultation',
      status: 'pending',
      avatar: '/api/placeholder/40/40'
    },
    {
      id: 3,
      expertName: 'David Thompson',
      expertTitle: 'Tech Startup Advisor',
      date: '2024-03-25',
      time: '4:00 PM',
      duration: '90 min',
      type: 'video',
      topic: 'Fundraising Strategy',
      status: 'confirmed',
      avatar: '/api/placeholder/40/40'
    }
  ]

  const recentSessions = [
    {
      id: 1,
      expertName: 'Lisa Park',
      expertTitle: 'Marketing Director',
      date: '2024-03-15',
      rating: 5,
      feedback: 'Excellent insights on growth strategies. Very helpful!',
      cost: '$120',
      duration: '60 min'
    },
    {
      id: 2,
      expertName: 'James Wilson',
      expertTitle: 'Finance Expert',
      date: '2024-03-10',
      rating: 4,
      feedback: 'Great financial planning advice. Recommended!',
      cost: '$150',
      duration: '75 min'
    },
    {
      id: 3,
      expertName: 'Anna Taylor',
      expertTitle: 'Business Coach',
      date: '2024-03-05',
      rating: 5,
      feedback: 'Amazing coaching session. Clear action items.',
      cost: '$100',
      duration: '60 min'
    }
  ]

  const savedExperts = [
    {
      id: 1,
      name: 'Dr. Robert Kim',
      title: 'AI Research Scientist',
      rating: 4.9,
      sessions: 150,
      price: '$200/hr',
      avatar: '/api/placeholder/40/40'
    },
    {
      id: 2,
      name: 'Maria Garcia',
      title: 'Sales Strategy Expert',
      rating: 4.8,
      sessions: 89,
      price: '$180/hr',
      avatar: '/api/placeholder/40/40'
    },
    {
      id: 3,
      name: 'Alex Johnson',
      title: 'Digital Marketing Guru',
      rating: 4.7,
      sessions: 200,
      price: '$160/hr',
      avatar: '/api/placeholder/40/40'
    }
  ]

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
    { id: 'experts', label: 'Saved Experts' },
    { id: 'billing', label: 'Billing' },
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
            <h1 className="text-2xl font-semibold">My Dashboard</h1>
            <Badge variant="secondary">Find Expert Panel</Badge>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="rounded-full border-2 border-foreground">
              <Plus className="w-4 h-4 mr-2" />
              Book Session
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              <Bell className="w-4 h-4" />
            </Button>
            <Avatar className="w-8 h-8">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
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
              <div className="flex items-center gap-4">
                <Avatar className="w-16 h-16">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="text-2xl font-semibold">Welcome back, {user.name}!</h2>
                  <p className="text-muted-foreground">Ready to connect with amazing experts today?</p>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-2 border-foreground">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Upcoming Sessions</p>
                      <p className="text-2xl font-bold">{stats.upcomingSessions}</p>
                    </div>
                    <Calendar className="w-8 h-8 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-foreground">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Completed Sessions</p>
                      <p className="text-2xl font-bold">{stats.completedSessions}</p>
                    </div>
                    <CheckCircle className="w-8 h-8 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-foreground">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Saved Experts</p>
                      <p className="text-2xl font-bold">{stats.savedExperts}</p>
                    </div>
                    <Heart className="w-8 h-8 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-foreground">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Total Invested</p>
                      <p className="text-2xl font-bold">${stats.totalSpent}</p>
                    </div>
                    <DollarSign className="w-8 h-8 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Upcoming Sessions */}
            <Card className="border-2 border-foreground">
              <CardHeader>
                <CardTitle>Upcoming Sessions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingSessions.map(session => (
                    <div key={session.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-4">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={session.avatar} alt={session.expertName} />
                          <AvatarFallback>{getInitials(session.expertName)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-medium">{session.expertName}</h3>
                          <p className="text-sm text-muted-foreground">{session.expertTitle}</p>
                          <p className="text-sm text-muted-foreground">{session.topic}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="font-medium">{session.date}</p>
                          <p className="text-sm text-muted-foreground">{session.time} • {session.duration}</p>
                          <div className="flex items-center gap-2 mt-1">
                            {getSessionIcon(session.type)}
                            <Badge className={getStatusColor(session.status)}>
                              {session.status}
                            </Badge>
                          </div>
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

            {/* Recent Sessions */}
            <Card className="border-2 border-foreground">
              <CardHeader>
                <CardTitle>Recent Sessions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentSessions.slice(0, 3).map(session => (
                    <div key={session.id} className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-medium">{session.expertName}</h3>
                          <p className="text-sm text-muted-foreground">{session.expertTitle}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-muted-foreground">{session.date}</p>
                          <p className="font-medium">{session.cost}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${i < session.rating ? 'fill-foreground text-foreground' : 'text-gray-300'}`} 
                          />
                        ))}
                        <span className="text-sm text-muted-foreground">• {session.duration}</span>
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
                  <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Session management interface coming soon...</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {selectedTab === 'experts' && (
          <div className="space-y-6">
            {/* Saved Experts Grid */}
            <Card className="border-2 border-foreground">
              <CardHeader>
                <CardTitle>Saved Experts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {savedExperts.map(expert => (
                    <div key={expert.id} className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3 mb-3">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={expert.avatar} alt={expert.name} />
                          <AvatarFallback>{getInitials(expert.name)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-medium">{expert.name}</h3>
                          <p className="text-sm text-muted-foreground">{expert.title}</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <Star className="w-4 h-4 fill-foreground text-foreground" />
                          <span className="text-sm">{expert.rating} ({expert.sessions})</span>
                        </div>
                        <span className="font-medium">{expert.price}</span>
                      </div>
                      <Button className="w-full rounded-full" size="sm">
                        Book Session
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {selectedTab === 'billing' && (
          <div className="space-y-6">
            <Card className="border-2 border-foreground">
              <CardHeader>
                <CardTitle>Billing & Payments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <CreditCard className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Billing management interface coming soon...</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {selectedTab === 'profile' && (
          <div className="space-y-6">
            <Card className="border-2 border-foreground">
              <CardHeader>
                <CardTitle>Profile Settings</CardTitle>
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

export default UserDashboard