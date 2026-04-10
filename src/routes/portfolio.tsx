import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/portfolio')({
  component: PortfolioPage,
})

const projects = [
  {
    category: 'SEO',
    client: 'MedCenter Health Group',
    industry: 'Healthcare',
    challenge: 'A regional healthcare provider struggled to compete with national chains online, with less than 200 monthly organic visitors across 12 clinic locations.',
    solution: 'We implemented a comprehensive local SEO strategy, rebuilt their website architecture, created location-specific landing pages, and developed a content hub around patient education topics.',
    results: ['Organic traffic: 200 → 18,000 monthly visitors', '#1 rankings for 45 high-intent keywords', '320% increase in appointment bookings', 'Featured in Google Knowledge Panel for all locations'],
    timeframe: '8 months',
    color: 'from-blue-500 to-blue-700',
    icon: '🏥',
  },
  {
    category: 'PPC & Social Ads',
    client: 'LuxeHome Furniture',
    industry: 'E-Commerce Retail',
    challenge: 'A premium furniture brand was spending $80K/month on Google Ads with a 1.2x ROAS — essentially breaking even on advertising.',
    solution: 'Complete account restructure, audience segmentation overhaul, new creative assets, Shopping campaign optimization, and implementation of dynamic remarketing.',
    results: ['ROAS improved from 1.2x to 5.8x', 'Ad spend reduced 30% while revenue grew 180%', 'Cart abandonment recovery: 22% recovery rate', '$2.4M additional revenue in first year'],
    timeframe: '6 months',
    color: 'from-orange-400 to-red-500',
    icon: '🛋️',
  },
  {
    category: 'SMM & Brand Building',
    client: 'GreenRoots Organics',
    industry: 'Food & Beverage',
    challenge: 'A certified organic food brand had a high-quality product but no social media presence, competing against established brands with millions of followers.',
    solution: 'We built a cohesive brand identity on Instagram and TikTok, created a content series around sustainable living, and launched micro-influencer partnerships.',
    results: ['0 → 87,000 Instagram followers in 10 months', '340M TikTok video views', '28% of sales now driven by social media', 'Landed Whole Foods national distribution deal'],
    timeframe: '10 months',
    color: 'from-green-500 to-teal-600',
    icon: '🌱',
  },
  {
    category: 'Web Design & CRO',
    client: 'Velocity SaaS',
    industry: 'B2B Technology',
    challenge: 'A SaaS startup with strong product-market fit was getting traffic but converting at 0.8% — well below industry average. Their homepage was confusing and their trial sign-up flow had 7 steps.',
    solution: 'Complete website redesign with conversion-first principles, simplified trial sign-up (7 steps → 2 steps), new pricing page design, and strategic CTA placement throughout.',
    results: ['Trial sign-up conversion: 0.8% → 4.2%', '425% increase in qualified demo bookings', 'Time-on-site increased by 3.2 minutes', '$1.8M ARR growth attributed to new site'],
    timeframe: '4 months',
    color: 'from-indigo-500 to-blue-600',
    icon: '🚀',
  },
  {
    category: 'Full Digital Strategy',
    client: 'Radiant Skin Clinic',
    industry: 'Aesthetics & Beauty',
    challenge: 'A luxury med spa was entirely reliant on word-of-mouth referrals, with no digital strategy, no social presence, and no online booking system.',
    solution: 'Built a new website with online booking integration, launched Instagram and Facebook marketing, implemented Google Ads for high-intent treatments, and created an email loyalty program.',
    results: ['Monthly bookings increased 280%', '4.9-star Google rating (from 12 to 340 reviews)', 'Email list grew to 8,200 subscribers', 'Second location opened within 18 months'],
    timeframe: '12 months',
    color: 'from-pink-500 to-purple-600',
    icon: '✨',
  },
  {
    category: 'Content & SEO',
    client: 'FinanceForward',
    industry: 'Financial Services',
    challenge: 'A fintech startup needed to build domain authority from scratch in one of the most competitive online spaces — personal finance.',
    solution: 'We developed a comprehensive content strategy targeting long-tail financial keywords, built an authoritative resource library, secured 180+ editorial backlinks from financial publications.',
    results: ['Domain authority: 12 → 58 in 18 months', '2.4M monthly organic visitors', 'Featured in Forbes, Business Insider, and CNBC', '$15M Series A fundraise cited content as key growth driver'],
    timeframe: '18 months',
    color: 'from-yellow-400 to-orange-500',
    icon: '💰',
  },
]

function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-orange-500 bg-opacity-20 border border-orange-400 text-orange-300 rounded-full text-sm font-semibold mb-6">
            Our Work
          </span>
          <h1 className="text-5xl font-extrabold mb-6">
            Results That Speak for{' '}
            <span className="text-orange-400">Themselves</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Explore real case studies from businesses we've helped transform. Every project is a partnership built on strategy, creativity, and measurable outcomes.
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-white py-10 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { n: '500+', l: 'Projects Delivered' },
              { n: '25+', l: 'Industries Served' },
              { n: '$180M+', l: 'Client Revenue Generated' },
              { n: '98%', l: 'Client Retention Rate' },
            ].map(({ n, l }) => (
              <div key={l}>
                <div className="text-3xl font-extrabold text-blue-600 mb-1">{n}</div>
                <div className="text-gray-500 text-sm font-medium">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {projects.map((p) => (
              <div key={p.client} className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                {/* Header */}
                <div className={`bg-gradient-to-r ${p.color} p-8 text-white`}>
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="text-5xl">{p.icon}</div>
                    <div>
                      <span className="inline-block px-3 py-1 bg-white bg-opacity-20 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                        {p.category}
                      </span>
                      <h2 className="text-2xl font-extrabold">{p.client}</h2>
                      <p className="text-white text-opacity-80">{p.industry} · {p.timeframe} engagement</p>
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="p-8 grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <span className="w-6 h-6 bg-red-100 text-red-500 rounded-full flex items-center justify-center text-xs">!</span>
                      The Challenge
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{p.challenge}</p>

                    <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <span className="w-6 h-6 bg-blue-100 text-blue-500 rounded-full flex items-center justify-center text-xs">→</span>
                      Our Solution
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{p.solution}</p>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <span className="w-6 h-6 bg-green-100 text-green-500 rounded-full flex items-center justify-center text-xs">✓</span>
                      The Results
                    </h3>
                    <ul className="space-y-3">
                      {p.results.map((r) => (
                        <li key={r} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700 font-medium">{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold mb-4">Ready to Become Our Next Success Story?</h2>
          <p className="text-blue-100 mb-8">Tell us about your goals. We'll design a custom strategy to get you there.</p>
          <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl text-lg transition-colors">
            Start Your Project →
          </Link>
        </div>
      </section>
    </>
  )
}
