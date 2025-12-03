import { ArrowRight } from 'lucide-react';

export default function Company() {
  return (
    <section className="relative bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
            <div className="text-center">
            <div className="inline-flex items-center gap-3 mb-2">

                <img src="/images/logo/sequecifyNew-01.png" alt="Sequencify Logo" className="h-40 w-auto object-contain max-w-[400px]" />
                {/* <span className="text-3xl font-bold text-gray-900">Sequencify</span> */}
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Built by Sequencify.
            </h2>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-12 border border-gray-100 shadow-sm mt-4">
            <p className="text-xl text-gray-700 leading-relaxed mb-8 text-center">
              At Sequencify, we believe in order and logic. We build systems that simplify complex processes.
              Manaja is our flagship product designed to bridge the gap between financial transactions and data recording.
            </p>

            <div className="text-center">
              <div className="inline-block bg-white rounded-2xl px-8 py-4 shadow-lg border border-gray-200">
                <p className="text-2xl font-bold text-gray-900">
                  Seamless Sales. <span className="text-blue-600">Synchronized.</span>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all">
              <div className="text-4xl font-bold text-gray-900 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime guaranteed</div>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all">
              <div className="text-4xl font-bold text-gray-900 mb-2">5,000+</div>
              <div className="text-gray-600">Businesses & Partners</div>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all">
              <div className="text-4xl font-bold text-gray-900 mb-2">50k+</div>
              <div className="text-gray-600">Daily transactions</div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Ready to transform your business?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group px-8 py-4 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
                Get Manager
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white text-gray-900 rounded-xl font-medium border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg">
                Get Sequencify
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
