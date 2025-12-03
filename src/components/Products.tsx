import { Smartphone, Monitor, CreditCard, ArrowRight } from 'lucide-react';

export default function Products() {
  const products = [
    {
      icon: Smartphone,
      title: 'Mobile App',
      description: 'An application that is accessible on both Android and iPhone devices.',
      iconColor: 'text-blue-600',
      iconBg: 'bg-blue-50',
    },
    {
      icon: Monitor,
      title: 'Web Platform',
      description: 'A software version with enhanced features designed for use on computers.',
      iconColor: 'text-purple-600',
      iconBg: 'bg-purple-50',
    },
    {
      icon: CreditCard,
      title: 'POS / Terminal',
      description: 'A terminal point-of-sale (POS) software designed specifically for use at counters.',
      iconColor: 'text-green-600',
      iconBg: 'bg-green-50',
    },
  ];

  return (
    <section id="products" className="relative py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-block px-4 py-2 bg-blue-50 rounded-full mb-4">
            <span className="text-sm font-semibold text-blue-600 tracking-wide uppercase">
              Our Products
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
            Manaja brings a range of<br />
            <span className="text-blue-600">3 products</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed font-light">
            Three distinctive business tools depending on your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 border border-gray-100 hover:border-blue-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`${product.iconBg} rounded-2xl p-6 mb-6 w-fit`}>
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <product.icon className={`w-7 h-7 ${product.iconColor}`} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {product.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                {product.description}
              </p>
              <button className="group/btn flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                Learn More
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

