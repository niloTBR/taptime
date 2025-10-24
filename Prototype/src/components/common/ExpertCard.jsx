import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Star, Heart, Crown, CheckCircle, HeartHandshake } from 'lucide-react'
import { Link } from 'react-router-dom'
import LazyImage from './LazyImage'

const ExpertCard = ({ expert, showActions = true, className = '', showCrown = false, showCharity = false }) => {
  const { id, name, title, rate, rating, reviewCount, image, badge, expertise, bio } = expert

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .substring(0, 2)
      .toUpperCase()
  }

  return (
    <Link to={`/expert/${id}`} className="block h-full">
      <Card className={`group hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 hover:border-foreground ${className} h-full cursor-pointer relative`}>
        {/* Top Expert Badge - Top Right of Card */}
        {badge && badge === 'Top Expert' && (
          <div className="absolute top-3 right-3 z-10">
            <Badge variant="outline" className="text-xs bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0 px-2 py-1 rounded-full inline-flex items-center gap-1 w-fit">
              <Crown className="w-3 h-3" />
              Top Expert
            </Badge>
          </div>
        )}
        {/* Photo Header - Full Width */}
        <div className="relative h-32 overflow-hidden rounded-t-lg bg-gray-100">
          {image ? (
            <>
              <LazyImage 
                src={image} 
                alt={name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-200">
              <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center">
                <span className="text-xl font-medium text-gray-600">
                  {getInitials(name)}
                </span>
              </div>
            </div>
          )}
          
        </div>

        <CardContent className="p-6 flex flex-col min-h-0">
          <div className="flex-1 space-y-4 text-left">
            {/* Name and Title */}
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-base leading-tight text-left">
                  {name}
                </h3>
                {badge && badge === 'Verified' && (
                  <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 24 24" className="w-5 h-5">
                      <g>
                        <path d="M12 1.5c-.5 0-1 .2-1.4.6L9.2 3.5c-.3.3-.7.4-1.1.4H6.5c-.8 0-1.5.7-1.5 1.5v1.6c0 .4-.1.8-.4 1.1L3.2 9.5c-.8.8-.8 2 0 2.8l1.4 1.4c.3.3.4.7.4 1.1V16.5c0 .8.7 1.5 1.5 1.5h1.6c.4 0 .8.1 1.1.4l1.4 1.4c.8.8 2 .8 2.8 0l1.4-1.4c.3-.3.7-.4 1.1-.4h1.6c.8 0 1.5-.7 1.5-1.5v-1.6c0-.4.1-.8.4-1.1l1.4-1.4c.8-.8.8-2 0-2.8l-1.4-1.4c-.3-.3-.4-.7-.4-1.1V5.5c0-.8-.7-1.5-1.5-1.5h-1.6c-.4 0-.8-.1-1.1-.4L13.4 2.1c-.4-.4-.9-.6-1.4-.6z" fill="#1d9bf0"/>
                        <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                      </g>
                    </svg>
                  </div>
                )}
              </div>
              <p className="text-xs text-muted-foreground mt-1 text-left">
                {title}
              </p>
              
              {/* Rating */}
              <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-black text-black" />
                  <span className="text-sm font-medium">{rating}</span>
                </div>
                <span className="text-xs text-muted-foreground">
                  ({reviewCount})
                </span>
              </div>
              
              {bio && (
                <p className="text-xs text-muted-foreground mt-2 text-left leading-relaxed line-clamp-3">
                  {bio}
                </p>
              )}
            </div>
          </div>

          {/* Actions - Always at Bottom */}
          {showActions && (
            <div className="mt-auto flex-shrink-0 pt-4">
              <div className="flex justify-between items-start">
                <div className="flex flex-col gap-2">
                  <Button 
                    size="sm" 
                    className="rounded-full px-4 flex items-center gap-2"
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      window.location.href = `/book/${id}`
                    }}
                  >
                    <span className="text-sm font-medium">{rate.split('/')[0]}</span>
                    <span className="text-xs opacity-75">/{rate.split('/')[1]}</span>
                    <span className="ms-1">Book</span>
                  </Button>
                  
                  {/* Charity Donation Indicator */}
                  {showCharity && (
                    <div className="flex items-center gap-1">
                      <HeartHandshake className="w-4 h-4 text-green-600" />
                      <span className="text-xs text-green-600 font-medium">Donating To Charity</span>
                    </div>
                  )}
                </div>
                
                <Button 
                  size="sm" 
                  variant="outline"
                  className="rounded-full w-9 h-9 p-0 border-2 border-foreground"
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    console.log('Add to favorites', name)
                  }}
                >
                  <Heart className="w-4 h-4" />
                </Button>
              </div>
            </div>
          )}
        </CardContent>
    </Card>
  </Link>
  )
}

export default ExpertCard