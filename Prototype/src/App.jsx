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
          <Route path="/test" element={<TestPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </Router>
  )
}

export default App
