import { Card, CardContent } from '@/components/ui/card'
import { Users, Briefcase, Laptop, Palette, TrendingUp, DollarSign, Heart } from 'lucide-react'

const CategoryCard = ({ category, onClick, className = '' }) => {
  const { name, expertCount } = category

  // Clean lucide icon mapping for categories
  const getIcon = (categoryName) => {
    const iconMap = {
      'Business & Startups': Briefcase,
      'Technology & Innovation': Laptop, 
      'Design & Creativity': Palette,
      'Marketing & Growth': TrendingUp,
      'Finance & Economics': DollarSign,
      'Health & Wellness': Heart
    }
    const IconComponent = iconMap[categoryName] || Briefcase
    return <IconComponent className="w-6 h-6" />
  }

  return (
    <Card 
      className={`group hover:shadow-sm transition-all duration-200 cursor-pointer border ${className}`}
      onClick={() => onClick && onClick(category)}
    >
      <CardContent className="p-4">
        <div className="flex flex-col items-center text-center space-y-3">
          {/* Icon */}
          <div className="w-12 h-12 rounded-full border flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
            {getIcon(name)}
          </div>
          
          {/* Content */}
          <div className="space-y-1">
            <h3 className="font-medium text-sm leading-tight">
              {name}
            </h3>
            <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
              <Users className="w-3 h-3" />
              <span>{expertCount}+</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default CategoryCard