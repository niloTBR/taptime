import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const FormCard = ({ 
  title, 
  description, 
  children, 
  className = '',
  size = 'default' // 'default' | 'large'
}) => {
  const paddingClasses = {
    default: 'p-8',
    large: 'p-12'
  }

  return (
    <Card className={`border-2 border-foreground ${className}`}>
      {title && (
        <CardHeader className={`${paddingClasses[size]} pb-6`}>
          <CardTitle className="text-2xl text-center">{title}</CardTitle>
          {description && (
            <p className="text-muted-foreground text-center mt-2">{description}</p>
          )}
        </CardHeader>
      )}
      <CardContent className={`${paddingClasses[size]} ${title ? 'pt-0' : ''}`}>
        {children}
      </CardContent>
    </Card>
  )
}

export default FormCard