import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { 
  Search,
  Filter,
  MoreHorizontal,
  Eye,
  Edit,
  Trash2,
  Download,
  UserCheck,
  TrendingUp,
  Clock,
  DollarSign,
  Calendar,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  XCircle,
  AlertCircle,
  Star,
  Crown,
  Shield
} from 'lucide-react'

const AdminExpertDashboard = () => {
  const [selectedTab, setSelectedTab] = useState('overview')
  const [searchQuery, setSearchQuery] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')

  // Mock data - in real app this would come from API
  const stats = {
    totalExperts: 1250,
    verifiedExperts: 890,
    pendingReview: 45,
    totalEarnings: '$125,430'
  }

  const experts = [
    {
      id: 1,
      name: 'Dr. Sarah Wilson',
      title: 'Senior Product Manager at Google',
      email: 'sarah.wilson@email.com',
      phone: '+1 234 567 8900',
      location: 'San Francisco, CA',
      status: 'verified',
      rating: 4.9,
      reviewCount: 127,
      rate: '$500/15min',
      expertise: ['Product Strategy', 'Tech Leadership'],
      joinDate: '2024-01-15',
      sessions: 45,
      earnings: '$8,240',
      avatar: '/api/placeholder/40/40'
    },
    {
      id: 2,
      name: 'Michael Chen',
      title: 'Startup Founder & CEO',
      email: 'm.chen@email.com', 
      phone: '+1 234 567 8901',
      location: 'New York, NY',
      status: 'pending',
      rating: 0,
      reviewCount: 0,
      rate: '$300/15min',
      expertise: ['Entrepreneurship', 'Fundraising'],
      joinDate: '2024-03-10',
      sessions: 0,
      earnings: '$0',
      avatar: '/api/placeholder/40/40'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      title: 'VP Marketing at Stripe',
      email: 'emily.r@email.com',
      phone: '+1 234 567 8902', 
      location: 'Austin, TX',
      status: 'verified',
      rating: 4.8,
      reviewCount: 89,
      rate: '$400/15min',
      expertise: ['Marketing Strategy', 'Growth'],
      joinDate: '2024-02-03',
      sessions: 32,
      earnings: '$5,680',
      avatar: '/api/placeholder/40/40'
    },
    {
      id: 4,
      name: 'David Kim',
      title: 'Design Director at Airbnb',
      email: 'd.kim@email.com',
      phone: '+1 234 567 8903',
      location: 'Seattle, WA',
      status: 'suspended',
      rating: 4.7,
      reviewCount: 203,
      rate: '$350/15min',
      expertise: ['UX Design', 'Design Leadership'],
      joinDate: '2024-01-28',
      sessions: 67,
      earnings: '$12,450',
      avatar: '/api/placeholder/40/40'
    },
    {
      id: 5,
      name: 'Lisa Park',
      title: 'CTO at TechCorp',
      email: 'lisa.park@email.com',
      phone: '+1 234 567 8904',
      location: 'Los Angeles, CA',
      status: 'verified',
      rating: 5.0,
      reviewCount: 156,
      rate: '$600/15min',
      expertise: ['Technology Strategy', 'Engineering'],
      joinDate: '2024-02-14',
      sessions: 78,
      earnings: '$18,900',
      avatar: '/api/placeholder/40/40'
    }
  ]

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'verified': return 'bg-green-100 text-green-800'
      case 'pending': return 'bg-yellow-100 text-yellow-800'
      case 'suspended': return 'bg-red-100 text-red-800'
      case 'rejected': return 'bg-gray-100 text-gray-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'verified': return <CheckCircle className="w-4 h-4" />
      case 'pending': return <Clock className="w-4 h-4" />
      case 'suspended': return <XCircle className="w-4 h-4" />
      default: return <AlertCircle className="w-4 h-4" />
    }
  }

  const filteredExperts = experts.filter(expert => {
    const matchesSearch = expert.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         expert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         expert.expertise.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesFilter = filterStatus === 'all' || expert.status === filterStatus
    return matchesSearch && matchesFilter
  })

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'experts', label: 'Experts' },
    { id: 'verification', label: 'Verification' },
    { id: 'analytics', label: 'Analytics' },
    { id: 'settings', label: 'Settings' }
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
            <h1 className="text-2xl font-semibold">TapTime Admin</h1>
            <Badge variant="secondary">Expert Panel</Badge>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="rounded-full border-2 border-foreground">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
            <Avatar className="w-8 h-8">
              <AvatarImage src="/api/placeholder/32/32" alt="Admin" />
              <AvatarFallback>AD</AvatarFallback>
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
        {selectedTab === 'overview' && (
          <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-2 border-foreground">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Total Experts</p>
                      <p className="text-2xl font-bold">{stats.totalExperts.toLocaleString()}</p>
                    </div>
                    <UserCheck className="w-8 h-8 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-foreground">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Verified</p>
                      <p className="text-2xl font-bold">{stats.verifiedExperts.toLocaleString()}</p>
                    </div>
                    <Shield className="w-8 h-8 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-foreground">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Pending Review</p>
                      <p className="text-2xl font-bold">{stats.pendingReview}</p>
                    </div>
                    <Clock className="w-8 h-8 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-foreground">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Total Earnings</p>
                      <p className="text-2xl font-bold">{stats.totalEarnings}</p>
                    </div>
                    <DollarSign className="w-8 h-8 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Top Performing Experts */}
            <Card className="border-2 border-foreground">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Crown className="w-5 h-5" />
                  Top Performing Experts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {experts.filter(expert => expert.status === 'verified').slice(0, 5).map(expert => (
                    <div key={expert.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={expert.avatar} alt={expert.name} />
                          <AvatarFallback>{getInitials(expert.name)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{expert.name}</p>
                          <p className="text-sm text-muted-foreground">{expert.title}</p>
                          <div className="flex items-center gap-1 mt-1">
                            <Star className="w-4 h-4 fill-black text-black" />
                            <span className="text-sm font-medium">{expert.rating}</span>
                            <span className="text-xs text-muted-foreground">({expert.reviewCount})</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-green-600">{expert.earnings}</p>
                        <p className="text-sm text-muted-foreground">{expert.sessions} sessions</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {selectedTab === 'experts' && (
          <div className="space-y-6">
            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search experts..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-foreground focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="flex gap-3">
                <select
                  className="px-4 py-2 border border-gray-300 rounded-full text-sm"
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                >
                  <option value="all">All Status</option>
                  <option value="verified">Verified</option>
                  <option value="pending">Pending</option>
                  <option value="suspended">Suspended</option>
                </select>
                
                <Button variant="outline" className="rounded-full border-2 border-foreground">
                  <Filter className="w-4 h-4 mr-2" />
                  More Filters
                </Button>
              </div>
            </div>

            {/* Experts Table */}
            <Card className="border-2 border-foreground">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Expert
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Contact & Expertise
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status & Rating
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Performance
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {filteredExperts.map(expert => (
                        <tr key={expert.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <Avatar className="w-10 h-10">
                                <AvatarImage src={expert.avatar} alt={expert.name} />
                                <AvatarFallback>{getInitials(expert.name)}</AvatarFallback>
                              </Avatar>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">{expert.name}</div>
                                <div className="text-sm text-gray-500">{expert.title}</div>
                                <div className="text-sm text-gray-500 flex items-center gap-1">
                                  <MapPin className="w-3 h-3" />
                                  {expert.location}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            <div className="space-y-1">
                              <div className="flex items-center gap-2">
                                <Mail className="w-4 h-4 text-gray-400" />
                                {expert.email}
                              </div>
                              <div className="flex flex-wrap gap-1">
                                {expert.expertise.slice(0, 2).map((skill, index) => (
                                  <Badge key={index} variant="secondary" className="text-xs">
                                    {skill}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="space-y-2">
                              <Badge className={`${getStatusColor(expert.status)} capitalize flex items-center gap-1 w-fit`}>
                                {getStatusIcon(expert.status)}
                                {expert.status}
                              </Badge>
                              {expert.rating > 0 && (
                                <div className="flex items-center gap-1">
                                  <Star className="w-4 h-4 fill-black text-black" />
                                  <span className="text-sm font-medium">{expert.rating}</span>
                                  <span className="text-xs text-gray-500">({expert.reviewCount})</span>
                                </div>
                              )}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            <div className="space-y-1">
                              <div className="font-medium">{expert.rate}</div>
                              <div>{expert.sessions} sessions</div>
                              <div className="text-green-600 font-medium">{expert.earnings}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <div className="flex items-center gap-2">
                              {expert.status === 'pending' && (
                                <>
                                  <Button size="sm" className="rounded-full bg-green-600 hover:bg-green-700 text-white">
                                    <CheckCircle className="w-4 h-4" />
                                  </Button>
                                  <Button variant="outline" size="sm" className="rounded-full border-red-300 text-red-600 hover:bg-red-50">
                                    <XCircle className="w-4 h-4" />
                                  </Button>
                                </>
                              )}
                              <Button variant="outline" size="sm" className="rounded-full">
                                <Eye className="w-4 h-4" />
                              </Button>
                              <Button variant="outline" size="sm" className="rounded-full">
                                <MoreHorizontal className="w-4 h-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {selectedTab === 'verification' && (
          <div className="space-y-6">
            {/* Pending Verification Queue */}
            <Card className="border-2 border-foreground">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Pending Verification ({experts.filter(e => e.status === 'pending').length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {experts.filter(expert => expert.status === 'pending').map(expert => (
                    <div key={expert.id} className="flex items-center justify-between p-6 bg-yellow-50 rounded-lg border border-yellow-200">
                      <div className="flex items-center gap-4">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={expert.avatar} alt={expert.name} />
                          <AvatarFallback>{getInitials(expert.name)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{expert.name}</p>
                          <p className="text-sm text-muted-foreground">{expert.title}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="secondary">Applied {expert.joinDate}</Badge>
                            <Badge variant="outline">{expert.rate}</Badge>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Button size="sm" className="rounded-full bg-green-600 hover:bg-green-700 text-white">
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Approve
                        </Button>
                        <Button variant="outline" size="sm" className="rounded-full border-red-300 text-red-600 hover:bg-red-50">
                          <XCircle className="w-4 h-4 mr-2" />
                          Reject
                        </Button>
                        <Button variant="outline" size="sm" className="rounded-full">
                          <Eye className="w-4 h-4 mr-2" />
                          Review
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {selectedTab === 'analytics' && (
          <div className="space-y-6">
            <Card className="border-2 border-foreground">
              <CardHeader>
                <CardTitle>Expert Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <TrendingUp className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Expert analytics dashboard coming soon...</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {selectedTab === 'settings' && (
          <div className="space-y-6">
            <Card className="border-2 border-foreground">
              <CardHeader>
                <CardTitle>Expert Management Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Settings panel coming soon...</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}

export default AdminExpertDashboard