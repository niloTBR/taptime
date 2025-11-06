import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts'
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
  Package
} from 'lucide-react'

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('stats')
  const [expertApprovalTab, setExpertApprovalTab] = useState('requests')

  // Sample data for statistics
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
    { month: 'Jan', profit: 5 },
    { month: 'Feb', profit: 8 },
    { month: 'Mar', profit: 12 },
    { month: 'Apr', profit: 15 },
    { month: 'May', profit: 18 },
    { month: 'Jun', profit: 22 },
    { month: 'Jul', profit: 20 },
    { month: 'Aug', profit: 25 }
  ]

  const searchInsights = [
    { keyword: 'Top Expert', percentage: 55 },
    { keyword: 'Charity Programs', percentage: 23 },
    { keyword: 'Meeting with best', percentage: 10 },
    { keyword: 'E-learning Sessions', percentage: 8 },
    { keyword: 'Legal Advice', percentage: 5 }
  ]

  // Expert approval data
  const expertRequests = [
    {
      id: 1,
      name: 'Harry Brooks',
      email: 'brooks@gmail.com',
      fees: '$500/60mins',
      verified: 'N/A',
      charity: 'Website URL',
      avatar: '/api/placeholder/40/40',
      bio: 'Passionate Software Engineer Crafting Innovative Solutions',
      phone: '901-234-5678',
      location: 'Dubai, UAE',
      title: 'Senior Software Engineer',
      industry: 'Technology',
      expertise: ['Web Development', 'Mobile Apps', 'AI/ML'],
      experience: '8+ years'
    },
    {
      id: 2,
      name: 'Isabella Grace Harrington',
      email: 'isabell209@gmail.com',
      fees: '$500/60mins',
      verified: 'https://www.linkedin.com/in/isabella',
      charity: 'Website URL',
      avatar: '/api/placeholder/40/40',
      bio: 'Marketing strategist with expertise in digital transformation',
      phone: '555-123-4567',
      location: 'New York, NY',
      title: 'Marketing Director',
      industry: 'Marketing',
      expertise: ['Digital Marketing', 'Brand Strategy', 'Growth Hacking'],
      experience: '10+ years'
    }
  ]

  // Categories data
  const categories = [
    {
      id: 1,
      name: 'Business & Startups',
      subcategories: ['Scaling Startups', 'Exit Strategy', 'Fundraising'],
      quantity: 1,
      date: '3rd Sep 2025',
      image: '/api/placeholder/60/40'
    },
    {
      id: 2,
      name: 'Technology & Innovation',
      subcategories: ['Artificial Intelligence (AI)', 'SaaS & Software'],
      quantity: 1,
      date: '4th Sep 2025',
      image: '/api/placeholder/60/40'
    },
    {
      id: 3,
      name: 'Design & Creativity',
      subcategories: ['UI/UX Design', 'Product Design', 'Fashion'],
      quantity: 1,
      date: '5th Sep 2025',
      image: '/api/placeholder/60/40'
    }
  ]

  // Withdrawal requests
  const withdrawalRequests = [
    {
      id: '#001',
      expertName: 'John Doe',
      amount: '$250',
      bankDetails: 'View details',
      requestDate: '01 Aug 2025',
      status: 'approved'
    },
    {
      id: '#002',
      expertName: 'Jane Smith',
      amount: '$400',
      bankDetails: 'View details',
      requestDate: '05 Aug 2025',
      status: 'pending'
    }
  ]

  const sidebar = [
    { id: 'stats', label: 'Statistics', icon: Home },
    { id: 'categories', label: 'Categories', icon: Package },
    { id: 'experts', label: 'Expert Approval', icon: UserCheck },
    { id: 'meetings', label: 'Meetings', icon: Calendar },
    { id: 'withdrawals', label: 'Withdrawals', icon: DollarSign },
    { id: 'reviews', label: 'Reviews', icon: FileText },
    { id: 'users', label: 'Users', icon: Users },
    { id: 'settings', label: 'Settings', icon: Settings }
  ]

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()
  }

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <div className="w-20 bg-white border-r border-gray-200 flex flex-col items-center py-6">
        <div className="mb-8">
          <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">TT</span>
          </div>
        </div>
        
        <div className="space-y-4">
          {sidebar.map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${
                  activeTab === item.id
                    ? 'bg-gray-100 text-foreground'
                    : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Icon className="w-6 h-6" />
              </button>
            )
          })}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        {/* Statistics Dashboard */}
        {activeTab === 'stats' && (
          <div>
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl font-semibold">Statistics Dashboard</h1>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-muted-foreground">Live</span>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-medium mb-6">Platform statistics</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <Card className="border-2">
                  <CardContent className="p-4">
                    <div className="text-sm text-muted-foreground mb-2">Total Users</div>
                    <div className="text-2xl font-bold text-green-600">{platformStats.totalUsers}</div>
                  </CardContent>
                </Card>
                <Card className="border-2">
                  <CardContent className="p-4">
                    <div className="text-sm text-muted-foreground mb-2">Active Users</div>
                    <div className="text-2xl font-bold text-green-600">{platformStats.activeUsers}</div>
                  </CardContent>
                </Card>
                <Card className="border-2">
                  <CardContent className="p-4">
                    <div className="text-sm text-muted-foreground mb-2">Meeting Booked</div>
                    <div className="text-2xl font-bold text-green-600">{platformStats.meetingBooked}</div>
                  </CardContent>
                </Card>
                <Card className="border-2 bg-gray-50">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="text-sm text-muted-foreground">Total Amount</div>
                        <div className="text-xl font-bold text-green-600">${platformStats.totalAmount}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Net Profit</div>
                        <div className="text-xl font-bold text-green-600">${platformStats.netProfit}</div>
                      </div>
                    </div>
                    <div className="h-16">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={profitData}>
                          <Line dataKey="profit" stroke="#22c55e" strokeWidth={2} dot={false} />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-3 gap-6 mb-8">
                <Card className="border-2">
                  <CardContent className="p-4">
                    <div className="text-sm text-muted-foreground mb-2">Total Expert</div>
                    <div className="text-2xl font-bold text-green-600">{platformStats.totalExperts}</div>
                  </CardContent>
                </Card>
                <Card className="border-2">
                  <CardContent className="p-4">
                    <div className="text-sm text-muted-foreground mb-2">Active Expert</div>
                    <div className="text-2xl font-bold text-green-600">{platformStats.activeExperts}</div>
                  </CardContent>
                </Card>
                <Card className="border-2">
                  <CardContent className="p-4">
                    <div className="text-sm text-muted-foreground mb-2">Total Meeting</div>
                    <div className="text-2xl font-bold text-green-600">{platformStats.totalMeetings}</div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Search Insights */}
            <div>
              <h2 className="text-xl font-medium mb-6">Search Insights</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="flex items-center justify-center">
                  <div className="relative">
                    <div className="w-64 h-64 relative">
                      {/* Bubble chart representation */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-32 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                          Best Expert
                        </div>
                      </div>
                      <div className="absolute top-8 right-8 w-16 h-16 bg-green-300 rounded-full flex items-center justify-center text-xs">
                        Best Mentor
                      </div>
                      <div className="absolute top-12 left-4 w-20 h-20 bg-green-400 rounded-full flex items-center justify-center text-xs">
                        Startups
                      </div>
                      <div className="absolute bottom-8 right-12 w-24 h-24 bg-green-200 rounded-full flex items-center justify-center text-xs">
                        Business
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-4">Top 5 Keywords Search Insights</h3>
                  <div className="space-y-3">
                    {searchInsights.map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm">{index + 1}. {item.keyword}</span>
                        <span className="text-sm font-medium">{item.percentage}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Expert Approval */}
        {activeTab === 'experts' && (
          <div>
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl font-semibold">Expert Approval Dashboard</h1>
              <Button className="bg-green-500 hover:bg-green-600 text-white rounded-full">
                <Plus className="w-4 h-4 mr-2" />
                Add Expert
              </Button>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-medium mb-4">Expert List</h2>
              
              {/* Tab Navigation */}
              <div className="flex space-x-1 mb-6">
                {['requests', 'rejected', 'reapplied'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setExpertApprovalTab(tab)}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                      expertApprovalTab === tab
                        ? 'bg-gray-100 text-foreground'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              {/* Expert List Table */}
              <Card className="border-2">
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="border-b bg-gray-50">
                        <tr>
                          <th className="text-left p-4 font-medium">Name</th>
                          <th className="text-left p-4 font-medium">Email</th>
                          <th className="text-left p-4 font-medium">Fees</th>
                          <th className="text-left p-4 font-medium">Verified</th>
                          <th className="text-left p-4 font-medium">Charity</th>
                          <th className="text-left p-4 font-medium">Add Tags</th>
                          <th className="text-left p-4 font-medium">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {expertRequests.map((expert) => (
                          <tr key={expert.id} className="border-b hover:bg-gray-50">
                            <td className="p-4">
                              <div className="flex items-center gap-3">
                                <Avatar className="w-10 h-10">
                                  <AvatarImage src={expert.avatar} alt={expert.name} />
                                  <AvatarFallback>{getInitials(expert.name)}</AvatarFallback>
                                </Avatar>
                                <span className="font-medium">{expert.name}</span>
                              </div>
                            </td>
                            <td className="p-4 text-sm text-muted-foreground">{expert.email}</td>
                            <td className="p-4 text-sm">{expert.fees}</td>
                            <td className="p-4 text-sm">{expert.verified}</td>
                            <td className="p-4 text-sm text-green-600">{expert.charity}</td>
                            <td className="p-4">
                              <Button variant="ghost" size="sm" className="text-green-600 hover:text-green-700">
                                Add Tag
                              </Button>
                            </td>
                            <td className="p-4">
                              <div className="flex items-center gap-2">
                                <Button size="sm" className="w-8 h-8 p-0 bg-green-500 hover:bg-green-600">
                                  <Check className="w-4 h-4" />
                                </Button>
                                <Button size="sm" variant="outline" className="w-8 h-8 p-0 border-red-300 text-red-500 hover:bg-red-50">
                                  <X className="w-4 h-4" />
                                </Button>
                                <Button size="sm" variant="ghost" className="w-8 h-8 p-0">
                                  <Eye className="w-4 h-4" />
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
          </div>
        )}

        {/* Categories Management */}
        {activeTab === 'categories' && (
          <div>
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl font-semibold">Category</h1>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-medium">Category List</h2>
                <Button className="bg-green-500 hover:bg-green-600 text-white rounded-full">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Category
                </Button>
              </div>

              {/* Search and Filter */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <Button variant="outline" className="flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  Filter
                </Button>
              </div>

              {/* Categories Table */}
              <Card className="border-2">
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="border-b bg-gray-50">
                        <tr>
                          <th className="text-left p-4 font-medium">Image</th>
                          <th className="text-left p-4 font-medium">Categories</th>
                          <th className="text-left p-4 font-medium">Sub-Categories</th>
                          <th className="text-left p-4 font-medium">Quantity</th>
                          <th className="text-left p-4 font-medium">Date</th>
                          <th className="text-left p-4 font-medium">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {categories.map((category) => (
                          <tr key={category.id} className="border-b hover:bg-gray-50">
                            <td className="p-4">
                              <img 
                                src={category.image} 
                                alt={category.name}
                                className="w-12 h-8 object-cover rounded"
                              />
                            </td>
                            <td className="p-4 font-medium">{category.name}</td>
                            <td className="p-4 text-sm text-muted-foreground">
                              {category.subcategories.join(', ')}...
                            </td>
                            <td className="p-4 text-sm">{category.quantity}</td>
                            <td className="p-4 text-sm text-muted-foreground">{category.date}</td>
                            <td className="p-4">
                              <div className="flex items-center gap-2">
                                <Button size="sm" variant="ghost" className="w-8 h-8 p-0">
                                  <Eye className="w-4 h-4" />
                                </Button>
                                <Button size="sm" variant="ghost" className="w-8 h-8 p-0">
                                  <Edit className="w-4 h-4" />
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
          </div>
        )}

        {/* Withdrawals */}
        {activeTab === 'withdrawals' && (
          <div>
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl font-semibold">Withdrawal Dashboard</h1>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-medium mb-4">Withdrawal Requests</h2>
              
              {/* Status Tabs */}
              <div className="flex space-x-1 mb-6">
                {['approved', 'pending', 'rejected'].map((status) => (
                  <button
                    key={status}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                      status === 'approved'
                        ? 'bg-gray-100 text-foreground'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                  </button>
                ))}
              </div>

              {/* Withdrawals Table */}
              <Card className="border-2">
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="border-b bg-gray-50">
                        <tr>
                          <th className="text-left p-4 font-medium">Request ID</th>
                          <th className="text-left p-4 font-medium">Expert Name</th>
                          <th className="text-left p-4 font-medium">Amount ($)</th>
                          <th className="text-left p-4 font-medium">Bank details</th>
                          <th className="text-left p-4 font-medium">Request Date</th>
                          <th className="text-left p-4 font-medium">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {withdrawalRequests.map((request) => (
                          <tr key={request.id} className="border-b hover:bg-gray-50">
                            <td className="p-4 font-medium">{request.id}</td>
                            <td className="p-4">{request.expertName}</td>
                            <td className="p-4">{request.amount}</td>
                            <td className="p-4">
                              <Button variant="ghost" size="sm" className="text-green-600 hover:text-green-700 p-0">
                                {request.bankDetails}
                              </Button>
                            </td>
                            <td className="p-4 text-sm text-muted-foreground">{request.requestDate}</td>
                            <td className="p-4">
                              <div className="flex items-center gap-2">
                                {request.status === 'approved' ? (
                                  <>
                                    <Button size="sm" className="w-8 h-8 p-0 bg-green-500 hover:bg-green-600">
                                      <Check className="w-4 h-4" />
                                    </Button>
                                    <Button size="sm" variant="outline" className="w-8 h-8 p-0 border-red-300 text-red-500">
                                      <X className="w-4 h-4" />
                                    </Button>
                                  </>
                                ) : (
                                  <>
                                    <Button size="sm" variant="ghost" className="w-8 h-8 p-0">
                                      <Eye className="w-4 h-4" />
                                    </Button>
                                    <Button size="sm" variant="ghost" className="w-8 h-8 p-0">
                                      <Download className="w-4 h-4" />
                                    </Button>
                                  </>
                                )}
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
          </div>
        )}

        {/* Placeholder for other tabs */}
        {!['stats', 'experts', 'categories', 'withdrawals'].includes(activeTab) && (
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold mb-4">
              {sidebar.find(item => item.id === activeTab)?.label} Dashboard
            </h2>
            <p className="text-muted-foreground">This section is under development.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default AdminDashboard