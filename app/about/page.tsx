import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function AboutPage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative py-40 text-center text-white">
        <div className="absolute inset-0 bg-blue-900/90" />
        <div className="absolute inset-0 bg-gray-900/80" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <h1 className="text-5xl mb-6 text-white font-serif font-bold">About Adventure Academy</h1>
          <p className="text-xl max-w-4xl mx-auto text-white">Where Learning Becomes an Adventure</p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="relative mb-16 text-center">
            <div className="absolute inset-0 bg-blue-900/70 rounded-2xl" />
            <div className="absolute inset-0 bg-blue-900/70 rounded-2xl" />
            <div className="relative z-10 py-16">
              <h2 className="text-4xl font-serif font-bold text-white">Our Story</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-gray-800">
                Transforming Education Through Experience
              </h3>
              <p className="mb-4">
                At Adventure Academy, we are passionate educators and industry professionals who believe that true
                learning happens when students step beyond textbooks and experience the world firsthand. Our educational
                tours are carefully crafted adventures that bridge the gap between classroom theory and real-world
                application.
              </p>
              <p className="mb-4">
                Founded in 1591 by Sultan Muhammad Quii Qutb Shah, Hyderabad beautifully blends 400+ years of rich
                history with cutting-edge modernity. Once the seat of the mighty Nizams and famous for its pearl trade,
                today's Hyderabad has emerged as India's IT capital while preserving its magnificent heritage and
                legendary hospitality.
              </p>
              <p>
                What makes Hyderabad truly special is its people - known for their warmth, generosity, and genuine care
                for visitors. The famous Hyderabad saying "Adaab" isn't just a greeting; it reflects the city's culture
                of respect and hospitality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <i className="fas fa-bullseye text-5xl text-blue-600 mb-6"></i>
              <h3 className="text-2xl font-serif font-bold mb-4 text-gray-800">Our Mission</h3>
              <p>
                To inspire and educate young minds through immersive adventures that combine industrial exposure,
                institutional learning, and cultural appreciation - making every educational journey an unforgettable
                adventure.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <i className="fas fa-eye text-5xl text-blue-600 mb-6"></i>
              <h3 className="text-2xl font-serif font-bold mb-4 text-gray-800">Our Vision</h3>
              <p>
                To become India's leading Adventure Academy, nurturing informed, culturally aware, and industry-ready
                students through transformative experiential learning adventures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="relative mb-16 text-center">
            <div className="absolute inset-0 bg-orange-900/70 rounded-2xl" />
            <div className="absolute inset-0 bg-orange-900/70 rounded-2xl" />
            <div className="relative z-10 py-16">
              <h2 className="text-4xl font-serif font-bold text-white">Three Pillars of Learning</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md text-center transition-transform hover:-translate-y-3">
              <i className="fas fa-industry text-5xl text-orange-500 mb-6"></i>
              <h3 className="text-xl font-serif font-bold mb-4 text-gray-800">Industrial Exposure</h3>
              <p>
                Step inside India's leading companies and witness innovation in action. From HITEC City's tech giants to
                Genome Valley's pharmaceutical leaders, students gain firsthand insights into real industries.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md text-center transition-transform hover:-translate-y-3">
              <i className="fas fa-graduation-cap text-5xl text-orange-500 mb-6"></i>
              <h3 className="text-xl font-serif font-bold mb-4 text-gray-800">Institutional Learning</h3>
              <p>
                Explore prestigious institutions that shape India's future. Our carefully curated visits include premier
                universities, research centers, government institutions, and innovation labs.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md text-center transition-transform hover:-translate-y-3">
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
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="relative mb-16 text-center">
            <div className="absolute inset-0 bg-green-900/70 rounded-2xl" />
            <div className="absolute inset-0 bg-green-900/70 rounded-2xl" />
            <div className="relative z-10 py-16">
              <h2 className="text-4xl font-serif font-bold text-white">Why Choose Adventure Academy?</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start mb-8">
              <i className="fas fa-star text-3xl text-blue-600 mr-4 flex-shrink-0 mt-1"></i>
              <div>
                <h3 className="text-xl font-serif font-bold mb-2 text-gray-800">Educational Excellence</h3>
                <p>
                  Curriculum-aligned experiences designed by education professionals with pre-visit materials and
                  post-visit assessments.
                </p>
              </div>
            </div>
            <div className="flex items-start mb-8">
              <i className="fas fa-shield-alt text-3xl text-blue-600 mr-4 flex-shrink-0 mt-1"></i>
              <div>
                <h3 className="text-xl font-serif font-bold mb-2 text-gray-800">Safety First</h3>
                <p>
                  Comprehensive safety protocols, trained supervisors, medical support, insurance coverage, and 24/7
                  support.
                </p>
              </div>
            </div>
            <div className="flex items-start mb-8">
              <i className="fas fa-cogs text-3xl text-blue-600 mr-4 flex-shrink-0 mt-1"></i>
              <div>
                <h3 className="text-xl font-serif font-bold mb-2 text-gray-800">Customizable Experiences</h3>
                <p>Tailored itineraries based on academic focus with flexible scheduling around school calendars.</p>
              </div>
            </div>
            <div className="flex items-start mb-8">
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

      <Footer />
    </>
  )
}
