import { useState, useEffect } from 'react'
import { Search } from 'lucide-react'
import Button from '@/components/ui/Button'

const SearchBar = ({ 
  placeholder = 'Search...',
  animatedPlaceholders = [],
  onSearch = () => {},
  size = 'md',
  className = ''
}) => {
  const [query, setQuery] = useState('')
  const [currentPlaceholder, setCurrentPlaceholder] = useState(0)

  // Animate placeholders
  useEffect(() => {
    if (animatedPlaceholders.length > 0) {
      const interval = setInterval(() => {
        setCurrentPlaceholder((prev) => (prev + 1) % animatedPlaceholders.length)
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [animatedPlaceholders])

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(query)
  }

  const sizes = {
    sm: 'h-10 text-sm',
    md: 'h-12 text-base',
    lg: 'h-14 text-lg'
  }

  const currentPlaceholderText = animatedPlaceholders.length > 0 
    ? animatedPlaceholders[currentPlaceholder] 
    : placeholder

  return (
    <form onSubmit={handleSubmit} className={`relative ${className}`}>
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={currentPlaceholderText}
          className={`w-full pl-12 pr-20 border-2 border-gray-300 rounded-full focus:border-black focus:outline-none transition-colors ${sizes[size]}`}
        />
        <Button
          type="submit"
          size="sm"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full px-6"
        >
          Search
        </Button>
      </div>
    </form>
  )
}

export default SearchBar