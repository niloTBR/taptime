import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line } from 'recharts'
import ExpertCard from '@/components/common/ExpertCard'
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
  Edit,
  Eye,
  X,
  ChevronLeft,
  ChevronRight,
  Crown,
  Shield,
  CreditCard,
  Download,
  Receipt
} from 'lucide-react'

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState('upcoming')
  const [showReschedule, setShowReschedule] = useState(false)
  const [selectedSession, setSelectedSession] = useState(null)
  const [showSessionDetail, setShowSessionDetail] = useState(false)
  const [sessionDetailTab, setSessionDetailTab] = useState('details')
  const [showRatingPopup, setShowRatingPopup] = useState(false)
  const [selectedRating, setSelectedRating] = useState(0)
  const [ratingComment, setRatingComment] = useState('')
  const [expertsScrollPosition, setExpertsScrollPosition] = useState(0)
  const [showPaymentMessage, setShowPaymentMessage] = useState(false)

  // Mock user data from onboarding
  const user = {
    firstName: 'John',
    lastName: 'Smith',
    email: 'john.smith@example.com',
    phone: '+1 (555) 123-4567',
    bio: 'Product manager passionate about building scalable solutions and leading high-performing teams.',
    country: 'United States',
    avatar: '/api/placeholder/40/40',
    memberSince: 'January 2024',
    primaryGoals: 'Start a new business, Improve leadership skills, Learn new technologies',
    expertiseNeeded: 'Product Strategy, Team Leadership, Technology Innovation'
  }

  const sessionData = [
    { month: 'Jan', sessions: 2 },
    { month: 'Feb', sessions: 4 },
    { month: 'Mar', sessions: 6 }
  ]

  const learningData = [
    { month: 'Jan', hours: 8 },
    { month: 'Feb', hours: 12 },
    { month: 'Mar', hours: 15 }
  ]

  const suggestedExperts = [
    {
      id: 'robert-kim',
      name: 'Dr. Robert Kim',
      title: 'AI Product Strategy',
      rating: 4.9,
      reviewCount: 200,
      rate: '$220/hr',
      bio: 'Helping companies build AI-powered products that scale. Former VP of Product at Google, now consulting on product strategy.',
      image: '/api/placeholder/300/120',
      expertise: ['Product Strategy'],
      isTopExpert: true,
      isVerified: true
    },
    {
      id: 'maria-santos',
      name: 'Maria Santos',
      title: 'Team Leadership Coach',
      rating: 4.8,
      reviewCount: 150,
      rate: '$180/hr',
      bio: 'Executive coach specializing in leadership development and team performance. Helping managers become effective leaders.',
      image: '/api/placeholder/300/120',
      expertise: ['Team Leadership'],
      isTopExpert: false,
      isVerified: true
    },
    {
      id: 'david-chen',
      name: 'David Chen',
      title: 'Growth Marketing Expert',
      rating: 4.7,
      reviewCount: 89,
      rate: '$160/hr',
      bio: 'Growth marketing specialist who has scaled startups from 0 to millions in revenue. Expert in digital marketing and analytics.',
      image: '/api/placeholder/300/120',
      expertise: ['Growth Marketing'],
      isTopExpert: true,
      isVerified: false
    },
    {
      id: 'sarah-jones',
      name: 'Sarah Jones',
      title: 'UX Design Lead',
      rating: 4.9,
      reviewCount: 167,
      rate: '$190/hr',
      bio: 'Senior UX designer with 8+ years creating user-centered digital experiences for Fortune 500 companies.',
      image: '/api/placeholder/300/120',
      expertise: ['UX Design'],
      isTopExpert: false,
      isVerified: true
    },
    {
      id: 'michael-taylor',
      name: 'Michael Taylor',
      title: 'Business Strategy Consultant',
      rating: 4.6,
      reviewCount: 234,
      rate: '$200/hr',
      bio: 'Former McKinsey consultant helping businesses develop strategic roadmaps and optimize operations for growth.',
      image: '/api/placeholder/300/120',
      expertise: ['Business Strategy'],
      isTopExpert: false,
      isVerified: false
    },
    {
      id: 'emily-wilson',
      name: 'Emily Wilson',
      title: 'Data Science Expert',
      rating: 4.8,
      reviewCount: 156,
      rate: '$210/hr',
      bio: 'Data scientist with expertise in machine learning and analytics. Helping companies make data-driven decisions.',
      image: '/api/placeholder/300/120',
      expertise: ['Data Science'],
      isTopExpert: true,
      isVerified: true
    },
    {
      id: 'james-brown',
      name: 'James Brown',
      title: 'Sales Strategy Expert',
      rating: 4.7,
      reviewCount: 198,
      rate: '$170/hr',
      bio: 'Sales leader with track record of building high-performing sales teams and scaling revenue operations.',
      image: '/api/placeholder/300/120',
      expertise: ['Sales Strategy'],
      isTopExpert: false,
      isVerified: true
    },
    {
      id: 'lisa-garcia',
      name: 'Lisa Garcia',
      title: 'Content Marketing Specialist',
      rating: 4.9,
      reviewCount: 143,
      rate: '$150/hr',
      bio: 'Content strategist helping brands build authentic connections through storytelling and content marketing.',
      image: '/api/placeholder/300/120',
      expertise: ['Content Marketing'],
      isTopExpert: false,
      isVerified: false
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
      avatar: '/api/placeholder/40/40',
      expertImage: '/api/placeholder/300/120',
      category: 'Strategy',
      rating: 4.9,
      reviewCount: 89,
      verified: true,
      paymentStatus: 'paid',
      expertise: ['Product Strategy']
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
      avatar: '/api/placeholder/40/40',
      expertImage: '/api/placeholder/300/120',
      category: 'Marketing',
      rating: 4.8,
      reviewCount: 65,
      verified: true,
      paymentStatus: 'pending',
      expertise: ['Growth Marketing']
    }
  ]

  const pastSessions = [
    {
      id: 1,
      sessionNumber: '#5',
      expertName: 'Emily Rodriguez',
      expertTitle: 'UX Design Lead',
      date: 'Mar 18',
      rating: 5,
      topic: 'Design System Consultation',
      duration: '60 min',
      cost: '$180',
      feedback: 'Excellent insights on building scalable design systems. Very actionable advice.',
      hasReview: false,
      avatar: '/api/placeholder/40/40',
      expertImage: '/api/placeholder/300/120',
      category: 'Design',
      expertRating: 4.9,
      reviewCount: 76,
      verified: true,
      paymentStatus: 'paid',
      expertise: ['UX Design']
    },
    {
      id: 2,
      sessionNumber: '#4',
      expertName: 'James Wilson',
      expertTitle: 'Business Coach',
      date: 'Mar 10',
      rating: 4,
      topic: 'Business Planning Strategy',
      duration: '75 min',
      cost: '$200',
      feedback: 'Great strategic guidance. Helped clarify our business direction.',
      hasReview: true,
      avatar: '/api/placeholder/40/40',
      expertImage: '/api/placeholder/300/120',
      category: 'Business',
      expertRating: 4.7,
      reviewCount: 54,
      verified: true,
      paymentStatus: 'paid',
      expertise: ['Business Strategy']
    },
    {
      id: 3,
      sessionNumber: '#3',
      expertName: 'Anna Taylor',
      expertTitle: 'Product Manager',
      date: 'Mar 5',
      rating: null,
      topic: 'Product Roadmap Planning',
      duration: '60 min',
      cost: '$160',
      feedback: 'Amazing session! Clear roadmap and priorities established.',
      hasReview: true,
      avatar: '/api/placeholder/40/40',
      expertImage: '/api/placeholder/300/120',
      category: 'Product',
      expertRating: 4.8,
      reviewCount: 92,
      verified: true,
      paymentStatus: 'paid',
      expertise: ['Product Strategy']
    }
  ]

  const getInitials = (name) => {
    if (typeof name === 'string') {
      return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()
    }
    return (user.firstName[0] + user.lastName[0]).toUpperCase()
  }

  const tabs = [
    { id: 'upcoming', label: 'Upcoming', count: upcomingSessions.length },
    { id: 'past', label: 'Past Sessions', count: pastSessions.length }
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
            <Button variant="outline" className="rounded-full">
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Analytics Header Section */}
      <section className="bg-gray-50 border-b px-6 py-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-lg font-semibold mb-4">Your Learning Progress</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Total Sessions */}
            <Card className="border-2">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Total Sessions</span>
                  </div>
                  <TrendingUp className="w-4 h-4 text-green-600" />
                </div>
                <p className="text-2xl font-bold mb-2">{pastSessions.length + upcomingSessions.length}</p>
                <div className="h-8 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={sessionData}>
                      <Bar dataKey="sessions" fill="#000000" radius={[2, 2, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            {/* Learning Hours */}
            <Card className="border-2">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Learning Hours</span>
                  </div>
                  <TrendingUp className="w-4 h-4 text-blue-600" />
                </div>
                <p className="text-2xl font-bold mb-2">35</p>
                <div className="h-8 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={learningData}>
                      <Line dataKey="hours" stroke="#000000" strokeWidth={2} dot={false} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            {/* Completion Rate */}
            <Card className="border-2">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Completion Rate</span>
                  </div>
                  <TrendingUp className="w-4 h-4 text-green-600" />
                </div>
                <p className="text-2xl font-bold mb-2">94%</p>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span>Sessions completed</span>
                    <span>17/18</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1">
                    <div className="bg-green-600 h-1 rounded-full" style={{width: '94%'}}></div>
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
        <div className="w-80">
          {/* User Profile Card */}
          <Card className="border-2 border-foreground">
            <CardContent className="p-4">
              <div className="flex gap-4 mb-4">
                <div className="relative">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={user.avatar} alt={`${user.firstName} ${user.lastName}`} />
                    <AvatarFallback className="text-lg">{getInitials()}</AvatarFallback>
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
                  <h3 className="font-semibold text-lg mb-1">{user.firstName} {user.lastName}</h3>
                  <div className="space-y-1 text-xs">
                    <div className="flex items-center gap-2">
                      <Mail className="w-3 h-3 text-muted-foreground" />
                      <span className="text-muted-foreground truncate">{user.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-3 h-3 text-muted-foreground" />
                      <span className="text-muted-foreground">{user.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3 h-3 text-muted-foreground" />
                      <span className="text-muted-foreground">{user.country}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-2 bg-blue-50 rounded-lg mb-4">
                <div className="flex items-center justify-center gap-2 text-xs text-blue-700">
                  <Eye className="w-3 h-3" />
                  <span>Profile visible to experts</span>
                </div>
              </div>
              
              <div className="space-y-3 text-xs">
                <div>
                  <h4 className="font-medium mb-1 text-sm">Bio</h4>
                  <p className="text-muted-foreground">{user.bio}</p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-1 text-sm">Goals</h4>
                  <p className="text-muted-foreground">{user.primaryGoals}</p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-1 text-sm">Interests</h4>
                  <p className="text-muted-foreground">{user.expertiseNeeded}</p>
                </div>
              </div>
              
              <Button className="w-full mt-4 rounded-full text-sm">
                <Edit className="w-3 h-3 mr-2" />
                Edit Profile
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
                  className="group hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 hover:border-foreground cursor-pointer h-full relative"
                  onClick={() => {
                    setSelectedSession(session)
                    setShowSessionDetail(true)
                  }}
                >
                  {/* Expert Photo Header */}
                  <div className="relative h-32 overflow-hidden rounded-t-lg bg-gray-100">
                    <img 
                      src={session.expertImage} 
                      alt={session.expertName}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-3 right-3">
                      <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm text-black text-xs px-2 py-1 shadow-sm">
                        {session.category}
                      </Badge>
                    </div>
                    
                  </div>

                  <CardContent className="p-6 flex flex-col min-h-0">
                    <div className="flex-1 space-y-4 text-left">
                      {/* Rating and Verification Row */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-black text-black" />
                            <span className="text-sm font-medium">{session.rating}</span>
                          </div>
                          <span className="text-xs text-muted-foreground">
                            ({session.reviewCount})
                          </span>
                        </div>
                      </div>

                      {/* Expert Name and Title */}
                      <div>
                        <h3 className="font-semibold text-base leading-tight text-left">
                          {session.expertName}
                        </h3>
                        <p className="text-xs text-muted-foreground mt-1 text-left">
                          {session.expertTitle}
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
                        {session.paymentStatus === 'paid' ? (
                          <p className="text-gray-600 font-medium">✓ Paid</p>
                        ) : (
                          <p className="text-orange-600 font-medium">⏳ Payment Pending</p>
                        )}
                      </div>
                    </div>

                    {/* Actions - Always at Bottom */}
                    <div className="mt-auto flex-shrink-0 pt-4">
                      <div className="flex justify-between items-center">
                        <div className="flex gap-2 w-full">
                          {session.paymentStatus === 'paid' ? (
                            <Button 
                              size="sm" 
                              className="rounded-full px-3 py-1 text-xs h-8 flex-1"
                            >
                              Join Session
                            </Button>
                          ) : (
                            <Button 
                              size="sm" 
                              variant="outline"
                              className="rounded-full px-3 py-1 text-xs h-8 flex-1 border-2 border-gray-300 text-gray-400 bg-gray-100 cursor-not-allowed"
                              onClick={(e) => {
                                e.stopPropagation()
                                setShowPaymentMessage(true)
                              }}
                            >
                              Complete Payment
                            </Button>
                          )}
                          
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
                  onClick={() => {
                    setSelectedSession(session)
                    setShowSessionDetail(true)
                  }}
                >
                  {/* Expert Photo Header */}
                  <div className="relative h-32 overflow-hidden rounded-t-lg bg-gray-100">
                    <img 
                      src={session.expertImage} 
                      alt={session.expertName}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-3 right-3">
                      <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm text-black text-xs px-2 py-1 shadow-sm">
                        {session.category}
                      </Badge>
                    </div>
                    
                  </div>

                  <CardContent className="p-6 flex flex-col min-h-0">
                    <div className="flex-1 space-y-4 text-left">
                      {/* Rating and Verification Row */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-black text-black" />
                            <span className="text-sm font-medium">{session.expertRating}</span>
                          </div>
                          <span className="text-xs text-muted-foreground">
                            ({session.reviewCount})
                          </span>
                        </div>
                      </div>

                      {/* Expert Name and Title */}
                      <div>
                        <h3 className="font-semibold text-base leading-tight text-left">
                          {session.expertName}
                        </h3>
                        <p className="text-xs text-muted-foreground mt-1 text-left">
                          {session.expertTitle}
                        </p>
                      </div>
                      
                      {/* Session Topic and Summary */}
                      <div>
                        <h4 className="font-medium text-sm mb-1">{session.topic}</h4>
                        <p className="text-xs text-muted-foreground text-left leading-relaxed line-clamp-2">
                          {session.feedback}
                        </p>
                      </div>
                      
                      {/* Session Details */}
                      <div className="space-y-1 text-xs text-muted-foreground">
                        <p>📅 {session.date} • Session {session.sessionNumber}</p>
                        <p>⏱️ {session.duration}</p>
                        <div className="flex items-center gap-2">
                          {session.rating ? (
                            <>
                              <span>Your rating:</span>
                              <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star 
                                    key={i} 
                                    className={`w-3 h-3 ${i < session.rating ? 'fill-black text-black' : 'text-gray-300'}`} 
                                  />
                                ))}
                              </div>
                            </>
                          ) : (
                            <span className="text-orange-600">Unrated - Please rate this session</span>
                          )}
                        </div>
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
                            {session.cost}/hr Book Again
                          </Button>
                          
                          <div className="relative">
                            <Button 
                              size="sm" 
                              variant="outline"
                              className="rounded-full border-2 border-foreground px-3 py-1 text-xs h-8"
                            >
                              View
                            </Button>
                            <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
          
          
        </div>
      </div>

      {/* Experts Recommended for You - Footer Section */}
      <section className="bg-gray-50 border-t px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Recommended for You</h2>
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="icon"
                  className="rounded-full border-2 border-foreground"
                  onClick={() => {
                    const container = document.getElementById('experts-scroll-container')
                    if (container) {
                      container.scrollBy({ left: -320, behavior: 'smooth' })
                    }
                  }}
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon"
                  className="rounded-full border-2 border-foreground"
                  onClick={() => {
                    const container = document.getElementById('experts-scroll-container')
                    if (container) {
                      container.scrollBy({ left: 320, behavior: 'smooth' })
                    }
                  }}
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
              <Button variant="outline" className="rounded-full border-2 border-foreground">
                View All Experts
              </Button>
            </div>
          </div>
          <div id="experts-scroll-container" className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
            {suggestedExperts.slice(0, 8).map((expert, index) => (
              <div key={index} className="flex-none w-80">
                <ExpertCard 
                  expert={expert}
                  showActions={true}
                  className=""
                  showCrown={expert.isTopExpert}
                  showCharity={false}
                  showVerified={expert.isVerified}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Session Detail Overlay Sidebar */}
      {showSessionDetail && selectedSession && (
        <div className="fixed inset-0 bg-black/50 z-50">
          <div className="fixed right-0 top-0 h-full w-96 bg-white shadow-xl overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Session</h2>
                <Button 
                  variant="outline" 
                  size="icon"
                  className="rounded-full"
                  onClick={() => setShowSessionDetail(false)}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
              
              {/* Expert Info */}
              <div className="flex items-center gap-4 mb-6">
                <Avatar className="w-16 h-16">
                  <AvatarImage src={selectedSession.avatar} alt={selectedSession.expertName} />
                  <AvatarFallback>{getInitials(selectedSession.expertName)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{selectedSession.expertName}</h3>
                  <p className="text-muted-foreground text-sm">{selectedSession.expertTitle}</p>
                  <Button 
                    size="sm" 
                    className="mt-2 rounded-full"
                    onClick={() => window.open(`/expert/${selectedSession.expertName.toLowerCase().replace(' ', '-')}`, '_blank')}
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    View Full Profile
                  </Button>
                </div>
              </div>
              
              {/* Tab Navigation */}
              <div className="border-b mb-6">
                <div className="flex space-x-6">
                  <button
                    onClick={() => setSessionDetailTab('details')}
                    className={`py-3 px-1 border-b-2 font-medium text-sm ${
                      sessionDetailTab === 'details'
                        ? 'border-foreground text-foreground'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Session Details
                  </button>
                  <button
                    onClick={() => setSessionDetailTab('chat')}
                    className={`py-3 px-1 border-b-2 font-medium text-sm ${
                      sessionDetailTab === 'chat'
                        ? 'border-foreground text-foreground'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Chat
                  </button>
                </div>
              </div>
              
              {/* Tab Content */}
              {sessionDetailTab === 'details' && (
                <div className="space-y-6">
                  {/* Session Info */}
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-medium mb-2">{selectedSession.topic}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{selectedSession.summary}</p>
                    <div className="space-y-1 text-sm">
                      <p>📅 {selectedSession.date} at {selectedSession.time}</p>
                      <p>⏱️ {selectedSession.duration}</p>
                      <p>💰 {selectedSession.cost}</p>
                    </div>
                  </div>
                  
                  {/* Payment Status */}
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`w-3 h-3 rounded-full ${
                        selectedSession.paymentStatus === 'paid' ? 'bg-green-500' : 'bg-yellow-500'
                      }`}></div>
                      <span className="font-medium">Payment Status</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {selectedSession.paymentStatus === 'paid' 
                        ? 'Payment completed successfully' 
                        : 'Payment is being processed'}
                    </p>
                  </div>
                  
                  {/* Actions */}
                  <div className="space-y-3">
                    <Button className="w-full rounded-full">
                      <Video className="w-4 h-4 mr-2" />
                      Join Session
                    </Button>
                    <div className="grid grid-cols-2 gap-3">
                      <Button 
                        variant="outline" 
                        className="rounded-full border-2 border-foreground"
                        onClick={() => {
                          setShowSessionDetail(false)
                          setShowReschedule(true)
                        }}
                      >
                        Reschedule
                      </Button>
                      <Button 
                        variant="outline" 
                        className="rounded-full border-2 border-red-500 text-red-600 hover:bg-red-50"
                      >
                        Cancel Session
                      </Button>
                    </div>
                  </div>
                </div>
              )}
              
              {sessionDetailTab === 'chat' && (
                <div className="space-y-4">
                  {/* Conversation History */}
                  <div className="space-y-3 max-h-96 overflow-y-auto">
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
                  <div className="flex gap-2 pt-4 border-t">
                    <input 
                      type="text" 
                      className="flex-1 p-3 border-2 border-gray-200 rounded-lg" 
                      placeholder="Type a message..."
                    />
                    <Button size="sm" className="rounded-lg px-4">
                      Send
                    </Button>
                  </div>
                </div>
              )}
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
      
      {/* Rating Popup */}
      {showRatingPopup && selectedSession && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <Card className="w-full max-w-md mx-4 border-2 border-foreground">
            <CardHeader>
              <CardTitle>Rate Your Session</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <h4 className="font-medium mb-2">{selectedSession.topic}</h4>
                <p className="text-sm text-muted-foreground">with {selectedSession.expertName}</p>
              </div>
              
              <div className="flex justify-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-8 h-8 cursor-pointer ${i < selectedRating ? 'fill-black text-black' : 'text-gray-300 hover:text-black'}`}
                    onClick={() => setSelectedRating(i + 1)}
                  />
                ))}
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Leave a comment (optional)</label>
                <textarea 
                  className="w-full p-3 border-2 border-gray-200 rounded-lg resize-none" 
                  rows="3" 
                  placeholder="How was your session with the expert?"
                  value={ratingComment}
                  onChange={(e) => setRatingComment(e.target.value)}
                />
              </div>
              
              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  className="flex-1 rounded-full border-2 border-foreground"
                  onClick={() => {
                    setShowRatingPopup(false)
                    setSelectedRating(0)
                    setRatingComment('')
                  }}
                >
                  Cancel
                </Button>
                <Button 
                  className="flex-1 rounded-full"
                  onClick={() => {
                    // Here you would save the rating
                    console.log('Rating:', selectedRating, 'Comment:', ratingComment)
                    setShowRatingPopup(false)
                    setSelectedRating(0)
                    setRatingComment('')
                  }}
                >
                  Submit Rating
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
      
      {/* Payment Message Popup */}
      {showPaymentMessage && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <Card className="w-full max-w-md mx-4 border-2 border-foreground">
            <CardHeader>
              <CardTitle>Payment Required</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Please make the payment to confirm your session booking. Once payment is completed, you'll be able to join your session.
              </p>
              
              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  className="flex-1 rounded-full border-2 border-foreground"
                  onClick={() => setShowPaymentMessage(false)}
                >
                  Cancel
                </Button>
                <Button 
                  className="flex-1 rounded-full"
                  onClick={() => {
                    setShowPaymentMessage(false)
                    // Redirect to payment page or handle payment
                    console.log('Redirect to payment')
                  }}
                >
                  Make Payment
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