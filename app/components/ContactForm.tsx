'use client'
import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for contacting us! We will get back to you soon.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <input
        type="text"
        placeholder="Your Name"
        value={formData.name}
        onChange={(e) => setFormData({...formData, name: e.target.value})}
        required
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
      />
      <input
        type="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={(e) => setFormData({...formData, email: e.target.value})}
        required
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
      />
      <input
        type="tel"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={(e) => setFormData({...formData, phone: e.target.value})}
        required
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
      />
      <textarea
        rows={5}
        placeholder="Your Message"
        value={formData.message}
        onChange={(e) => setFormData({...formData, message: e.target.value})}
        required
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
      ></textarea>
      <button
        type="submit"
        className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-secondary transition"
      >
        Send Message
      </button>
    </form>
  )
}