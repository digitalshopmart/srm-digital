import { HeadContent, Link, Outlet, Scripts, createRootRoute } from '@tanstack/react-router'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'DigitalEdge Agency — Digital Marketing Experts' },
      { name: 'description', content: 'DigitalEdge Agency offers SEO, SMM, Google Ads, Web Design & full-stack digital marketing services to grow your business online.' },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="bg-white text-gray-800">
        <Header />
        <main>{children}</main>
        <Footer />
        <Scripts />
      </body>
    </html>
  )
}

function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-orange-500 flex items-center justify-center">
              <span className="text-white font-bold text-sm">DE</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
              DigitalEdge
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {[
              { to: '/', label: 'Home' },
              { to: '/services', label: 'Services' },
              { to: '/about', label: 'About Us' },
              { to: '/portfolio', label: 'Portfolio' },
              { to: '/pricing', label: 'Pricing' },
              { to: '/contact', label: 'Contact' },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200"
                activeProps={{ className: 'text-blue-600 font-semibold' }}
                activeOptions={{ exact: to === '/' }}
              >
                {label}
              </Link>
            ))}
          </nav>

          <Link
            to="/contact"
            className="hidden md:inline-flex items-center px-5 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Get Free Quote
          </Link>

          {/* Mobile menu placeholder */}
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}

function MobileMenu() {
  return (
    <details className="md:hidden group">
      <summary className="list-none cursor-pointer p-2 rounded-md hover:bg-gray-100">
        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </summary>
      <div className="absolute top-16 left-0 right-0 bg-white shadow-lg border-t z-50">
        <nav className="flex flex-col p-4 gap-2">
          {[
            { to: '/', label: 'Home' },
            { to: '/services', label: 'Services' },
            { to: '/about', label: 'About Us' },
            { to: '/portfolio', label: 'Portfolio' },
            { to: '/pricing', label: 'Pricing' },
            { to: '/contact', label: 'Contact' },
          ].map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="text-gray-700 hover:text-blue-600 font-medium py-2 px-3 rounded-md hover:bg-blue-50 transition-colors"
            >
              {label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-2 text-center px-5 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg"
          >
            Get Free Quote
          </Link>
        </nav>
      </div>
    </details>
  )
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-orange-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">DE</span>
              </div>
              <span className="text-xl font-bold text-white">DigitalEdge</span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              We help businesses grow online with data-driven digital marketing strategies, creative design, and measurable results.
            </p>
            <div className="flex gap-3">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="w-9 h-9 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-colors duration-200"
                >
                  <SocialIcon name={s} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              {['SEO Optimization', 'Social Media Marketing', 'Google Ads / PPC', 'Web Design & Dev', 'Content Marketing', 'Email Marketing'].map((s) => (
                <li key={s}>
                  <Link to="/services" className="hover:text-orange-400 transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/portfolio', label: 'Portfolio' },
                { to: '/pricing', label: 'Pricing' },
                { to: '/contact', label: 'Contact' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="hover:text-orange-400 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 text-orange-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                123 Digital Avenue, San Francisco, CA 94105
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-orange-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +1 (888) 555-0123
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-orange-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                hello@digitaledge.agency
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-sm">
          <p>© {new Date().getFullYear()} DigitalEdge Agency. All rights reserved.</p>
          <p className="text-gray-500">Designed with ❤️ to grow your business</p>
        </div>
      </div>
    </footer>
  )
}

function SocialIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    facebook: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
    twitter: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
      </svg>
    ),
    instagram: (
      <svg className="w-4 h-4 fill-none stroke-current" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
    linkedin: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  }
  return <>{icons[name]}</>
}
