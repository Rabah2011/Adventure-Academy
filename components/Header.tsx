"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed w-full z-50 transition-all duration-300 bg-gray-900/95 backdrop-blur-sm shadow-lg">
      <div className="container mx-auto px-4 max-w-6xl">
        <nav className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-blue-400 no-underline font-serif">
            <i className="fas fa-map-marked-alt mr-2"></i>
            Adventure<span className="text-orange-400">Academy</span>
          </Link>

          <button
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1 p-2 rounded-md hover:bg-gray-700 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            ></span>
          </button>

          <ul className="hidden lg:flex list-none space-x-8">
            <li>
              <Link
                href="/"
                style={{ color: "white" }}
                className="font-semibold no-underline transition-colors hover:text-blue-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                style={{ color: "white" }}
                className="font-semibold no-underline transition-colors hover:text-blue-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/feedback"
                style={{ color: "white" }}
                className="font-semibold no-underline transition-colors hover:text-blue-300"
              >
                Feedback
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                style={{ color: "white" }}
                className="font-semibold no-underline transition-colors hover:text-blue-300"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        <div
          className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col space-y-1 pt-4 pb-2 border-t border-gray-600 bg-gray-900">
            <li>
              <Link
                href="/"
                style={{ color: "white" }}
                className="block font-semibold no-underline transition-colors hover:text-blue-300 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                style={{ color: "white" }}
                className="block font-semibold no-underline transition-colors hover:text-blue-300 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/feedback"
                style={{ color: "white" }}
                className="block font-semibold no-underline transition-colors hover:text-blue-300 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Feedback
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                style={{ color: "white" }}
                className="block font-semibold no-underline transition-colors hover:text-blue-300 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
