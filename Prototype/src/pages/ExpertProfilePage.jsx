import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import { 
  Star, 
  Clock, 
  MapPin, 
  Globe, 
  Calendar,
  Heart,
  Share,
  ArrowRight,
  CheckCircle,
  MessageCircle,
  Users
} from 'lucide-react'
import expertProfileData from '@/data/expert-profile.json'

const ExpertProfilePage = () => {
  const { expert, about, sessions, reviews, calendar } = expertProfileData
  const [selectedTopic, setSelectedTopic] = useState(sessions.topics[0])
  const [selectedDate, setSelectedDate] = useState(calendar.availableSlots[0])
  const [selectedTime, setSelectedTime] = useState(null)

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .substring(0, 2)
      .toUpperCase()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Expert Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex flex-col sm:flex-row gap-6">
                <Avatar className="w-32 h-32 border-4 border-white shadow-lg">
                  <AvatarImage src={expert.image} alt={expert.name} />
                  <AvatarFallback className="text-2xl">{getInitials(expert.name)}</AvatarFallback>
                </Avatar>
                
                <div className="flex-1 space-y-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h1 className="text-3xl font-semibold">{expert.name}</h1>
                      <div className="flex gap-1">
                        {expert.badges.map((badge, index) => (
                          <Badge key={index} variant={badge === 'Top Expert' ? 'default' : 'secondary'}>
                            {badge}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <h2 className="text-xl text-muted-foreground">{expert.title}</h2>
                    <p className="text-lg font-medium mt-2">{expert.tagline}</p>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-black text-black" />
                      <span className="font-medium">{expert.rating}</span>
                      <span>({expert.reviewCount} reviews)</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{expert.totalSessions} sessions</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{expert.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Globe className="w-4 h-4" />
                      <span>{expert.languages.join(', ')}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-foreground rounded-full"></div>
                    <span className="text-sm font-medium">{expert.availability}</span>
                    <span className="text-sm text-muted-foreground">• {expert.responseTime}</span>
                  </div>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button size="lg" className="rounded-full px-8">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Session
                </Button>
                <Button size="lg" variant="outline" className="rounded-full border-2 border-foreground">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Message
                </Button>
                <Button size="lg" variant="outline" className="rounded-full p-3 border-2 border-foreground">
                  <Heart className="w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-full p-3 border-2 border-foreground">
                  <Share className="w-4 h-4" />
                </Button>
              </div>
            </div>
            
            {/* Booking Card */}
            <div className="lg:col-span-1">
              <Card className="border-2 border-foreground sticky top-4">
                <CardHeader>
                  <CardTitle className="text-center">
                    <span className="text-2xl font-semibold">{expert.rate}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Session Topics */}
                  <div>
                    <h4 className="font-medium mb-2">Choose Session Type</h4>
                    <div className="space-y-2">
                      {sessions.topics.map((topic, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedTopic(topic)}
                          className={`w-full p-3 rounded-lg border-2 text-left transition-colors ${
                            selectedTopic.title === topic.title
                              ? 'border-foreground bg-foreground text-background'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <div className="font-medium text-sm">{topic.title}</div>
                          <div className="text-xs opacity-75">{topic.duration} • {topic.price}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <Separator />
                  
                  {/* Calendar */}
                  <div>
                    <h4 className="font-medium mb-2">Available Times</h4>
                    <div className="space-y-3">
                      {calendar.availableSlots.map((day, index) => (
                        <div key={index}>
                          <h5 className="text-sm font-medium mb-2">{day.date}</h5>
                          <div className="grid grid-cols-2 gap-2">
                            {day.slots.map((time, timeIndex) => (
                              <button
                                key={timeIndex}
                                onClick={() => {setSelectedDate(day); setSelectedTime(time)}}
                                className={`p-2 text-xs rounded border-2 transition-colors ${
                                  selectedTime === time && selectedDate.date === day.date
                                    ? 'border-foreground bg-foreground text-background'
                                    : 'border-gray-200 hover:border-gray-300'
                                }`}
                              >
                                {time}
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="w-full rounded-full" size="lg">
                    Book {selectedTopic.title}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* About */}
              <Card className="border-2 border-foreground">
                <CardHeader>
                  <CardTitle>About Isabella</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {about.bio}
                  </p>
                  
                  {/* Expertise */}
                  <div>
                    <h4 className="font-semibold mb-3">Areas of Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {about.expertise.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="bg-gray-100">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Experience */}
              <Card className="border-2 border-foreground">
                <CardHeader>
                  <CardTitle>Experience</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {about.experience.map((exp, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex-shrink-0"></div>
                      <div className="flex-1">
                        <h4 className="font-semibold">{exp.role}</h4>
                        <p className="text-muted-foreground">{exp.company}</p>
                        <p className="text-sm text-muted-foreground">{exp.duration}</p>
                        <p className="text-sm mt-2">{exp.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Reviews */}
              <Card className="border-2 border-foreground">
                <CardHeader>
                  <CardTitle>Recent Reviews</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {reviews.slice(0, 3).map((review) => (
                    <div key={review.id} className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={review.reviewerImage} alt={review.reviewerName} />
                          <AvatarFallback>{getInitials(review.reviewerName)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium text-sm">{review.reviewerName}</span>
                            <span className="text-xs text-muted-foreground">{review.reviewerTitle}</span>
                          </div>
                          <div className="flex items-center gap-2 mb-2">
                            <div className="flex gap-1">
                              {[...Array(review.rating)].map((_, i) => (
                                <Star key={i} className="w-3 h-3 fill-black text-black" />
                              ))}
                            </div>
                            <span className="text-xs text-muted-foreground">{review.date}</span>
                            <Badge variant="secondary" className="bg-gray-100 text-xs">
                              {review.sessionTopic}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {review.review}
                          </p>
                        </div>
                      </div>
                      {review.id !== reviews[2].id && <Separator />}
                    </div>
                  ))}
                  
                  <Button variant="outline" className="w-full rounded-full border-2 border-foreground">
                    View All {expert.reviewCount} Reviews
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Education */}
              <Card className="border-2 border-foreground">
                <CardHeader>
                  <CardTitle>Education</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {about.education.map((edu, index) => (
                    <div key={index}>
                      <h4 className="font-semibold">{edu.school}</h4>
                      <p className="text-sm text-muted-foreground">{edu.degree}</p>
                      <p className="text-xs text-muted-foreground">{edu.year}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Session Topics */}
              <Card className="border-2 border-foreground">
                <CardHeader>
                  <CardTitle>Popular Sessions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {sessions.topics.map((topic, index) => (
                    <div key={index} className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm">{topic.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{topic.description}</p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-xs text-muted-foreground">{topic.duration}</span>
                        <span className="text-sm font-medium">{topic.price}</span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ExpertProfilePage