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
      description: 'Main public-facing website with homepage, browse experts, join expert flow, and all marketing pages.',
      features: ['Homepage & Landing', 'Browse Experts', 'Expert Profiles', 'Join as Expert', 'Blog & Content'],
      icon: <Globe className="w-8 h-8" />,
      url: '/',
      status: 'Live',
      badge: 'Current',
      color: 'bg-foreground text-background'
    },
    {
      id: 'admin-user',
      title: 'Admin Panel: Find Expert',
      description: 'Administrative interface for users looking for experts. Includes user management, booking oversight, and analytics.',
      features: ['User Dashboard', 'Booking Management', 'Payment Tracking', 'Support Tools', 'Analytics'],
      icon: <UserCheck className="w-8 h-8" />,
      url: '/admin/user',
      status: 'Live',
      badge: 'Admin',
      color: 'bg-foreground text-background'
    },
    {
      id: 'admin-expert',
      title: 'Admin Panel: Join As Expert',
      description: 'Administrative interface for expert onboarding, verification, profile management, and performance tracking.',
      features: ['Expert Verification', 'Profile Management', 'Earnings Dashboard', 'Schedule Management', 'Performance Metrics'],
      icon: <Crown className="w-8 h-8" />,
      url: '/admin/expert',
      status: 'Live',
      badge: 'Admin',
      color: 'bg-foreground text-background'
    },
    {
      id: 'cms',
      title: 'Content Management System',
      description: 'Backend CMS for managing all website content, user data, expert profiles, and system configurations.',
      features: ['Content Management', 'User Administration', 'Expert Management', 'System Settings', 'Analytics'],
      icon: <Settings className="w-8 h-8" />,
      url: '/cms',
      status: 'Live',
      badge: 'CMS',
      color: 'bg-foreground text-background'
    },
    {
      id: 'user-dashboard',
      title: 'User Dashboard',
      description: 'Personal dashboard for users finding experts. Track sessions, manage bookings, view history, and manage profile.',
      features: ['Session Management', 'Booking History', 'Saved Experts', 'Billing & Payments', 'Profile Settings'],
      icon: <Users className="w-8 h-8" />,
      url: '/user/dashboard',
      status: 'Live',
      badge: 'User',
      color: 'bg-foreground text-background'
    },
    {
      id: 'expert-dashboard',
      title: 'Expert Dashboard',
      description: 'Professional dashboard for experts. Manage schedule, track earnings, view client feedback, and update profile.',
      features: ['Schedule Management', 'Earnings Analytics', 'Client Feedback', 'Performance Metrics', 'Profile Management'],
      icon: <Crown className="w-8 h-8" />,
      url: '/expert/dashboard',
      status: 'Live',
      badge: 'Expert',
      color: 'bg-foreground text-background'
    }
  ]

  const designReferences = [
    {
      category: 'Website Designs',
      count: '14 screens',
      folder: 'Website',
      description: 'Homepage, Browse, Filter, Match, Blog, Journey, Join, Expert Profile, Voucher, Login, Sign Up, Privacy'
    },
    {
      category: 'User Panel Designs',
      count: '11 screens',
      folder: 'User',
      description: 'User dashboard, booking flow, session management, payment, profile settings'
    },
    {
      category: 'Expert Panel Designs',
      count: '21 screens',
      folder: 'Expert',
      description: 'Expert dashboard, profile setup, schedule management, earnings, analytics, verification'
    },
    {
      category: 'Admin Panel Designs',
      count: '11 screens',
      folder: 'Admin',
      description: 'Admin dashboard, user management, expert verification, system analytics, content management'
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
                    <h4 className="font-medium mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {prototype.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-foreground rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
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

          {/* Design References */}
          <div className="border-t pt-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold mb-4">Design References</h2>
              <p className="text-muted-foreground">
                View the design mockups and specifications for each interface
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {designReferences.map((ref, index) => (
                <Card key={index} className="border-2 border-foreground">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                      <FileText className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{ref.category}</h3>
                      <div className="text-sm text-muted-foreground mt-1">{ref.count}</div>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {ref.description}
                    </p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="rounded-full border-2 border-foreground w-full"
                      onClick={() => {
                        // This would open the design folder in the actual implementation
                        alert(`Opening ${ref.folder} design folder with ${ref.count}`)
                      }}
                    >
                      View Designs
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Documentation Links */}
          <div className="border-t pt-16 mt-16">
            <div className="text-center">
              <h2 className="text-3xl font-semibold mb-8">Project Documentation</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <Card className="border-2 border-foreground">
                  <CardContent className="p-6 text-center space-y-4">
                    <FileText className="w-8 h-8 mx-auto" />
                    <h3 className="font-semibold">Business Requirements</h3>
                    <p className="text-sm text-muted-foreground">
                      Complete BRD documentation
                    </p>
                    <Button variant="outline" size="sm" className="rounded-full border-2 border-foreground">
                      View BRD
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-2 border-foreground">
                  <CardContent className="p-6 text-center space-y-4">
                    <FileText className="w-8 h-8 mx-auto" />
                    <h3 className="font-semibold">Functional Requirements</h3>
                    <p className="text-sm text-muted-foreground">
                      Detailed FRD specifications
                    </p>
                    <Button variant="outline" size="sm" className="rounded-full border-2 border-foreground">
                      View FRD
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-2 border-foreground">
                  <CardContent className="p-6 text-center space-y-4">
                    <Users className="w-8 h-8 mx-auto" />
                    <h3 className="font-semibold">User Personas</h3>
                    <p className="text-sm text-muted-foreground">
                      Target user profiles
                    </p>
                    <Button variant="outline" size="sm" className="rounded-full border-2 border-foreground">
                      View Personas
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PrototypeNavigationPage