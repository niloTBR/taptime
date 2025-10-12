import { useState } from 'react'
import { Skeleton } from '@/components/ui/skeleton'

const LazyImage = ({ 
  src, 
  alt = '', 
  className = '', 
  skeletonClassName = '',
  ...props 
}) => {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const handleLoad = () => {
    setIsLoading(false)
  }

  const handleError = () => {
    setIsLoading(false)
    setHasError(true)
  }

  if (hasError) {
    return (
      <div 
        className={`bg-muted flex items-center justify-center text-muted-foreground ${className}`}
        {...props}
      >
        <span className="text-sm">Image unavailable</span>
      </div>
    )
  }

  return (
    <div className="relative">
      {isLoading && (
        <Skeleton 
          className={`absolute inset-0 ${skeletonClassName || className}`} 
        />
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        onLoad={handleLoad}
        onError={handleError}
        loading="lazy"
        {...props}
      />
    </div>
  )
}

export default LazyImage