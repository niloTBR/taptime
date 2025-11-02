import { useState } from 'react'
import { ArrowRight, Users, Clock, Star, Globe } from 'lucide-react'
import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import SearchBar from '@/components/ui/SearchBar'
import ExpertCard from '@/components/cards/ExpertCard'
import ReviewCard from '@/components/feedback/ReviewCard'
import StatisticBox from '@/components/ui/StatisticBox'
import Ticker from '@/components/ui/Ticker'
import expertsData from '@/data/experts.json'
import reviewsData from '@/data/reviews.json'

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (query) => {
    setSearchQuery(query)
    console.log('Searching for:', query)
    // Navigate to browse page with search query
    window.location.href = `/browse?q=${encodeURIComponent(query)}`
  }

  const categories = [
    { category: 'Business & Startups', count: 234 },
    { category: 'Technology & Innovation', count: 187 },
    { category: 'Design & Creativity', count: 156 },
    { category: 'Marketing & Growth', count: 203 },
    { category: 'Finance & Economics', count: 98 },
    { category: 'Health & Wellness', count: 67 }
  ]

  const stats = [
    {
      icon: <Users className="w-6 h-6" />,
      value: '1,000+',
      label: 'Verified Experts',
      description: 'Industry professionals'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      value: '10,000+',
      label: 'Sessions Completed',
      description: 'Successful consultations'
    },
    {
      icon: <Star className="w-6 h-6" />,
      value: '4.9/5',
      label: 'Average Rating',
      description: 'Client satisfaction'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      value: '25+',
      label: 'Countries Served',
      description: 'Global reach'
    }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <Container>
          <div className="text-center space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                Your time. Expertly matched
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get personalized guidance from world-class experts who've built the companies and careers you admire. Book 15-minute sessions that change everything.
              </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <SearchBar
                placeholder="I'm looking for..."
                animatedPlaceholders={[
                  "I'm looking for startup advice...",
                  "I'm looking for marketing strategy...",
                  "I'm looking for design feedback...",
                  "I'm looking for tech mentorship..."
                ]}
                onSearch={handleSearch}
                size="lg"
              />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8">
                Find Your Expert
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                Become an Expert
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Categories Ticker */}
      <section className="border-y border-gray-200">
        <Ticker items={categories} speed={30} />
      </section>

      {/* Featured Experts */}
      <section className="py-20">
        <Container>
          <div className="text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Learn From The Best
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Get personalized advice and strategic insights from successful founders, seasoned executives, and proven innovators who've already built the companies, products, and careers you're dreaming of achieving.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {expertsData.featured.map((expert, index) => (
                <ExpertCard
                  key={expert.id}
                  expert={expert}
                  showActions={true}
                  showCrown={index === 0}
                />
              ))}
            </div>

            <Button variant="outline" size="lg" className="px-8">
              View All Experts
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatisticBox
                key={index}
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
                description={stat.description}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Reviews Section */}
      <section className="py-20">
        <Container>
          <div className="text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Success Stories
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Real breakthroughs from real people who took action with expert guidance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {reviewsData.testimonials.map((testimonial) => (
                <ReviewCard key={testimonial.id} review={testimonial} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <Container size="sm">
          <div className="text-center space-y-8 bg-white border-2 border-black rounded-lg p-12">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Your Next Breakthrough Awaits
              </h2>
              <p className="text-lg text-gray-600">
                Join thousands of ambitious professionals who've accelerated their success with expert guidance.
              </p>
            </div>
            
            <Button size="lg" className="px-8">
              Find Your Expert Now
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default HomePage