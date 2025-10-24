import { useState, useEffect } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Search, Mic, Sparkles } from 'lucide-react'

const SearchBar = ({ 
  placeholder = "Search...", 
  onSearch,
  className = "",
  showVoiceSearch = true,
  showAIMatch = true,
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

  const handleAIMatch = () => {
    // AI matching implementation would go here
    console.log('AI matching activated')
  }

  const sizeClasses = {
    sm: "h-8",
    default: "h-12", 
    lg: "h-16"
  }

  const paddingClasses = {
    sm: "pl-4 pr-32",
    default: "pl-4 pr-32", 
    lg: "pl-6 pr-40"
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
        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-1">
          {showVoiceSearch && (
            <Button
              type="button"
              size={size === 'lg' ? 'default' : 'sm'}
              variant="ghost"
              onClick={handleVoiceSearch}
              className={`${size === 'lg' ? 'h-12 w-12 p-0' : 'h-8 w-8 p-0'} rounded-full bg-gray-100 hover:bg-black hover:text-white transition-colors`}
            >
              <Mic className={size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'} />
            </Button>
          )}
          <Button
            type="submit"
            size={size === 'lg' ? 'default' : 'sm'}
            className={`${size === 'lg' ? 'h-12 px-4 rounded-full' : 'h-8 px-3'} bg-gray-100 hover:bg-black hover:text-white text-black transition-colors`}
          >
            <Search className={size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'} />
          </Button>
          {showAIMatch && (
            <Button
              type="button"
              size={size === 'lg' ? 'default' : 'sm'}
              variant="ghost"
              onClick={handleAIMatch}
              className={`${size === 'lg' ? 'h-12 px-5 rounded-full text-xs' : 'h-8 px-4 text-xs'} bg-gray-100 text-black hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white transition-all group`}
            >
              <Sparkles className={`${size === 'lg' ? 'w-3 h-3 mr-1' : 'w-3 h-3 mr-1'} text-purple-500 group-hover:text-white`} />
              {size === 'lg' ? 'Match with AI' : 'AI'}
            </Button>
          )}
        </div>
      </div>
    </form>
  )
}

export default SearchBar