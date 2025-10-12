const SectionTitle = ({ miniTitle, title, description, className = '' }) => {
  return (
    <div className={`text-center space-y-4 ${className}`}>
      {miniTitle && (
        <div className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
          {miniTitle}
        </div>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionTitle