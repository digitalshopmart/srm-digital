import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

const team = [
  {
    name: 'Alexandra Rivera',
    role: 'CEO & Co-Founder',
    bio: 'Former Google strategist with 15 years in digital marketing. Alexandra leads our vision and ensures every client strategy aligns with business outcomes.',
    initials: 'AR',
    color: 'from-blue-500 to-blue-700',
  },
  {
    name: 'James Okonkwo',
    role: 'Head of SEO',
    bio: 'SEO expert with a decade of experience ranking competitive keywords in finance, e-commerce, and SaaS. Author of the "Modern SEO Playbook".',
    initials: 'JO',
    color: 'from-green-500 to-teal-600',
  },
  {
    name: 'Mei Lin',
    role: 'Creative Director',
    bio: "Award-winning designer who leads our web design and visual content team. Mei ensures every pixel reflects our clients' brand stories beautifully.",
    initials: 'ML',
    color: 'from-pink-500 to-purple-600',
  },
  {
    name: 'David Patel',
    role: 'Head of Paid Media',
    bio: 'Certified Google Ads and Meta Ads expert who has managed over $50M in ad spend. David consistently delivers industry-leading ROAS for our clients.',
    initials: 'DP',
    color: 'from-orange-400 to-red-500',
  },
  {
    name: 'Sofia Martínez',
    role: 'Social Media Lead',
    bio: "Social media strategist who has built loyal communities for over 200 brands. Sofia's campaigns have generated millions of impressions and real business impact.",
    initials: 'SM',
    color: 'from-indigo-500 to-blue-600',
  },
  {
    name: 'Ryan Thompson',
    role: 'Content Strategy Lead',
    bio: 'Content marketing veteran with a background in journalism. Ryan leads our content team in creating editorial strategies that rank, convert, and resonate.',
    initials: 'RT',
    color: 'from-yellow-400 to-orange-500',
  },
]

const milestones = [
  { year: '2014', event: 'DigitalEdge founded in San Francisco with 3 clients and a big vision.' },
  { year: '2016', event: 'Expanded to full-service agency. First 100 clients milestone reached.' },
  { year: '2018', event: 'Launched proprietary analytics dashboard used by all clients.' },
  { year: '2020', event: 'Named "Top 10 Digital Agency" by Marketing Week. Grew to 50+ team members.' },
  { year: '2022', event: 'Crossed 400 clients across 25 countries. Launched enterprise service tier.' },
  { year: '2024', event: '500+ client milestone. Launched AI-powered campaign optimization tools.' },
]

function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-orange-500 bg-opacity-20 border border-orange-400 text-orange-300 rounded-full text-sm font-semibold mb-6">
            About Us
          </span>
          <h1 className="text-5xl font-extrabold mb-6">
            We're the Team Behind{' '}
            <span className="text-orange-400">Your Digital Growth</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Founded in 2014, DigitalEdge has helped over 500 businesses transform their online presence into their most powerful growth engine.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-orange-500 font-semibold uppercase tracking-wide text-sm">Our Story</span>
              <h2 className="text-4xl font-extrabold text-gray-900 mt-2 mb-6">
                Born from Frustration. Built for Results.
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  DigitalEdge was founded in 2014 by Alexandra Rivera, a former Google strategist who grew tired of watching businesses waste their marketing budgets on agencies that prioritized vanity metrics over real business outcomes.
                </p>
                <p>
                  She built DigitalEdge on a simple premise: every marketing dollar should be accountable, every strategy should be measurable, and every client should feel like their growth is our personal mission.
                </p>
                <p>
                  Ten years later, we've helped over 500 businesses across 25 countries grow their digital presence — from local restaurants to Series B SaaS companies. Our team of 60+ specialists operates at the intersection of creativity, technology, and data to deliver results that move the needle.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: '🎯', title: 'Our Mission', text: 'To empower businesses of all sizes with digital marketing strategies that deliver measurable, sustainable growth.' },
                { icon: '🔭', title: 'Our Vision', text: 'To be the most trusted digital growth partner for businesses worldwide — where creativity meets accountability.' },
                { icon: '💡', title: 'Our Approach', text: 'Data-first. Client-focused. Always testing, always learning, always optimizing for better results.' },
                { icon: '🤝', title: 'Our Values', text: 'Transparency, integrity, innovation, and genuine partnership. We succeed when our clients succeed.' },
              ].map(({ icon, title, text }) => (
                <div key={title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <div className="text-3xl mb-3">{icon}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-orange-500 font-semibold uppercase tracking-wide text-sm">Our Journey</span>
            <h2 className="text-4xl font-extrabold text-gray-900 mt-2 mb-4">A Decade of Growth</h2>
          </div>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-blue-200" />
            <div className="space-y-10">
              {milestones.map(({ year, event }) => (
                <div key={year} className="relative flex gap-8 items-start">
                  <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm shrink-0 z-10 shadow-md">
                    {year.slice(2)}
                  </div>
                  <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex-1 mt-1">
                    <span className="text-blue-600 font-bold mr-3">{year}</span>
                    <span className="text-gray-700">{event}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-orange-500 font-semibold uppercase tracking-wide text-sm">The Team</span>
            <h2 className="text-4xl font-extrabold text-gray-900 mt-2 mb-4">Meet the Experts Behind Your Growth</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Our leadership team brings decades of combined experience across every discipline of digital marketing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map(({ name, role, bio, initials, color }) => (
              <div key={name} className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className={`bg-gradient-to-br ${color} h-32 flex items-center justify-center`}>
                  <div className="w-20 h-20 rounded-full bg-white bg-opacity-20 border-4 border-white border-opacity-50 flex items-center justify-center text-white font-bold text-2xl">
                    {initials}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
                  <p className="text-blue-600 font-semibold text-sm mb-3">{role}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold mb-4">Ready to Work With Us?</h2>
          <p className="text-blue-100 mb-8">Join 500+ businesses that trust DigitalEdge to grow their digital presence. Let's build something great together.</p>
          <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl text-lg transition-colors">
            Start a Conversation →
          </Link>
        </div>
      </section>
    </>
  )
}
