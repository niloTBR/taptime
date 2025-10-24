import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { 
  Star, 
  Heart,
  Share,
  Crown,
  Award,
  ChevronDown
} from 'lucide-react'
import expertProfileData from '@/data/expert-profile.json'

const ExpertProfilePage = () => {
  const { expert, about, sessions, reviews, calendar } = expertProfileData
  const [selectedSlot, setSelectedSlot] = useState(null)
  const [selectedSession, setSelectedSession] = useState(sessions.topics[0])

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .substring(0, 2)
      .toUpperCase()
  }

  // Predefined time slots for booking
  const predefinedSlots = [
    { date: 'Today', time: '2:00 PM', available: true },
    { date: 'Today', time: '4:00 PM', available: false },
    { date: 'Tomorrow', time: '10:00 AM', available: true },
    { date: 'Tomorrow', time: '2:00 PM', available: true },
    { date: 'Wed, Sep 4', time: '11:00 AM', available: true },
    { date: 'Wed, Sep 4', time: '3:00 PM', available: true },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="py-8 px-4 border-b">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Side - Photo */}
            <div className="lg:col-span-1">
              <div className="relative">
                <div className="w-full aspect-square rounded-2xl overflow-hidden bg-gray-100 border">
                  {expert.image ? (
                    <img 
                      src={expert.image} 
                      alt={expert.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-200">
                      <span className="text-4xl font-medium text-gray-600">
                        {getInitials(expert.name)}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Side - Info */}
            <div className="lg:col-span-2 space-y-6">

              {/* Name with Verified Badge and Wishlist */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h1 className="text-2xl font-semibold">{expert.name}</h1>
                  {expert.badges.includes('Verified') && (
                    <div className="w-6 h-6 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-6 h-6">
                        <g>
                          <path d="M12 1.5c-.5 0-1 .2-1.4.6L9.2 3.5c-.3.3-.7.4-1.1.4H6.5c-.8 0-1.5.7-1.5 1.5v1.6c0 .4-.1.8-.4 1.1L3.2 9.5c-.8.8-.8 2 0 2.8l1.4 1.4c.3.3.4.7.4 1.1V16.5c0 .8.7 1.5 1.5 1.5h1.6c.4 0 .8.1 1.1.4l1.4 1.4c.8.8 2 .8 2.8 0l1.4-1.4c.3-.3.7-.4 1.1-.4h1.6c.8 0 1.5-.7 1.5-1.5v-1.6c0-.4.1-.8.4-1.1l1.4-1.4c.8-.8.8-2 0-2.8l-1.4-1.4c-.3-.3-.4-.7-.4-1.1V5.5c0-.8-.7-1.5-1.5-1.5h-1.6c-.4 0-.8-.1-1.1-.4L13.4 2.1c-.4-.4-.9-.6-1.4-.6z" fill="#1d9bf0"/>
                          <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                        </g>
                      </svg>
                    </div>
                  )}
                  {/* Wishlist in Grey Circle */}
                  <div className="ml-auto">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                      <Heart className="w-4 h-4" />
                    </div>
                  </div>
                </div>
                
                {/* Title */}
                <h2 className="text-lg text-muted-foreground font-normal">{expert.title}</h2>
              </div>

              {/* Rating with Top Expert Badge */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-black text-black" />
                    <span className="text-sm font-medium">{expert.rating}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    ({expert.reviewCount})
                  </span>
                </div>
                {/* Top Expert Badge next to rating */}
                {expert.badges.includes('Top Expert') && (
                  <Badge variant="outline" className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0 px-2 py-1 rounded-full inline-flex items-center gap-1 w-fit">
                    <Crown className="w-3 h-3" />
                    Top Expert
                  </Badge>
                )}
              </div>

              {/* Details Table */}
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-y-2 text-sm">
                  <div className="text-muted-foreground">Language</div>
                  <div>{expert.languages.join(', ')}</div>
                  
                  <div className="text-muted-foreground">Location</div>
                  <div>{expert.location}</div>
                  
                  <div className="text-muted-foreground">Response Time</div>
                  <div>{expert.responseTime}</div>
                  
                  <div className="text-muted-foreground">Sessions</div>
                  <div>{expert.totalSessions} completed</div>
                </div>
              </div>

              <div className="border-t pt-4" />

              {/* Industry Labels with Tab-like Style */}
              <div>
                <h4 className="text-sm font-medium mb-3">Expertise</h4>
                <div className="flex flex-wrap gap-2">
                  {about.expertise.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="bg-gray-100 text-xs px-3 py-1 cursor-pointer hover:bg-gray-200">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="border-t pt-4" />

              {/* Bio */}
              <div>
                <p className="text-muted-foreground leading-relaxed">
                  {about.bio}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t" />

      {/* Book a Call Section - Black & White Design */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Left - Form */}
            <div>
              <h2 className="text-xl font-semibold mb-2">Book a call with {expert.name}</h2>
              <p className="text-sm text-muted-foreground mb-6">Schedule a 1:1 session for tailored guidance</p>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Full Name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    placeholder="Email Address"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Agenda (Optional)</label>
                  <textarea 
                    placeholder="Type here"
                    className="w-full p-3 border border-gray-300 rounded-lg h-24 resize-none focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                  />
                </div>
              </div>
            </div>
            
            {/* Right - Predefined Slots */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Available Times</h3>
                <span className="text-sm font-semibold">{selectedSession.price}</span>
              </div>
              
              {/* Time Slots Grid */}
              <div className="space-y-3">
                {predefinedSlots.map((slot, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedSlot(index)}
                    disabled={!slot.available}
                    className={`w-full p-4 text-left border rounded-lg transition-colors ${
                      !slot.available 
                        ? 'border-gray-200 bg-gray-50 text-gray-400 cursor-not-allowed'
                        : selectedSlot === index
                        ? 'border-black bg-black text-white'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-medium">{slot.date}</div>
                        <div className="text-sm opacity-75">{slot.time}</div>
                      </div>
                      {!slot.available && (
                        <span className="text-xs">Unavailable</span>
                      )}
                    </div>
                  </button>
                ))}
              </div>
              
              <Button 
                className="w-full mt-6 rounded-full px-4 bg-black hover:bg-gray-800 text-white"
                disabled={selectedSlot === null}
              >
                <span className="text-sm font-medium">{selectedSession.price}</span>
                <span className="ms-1">Book</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section - Homepage Style */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-5xl">
          <h3 className="text-xl font-semibold mb-6">Recent Reviews</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.slice(0, 6).map((review) => (
              <div key={review.id} className="border rounded-lg p-6 bg-white">
                <div className="flex items-center gap-3 mb-4">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={review.reviewerImage} alt={review.reviewerName} />
                    <AvatarFallback>{getInitials(review.reviewerName)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium text-sm">{review.reviewerName}</div>
                    <div className="text-xs text-muted-foreground">{review.reviewerTitle}</div>
                  </div>
                </div>
                
                <div className="flex gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-black text-black" />
                  ))}
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  {review.review}
                </p>
                
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="bg-gray-100 text-xs">
                    {review.sessionTopic}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" className="rounded-full border-2 border-foreground">
              View All {expert.reviewCount} Reviews
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ExpertProfilePage