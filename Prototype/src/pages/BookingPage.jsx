import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import SectionTitle from '@/components/common/SectionTitle'
import { 
  Star, 
  Clock, 
  Calendar,
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  CreditCard,
  FileText,
  Upload,
  Shield,
  MessageSquare
} from 'lucide-react'
import bookingData from '@/data/booking.json'

const BookingPage = () => {
  const { expert, sessionTypes, calendar, bookingSteps, bookingQuestions, policies } = bookingData
  
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedSession, setSelectedSession] = useState(null)
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const [formData, setFormData] = useState({})

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .substring(0, 2)
      .toUpperCase()
  }

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleInputChange = (questionId, value) => {
    setFormData(prev => ({
      ...prev,
      [questionId]: value
    }))
  }

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return selectedSession !== null
      case 2:
        return selectedDate !== null && selectedTime !== null
      case 3:
        return bookingQuestions
          .filter(q => q.required)
          .every(q => formData[q.id])
      default:
        return true
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-8 px-4 border-b">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="rounded-full">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Profile
            </Button>
            <div className="flex-1">
              <h1 className="text-2xl font-semibold">Book a Session</h1>
              <p className="text-muted-foreground">with {expert.name}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="py-6 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center justify-center">
            {bookingSteps.map((step, index) => (
              <div key={step.step} className="flex items-center">
                <div className={`flex items-center gap-3 ${index > 0 ? 'ml-8' : ''}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    currentStep >= step.step 
                      ? 'bg-foreground text-background' 
                      : 'bg-gray-200 text-muted-foreground'
                  }`}>
                    {currentStep > step.step ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      step.step
                    )}
                  </div>
                  <div className="hidden sm:block">
                    <div className={`font-medium text-sm ${
                      currentStep >= step.step ? 'text-foreground' : 'text-muted-foreground'
                    }`}>
                      {step.title}
                    </div>
                  </div>
                </div>
                {index < bookingSteps.length - 1 && (
                  <div className={`hidden sm:block w-16 h-px mx-4 ${
                    currentStep > step.step ? 'bg-foreground' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Main Booking Flow */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Step 1: Choose Session Type */}
              {currentStep === 1 && (
                <Card className="border-2 border-foreground">
                  <CardHeader>
                    <CardTitle>Choose Session Type</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {sessionTypes.map((session) => (
                      <button
                        key={session.id}
                        onClick={() => setSelectedSession(session)}
                        className={`w-full p-6 rounded-lg border-2 text-left transition-colors ${
                          selectedSession?.id === session.id
                            ? 'border-foreground bg-foreground text-background'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold">{session.title}</h3>
                          <div className="text-right">
                            <div className="font-semibold">${session.price}</div>
                            <div className="text-sm opacity-75">{session.duration}</div>
                          </div>
                        </div>
                        <p className="text-sm opacity-90">{session.description}</p>
                      </button>
                    ))}
                  </CardContent>
                </Card>
              )}

              {/* Step 2: Pick Date & Time */}
              {currentStep === 2 && (
                <Card className="border-2 border-foreground">
                  <CardHeader>
                    <CardTitle>Pick Date & Time</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {calendar.availableSlots.map((day) => (
                      <div key={day.date}>
                        <h4 className="font-medium mb-3">{day.displayDate}</h4>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                          {day.slots.map((slot) => (
                            <button
                              key={`${day.date}-${slot.time}`}
                              onClick={() => {
                                setSelectedDate(day)
                                setSelectedTime(slot)
                              }}
                              disabled={!slot.available}
                              className={`p-3 text-sm rounded border-2 transition-colors ${
                                selectedDate?.date === day.date && selectedTime?.time === slot.time
                                  ? 'border-foreground bg-foreground text-background'
                                  : slot.available
                                  ? 'border-gray-200 hover:border-gray-300'
                                  : 'border-gray-100 bg-gray-50 text-gray-400 cursor-not-allowed'
                              }`}
                            >
                              {slot.display}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              )}

              {/* Step 3: Add Details */}
              {currentStep === 3 && (
                <Card className="border-2 border-foreground">
                  <CardHeader>
                    <CardTitle>Session Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {bookingQuestions.map((question) => (
                      <div key={question.id}>
                        <label className="block text-sm font-medium mb-2">
                          {question.question}
                          {question.required && <span className="text-red-500 ml-1">*</span>}
                        </label>
                        
                        {question.type === 'select' && (
                          <select
                            value={formData[question.id] || ''}
                            onChange={(e) => handleInputChange(question.id, e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg"
                          >
                            <option value="">Select an option</option>
                            {question.options.map((option) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                        )}
                        
                        {question.type === 'textarea' && (
                          <textarea
                            value={formData[question.id] || ''}
                            onChange={(e) => handleInputChange(question.id, e.target.value)}
                            placeholder={question.placeholder}
                            rows={4}
                            className="w-full p-3 border border-gray-300 rounded-lg"
                          />
                        )}
                        
                        {question.type === 'file' && (
                          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                            <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                            <p className="text-sm text-gray-600">
                              Drop files here or click to upload
                            </p>
                            <p className="text-xs text-gray-400 mt-1">
                              Supports: PDF, DOC, DOCX, PPT, PPTX
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </CardContent>
                </Card>
              )}

              {/* Step 4: Payment */}
              {currentStep === 4 && (
                <Card className="border-2 border-foreground">
                  <CardHeader>
                    <CardTitle>Payment</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Shield className="w-4 h-4 text-green-600" />
                        <span className="text-sm font-medium">Secure Payment</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Your payment is protected by 256-bit SSL encryption
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Card Number</label>
                          <input 
                            type="text" 
                            placeholder="1234 5678 9012 3456"
                            className="w-full p-3 border border-gray-300 rounded-lg"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Expiry Date</label>
                          <input 
                            type="text" 
                            placeholder="MM/YY"
                            className="w-full p-3 border border-gray-300 rounded-lg"
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">CVV</label>
                          <input 
                            type="text" 
                            placeholder="123"
                            className="w-full p-3 border border-gray-300 rounded-lg"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Cardholder Name</label>
                          <input 
                            type="text" 
                            placeholder="John Doe"
                            className="w-full p-3 border border-gray-300 rounded-lg"
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between">
                <Button 
                  variant="outline" 
                  onClick={handleBack}
                  disabled={currentStep === 1}
                  className="rounded-full px-6 border-2 border-foreground"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
                
                <Button 
                  onClick={handleNext}
                  disabled={!canProceed()}
                  className="rounded-full px-6"
                >
                  {currentStep === 4 ? (
                    <>
                      <CreditCard className="w-4 h-4 mr-2" />
                      Complete Booking
                    </>
                  ) : (
                    <>
                      Next
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </div>
            </div>

            {/* Sidebar - Booking Summary */}
            <div className="lg:col-span-1">
              <Card className="border-2 border-foreground sticky top-4">
                <CardHeader>
                  <CardTitle>Booking Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Expert Info */}
                  <div className="flex items-center gap-3">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={expert.image} alt={expert.name} />
                      <AvatarFallback>{getInitials(expert.name)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-sm">{expert.name}</h4>
                      <p className="text-xs text-muted-foreground">{expert.title}</p>
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="w-3 h-3 fill-black text-black" />
                        <span className="text-xs">{expert.rating} ({expert.reviewCount} reviews)</span>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Session Details */}
                  {selectedSession && (
                    <div>
                      <h5 className="font-medium text-sm mb-2">Session Type</h5>
                      <p className="text-sm">{selectedSession.title}</p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-sm text-muted-foreground">{selectedSession.duration}</span>
                        <span className="font-semibold">${selectedSession.price}</span>
                      </div>
                    </div>
                  )}

                  {selectedDate && selectedTime && (
                    <>
                      <Separator />
                      <div>
                        <h5 className="font-medium text-sm mb-2">Date & Time</h5>
                        <div className="flex items-center gap-2 text-sm">
                          <Calendar className="w-4 h-4" />
                          <span>{selectedDate.displayDate}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm mt-1">
                          <Clock className="w-4 h-4" />
                          <span>{selectedTime.display}</span>
                        </div>
                      </div>
                    </>
                  )}

                  {selectedSession && (
                    <>
                      <Separator />
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm">Session fee</span>
                          <span className="text-sm">${selectedSession.price}</span>
                        </div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm">Platform fee</span>
                          <span className="text-sm">$5</span>
                        </div>
                        <Separator className="my-2" />
                        <div className="flex justify-between items-center font-semibold">
                          <span>Total</span>
                          <span>${selectedSession.price + 5}</span>
                        </div>
                      </div>
                    </>
                  )}

                  <Separator />

                  {/* Policies */}
                  <div className="space-y-2">
                    <h5 className="font-medium text-sm">Booking Policies</h5>
                    <div className="space-y-1 text-xs text-muted-foreground">
                      <p>• {policies.cancellation}</p>
                      <p>• {policies.rescheduling}</p>
                      <p>• {policies.preparation}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BookingPage