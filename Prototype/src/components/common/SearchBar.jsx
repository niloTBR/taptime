import { useState, useEffect } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Search, Mic } from 'lucide-react'

const SearchBar = ({ 
  placeholder = "Search...", 
  onSearch,
  className = "",
  showVoiceSearch = true,
  size = "default",
  animatedPlaceholders = []
}) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPlaceholder, setCurrentPlaceholder] = useState('')
  const [placeholderIndex, setPlaceholderIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(false)
  const [currentText, setCurrentText] = useState('')

  // Typing animation effect
  useEffect(() => {
    if (animatedPlaceholders.length > 0 && searchQuery === '') {
      const fullText = animatedPlaceholders[placeholderIndex]
      let currentIndex = 0
      let isDeleting = false
      let timeoutId

      const typeEffect = () => {
        if (!isDeleting) {
          // Typing forward
          if (currentIndex <= fullText.length) {
            setCurrentText(fullText.substring(0, currentIndex))
            currentIndex++
            timeoutId = setTimeout(typeEffect, 80) // Consistent typing speed
          } else {
            // Pause at end, then start deleting
            timeoutId = setTimeout(() => {
              isDeleting = true
              typeEffect()
            }, 2000)
          }
        } else {
          // Deleting backward
          if (currentIndex > 0) {
            currentIndex--
            setCurrentText(fullText.substring(0, currentIndex))
            timeoutId = setTimeout(typeEffect, 40) // Faster deletion
          } else {
            // Move to next placeholder
            setPlaceholderIndex((prev) => (prev + 1) % animatedPlaceholders.length)
            isDeleting = false
            currentIndex = 0
          }
        }
      }

      // Start typing after a small delay
      timeoutId = setTimeout(typeEffect, 300)
      
      return () => {
        if (timeoutId) {
          clearTimeout(timeoutId)
        }
      }
    } else if (searchQuery === '') {
      setCurrentText(placeholder)
    }
  }, [placeholderIndex, animatedPlaceholders, placeholder, searchQuery])

  useEffect(() => {
    setCurrentPlaceholder(currentText)
  }, [currentText])

  const handleSearch = (e) => {
    e.preventDefault()
    if (onSearch) {
      onSearch(searchQuery)
    }
  }

  const handleVoiceSearch = () => {
    // Voice search implementation would go here
    console.log('Voice search activated')
  }

  const sizeClasses = {
    sm: "h-8",
    default: "h-12", 
    lg: "h-16"
  }

  const paddingClasses = {
    sm: "pl-4 pr-20",
    default: "pl-4 pr-20", 
    lg: "pl-6 pr-24"
  }

  const fontClasses = {
    sm: "text-sm",
    default: "text-base", 
    lg: "text-2xl"
  }

  return (
    <form onSubmit={handleSearch} className={`relative ${className}`}>
      <div className="relative flex">
        <Input
          type="text"
          placeholder={currentPlaceholder}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={`${paddingClasses[size]} ${sizeClasses[size]} ${fontClasses[size]} rounded-full transition-all duration-300 placeholder:font-medium`}
        />
        <div className="absolute right-1 top-1/2 -translate-y-1/2 flex gap-1">
          {showVoiceSearch && (
            <Button
              type="button"
              size={size === 'lg' ? 'default' : 'sm'}
              variant="ghost"
              onClick={handleVoiceSearch}
              className={`${size === 'lg' ? 'h-12 w-12 p-0' : 'h-8 w-8 p-0'}`}
            >
              <Mic className={size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'} />
            </Button>
          )}
          <Button
            type="submit"
            size={size === 'lg' ? 'default' : 'sm'}
            className={`${size === 'lg' ? 'h-12 px-4 rounded-full' : 'h-8 px-3'}`}
          >
            <Search className={size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'} />
          </Button>
        </div>
      </div>
    </form>
  )
}

export default SearchBar