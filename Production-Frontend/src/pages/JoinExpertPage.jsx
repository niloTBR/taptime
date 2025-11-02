import { useState } from 'react'
import Container from '@/components/layout/Container'
import Breadcrumb from '@/components/navigation/Breadcrumb'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Textarea from '@/components/ui/Textarea'
import Badge from '@/components/ui/Badge'
import { CheckCircle, Star, Users, DollarSign } from 'lucide-react'

const JoinExpertPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    linkedin: '',
    title: '',
    company: '',
    experience: '',
    expertise: '',
    bio: '',
    rate: '',
    motivation: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Expert application submitted:', formData)
  }

  const breadcrumbItems = [
    { label: 'Join as Expert' }
  ]

  const benefits = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: 'Earn $200-$1000/hour',
      description: 'Set your own rates and earn premium compensation for your expertise'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Help Others Succeed',
      description: 'Share your knowledge and make a real impact on people\'s careers'
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: 'Build Your Brand',
      description: 'Establish yourself as a thought leader in your industry'
    }
  ]

  const requirements = [
    '5+ years of professional experience',
    'Proven track record of success',
    'Strong communication skills',
    'Passion for mentoring others',
    'Available for regular sessions'
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
                Become a TapTime Expert
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Share your expertise, help others succeed, and earn premium compensation 
                for the knowledge you've worked years to develop.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <Container>
          <div className="text-center space-y-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Why Join TapTime?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center h-full">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center mx-auto">
                      {benefit.icon}
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

      {/* Requirements */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">
                What We're Looking For
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We're selective about our experts to ensure the highest quality experience 
                for our clients. Here's what we look for:
              </p>
              <div className="space-y-3">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{requirement}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-lg p-8 border-2 border-black">
              <div className="text-center space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  Join 1,000+ Experts
                </h3>
                <p className="text-gray-600">
                  From Fortune 500 executives to successful entrepreneurs, 
                  our expert community is making an impact.
                </p>
                <div className="flex justify-center gap-4 text-sm">
                  <div className="text-center">
                    <div className="font-bold text-2xl">$750</div>
                    <div className="text-gray-600">Avg. hourly rate</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-2xl">4.9</div>
                    <div className="text-gray-600">Expert rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Application Form */}
      <section className="py-20">
        <Container size="sm">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">
                Apply to Become an Expert
              </h2>
              <p className="text-gray-600">
                Tell us about yourself and your expertise. We'll review your application 
                and get back to you within 48 hours.
              </p>
            </div>

            <Card>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          First Name *
                        </label>
                        <Input
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="Enter your first name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <Input
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Enter your last name"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <Input
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        LinkedIn Profile *
                      </label>
                      <Input
                        name="linkedin"
                        value={formData.linkedin}
                        onChange={handleChange}
                        placeholder="https://linkedin.com/in/yourprofile"
                        required
                      />
                    </div>
                  </div>

                  {/* Professional Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Professional Background</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Current Title *
                        </label>
                        <Input
                          name="title"
                          value={formData.title}
                          onChange={handleChange}
                          placeholder="e.g. Senior Product Manager"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Company *
                        </label>
                        <Input
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="e.g. Google, Apple, Startup Name"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Years of Experience *
                      </label>
                      <Input
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        placeholder="e.g. 8 years in product management"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Areas of Expertise *
                      </label>
                      <Input
                        name="expertise"
                        value={formData.expertise}
                        onChange={handleChange}
                        placeholder="e.g. Product Strategy, Team Leadership, Fundraising"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Professional Bio *
                      </label>
                      <Textarea
                        name="bio"
                        value={formData.bio}
                        onChange={handleChange}
                        placeholder="Tell us about your professional journey, key achievements, and what makes you unique..."
                        rows={4}
                        required
                      />
                    </div>
                  </div>

                  {/* Expert Details */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Expert Details</h3>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Desired Hourly Rate *
                      </label>
                      <Input
                        name="rate"
                        value={formData.rate}
                        onChange={handleChange}
                        placeholder="e.g. $500/hour"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Why do you want to become a TapTime expert? *
                      </label>
                      <Textarea
                        name="motivation"
                        value={formData.motivation}
                        onChange={handleChange}
                        placeholder="Share your motivation for joining our expert community..."
                        rows={3}
                        required
                      />
                    </div>
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Submit Application
                  </Button>

                  <p className="text-sm text-gray-600 text-center">
                    We'll review your application and get back to you within 48 hours.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default JoinExpertPage