export default function Business() {
  const features = [
    {
      title: 'Inventory made easy',
      description: 'Avoid shortages, and keep your stock shelves perfectly balanced.',
      image: '/images/features/inventory.png',
    },
    {
      title: 'Track every sale',
      description: 'Record every transaction instantly and never miss a sale, all from one simple interface.',
      image: '/images/features/track-sale.png',
    },
    {
      title: 'Control Expenses',
      description: 'Manage all your business expenses to make smarter financial decisions.',
      image: '/images/features/control-expenses.png',
    },
    {
      title: 'Accept payments',
      description: 'Get paid however your customers prefer — Mobile Money, cash, or bank transfers.',
      image: '/images/features/acceptcard.png',
    },
    {
      title: 'See business health',
      description: 'Gain instant insights into how your business is performing.',
      image: '/images/features/business-check.png',
    },
  ];

  return (
    <section id="business" className="relative py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block px-4 py-2 bg-blue-50 rounded-full mb-6">
            <span className="text-sm font-semibold text-blue-600 tracking-wide uppercase">
              For Business Holders
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Business features to<br />
            <span className="text-blue-600">simplify your operations</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed font-light">
            Keep your finances in check, and grow with confidence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {feature.description}
              </p>
              <div className="mt-auto h-48 rounded-xl overflow-hidden bg-gray-50 group-hover:scale-105 transition-transform duration-300">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 lg:p-16 text-center shadow-2xl">
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to get started?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of business holders who've transformed their business operations.
          </p>
          <button className="px-10 py-5 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
            Check Pricing
          </button>
        </div>
      </div>
    </section>
  );
}
