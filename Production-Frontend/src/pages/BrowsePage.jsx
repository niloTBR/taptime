import { useState } from 'react'
import Container from '@/components/layout/Container'
import Breadcrumb from '@/components/navigation/Breadcrumb'
import SearchBar from '@/components/ui/SearchBar'
import ExpertCard from '@/components/cards/ExpertCard'
import Button from '@/components/ui/Button'
import expertsData from '@/data/experts.json'

const BrowsePage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredExperts, setFilteredExperts] = useState(expertsData.featured)

  const handleSearch = (query) => {
    setSearchQuery(query)
    // Filter experts based on search query
    const filtered = expertsData.featured.filter(expert =>
      expert.name.toLowerCase().includes(query.toLowerCase()) ||
      expert.title.toLowerCase().includes(query.toLowerCase()) ||
      expert.expertise.some(skill => skill.toLowerCase().includes(query.toLowerCase()))
    )
    setFilteredExperts(filtered)
  }

  const breadcrumbItems = [
    { label: 'Browse Experts' }
  ]

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-gray-50 py-8">
        <Container>
          <div className="space-y-4">
            <Breadcrumb items={breadcrumbItems} />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Browse Experts
            </h1>
            <p className="text-lg text-gray-600">
              Find the perfect expert for your needs
            </p>
          </div>
        </Container>
      </section>

      {/* Search and Filters */}
      <section className="py-8">
        <Container>
          <div className="space-y-6">
            {/* Search Bar */}
            <div className="max-w-2xl">
              <SearchBar
                placeholder="Search experts, skills, or industries..."
                onSearch={handleSearch}
                size="lg"
              />
            </div>

            {/* Results Count */}
            <div className="text-sm text-gray-600">
              {filteredExperts.length} expert{filteredExperts.length !== 1 ? 's' : ''} found
            </div>

            {/* Expert Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredExperts.map((expert) => (
                <ExpertCard
                  key={expert.id}
                  expert={expert}
                  showActions={true}
                />
              ))}
            </div>

            {/* No Results */}
            {filteredExperts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-500 mb-4">
                  No experts found matching your search
                </div>
                <Button 
                  variant="outline"
                  onClick={() => {
                    setSearchQuery('')
                    setFilteredExperts(expertsData.featured)
                  }}
                >
                  Clear Search
                </Button>
              </div>
            )}

            {/* Load More */}
            {filteredExperts.length > 0 && (
              <div className="text-center pt-8">
                <Button variant="outline" size="lg" className="px-8">
                  Load More Experts
                </Button>
              </div>
            )}
          </div>
        </Container>
      </section>
    </div>
  )
}

export default BrowsePage