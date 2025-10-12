import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import SearchBar from '@/components/common/SearchBar'
import ExpertCard from '@/components/common/ExpertCard'
import SectionTitle from '@/components/common/SectionTitle'
import { Filter, Grid, List, SlidersHorizontal } from 'lucide-react'
import browseData from '@/data/browse.json'

const BrowsePage = () => {
  const { hero, filters, sortOptions, experts, stats } = browseData
  const [selectedCategory, setSelectedCategory] = useState('All Categories')
  const [selectedPriceRange, setSelectedPriceRange] = useState('All Prices')
  const [selectedSort, setSelectedSort] = useState('Recommended')
  const [viewMode, setViewMode] = useState('grid') // 'grid' or 'list'
  const [showFilters, setShowFilters] = useState(false)

  const handleSearch = (query) => {
    console.log('Searching for:', query)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-8">
            <SectionTitle 
              title={hero.title}
              description={hero.subtitle}
              className="mb-8"
            />
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <SearchBar
                placeholder={hero.searchPlaceholder}
                onSearch={handleSearch}
                size="lg"
                className="w-full"
              />
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
              <div className="text-center">
                <div className="text-2xl font-semibold">{stats.totalExperts}</div>
                <div className="text-sm text-muted-foreground">Verified Experts</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-semibold">{stats.averageRating}</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-semibold">{stats.totalSessions}</div>
                <div className="text-sm text-muted-foreground">Sessions Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-semibold">{stats.averageResponse}</div>
                <div className="text-sm text-muted-foreground">Avg Response Time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters & Results */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Filter Controls */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Mobile Filter Toggle */}
            <div className="lg:hidden">
              <Button 
                variant="outline" 
                onClick={() => setShowFilters(!showFilters)}
                className="w-full border-2 border-foreground"
              >
                <SlidersHorizontal className="w-4 h-4 mr-2" />
                Filters & Sort
              </Button>
            </div>

            {/* Sidebar Filters */}
            <div className={`lg:block ${showFilters ? 'block' : 'hidden'} w-full lg:w-64 space-y-6`}>
              <Card className="border-2 border-foreground">
                <CardContent className="p-6 space-y-6">
                  {/* Category Filter */}
                  <div>
                    <h3 className="font-semibold mb-3">Category</h3>
                    <div className="space-y-2">
                      {filters.categories.map((category) => (
                        <button
                          key={category}
                          onClick={() => setSelectedCategory(category)}
                          className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                            selectedCategory === category
                              ? 'bg-foreground text-background'
                              : 'hover:bg-gray-100'
                          }`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Price Range Filter */}
                  <div>
                    <h3 className="font-semibold mb-3">Price Range</h3>
                    <div className="space-y-2">
                      {filters.priceRanges.map((range) => (
                        <button
                          key={range}
                          onClick={() => setSelectedPriceRange(range)}
                          className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                            selectedPriceRange === range
                              ? 'bg-foreground text-background'
                              : 'hover:bg-gray-100'
                          }`}
                        >
                          {range}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Availability Filter */}
                  <div>
                    <h3 className="font-semibold mb-3">Availability</h3>
                    <div className="space-y-2">
                      {filters.availability.map((availability) => (
                        <div key={availability} className="flex items-center space-x-2">
                          <input type="checkbox" id={availability} className="rounded" />
                          <label htmlFor={availability} className="text-sm cursor-pointer">
                            {availability}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Results Area */}
            <div className="flex-1 space-y-6">
              {/* Results Header */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h2 className="text-xl font-semibold">
                    {experts.length} experts found
                  </h2>
                  <p className="text-muted-foreground">
                    Showing results for "{selectedCategory}"
                  </p>
                </div>
                
                <div className="flex items-center gap-4">
                  {/* Sort Dropdown */}
                  <select 
                    value={selectedSort}
                    onChange={(e) => setSelectedSort(e.target.value)}
                    className="px-4 py-2 border border-foreground rounded-lg text-sm"
                  >
                    {sortOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>

                  {/* View Mode Toggle */}
                  <div className="hidden sm:flex border border-foreground rounded-lg">
                    <Button
                      variant={viewMode === 'grid' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setViewMode('grid')}
                      className="rounded-r-none"
                    >
                      <Grid className="w-4 h-4" />
                    </Button>
                    <Button
                      variant={viewMode === 'list' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setViewMode('list')}
                      className="rounded-l-none"
                    >
                      <List className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Expert Results */}
              <div className={viewMode === 'grid' 
                ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
                : "space-y-4"
              }>
                {experts.map((expert) => (
                  <ExpertCard
                    key={expert.id}
                    expert={expert}
                    showActions={true}
                    className={viewMode === 'list' ? 'max-w-none' : ''}
                  />
                ))}
              </div>

              {/* Load More */}
              <div className="text-center pt-8">
                <Button size="lg" variant="outline" className="rounded-full px-8 border-2 border-foreground">
                  Load More Experts
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BrowsePage