import { Separator } from '@/components/ui/separator'
import navigationData from '@/data/navigation.json'

const Footer = () => {
  const { footer } = navigationData

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-semibold text-sm">T</span>
              </div>
              <span className="text-xl font-semibold">{footer.brand}</span>
            </div>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              {footer.description}
            </p>
          </div>

          {/* Footer Sections */}
          {footer.sections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-semibold text-sm uppercase tracking-wide">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            {footer.copyright}
          </p>
          
          <div className="flex space-x-6">
            {footer.legal.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer