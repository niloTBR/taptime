import { Star } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'
import Avatar from '@/components/ui/Avatar'

const ReviewCard = ({ 
  review = {},
  className = ''
}) => {
  const {
    id,
    name = '',
    title = '',
    rating = 5,
    text = '',
    image = ''
  } = review

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()
  }

  return (
    <Card className={`h-full ${className}`}>
      <CardContent className="p-6 space-y-4">
        {/* Rating Stars */}
        <div className="flex items-center gap-1">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-black text-black" />
          ))}
        </div>

        {/* Review Text */}
        <blockquote className="text-gray-700 italic leading-relaxed">
          "{text}"
        </blockquote>

        {/* Reviewer Info */}
        <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
          <Avatar 
            src={image} 
            alt={name}
            size="md"
          >
            {getInitials(name)}
          </Avatar>
          <div>
            <div className="font-semibold text-sm text-gray-900">{name}</div>
            <div className="text-xs text-gray-600">{title}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default ReviewCard