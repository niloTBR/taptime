import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { MapPin, Clock, Users, Briefcase } from 'lucide-react'

const CareersPage = () => {
  const openPositions = [
    {
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      description: "Join our engineering team to build the next generation of TapTime's user experience. You'll work on React, TypeScript, and modern frontend technologies."
    },
    {
      title: "Product Marketing Manager",
      department: "Marketing",
      location: "New York, NY / Remote",
      type: "Full-time",
      description: "Drive product marketing strategies and go-to-market initiatives. Work closely with product and sales teams to accelerate growth."
    },
    {
      title: "Expert Success Manager",
      department: "Customer Success",
      location: "Austin, TX / Remote",
      type: "Full-time",
      description: "Help our expert community thrive by providing support, training, and building relationships that drive platform engagement."
    },
    {
      title: "Data Scientist",
      department: "Data & Analytics",
      location: "Seattle, WA / Remote",
      type: "Full-time",
      description: "Build machine learning models to improve our matching algorithms and drive data-driven insights across the platform."
    },
    {
      title: "Sales Development Representative",
      department: "Sales",
      location: "Remote",
      type: "Full-time",
      description: "Generate new business opportunities and help expand our expert marketplace. Experience in B2B sales preferred."
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "Los Angeles, CA / Remote",
      type: "Full-time",
      description: "Design intuitive and beautiful user experiences that make expert connections seamless and engaging."
    }
  ]

  const benefits = [
    "Competitive salary and equity package",
    "Comprehensive health, dental, and vision insurance",
    "Flexible PTO and sabbatical opportunities",
    "Remote-first culture with optional office access",
    "Professional development budget ($2,000/year)",
    "Top-tier equipment and home office setup",
    "Quarterly team retreats and company events",
    "401(k) with company matching"
  ]

  const values = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaborative Culture",
      description: "We believe great work happens when talented people work together toward shared goals."
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Growth Mindset",
      description: "We invest in your professional development and encourage continuous learning."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Work-Life Balance",
      description: "We respect your time and believe productivity comes from well-rested, happy employees."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Help us build the future of professional mentorship and expert connections. We're looking for passionate individuals who want to make a meaningful impact.
          </p>
          <Button className="bg-purple-600 hover:bg-purple-700">
            View Open Positions
          </Button>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why TapTime?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join a mission-driven company that's transforming how people access expertise
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-sm text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 text-purple-600">
                    {value.icon}
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits & Perks</h2>
              <p className="text-gray-600 mb-8">
                We believe in taking care of our team members so they can do their best work and live fulfilling lives.
              </p>
              <div className="grid grid-cols-1 gap-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 shrink-0"></div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Remote-First Culture</h3>
              <p className="text-gray-600 mb-6">
                Work from anywhere while staying connected with your team. We have offices in major cities, but most of our team works remotely.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-purple-600" />
                  <span className="text-sm text-gray-700">Offices in SF, NYC, Austin</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-purple-600" />
                  <span className="text-sm text-gray-700">Flexible working hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-purple-600" />
                  <span className="text-sm text-gray-700">Quarterly team meetups</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-gray-600">
              Explore opportunities to make an impact at TapTime
            </p>
          </div>
          <div className="grid gap-6">
            {openPositions.map((position, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl text-gray-900">{position.title}</CardTitle>
                      <div className="flex items-center gap-4 mt-2">
                        <Badge variant="secondary">{position.department}</Badge>
                        <div className="flex items-center gap-1 text-sm text-gray-600">
                          <MapPin className="w-4 h-4" />
                          {position.location}
                        </div>
                        <div className="flex items-center gap-1 text-sm text-gray-600">
                          <Clock className="w-4 h-4" />
                          {position.type}
                        </div>
                      </div>
                    </div>
                    <Button className="bg-purple-600 hover:bg-purple-700 shrink-0">
                      Apply Now
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {position.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-600">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Don't See Your Role?
          </h2>
          <p className="text-purple-100 mb-8 text-lg">
            We're always looking for exceptional talent. Send us your resume and tell us how you'd like to contribute.
          </p>
          <Button variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  )
}

export default CareersPage