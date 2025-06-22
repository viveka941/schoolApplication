// src/components/Paragliding.js

import React, { useState, useEffect } from "react";
import Navbar from '../../Navbar'


const Paragliding = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hero carousel images
  const slides = [
    {
      title: "Soar Above the Clouds",
      subtitle: "Experience the ultimate freedom of flight",
      bg: "bg-gradient-to-br from-sky-500 to-indigo-700",
    },
    {
      title: "Adventure Awaits",
      subtitle: "Discover breathtaking landscapes from above",
      bg: "bg-gradient-to-br from-amber-500 to-orange-600",
    },
    {
      title: "Professional Guidance",
      subtitle: "Learn from certified instructors",
      bg: "bg-gradient-to-br from-emerald-500 to-teal-700",
    },
  ];

  // Business model cards
  const businessModels = [
    {
      title: "Tandem Flights",
      description:
        "Experience paragliding with a certified instructor. Perfect for beginners.",
      icon: "🚀",
    },
    {
      title: "Training Courses",
      description:
        "Comprehensive courses for all skill levels. Become a certified pilot.",
      icon: "🎓",
    },
    {
      title: "Equipment Sales",
      description: "High-quality paragliding gear from top brands.",
      icon: "🛒",
    },
    {
      title: "Expeditions",
      description: "Multi-day flying adventures in exotic locations.",
      icon: "✈️",
    },
  ];

  // Testimonials
  const testimonials = [
    {
      name: "Sarah Johnson",
      comment:
        "My first tandem flight was absolutely incredible! The instructors made me feel completely safe while enjoying breathtaking views.",
      rating: 5,
    },
    {
      name: "Michael Torres",
      comment:
        "Completed their beginner course last month. Professional instruction and well-maintained equipment. Highly recommended!",
      rating: 5,
    },
    {
      name: "Emma Wilson",
      comment:
        "The sunset flight over the mountains was a once-in-a-lifetime experience. Worth every penny!",
      rating: 4,
    },
  ];

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-sky-100 to-blue-50">
        {/* Hero Section with Carousel */}
        <div className="relative h-screen overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                slide.bg
              } ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
            >
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="container mx-auto px-6 h-full flex flex-col justify-center text-white relative z-10">
                <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fadeIn">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 max-w-2xl animate-fadeIn delay-200">
                  {slide.subtitle}
                </p>
                <div className="flex gap-4 animate-fadeIn delay-500">
                  <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105">
                    Book Now
                  </button>
                  <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-full font-bold transition-all">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Carousel Navigation */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-4 h-4 rounded-full transition-all ${
                  index === currentSlide ? "bg-white w-6" : "bg-white/50"
                }`}
              ></button>
            ))}
          </div>

          {/* Paraglider animation */}
          <div className="absolute top-1/4 left-0 w-full flex justify-center z-0">
            <div className="animate-float">
              <div className="w-8 h-8 rounded-full bg-white/20"></div>
              <div className="w-48 h-48 rounded-t-full border-t-8 border-white/20 -mt-4"></div>
            </div>
          </div>
        </div>

        {/* Business Model Section */}
        <div className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Our Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover our comprehensive paragliding solutions tailored to all
                experience levels
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {businessModels.map((model, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                >
                  <div className="p-8">
                    <div className="text-5xl mb-6">{model.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">
                      {model.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{model.description}</p>
                    <button className="text-blue-600 font-semibold flex items-center">
                      Learn more
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* User Experience & Feedback */}
        <div className="py-20 bg-gradient-to-br from-sky-50 to-blue-100">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                What Our Flyers Say
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Hear from adventurers who have taken to the skies with us
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200"
                >
                  <div className="flex mb-6">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-6 w-6 ${
                          i < testimonial.rating
                            ? "text-amber-400"
                            : "text-gray-300"
                        }`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 text-lg mb-6 italic">
                    "{testimonial.comment}"
                  </p>
                  <div className="flex items-center">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                    <div className="ml-4">
                      <h4 className="font-bold text-gray-800">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-600">Adventure Seeker</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Content Section */}
        <div className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96" />
                  <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-amber-400 to-orange-500 w-48 h-48 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    Since 2010
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">
                  Why Choose Us
                </h2>
                <p className="text-gray-600 text-lg mb-8">
                  With over a decade of experience, we've perfected the art of
                  paragliding. Our team of certified instructors prioritizes
                  safety while ensuring you have an unforgettable experience.
                </p>

                <div className="grid grid-cols-2 gap-6 mb-10">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 text-lg mb-1">
                        Safety First
                      </h3>
                      <p className="text-gray-600">Rigorous safety protocols</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 text-lg mb-1">
                        Expert Team
                      </h3>
                      <p className="text-gray-600">Certified instructors</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 text-lg mb-1">
                        Scenic Locations
                      </h3>
                      <p className="text-gray-600">Breathtaking views</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 text-lg mb-1">
                        Flexible Scheduling
                      </h3>
                      <p className="text-gray-600">
                        Flights at your convenience
                      </p>
                    </div>
                  </div>
                </div>

                <button className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 hover:shadow-lg">
                  Book Your Adventure
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="py-20 bg-gradient-to-br from-sky-100 to-indigo-100">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Flight Gallery
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A glimpse of the incredible experiences our flyers have enjoyed
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[...Array(8)].map((_, index) => (
                <div
                  key={index}
                  className="aspect-square bg-gradient-to-br from-blue-200 to-indigo-300 rounded-xl overflow-hidden shadow-lg relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <div className="text-white">
                      <h3 className="font-bold">
                        Mountain Flight #{index + 1}
                      </h3>
                      <p className="text-sm">Altitude: 1200m</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 bg-gradient-to-r from-blue-700 to-indigo-800 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready for Takeoff?
            </h2>
            <p className="text-xl max-w-3xl mx-auto mb-10">
              Book your paragliding adventure today and experience the thrill of
              flight like never before
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105">
                Book Your Flight
              </button>
              <button className="bg-transparent border-2 border-white hover:bg-white/10 px-8 py-4 rounded-full font-bold text-lg transition-all">
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-400 py-12">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-white text-xl font-bold mb-4">
                  SkyHigh Paragliding
                </h3>
                <p className="mb-4">
                  Making dreams of flight a reality since 2010. Safety,
                  adventure, and unforgettable experiences.
                </p>
                <div className="flex gap-4">
                  {["Facebook", "Twitter", "Instagram", "YouTube"].map(
                    (social, index) => (
                      <div
                        key={index}
                        className="bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-600 transition-colors"
                      >
                        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-6 h-6" />
                      </div>
                    )
                  )}
                </div>
              </div>

              <div>
                <h4 className="text-white text-lg font-semibold mb-4">
                  Quick Links
                </h4>
                <ul className="space-y-2">
                  {[
                    "Home",
                    "About Us",
                    "Services",
                    "Pricing",
                    "Gallery",
                    "Contact",
                  ].map((link, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="hover:text-white transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-white text-lg font-semibold mb-4">
                  Our Services
                </h4>
                <ul className="space-y-2">
                  {businessModels.slice(0, 4).map((model, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="hover:text-white transition-colors"
                      >
                        {model.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-white text-lg font-semibold mb-4">
                  Contact Info
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-3 mt-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Mountain View, Adventure Valley</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-3 mt-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span>+1 (555) 123-4567</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-3 mt-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span>info@skyhighparagliding.com</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-12 pt-8 text-center">
              <p>© 2023 SkyHigh Paragliding. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
     
    </>
  );
};

export default Paragliding;
