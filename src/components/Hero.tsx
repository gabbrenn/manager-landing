import { ArrowRight, Smartphone, BarChart3, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50 opacity-60"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in">

            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 tracking-tight leading-[1.1]">
              Stop writing,<br />
              <span className="text-blue-600">Start managing.</span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-xl font-light">
              The first app that records your sales, updates your stock, and invoices your client at the exact moment you get paid.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group px-8 py-4 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105">
                Get Manager
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

            </div>

            <div className="flex items-center gap-8 pt-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-blue-600" />
                <span>Instant sync</span>
              </div>
              <div className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-blue-600" />
                <span>Real-time analytics</span>
              </div>
            </div>
          </div>

          <div className="relative lg:pl-12 animate-slide-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-purple-100 rounded-3xl blur-3xl opacity-30"></div>

              <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                        <Smartphone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900">Dashboard</div>
                        <div className="text-xs text-gray-500">Live overview</div>
                      </div>
                    </div>
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
                      <div className="text-sm text-gray-600 mb-2">Today's Revenue</div>
                      <div className="text-4xl font-bold text-gray-900">$12,450</div>
                      <div className="text-sm text-green-600 mt-2">+18% from yesterday</div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                        <div className="text-xs text-gray-500 mb-2">Sales</div>
                        <div className="text-2xl font-bold text-gray-900">87</div>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                        <div className="text-xs text-gray-500 mb-2">Items Sold</div>
                        <div className="text-2xl font-bold text-gray-900">234</div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-100 hover:border-blue-200 transition-colors">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg"></div>
                            <div className="text-sm font-medium text-gray-700">Transaction #{i}</div>
                          </div>
                          <div className="text-sm font-semibold text-gray-900">$120</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 border border-gray-100 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">✓</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Payment Received</div>
                    <div className="text-xs text-gray-500">Invoice sent automatically</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
