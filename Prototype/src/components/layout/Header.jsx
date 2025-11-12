import { Button } from '@/components/ui/button'
import { Menu, X, User, ChevronDown } from 'lucide-react'
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import LazyImage from '@/components/common/LazyImage'
import navigationData from '@/data/navigation.json'
import categoriesData from '@/data/categories.json'

const Header = () => {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [megaMenuOpen, setMegaMenuOpen] = useState(false)
  const [hoveredCategory, setHoveredCategory] = useState(null)
  const { header } = navigationData
  const { categories } = categoriesData


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="border-b bg-background/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/taptime-logo.png" 
              alt="TapTime" 
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {header.links.map((link) => {
              // Special handling for Browse Experts with mega menu
              if (link.label === "Browse Experts") {
                return (
                  <div 
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => {
                      setMegaMenuOpen(true)
                      setHoveredCategory(null) // No default - show on hover
                    }}
                    onMouseLeave={() => {
                      // Don't immediately close - let the mega menu handle its own mouse leave
                    }}
                  >
                    <Link
                      to={link.href}
                      className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${
                        link.active ? 'text-primary' : 'text-muted-foreground'
                      }`}
                    >
                      {link.label}
                      <ChevronDown className="w-4 h-4" />
                    </Link>
                    
                    {/* Mega Menu */}
                    {megaMenuOpen && (
                      <div 
                        className="mega-menu-container absolute top-full left-1/2 transform -translate-x-1/2 w-screen max-w-4xl bg-white border border-gray-200 shadow-xl rounded-lg mt-2 p-6 z-50"
                        onMouseEnter={() => {
                          // Keep menu open when hovering over the menu itself
                          setMegaMenuOpen(true)
                        }}
                        onMouseLeave={() => {
                          setMegaMenuOpen(false)
                          // Always clear hovered category when leaving entire menu
                          setHoveredCategory(null)
                        }}
                      >
                        <div className="grid grid-cols-3 gap-6">
                          {/* Categories Column */}
                          <div className="space-y-2">
                            <h3 className="text-sm font-semibold text-gray-900 mb-3">Expertise</h3>
                            {categories.map((category) => (
                              <Link
                                key={category.name}
                                to={category.href}
                                className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md transition-colors"
                                onMouseEnter={() => setHoveredCategory(category)}
                                onClick={() => {
                                  // Always close menu when clicking category links
                                  setMegaMenuOpen(false)
                                  setHoveredCategory(null)
                                }}
                              >
                                {category.name}
                              </Link>
                            ))}
                          </div>
                          
                          {/* Subcategories Column */}
                          <div 
                            className="space-y-2 min-h-[300px]"
                            onMouseEnter={() => {
                              // Keep current hovered category when entering subcategories
                            }}
                          >
                            {hoveredCategory ? (
                              <>
                                <h3 className="text-sm font-semibold text-gray-900 mb-3">
                                  {hoveredCategory.name}
                                </h3>
                                {hoveredCategory.subcategories.map((subcategory) => (
                                  <Link
                                    key={subcategory.name}
                                    to={subcategory.href}
                                    className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded-md transition-colors"
                                    onClick={() => {
                                      setMegaMenuOpen(false)
                                      setHoveredCategory(null)
                                    }}
                                  >
                                    {subcategory.name}
                                  </Link>
                                ))}
                              </>
                            ) : (
                              <div className="flex items-center justify-center h-full">
                                <p className="text-sm text-gray-500 text-center">
                                  Hover over an expertise area<br />
                                  to see specializations
                                </p>
                              </div>
                            )}
                          </div>
                          
                          {/* Featured/Popular Column */}
                          <div className="space-y-4">
                            <h3 className="text-sm font-semibold text-gray-900">Popular</h3>
                            <div className="space-y-3">
                              <div className="p-3 bg-gray-50 rounded-md">
                                <h4 className="font-medium text-sm text-gray-900">Top Experts</h4>
                                <p className="text-xs text-gray-600 mt-1">Browse our highest-rated experts</p>
                                <Link 
                                  to="/browse?level=top" 
                                  className="text-xs text-blue-600 hover:text-blue-700 mt-2 block"
                                  onClick={() => {
                                    setMegaMenuOpen(false)
                                    setHoveredCategory(null)
                                  }}
                                >
                                  View all →
                                </Link>
                              </div>
                              <div className="p-3 bg-gray-50 rounded-md">
                                <h4 className="font-medium text-sm text-gray-900">New Experts</h4>
                                <p className="text-xs text-gray-600 mt-1">Discover recently joined experts</p>
                                <Link 
                                  to="/browse?sort=recent" 
                                  className="text-xs text-blue-600 hover:text-blue-700 mt-2 block"
                                  onClick={() => {
                                    setMegaMenuOpen(false)
                                    setHoveredCategory(null)
                                  }}
                                >
                                  View all →
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )
              }
              
              // Regular navigation links
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    link.active
                      ? 'text-primary'
                      : 'text-muted-foreground'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-3">
            {header.actions.map((action, index) => (
              <Button
                key={index}
                variant={action.variant}
                size="sm"
                asChild
              >
                <Link to={action.href}>{action.label}</Link>
              </Button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4">
            <nav className="flex flex-col space-y-4">
              {header.links.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    link.active
                      ? 'text-primary'
                      : 'text-muted-foreground'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              
              <div className="flex flex-col space-y-2 pt-4 border-t">
                {header.actions.map((action, index) => (
                  <Button
                    key={index}
                    variant={action.variant}
                    size="sm"
                    className="justify-start"
                    asChild
                  >
                    <Link to={action.href}>{action.label}</Link>
                  </Button>
                ))}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header