import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Heart, Star, Users } from 'lucide-react'
import content from '@/data/content.json'

const TestPage = () => {
  const [count, setCount] = useState(0)
  const { pages } = content
  const pageData = pages.home

  const iconMap = {
    heart: Heart,
    star: Star,
    users: Users
  }

  const getIconColor = (colorClass) => {
    return colorClass // Just return the original Tailwind class
  }

  const handleAction = (action) => {
    if (action === 'increment') setCount(count + 1)
    if (action === 'decrement') setCount(count - 1)
  }

  const renderCardContent = (card) => {
    const { content: cardContent } = card

    if (cardContent.type === 'counter') {
      return (
        <div className="space-y-4">
          <p className="text-sm">{cardContent.label}: {count}</p>
          <div className="flex gap-2">
            {cardContent.actions.map((action, index) => (
              <Button 
                key={index}
                variant={action.variant}
                onClick={() => handleAction(action.action)}
              >
                {action.label}
              </Button>
            ))}
          </div>
        </div>
      )
    }

    if (cardContent.type === 'demo') {
      return (
        <div className="space-y-4">
          {cardContent.elements.map((element, index) => {
            if (element.type === 'gradient') {
              return (
                <div key={index} className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg text-center font-medium">
                  {element.text}
                </div>
              )
            }
            if (element.type === 'button') {
              return (
                <Button 
                  key={index}
                  variant={element.variant}
                  size={element.size}
                  className={element.fullWidth ? 'w-full' : ''}
                >
                  {element.text}
                </Button>
              )
            }
            return null
          })}
        </div>
      )
    }

    if (cardContent.type === 'list') {
      return (
        <ul className="text-sm space-y-1">
          {cardContent.items.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              {item}
            </li>
          ))}
        </ul>
      )
    }

    return null
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="container mx-auto px-4 py-8 space-y-8"
    >
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center max-w-3xl mx-auto"
      >
        <h1 className="text-4xl font-semibold tracking-tight mb-4">{pageData.title}</h1>
        <p className="text-xl text-muted-foreground">{pageData.subtitle}</p>
      </motion.div>

      {/* Demo Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pageData.sections.demo.cards.map((card, index) => {
          const IconComponent = iconMap[card.icon]
          
          return (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Card className="h-full transition-shadow hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {IconComponent && (
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <IconComponent className={`h-5 w-5 ${getIconColor(card.iconColor)}`} />
                      </motion.div>
                    )}
                    {card.title}
                  </CardTitle>
                  <CardDescription>{card.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  {renderCardContent(card)}
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </div>

      {/* Features Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>{pageData.sections.features.title}</CardTitle>
            <CardDescription>{pageData.sections.features.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pageData.sections.features.items.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 + index * 0.2 }}
                >
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <motion.span
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.2 }}
                    >
                      {feature.icon}
                    </motion.span>
                    {feature.category}
                  </h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {feature.items.map((item, itemIndex) => (
                      <motion.li 
                        key={itemIndex} 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 1.2 + index * 0.2 + itemIndex * 0.1 }}
                        className="flex items-start gap-2"
                      >
                        <span className="text-primary mt-1">•</span>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}

export default TestPage