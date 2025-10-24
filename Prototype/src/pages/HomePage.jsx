import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import SearchBar from '@/components/common/SearchBar'
import ExpertCard from '@/components/common/ExpertCard'
import ScrollingTicker from '@/components/common/ScrollingTicker'
import SectionTitle from '@/components/common/SectionTitle'
import { ArrowRight, Users, Clock, Star, Globe, ChevronLeft, ChevronRight } from 'lucide-react'
import homepageData from '@/data/homepage.json'

const HomePage = () => {
  const { hero, valuePropositions, featuredSection, categories, ctaSection, stats, reviews } = homepageData
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0)
  
  const reviewsPerPage = 3
  const totalPages = Math.ceil(reviews.testimonials.length / reviewsPerPage)
  
  const nextReviews = () => {
    setCurrentReviewIndex((prev) => (prev + 1) % totalPages)
  }
  
  const prevReviews = () => {
    setCurrentReviewIndex((prev) => (prev - 1 + totalPages) % totalPages)
  }
  
  const getCurrentReviews = () => {
    const start = currentReviewIndex * reviewsPerPage
    return reviews.testimonials.slice(start, start + reviewsPerPage)
  }

  const handleSearch = (query) => {
    console.log('Searching for:', query)
    // Implementation for search functionality
  }

  const handleCategoryClick = (category) => {
    console.log('Category clicked:', category)
    // Implementation for category navigation
  }

  const handleExpertClick = (expert) => {
    console.log('Expert clicked:', expert)
    // Implementation for expert profile navigation
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center space-y-12">
            {/* Hero Content */}
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight">
                {hero.title}
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {hero.subtitle}
              </p>
            </div>

            {/* Massive Search Bar */}
            <div className="max-w-3xl mx-auto">
              <SearchBar
                placeholder="I'm looking for..."
                animatedPlaceholders={[
                  "I'm looking for startup advice...",
                  "I'm looking for marketing strategy...",
                  "I'm looking for design feedback...",
                  "I'm looking for tech mentorship...",
                  "I'm looking for fundraising help...",
                  "I'm looking for product guidance..."
                ]}
                onSearch={handleSearch}
                size="lg"
                className="w-full"
              />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-4">
              <Button size="lg" className="rounded-full px-8" asChild>
                <Link to="/browse">
                  {hero.primaryCta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 border-2 border-foreground" asChild>
                <Link to="/join-expert">
                  {hero.secondaryCta}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Browse Categories Ticker */}
      <section className="py-8 bg-white border-y">
        <ScrollingTicker 
          items={categories.map(cat => ({
            category: cat.name,
            count: cat.expertCount
          }))}
        />
      </section>

      {/* Featured Experts */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-12">
            <SectionTitle 
              miniTitle="Featured Experts"
              title={featuredSection.title}
              description={featuredSection.subtitle}
            />

            {/* Mobile Carousel */}
            <div className="block md:hidden">
              <div className="flex overflow-x-auto gap-6 pb-4 px-4 -mx-4 scrollbar-hide">
                {featuredSection.experts.map((expert, index) => (
                  <div key={expert.id} className="flex-shrink-0 w-80">
                    <ExpertCard
                      expert={expert}
                      showActions={true}
                      showCrown={index === 0}
                      showCharity={index === 1}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop Grid */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredSection.experts.map((expert, index) => (
                <ExpertCard
                  key={expert.id}
                  expert={expert}
                  showActions={true}
                  showCrown={index === 0}
                  showCharity={index === 1}
                />
              ))}
            </div>

            <div className="pt-8">
              <Button size="lg" variant="outline" className="rounded-full px-8 border-2 border-foreground" asChild>
                <Link to="/browse">
                  View All Experts
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <SectionTitle 
            miniTitle="How It Works"
            title="Three simple steps to expert advice"
            description="Get connected with the right expert in minutes"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valuePropositions.map((prop, index) => (
              <Card key={index} className="border-0 shadow-none bg-transparent">
                <CardContent className="pt-6 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center text-lg font-semibold mx-auto">
                    {prop.number}
                  </div>
                  <h3 className="text-lg font-semibold">
                    {prop.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {prop.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-between mb-12">
            <SectionTitle 
              miniTitle="What Our Users Say"
              title={reviews.title}
              description={reviews.subtitle}
            />
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={prevReviews}
                className="rounded-full p-2 border-2 border-foreground"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={nextReviews}
                className="rounded-full p-2 border-2 border-foreground"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {getCurrentReviews().map((testimonial) => (
              <Card key={testimonial.id} className="border-2 border-foreground">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-black text-black" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-3 pt-4">
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                      <span className="text-sm font-medium">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{testimonial.name}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.title}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentReviewIndex(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === currentReviewIndex ? 'bg-foreground' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6" />
              </div>
              <div className="text-2xl md:text-3xl font-semibold">
                {stats.experts}
              </div>
              <div className="text-sm text-muted-foreground">
                Verified Experts
              </div>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6" />
              </div>
              <div className="text-2xl md:text-3xl font-semibold">
                {stats.sessions}
              </div>
              <div className="text-sm text-muted-foreground">
                Sessions Completed
              </div>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center mx-auto mb-4">
                <Star className="h-6 w-6" />
              </div>
              <div className="text-2xl md:text-3xl font-semibold">
                {stats.satisfaction}
              </div>
              <div className="text-sm text-muted-foreground">
                Average Rating
              </div>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center mx-auto mb-4">
                <Globe className="h-6 w-6" />
              </div>
              <div className="text-2xl md:text-3xl font-semibold">
                {stats.countries}
              </div>
              <div className="text-sm text-muted-foreground">
                Countries Served
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-2 border-foreground">
            <CardContent className="p-8 md:p-12 text-center space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-semibold">
                  {ctaSection.title}
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  {ctaSection.subtitle}
                </p>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  {ctaSection.description}
                </p>
              </div>
              
              <div className="pt-4">
                <Button 
                  size="lg" 
                  className="rounded-full px-8"
                  asChild
                >
                  <Link to="/browse">
                    {ctaSection.buttonText}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

export default HomePage