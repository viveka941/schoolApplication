import React from 'react';
import { 
  MapPin, 
  Clock, 
  Wifi, 
  TreePine, 
  BookOpen, 
  Utensils,
  Dumbbell,
  Microscope,
  Music,
  Palette,
  Bus,
  ShieldCheck,
  Users
} from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

function Campus() {
  // Campus features data
  const features = [
    {
      icon: <TreePine className="w-8 h-8" />,
      title: "Green Campus",
      description: "12-acre campus with native gardens, outdoor classrooms, and sustainability initiatives"
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "Smart Campus",
      description: "High-speed WiFi throughout campus with IoT-enabled learning environments"
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Safe Environment",
      description: "24/7 security, biometric access, and comprehensive safety protocols"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Spaces",
      description: "Collaborative areas designed for student interaction and group learning"
    }
  ];

  // Facilities data
  const facilities = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Learning Resource Center",
      description: "Two-story library with 25,000+ books and digital research stations"
    },
    {
      icon: <Microscope className="w-8 h-8" />,
      title: "Science Complex",
      description: "Modern laboratories for physics, chemistry, biology, and robotics"
    },
    {
      icon: <Music className="w-8 h-8" />,
      title: "Performing Arts Center",
      description: "500-seat auditorium with professional sound and lighting"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Visual Arts Studio",
      description: "Dedicated spaces for painting, sculpture, ceramics, and digital arts"
    },
    {
      icon: <Dumbbell className="w-8 h-8" />,
      title: "Athletics Complex",
      description: "Olympic pool, indoor courts, fitness center, and sports fields"
    },
    {
      icon: <Utensils className="w-8 h-8" />,
      title: "Dining Commons",
      description: "Nutritionist-designed meals with diverse dietary options"
    }
  ];

  // Photo gallery data
  const gallery = [
    { id: 1, category: "Academic", title: "Innovation Lab" },
    { id: 2, category: "Arts", title: "Ceramics Studio" },
    { id: 3, category: "Sports", title: "Swimming Complex" },
    { id: 4, category: "Outdoor", title: "Botanical Garden" },
    { id: 5, category: "Academic", title: "Library Reading Nook" },
    { id: 6, category: "Community", title: "Student Lounge" }
  ];

  // Campus tour schedule
  const tourSchedule = [
    { day: "Monday", time: "9:00 AM & 2:00 PM" },
    { day: "Wednesday", time: "10:00 AM & 3:00 PM" },
    { day: "Friday", time: "11:00 AM & 4:00 PM" },
    { day: "Saturday", time: "10:00 AM" }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
        {/* Hero Section */}
        <div className="relative py-32 bg-gradient-to-r from-emerald-800 to-teal-900 text-white">
          <div className="absolute inset-0 bg-[url('/campus-aerial.jpg')] bg-cover bg-center opacity-40"></div>
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 bg-amber-400 text-emerald-900 px-6 py-2 rounded-full mb-6">
              <MapPin className="w-5 h-5" />
              <span className="font-medium">Explore Our Campus</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 max-w-4xl mx-auto">
              Discover Our Inspiring Learning Environment
            </h1>
            <p className="text-xl mb-10 max-w-3xl mx-auto">
              A 12-acre campus designed to nurture curiosity, creativity, and
              community
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-amber-400 hover:bg-amber-300 text-emerald-900 font-bold text-lg px-8 py-4 rounded-full transition-all hover:scale-105">
                Schedule a Tour
              </button>
              <button className="border-2 border-white hover:bg-white/10 text-lg px-8 py-4 rounded-full font-medium">
                Virtual Campus Tour
              </button>
            </div>
          </div>
        </div>

        {/* Campus Overview */}
        <section className="py-16 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                A Campus Designed for Learning
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Our purpose-built campus combines state-of-the-art facilities
                with natural environments to create the perfect setting for
                academic excellence and personal growth.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-gray-900 mb-3">
                    Sustainable Design
                  </h3>
                  <p className="text-gray-700">
                    LEED-certified buildings, solar panels, rainwater
                    harvesting, and extensive green spaces
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-3">
                    Learning Ecosystems
                  </h3>
                  <p className="text-gray-700">
                    Flexible spaces that adapt to different learning styles and
                    teaching approaches
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl overflow-hidden h-64 flex items-end p-6">
                <div className="text-white">
                  <h3 className="font-bold text-xl mb-1">Academic Quad</h3>
                  <p className="text-sm">Central learning hub</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-amber-500 to-yellow-400 rounded-2xl overflow-hidden h-64 flex items-end p-6">
                <div className="text-white">
                  <h3 className="font-bold text-xl mb-1">Innovation Center</h3>
                  <p className="text-sm">STEM and maker spaces</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl overflow-hidden h-64 flex items-end p-6">
                <div className="text-white">
                  <h3 className="font-bold text-xl mb-1">Performing Arts</h3>
                  <p className="text-sm">Theater and music facilities</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-amber-600 to-yellow-500 rounded-2xl overflow-hidden h-64 flex items-end p-6">
                <div className="text-white">
                  <h3 className="font-bold text-xl mb-1">Athletics Complex</h3>
                  <p className="text-sm">Olympic-standard facilities</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Campus Features */}
        <section className="py-16 bg-gradient-to-br from-emerald-50 to-amber-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Campus Features
              </h2>
              <p className="text-lg text-gray-700">
                Thoughtfully designed elements that enhance the learning
                experience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-emerald-100"
                >
                  <div className="text-emerald-600 mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Facilities Section */}
        <section className="py-16 max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              World-Class Facilities
            </h2>
            <p className="text-lg text-gray-700">
              Spaces designed to inspire learning, creativity, and growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 transition-transform duration-300 group"
              >
                <div className="h-48 bg-gradient-to-r from-emerald-500 to-amber-400 relative">
                  <div className="absolute inset-0 bg-[url('/facility-placeholder.jpg')] bg-cover bg-center opacity-80 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                    <h3 className="text-xl font-bold text-white">
                      {facility.title}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-emerald-600">{facility.icon}</div>
                    <p className="text-gray-700">{facility.description}</p>
                  </div>
                  <button className="text-emerald-700 font-medium flex items-center gap-1 group-hover:underline">
                    View details
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
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
        </section>

        {/* Playground & Sports */}
        <section className="py-16 bg-gradient-to-br from-amber-100 to-yellow-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-2 rounded-full mb-6">
                  <Dumbbell className="w-5 h-5" />
                  <span>Active Learning</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Playground & Sports Facilities
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                  Our expansive athletic facilities promote physical wellness,
                  teamwork, and school spirit through diverse sports programs.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-3">
                      Main Features
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-emerald-500 mr-2">•</span>
                        <span>FIFA-standard football field</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-emerald-500 mr-2">•</span>
                        <span>Olympic-sized swimming pool</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-emerald-500 mr-2">•</span>
                        <span>Indoor basketball courts</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-emerald-500 mr-2">•</span>
                        <span>400m synthetic athletic track</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-3">
                      Safety Features
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-emerald-500 mr-2">•</span>
                        <span>Rubberized play surfaces</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-emerald-500 mr-2">•</span>
                        <span>Age-appropriate equipment</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-emerald-500 mr-2">•</span>
                        <span>Certified supervisors</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-emerald-500 mr-2">•</span>
                        <span>First-aid stations</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl overflow-hidden h-64 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="font-bold text-xl mb-1">Swimming Complex</h3>
                    <p className="text-sm">8-lane competition pool</p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-amber-500 to-yellow-400 rounded-2xl overflow-hidden h-64 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="font-bold text-xl mb-1">Sports Field</h3>

                    <p className="text-sm">Multi-purpose turf and courts</p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl overflow-hidden h-64 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="font-bold text-xl mb-1">Basketball Arena</h3>
                    <p className="text-sm">Indoor wood-floor court</p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-amber-600 to-yellow-500 rounded-2xl overflow-hidden h-64 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="font-bold text-xl mb-1">Athletics Track</h3>
                    <p className="text-sm">400m rubberized surface</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        <section
          className="py-16 max-w-7xl mx-auto px-6 "
          aria-labelledby="gallery-heading"
        >
          <div className="text-center max-w-3xl mx-auto mb-16 bg-gradient-to-r from-emerald-800/5 to-teal-900/5 p-5 rounded-xl border border-emerald-200">
            <h2
              id="gallery-heading"
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Campus Gallery
            </h2>
            <p className="text-lg text-gray-700">
              Peek into our vibrant campus life through snapshots of innovation,
              creativity, and community
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {gallery.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
                aria-label={`${item.title} - ${item.category}`}
              >
                <div
                  className="h-64 bg-gradient-to-br from-emerald-500/20 to-amber-400/20 bg-[url('/gallery-placeholder.jpg')] bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  aria-hidden="true"
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block bg-amber-400 text-emerald-900 text-xs font-semibold px-3 py-1 rounded-full mb-2">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-bold text-white">
                      {item.title}
                    </h3>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <h3 className="text-lg font-bold text-gray-900 truncate">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.category}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tour Schedule */}
        <section
          className="py-16 bg-gradient-to-br from-emerald-600/5 to-amber-500/5 relative"
          aria-labelledby="tour-schedule-heading"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48Y2lyY2xlIGN4PSIxNSIgY3k9IjE1IiByPSIxLjUiIGZpbGw9IiMwM2E3ODAiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PGNpcmNsZSBjeD0iNDUiIGN5PSI0NSIgcj0iMS41IiBmaWxsPSIjZjU5ZDAwIiBmaWxsLW9wYWNpdHk9IjAuMSIvPjwvc3ZnPg==')] opacity-30"></div>

          <div className="max-w-5xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2
                id="tour-schedule-heading"
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              >
                Campus Tour Schedule
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Visit us in person or online to discover what makes our campus
                unique
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-emerald-100">
                <div className="bg-gradient-to-r from-emerald-700 to-teal-800 p-6 text-white text-center">
                  <div className="flex items-center justify-center gap-3">
                    <Clock className="w-8 h-8" />
                    <h3 className="text-2xl font-bold">Tour Times</h3>
                  </div>
                  <p className="mt-2 text-emerald-100">
                    Tours last approximately 90 minutes
                  </p>
                </div>

                <div className="divide-y divide-gray-100">
                  {tourSchedule.map((slot, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center px-8 py-5 hover:bg-emerald-50 transition-colors"
                      aria-label={`Tour available on ${slot.day} at ${slot.time}`}
                    >
                      <span className="font-medium text-gray-800 text-lg flex items-center gap-2">
                        <span className="bg-emerald-100 text-emerald-800 rounded-full w-8 h-8 flex items-center justify-center text-sm">
                          {index + 1}
                        </span>
                        {slot.day}
                      </span>
                      <span className="text-emerald-700 font-semibold bg-emerald-50 px-4 py-1 rounded-full">
                        {slot.time}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="p-6 border-t border-gray-100">
                  <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white font-bold py-4 rounded-xl transition-all hover:scale-[1.02] focus:ring-4 focus:ring-emerald-300 focus:outline-none">
                    Reserve Your Spot
                  </button>
                </div>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-emerald-50 rounded-2xl shadow-xl p-8 border border-amber-100">
                <div className="flex items-start gap-5 mb-8">
                  <div className="bg-amber-100 p-3 rounded-xl">
                    <Bus
                      className="w-8 h-8 text-amber-700"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Getting Here
                    </h3>
                    <p className="text-gray-700">
                      Convenient access with multiple transportation options
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="bg-white p-4 rounded-xl shadow-sm flex-1 border border-gray-100">
                      <h4 className="font-bold text-emerald-800 mb-2 flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Public Transit
                      </h4>
                      <p className="text-sm text-gray-600">
                        Bus lines 72, 105, and 220 stop at campus entrance
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-xl shadow-sm flex-1 border border-gray-100">
                      <h4 className="font-bold text-amber-800 mb-2 flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Parking
                      </h4>
                      <p className="text-sm text-gray-600">
                        Visitor parking available in Lot B with EV charging
                      </p>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <h4 className="font-bold text-teal-800 mb-2 flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Accessibility
                    </h4>
                    <p className="text-sm text-gray-600">
                      Full ADA-compliant access throughout campus with ramps and
                      elevators
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-emerald-800/5 to-teal-900/5 p-5 rounded-xl border border-emerald-200">
                    <h4 className="font-bold text-emerald-900 flex items-center gap-2 mb-2">
                      <MapPin className="h-5 w-5" />
                      Campus Address
                    </h4>
                    <p className="text-gray-700">
                      123 Education Lane, Learning City, LC 12345
                    </p>
                    <button className="mt-3 text-emerald-700 font-medium flex items-center gap-1 hover:underline text-sm">
                      Get Directions
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Campus;
