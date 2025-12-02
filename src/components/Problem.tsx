import { Clock, XCircle, CheckCircle } from 'lucide-react';

export default function Problem() {
  return (
    <section id="problem" className="relative py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Stop Doing the Same<br />Work Twice.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl p-10 border-2 border-red-100 shadow-sm hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                <XCircle className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">The Problem</h3>
                <p className="text-gray-600 leading-relaxed">
                  Most shop owners fail to record sales because it's hard to stop serving customers to write in a book.
                </p>
              </div>
            </div>

            <div className="space-y-4 pl-16">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <p className="text-gray-600">Customers waiting while you write</p>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <p className="text-gray-600">Forgotten transactions during busy hours</p>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <p className="text-gray-600">Manual data entry after closing time</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-10 border-2 border-blue-100 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">The Manaja Solution</h3>
                <p className="text-gray-700 leading-relaxed font-medium">
                  We eliminated the gap. When you receive money, the record is created automatically.
                </p>
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur rounded-2xl p-6 border border-blue-200">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full text-white flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <p className="text-gray-800 font-medium">Customer pays</p>
                </div>
                <div className="border-l-2 border-blue-300 ml-4 pl-7 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full text-white flex items-center justify-center font-bold text-sm">
                      2
                    </div>
                    <p className="text-gray-800 font-medium">Sale recorded instantly</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-400 rounded-full text-white flex items-center justify-center font-bold text-sm">
                      3
                    </div>
                    <p className="text-gray-800 font-medium">Stock updated automatically</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-300 rounded-full text-white flex items-center justify-center font-bold text-sm">
                      4
                    </div>
                    <p className="text-gray-800 font-medium">Invoice sent to client</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-blue-900 font-semibold text-lg">
                No extra steps. No forgotten sales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
