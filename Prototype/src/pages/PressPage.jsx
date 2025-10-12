import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink, Download } from 'lucide-react'

const PressPage = () => {
  const pressReleases = [
    {
      title: "TapTime Raises $15M Series A to Expand Expert Marketplace",
      date: "January 15, 2025",
      summary: "Leading venture capital firms invest in TapTime's mission to democratize access to professional expertise."
    },
    {
      title: "TapTime Surpasses 10,000 Active Experts Milestone",
      date: "December 10, 2024",
      summary: "Platform growth demonstrates increasing demand for on-demand expert guidance across industries."
    },
    {
      title: "TapTime Launches AI-Powered Expert Matching",
      date: "November 5, 2024",
      summary: "New machine learning technology improves expert-client matching by 40% for better outcomes."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="pt-24 pb-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Press & Media</h1>
          <p className="text-xl text-gray-600 mb-8">Latest news and media resources about TapTime</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold mb-8">Press Releases</h2>
          <div className="space-y-6">
            {pressReleases.map((release, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{release.title}</CardTitle>
                  <CardDescription>{release.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{release.summary}</p>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Read Full Release
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold mb-4">Media Kit</h2>
          <p className="text-gray-600 mb-8">Download our media kit for logos, brand guidelines, and company information.</p>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Download className="w-4 h-4 mr-2" />
            Download Media Kit
          </Button>
        </div>
      </section>
    </div>
  )
}

export default PressPage