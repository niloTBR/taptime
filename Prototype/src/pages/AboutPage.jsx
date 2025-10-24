import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { Users, Target, Award, Heart } from 'lucide-react'

// About page component
const AboutPage = () => {
  const values = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Community",
      description: "We connect you with verified industry professionals who are passionate about sharing their knowledge."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Personalized Matching",
      description: "Our AI-powered matching system ensures you find the perfect expert for your specific needs and goals."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Quality Assurance",
      description: "Every expert goes through our rigorous vetting process to ensure you receive the highest quality guidance."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Growth Focused",
      description: "We're committed to helping you achieve your personal and professional growth objectives."
    }
  ]

  const stats = [
    { number: "10,000+", label: "Active Experts" },
    { number: "50,000+", label: "Successful Sessions" },
    { number: "25+", label: "Industry Categories" },
    { number: "98%", label: "Satisfaction Rate" }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About TapTime
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            We're revolutionizing how people connect with industry experts, making professional mentorship and knowledge sharing accessible to everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="rounded-full px-8">
              <Link to="/browse">Find an Expert</Link>
            </Button>
            <Button variant="outline" asChild className="rounded-full px-8 border-2 border-foreground">
              <Link to="/join-expert">Become an Expert</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At TapTime, we believe everyone deserves access to expert guidance. Whether you're starting a new career, building a business, or pursuing personal growth, our platform connects you with verified professionals who can help you succeed.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We're building a future where knowledge flows freely, barriers to mentorship are removed, and expertise is accessible to all who seek it.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do at TapTime
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-sm">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {value.icon}
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="mb-6">
                TapTime was born from a simple observation: while the world is full of incredibly talented and knowledgeable professionals, most people struggle to access their expertise when they need it most.
              </p>
              <p className="mb-6">
                Founded in 2024, we set out to bridge this gap by creating a platform where expertise meets opportunity. Our team of technologists, designers, and industry experts came together with a shared vision of democratizing access to professional mentorship.
              </p>
              <p>
                Today, TapTime serves thousands of professionals across dozens of industries, facilitating meaningful connections that drive real results. We're just getting started on our mission to make expert guidance accessible to everyone, everywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-foreground">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold text-background mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-background/80 mb-8 text-lg">
            Join thousands of professionals who are already growing with TapTime
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" asChild className="bg-background text-foreground hover:bg-gray-100 rounded-full px-8">
              <Link to="/browse">Browse Experts</Link>
            </Button>
            <Button variant="outline" asChild className="border-background text-background hover:bg-background hover:text-foreground rounded-full px-8">
              <Link to="/join-expert">Join as Expert</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage