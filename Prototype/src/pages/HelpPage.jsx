import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Search, MessageCircle, Mail, Phone } from 'lucide-react'

const HelpPage = () => {
  const faqs = [
    {
      question: "How do I book a session with an expert?",
      answer: "Browse our expert directory, review profiles, and click 'Book Session' on any expert's page. You can choose from available time slots and session types."
    },
    {
      question: "What if I need to cancel or reschedule?",
      answer: "You can cancel or reschedule up to 24 hours before your session through your dashboard. Cancellations within 24 hours may be subject to fees."
    },
    {
      question: "How are experts vetted?",
      answer: "All experts go through a rigorous verification process including background checks, portfolio reviews, and reference verification."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers. Payments are processed securely through our platform."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="pt-24 pb-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Help Center</h1>
          <p className="text-xl text-gray-600 mb-8">Find answers to common questions and get support</p>
          
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search for help..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{faq.answer}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-center mb-8">Need More Help?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardHeader>
                <MessageCircle className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                <CardTitle>Live Chat</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">Chat with our support team</CardDescription>
                <Button className="w-full">Start Chat</Button>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Mail className="w-8 h-8 mx-auto mb-2 text-green-600" />
                <CardTitle>Email Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">Get help via email</CardDescription>
                <Button variant="outline" className="w-full">Send Email</Button>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Phone className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                <CardTitle>Phone Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">Call our support line</CardDescription>
                <Button variant="outline" className="w-full">Call Now</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HelpPage