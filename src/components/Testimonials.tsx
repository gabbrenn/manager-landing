import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Shop Owner, Fashion Boutique',
      content: 'Manaja transformed how I run my business. No more staying late to record sales—everything happens automatically when customers pay.',
      rating: 5,
      avatar: 'SJ',
    },
    {
      name: 'Michael Chen',
      role: 'Restaurant Owner',
      content: 'The AI assistant is incredible. I can ask "What\'s my profit today?" and get an instant answer. It\'s like having a smart manager 24/7.',
      rating: 5,
      avatar: 'MC',
    },
    {
      name: 'Amina Hassan',
      role: 'Retail Store Manager',
      content: 'Stock management used to be a nightmare. Now it updates automatically with every sale. I can focus on serving customers instead of paperwork.',
      rating: 5,
      avatar: 'AH',
    },
    {
      name: 'David Okafor',
      role: 'Sequencify User',
      content: 'Finally, an app that tracks my expenses without me having to do anything. Every payment is categorized automatically. Game changer!',
      rating: 5,
      avatar: 'DO',
    },
  ];

  return (
    <section id="testimonials" className="relative py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block px-4 py-2 bg-yellow-50 rounded-full mb-6">
            <span className="text-sm font-semibold text-yellow-600 tracking-wide uppercase">
              Trusted by over 5,000 businesses and partners
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Loved by Business Holders<br />
            <span className="text-blue-600">Everywhere.</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed font-light">
            See what our users are saying about their experience with Manaja.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 border border-gray-100 hover:border-blue-200 hover:shadow-2xl transition-all duration-300 relative"
            >
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-16 h-16 text-blue-600" />
              </div>
              
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-6 text-lg relative z-10">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900 mb-2">5,000+</div>
            <div className="text-gray-600">Businesses & Partners</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900 mb-2">4.9/5</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900 mb-2">50k+</div>
            <div className="text-gray-600">Daily Transactions</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900 mb-2">99.9%</div>
            <div className="text-gray-600">Uptime</div>
          </div>
        </div>
      </div>
    </section>
  );
}

