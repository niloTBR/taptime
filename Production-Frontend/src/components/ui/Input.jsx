import { forwardRef } from 'react'

const Input = forwardRef(({ 
  type = 'text',
  placeholder,
  className = '',
  error = false,
  disabled = false,
  ...props 
}, ref) => {
  const baseClasses = 'w-full px-3 py-2 border rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2'
  
  const stateClasses = error 
    ? 'border-red-300 focus:border-red-500 focus:ring-red-500' 
    : 'border-gray-300 focus:border-black focus:ring-gray-500'
    
  const disabledClasses = disabled 
    ? 'bg-gray-50 cursor-not-allowed' 
    : 'bg-white'
  
  const classes = `${baseClasses} ${stateClasses} ${disabledClasses} ${className}`
  
  return (
    <input
      ref={ref}
      type={type}
      placeholder={placeholder}
      className={classes}
      disabled={disabled}
      {...props}
    />
  )
})

Input.displayName = 'Input'

export default Input