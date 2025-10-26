import { Separator } from '@/components/ui/separator'
import { Twitter, Linkedin, Instagram, Facebook } from 'lucide-react'
import navigationData from '@/data/navigation.json'

const Footer = () => {
  const { footer } = navigationData

  return (
    <footer className="bg-muted text-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="flex items-center">
              <img 
                src="/taptime-logo.png" 
                alt="TapTime" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              {footer.description}
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4 pt-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Footer Sections */}
          {footer.sections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-semibold text-foreground text-lg">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
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
          <p className="text-muted-foreground">
            {footer.copyright}
          </p>
          
          <div className="flex space-x-6">
            {footer.legal.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors underline"
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