import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from '@/components/layout/Layout'
import HomePage from '@/pages/HomePage'
import BrowsePage from '@/pages/BrowsePage'
import JourneyPage from '@/pages/JourneyPage'
import JoinExpertPage from '@/pages/JoinExpertPage'
import ExpertProfilePage from '@/pages/ExpertProfilePage'
import BookingPage from '@/pages/BookingPage'
import LoginPage from '@/pages/LoginPage'
import SignUpPage from '@/pages/SignUpPage'
import AboutPage from '@/pages/AboutPage'
import CareersPage from '@/pages/CareersPage'
import BlogPage from '@/pages/BlogPage'
import PressPage from '@/pages/PressPage'
import HelpPage from '@/pages/HelpPage'
import SafetyPage from '@/pages/SafetyPage'
import GuidelinesPage from '@/pages/GuidelinesPage'
import CommunityPage from '@/pages/CommunityPage'
import PrivacyPage from '@/pages/PrivacyPage'
import TermsPage from '@/pages/TermsPage'
import TestPage from '@/pages/TestPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/browse" element={<BrowsePage />} />
          <Route path="/journey" element={<JourneyPage />} />
          <Route path="/join-expert" element={<JoinExpertPage />} />
          <Route path="/expert/:id" element={<ExpertProfilePage />} />
          <Route path="/book/:expertId" element={<BookingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/press" element={<PressPage />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/safety" element={<SafetyPage />} />
          <Route path="/guidelines" element={<GuidelinesPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/test" element={<TestPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </Router>
  )
}

export default App
