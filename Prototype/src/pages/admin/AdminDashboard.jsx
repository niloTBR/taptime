import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line, AreaChart, Area } from 'recharts'
import { 
  Home,
  Settings,
  Users,
  UserCheck,
  DollarSign,
  TrendingUp,
  FileText,
  ShieldCheck,
  Crown,
  Check,
  X,
  Eye,
  Download,
  Search,
  Filter,
  Plus,
  Edit,
  Trash2,
  Calendar,
  MapPin,
  Mail,
  Phone,
  Package,
  ChevronDown,
  ChevronRight,
  Star,
  Building,
  Target,
  ArrowUp,
  Clock,
  Video,
  MessageCircle,
  MoreHorizontal,
  Bell
} from 'lucide-react'

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('stats')
  const [expertApprovalTab, setExpertApprovalTab] = useState('requests')
  const [selectedExpert, setSelectedExpert] = useState(null)
  const [showExpertDetail, setShowExpertDetail] = useState(false)
  const [showAddCategory, setShowAddCategory] = useState(false)
  const [withdrawalTab, setWithdrawalTab] = useState('pending')

  // Enhanced sample data
  const platformStats = {
    totalUsers: 160,
    activeUsers: 40,
    meetingBooked: 160,
    totalAmount: 1000,
    netProfit: 200,
    totalExperts: 160,
    activeExperts: 160,
    totalMeetings: 308
  }

  const profitData = [
    { month: 'Jan', profit: 5, revenue: 12 },
    { month: 'Feb', profit: 8, revenue: 18 },
    { month: 'Mar', profit: 12, revenue: 25 },
    { month: 'Apr', profit: 15, revenue: 32 },
    { month: 'May', profit: 18, revenue: 38 },
    { month: 'Jun', profit: 22, revenue: 45 },
    { month: 'Jul', profit: 20, revenue: 42 },
    { month: 'Aug', profit: 25, revenue: 52 }
  ]

  const searchInsights = [
    { keyword: 'Top Expert', percentage: 55, color: '#22c55e' },
    { keyword: 'Charity Programs', percentage: 23, color: '#3b82f6' },
    { keyword: 'Meeting with best', percentage: 10, color: '#f59e0b' },
    { keyword: 'E-learning Sessions', percentage: 8, color: '#ef4444' },
    { keyword: 'Legal Advice', percentage: 5, color: '#8b5cf6' }
  ]

  // Enhanced expert requests with full profile data
  const expertRequests = [
    {
      id: 1,
      name: 'Dr. Michael Chen',
      email: 'michael.chen@email.com',
      phone: '+1 (555) 987-6543',
      location: 'San Francisco, CA',
      hourlyRate: 200,
      title: 'Senior Product Strategy Consultant',
      company: 'Chen Consulting',
      industry: 'Technology Consulting',
      experience: '10+ years',
      avatar: '/api/placeholder/40/40',
      bio: 'Passionate product strategist with over 10 years of experience helping startups and Fortune 500 companies build market-leading products. Specialized in product-market fit, roadmap planning, and team leadership.',
      expertise: ['Product Strategy', 'Team Leadership', 'Market Analysis', 'Roadmap Planning'],
      education: 'MBA Stanford, BS Computer Science MIT',
      languages: ['English', 'Mandarin'],
      timezone: 'PST (UTC-8)',
      linkedinUrl: 'https://linkedin.com/in/michaelchen',
      portfolioUrl: 'https://michaelchen.consulting',
      charityWork: 'Mentors underrepresented entrepreneurs through TechStars',
      verified: true,
      documentsSubmitted: ['Resume.pdf', 'Portfolio.pdf', 'References.pdf'],
      applicationDate: '2024-03-15',
      status: 'pending'
    },
    {
      id: 2,
      name: 'Sarah Rodriguez',
      email: 'sarah.rodriguez@email.com',
      phone: '+1 (555) 123-7890',
      location: 'Austin, TX',
      hourlyRate: 150,
      title: 'Digital Marketing Director',
      company: 'Rodriguez Marketing',
      industry: 'Marketing & Advertising',
      experience: '8+ years',
      avatar: '/api/placeholder/40/40',
      bio: 'Results-driven marketing professional specializing in digital transformation and growth strategy. Helped 50+ companies scale their marketing operations.',
      expertise: ['Digital Marketing', 'Growth Strategy', 'Brand Development', 'Analytics'],
      education: 'MBA Marketing, University of Texas',
      languages: ['English', 'Spanish'],
      timezone: 'CST (UTC-6)',
      linkedinUrl: 'https://linkedin.com/in/sarahrodriguez',
      portfolioUrl: 'https://sarahrodriguez.marketing',
      charityWork: 'Provides free marketing consulting to local nonprofits',
      verified: false,
      documentsSubmitted: ['Resume.pdf', 'Case_Studies.pdf'],
      applicationDate: '2024-03-12',
      status: 'pending'
    }
  ]

  // Enhanced categories
  const categories = [
    {
      id: 1,
      name: 'Business & Startups',
      subcategories: ['Scaling Startups', 'Exit Strategy', 'Fundraising', 'Business Planning'],
      expertCount: 45,
      sessionsCount: 234,
      createdDate: '2024-01-15',
      lastUpdated: '2024-03-10',
      image: '/api/placeholder/60/40',
      status: 'active',
      description: 'Expert guidance for entrepreneurs and business leaders'
    },
    {
      id: 2,
      name: 'Technology & Innovation',
      subcategories: ['AI & Machine Learning', 'Software Development', 'Cybersecurity', 'DevOps'],
      expertCount: 38,
      sessionsCount: 189,
      createdDate: '2024-01-20',
      lastUpdated: '2024-03-08',
      image: '/api/placeholder/60/40',
      status: 'active',
      description: 'Technical expertise and innovation guidance'
    }
  ]

  // Enhanced withdrawal requests
  const withdrawalRequests = [
    {
      id: '#WD001',
      expertName: 'Dr. Michael Chen',
      expertEmail: 'michael.chen@email.com',
      amount: 1250,
      bankName: 'Chase Bank',
      accountNumber: '****5678',
      routingNumber: '****1234',
      requestDate: '2024-03-01',
      processingDate: '2024-03-03',
      status: 'approved',
      note: 'Monthly earnings withdrawal',
      sessionsCompleted: 8,
      avatar: '/api/placeholder/40/40'
    },
    {
      id: '#WD002',
      expertName: 'Sarah Rodriguez',
      expertEmail: 'sarah.rodriguez@email.com',
      amount: 875,
      bankName: 'Bank of America',
      accountNumber: '****9012',
      routingNumber: '****5678',
      requestDate: '2024-03-05',
      processingDate: null,
      status: 'pending',
      note: 'Bi-weekly withdrawal request',
      sessionsCompleted: 6,
      avatar: '/api/placeholder/40/40'
    }
  ]

  const sidebar = [
    { id: 'stats', label: 'Dashboard', icon: Home },
    { id: 'experts', label: 'Expert Approval', icon: UserCheck },
    { id: 'categories', label: 'Categories', icon: Package },
    { id: 'withdrawals', label: 'Withdrawals', icon: DollarSign },
    { id: 'meetings', label: 'Sessions', icon: Video },
    { id: 'users', label: 'Users', icon: Users },
    { id: 'reviews', label: 'Reviews', icon: Star },
    { id: 'settings', label: 'Settings', icon: Settings }
  ]

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()
  }

  const approveExpert = (expertId) => {
    console.log('Approving expert:', expertId)
    // Add approval logic here
  }

  const rejectExpert = (expertId) => {
    console.log('Rejecting expert:', expertId)
    // Add rejection logic here
  }

  const viewExpertProfile = (expert) => {
    setSelectedExpert(expert)
    setShowExpertDetail(true)
  }

  const approveWithdrawal = (withdrawalId) => {
    console.log('Approving withdrawal:', withdrawalId)
    // Add approval logic here
  }

  const rejectWithdrawal = (withdrawalId) => {
    console.log('Rejecting withdrawal:', withdrawalId)
    // Add rejection logic here
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-white">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">TT</span>
              </div>
              <h1 className="text-xl font-semibold">Admin Dashboard</h1>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon" className="rounded-full">
              <Bell className="w-4 h-4" />
            </Button>
            <Avatar className="w-8 h-8">
              <AvatarImage src="/api/placeholder/32/32" alt="Admin" />
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white border-r min-h-screen">
          <div className="p-4">
            <div className="space-y-2">
              {sidebar.map((item) => {
                const Icon = item.icon
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeTab === item.id
                        ? 'bg-gray-100 text-foreground'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {item.label}
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 overflow-y-auto">
          {/* Statistics Dashboard */}
          {activeTab === 'stats' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-6">Platform Overview</h2>
                
                {/* Key Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <Card className="border-2">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">Total Users</p>
                          <p className="text-3xl font-bold text-green-600">{platformStats.totalUsers}</p>
                          <div className="flex items-center mt-2">
                            <ArrowUp className="w-4 h-4 text-green-600 mr-1" />
                            <span className="text-sm text-green-600">+12% from last month</span>
                          </div>
                        </div>
                        <Users className="w-8 h-8 text-gray-400" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">Active Experts</p>
                          <p className="text-3xl font-bold text-blue-600">{platformStats.activeExperts}</p>
                          <div className="flex items-center mt-2">
                            <ArrowUp className="w-4 h-4 text-blue-600 mr-1" />
                            <span className="text-sm text-blue-600">+8% from last month</span>
                          </div>
                        </div>
                        <Crown className="w-8 h-8 text-gray-400" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">Total Sessions</p>
                          <p className="text-3xl font-bold text-purple-600">{platformStats.totalMeetings}</p>
                          <div className="flex items-center mt-2">
                            <ArrowUp className="w-4 h-4 text-purple-600 mr-1" />
                            <span className="text-sm text-purple-600">+15% from last month</span>
                          </div>
                        </div>
                        <Video className="w-8 h-8 text-gray-400" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">Revenue</p>
                          <p className="text-3xl font-bold text-orange-600">${platformStats.totalAmount}K</p>
                          <div className="flex items-center mt-2">
                            <ArrowUp className="w-4 h-4 text-orange-600 mr-1" />
                            <span className="text-sm text-orange-600">+22% from last month</span>
                          </div>
                        </div>
                        <DollarSign className="w-8 h-8 text-gray-400" />
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Charts */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card className="border-2">
                    <CardHeader>
                      <CardTitle>Revenue & Profit Trends</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                          <AreaChart data={profitData}>
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Area type="monotone" dataKey="revenue" stackId="1" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
                            <Area type="monotone" dataKey="profit" stackId="1" stroke="#22c55e" fill="#22c55e" fillOpacity={0.8} />
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2">
                    <CardHeader>
                      <CardTitle>Top Search Keywords</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {searchInsights.map((item, index) => (
                          <div key={index} className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                              <span className="text-sm font-medium">{item.keyword}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                                <div 
                                  className="h-full rounded-full" 
                                  style={{ backgroundColor: item.color, width: `${item.percentage}%` }}
                                ></div>
                              </div>
                              <span className="text-sm text-muted-foreground">{item.percentage}%</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          )}

          {/* Expert Approval */}
          {activeTab === 'experts' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold">Expert Applications</h2>
                <div className="flex items-center gap-3">
                  <Badge variant="secondary">{expertRequests.length} pending</Badge>
                  <Button onClick={() => console.log('Export list')}>
                    <Download className="w-4 h-4 mr-2" />
                    Export
                  </Button>
                </div>
              </div>

              {/* Status Tabs */}
              <div className="flex space-x-1">
                {['requests', 'approved', 'rejected'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setExpertApprovalTab(tab)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      expertApprovalTab === tab
                        ? 'bg-black text-white'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              {/* Expert Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {expertRequests.map((expert) => (
                  <Card key={expert.id} className="border-2 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <Avatar className="w-16 h-16">
                          <AvatarImage src={expert.avatar} alt={expert.name} />
                          <AvatarFallback>{getInitials(expert.name)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-lg leading-tight">{expert.name}</h3>
                          <p className="text-sm text-muted-foreground">{expert.title}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <MapPin className="w-3 h-3 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">{expert.location}</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2 mb-4">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Rate:</span>
                          <span className="font-medium">${expert.hourlyRate}/hour</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Experience:</span>
                          <span className="font-medium">{expert.experience}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Industry:</span>
                          <span className="font-medium">{expert.industry}</span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <p className="text-sm text-muted-foreground line-clamp-2">{expert.bio}</p>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {expert.expertise.slice(0, 2).map((skill, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                        {expert.expertise.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{expert.expertise.length - 2} more
                          </Badge>
                        )}
                      </div>

                      <div className="flex items-center gap-2">
                        <Button 
                          size="sm" 
                          className="flex-1"
                          onClick={() => approveExpert(expert.id)}
                        >
                          <Check className="w-4 h-4 mr-2" />
                          Approve
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="flex-1"
                          onClick={() => rejectExpert(expert.id)}
                        >
                          <X className="w-4 h-4 mr-2" />
                          Reject
                        </Button>
                        <Button 
                          size="sm" 
                          variant="ghost"
                          onClick={() => viewExpertProfile(expert)}
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Categories Management */}
          {activeTab === 'categories' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold">Categories</h2>
                <Button onClick={() => setShowAddCategory(true)}>
                  <Plus className="w-4 h-4 mr-2" />
                  Add Category
                </Button>
              </div>

              {/* Search and Filter */}
              <div className="flex items-center gap-4">
                <div className="relative flex-1 max-w-sm">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search categories..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
                <Button variant="outline">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
              </div>

              {/* Categories Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((category) => (
                  <Card key={category.id} className="border-2 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <img 
                          src={category.image} 
                          alt={category.name}
                          className="w-16 h-12 object-cover rounded-lg border"
                        />
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-lg leading-tight">{category.name}</h3>
                          <p className="text-sm text-muted-foreground">{category.description}</p>
                        </div>
                      </div>

                      <div className="space-y-2 mb-4">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Experts:</span>
                          <span className="font-medium">{category.expertCount}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Sessions:</span>
                          <span className="font-medium">{category.sessionsCount}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Status:</span>
                          <Badge variant={category.status === 'active' ? 'default' : 'secondary'}>
                            {category.status}
                          </Badge>
                        </div>
                      </div>

                      <div className="mb-4">
                        <p className="text-sm text-muted-foreground">Subcategories:</p>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {category.subcategories.slice(0, 2).map((sub, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {sub}
                            </Badge>
                          ))}
                          {category.subcategories.length > 2 && (
                            <Badge variant="outline" className="text-xs">
                              +{category.subcategories.length - 2} more
                            </Badge>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <Button size="sm" variant="outline" className="flex-1">
                          <Edit className="w-4 h-4 mr-2" />
                          Edit
                        </Button>
                        <Button size="sm" variant="ghost">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="ghost">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Withdrawals */}
          {activeTab === 'withdrawals' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold">Withdrawal Requests</h2>
                <div className="flex items-center gap-3">
                  <Badge variant="secondary">{withdrawalRequests.filter(w => w.status === 'pending').length} pending</Badge>
                  <Button>
                    <Download className="w-4 h-4 mr-2" />
                    Export
                  </Button>
                </div>
              </div>

              {/* Status Tabs */}
              <div className="flex space-x-1">
                {['pending', 'approved', 'rejected'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setWithdrawalTab(tab)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      withdrawalTab === tab
                        ? 'bg-black text-white'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              {/* Withdrawal Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {withdrawalRequests.map((request) => (
                  <Card key={request.id} className="border-2 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={request.avatar} alt={request.expertName} />
                          <AvatarFallback>{getInitials(request.expertName)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold">{request.expertName}</h3>
                          <p className="text-sm text-muted-foreground">{request.expertEmail}</p>
                          <Badge 
                            variant={request.status === 'approved' ? 'default' : request.status === 'pending' ? 'secondary' : 'destructive'}
                            className="mt-1"
                          >
                            {request.status}
                          </Badge>
                        </div>
                      </div>

                      <div className="space-y-3 mb-4">
                        <div className="p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-muted-foreground">Amount</span>
                            <span className="text-2xl font-bold">${request.amount}</span>
                          </div>
                          <div className="text-xs text-muted-foreground">
                            From {request.sessionsCompleted} completed sessions
                          </div>
                        </div>

                        <div className="space-y-2 text-sm">
                          <div className="flex items-center justify-between">
                            <span className="text-muted-foreground">Bank:</span>
                            <span className="font-medium">{request.bankName}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-muted-foreground">Account:</span>
                            <span className="font-medium">{request.accountNumber}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-muted-foreground">Requested:</span>
                            <span className="font-medium">{new Date(request.requestDate).toLocaleDateString()}</span>
                          </div>
                        </div>

                        {request.note && (
                          <div className="p-2 bg-blue-50 rounded text-sm">
                            <span className="text-blue-700">{request.note}</span>
                          </div>
                        )}
                      </div>

                      <div className="flex items-center gap-2">
                        {request.status === 'pending' ? (
                          <>
                            <Button 
                              size="sm" 
                              className="flex-1"
                              onClick={() => approveWithdrawal(request.id)}
                            >
                              <Check className="w-4 h-4 mr-2" />
                              Approve
                            </Button>
                            <Button 
                              size="sm" 
                              variant="outline" 
                              className="flex-1"
                              onClick={() => rejectWithdrawal(request.id)}
                            >
                              <X className="w-4 h-4 mr-2" />
                              Reject
                            </Button>
                          </>
                        ) : (
                          <Button size="sm" variant="outline" className="w-full">
                            <Eye className="w-4 h-4 mr-2" />
                            View Details
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Placeholder for other tabs */}
          {!['stats', 'experts', 'categories', 'withdrawals'].includes(activeTab) && (
            <div className="text-center py-12">
              <div className="max-w-md mx-auto">
                <h2 className="text-2xl font-semibold mb-4">
                  {sidebar.find(item => item.id === activeTab)?.label}
                </h2>
                <p className="text-muted-foreground mb-6">
                  This section is under development. It will include comprehensive management tools for {sidebar.find(item => item.id === activeTab)?.label.toLowerCase()}.
                </p>
                <Button variant="outline">
                  <Plus className="w-4 h-4 mr-2" />
                  Coming Soon
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Expert Detail Modal */}
      {showExpertDetail && selectedExpert && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold">Expert Application Review</h2>
                <Button variant="ghost" size="icon" onClick={() => setShowExpertDetail(false)}>
                  <X className="w-5 h-5" />
                </Button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Expert Profile */}
                <div className="lg:col-span-1">
                  <Card className="border-2">
                    <CardContent className="p-6 text-center">
                      <Avatar className="w-24 h-24 mx-auto mb-4">
                        <AvatarImage src={selectedExpert.avatar} alt={selectedExpert.name} />
                        <AvatarFallback className="text-2xl">{getInitials(selectedExpert.name)}</AvatarFallback>
                      </Avatar>
                      <h3 className="text-xl font-semibold mb-2">{selectedExpert.name}</h3>
                      <p className="text-muted-foreground mb-4">{selectedExpert.title}</p>
                      
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-muted-foreground" />
                          <span>{selectedExpert.email}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-muted-foreground" />
                          <span>{selectedExpert.phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-muted-foreground" />
                          <span>{selectedExpert.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Building className="w-4 h-4 text-muted-foreground" />
                          <span>{selectedExpert.company}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Detailed Information */}
                <div className="lg:col-span-2 space-y-6">
                  <Card className="border-2">
                    <CardHeader>
                      <CardTitle>Professional Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Bio</label>
                        <p className="mt-1">{selectedExpert.bio}</p>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium text-muted-foreground">Industry</label>
                          <p className="mt-1">{selectedExpert.industry}</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-muted-foreground">Experience</label>
                          <p className="mt-1">{selectedExpert.experience}</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-muted-foreground">Hourly Rate</label>
                          <p className="mt-1">${selectedExpert.hourlyRate}/hour</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-muted-foreground">Timezone</label>
                          <p className="mt-1">{selectedExpert.timezone}</p>
                        </div>
                      </div>

                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Expertise Areas</label>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {selectedExpert.expertise.map((skill, index) => (
                            <Badge key={index} variant="secondary">{skill}</Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Education</label>
                        <p className="mt-1">{selectedExpert.education}</p>
                      </div>

                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Languages</label>
                        <p className="mt-1">{selectedExpert.languages.join(', ')}</p>
                      </div>

                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Charity Work</label>
                        <p className="mt-1">{selectedExpert.charityWork}</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2">
                    <CardHeader>
                      <CardTitle>Application Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium text-muted-foreground">Application Date</label>
                          <p className="mt-1">{new Date(selectedExpert.applicationDate).toLocaleDateString()}</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-muted-foreground">Verification Status</label>
                          <Badge variant={selectedExpert.verified ? 'default' : 'secondary'} className="mt-1">
                            {selectedExpert.verified ? 'Verified' : 'Pending'}
                          </Badge>
                        </div>
                      </div>

                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Submitted Documents</label>
                        <div className="space-y-2 mt-1">
                          {selectedExpert.documentsSubmitted.map((doc, index) => (
                            <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                              <div className="flex items-center gap-2">
                                <FileText className="w-4 h-4 text-muted-foreground" />
                                <span className="text-sm">{doc}</span>
                              </div>
                              <Button size="sm" variant="ghost">
                                <Download className="w-4 h-4" />
                              </Button>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium text-muted-foreground">LinkedIn Profile</label>
                          <a href={selectedExpert.linkedinUrl} className="text-blue-600 hover:underline text-sm block mt-1">
                            View Profile
                          </a>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-muted-foreground">Portfolio</label>
                          <a href={selectedExpert.portfolioUrl} className="text-blue-600 hover:underline text-sm block mt-1">
                            View Portfolio
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-4">
                    <Button 
                      className="flex-1"
                      onClick={() => {
                        approveExpert(selectedExpert.id)
                        setShowExpertDetail(false)
                      }}
                    >
                      <Check className="w-4 h-4 mr-2" />
                      Approve Expert
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex-1"
                      onClick={() => {
                        rejectExpert(selectedExpert.id)
                        setShowExpertDetail(false)
                      }}
                    >
                      <X className="w-4 h-4 mr-2" />
                      Reject Application
                    </Button>
                    <Button variant="ghost" onClick={() => console.log('Request more info')}>
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Request Info
                    </Button>
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

export default AdminDashboard