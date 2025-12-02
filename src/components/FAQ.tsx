import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How does Manaja automatically record sales?',
      answer: 'When you receive a payment through Manaja, the system instantly creates a sales record, updates your inventory, and sends an invoice to your customer—all in one seamless transaction. No manual entry required.',
    },
    {
      question: 'Do I need internet connection to use Manaja?',
      answer: 'Manaja works best with an internet connection for real-time sync and automatic invoicing. However, basic features can work offline and sync when connection is restored.',
    },
    {
      question: 'Can I use Manaja for both business and personal expenses?',
      answer: 'Yes! We offer two products: Manager for business holders and Sequencify for clients. You can use both with the same account.',
    },
    {
      question: 'How secure is my financial data?',
      answer: 'We use bank-level encryption and security protocols to protect your data. All transactions are encrypted, and we never store your payment credentials. Your financial information is completely secure.',
    },
    {
      question: 'What payment methods does Manaja support?',
      answer: 'Manaja supports mobile money, bank transfers, card payments, and cash transactions. We integrate with major payment providers in your region.',
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes! We offer a 14-day free trial for Manager with full access to all features. No credit card required to start.',
    },
    {
      question: 'Can I customize invoices and receipts?',
      answer: 'Absolutely! You can add your business logo, customize colors, and include your branding on all invoices and receipts sent to customers.',
    },
    {
      question: 'Does Manaja work with existing accounting software?',
      answer: 'Yes, Manaja can export data in various formats compatible with popular accounting software like QuickBooks, Xero, and others.',
    },
  ];

  return (
    <section id="faq" className="relative py-32 bg-white overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-30 translate-x-1/2 -translate-y-1/2"></div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6">
            <HelpCircle className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Frequently Asked<br />
            <span className="text-blue-600">Questions.</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed font-light">
            Everything you need to know about Manaja.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border-2 border-gray-100 hover:border-blue-200 transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left group"
              >
                <span className="text-lg font-semibold text-gray-900 pr-8 group-hover:text-blue-600 transition-colors">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180 text-blue-600' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-8 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">Still have questions?</p>
          <button className="px-8 py-4 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
}

