const Avatar = ({ 
  src, 
  alt, 
  size = 'md', 
  className = '',
  children,
  ...props 
}) => {
  const sizes = {
    xs: 'w-6 h-6',
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
    '2xl': 'w-20 h-20'
  }
  
  const baseClasses = `relative inline-flex items-center justify-center rounded-full bg-gray-100 ${sizes[size]} ${className}`
  
  return (
    <div className={baseClasses} {...props}>
      {src ? (
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-full rounded-full object-cover"
        />
      ) : (
        <span className="text-gray-500 font-medium text-sm">
          {children || alt?.charAt(0)?.toUpperCase() || '?'}
        </span>
      )}
    </div>
  )
}

export default Avatar