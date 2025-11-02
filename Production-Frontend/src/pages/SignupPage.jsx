import SignUpForm from '@/components/forms/SignUpForm'
import Container from '@/components/layout/Container'

const SignupPage = () => {
  const handleSignUp = async (formData) => {
    console.log('Sign up data:', formData)
    // Handle sign up logic here
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
  }

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center py-12 px-4">
      <Container size="sm">
        <div className="max-w-md mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Join TapTime
            </h1>
            <p className="text-gray-600">
              Start your journey with expert guidance
            </p>
          </div>

          {/* Sign Up Form */}
          <SignUpForm 
            title="Create Your Account"
            subtitle="Get started with TapTime today"
            onSubmit={handleSignUp}
            className="border-2 border-black"
          />

          {/* Footer */}
          <div className="mt-8 text-center text-xs text-gray-500">
            <p>
              By creating an account, you agree to our{' '}
              <a href="/terms" className="text-black hover:underline">Terms of Service</a>
              {' '}and{' '}
              <a href="/privacy" className="text-black hover:underline">Privacy Policy</a>
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default SignupPage