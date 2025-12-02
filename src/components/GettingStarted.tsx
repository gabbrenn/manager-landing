import { CheckCircle } from 'lucide-react';

export default function GettingStarted() {
  const steps = [
    {
      number: '1',
      title: 'Choose Your Manaja Solution',
      description: 'Pick the product that fits your business — Manager for business holders or Sequencify for clients.',
    },
    {
      number: '2',
      title: 'Sign Up & Get Verified',
      description: 'Create your account in minutes and complete verification to start using Manaja securely.',
    },
    {
      number: '3',
      title: 'Setup, Integrate & Train',
      description: 'We integrate your existing apps or data, train your team, and get you ready to go.',
    },
  ];

  return (
    <section className="relative py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-50 rounded-full blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Getting started is<br />
            <span className="text-blue-600">really easy</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed font-light">
            Follow these simple steps to transform your business operations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white rounded-3xl p-8 border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                  {step.number}
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-blue-200 to-transparent"></div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-10 py-5 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
            Check Pricing
          </button>
        </div>
      </div>
    </section>
  );
}

