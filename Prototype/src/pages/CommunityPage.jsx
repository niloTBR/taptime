import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Users, MessageCircle, Calendar, Award } from 'lucide-react'

const CommunityPage = () => {
  const communityFeatures = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Discussion Forums",
      description: "Connect with other users and experts in topic-specific discussions"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Community Events",
      description: "Join virtual events, workshops, and networking sessions"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Success Stories",
      description: "Share your achievements and learn from others' journeys"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Peer Groups",
      description: "Find and join groups with similar interests and goals"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="pt-24 pb-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">TapTime Community</h1>
          <p className="text-xl text-gray-600 mb-8">Connect, learn, and grow with like-minded professionals</p>
          <Button className="bg-foreground hover:bg-foreground">Join the Community</Button>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {communityFeatures.map((feature, index) => (
              <Card key={index} className="border border-gray-200">
                <CardHeader>
                  <div className="w-12 h-12 bg-foreground rounded-full flex items-center justify-center mb-4 text-foreground">
                    {feature.icon}
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default CommunityPage