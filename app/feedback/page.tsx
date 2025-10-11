"use client"

import { useEffect, useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

interface Feedback {
  id: number
  text: string
  date: string
}

export default function FeedbackPage() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([])

  useEffect(() => {
    const storedFeedbacks = localStorage.getItem('feedbacks')
    if (storedFeedbacks) {
      setFeedbacks(JSON.parse(storedFeedbacks))
    }
  }, [])

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative py-40 text-center text-white">
        <div className="absolute inset-0 bg-blue-900/90" />
        <div className="absolute inset-0 bg-gray-900/80" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <h1 className="text-5xl mb-6 text-white font-serif font-bold">Feedback</h1>
          <p className="text-xl max-w-4xl mx-auto text-white">
            See what people are saying about Adventure Academy
          </p>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="relative mb-16 text-center">
            <div className="absolute inset-0 bg-purple-900/70 rounded-2xl" />
            <div className="relative z-10 py-16">
              <h2 className="text-4xl font-serif font-bold text-white">User Feedback</h2>
            </div>
          </div>

          {feedbacks.length === 0 ? (
            <div className="text-center">
              <p className="text-xl text-gray-600">No feedback yet. Be the first to share your thoughts!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {feedbacks.map((feedback) => (
                <div key={feedback.id} className="bg-white p-6 rounded-xl shadow-md">
                  <p className="text-lg mb-4 italic">"{feedback.text}"</p>
                  <p className="font-semibold text-gray-600 text-right">
                    - {new Date(feedback.date).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  )
}
