import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Calendar, User, ArrowRight } from 'lucide-react'

const BlogPage = () => {
  const posts = [
    {
      title: "How to Choose the Right Expert for Your Career Goals",
      excerpt: "Finding the perfect mentor can transform your professional journey. Here's our comprehensive guide to matching with the right expert.",
      author: "Sarah Chen",
      date: "January 15, 2025",
      category: "Career Growth",
      readTime: "5 min read"
    },
    {
      title: "The Future of Remote Mentorship",
      excerpt: "Exploring how technology is reshaping professional mentorship and making expert guidance more accessible than ever.",
      author: "Mike Rodriguez",
      date: "January 12, 2025",
      category: "Industry Insights",
      readTime: "3 min read"
    },
    {
      title: "Building Confidence in Your First Expert Session",
      excerpt: "Nervous about your first mentorship session? These tips will help you make the most of your time with an expert.",
      author: "Emily Johnson",
      date: "January 10, 2025",
      category: "Tips & Advice",
      readTime: "4 min read"
    },
    {
      title: "Success Stories: From Startup Idea to Launch",
      excerpt: "Meet three entrepreneurs who turned their business ideas into reality with help from TapTime experts.",
      author: "David Park",
      date: "January 8, 2025",
      category: "Success Stories",
      readTime: "6 min read"
    }
  ]

  const categories = ["All", "Career Growth", "Industry Insights", "Tips & Advice", "Success Stories"]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            TapTime Blog
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Insights, tips, and stories to help you make the most of expert mentorship
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 px-4 bg-white border-b">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className={index === 0 ? "bg-blue-600 hover:bg-blue-700" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl line-clamp-2 hover:text-blue-600 transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-blue-600" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Get the latest insights and tips delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg border-0 focus:ring-2 focus:ring-white"
            />
            <Button variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BlogPage