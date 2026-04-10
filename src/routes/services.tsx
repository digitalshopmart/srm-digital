import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/services')({
  component: ServicesPage,
})

const services = [
  {
    id: 'seo',
    icon: '🔍',
    title: 'SEO — Search Engine Optimization',
    tagline: 'Rank higher. Get found. Grow organically.',
    color: 'from-blue-500 to-blue-700',
    description:
      'Our SEO strategies put your business at the top of Google search results — right where your customers are looking. We combine technical excellence with content strategy and authority building to deliver sustainable, long-term organic growth.',
    features: [
      'Technical SEO audit & site optimization',
      'Keyword research & competitive analysis',
      'On-page content optimization',
      'Link building & authority development',
      'Local SEO & Google Business Profile',
      'Monthly performance reporting',
    ],
    result: 'Average 280% increase in organic traffic within 6 months',
  },
  {
    id: 'smm',
    icon: '📱',
    title: 'SMM — Social Media Marketing',
    tagline: 'Build your community. Amplify your brand.',
    color: 'from-pink-500 to-purple-600',
    description:
      'We create and manage high-performing social media campaigns across Facebook, Instagram, Twitter (X), LinkedIn, and TikTok. From content creation to community management, we build genuine connections between your brand and audience.',
    features: [
      'Multi-platform strategy & management',
      'Creative content creation & design',
      'Paid social advertising campaigns',
      'Community management & engagement',
      'Influencer partnerships & outreach',
      'Monthly analytics & insights reports',
    ],
    result: 'Average 450% growth in social engagement within 90 days',
  },
  {
    id: 'smo',
    icon: '⚡',
    title: 'SMO — Social Media Optimization',
    tagline: 'Optimize your profiles. Maximize your reach.',
    color: 'from-orange-400 to-red-500',
    description:
      'Social Media Optimization is about making your profiles work harder for you. We optimize every element of your social presence — bio, content strategy, hashtags, posting schedules, and cross-platform integration — to maximize organic reach and discoverability.',
    features: [
      'Complete social profile audit & optimization',
      'Bio & description copywriting',
      'Content calendar & scheduling strategy',
      'Hashtag research & strategy',
      'Cross-platform integration',
      'Social sharing & viral content tactics',
    ],
    result: 'Average 320% improvement in organic profile reach',
  },
  {
    id: 'ppc',
    icon: '📊',
    title: 'Google Ads / PPC Advertising',
    tagline: 'Pay for results. Not just clicks.',
    color: 'from-green-500 to-teal-600',
    description:
      'Our certified Google Ads specialists create and manage high-converting PPC campaigns that maximize your return on ad spend. From search and display to shopping and YouTube ads, we put your message in front of the right people at exactly the right moment.',
    features: [
      'Google Search, Display & Shopping Ads',
      'YouTube & video advertising',
      'Remarketing & retargeting campaigns',
      'Landing page design & A/B testing',
      'Bid strategy optimization & automation',
      'Detailed ROI tracking & reporting',
    ],
    result: 'Average 3.8x return on ad spend (ROAS) for our clients',
  },
  {
    id: 'webdev',
    icon: '💻',
    title: 'Website Design & Development',
    tagline: 'Websites that convert visitors into customers.',
    color: 'from-indigo-500 to-blue-600',
    description:
      'Your website is your most powerful marketing tool. We design and develop fast, beautiful, mobile-first websites that reflect your brand, rank on Google, and convert visitors into leads and customers. From landing pages to full e-commerce platforms.',
    features: [
      'Custom responsive website design',
      'E-commerce development (Shopify, WooCommerce)',
      'Landing page design & optimization',
      'Website speed & Core Web Vitals optimization',
      'CMS integration & content management',
      'Ongoing maintenance & support',
    ],
    result: 'Average 65% improvement in conversion rates post-redesign',
  },
  {
    id: 'content',
    icon: '✍️',
    title: 'Content Marketing',
    tagline: 'Tell your story. Build your authority.',
    color: 'from-yellow-400 to-orange-500',
    description:
      'Content is the foundation of every successful digital strategy. Our content team creates SEO-optimized blog posts, videos, infographics, case studies, and more that attract your ideal customer and guide them through your marketing funnel.',
    features: [
      'Content strategy & editorial calendar',
      'Blog & article writing (SEO-optimized)',
      'Video scripts & production guidance',
      'Infographic & visual content design',
      'Case studies & whitepapers',
      'Email newsletter content',
    ],
    result: 'Content-led clients see 3x more leads than paid-only strategies',
  },
  {
    id: 'email',
    icon: '📧',
    title: 'Email Marketing & Automation',
    tagline: 'Nurture leads. Drive repeat sales.',
    color: 'from-teal-500 to-cyan-600',
    description:
      'Email remains one of the highest-ROI marketing channels available. We design, write, and automate email campaigns that nurture your subscriber list, recover abandoned carts, re-engage inactive customers, and drive measurable revenue.',
    features: [
      'Email strategy & audience segmentation',
      'Template design & copywriting',
      'Automated drip & nurture sequences',
      'Abandoned cart & re-engagement flows',
      'A/B testing for subject lines & content',
      'Deliverability optimization',
    ],
    result: '$42 average return for every $1 spent on email marketing',
  },
  {
    id: 'analytics',
    icon: '📈',
    title: 'Analytics & Conversion Optimization',
    tagline: 'Measure everything. Optimize continuously.',
    color: 'from-purple-500 to-violet-700',
    description:
      'Data without insights is just numbers. We set up comprehensive tracking, analyze user behavior, run conversion rate optimization (CRO) tests, and translate data into actionable growth strategies for your business.',
    features: [
      'Google Analytics 4 setup & configuration',
      'Conversion tracking & goal setup',
      'Heatmaps & user session recording',
      'A/B & multivariate testing',
      'Custom dashboard & reporting',
      'Monthly data-driven strategy reviews',
    ],
    result: 'Average 40% lift in conversion rate through ongoing CRO',
  },
]

function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-orange-500 bg-opacity-20 border border-orange-400 text-orange-300 rounded-full text-sm font-semibold mb-6">
            Our Services
          </span>
          <h1 className="text-5xl font-extrabold mb-6">
            Digital Marketing Services That Drive{' '}
            <span className="text-orange-400">Real Growth</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            From search rankings to social media, paid ads to web design — we offer a complete suite of digital marketing solutions tailored to your business goals.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
              >
                {/* Icon Card */}
                <div className="w-full lg:w-2/5 shrink-0">
                  <div className={`bg-gradient-to-br ${service.color} rounded-3xl p-12 text-white text-center shadow-xl`}>
                    <div className="text-7xl mb-6">{service.icon}</div>
                    <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
                    <p className="text-white text-opacity-80 italic">{service.tagline}</p>
                    <div className="mt-6 px-4 py-3 bg-white bg-opacity-15 rounded-xl text-sm font-medium">
                      📊 {service.result}
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="w-full lg:w-3/5">
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">{service.description}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-3 text-gray-700">
                        <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-7 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors duration-200 shadow-md"
                  >
                    Get Started with {service.title.split('—')[0].trim()} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold mb-4">Not Sure Which Service You Need?</h2>
          <p className="text-blue-100 mb-8">Let our experts analyze your current digital presence and recommend the best strategy for your goals — completely free.</p>
          <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl text-lg transition-colors">
            Get Your Free Digital Audit
          </Link>
        </div>
      </section>
    </>
  )
}
