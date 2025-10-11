"use client"

import { useEffect, useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Link from "next/link"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Fade in animation on scroll
    const checkFade = () => {
      const fadeElements = document.querySelectorAll(".fade-in")

      fadeElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top
        const elementBottom = element.getBoundingClientRect().bottom
        const isVisible = elementTop < window.innerHeight - 100 && elementBottom > 0

        if (isVisible) {
          element.classList.add("visible")
        }
      })
    }

    // Show/hide sticky CTA button based on scroll
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsVisible(scrollTop > 300)
    }

    window.addEventListener("scroll", checkFade)
    window.addEventListener("scroll", handleScroll)
    window.addEventListener("load", checkFade)
    checkFade() // Initial check
    handleScroll() // Initial check

    return () => {
      window.removeEventListener("scroll", checkFade)
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("load", checkFade)
    }
  }, [])

  return (
    <>
      <Header />

      {/* Sticky Book Now Button */}
      <div className={`fixed bottom-6 right-6 z-50 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <Link href="/contact" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full shadow-lg flex items-center gap-2">
          <i className="fas fa-calendar-check"></i>
          Book Now
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 md:py-40 text-center text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-purple-900/80 to-orange-900/90" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-orange-600/30 rounded-3xl blur-xl"></div>
            <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 md:p-8 border border-white/30">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 text-white font-serif font-bold leading-tight break-words">
                Adventure Academy
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 text-white font-serif font-semibold leading-relaxed break-words">
                Experiential Learning via Travel®
              </h2>
            </div>
          </div>
          <p className="text-base sm:text-lg md:text-xl max-w-4xl mx-auto mb-10 text-white leading-relaxed px-2">
            Discover Hyderabad through experiential education with Adventure Academy's specially designed tours for
            students aged 12-18, combining industry visits, institutional learning, and cultural exploration in India's
            dynamic tech capital.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Link href="#packages" className="btn">
              Explore Packages
            </Link>
            <a href="/adventure.pdf" className="btn btn-secondary">
              Download Brochure
            </a>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section id="pillars" className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="relative mb-16 text-center">
            <div className="absolute inset-0 bg-blue-900/70 rounded-2xl" />
            <div className="relative z-10 py-16">
              <h2 className="text-4xl font-serif font-bold text-white">Three Pillars of Learning Journey With AA®</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="fade-in bg-white p-8 rounded-xl shadow-md text-center transition-transform hover:-translate-y-3">
              
              <i className="fas fa-industry text-5xl text-orange-500 mb-6"></i>
              <h3 className="text-xl font-serif font-bold mb-4 text-gray-800">Industrial Exposure</h3>
              <p>
                Step inside India's leading companies and witness innovation in action. From HITEC City's tech giants to
                Genome Valley's pharmaceutical leaders, students gain firsthand insights into real industries.
              </p>
            </div>
            <div className="fade-in bg-white p-8 rounded-xl shadow-md text-center transition-transform hover:-translate-y-3">
              
              <i className="fas fa-graduation-cap text-5xl text-orange-500 mb-6"></i>
              <h3 className="text-xl font-serif font-bold mb-4 text-gray-800">Institutional Learning</h3>
              <p>
                Explore prestigious institutions that shape India's future. Our carefully curated visits include premier
                universities, research centers, government institutions, and innovation labs.
              </p>
            </div>
            <div className="fade-in bg-white p-8 rounded-xl shadow-md text-center transition-transform hover:-translate-y-3">
              
              <i className="fas fa-monument text-5xl text-orange-500 mb-6"></i>
              <h3 className="text-xl font-serif font-bold mb-4 text-gray-800">Cultural Enrichment</h3>
              <p>
                Discover the rich tapestry of Hyderabad's culture while enjoying recreational activities that build
                teamwork and confidence. Explore architectural marvels and savor authentic cuisine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="relative mb-16 text-center">
            <div className="absolute inset-0 bg-green-900/70 rounded-2xl" />
            <div className="relative z-10 py-16">
              <h2 className="text-4xl font-serif font-bold text-white">Why Choose Adventure Academy?</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="fade-in flex items-start mb-8">
              <i className="fas fa-star text-3xl text-blue-600 mr-4 flex-shrink-0 mt-1"></i>
              <div>
                <h3 className="text-xl font-serif font-bold mb-2 text-gray-800">Educational Excellence</h3>
                <p>
                  Curriculum-aligned experiences designed by education professionals with pre-visit materials and
                  post-visit assessments.
                </p>
              </div>
            </div>
            <div className="fade-in flex items-start mb-8">
              <i className="fas fa-shield-alt text-3xl text-blue-600 mr-4 flex-shrink-0 mt-1"></i>
              <div>
                <h3 className="text-xl font-serif font-bold mb-2 text-gray-800">Safety First</h3>
                <p>
                  Comprehensive safety protocols, trained supervisors, medical support, insurance coverage, and 24/7
                  support.
                </p>
              </div>
            </div>
            <div className="fade-in flex items-start mb-8">
              <i className="fas fa-cogs text-3xl text-blue-600 mr-4 flex-shrink-0 mt-1"></i>
              <div>
                <h3 className="text-xl font-serif font-bold mb-2 text-gray-800">Customizable Experiences</h3>
                <p>Tailored itineraries based on academic focus with flexible scheduling around school calendars.</p>
              </div>
            </div>
            <div className="fade-in flex items-start mb-8">
              <i className="fas fa-users text-3xl text-blue-600 mr-4 flex-shrink-0 mt-1"></i>
              <div>
                <h3 className="text-xl font-serif font-bold mb-2 text-gray-800">Local Expertise</h3>
                <p>
                  Deep knowledge of Hyderabad's educational landscape with established relationships with institutions
                  and industries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="relative mb-16 text-center">
            <div className="absolute inset-0 bg-orange-900/70 rounded-2xl" />
            <div className="relative z-10 py-16">
              <h2 className="text-4xl font-serif font-bold text-white">Tour Packages</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="fade-in package-card bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-blue-600 text-white p-6 text-center">
                <h3 className="text-xl font-serif font-bold">Standard Package</h3>
                <p>Essentials</p>
              </div>
              <div className="p-6">
                
                <p className="mb-2">
                  <strong>Duration:</strong> 2-3 Days
                </p>
                <p className="mb-2">
                  <strong>Group Size:</strong> Up to 60 students
                </p>
                <p className="mb-4">
                  <strong>Ideal For:</strong> Budget-conscious schools, large groups
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-2"></i> Dormitory accommodation
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-2"></i> Nutritious vegetarian meals
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-2"></i> Air-conditioned transportation
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-2"></i> 8-10 educational sites
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-2"></i> Professional guides
                  </li>
                </ul>
                <Link href="/contact" className="btn w-full text-center">
                  Inquire Now
                </Link>
              </div>
            </div>

            <div className="fade-in package-card bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-orange-500 text-white p-6 text-center">
                <h3 className="text-xl font-serif font-bold">Premium Package</h3>
                <p>Enhanced</p>
              </div>
              <div className="p-6">
                
                <p className="mb-2">
                  <strong>Duration:</strong> 2-3 Days
                </p>
                <p className="mb-2">
                  <strong>Group Size:</strong> Up to 40 students
                </p>
                <p className="mb-4">
                  <strong>Ideal For:</strong> Private schools, focused learning
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-2"></i> Hotel accommodation
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-2"></i> Varied meal options
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-2"></i> Premium transportation
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-2"></i> 12-15 educational sites
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-2"></i> Expert guides & workshops
                  </li>
                </ul>
                <Link href="/contact" className="btn w-full text-center">
                  Inquire Now
                </Link>
              </div>
            </div>

            <div className="fade-in package-card bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-purple-600 text-white p-6 text-center">
                <h3 className="text-xl font-serif font-bold">Luxury Package</h3>
                <p>Exuberant</p>
              </div>
              <div className="p-6">
                
                <p className="mb-2">
                  <strong>Duration:</strong> 2-3 Days
                </p>
                <p className="mb-2">
                  <strong>Group Size:</strong> Up to 20 students
                </p>
                <p className="mb-4">
                  <strong>Ideal For:</strong> International schools, premium institutions
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-2"></i> Premium hotel accommodation
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-2"></i> Gourmet dining experiences
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-2"></i> Private coaches/flight options
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-2"></i> 15+ premium sites access
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-2"></i> Industry leader interactions
                  </li>
                </ul>
                <Link href="/contact" className="btn w-full text-center">
                  Inquire Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="relative mb-16 text-center">
            <div className="absolute inset-0 bg-indigo-900/70 rounded-2xl" />
            <div className="relative z-10 py-16">
              <h2 className="text-4xl font-serif font-bold text-white">What Schools Say</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="fade-in bg-white p-8 rounded-xl shadow-md">
              
              <p className="text-lg mb-6 italic">
                "Adventure Academy exceeded all our expectations! The industrial visits opened our students' eyes to
                real-world applications of their studies."
              </p>
              <p className="font-semibold text-gray-600">- Principal, Delhi Public School</p>
            </div>
            <div className="fade-in bg-white p-8 rounded-xl shadow-md">
              
              <p className="text-lg mb-6 italic">
                "Exceptional organization and safety measures by Adventure Academy. Our students came back inspired and
                with clear career direction."
              </p>
              <p className="font-semibold text-gray-600">- Teacher Coordinator, Kendriya Vidyalaya</p>
            </div>
            <div className="fade-in bg-white p-8 rounded-xl shadow-md">
              
              <p className="text-lg mb-6 italic">
                "What impressed us most was how warmly the local people welcomed our students. The genuine warmth of
                Hyderabadis made this adventure unforgettable."
              </p>
              <p className="font-semibold text-gray-600">- Group Leader, Mumbai International School</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Itinerary */}
      <section id="itinerary" className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="relative mb-16 text-center">
            <div className="absolute inset-0 bg-purple-900/70 rounded-2xl" />
            <div className="relative z-10 py-16">
              <h2 className="text-4xl font-serif font-bold text-white">Sample Itinerary</h2>
            </div>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="timeline">
              <div className="fade-in timeline-item mb-12">
                
                <h3 className="text-2xl font-serif font-bold mb-4 text-gray-800">Day 1: Industrial Innovation</h3>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <p className="mb-3">
                    <strong>Morning:</strong> Arrival and welcome session, Visit to major IT company, Interactive
                    session with young professionals
                  </p>
                  <p className="mb-3">
                    <strong>Afternoon:</strong> Pharmaceutical manufacturing unit tour, Science museum exploration,
                    Group reflection
                  </p>
                  <p>
                    <strong>Evening:</strong> Cultural orientation program, Traditional Hyderabadi dinner, Irani cafe
                    experience
                  </p>
                </div>
              </div>
              <div className="fade-in timeline-item mb-12">
                
                <h3 className="text-2xl font-serif font-bold mb-4 text-gray-800">Day 2: Institutions & Heritage</h3>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <p className="mb-3">
                    <strong>Morning:</strong> University campus visit, Research laboratory demonstration, Career
                    guidance session
                  </p>
                  <p className="mb-3">
                    <strong>Afternoon:</strong> Golconda Fort exploration, Charminar and old city walk, Craft workshop
                  </p>
                  <p>
                    <strong>Evening:</strong> Inter-group competitions, Cultural performance, Farewell dinner
                  </p>
                </div>
              </div>
              <div className="fade-in timeline-item">
                
                <h3 className="text-2xl font-serif font-bold mb-4 text-gray-800">Day 3: Integration & Departure</h3>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <p className="mb-3">
                    <strong>Morning:</strong> Startup incubation center visit, Young entrepreneur interactions, Project
                    presentation
                  </p>
                  <p>
                    <strong>Afternoon:</strong> Final reflection session, Certificate distribution, Departure with
                    learning portfolios
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-serif font-bold mb-6">Ready to Transform Learning for Your Students?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join hundreds of schools that have experienced the Adventure Academy difference. Get in touch with us today
            to plan your educational adventure.
          </p>
          <Link href="/contact" className="btn btn-secondary text-lg px-8 py-4">
            Contact Us Now
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}