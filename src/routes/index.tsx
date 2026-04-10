import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesOverview />
      <WhyChooseUs />
      <TestimonialsSection />
      <FAQSection />
      <CTABanner />
    </>
  )
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange-500 opacity-10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-24 w-80 h-80 bg-blue-400 opacity-10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-1.5 bg-orange-500 bg-opacity-20 border border-orange-400 text-orange-300 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
            #1 Digital Marketing Agency
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Grow Your Business with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">
              Digital Marketing
            </span>{' '}
            That Delivers Results
          </h1>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-2xl">
            We craft data-driven strategies across SEO, social media, paid ads, and web design — turning your online presence into a revenue-generating engine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex justify-center items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl text-lg shadow-lg hover:shadow-orange-500/30 transition-all duration-200"
            >
              Get Free Consultation
            </Link>
            <Link
              to="/services"
              className="inline-flex justify-center items-center px-8 py-4 bg-white bg-opacity-10 hover:bg-opacity-20 border border-white border-opacity-30 text-white font-bold rounded-xl text-lg transition-all duration-200"
            >
              Explore Services →
            </Link>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none">
        <path d="M0 60L1440 60L1440 0C1200 40 960 60 720 60C480 60 240 40 0 0L0 60Z" fill="white" />
      </svg>
    </section>
  )
}

function StatsSection() {
  const stats = [
    { number: '500+', label: 'Clients Served' },
    { number: '1,200+', label: 'Projects Completed' },
    { number: '10+', label: 'Years of Experience' },
    { number: '98%', label: 'Client Satisfaction' },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ number, label }) => (
            <div key={label} className="text-center">
              <div className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-2">{number}</div>
              <div className="text-gray-500 font-medium">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServicesOverview() {
  const services = [
    {
      icon: '🔍',
      title: 'SEO Optimization',
      desc: 'Rank higher on Google with proven on-page and off-page SEO strategies that drive organic traffic.',
    },
    {
      icon: '📱',
      title: 'Social Media Marketing',
      desc: 'Engage your audience on Facebook, Instagram, Twitter, and LinkedIn with compelling content.',
    },
    {
      icon: '📊',
      title: 'Google Ads / PPC',
      desc: 'Maximize ROI with targeted pay-per-click campaigns that convert visitors into customers.',
    },
    {
      icon: '💻',
      title: 'Web Design & Development',
      desc: 'Beautiful, fast, mobile-first websites that represent your brand and convert visitors.',
    },
    {
      icon: '✍️',
      title: 'Content Marketing',
      desc: 'Strategic content that builds authority, generates leads, and nurtures customer relationships.',
    },
    {
      icon: '📧',
      title: 'Email Marketing',
      desc: 'Automated email campaigns that keep your audience engaged and drive repeat business.',
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-orange-500 font-semibold uppercase tracking-wide text-sm">What We Do</span>
          <h2 className="text-4xl font-extrabold text-gray-900 mt-2 mb-4">
            Full-Spectrum Digital Marketing Services
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Every service we offer is designed with one goal — measurable growth for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg border border-gray-100 hover:border-blue-100 transition-all duration-300 group"
            >
              <div className="text-4xl mb-4">{icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{title}</h3>
              <p className="text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors duration-200 shadow-md"
          >
            View All Services →
          </Link>
        </div>
      </div>
    </section>
  )
}

function WhyChooseUs() {
  const reasons = [
    {
      title: 'Data-Driven Strategies',
      desc: 'Every decision is backed by analytics and real-time data — no guesswork, just results.',
    },
    {
      title: 'Dedicated Account Managers',
      desc: 'A dedicated expert learns your business inside-out and becomes your strategic growth partner.',
    },
    {
      title: 'Transparent Reporting',
      desc: 'Clear, jargon-free monthly reports so you always know exactly where your budget is going.',
    },
    {
      title: 'Proven Track Record',
      desc: 'Over 500 businesses have trusted us to grow their digital presence with measurable ROI.',
    },
    {
      title: 'Full-Service Agency',
      desc: 'From strategy to execution, we handle every aspect of your digital marketing under one roof.',
    },
    {
      title: '24/7 Support',
      desc: 'Our team is available around the clock to answer questions, resolve issues, and optimize campaigns.',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-orange-500 font-semibold uppercase tracking-wide text-sm">Why DigitalEdge</span>
            <h2 className="text-4xl font-extrabold text-gray-900 mt-2 mb-6">
              We Don't Just Market — We Grow Your Business
            </h2>
            <p className="text-xl text-gray-500 mb-10">
              We combine creativity, technology, and strategy to deliver campaigns that don't just look good — they perform.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center px-7 py-3 border-2 border-blue-600 text-blue-600 font-bold rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-200"
            >
              Learn Our Story →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map(({ title, desc }) => (
              <div key={title} className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center shrink-0 mt-1">
                  <svg className="w-3 h-3 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">{title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechVentures Inc.',
      avatar: 'SJ',
      text: "DigitalEdge transformed our online presence completely. Our organic traffic grew by 340% in just 6 months, and the leads keep coming. Best investment we've made.",
      stars: 5,
    },
    {
      name: 'Marcus Chen',
      role: 'Founder, GreenLeaf Retail',
      avatar: 'MC',
      text: "Their Google Ads team reduced our cost-per-acquisition by 45% while doubling conversions. The ROI is incredible. I recommend DigitalEdge to every business owner I meet.",
      stars: 5,
    },
    {
      name: 'Priya Sharma',
      role: 'Marketing Director, HealthPlus',
      avatar: 'PS',
      text: "The social media strategy they built for us created a genuine community around our brand. Engagement is up 600% and we're seeing real business impact from social channels.",
      stars: 5,
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-orange-500 font-semibold uppercase tracking-wide text-sm">Client Stories</span>
          <h2 className="text-4xl font-extrabold text-gray-900 mt-2 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-500 max-w-xl mx-auto">Don't take our word for it — hear from businesses we've helped transform.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(({ name, role, avatar, text, stars }) => (
            <div key={name} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: stars }).map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-orange-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed mb-6 italic">"{text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-orange-400 flex items-center justify-center text-white font-bold text-sm">
                  {avatar}
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">{name}</div>
                  <div className="text-gray-400 text-xs">{role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQSection() {
  const faqs = [
    {
      q: 'How long does it take to see results from SEO?',
      a: 'SEO is a long-term strategy. Most clients see meaningful improvements in rankings and traffic within 3–6 months. However, the exact timeline depends on your industry, competition, and current website health.',
    },
    {
      q: 'What makes DigitalEdge different from other agencies?',
      a: 'We combine deep technical expertise with creative storytelling and back every decision with data. We assign a dedicated account manager to every client and provide transparent, detailed monthly reports.',
    },
    {
      q: 'Do you work with small businesses and startups?',
      a: 'Absolutely. We have flexible pricing plans designed for businesses of all sizes — from solopreneurs to enterprise-level organizations. We scale our strategies to fit your budget and goals.',
    },
    {
      q: 'Can I manage just one specific service, like only Google Ads?',
      a: 'Yes. While our clients often see the best results with a holistic approach, we also offer individual service packages. You can start with one service and expand as you see results.',
    },
    {
      q: 'How do you measure and report campaign performance?',
      a: 'We provide monthly performance reports with clear KPIs — traffic, leads, conversions, ROI, and more. You also get access to a live dashboard where you can monitor your campaigns in real time.',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-orange-500 font-semibold uppercase tracking-wide text-sm">FAQ</span>
          <h2 className="text-4xl font-extrabold text-gray-900 mt-2 mb-4">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <details key={q} className="group bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
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
  )
}

function CTABanner() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-extrabold mb-4">Ready to Grow Your Business?</h2>
        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
          Let's talk about your goals. Get a free 30-minute strategy session with one of our digital marketing experts.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="inline-flex justify-center items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl text-lg transition-all duration-200 shadow-lg"
          >
            Book Free Strategy Call
          </Link>
          <Link
            to="/pricing"
            className="inline-flex justify-center items-center px-8 py-4 bg-white bg-opacity-10 hover:bg-opacity-20 border border-white border-opacity-30 text-white font-bold rounded-xl text-lg transition-all duration-200"
          >
            View Pricing
          </Link>
        </div>
      </div>
    </section>
  )
}
