import { Search, Calendar, Video, FileText, CheckCircle, ArrowRight } from 'lucide-react'
import Container from '@/components/layout/Container'
import Breadcrumb from '@/components/navigation/Breadcrumb'
import { Card, CardContent } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'

const HowItWorksPage = () => {
  const steps = [
    {
      number: "01",
      title: "Tap In: Choose your need",
      description: "Browse our network of verified experts across 25+ categories. Search by expertise, industry, or specific challenge you're facing.",
      icon: <Search className="w-8 h-8" />,
      features: [
        "25+ expert categories",
        "Advanced search filters",
        "Expert profiles with reviews",
        "Clear pricing upfront"
      ]
    },
    {
      number: "02", 
      title: "Smart Match",
      description: "Our AI helps match you with experts who've solved your exact challenges. Book a session that fits your schedule.",
      icon: <Calendar className="w-8 h-8" />,
      features: [
        "AI-powered matching",
        "Instant booking",
        "Flexible scheduling",
        "Secure payments"
      ]
    },
    {
      number: "03",
      title: "Book instantly",
      description: "Choose your preferred time slot and complete your booking. All sessions are conducted via our secure video platform.",
      icon: <Video className="w-8 h-8" />,
      features: [
        "Secure video calls",
        "Session recordings (with permission)",
        "Real-time collaboration tools",
        "Mobile & desktop friendly"
      ]
    },
    {
      number: "04",
      title: "Act with Clarity",
      description: "Leave with actionable insights, clear next steps, and often additional resources to help you implement what you learned.",
      icon: <FileText className="w-8 h-8" />,
      features: [
        "Session summaries",
        "Action plans",
        "Follow-up resources",
        "Progress tracking"
      ]
    }
  ]

  const benefits = [
    {
      title: "Access Real Talent",
      description: "Connect with professionals who have first-hand experience in your challenge area."
    },
    {
      title: "Save Time, Make Progress", 
      description: "Get months of trial and error compressed into focused 15-minute sessions."
    },
    {
      title: "Book on your terms",
      description: "Flexible scheduling that works around your busy professional life."
    },
    {
      title: "Grow with purpose",
      description: "Every session is designed to move you forward with concrete, actionable steps."
    }
  ]

  const breadcrumbItems = [
    { label: 'How It Works' }
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
                Tap Into The Journey That Shapes You
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We believe the shortest path between you and your biggest leaps is the knowledge, 
                wisdom and truth of someone who has done the work before you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" className="px-8">
                  Find Your Expert
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" className="px-8">
                  Become an Expert
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Why TapTime Exists */}
      <section className="py-20">
        <Container>
          <div className="text-center space-y-6">
            <div className="space-y-4">
              <Badge variant="secondary" size="lg" className="mb-4">
                Why TapTime Exists
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-4xl mx-auto">
                We believe the world's greatest untapped resource is human wisdom and it needs to be effortlessly available
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                From starting founders to financial coaches, business advisors to leadership mentors, 
                TapTime connects you with the people who've done the work, lived the journey, and want 
                to share their wisdom with you — so you don't have to waste yours.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* What You Gain */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center space-y-12">
            <div className="space-y-4">
              <Badge variant="secondary" size="lg" className="mb-4">
                What you gain
              </Badge>
              <h2 className="text-3xl font-bold text-gray-900">
                Four key benefits that transform how you grow
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center h-full bg-transparent border-0 shadow-none">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center mx-auto">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* How It Works Steps */}
      <section className="py-20">
        <Container>
          <div className="text-center space-y-12">
            <div className="space-y-4">
              <Badge variant="secondary" size="lg" className="mb-4">
                How it works
              </Badge>
              <h2 className="text-3xl font-bold text-gray-900">
                Four simple steps to expert guidance
              </h2>
              <p className="text-lg text-gray-600">
                From finding the right expert to implementing their advice
              </p>
            </div>
            
            <div className="space-y-16">
              {steps.map((step, index) => (
                <div key={index} className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <Card className="border-2 border-black">
                      <CardContent className="p-8">
                        <div className="space-y-6">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-lg font-semibold">
                              {step.number}
                            </div>
                            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                              {step.icon}
                            </div>
                          </div>
                          
                          <div className="space-y-4">
                            <h3 className="text-2xl font-semibold text-gray-900">
                              {step.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                          
                          <div className="space-y-2">
                            {step.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-green-600" />
                                <span className="text-sm text-gray-700">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} relative h-64 lg:h-80`}>
                    <img 
                      src="/api/placeholder/500/400" 
                      alt={step.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <Badge className="absolute top-4 left-4 bg-black text-white">
                      Step {step.number}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Born from the Power of Expertise */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center space-y-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Born from the Power of Expertise, Built for Those Who Value Time
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
              TapTime was born from a simple realization: the most valuable insights come from real experience, 
              and the most successful people understand that wisdom shared is wisdom multiplied. We built a 
              platform where knowledge meets opportunity, and where both sides win.
            </p>
            
            <div className="bg-white rounded-lg p-8 border-2 border-black max-w-2xl mx-auto">
              <blockquote className="text-lg italic text-gray-700">
                "It's a beautiful thing, how much an expert can change someone's life in just 15 minutes. 
                You get perspective you could never gain on your own."
              </blockquote>
              <cite className="block mt-4 text-sm font-medium text-gray-900">
                — Expert Review
              </cite>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <Container size="sm">
          <Card className="border-2 border-black">
            <CardContent className="p-12 text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-900">
                  Ready to tap into expert wisdom?
                </h2>
                <p className="text-lg text-gray-600">
                  Join thousands who've accelerated their success with TapTime
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="px-8">
                  Browse Experts
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" className="px-8">
                  Share Your Expertise
                </Button>
              </div>
            </CardContent>
          </Card>
        </Container>
      </section>
    </div>
  )
}

export default HowItWorksPage