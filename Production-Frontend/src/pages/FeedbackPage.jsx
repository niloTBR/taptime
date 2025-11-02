import { useState } from 'react'
import { MessageSquare, Lightbulb, Bug, Heart } from 'lucide-react'
import Container from '@/components/layout/Container'
import Breadcrumb from '@/components/navigation/Breadcrumb'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Textarea from '@/components/ui/Textarea'

const FeedbackPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    feedbackType: '',
    subject: '',
    message: '',
    rating: ''
  })
  const [selectedType, setSelectedType] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Feedback submitted:', { ...formData, feedbackType: selectedType })
  }

  const feedbackTypes = [
    {
      id: 'general',
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'General Feedback',
      description: 'Share your overall experience with TapTime'
    },
    {
      id: 'feature',
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Feature Request',
      description: 'Suggest new features or improvements'
    },
    {
      id: 'bug',
      icon: <Bug className="w-6 h-6" />,
      title: 'Report Issue',
      description: 'Let us know about bugs or technical problems'
    },
    {
      id: 'success',
      icon: <Heart className="w-6 h-6" />,
      title: 'Success Story',
      description: 'Share how TapTime has helped you succeed'
    }
  ]

  const breadcrumbItems = [
    { label: 'Feedback' }
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
                We Value Your Feedback
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Your feedback helps us improve TapTime for everyone. Share your thoughts, 
                suggestions, or report issues - we're listening.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Feedback Types */}
      <section className="py-12">
        <Container>
          <div className="text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                How can we help?
              </h2>
              <p className="text-gray-600">
                Choose the category that best describes your feedback
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {feedbackTypes.map((type) => (
                <Card 
                  key={type.id}
                  className={`cursor-pointer transition-all hover:shadow-lg ${
                    selectedType === type.id 
                      ? 'ring-2 ring-black bg-gray-50' 
                      : 'hover:border-gray-300'
                  }`}
                  onClick={() => setSelectedType(type.id)}
                >
                  <CardContent className="p-6 text-center space-y-4">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto transition-colors ${
                      selectedType === type.id 
                        ? 'bg-black text-white' 
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {type.icon}
                    </div>
                    <h3 className="font-semibold text-gray-900">{type.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {type.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Feedback Form */}
      <section className="pb-20">
        <Container size="sm">
          <Card className="border-2 border-black">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Share Your Feedback</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Feedback Type
                  </label>
                  <select 
                    className="w-full px-3 py-2 border-2 border-gray-300 rounded-md focus:border-black focus:outline-none"
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                  >
                    <option value="">Select feedback type</option>
                    <option value="general">General Feedback</option>
                    <option value="feature">Feature Request</option>
                    <option value="bug">Report Issue</option>
                    <option value="success">Success Story</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Brief description of your feedback"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Feedback
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your experience, suggestion, or issue..."
                    rows={6}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Overall Experience (Optional)
                  </label>
                  <select 
                    className="w-full px-3 py-2 border-2 border-gray-300 rounded-md focus:border-black focus:outline-none"
                    value={formData.rating}
                    onChange={(e) => setFormData(prev => ({ ...prev, rating: e.target.value }))}
                  >
                    <option value="">Rate your experience</option>
                    <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
                    <option value="4">⭐⭐⭐⭐ Good</option>
                    <option value="3">⭐⭐⭐ Average</option>
                    <option value="2">⭐⭐ Poor</option>
                    <option value="1">⭐ Very Poor</option>
                  </select>
                </div>
                
                <Button type="submit" size="lg" className="w-full">
                  Submit Feedback
                </Button>
              </form>
            </CardContent>
          </Card>
        </Container>
      </section>

      {/* Thank You Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center mx-auto">
              <Heart className="w-8 h-8" />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">
                Thank you for helping us improve
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Every piece of feedback helps us build a better platform. We review all submissions 
                and use them to enhance the TapTime experience for our entire community.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default FeedbackPage