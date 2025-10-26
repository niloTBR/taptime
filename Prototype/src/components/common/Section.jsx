const Section = ({ 
  children, 
  className = '', 
  background = 'default', // 'default' | 'muted' | 'card'
  spacing = 'default' // 'tight' | 'default' | 'loose'
}) => {
  const backgroundClasses = {
    default: 'bg-background',
    muted: 'bg-muted/30',
    card: 'bg-card'
  }

  const spacingClasses = {
    tight: 'py-12',
    default: 'py-20', 
    loose: 'py-24'
  }

  return (
    <section className={`${spacingClasses[spacing]} ${backgroundClasses[background]} px-4 ${className}`}>
      {children}
    </section>
  )
}

export default Section