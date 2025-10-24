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
  ChevronDown,
  X,
  Calendar,
  Clock
} from 'lucide-react'
import expertProfileData from '@/data/expert-profile.json'

const ExpertProfilePage = () => {
  const { expert, about, sessions, reviews, calendar } = expertProfileData
  const [selectedSlot, setSelectedSlot] = useState(null)
  const [selectedSession, setSelectedSession] = useState(sessions.topics[0])
  const [activeTab, setActiveTab] = useState('about')
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [bookingStep, setBookingStep] = useState(1)
  const [isLoggedIn, setIsLoggedIn] = useState(false) // Simulate login state
  
  // Mock user data (would come from auth context)
  const userData = {
    name: "John Smith",
    email: "john.smith@example.com"
  }

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
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
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
            <div className="lg:col-span-2 space-y-8">

              {/* Name with Verified Badge and Wishlist */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h1 className="text-3xl md:text-4xl font-medium tracking-tight">{expert.name}</h1>
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
                <h2 className="text-xl text-muted-foreground font-normal mt-3">{expert.title}</h2>
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
                  <Badge variant="outline" className="border-yellow-500 text-yellow-600 bg-yellow-50 px-2 py-1 rounded-full inline-flex items-center gap-1 w-fit">
                    <Crown className="w-3 h-3" />
                    Top Expert
                  </Badge>
                )}
              </div>

              {/* Details Table */}
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-y-3 text-sm">
                  <div className="text-muted-foreground">Industry</div>
                  <div>{about.expertise.slice(0, 2).join(', ')}</div>
                  
                  <div className="text-muted-foreground">Location</div>
                  <div>{expert.location}</div>
                  
                  <div className="text-muted-foreground">Language</div>
                  <div>{expert.languages.join(', ')}</div>
                  
                  <div className="text-muted-foreground">Sessions Completed</div>
                  <div>{expert.totalSessions}</div>
                </div>
              </div>

              <div className="border-t pt-4" />

              {/* Tab Navigation */}
              <div className="flex items-center justify-between">
                <div className="flex space-x-8">
                  <button
                    onClick={() => setActiveTab('about')}
                    className={`pb-3 border-b-2 transition-colors ${
                      activeTab === 'about'
                        ? 'border-black text-black font-medium'
                        : 'border-transparent text-muted-foreground hover:text-black'
                    }`}
                  >
                    About
                  </button>
                  <button
                    onClick={() => setActiveTab('reviews')}
                    className={`pb-3 border-b-2 transition-colors ${
                      activeTab === 'reviews'
                        ? 'border-black text-black font-medium'
                        : 'border-transparent text-muted-foreground hover:text-black'
                    }`}
                  >
                    Reviews ({expert.reviewCount})
                  </button>
                </div>
                
                {/* Book Button */}
                <div className="flex gap-3">
                  {/* Demo Login Toggle */}
                  <Button 
                    variant="outline"
                    onClick={() => setIsLoggedIn(!isLoggedIn)}
                    className="rounded-full px-4 text-xs"
                  >
                    {isLoggedIn ? '👤 Logged In' : '🔓 Login'}
                  </Button>
                  
                  <Button 
                    onClick={() => {
                      if (!isLoggedIn) {
                        alert('Please log in to book a session')
                        return
                      }
                      setIsBookingOpen(true)
                    }}
                    className="rounded-full px-6 bg-black hover:bg-gray-800 text-white"
                  >
                    Book Session
                  </Button>
                </div>
              </div>

              {/* Tab Content */}
              <div className="space-y-6">
                {activeTab === 'about' && (
                  <>
                    {/* Bio */}
                    <div>
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        {about.bio}
                      </p>
                    </div>

                    {/* Expertise */}
                    <div>
                      <h4 className="text-lg font-medium mb-4">Expertise</h4>
                      <div className="flex flex-wrap gap-2">
                        {about.expertise.map((skill, index) => (
                          <Badge key={index} variant="secondary" className="bg-gray-100 text-sm px-3 py-2 cursor-pointer hover:bg-gray-200">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {activeTab === 'reviews' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      
      {/* Slide-out Booking Panel */}
      {isBookingOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
            <div className="p-6 border-b">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold">Book with {expert.name}</h2>
                  <p className="text-sm text-muted-foreground mt-1">
                    Step {bookingStep} of 2: {bookingStep === 1 ? 'Select Time' : 'Project Details'}
                  </p>
                </div>
                <button 
                  onClick={() => {
                    setIsBookingOpen(false)
                    setBookingStep(1)
                    setSelectedSlot(null)
                  }}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="p-6 space-y-6 overflow-y-auto h-full pb-32">
              {/* Step 1: Select Time */}
              {bookingStep === 1 && (
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold">Available Times</h3>
                    <span className="text-sm font-semibold">{selectedSession.price}</span>
                  </div>
                  
                  <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
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
                </div>
              )}
              
              {/* Step 2: Project Details */}
              {bookingStep === 2 && (
                <div className="space-y-6">
                  {/* Selected Time Summary */}
                  {selectedSlot !== null && (
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Selected Time</h4>
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{predefinedSlots[selectedSlot].date}</span>
                        <Clock className="w-4 h-4 ml-2" />
                        <span>{predefinedSlots[selectedSlot].time}</span>
                      </div>
                      <div className="mt-2 text-sm font-medium">{selectedSession.price}</div>
                    </div>
                  )}
                  
                  {/* Pre-populated User Details */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Your Details</h4>
                    <div className="text-sm space-y-1">
                      <div><strong>Name:</strong> {userData.name}</div>
                      <div><strong>Email:</strong> {userData.email}</div>
                    </div>
                  </div>
                  
                  {/* Project Description */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      What would you like to discuss with {expert.name}?
                    </label>
                    <textarea 
                      placeholder="Describe your project, challenges, or what you're hoping to achieve in this session..."
                      className="w-full p-3 border border-gray-300 rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                    />
                    <p className="text-xs text-muted-foreground mt-2">
                      This helps {expert.name} prepare for your session and provide more targeted advice.
                    </p>
                  </div>
                </div>
              )}
            </div>
            
            {/* Fixed Bottom Button */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-white border-t">
              {bookingStep === 1 ? (
                <Button 
                  className="w-full rounded-full px-4 bg-black hover:bg-gray-800 text-white"
                  disabled={selectedSlot === null}
                  onClick={() => setBookingStep(2)}
                >
                  <span className="text-sm font-medium">{selectedSession.price}</span>
                  <span className="ms-1">Continue</span>
                </Button>
              ) : (
                <div className="flex gap-3">
                  <Button 
                    variant="outline"
                    className="rounded-full px-4 border-2 border-foreground"
                    onClick={() => setBookingStep(1)}
                  >
                    Back
                  </Button>
                  <Button 
                    className="flex-1 rounded-full px-4 bg-black hover:bg-gray-800 text-white"
                  >
                    <span className="text-sm font-medium">{selectedSession.price}</span>
                    <span className="ms-1">Book</span>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ExpertProfilePage