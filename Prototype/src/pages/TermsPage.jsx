const TermsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="pt-24 pb-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Terms of Service</h1>
          <p className="text-gray-600 mb-8">Last updated: January 1, 2025</p>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Acceptance of Terms</h2>
              <p className="text-gray-700 mb-4">
                By accessing and using TapTime, you accept and agree to be bound by the terms 
                and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Service Description</h2>
              <p className="text-gray-700 mb-4">
                TapTime is a platform that connects individuals seeking professional guidance 
                with verified industry experts for mentorship and consultation sessions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">User Responsibilities</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Provide accurate and truthful information</li>
                <li>Maintain the confidentiality of your account</li>
                <li>Use the platform respectfully and professionally</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Payment Terms</h2>
              <p className="text-gray-700 mb-4">
                Payment for expert sessions is due at the time of booking. Cancellation policies 
                vary by expert and are clearly displayed during the booking process.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                TapTime facilitates connections between users and experts but is not responsible 
                for the content, quality, or outcome of expert sessions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-700">
                For questions about these Terms of Service, please contact us at legal@taptime.com
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TermsPage