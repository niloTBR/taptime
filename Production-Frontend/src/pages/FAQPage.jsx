import { useState } from 'react'
import { ChevronDown, Search, MessageCircle } from 'lucide-react'
import Container from '@/components/layout/Container'
import Breadcrumb from '@/components/navigation/Breadcrumb'
import { Card, CardHeader, CardContent } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'

const FAQPage = () => {
  const [openItems, setOpenItems] = useState({})
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const categories = ['All', 'Getting Started', 'Experts', 'Sessions', 'Billing', 'Platform']

  const faqs = [
    {
      category: 'Getting Started',
      question: 'How does TapTime work?',
      answer: 'TapTime connects you with industry experts for focused 15-minute sessions. Simply browse our expert directory, book a session that fits your schedule, and get personalized advice from professionals who\'ve already solved your challenges.'
    },
    {
      category: 'Getting Started', 
      question: 'How do I find the right expert for my needs?',
      answer: 'Use our search and filter system to find experts by industry, expertise, experience level, and availability. Each expert profile includes their background, specialties, reviews, and session focus areas to help you make the best choice.'
    },
    {
      category: 'Experts',
      question: 'How are experts vetted?',
      answer: 'All experts go through a rigorous verification process including background checks, credential verification, and interview assessments. We ensure every expert has proven industry experience and the ability to provide valuable guidance.'
    },
    {
      category: 'Experts',
      question: 'Can I become an expert on TapTime?',
      answer: 'Yes! If you have professional expertise and want to share your knowledge, you can apply to become an expert. We look for professionals with proven track records, strong communication skills, and passion for mentoring others.'
    },
    {
      category: 'Sessions',
      question: 'How long are sessions?',
      answer: 'Standard sessions are 15 minutes, designed to be focused and actionable. Some experts also offer 30-minute deep-dive sessions for more complex topics. The session length is clearly indicated when booking.'
    },
    {
      category: 'Sessions',
      question: 'What if I need to reschedule or cancel?',
      answer: 'You can reschedule or cancel sessions up to 24 hours before the scheduled time without penalty. Cancellations within 24 hours may incur a fee, but we understand emergencies happen and handle each case individually.'
    },
    {
      category: 'Sessions',
      question: 'What happens during a session?',
      answer: 'Sessions are conducted via video call through our platform. You\'ll have a focused conversation with your expert about your specific challenges or questions. Most experts provide actionable advice and may share resources or follow-up materials.'
    },
    {
      category: 'Billing',
      question: 'How much do sessions cost?',
      answer: 'Session prices vary by expert based on their experience and demand. Prices typically range from $50-$500 for a 15-minute session. Each expert sets their own rates, which are clearly displayed on their profile.'
    },
    {
      category: 'Billing',
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely, and you\'ll receive a receipt after each transaction.'
    },
    {
      category: 'Platform',
      question: 'Is my personal information secure?',
      answer: 'Yes, we take privacy and security seriously. All personal information is encrypted and stored securely. We never share your information with third parties without your explicit consent. Sessions are private and confidential.'
    },
    {
      category: 'Platform',
      question: 'Do you offer refunds?',
      answer: 'We offer refunds in cases where technical issues prevent a session from occurring or if an expert fails to show up. If you\'re unsatisfied with a session\'s quality, please contact our support team within 48 hours and we\'ll work to resolve the issue.'
    },
    {
      category: 'Platform',
      question: 'Can I record sessions?',
      answer: 'Session recording policies vary by expert. Some allow recording with permission, while others prefer not to be recorded. This information is available on each expert\'s profile, and you can discuss recording preferences when booking.'
    }
  ]

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  const filteredFAQs = selectedCategory === 'All' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory)

  const searchFilteredFAQs = searchQuery
    ? filteredFAQs.filter(faq => 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredFAQs

  const breadcrumbItems = [
    { label: 'FAQ' }
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
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Find answers to common questions about TapTime, our experts, and how our platform works.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Search Bar */}
      <section className="py-8">
        <Container size="sm">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-gray-300 focus:border-black focus:outline-none text-lg"
            />
          </div>
        </Container>
      </section>

      {/* Categories */}
      <section className="pb-8">
        <Container>
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
        </Container>
      </section>

      {/* FAQ Items */}
      <section className="pb-20">
        <Container>
          <div className="space-y-4">
            {searchFilteredFAQs.map((faq, index) => (
              <Card key={index} className="border-2 border-gray-200">
                <CardHeader 
                  className="cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => toggleItem(index)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Badge variant="secondary" size="xs">
                        {faq.category}
                      </Badge>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {faq.question}
                      </h3>
                    </div>
                    <ChevronDown 
                      className={`w-5 h-5 transition-transform ${
                        openItems[index] ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </CardHeader>
                {openItems[index] && (
                  <CardContent className="pt-0">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>

          {/* No Results */}
          {searchFilteredFAQs.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-500 mb-4">
                No FAQs found matching your search
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
        </Container>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center space-y-8">
            <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center mx-auto">
              <MessageCircle className="w-8 h-8" />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">
                Still have questions?
              </h2>
              <p className="text-lg text-gray-600">
                Can't find what you're looking for? Our support team is here to help.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Contact Support
              </Button>
              <Button variant="outline" size="lg">
                Schedule a Demo
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default FAQPage