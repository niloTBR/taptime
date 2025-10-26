import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { MessageSquare, Lightbulb, Bug, Heart } from 'lucide-react'
import SectionTitle from '@/components/common/SectionTitle'

const FeedbackPage = () => {
  const feedbackTypes = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "General Feedback",
      description: "Share your overall experience with TapTime"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Feature Request",
      description: "Suggest new features or improvements"
    },
    {
      icon: <Bug className="w-6 h-6" />,
      title: "Report Issue",
      description: "Let us know about bugs or technical problems"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Success Story",
      description: "Share how TapTime has helped you succeed"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            We Value Your Feedback
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Your feedback helps us improve TapTime for everyone. Share your thoughts, suggestions, or report issues - we're listening.
          </p>
        </div>
      </section>

      {/* Feedback Types */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <SectionTitle 
            miniTitle="How can we help?"
            title="Choose your feedback type"
            description="Select the category that best describes your feedback"
            className="mb-12"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {feedbackTypes.map((type, index) => (
              <Card key={index} className="border-2 border-muted-foreground/20 hover:border-foreground transition-colors cursor-pointer group">
                <CardContent className="pt-6 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-muted group-hover:bg-foreground group-hover:text-background transition-colors flex items-center justify-center mx-auto">
                    {type.icon}
                  </div>
                  <h3 className="font-semibold">{type.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {type.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feedback Form */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-3xl">
          <Card className="border-2 border-foreground">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Share Your Feedback</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input 
                      id="firstName" 
                      placeholder="Enter your first name"
                      className="border-2 border-muted-foreground/20 focus:border-foreground"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Enter your last name"
                      className="border-2 border-muted-foreground/20 focus:border-foreground"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Enter your email address"
                    className="border-2 border-muted-foreground/20 focus:border-foreground"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="feedbackType">Feedback Type</Label>
                  <Select>
                    <SelectTrigger className="border-2 border-muted-foreground/20 focus:border-foreground">
                      <SelectValue placeholder="Select feedback type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Feedback</SelectItem>
                      <SelectItem value="feature">Feature Request</SelectItem>
                      <SelectItem value="bug">Report Issue</SelectItem>
                      <SelectItem value="success">Success Story</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input 
                    id="subject" 
                    placeholder="Brief description of your feedback"
                    className="border-2 border-muted-foreground/20 focus:border-foreground"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Your Feedback</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us more about your experience, suggestion, or issue..."
                    rows={6}
                    className="border-2 border-muted-foreground/20 focus:border-foreground resize-none"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="rating">Overall Experience (Optional)</Label>
                  <Select>
                    <SelectTrigger className="border-2 border-muted-foreground/20 focus:border-foreground">
                      <SelectValue placeholder="Rate your experience" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5">⭐⭐⭐⭐⭐ Excellent</SelectItem>
                      <SelectItem value="4">⭐⭐⭐⭐ Good</SelectItem>
                      <SelectItem value="3">⭐⭐⭐ Average</SelectItem>
                      <SelectItem value="2">⭐⭐ Poor</SelectItem>
                      <SelectItem value="1">⭐ Very Poor</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full rounded-full"
                >
                  Submit Feedback
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Thank You Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="w-16 h-16 rounded-full bg-foreground text-background flex items-center justify-center mx-auto mb-6">
            <Heart className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-semibold mb-4">
            Thank you for helping us improve
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every piece of feedback helps us build a better platform. We review all submissions and use them to enhance the TapTime experience for our entire community.
          </p>
        </div>
      </section>
    </div>
  )
}

export default FeedbackPage