"use client"

import type React from "react"

import { useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We will get back to you soon.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  }

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative py-40 text-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-4.0.3&w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gray-900/80" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <h1 className="text-5xl mb-6 text-white font-serif font-bold">Contact Adventure Academy</h1>
          <p className="text-xl max-w-4xl mx-auto text-white">
            Get in touch with us to start your educational adventure in Hyderabad
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="relative mb-16 text-center">
            <div
              className="absolute inset-0 bg-cover bg-center rounded-2xl"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&w=1200&q=80')",
              }}
            />
            <div className="absolute inset-0 bg-blue-900/70 rounded-2xl" />
            <div className="relative z-10 py-16">
              <h2 className="text-4xl font-serif font-bold text-white">Get In Touch</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gray-800 text-white p-12 rounded-xl shadow-lg">
              <h3 className="text-2xl font-serif font-bold mb-8 text-white">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <i className="fas fa-map-marker-alt text-2xl text-orange-500 mr-4 w-8"></i>
                  <p>123 Adventure Street, HITEC City, Hyderabad, Telangana, India</p>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-phone text-2xl text-orange-500 mr-4 w-8"></i>
                  <p>+91-9876543210</p>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-envelope text-2xl text-orange-500 mr-4 w-8"></i>
                  <p>info@adventureacademy.com</p>
                </div>
                <div className="flex items-center">
                  <i className="fab fa-whatsapp text-2xl text-orange-500 mr-4 w-8"></i>
                  <p>+91-9876543210</p>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-clock text-2xl text-orange-500 mr-4 w-8"></i>
                  <p>Monday to Friday, 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-12 rounded-xl shadow-lg">
              <h3 className="text-2xl font-serif font-bold mb-8 text-gray-800">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-semibold">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-4 border border-gray-300 rounded-lg font-sans"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 font-semibold">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-4 border border-gray-300 rounded-lg font-sans"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block mb-2 font-semibold">
                    Your Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-4 border border-gray-300 rounded-lg font-sans"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block mb-2 font-semibold">
                    Subject
                  </label>
                  <select
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full p-4 border border-gray-300 rounded-lg font-sans"
                  >
                    <option value="">Select a subject</option>
                    <option value="tour-inquiry">Tour Inquiry</option>
                    <option value="custom-tour">Custom Tour Request</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 font-semibold">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-4 border border-gray-300 rounded-lg font-sans min-h-[150px]"
                  ></textarea>
                </div>

                <button type="submit" className="btn w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="mt-20 rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15220.41432276687!2d78.37239436977538!3d17.447999999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93dc8c5d69df%3A0x19688d4349b0b5!2sHITEC%20City%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1689837152894!5m2!1sen!2sin"
              className="w-full h-96 border-0"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="relative mb-16 text-center">
            <div
              className="absolute inset-0 bg-cover bg-center rounded-2xl"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&w=1200&q=80')",
              }}
            />
            <div className="absolute inset-0 bg-purple-900/70 rounded-2xl" />
            <div className="relative z-10 py-16">
              <h2 className="text-4xl font-serif font-bold text-white">Frequently Asked Questions</h2>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="p-6 cursor-pointer flex justify-between items-center font-semibold">
                <span>What age groups do you cater to?</span>
              </div>
              <div className="px-6 pb-6 border-t border-gray-200">
                <p>We specialize in students aged 12-18, with age-appropriate activities and learning modules.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="p-6 cursor-pointer flex justify-between items-center font-semibold">
                <span>Do you provide transportation from other cities?</span>
              </div>
              <div className="px-6 pb-6 border-t border-gray-200">
                <p>Currently, our tours start from Hyderabad. We can assist with travel arrangements for groups.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="p-6 cursor-pointer flex justify-between items-center font-semibold">
                <span>What safety measures do you have in place?</span>
              </div>
              <div className="px-6 pb-6 border-t border-gray-200">
                <p>
                  We have comprehensive safety protocols, trained staff, medical support, insurance coverage, and 24/7
                  monitoring.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="p-6 cursor-pointer flex justify-between items-center font-semibold">
                <span>Can you customize tours for specific subjects?</span>
              </div>
              <div className="px-6 pb-6 border-t border-gray-200">
                <p>
                  We design curriculum-aligned experiences for science, technology, history, commerce, and other
                  subjects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
