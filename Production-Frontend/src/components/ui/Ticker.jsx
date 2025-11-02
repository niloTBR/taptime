import { useEffect, useState } from 'react'

const Ticker = ({ 
  items = [],
  speed = 30,
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(true)

  // Duplicate items for seamless loop
  const duplicatedItems = [...items, ...items]

  return (
    <div className={`relative overflow-hidden bg-white ${className}`}>
      <div 
        className="flex whitespace-nowrap animate-scroll"
        style={{
          animation: `scroll ${speed}s linear infinite`,
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div 
            key={index}
            className="flex items-center px-8 py-2 border-r border-gray-200 last:border-r-0"
          >
            <span className="text-sm font-medium text-gray-900">
              {typeof item === 'string' ? item : item.category}
            </span>
            {item.count && (
              <span className="ml-2 text-xs text-gray-500">
                ({item.count})
              </span>
            )}
          </div>
        ))}
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  )
}

export default Ticker