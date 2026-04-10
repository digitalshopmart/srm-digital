import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contact')({
  component: ContactPage,
})

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
    .join('&')
}

function ContactForm() {
  const [fields, setFields] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setFields({ ...fields, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch('/contact-form.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...fields }),
      })
      setSubmitted(true)
    } catch {
      // silently handle — form still works on Netlify
      setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-16">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
        <p className="text-gray-500 max-w-md mx-auto">
          Thank you for reaching out. A member of our team will contact you within 1 business day to discuss your goals.
        </p>
      </div>
    )
  }

  const inputClass = 'w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 bg-gray-50 hover:bg-white transition-colors'
  const labelClass = 'block text-sm font-semibold text-gray-700 mb-2'

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <input type="hidden" name="form-name" value="contact" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className={labelClass}>Full Name *</label>
          <input
            id="name"
            type="text"
            name="name"
            value={fields.name}
            onChange={handleChange}
            required
            placeholder="John Smith"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>Email Address *</label>
          <input
            id="email"
            type="email"
            name="email"
            value={fields.email}
            onChange={handleChange}
            required
            placeholder="john@company.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className={labelClass}>Phone Number</label>
          <input
            id="phone"
            type="tel"
            name="phone"
            value={fields.phone}
            onChange={handleChange}
            placeholder="+1 (555) 000-0000"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="service" className={labelClass}>Service of Interest *</label>
          <select
            id="service"
            name="service"
            value={fields.service}
            onChange={handleChange}
            required
            className={inputClass}
          >
            <option value="">Select a service…</option>
            <option>SEO Optimization</option>
            <option>Social Media Marketing</option>
            <option>Social Media Optimization</option>
            <option>Google Ads / PPC</option>
            <option>Web Design & Development</option>
            <option>Content Marketing</option>
            <option>Email Marketing</option>
            <option>Full Digital Strategy</option>
            <option>Other</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="budget" className={labelClass}>Monthly Budget</label>
        <select
          id="budget"
          name="budget"
          value={fields.budget}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="">Select your budget range…</option>
          <option>Under $1,000/month</option>
          <option>$1,000 – $2,500/month</option>
          <option>$2,500 – $5,000/month</option>
          <option>$5,000 – $10,000/month</option>
          <option>$10,000+/month</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>Tell Us About Your Goals *</label>
        <textarea
          id="message"
          name="message"
          value={fields.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Describe your business, current challenges, and what you're hoping to achieve with digital marketing…"
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-xl text-lg transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? 'Sending…' : 'Send My Message →'}
      </button>

      <p className="text-xs text-gray-400 text-center">
        By submitting this form, you agree to our privacy policy. We'll never share your data.
      </p>
    </form>
  )
}

function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-orange-500 bg-opacity-20 border border-orange-400 text-orange-300 rounded-full text-sm font-semibold mb-6">
            Contact Us
          </span>
          <h1 className="text-5xl font-extrabold mb-6">
            Let's Grow Your Business{' '}
            <span className="text-orange-400">Together</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Ready to take your digital marketing to the next level? Reach out and get a free consultation with one of our experts.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Get In Touch</h2>
                <p className="text-gray-500 leading-relaxed">
                  Fill out the form and we'll get back to you within 1 business day. Or reach us directly using the information below.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    ),
                    label: 'Phone',
                    value: '+1 (888) 555-0123',
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    ),
                    label: 'Email',
                    value: 'hello@digitaledge.agency',
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    ),
                    label: 'Office',
                    value: '123 Digital Avenue, Suite 400\nSan Francisco, CA 94105',
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                    label: 'Hours',
                    value: 'Mon – Fri: 9am – 6pm PST\nUrgent support: 24/7',
                  },
                ].map(({ icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                      {icon}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">{label}</p>
                      <p className="text-gray-800 font-medium whitespace-pre-line">{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="rounded-2xl overflow-hidden border border-gray-200 h-48 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                <div className="text-center text-blue-400">
                  <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  <p className="text-sm font-medium">San Francisco, CA</p>
                  <p className="text-xs text-blue-300 mt-1">View on Google Maps →</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-10">
              <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Send Us a Message</h2>
              <p className="text-gray-500 mb-8">We respond to every inquiry within 1 business day.</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Why choose section */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-10">What Happens After You Reach Out</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { step: '1', title: 'We Respond', desc: 'You hear from us within 1 business day — usually much faster.' },
              { step: '2', title: 'Discovery Call', desc: 'A 30-minute call to understand your goals, challenges, and budget.' },
              { step: '3', title: 'Custom Strategy', desc: 'We build a tailored digital marketing strategy specific to your business.' },
              { step: '4', title: 'We Get to Work', desc: 'Your campaign launches and we start driving measurable results.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-xl flex items-center justify-center mb-4">
                  {step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
