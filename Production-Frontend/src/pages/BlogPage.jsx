import { useState } from 'react'
import { Calendar, User, ArrowRight, Search } from 'lucide-react'
import Container from '@/components/layout/Container'
import Breadcrumb from '@/components/navigation/Breadcrumb'
import { Card, CardContent } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const categories = ['All', 'Success Stories', 'Expert Insights', 'Platform Updates', 'Career Growth']

  const blogPosts = [
    {
      id: 1,
      title: 'How Sarah Landed Her Dream Product Manager Role After One TapTime Session',
      excerpt: 'From struggling with interviews to securing a PM position at a top tech company - Sarah\'s transformation story.',
      category: 'Success Stories',
      author: 'TapTime Team',
      date: '2024-03-15',
      readTime: '5 min read',
      image: '/api/placeholder/400/250',
      featured: true
    },
    {
      id: 2,
      title: 'The Art of the 15-Minute Mentorship: Why Shorter Sessions Work Better',
      excerpt: 'Research shows that focused, time-bound conversations lead to more actionable outcomes than lengthy meetings.',
      category: 'Expert Insights',
      author: 'Dr. Marcus Chen',
      date: '2024-03-12',
      readTime: '7 min read',
      image: '/api/placeholder/400/250'
    },
    {
      id: 3,
      title: 'Introducing AI-Powered Expert Matching',
      excerpt: 'Our new matching algorithm connects you with the perfect expert based on your specific needs and goals.',
      category: 'Platform Updates',
      author: 'TapTime Team',
      date: '2024-03-10',
      readTime: '3 min read',
      image: '/api/placeholder/400/250'
    },
    {
      id: 4,
      title: 'From Startup Founder to Industry Expert: Maria\'s Journey',
      excerpt: 'How Maria built a $50M company and now shares her expertise with the next generation of entrepreneurs.',
      category: 'Success Stories',
      author: 'Content Team',
      date: '2024-03-08',
      readTime: '6 min read',
      image: '/api/placeholder/400/250'
    },
    {
      id: 5,
      title: '5 Questions Every Expert Should Ask Their Mentees',
      excerpt: 'Effective mentoring starts with the right questions. Here\'s how top experts maximize their session impact.',
      category: 'Expert Insights',
      author: 'Isabella Grace',
      date: '2024-03-05',
      readTime: '4 min read',
      image: '/api/placeholder/400/250'
    },
    {
      id: 6,
      title: 'Career Pivot at 35: How TapTime Helped John Transition to Tech',
      excerpt: 'From finance to full-stack development - John\'s complete career transformation with expert guidance.',
      category: 'Career Growth',
      author: 'Success Stories',
      date: '2024-03-03',
      readTime: '8 min read',
      image: '/api/placeholder/400/250'
    }
  ]

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  const searchFilteredPosts = searchQuery
    ? filteredPosts.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredPosts

  const featuredPost = blogPosts.find(post => post.featured)
  const otherPosts = searchFilteredPosts.filter(post => !post.featured)

  const breadcrumbItems = [
    { label: 'Blog' }
  ]

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-gray-50 py-12">
        <Container>
          <div className="space-y-6">
            <Breadcrumb items={breadcrumbItems} />
            <div className="text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                TapTime Blog
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Success stories, expert insights, and platform updates from the TapTime community.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Search and Categories */}
      <section className="py-8">
        <Container>
          <div className="space-y-6">
            {/* Search */}
            <div className="max-w-xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search blog posts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-gray-300 focus:border-black focus:outline-none"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "primary" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Post */}
      {featuredPost && selectedCategory === 'All' && !searchQuery && (
        <section className="pb-12">
          <Container>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Featured Story</h2>
            </div>
            <Card className="overflow-hidden border-2 border-black">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-video lg:aspect-auto">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-8 flex flex-col justify-between">
                  <div className="space-y-4">
                    <Badge variant="primary" size="sm">
                      {featuredPost.category}
                    </Badge>
                    <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                      {featuredPost.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                      </div>
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <div className="pt-6">
                    <Button className="inline-flex items-center gap-2">
                      Read Full Story
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </Container>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="pb-20">
        <Container>
          <div className="space-y-8">
            {otherPosts.length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  {searchQuery ? 'Search Results' : 'Latest Posts'}
                </h2>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="aspect-video">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <Badge variant="secondary" size="xs">
                      {post.category}
                    </Badge>
                    <h3 className="text-lg font-semibold text-gray-900 leading-tight line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* No Results */}
            {searchFilteredPosts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-500 mb-4">
                  No blog posts found matching your search
                </div>
                <Button 
                  variant="outline"
                  onClick={() => {
                    setSearchQuery('')
                    setSelectedCategory('All')
                  }}
                >
                  Clear Search
                </Button>
              </div>
            )}

            {/* Load More */}
            {searchFilteredPosts.length > 0 && (
              <div className="text-center pt-8">
                <Button variant="outline" size="lg" className="px-8">
                  Load More Posts
                </Button>
              </div>
            )}
          </div>
        </Container>
      </section>
    </div>
  )
}

export default BlogPage