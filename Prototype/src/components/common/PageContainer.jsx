const PageContainer = ({ 
  children, 
  size = 'default', // 'default' | 'narrow' | 'wide'
  className = '' 
}) => {
  const sizeClasses = {
    narrow: 'max-w-4xl',
    default: 'max-w-5xl', 
    wide: 'max-w-6xl'
  }

  return (
    <div className={`container mx-auto ${sizeClasses[size]} px-4 ${className}`}>
      {children}
    </div>
  )
}

export default PageContainer