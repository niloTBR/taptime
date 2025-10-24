import { useState, useMemo } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { Checkbox } from '@/components/ui/checkbox'
import SearchBar from '@/components/common/SearchBar'
import ExpertCard from '@/components/common/ExpertCard'
import SectionTitle from '@/components/common/SectionTitle'
import { 
  Filter, 
  Grid, 
  List, 
  SlidersHorizontal, 
  Star, 
  ChevronDown, 
  ChevronUp,
  Users,
  Clock,
  MapPin,
  ArrowUpDown,
  Globe,
  Briefcase,
  Award,
  Languages,
  Crown,
  HeartHandshake,
  Heart,
  DollarSign,
  Shield
} from 'lucide-react'
import { Link } from 'react-router-dom'
import browseData from '@/data/browse.json'

const BrowsePage = () => {
  const { hero, filters, sortOptions, experts, stats } = browseData
  
  // State management
  const [selectedCategory, setSelectedCategory] = useState('All Categories')
  const [selectedPriceRange, setSelectedPriceRange] = useState('All Prices')
  const [selectedSort, setSelectedSort] = useState('Recommended')
  const [viewMode, setViewMode] = useState('grid') // 'grid' or 'table'
  const [showFilters, setShowFilters] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [showTopRated, setShowTopRated] = useState(false)
  const [collapsedSections, setCollapsedSections] = useState({})
  const [availabilityFilters, setAvailabilityFilters] = useState([])
  const [selectedGenders, setSelectedGenders] = useState([])
  const [selectedCountries, setSelectedCountries] = useState([])
  const [selectedIndustries, setSelectedIndustries] = useState([])
  const [selectedLanguages, setSelectedLanguages] = useState([])
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([])
  const [showTopExpertsOnly, setShowTopExpertsOnly] = useState(false)
  const [showVerifiedOnly, setShowVerifiedOnly] = useState(false)
  const [openSection, setOpenSection] = useState('price')

  // Filter functions
  const filteredExperts = useMemo(() => {
    let filtered = experts

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(expert => 
        expert.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        expert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        expert.expertise.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    }

    // Category filter
    if (selectedCategory !== 'All Categories') {
      filtered = filtered.filter(expert => 
        expert.category === selectedCategory
      )
    }

    // Price range filter
    if (selectedPriceRanges.length > 0) {
      filtered = filtered.filter(expert => {
        const price = parseInt(expert.rate.replace(/[^0-9]/g, ''))
        return selectedPriceRanges.some(range => {
          switch (range) {
            case 'Under $100':
              return price < 100
            case '$100 - $300':
              return price >= 100 && price <= 300
            case '$300 - $500':
              return price >= 300 && price <= 500
            case '$500+':
              return price >= 500
            default:
              return false
          }
        })
      })
    }

    // Country filter
    if (selectedCountries.length > 0) {
      filtered = filtered.filter(expert => 
        selectedCountries.includes(expert.country)
      )
    }

    // Industry filter
    if (selectedIndustries.length > 0) {
      filtered = filtered.filter(expert => 
        selectedIndustries.includes(expert.industry)
      )
    }

    // Language filter
    if (selectedLanguages.length > 0) {
      filtered = filtered.filter(expert => 
        expert.languages && expert.languages.some(lang => selectedLanguages.includes(lang))
      )
    }

    // Verified only filter
    if (showVerifiedOnly) {
      filtered = filtered.filter(expert => expert.badge === 'Verified')
    }

    // Top rated filter
    if (showTopRated) {
      filtered = filtered.filter(expert => expert.rating >= 4.8)
    }

    // Availability filters
    if (availabilityFilters.length > 0) {
      filtered = filtered.filter(expert => 
        availabilityFilters.some(filter => expert.availability?.includes(filter))
      )
    }

    // Sort
    switch (selectedSort) {
      case 'Price: Low to High':
        filtered.sort((a, b) => {
          const priceA = parseInt(a.rate.replace(/[^0-9]/g, ''))
          const priceB = parseInt(b.rate.replace(/[^0-9]/g, ''))
          return priceA - priceB
        })
        break
      case 'Price: High to Low':
        filtered.sort((a, b) => {
          const priceA = parseInt(a.rate.replace(/[^0-9]/g, ''))
          const priceB = parseInt(b.rate.replace(/[^0-9]/g, ''))
          return priceB - priceA
        })
        break
      case 'Highest Rated':
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case 'Most Sessions':
        filtered.sort((a, b) => (b.sessionCount || 0) - (a.sessionCount || 0))
        break
      default: // Recommended
        // Keep original order for recommended
        break
    }

    return filtered
  }, [experts, searchQuery, selectedCategory, selectedPriceRange, selectedSort, showTopRated, availabilityFilters, selectedPriceRanges, selectedCountries, selectedIndustries, selectedLanguages, showTopExpertsOnly, showVerifiedOnly])

  const handleSearch = (query) => {
    setSearchQuery(query)
  }

  const toggleSection = (section) => {
    setCollapsedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const handleAvailabilityChange = (availability) => {
    setAvailabilityFilters(prev => 
      prev.includes(availability)
        ? prev.filter(a => a !== availability)
        : [...prev, availability]
    )
  }

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()
  }

  const getCategoryFromExpertise = (expertise) => {
    const categoryMap = {
      'Tech Strategy': 'Technology',
      'Startup Scaling': 'Business',
      'E-commerce': 'Business',
      'Brand Building': 'Marketing',
      'Product Strategy': 'Technology',
      'Tech Leadership': 'Technology',
      'Marketing Strategy': 'Marketing',
      'Growth Hacking': 'Marketing',
      'UX Design': 'Design',
      'Design Systems': 'Design',
      'Financial Planning': 'Finance',
      'Fundraising': 'Finance'
    }
    return categoryMap[expertise] || 'Business'
  }

  const ExpertTableRow = ({ expert, index }) => (
    <tr className="border-b hover:bg-gray-50 cursor-pointer" onClick={() => window.location.href = `/expert/${expert.id}`}>
      <td className="p-4">
        <div className="flex items-center gap-4">
          {/* Square Photo */}
          <div className="relative">
            <Avatar className="w-16 h-16 rounded-lg">
              <AvatarImage src={expert.image} alt={expert.name} className="object-cover" />
              <AvatarFallback className="text-lg font-medium rounded-lg">{getInitials(expert.name)}</AvatarFallback>
            </Avatar>
            {/* Category Badge - Top Right */}
            {expert.expertise && expert.expertise.length > 0 && (
              <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                <Badge variant="secondary" className="bg-white text-black text-xs px-2 py-1 shadow-sm">
                  {getCategoryFromExpertise(expert.expertise[0])}
                </Badge>
              </div>
            )}
            {/* Verified Badge on Photo */}
            {expert.badge === 'Verified' && (
              <div className="absolute -bottom-1 -right-1 w-5 h-5 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5">
                  <g>
                    <path d="M12 1.5c-.5 0-1 .2-1.4.6L9.2 3.5c-.3.3-.7.4-1.1.4H6.5c-.8 0-1.5.7-1.5 1.5v1.6c0 .4-.1.8-.4 1.1L3.2 9.5c-.8.8-.8 2 0 2.8l1.4 1.4c.3.3.4.7.4 1.1V16.5c0 .8.7 1.5 1.5 1.5h1.6c.4 0 .8.1 1.1.4l1.4 1.4c.8.8 2 .8 2.8 0l1.4-1.4c.3-.3.7-.4 1.1-.4h1.6c.8 0 1.5-.7 1.5-1.5v-1.6c0-.4.1-.8.4-1.1l1.4-1.4c.8-.8.8-2 0-2.8l-1.4-1.4c-.3-.3-.4-.7-.4-1.1V5.5c0-.8-.7-1.5-1.5-1.5h-1.6c-.4 0-.8-.1-1.1-.4L13.4 2.1c-.4-.4-.9-.6-1.4-.6z" fill="#1d9bf0"/>
                    <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                </svg>
              </div>
            )}
          </div>
          
          {/* Name and Title */}
          <div className="flex-1 space-y-3">
            {/* Rating and Badge Row - First */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-black text-black" />
                  <span className="text-sm font-medium">{expert.rating}</span>
                </div>
                <span className="text-xs text-muted-foreground">
                  ({expert.reviewCount})
                </span>
              </div>
              {expert.badge === 'Top Expert' && (
                <Badge variant="outline" className="text-xs border-yellow-500 text-yellow-600 bg-yellow-50 px-2 py-1 rounded-full inline-flex items-center gap-1">
                  <Crown className="w-3 h-3" />
                  Top Expert
                </Badge>
              )}
            </div>
            
            {/* Name and Title */}
            <div>
              <h3 className="font-semibold text-base leading-tight">{expert.name}</h3>
              <p className="text-xs text-muted-foreground mt-2">{expert.title}</p>
            </div>
            
            {/* Bio Description */}
            {expert.bio && (
              <div>
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                  {expert.bio}
                </p>
              </div>
            )}
          </div>
        </div>
      </td>
      
      {/* Expert Level */}
      <td className="p-4">
        {expert.badge === 'Top Expert' && (
          <Badge variant="outline" className="text-xs bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0 px-2 py-1 rounded-full inline-flex items-center gap-1 w-fit">
            <Crown className="w-3 h-3" />
            Top Expert
          </Badge>
        )}
      </td>
      
      {/* Actions */}
      <td className="p-4">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <Button 
              size="sm" 
              className="rounded-full px-4"
              onClick={(e) => {
                e.stopPropagation()
                window.location.href = `/book/${expert.id}`
              }}
            >
              <span className="text-sm font-medium">{expert.rate.split('/')[0]}</span>
              <span className="text-xs opacity-75">/{expert.rate.split('/')[1]}</span>
              <span className="ms-1">Book</span>
            </Button>
            <Button 
              size="sm" 
              variant="outline"
              className="rounded-full w-9 h-9 p-0 border-2 border-foreground"
              onClick={(e) => {
                e.stopPropagation()
                console.log('Add to favorites', expert.name)
              }}
            >
              <Heart className="w-4 h-4" />
            </Button>
          </div>
          
          {/* Charity Donation Indicator */}
          {index === 1 && (
            <div className="flex items-center gap-1">
              <HeartHandshake className="w-4 h-4 text-green-600" />
              <span className="text-xs text-green-600 font-medium">Donating To Charity</span>
            </div>
          )}
        </div>
      </td>
    </tr>
  )

  const ExpertListItem = ({ expert, index }) => (
    <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-200 bg-white cursor-pointer relative" onClick={() => window.location.href = `/expert/${expert.id}`}>
      {/* Top Expert Badge - Top Right */}
      {expert.badge && expert.badge === 'Top Expert' && (
        <div className="absolute top-4 right-4">
          <Badge variant="secondary" className="text-xs bg-black text-white px-2 py-1 rounded-full flex items-center gap-1">
            {index === 0 && <Crown className="w-3 h-3" />}
            Top Expert
          </Badge>
        </div>
      )}

      <div className="flex items-start gap-6">
        {/* Photo Section */}
        <div className="relative flex-shrink-0">
          <Avatar className="w-20 h-20 border-2">
            <AvatarImage src={expert.image} alt={expert.name} />
            <AvatarFallback className="text-lg font-medium">{getInitials(expert.name)}</AvatarFallback>
          </Avatar>
          {/* Verified Badge on Photo */}
          {expert.badge && expert.badge === 'Verified' && (
            <div className="absolute -bottom-1 -right-1 w-5 h-5 flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 24 24" className="w-5 h-5">
                <g>
                  <path d="M12 1.5c-.5 0-1 .2-1.4.6L9.2 3.5c-.3.3-.7.4-1.1.4H6.5c-.8 0-1.5.7-1.5 1.5v1.6c0 .4-.1.8-.4 1.1L3.2 9.5c-.8.8-.8 2 0 2.8l1.4 1.4c.3.3.4.7.4 1.1V16.5c0 .8.7 1.5 1.5 1.5h1.6c.4 0 .8.1 1.1.4l1.4 1.4c.8.8 2 .8 2.8 0l1.4-1.4c.3-.3.7-.4 1.1-.4h1.6c.8 0 1.5-.7 1.5-1.5v-1.6c0-.4.1-.8.4-1.1l1.4-1.4c.8-.8.8-2 0-2.8l-1.4-1.4c-.3-.3-.4-.7-.4-1.1V5.5c0-.8-.7-1.5-1.5-1.5h-1.6c-.4 0-.8-.1-1.1-.4L13.4 2.1c-.4-.4-.9-.6-1.4-.6z" fill="#1d9bf0"/>
                  <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
              </svg>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="flex-1 space-y-3">
          {/* Name and Title */}
          <div>
            <h3 className="font-semibold text-xl leading-tight text-left">{expert.name}</h3>
            <p className="text-sm text-muted-foreground mt-1 text-left">{expert.title}</p>
          </div>
          
          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-black text-black" />
              <span className="text-sm font-medium">{expert.rating}</span>
            </div>
            <span className="text-xs text-muted-foreground">
              ({expert.reviewCount})
            </span>
          </div>

          {/* Charity Donation Indicator */}
          {index === 1 && (
            <div className="flex items-center gap-1">
              <HeartHandshake className="w-4 h-4 text-green-600" />
              <span className="text-xs text-green-600 font-medium">Donating To Charity</span>
            </div>
          )}
        </div>

        {/* Action Section */}
        <div className="flex-shrink-0 flex flex-col items-end gap-3">
          <div className="text-right">
            <div className="font-semibold text-lg">{expert.rate}</div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="w-3 h-3" />
              <span>{expert.responseTime || '< 1 hour'}</span>
            </div>
          </div>
          <div className="flex gap-2">
            <Button 
              size="sm" 
              className="rounded-full px-4"
              onClick={(e) => {
                e.stopPropagation()
                window.location.href = `/book/${expert.id}`
              }}
            >
              Book
            </Button>
            <Button 
              size="sm" 
              variant="outline"
              className="rounded-full w-9 h-9 p-0 border-2 border-foreground"
              onClick={(e) => {
                e.stopPropagation()
                console.log('Add to favorites', expert.name)
              }}
            >
              <Heart className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-background">
      {/* Simple Header */}
      <section className="py-8 px-4 border-b bg-white">
        <div className="container mx-auto max-w-7xl">
          <h1 className="text-2xl font-semibold">Browse Experts</h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-7xl">

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Mobile Filter Toggle */}
            <div className="lg:hidden">
              <Button 
                variant="outline" 
                onClick={() => setShowFilters(!showFilters)}
                className="w-full border-2 border-foreground rounded-full"
              >
                <SlidersHorizontal className="w-4 h-4 mr-2" />
                Filters & Sort
              </Button>
            </div>

            {/* Clean Collapsible Sidebar */}
            <div className={`lg:block ${showFilters ? 'block' : 'hidden'} w-full lg:w-80`}>
              <div className="bg-white rounded-lg border p-4 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Filters</h3>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setSelectedCategory('All Categories')
                      setSelectedPriceRange('All Prices')
                      setShowTopRated(false)
                      setAvailabilityFilters([])
                      setSearchQuery('')
                      setSelectedGenders([])
                      setSelectedCountries([])
                      setSelectedIndustries([])
                      setSelectedLanguages([])
                      setSelectedPriceRanges([])
                      setShowTopExpertsOnly(false)
                      setShowVerifiedOnly(false)
                      setSelectedSort('Recommended')
                      setOpenSection('price')
                    }}
                    className="text-xs"
                  >
                    Clear all
                  </Button>
                </div>

                <div className="space-y-2">
                  {/* Price Range */}
                  <Collapsible open={openSection === 'price'} onOpenChange={() => setOpenSection(openSection === 'price' ? '' : 'price')}>
                    <CollapsibleTrigger className="flex w-full items-center justify-between py-2 font-medium text-sm hover:underline [&[data-state=open]>svg]:rotate-180">
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4" />
                        Price Range
                      </div>
                      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="space-y-2 pt-1 pb-2">
                      {['Under $100', '$100 - $300', '$300 - $500', '$500+'].map((range) => (
                        <div key={range} className="flex items-center space-x-2 pl-6">
                          <Checkbox 
                            id={range}
                            checked={selectedPriceRanges.includes(range)}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setSelectedPriceRanges([...selectedPriceRanges, range])
                              } else {
                                setSelectedPriceRanges(selectedPriceRanges.filter(r => r !== range))
                              }
                            }}
                          />
                          <Label htmlFor={range} className="text-sm font-normal cursor-pointer">
                            {range}
                          </Label>
                        </div>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>

                  <Separator />

                  {/* Expert Level */}
                  <Collapsible open={openSection === 'expert'} onOpenChange={() => setOpenSection(openSection === 'expert' ? '' : 'expert')}>
                    <CollapsibleTrigger className="flex w-full items-center justify-between py-2 font-medium text-sm hover:underline [&[data-state=open]>svg]:rotate-180">
                      <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4" />
                        Expert Level
                      </div>
                      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="space-y-2 pt-1 pb-2">
                      <div className="flex items-center space-x-2 pl-6">
                        <Checkbox 
                          id="topExperts"
                          checked={showTopExpertsOnly}
                          onCheckedChange={setShowTopExpertsOnly}
                        />
                        <Label htmlFor="topExperts" className="text-sm font-normal cursor-pointer flex items-center gap-1">
                          <Crown className="w-3 h-3" />
                          Top Experts Only
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 pl-6">
                        <Checkbox 
                          id="verifiedExperts"
                          checked={showVerifiedOnly}
                          onCheckedChange={setShowVerifiedOnly}
                        />
                        <Label htmlFor="verifiedExperts" className="text-sm font-normal cursor-pointer flex items-center gap-1">
                          <Award className="w-3 h-3" />
                          Verified Only
                        </Label>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>

                  <Separator />

                  {/* Location */}
                  <Collapsible open={openSection === 'location'} onOpenChange={() => setOpenSection(openSection === 'location' ? '' : 'location')}>
                    <CollapsibleTrigger className="flex w-full items-center justify-between py-2 font-medium text-sm hover:underline [&[data-state=open]>svg]:rotate-180">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        Location
                      </div>
                      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="space-y-2 pt-1 pb-2 max-h-64 overflow-y-auto">
                      {['United States', 'United Kingdom', 'Canada', 'Australia', 'Germany', 'France', 'Spain', 'Italy', 'Netherlands', 'Switzerland', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Belgium', 'Austria', 'Portugal', 'Ireland', 'New Zealand', 'Japan', 'South Korea', 'Singapore', 'Hong Kong', 'India', 'Israel', 'United Arab Emirates', 'Saudi Arabia', 'Brazil', 'Mexico', 'Argentina', 'Chile', 'Colombia', 'South Africa', 'Nigeria', 'Kenya', 'Egypt', 'Morocco', 'Turkey', 'Poland', 'Czech Republic', 'Hungary', 'Romania', 'Greece', 'Croatia', 'Estonia', 'Latvia', 'Lithuania'].map((country) => (
                        <div key={country} className="flex items-center space-x-2 pl-6">
                          <Checkbox 
                            id={country}
                            checked={selectedCountries.includes(country)}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setSelectedCountries([...selectedCountries, country])
                              } else {
                                setSelectedCountries(selectedCountries.filter(c => c !== country))
                              }
                            }}
                          />
                          <Label htmlFor={country} className="text-sm font-normal cursor-pointer">
                            {country}
                          </Label>
                        </div>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>

                  <Separator />

                  {/* Industry */}
                  <Collapsible open={openSection === 'industry'} onOpenChange={() => setOpenSection(openSection === 'industry' ? '' : 'industry')}>
                    <CollapsibleTrigger className="flex w-full items-center justify-between py-2 font-medium text-sm hover:underline [&[data-state=open]>svg]:rotate-180">
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        Industry
                      </div>
                      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="space-y-2 pt-1 pb-2">
                      {['Technology', 'Finance', 'Healthcare', 'Marketing', 'Design', 'Business'].map((industry) => (
                        <div key={industry} className="flex items-center space-x-2 pl-6">
                          <Checkbox 
                            id={industry}
                            checked={selectedIndustries.includes(industry)}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setSelectedIndustries([...selectedIndustries, industry])
                              } else {
                                setSelectedIndustries(selectedIndustries.filter(i => i !== industry))
                              }
                            }}
                          />
                          <Label htmlFor={industry} className="text-sm font-normal cursor-pointer">
                            {industry}
                          </Label>
                        </div>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>

                  <Separator />

                  {/* Language */}
                  <Collapsible open={openSection === 'language'} onOpenChange={() => setOpenSection(openSection === 'language' ? '' : 'language')}>
                    <CollapsibleTrigger className="flex w-full items-center justify-between py-2 font-medium text-sm hover:underline [&[data-state=open]>svg]:rotate-180">
                      <div className="flex items-center gap-2">
                        <Languages className="w-4 h-4" />
                        Language
                      </div>
                      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="space-y-2 pt-1 pb-2">
                      {['English', 'Spanish', 'French', 'German', 'Mandarin', 'Portuguese'].map((language) => (
                        <div key={language} className="flex items-center space-x-2 pl-6">
                          <Checkbox 
                            id={language}
                            checked={selectedLanguages.includes(language)}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setSelectedLanguages([...selectedLanguages, language])
                              } else {
                                setSelectedLanguages(selectedLanguages.filter(l => l !== language))
                              }
                            }}
                          />
                          <Label htmlFor={language} className="text-sm font-normal cursor-pointer">
                            {language}
                          </Label>
                        </div>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              </div>
            </div>

            {/* Results Area */}
            <div className="flex-1 space-y-6">
              {/* Search and Results Header */}
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                {/* Search Bar */}
                <div className="flex-1 max-w-xl">
                  <SearchBar
                    placeholder="I'm looking for..."
                    animatedPlaceholders={[
                      "I'm looking for startup advice...",
                      "I'm looking for marketing strategy...",
                      "I'm looking for design feedback...",
                      "I'm looking for tech mentorship..."
                    ]}
                    onSearch={handleSearch}
                    size="lg"
                    className="w-full"
                  />
                </div>
                
                {/* Sort and View Controls */}
                <div className="flex items-center justify-end gap-4 h-12">
                  {/* Sort By */}
                  <div className="flex items-center gap-3">
                    <Select value={selectedSort} onValueChange={setSelectedSort}>
                      <SelectTrigger className="w-48">
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Recommended">Recommended</SelectItem>
                        <SelectItem value="Price: High to Low">Price: High to Low</SelectItem>
                        <SelectItem value="Price: Low to High">Price: Low to High</SelectItem>
                        <SelectItem value="Highest Rated">Highest Rated</SelectItem>
                        <SelectItem value="Most Sessions">Most Sessions</SelectItem>
                      </SelectContent>
                    </Select>

                    {/* Enhanced View Mode Toggle */}
                    <div className="hidden sm:flex border border-foreground rounded-full h-10">
                      <Button
                        variant={viewMode === 'grid' ? 'default' : 'ghost'}
                        size="sm"
                        onClick={() => setViewMode('grid')}
                        className="rounded-l-full rounded-r-none h-full"
                      >
                        <Grid className="w-4 h-4" />
                      </Button>
                      <Button
                        variant={viewMode === 'table' ? 'default' : 'ghost'}
                        size="sm"
                        onClick={() => setViewMode('table')}
                        className="rounded-r-full rounded-l-none h-full"
                      >
                        <SlidersHorizontal className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Results Count */}
              <div className="text-sm text-muted-foreground mb-4">
                {filteredExperts.length} expert{filteredExperts.length !== 1 ? 's' : ''} found
              </div>

              {/* Results Display */}
              {viewMode === 'table' ? (
                <div className="overflow-x-auto">
                  <table className="w-full bg-white border border-gray-200 rounded-lg">
                    <tbody>
                      {filteredExperts.map((expert, index) => (
                        <ExpertTableRow key={expert.id} expert={expert} index={index} />
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredExperts.map((expert) => (
                    <ExpertCard
                      key={expert.id}
                      expert={expert}
                      showActions={true}
                    />
                  ))}
                </div>
              )}

              {/* No Results */}
              {filteredExperts.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-muted-foreground mb-4">No experts found matching your criteria</div>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setSearchQuery('')
                      setSelectedCategory('All Categories')
                      setSelectedPriceRange('All Prices')
                      setShowTopRated(false)
                      setAvailabilityFilters([])
                    }}
                    className="rounded-full px-8 border-2 border-foreground"
                  >
                    Clear Filters
                  </Button>
                </div>
              )}

              {/* Load More */}
              {filteredExperts.length > 0 && (
                <div className="text-center pt-8">
                  <Button size="lg" variant="outline" className="rounded-full px-8 border-2 border-foreground">
                    Load More Experts
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BrowsePage