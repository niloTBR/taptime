import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Star, Heart, Crown } from 'lucide-react'
import LazyImage from './LazyImage'

const ExpertCard = ({ expert, showActions = true, className = '' }) => {
  const { name, title, rate, rating, reviewCount, image, badge, expertise } = expert

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .substring(0, 2)
      .toUpperCase()
  }

  return (
    <Card className={`group hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 hover:border-foreground ${className} h-full`}>
      <CardContent className="p-8 h-full flex flex-col">
        <div className="flex-1 space-y-6">
          {/* Photo - Centered at Top */}
          <div className="flex justify-center relative">
            <Avatar className="w-24 h-24 border-2">
              <AvatarImage asChild>
                <LazyImage 
                  src={image} 
                  alt={name}
                  className="w-full h-full object-cover"
                />
              </AvatarImage>
              <AvatarFallback className="text-xl font-medium">
                {getInitials(name)}
              </AvatarFallback>
            </Avatar>
            
            {/* Top Expert Icon */}
            {badge && badge === 'Top Expert' && (
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-black text-white rounded-full flex items-center justify-center">
                <Crown className="w-3 h-3" />
              </div>
            )}
          </div>

          {/* All Text Left Aligned */}
          <div className="text-left space-y-4 flex-1">
            {/* Name and Title */}
            <div>
              <h3 className="font-semibold text-lg leading-tight">
                {name}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                {title}
              </p>
            </div>
            
            {/* Rating - Left Aligned */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-black text-black" />
                <span className="text-sm font-medium">{rating}</span>
              </div>
              <span className="text-xs text-muted-foreground">
                ({reviewCount} reviews)
              </span>
            </div>

            {/* Skills - Left Aligned */}
            {expertise && expertise.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {expertise.slice(0, 2).map((skill, index) => (
                  <Badge key={index} variant="secondary" className="text-xs rounded-full bg-gray-100">
                    {skill}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Actions - Always at Bottom */}
        {showActions && (
          <div className="flex justify-between items-center pt-6 mt-auto">
            <Button 
              size="sm" 
              className="rounded-full px-4 flex items-center gap-2"
              onClick={() => console.log('Book session with', name)}
            >
              <span className="text-sm font-medium">{rate.split('/')[0]}</span>
              <span className="text-xs opacity-75">/{rate.split('/')[1]}</span>
              <span className="ml-1">Book</span>
            </Button>
            <Button 
              size="sm" 
              variant="outline"
              className="rounded-full w-9 h-9 p-0 border-2 border-foreground"
              onClick={() => console.log('Add to favorites', name)}
            >
              <Heart className="w-4 h-4" />
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default ExpertCard