import { Star, Heart, Crown, Award } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import Avatar from '@/components/ui/Avatar'

const ExpertCard = ({ 
  expert = {},
  showActions = true,
  showCrown = false,
  showBadge = true,
  className = ''
}) => {
  const {
    id,
    name = '',
    title = '',
    rate = '',
    rating = 0,
    reviewCount = 0,
    image = '',
    badge = '',
    expertise = [],
    bio = ''
  } = expert

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()
  }

  const handleBookClick = (e) => {
    e.stopPropagation()
    window.location.href = `/book/${id}`
  }

  const handleFavoriteClick = (e) => {
    e.stopPropagation()
    console.log('Add to favorites', name)
  }

  const handleCardClick = () => {
    window.location.href = `/expert/${id}`
  }

  return (
    <Card 
      className={`cursor-pointer hover:shadow-lg transition-all duration-200 relative ${className}`}
      onClick={handleCardClick}
    >
      {/* Top Expert Crown */}
      {showCrown && (
        <div className="absolute -top-2 -right-2 z-10">
          <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
            <Crown className="w-4 h-4 text-white" />
          </div>
        </div>
      )}

      <CardContent className="p-6">
        <div className="space-y-4">
          {/* Header with Avatar and Badge */}
          <div className="flex items-start justify-between">
            <div className="relative">
              <Avatar 
                src={image} 
                alt={name}
                size="xl"
              >
                {getInitials(name)}
              </Avatar>
              
              {/* Verified Badge on Avatar */}
              {badge === 'Verified' && (
                <div className="absolute -bottom-1 -right-1">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                    <Award className="w-3 h-3 text-white" />
                  </div>
                </div>
              )}
            </div>

            {/* Top Expert Badge */}
            {showBadge && badge === 'Top Expert' && (
              <Badge variant="primary" size="xs" className="flex items-center gap-1">
                <Crown className="w-3 h-3" />
                Top Expert
              </Badge>
            )}
          </div>

          {/* Expert Info */}
          <div className="space-y-2">
            <h3 className="font-semibold text-lg text-gray-900 leading-tight">
              {name}
            </h3>
            <p className="text-sm text-gray-600">
              {title}
            </p>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-black text-black" />
              <span className="text-sm font-medium">{rating}</span>
            </div>
            <span className="text-xs text-gray-500">
              ({reviewCount})
            </span>
          </div>

          {/* Expertise Tags */}
          {expertise.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {expertise.slice(0, 2).map((skill, index) => (
                <Badge key={index} variant="secondary" size="xs">
                  {skill}
                </Badge>
              ))}
              {expertise.length > 2 && (
                <Badge variant="outline" size="xs">
                  +{expertise.length - 2}
                </Badge>
              )}
            </div>
          )}

          {/* Bio */}
          {bio && (
            <p className="text-sm text-gray-600 line-clamp-2">
              {bio}
            </p>
          )}

          {/* Actions */}
          {showActions && (
            <div className="flex gap-2 pt-2">
              <Button 
                size="sm" 
                className="flex-1"
                onClick={handleBookClick}
              >
                <span className="font-medium">{rate.split('/')[0]}</span>
                <span className="text-xs opacity-75 ml-1">/{rate.split('/')[1]}</span>
                <span className="ml-2">Book</span>
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                className="px-3"
                onClick={handleFavoriteClick}
              >
                <Heart className="w-4 h-4" />
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export default ExpertCard