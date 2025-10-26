import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Mail, MapPin, Phone, Clock } from 'lucide-react'
import StandardPage from '@/components/layout/StandardPage'
import Section from '@/components/common/Section'
import PageContainer from '@/components/common/PageContainer'
import FormCard from '@/components/common/FormCard'
import SectionTitle from '@/components/common/SectionTitle'

const ContactPage = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: "hello@taptime.com",
      description: "Send us an email and we'll get back to you within 24 hours"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Monday to Friday, 9AM to 6PM PST"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      details: "San Francisco, CA",
      description: "Schedule a meeting at our headquarters"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Response Time",
      details: "Within 24 hours",
      description: "We aim to respond to all inquiries quickly"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Have questions about TapTime? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <SectionTitle 
                miniTitle="Send a Message"
                title="Let's start a conversation"
                description="Fill out the form below and we'll get back to you as soon as possible"
                className="text-start mb-8"
              />
              
              <Card className="border-2 border-foreground">
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
                      <Label htmlFor="subject">Subject</Label>
                      <Input 
                        id="subject" 
                        placeholder="What's this about?"
                        className="border-2 border-muted-foreground/20 focus:border-foreground"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us more about your inquiry..."
                        rows={6}
                        className="border-2 border-muted-foreground/20 focus:border-foreground resize-none"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full rounded-full"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <SectionTitle 
                miniTitle="Contact Information"
                title="Other ways to reach us"
                description="Choose the method that works best for you"
                className="text-start mb-8"
              />
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-0 shadow-none bg-muted/30">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center flex-shrink-0">
                          {info.icon}
                        </div>
                        <div className="space-y-1 flex-1">
                          <h3 className="font-semibold">{info.title}</h3>
                          <p className="text-lg font-medium">{info.details}</p>
                          <p className="text-sm text-muted-foreground">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Looking for quick answers?
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Check out our FAQ section for answers to common questions
          </p>
          <Button size="lg" variant="outline" className="rounded-full px-8 border-2 border-foreground">
            View FAQ
          </Button>
        </div>
      </section>
    </div>
  )
}

export default ContactPage