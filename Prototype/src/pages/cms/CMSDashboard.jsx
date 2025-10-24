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
  Plus,
  Download,
  Upload,
  FileText,
  Users,
  Settings,
  Globe,
  BarChart3,
  Calendar,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  Image,
  Video,
  Layout,
  PenTool
} from 'lucide-react'

const CMSDashboard = () => {
  const [selectedTab, setSelectedTab] = useState('dashboard')
  const [searchQuery, setSearchQuery] = useState('')
  const [contentType, setContentType] = useState('all')

  // Mock data
  const stats = {
    totalContent: 1248,
    publishedPages: 89,
    draftContent: 23,
    mediaFiles: 456
  }

  const recentContent = [
    {
      id: 1,
      title: 'TapTime Blog: Expert Interview Series',
      type: 'blog',
      status: 'published',
      author: 'Sarah Johnson',
      lastModified: '2024-03-15',
      views: 1240
    },
    {
      id: 2,
      title: 'Homepage Hero Section',
      type: 'page',
      status: 'published',
      author: 'Mike Chen',
      lastModified: '2024-03-14',
      views: 5890
    },
    {
      id: 3,
      title: 'Expert Onboarding Guide',
      type: 'documentation',
      status: 'draft',
      author: 'Emily Rodriguez',
      lastModified: '2024-03-13',
      views: 156
    },
    {
      id: 4,
      title: 'Browse Experts Page Content',
      type: 'page',
      status: 'published',
      author: 'David Thompson',
      lastModified: '2024-03-12',
      views: 3420
    },
    {
      id: 5,
      title: 'Platform Introduction Video',
      type: 'media',
      status: 'published',
      author: 'Lisa Park',
      lastModified: '2024-03-11',
      views: 2890
    }
  ]

  const contentTypes = [
    { id: 'pages', label: 'Pages', count: 23, icon: <Layout className="w-5 h-5" /> },
    { id: 'blog', label: 'Blog Posts', count: 45, icon: <FileText className="w-5 h-5" /> },
    { id: 'media', label: 'Media Files', count: 456, icon: <Image className="w-5 h-5" /> },
    { id: 'users', label: 'User Content', count: 189, icon: <Users className="w-5 h-5" /> },
    { id: 'experts', label: 'Expert Profiles', count: 67, icon: <PenTool className="w-5 h-5" /> },
    { id: 'settings', label: 'Site Settings', count: 12, icon: <Settings className="w-5 h-5" /> }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'published': return 'bg-green-100 text-green-800'
      case 'draft': return 'bg-yellow-100 text-yellow-800'
      case 'archived': return 'bg-gray-100 text-gray-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getTypeIcon = (type) => {
    switch (type) {
      case 'blog': return <FileText className="w-4 h-4" />
      case 'page': return <Layout className="w-4 h-4" />
      case 'media': return <Image className="w-4 h-4" />
      case 'documentation': return <FileText className="w-4 h-4" />
      default: return <FileText className="w-4 h-4" />
    }
  }

  const filteredContent = recentContent.filter(content => {
    const matchesSearch = content.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         content.author.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesType = contentType === 'all' || content.type === contentType
    return matchesSearch && matchesType
  })

  const tabs = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'content', label: 'Content' },
    { id: 'media', label: 'Media Library' },
    { id: 'users', label: 'User Management' },
    { id: 'settings', label: 'Site Settings' }
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
            <h1 className="text-2xl font-semibold">TapTime CMS</h1>
            <Badge variant="secondary">Content Management</Badge>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="rounded-full border-2 border-foreground">
              <Upload className="w-4 h-4 mr-2" />
              Import
            </Button>
            <Button variant="outline" size="sm" className="rounded-full border-2 border-foreground">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
            <Avatar className="w-8 h-8">
              <AvatarImage src="/api/placeholder/32/32" alt="Admin" />
              <AvatarFallback>CM</AvatarFallback>
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
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-2 border-foreground">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Total Content</p>
                      <p className="text-2xl font-bold">{stats.totalContent.toLocaleString()}</p>
                    </div>
                    <FileText className="w-8 h-8 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-foreground">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Published Pages</p>
                      <p className="text-2xl font-bold">{stats.publishedPages}</p>
                    </div>
                    <Globe className="w-8 h-8 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-foreground">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Draft Content</p>
                      <p className="text-2xl font-bold">{stats.draftContent}</p>
                    </div>
                    <Edit className="w-8 h-8 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-foreground">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Media Files</p>
                      <p className="text-2xl font-bold">{stats.mediaFiles}</p>
                    </div>
                    <Image className="w-8 h-8 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Content Types Grid */}
            <Card className="border-2 border-foreground">
              <CardHeader>
                <CardTitle>Content Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {contentTypes.map(type => (
                    <div key={type.id} className="p-4 bg-gray-50 rounded-lg text-center space-y-3">
                      <div className="flex justify-center text-muted-foreground">
                        {type.icon}
                      </div>
                      <div>
                        <p className="font-medium text-sm">{type.label}</p>
                        <p className="text-2xl font-bold">{type.count}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="border-2 border-foreground">
              <CardHeader>
                <CardTitle>Recent Content Updates</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentContent.slice(0, 5).map(content => (
                    <div key={content.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-white rounded-lg">
                          {getTypeIcon(content.type)}
                        </div>
                        <div>
                          <p className="font-medium">{content.title}</p>
                          <p className="text-sm text-muted-foreground">
                            By {content.author} • {content.lastModified} • {content.views} views
                          </p>
                        </div>
                      </div>
                      <Badge className={getStatusColor(content.status)}>
                        {content.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {selectedTab === 'content' && (
          <div className="space-y-6">
            {/* Content Header */}
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Content Management</h2>
              <Button className="rounded-full">
                <Plus className="w-4 h-4 mr-2" />
                New Content
              </Button>
            </div>

            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search content..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-foreground focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="flex gap-3">
                <select
                  className="px-4 py-2 border border-gray-300 rounded-full text-sm"
                  value={contentType}
                  onChange={(e) => setContentType(e.target.value)}
                >
                  <option value="all">All Types</option>
                  <option value="page">Pages</option>
                  <option value="blog">Blog Posts</option>
                  <option value="media">Media</option>
                  <option value="documentation">Documentation</option>
                </select>
                
                <Button variant="outline" className="rounded-full border-2 border-foreground">
                  <Filter className="w-4 h-4 mr-2" />
                  More Filters
                </Button>
              </div>
            </div>

            {/* Content Table */}
            <Card className="border-2 border-foreground">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Content
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Type
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Author
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Stats
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {filteredContent.map(content => (
                        <tr key={content.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="p-2 bg-gray-100 rounded-lg mr-3">
                                {getTypeIcon(content.type)}
                              </div>
                              <div>
                                <div className="text-sm font-medium text-gray-900">{content.title}</div>
                                <div className="text-sm text-gray-500">Last modified: {content.lastModified}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 capitalize">
                            {content.type}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <Badge className={`${getStatusColor(content.status)} capitalize`}>
                              {content.status}
                            </Badge>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {content.author}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            <div className="flex items-center gap-2">
                              <Eye className="w-4 h-4 text-gray-400" />
                              {content.views} views
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <div className="flex items-center gap-2">
                              <Button variant="outline" size="sm" className="rounded-full">
                                <Eye className="w-4 h-4" />
                              </Button>
                              <Button variant="outline" size="sm" className="rounded-full">
                                <Edit className="w-4 h-4" />
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

        {selectedTab === 'media' && (
          <div className="space-y-6">
            <Card className="border-2 border-foreground">
              <CardHeader>
                <CardTitle>Media Library</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Image className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Media library management coming soon...</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {selectedTab === 'users' && (
          <div className="space-y-6">
            <Card className="border-2 border-foreground">
              <CardHeader>
                <CardTitle>User Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">User management interface coming soon...</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {selectedTab === 'settings' && (
          <div className="space-y-6">
            <Card className="border-2 border-foreground">
              <CardHeader>
                <CardTitle>Site Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Settings className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Site settings panel coming soon...</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}

export default CMSDashboard