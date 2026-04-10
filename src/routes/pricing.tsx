import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pricing')({
  component: PricingPage,
})

const plans = [
  {
    name: 'Starter',
    price: 999,
    period: '/month',
    tagline: 'Perfect for small businesses getting started online.',
    color: 'border-gray-200',
    highlight: false,
    features: [
      'SEO audit & basic on-page optimization',
      'Google Business Profile setup',
      '2 social media platforms managed',
      '8 social posts per month',
      'Basic Google Ads management (up to $2K ad spend)',
      '1 blog post per month',
      'Monthly performance report',
      'Email support',
    ],
    notIncluded: [
      'Link building',
      'Dedicated account manager',
      'Conversion rate optimization',
    ],
  },
  {
    name: 'Growth',
    price: 2499,
    period: '/month',
    tagline: 'The complete solution for growing businesses.',
    color: 'border-blue-500',
    highlight: true,
    badge: 'Most Popular',
    features: [
      'Comprehensive SEO strategy & execution',
      'Advanced link building (10 links/month)',
      '4 social media platforms managed',
      '20 social posts per month',
      'Google & Meta Ads management (up to $10K)',
      '4 blog posts + 2 landing pages per month',
      'Email marketing (up to 5K contacts)',
      'Monthly strategy call',
      'Dedicated account manager',
      'Bi-weekly performance reports',
      'Conversion rate optimization',
    ],
    notIncluded: [],
  },
  {
    name: 'Enterprise',
    price: null,
    period: 'custom',
    tagline: 'Bespoke strategy for high-growth organizations.',
    color: 'border-orange-400',
    highlight: false,
    features: [
      'Everything in Growth, plus:',
      'Unlimited ad spend management',
      'Custom content strategy & production',
      'PR & media outreach',
      'Competitor monitoring & intelligence',
      'Weekly strategy calls & executive reporting',
      'Dedicated senior team (SEO, PPC, Social, Content)',
      'Priority 24/7 support with 1-hour SLA',
      'Quarterly in-person strategy sessions',
      'Custom integrations & technology stack',
    ],
    notIncluded: [],
  },
]

const addons = [
  { name: 'Website Redesign', price: 'From $3,500', desc: 'Custom responsive website built for performance and conversion.' },
  { name: 'Landing Page Design', price: 'From $800', desc: 'High-converting landing page for campaigns or product launches.' },
  { name: 'Video Production', price: 'From $1,200', desc: 'Professional brand or social media video content.' },
  { name: 'Influencer Campaign', price: 'From $2,000', desc: 'End-to-end influencer outreach, negotiation, and campaign management.' },
  { name: 'Email Automation Setup', price: 'From $1,500', desc: 'Multi-step automated email sequences (welcome, nurture, re-engagement).' },
  { name: 'SEO Content Audit', price: 'From $1,200', desc: 'Deep audit of all existing content with optimization recommendations.' },
]

function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-orange-500 bg-opacity-20 border border-orange-400 text-orange-300 rounded-full text-sm font-semibold mb-6">
            Transparent Pricing
          </span>
          <h1 className="text-5xl font-extrabold mb-6">
            Simple, Honest{' '}
            <span className="text-orange-400">Pricing</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            No hidden fees. No long-term lock-ins. Choose the plan that fits your business and scale as you grow. Cancel anytime.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative bg-white rounded-3xl border-2 ${plan.color} shadow-sm overflow-hidden ${plan.highlight ? 'shadow-xl scale-105' : ''}`}
              >
                {plan.badge && (
                  <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl">
                    {plan.badge}
                  </div>
                )}

                <div className={`p-8 ${plan.highlight ? 'bg-gradient-to-br from-blue-600 to-blue-800 text-white' : ''}`}>
                  <h2 className={`text-2xl font-extrabold mb-1 ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h2>
                  <p className={`text-sm mb-6 ${plan.highlight ? 'text-blue-200' : 'text-gray-500'}`}>{plan.tagline}</p>

                  {plan.price !== null ? (
                    <div className={`text-5xl font-extrabold mb-1 ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                      ${plan.price.toLocaleString()}
                      <span className={`text-base font-normal ${plan.highlight ? 'text-blue-200' : 'text-gray-400'}`}>{plan.period}</span>
                    </div>
                  ) : (
                    <div className={`text-3xl font-extrabold mb-1 ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                      Custom Pricing
                    </div>
                  )}
                </div>

                <div className="p-8">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-gray-700">
                        <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                    {plan.notIncluded.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-gray-400">
                        <svg className="w-5 h-5 text-gray-300 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`block text-center px-6 py-3 font-bold rounded-xl transition-colors duration-200 ${
                      plan.highlight
                        ? 'bg-orange-500 hover:bg-orange-600 text-white'
                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                    }`}
                  >
                    {plan.price === null ? 'Contact Sales' : 'Get Started'}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 text-sm mt-8">
            All plans include a free onboarding session and 30-day satisfaction guarantee. Ad spend is billed separately.
          </p>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-orange-500 font-semibold uppercase tracking-wide text-sm">À La Carte</span>
            <h2 className="text-4xl font-extrabold text-gray-900 mt-2 mb-4">One-Time & Add-On Services</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Complement your plan or get a standalone service without a monthly commitment.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {addons.map(({ name, price, desc }) => (
              <div key={name} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-200">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-gray-900">{name}</h3>
                  <span className="text-blue-600 font-bold text-sm ml-4 shrink-0">{price}</span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Pricing FAQs</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: 'Are there any long-term contracts?', a: 'No. All monthly plans are month-to-month. We earn your business every month through results. Enterprise contracts may have different terms.' },
              { q: 'Is ad spend included in the plan price?', a: 'Ad spend (the budget you pay to Google, Meta, etc.) is separate and goes directly to the ad platforms. Our plans cover the management fee only.' },
              { q: 'Can I change plans?', a: 'Yes. You can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle.' },
              { q: 'What is the 30-day satisfaction guarantee?', a: 'If you are not satisfied with the quality of our work within your first 30 days, we will refund your management fee — no questions asked.' },
              { q: 'Do you offer discounts for annual payments?', a: 'Yes — clients who commit to an annual plan receive 2 months free (equivalent to 16.7% off). Contact us for details.' },
            ].map(({ q, a }) => (
              <details key={q} className="group bg-white rounded-xl border border-gray-200 overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                  {q}
                  <svg className="w-5 h-5 shrink-0 text-gray-400 group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-500 leading-relaxed">{a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold mb-4">Not Sure Which Plan Is Right for You?</h2>
          <p className="text-blue-100 mb-8">Talk to our team. We'll listen to your goals and recommend the plan that delivers the best value for your specific situation.</p>
          <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl text-lg transition-colors">
            Talk to an Expert →
          </Link>
        </div>
      </section>
    </>
  )
}
