import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Link } from 'react-router-dom'
import { Mail, Lock, Eye, EyeOff, User, Phone, X } from 'lucide-react'
import { useState } from 'react'

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  })

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match')
      return
    }
    
    if (!formData.agreeToTerms) {
      alert('Please agree to the terms and conditions')
      return
    }
    
    // Handle signup logic here
    console.log('Signup attempt:', formData)
  }

  return (
    <div className="min-h-screen relative flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><defs><linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23f0fdf4" /><stop offset="100%" style="stop-color:%23dcfce7" /></linearGradient></defs><rect width="800" height="600" fill="url(%23bg)" /><circle cx="150" cy="200" r="90" fill="%23a3e635" opacity="0.2" /><circle cx="650" cy="350" r="110" fill="%23fbbf24" opacity="0.15" /></svg>')`
        }}
      />
      
      {/* Modal Card */}
      <div className="relative z-10 w-full max-w-md mx-4">
        <Card className="shadow-2xl border-0 backdrop-blur-sm bg-white/95">
          <CardHeader className="space-y-1 text-center relative">
            <Link to="/" className="absolute right-4 top-4 text-muted-foreground hover:text-foreground">
              <X className="w-5 h-5" />
            </Link>
            <CardTitle className="text-2xl font-bold text-green-600">Create An Account</CardTitle>
            <CardDescription className="text-sm text-muted-foreground">
              Great to see you ! Kindly provide your information to proceed.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-4">
                <Input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Full Name"
                  className="border-gray-200 focus:border-green-500 focus:ring-green-500"
                  value={formData.firstName + ' ' + formData.lastName}
                  onChange={(e) => {
                    const names = e.target.value.split(' ')
                    setFormData(prev => ({
                      ...prev,
                      firstName: names[0] || '',
                      lastName: names.slice(1).join(' ') || ''
                    }))
                  }}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  className="border-gray-200 focus:border-green-500 focus:ring-green-500"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              
              <div className="space-y-2">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="border-gray-200 focus:border-green-500 focus:ring-green-500"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  className="border-gray-200 focus:border-green-500 focus:ring-green-500"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="flex items-start space-x-2 text-sm">
                <input
                  type="checkbox"
                  id="agreeToTerms"
                  name="agreeToTerms"
                  className="mt-1 rounded border-gray-300"
                  checked={formData.agreeToTerms}
                  onChange={handleInputChange}
                  required
                />
                <label htmlFor="agreeToTerms" className="text-gray-600 leading-5">
                  I would like to subscribe to TapTime's product updates and promotional communications.{' '}
                  <Link to="/terms" className="text-green-600 hover:underline">
                    Know more...
                  </Link>
                </label>
              </div>
              
              <div className="flex items-start space-x-2 text-sm">
                <input
                  type="checkbox"
                  className="mt-1 rounded border-gray-300"
                  required
                />
                <label className="text-gray-600 leading-5">
                  By clicking "ACCEPT AND AGREE", you have agreed to TapTime's{' '}
                  <Link to="/terms" className="text-green-600 hover:underline">
                    Terms of Use
                  </Link>,{' '}
                  <Link to="/participation" className="text-green-600 hover:underline">
                    Participation Terms
                  </Link>{' '}
                  and{' '}
                  <Link to="/privacy" className="text-green-600 hover:underline">
                    Privacy Statement
                  </Link>.
                </label>
              </div>

              <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white rounded-lg py-2.5">
                Sign Up
              </Button>
            </form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <Button variant="outline" className="w-full border-gray-200 hover:bg-gray-50">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
              </Button>
              <Button variant="outline" className="w-full border-gray-200 hover:bg-gray-50">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </Button>
              <Button variant="outline" className="w-full border-gray-200 hover:bg-gray-50">
                <svg className="w-5 h-5" fill="#0077B5" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </Button>
            </div>

            <div className="text-center text-sm">
              Already existed user?{' '}
              <Link to="/login" className="text-green-600 hover:underline font-medium">
                Login
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default SignUpPage