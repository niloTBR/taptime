import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import SectionTitle from '@/components/common/SectionTitle'
import { 
  DollarSign, 
  Clock, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Star,
  Quote
} from 'lucide-react'
import joinExpertData from '@/data/join-expert.json'

const JoinExpertPage = () => {
  const { 
    hero, 
    benefits, 
    process, 
    requirements, 
    testimonials, 
    categories, 
    faq, 
    stats 
  } = joinExpertData

  const getIcon = (iconName) => {
    const icons = {
      DollarSign,
      Clock,
      Users,
      TrendingUp
    }
    const IconComponent = icons[iconName] || DollarSign
    return <IconComponent className="w-8 h-8" />
  }

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .substring(0, 2)
      .toUpperCase()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center space-y-8">
            <SectionTitle 
              title={hero.title}
              description={hero.subtitle}
              className="mb-8"
            />
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-full px-8">
                {hero.ctaButton}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 border-2 border-foreground">
                {hero.secondaryButton}
              </Button>
            </div>

            {/* Hero Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-semibold">{stats.experts}</div>
                <div className="text-sm text-muted-foreground">Active Experts</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-semibold">{stats.avgEarning}</div>
                <div className="text-sm text-muted-foreground">Average Hourly Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-semibold">{stats.satisfaction}</div>
                <div className="text-sm text-muted-foreground">Expert Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-semibold">{stats.repeatBookings}</div>
                <div className="text-sm text-muted-foreground">Repeat Bookings</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <SectionTitle 
            miniTitle="Why Join TapTime"
            title="Turn Your Expertise Into Impact"
            description="Join the premier platform where knowledge meets opportunity"
            className="mb-12"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-2 border-foreground h-full">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center mx-auto">
                    {getIcon(benefit.icon)}
                  </div>
                  <h3 className="font-semibold">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <SectionTitle 
            miniTitle="How It Works"
            title="Three Simple Steps to Get Started"
            description="From application to earning, we make it easy to share your expertise"
            className="mb-12"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <Card key={index} className="border-0 shadow-none bg-transparent">
                <CardContent className="pt-6 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center text-lg font-semibold mx-auto">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Testimonials */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <SectionTitle 
            miniTitle="Success Stories"
            title="What Our Experts Say"
            description="Real earnings and impact from professionals like you"
            className="mb-12"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border-2 border-foreground">
                <CardContent className="p-6 space-y-4">
                  <Quote className="w-8 h-8 text-muted-foreground" />
                  <p className="text-muted-foreground italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-3 pt-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>{getInitials(testimonial.name)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="font-semibold text-sm">{testimonial.name}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.title}</div>
                      <div className="flex items-center gap-3 mt-2">
                        <Badge variant="secondary" className="bg-gray-100 text-xs">
                          {testimonial.earnings}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {testimonial.sessions} sessions
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <SectionTitle 
            miniTitle="Expertise Areas"
            title="What Kind of Expert Are You?"
            description="We're looking for experts across all major industries and functions"
            className="mb-12"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="border-2 border-foreground">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-semibold">{category.name}</h3>
                    <Badge 
                      variant={category.demand === 'Very High' ? 'default' : 'secondary'}
                      className={category.demand === 'Very High' ? '' : 'bg-gray-100'}
                    >
                      {category.demand} Demand
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    {category.description}
                  </p>
                  <div className="text-sm font-medium text-green-600">
                    {category.averageRate}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <SectionTitle 
            title={requirements.title}
            description={requirements.subtitle}
            className="mb-12"
          />
          
          <Card className="border-2 border-foreground">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {requirements.criteria.map((criterion, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span className="text-sm">{criterion}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <SectionTitle 
            miniTitle="FAQ"
            title="Frequently Asked Questions"
            description="Everything you need to know about becoming a TapTime expert"
            className="mb-12"
          />
          
          <div className="space-y-4">
            {faq.map((item, index) => (
              <Card key={index} className="border-2 border-foreground">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">{item.question}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-2 border-foreground">
            <CardContent className="p-12 text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-semibold">
                Ready to Start Earning?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join the leading platform for expert knowledge sharing and start monetizing your expertise today.
              </p>
              <Button size="lg" className="rounded-full px-8">
                Apply to Become an Expert
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

export default JoinExpertPage