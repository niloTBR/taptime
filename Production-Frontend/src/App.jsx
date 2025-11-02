import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HomePage from '@/pages/HomePage'
import BrowsePage from '@/pages/BrowsePage'
import AboutPage from '@/pages/AboutPage'
import ContactPage from '@/pages/ContactPage'
import JoinExpertPage from '@/pages/JoinExpertPage'
import FAQPage from '@/pages/FAQPage'
import FeedbackPage from '@/pages/FeedbackPage'
import BlogPage from '@/pages/BlogPage'
import HowItWorksPage from '@/pages/HowItWorksPage'
import LoginPage from '@/pages/LoginPage'
import SignupPage from '@/pages/SignupPage'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/browse" element={<BrowsePage />} />
            <Route path="/join-expert" element={<JoinExpertPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/feedback" element={<FeedbackPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App