const GuidelinesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="pt-24 pb-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Expert Guidelines</h1>
          <p className="text-gray-600 mb-8">Guidelines for experts to ensure quality service and professional conduct</p>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Professional Standards</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Maintain professional communication at all times</li>
                <li>Be punctual and prepared for all sessions</li>
                <li>Provide honest and constructive feedback</li>
                <li>Respect client confidentiality</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Session Quality</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Come prepared with relevant materials and insights</li>
                <li>Focus on client's specific needs and goals</li>
                <li>Provide actionable advice and next steps</li>
                <li>Follow up when appropriate</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Platform Policies</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Keep all interactions within the TapTime platform</li>
                <li>Honor cancellation and refund policies</li>
                <li>Update availability and profile information regularly</li>
                <li>Report any issues or concerns promptly</li>
              </ul>
            </section>
          </div>
        </div>
      </section>
    </div>
  )
}

export default GuidelinesPage