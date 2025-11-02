import { ChevronRight, Home } from 'lucide-react'

const Breadcrumb = ({ items = [], className = '' }) => {
  return (
    <nav className={`flex items-center space-x-1 text-sm text-gray-500 ${className}`}>
      <a 
        href="/" 
        className="flex items-center hover:text-gray-700 transition-colors"
      >
        <Home className="w-4 h-4" />
      </a>
      
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-1">
          <ChevronRight className="w-4 h-4" />
          {item.href ? (
            <a 
              href={item.href}
              className="hover:text-gray-700 transition-colors"
            >
              {item.label}
            </a>
          ) : (
            <span className="text-gray-900 font-medium">
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  )
}

export default Breadcrumb