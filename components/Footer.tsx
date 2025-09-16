import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h4 className="text-white mb-6 font-serif font-bold relative after:content-[''] after:block after:w-10 after:h-1 after:bg-orange-500 after:mt-3 after:rounded-sm">
              Adventure Academy
            </h4>
            <p className="mb-6">
              Where Learning Becomes Adventure. Experience Learning. Discover Possibilities. Create Memories.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-full text-white transition-all hover:bg-blue-600 hover:-translate-y-1"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-full text-white transition-all hover:bg-blue-600 hover:-translate-y-1"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-full text-white transition-all hover:bg-blue-600 hover:-translate-y-1"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-full text-white transition-all hover:bg-blue-600 hover:-translate-y-1"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white mb-6 font-serif font-bold relative after:content-[''] after:block after:w-10 after:h-1 after:bg-orange-500 after:mt-3 after:rounded-sm">
              Quick Links
            </h4>
            <ul className="list-none space-y-3">
              <li>
                <Link href="/about" className="text-gray-300 no-underline transition-colors hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#pillars" className="text-gray-300 no-underline transition-colors hover:text-white">
                  Pillars of Learning
                </Link>
              </li>
              <li>
                <Link href="/#packages" className="text-gray-300 no-underline transition-colors hover:text-white">
                  Tour Packages
                </Link>
              </li>
              <li>
                <Link href="/#itinerary" className="text-gray-300 no-underline transition-colors hover:text-white">
                  Sample Itinerary
                </Link>
              </li>
              <li>
                <Link href="/#testimonials" className="text-gray-300 no-underline transition-colors hover:text-white">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 no-underline transition-colors hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-6 font-serif font-bold relative after:content-[''] after:block after:w-10 after:h-1 after:bg-orange-500 after:mt-3 after:rounded-sm">
              Packages
            </h4>
            <ul className="list-none space-y-3">
              <li>
                <Link href="/#packages" className="text-gray-300 no-underline transition-colors hover:text-white">
                  Standard Package
                </Link>
              </li>
              <li>
                <Link href="/#packages" className="text-gray-300 no-underline transition-colors hover:text-white">
                  Premium Package
                </Link>
              </li>
              <li>
                <Link href="/#packages" className="text-gray-300 no-underline transition-colors hover:text-white">
                  Luxury Package
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 no-underline transition-colors hover:text-white">
                  Custom Tours
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-6 font-serif font-bold relative after:content-[''] after:block after:w-10 after:h-1 after:bg-orange-500 after:mt-3 after:rounded-sm">
              Resources
            </h4>
            <ul className="list-none space-y-3">
              <li>
                <a href="/adventure.pdf" className="text-gray-300 no-underline transition-colors hover:text-white">
                  Download Brochure
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 no-underline transition-colors hover:text-white">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 no-underline transition-colors hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 no-underline transition-colors hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 no-underline transition-colors hover:text-white">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-12 pt-8 border-t border-white/10">
          <p>&copy; 2025 Adventure Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
