import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Shield, AlertTriangle, Users, CheckCircle } from 'lucide-react'

const SafetyPage = () => {
  const safetyFeatures = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Expert Verification",
      description: "All experts undergo thorough background checks and credential verification"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Secure Platform",
      description: "End-to-end encryption and secure payment processing protect your data"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Guidelines",
      description: "Clear guidelines ensure respectful and professional interactions"
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Report System",
      description: "Easy reporting tools to flag inappropriate behavior or content"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="pt-24 pb-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Safety & Security</h1>
          <p className="text-xl text-gray-600 mb-8">Your safety and security are our top priorities</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {safetyFeatures.map((feature, index) => (
              <Card key={index} className="border border-gray-200">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600">
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

export default SafetyPage