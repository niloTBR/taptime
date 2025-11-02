import Container from '@/components/layout/Container'
import Breadcrumb from '@/components/navigation/Breadcrumb'
import { Card, CardContent } from '@/components/ui/Card'
import StatisticBox from '@/components/ui/StatisticBox'
import { Users, Target, Heart, Lightbulb } from 'lucide-react'

const AboutPage = () => {
  const breadcrumbItems = [
    { label: 'About' }
  ]

  const values = [
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Expert-First',
      description: 'We believe in the power of real experience and proven expertise.'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Results-Driven',
      description: 'Every session is designed for immediate impact and actionable outcomes.'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Human-Centered',
      description: 'Technology serves connection, not the other way around.'
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Wisdom-Sharing',
      description: 'Knowledge multiplies when shared with purpose and passion.'
    }
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
                About TapTime
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're on a mission to make world-class expertise accessible to everyone, 
                one meaningful conversation at a time.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  TapTime was born from a simple realization: the most valuable insights come from real experience, 
                  and the most successful people understand that wisdom shared is wisdom multiplied.
                </p>
                <p>
                  We built a platform where knowledge meets opportunity, and where both sides win. 
                  Experts get to share their hard-earned wisdom while helping the next generation succeed, 
                  and seekers get access to insights that would otherwise take years to acquire.
                </p>
                <p>
                  Every 15-minute session is designed to compress months of trial and error into 
                  focused, actionable guidance that moves you forward with confidence.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <blockquote className="text-lg italic text-gray-700">
                "It's a beautiful thing, how much an expert can change someone's life in just 15 minutes. 
                You get perspective you could never gain on your own."
              </blockquote>
              <cite className="block mt-4 text-sm text-gray-600">— TapTime Expert Review</cite>
            </div>
          </div>
        </Container>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">
                Our Values
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                These principles guide everything we do and every decision we make.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center h-full">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center mx-auto">
                      {value.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Mission Statement */}
      <section className="py-20">
        <Container size="sm">
          <div className="text-center space-y-8 bg-gray-50 rounded-lg p-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Our Mission
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              To democratize access to world-class expertise, making it possible for anyone 
              to learn from the best, accelerate their growth, and achieve their biggest goals 
              through meaningful, focused conversations.
            </p>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default AboutPage