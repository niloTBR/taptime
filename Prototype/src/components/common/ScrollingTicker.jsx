import { useEffect, useRef } from 'react'
import { Briefcase, Laptop, Palette, TrendingUp, DollarSign, Heart, ArrowRight } from 'lucide-react'

const ScrollingTicker = ({ items, className = '' }) => {
  const tickerRef = useRef(null)

  // Icon mapping for categories
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
    return <IconComponent className="w-8 h-8" />
  }

  useEffect(() => {
    const ticker = tickerRef.current
    if (!ticker) return

    const tickerContent = ticker.querySelector('.ticker-content')
    if (!tickerContent) return

    // Clone content for seamless loop
    const clonedContent = tickerContent.cloneNode(true)
    clonedContent.classList.add('ticker-clone')
    ticker.appendChild(clonedContent)

    return () => {
      const clone = ticker.querySelector('.ticker-clone')
      if (clone) {
        clone.remove()
      }
    }
  }, [items])

  return (
    <div className={`overflow-hidden relative ${className}`}>
      <div 
        ref={tickerRef}
        className="flex animate-scroll whitespace-nowrap"
      >
        <div className="ticker-content flex items-center gap-32 min-w-full pr-32">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-4 shrink-0 whitespace-nowrap min-w-fit px-4">
              <div className="w-12 h-12 rounded-full border-2 border-foreground flex items-center justify-center shrink-0">
                {getIcon(item.category)}
              </div>
              <span className="text-3xl font-semibold whitespace-nowrap shrink-0">{item.category}</span>
              <ArrowRight className="w-6 h-6 text-muted-foreground shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ScrollingTicker