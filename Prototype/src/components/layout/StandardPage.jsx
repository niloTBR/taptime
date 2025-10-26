import PageHeader from '@/components/common/PageHeader'

const StandardPage = ({ 
  title,
  description,
  breadcrumbs = [],
  actions = null,
  headerSize = 'default',
  children,
  className = ''
}) => {
  return (
    <div className={`min-h-screen bg-background ${className}`}>
      <PageHeader 
        title={title}
        description={description}
        breadcrumbs={breadcrumbs}
        actions={actions}
        size={headerSize}
      />
      {children}
    </div>
  )
}

export default StandardPage