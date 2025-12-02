import { PieChart, Smartphone, ScanLine, Users } from 'lucide-react';

export default function Personal() {
  const features = [
    {
      icon: PieChart,
      title: 'Expense Tracking',
      description: 'Every payment categorized automatically. Know exactly where your money goes without manual entry.',
      color: 'from-purple-50 to-pink-50',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
    },
    {
      icon: Smartphone,
      title: 'Simplified USSD',
      description: 'Replace long codes with a user-friendly UI. Make mobile payments feel modern and effortless.',
      color: 'from-blue-50 to-cyan-50',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
    },
    {
      icon: ScanLine,
      title: 'Scan-to-Pay',
      description: 'Pay instantly at any Manager shop. No need to type numbers or remember codes.',
      color: 'from-green-50 to-emerald-50',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
    },
    {
      icon: Users,
      title: 'Quick Contacts',
      description: 'Send money faster using your contact list. No more typing phone numbers every time.',
      color: 'from-orange-50 to-amber-50',
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600',
    },
  ];

  return (
    <section id="personal" className="relative py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block px-4 py-2 bg-purple-50 rounded-full mb-6">
            <span className="text-sm font-semibold text-purple-600 tracking-wide uppercase">
              For Clients
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Track Your Expenses<br />
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Sequencify.
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed font-light">
            Simplify how you pay and know exactly where your money goes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 border border-gray-100 hover:border-purple-200 hover:shadow-2xl transition-all duration-300"
            >
              <div className={`bg-gradient-to-br ${feature.color} rounded-2xl p-6 mb-6 border border-gray-100`}>
                <div className={`w-14 h-14 ${feature.iconBg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`w-7 h-7 ${feature.iconColor}`} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-5"></div>
            <div className="relative z-10">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Ready for smarter spending?
              </h3>
              <p className="text-xl text-purple-100 mb-8">
                Download Sequencify and take control of your finances.
              </p>
              <button className="px-10 py-5 bg-white text-purple-600 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                Get Started Free
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
