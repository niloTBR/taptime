import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { Users, Target, Award, Heart, Clock, Star, Zap, ArrowRight, CheckCircle } from 'lucide-react'
import StandardPage from '@/components/layout/StandardPage'
import Section from '@/components/common/Section'
import PageContainer from '@/components/common/PageContainer'
import SectionTitle from '@/components/common/SectionTitle'

// About page component
const AboutPage = () => {
  const stats = [
    { number: "1,000+", label: "Expert Professionals", icon: <Users className="w-5 h-5" /> },
    { number: "10,000+", label: "Successful Sessions", icon: <CheckCircle className="w-5 h-5" /> },
    { number: "25+", label: "Industry Categories", icon: <Target className="w-5 h-5" /> },
    { number: "4.9/5", label: "Average Rating", icon: <Star className="w-5 h-5" /> }
  ]

  const problems = [
    {
      title: "Expert knowledge is locked away",
      description: "Industry professionals have incredible insights, but there's no easy way to access them when you need guidance."
    },
    {
      title: "Traditional mentorship is broken",
      description: "Finding the right mentor is nearly impossible, takes months, and often doesn't match your specific needs."
    },
    {
      title: "Learning is inefficient and expensive",
      description: "Courses and workshops are generic, time-consuming, and don't address your unique challenges."
    }
  ]

  const solutions = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Instant Expert Access",
      description: "Connect with verified industry professionals in minutes, not months. Get personalized advice exactly when you need it."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Perfect Matching",
      description: "Our AI matches you with experts who've solved your exact challenges, ensuring relevant and actionable guidance."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "15-Minute Sessions",
      description: "Get focused, high-impact advice in bite-sized sessions that fit your schedule and deliver immediate value."
    }
  ]

  const values = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Quality First",
      description: "Every expert is rigorously vetted. We maintain the highest standards to ensure you get exceptional guidance."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Human Connection",
      description: "Real people, real experience, real results. We believe in the power of human-to-human knowledge transfer."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Driven",
      description: "We're building a global community where expertise flows freely and everyone can learn from the best."
    }
  ]

  const testimonials = [
    {
      quote: "One 15-minute session gave me the exact framework I needed. Landed my dream PM role at Stripe within 2 months.",
      author: "Alex Chen",
      role: "Product Manager at Stripe"
    },
    {
      quote: "My expert walked me through their actual pitch deck. We closed our $2M Series A using their exact strategy.",
      author: "Sarah Williams", 
      role: "Startup Founder"
    },
    {
      quote: "They showed me what top-tier portfolios really look like. Got callbacks from Google, Apple, and Figma in one week.",
      author: "Michael Rodriguez",
      role: "UX Designer"
    }
  ]

  const breadcrumbs = [
    { label: 'About', href: null }
  ]

  const headerActions = (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button size="lg" className="rounded-full px-8" asChild>
        <Link to="/browse">
          Find Your Expert
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
      <Button size="lg" variant="outline" className="rounded-full px-8 border-2 border-foreground" asChild>
        <Link to="/join-expert">
          Become an Expert
        </Link>
      </Button>
    </div>
  )

  return (
    <StandardPage
      title="Expert guidance, when you need it most"
      description="Connect with industry professionals who've already solved your exact challenges. Get personalized advice in focused 15-minute sessions that deliver real results."
      breadcrumbs={breadcrumbs}
      actions={headerActions}
      headerSize="large"
    >
      {/* Quick Stats */}
      <Section background="default" spacing="default">
        <PageContainer>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-semibold">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </PageContainer>
      </Section>

      {/* The Problem We Solve */}
      <Section background="muted" spacing="default">
        <PageContainer size="wide">
          <SectionTitle 
            miniTitle="The Challenge"
            title="Traditional mentorship is broken"
            description="We identified three major problems that keep professionals from getting the guidance they need"
            className="mb-16"
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <Card key={index} className="border-2 border-foreground">
                <CardContent className="p-8 space-y-4">
                  <div className="w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center text-lg font-semibold">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {problem.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </PageContainer>
      </Section>

      {/* Our Solution */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <SectionTitle 
            miniTitle="Our Solution"
            title="We're changing how expertise flows"
            description="TapTime makes expert knowledge accessible, affordable, and immediate"
            className="mb-16"
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="border-0 shadow-none bg-transparent">
                <CardContent className="pt-6 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-foreground text-background flex items-center justify-center mx-auto">
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-semibold">
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {solution.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Proof & Impact - Testimonials */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <SectionTitle 
            miniTitle="Real Results"
            title="Success stories from our community"
            description="See how TapTime has helped professionals achieve breakthrough moments"
            className="mb-16"
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-2 border-foreground">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-foreground text-foreground" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <SectionTitle 
            miniTitle="Our Story"
            title="Building the future of professional growth"
            description="How we're democratizing access to expert knowledge"
            className="mb-12"
          />
          
          <div className="prose prose-lg mx-auto text-muted-foreground space-y-6">
            <p className="leading-relaxed">
              TapTime was born from a simple observation: while the world is full of incredibly talented professionals, most people struggle to access their expertise when they need it most. Traditional mentorship is expensive, time-consuming, and often mismatched.
            </p>
            <p className="leading-relaxed">
              Founded in 2024, we set out to bridge this gap by creating a platform where expertise meets opportunity. Our team came together with a shared vision of making professional guidance accessible to everyone, everywhere.
            </p>
            <p className="leading-relaxed">
              Today, we're building a global community where knowledge flows freely, connecting ambitious professionals with industry leaders who've already solved their exact challenges. Every session is designed for immediate impact and real results.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <SectionTitle 
            miniTitle="Our Values"
            title="What drives us every day"
            description="The principles that guide how we build and grow TapTime"
            className="mb-16"
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-none bg-transparent">
                <CardContent className="pt-6 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-foreground text-background flex items-center justify-center mx-auto">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Community - CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-2 border-foreground">
            <CardContent className="p-12 text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-semibold">
                  Join the TapTime Community
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Whether you're seeking expert guidance or ready to share your knowledge, there's a place for you in our growing community.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" className="rounded-full px-8" asChild>
                  <Link to="/browse">
                    Find Your Expert
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 border-2 border-foreground" asChild>
                  <Link to="/join-expert">
                    Become an Expert
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </StandardPage>
  )
}

export default AboutPage