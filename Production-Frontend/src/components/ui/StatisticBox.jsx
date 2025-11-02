const StatisticBox = ({ 
  icon,
  value,
  label,
  description,
  className = ''
}) => {
  return (
    <div className={`text-center space-y-3 ${className}`}>
      {/* Icon */}
      {icon && (
        <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center mx-auto">
          {icon}
        </div>
      )}
      
      {/* Value */}
      <div className="text-3xl md:text-4xl font-bold text-gray-900">
        {value}
      </div>
      
      {/* Label */}
      <div className="text-sm font-medium text-gray-900">
        {label}
      </div>
      
      {/* Description */}
      {description && (
        <div className="text-xs text-gray-600">
          {description}
        </div>
      )}
    </div>
  )
}

export default StatisticBox