import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Link } from 'react-router-dom'
import { ChevronDown, Search, MessageCircle } from 'lucide-react'
import SectionTitle from '@/components/common/SectionTitle'
import { useState } from 'react'

const FAQPage = () => {
  const [openItems, setOpenItems] = useState({})
  const [selectedCategory, setSelectedCategory] = useState('All')

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

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Find answers to common questions about TapTime, our experts, and how our platform works.
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <section className="px-4 pb-8">
        <div className="container mx-auto max-w-2xl">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <input
              type="text"
              placeholder="Search for answers..."
              className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-muted-foreground/20 focus:border-foreground focus:outline-none text-lg"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="px-4 pb-8">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="rounded-full border-2 border-foreground"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Items */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <Card key={index} className="border-2 border-foreground">
                <CardHeader 
                  className="cursor-pointer"
                  onClick={() => toggleItem(index)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Badge variant="secondary" className="text-xs">
                        {faq.category}
                      </Badge>
                      <CardTitle className="text-lg font-semibold">
                        {faq.question}
                      </CardTitle>
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
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-foreground text-background flex items-center justify-center">
              <MessageCircle className="w-8 h-8" />
            </div>
          </div>
          <h2 className="text-3xl font-semibold mb-4">
            Still have questions?
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <div className="flex justify-center">
            <Button size="lg" className="rounded-full px-8" asChild>
              <Link to="/contact">
                Contact Support
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FAQPage