import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Globe, 
  ShieldCheck, 
  UserCheck, 
  Settings, 
  ArrowRight,
  Laptop,
  Users,
  Crown,
  FileText
} from 'lucide-react'

const PrototypeNavigationPage = () => {
  const prototypes = [
    {
      id: 'website',
      title: 'Website Prototype',
      description: 'Complete public-facing website with all final pages',
      pages: [
        { name: 'Home', url: '/' },
        { name: 'Browse Experts', url: '/browse' },
        { name: 'Join as Expert', url: '/join-expert' },
        { name: 'About', url: '/about' },
        { name: 'Contact', url: '/contact' },
        { name: 'FAQ', url: '/faq' },
        { name: 'Feedback', url: '/feedback' },
        { name: 'Blog', url: '/blog' },
        { name: 'How it Works', url: '/how-it-works' },
        { name: 'Login', url: '/login' },
        { name: 'Signup', url: '/signup' }
      ],
      icon: <Globe className="w-8 h-8" />,
      url: '/',
      status: 'Live',
      badge: 'Main Site',
      color: 'bg-foreground text-background'
    },
    {
      id: 'user-flow',
      title: 'User Learning Journey',
      description: 'Complete user experience from signup to learning dashboard with goal tracking and session management.',
      features: ['User Registration', 'Learning Goals', 'Progress Tracking', 'Session Booking', 'Learning Analytics'],
      icon: <UserCheck className="w-8 h-8" />,
      url: '/signup/user',
      status: 'Live',
      badge: 'User Journey',
      color: 'bg-blue-600 text-white'
    },
    {
      id: 'expert-flow',
      title: 'Expert Teaching Platform',
      description: 'Expert application, verification, and teaching dashboard with student management and earnings tracking.',
      features: ['Expert Application', 'Profile Setup', 'Student Management', 'Earnings Analytics', 'Teaching Tools'],
      icon: <Crown className="w-8 h-8" />,
      url: '/signup/expert',
      status: 'Live',
      badge: 'Expert Platform',
      color: 'bg-purple-600 text-white'
    },
    {
      id: 'user-dashboard',
      title: 'User Dashboard (Logged In)',
      description: 'Clean learning dashboard showing progress, upcoming sessions, and learning path with Domestika-inspired design.',
      features: ['Learning Progress', 'Session Management', 'Goal Tracking', 'Recent Activity', 'Next Session'],
      icon: <Settings className="w-8 h-8" />,
      url: '/user/dashboard',
      status: 'Live',
      badge: 'Dashboard',
      color: 'bg-green-600 text-white'
    },
    {
      id: 'expert-dashboard',
      title: 'Expert Dashboard (Logged In)',
      description: 'Professional teaching dashboard with performance metrics, schedule management, and student feedback.',
      features: ['Performance Metrics', 'Today\'s Schedule', 'Student Feedback', 'Quick Actions', 'Growth Analytics'],
      icon: <FileText className="w-8 h-8" />,
      url: '/expert/dashboard',
      status: 'Live',
      badge: 'Teaching Hub',
      color: 'bg-orange-600 text-white'
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-12 px-4 bg-gray-50 border-b">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Laptop className="w-12 h-12" />
              <h1 className="text-4xl font-semibold">TapTime Prototypes</h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Navigate between different prototype interfaces and admin panels for the TapTime platform
            </p>
            <div className="flex items-center justify-center gap-4 pt-4">
              <Badge variant="secondary" className="px-3 py-1">
                <FileText className="w-4 h-4 mr-2" />
                Based on BRD/FRD Requirements
              </Badge>
              <Badge variant="secondary" className="px-3 py-1">
                <Users className="w-4 h-4 mr-2" />
                Multi-Platform Design
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Prototypes Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4">Available Prototypes</h2>
            <p className="text-muted-foreground">
              Choose the interface you want to explore
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
            {prototypes.map((prototype) => (
              <Card key={prototype.id} className="border-2 border-foreground h-full">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-full ${prototype.color}`}>
                      {prototype.icon}
                    </div>
                    <div className="flex gap-2">
                      <Badge variant={prototype.status === 'Live' ? 'default' : 'secondary'}>
                        {prototype.status}
                      </Badge>
                      <Badge variant="outline">
                        {prototype.badge}
                      </Badge>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{prototype.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {prototype.description}
                  </p>
                  
                  <div>
                    {prototype.pages ? (
                      <>
                        <h4 className="font-medium mb-3">Available Pages:</h4>
                        <ul className="space-y-2">
                          {prototype.pages.map((page, index) => (
                            <li key={index} className="flex items-center justify-between text-sm">
                              <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-foreground rounded-full"></div>
                                {page.name}
                              </div>
                              <button
                                onClick={() => window.location.href = page.url}
                                className="text-xs text-muted-foreground hover:text-foreground underline"
                              >
                                Visit
                              </button>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <>
                        <h4 className="font-medium mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {prototype.features.map((feature, index) => (
                            <li key={index} className="flex items-center gap-2 text-sm">
                              <div className="w-1.5 h-1.5 bg-foreground rounded-full"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>

                  <div className="pt-4">
                    {prototype.status === 'Live' ? (
                      <Button 
                        className="w-full rounded-full" 
                        onClick={() => window.location.href = prototype.url}
                      >
                        Open Prototype
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    ) : (
                      <Button 
                        variant="outline" 
                        className="w-full rounded-full border-2 border-foreground" 
                        disabled
                      >
                        Coming Soon
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default PrototypeNavigationPage