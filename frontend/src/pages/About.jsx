import React from "react";
import {
  School,
  UserSquare,
  Users,
  BookOpen,
  Layout,
  Award,
  HeartHandshake,
  Globe,
  LibraryBig,
  GraduationCap,
} from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function About() {
  // Leadership team data
  const leadership = [
    {
      name: "Dr. Priya Sharma",
      role: "Principal",
      experience: "25+ years in education",
      bio: "PhD in Educational Leadership, passionate about innovative teaching methods and student empowerment.",
      quote:
        "Education is not just about academics, but about nurturing compassionate leaders for tomorrow.",
    },
    {
      name: "Mr. Vikram Singh",
      role: "Director",
      experience: "18 years in school administration",
      bio: "MBA in Educational Management, focused on creating holistic learning environments that foster creativity and critical thinking.",
      quote:
        "A school should be a place where curiosity is celebrated and every child feels valued.",
    },
  ];

  // Teachers data
  const teachers = [
    {
      name: "Mrs. Ananya Reddy",
      subject: "Mathematics & Science",
      experience: "15 years",
      specialty: "STEM education",
    },
    {
      name: "Mr. Rajesh Kumar",
      subject: "Languages & Literature",
      experience: "12 years",
      specialty: "Creative writing",
    },
    {
      name: "Ms. Neha Patel",
      subject: "Social Studies",
      experience: "10 years",
      specialty: "Project-based learning",
    },
    {
      name: "Mr. Arjun Mehta",
      subject: "Arts & Music",
      experience: "14 years",
      specialty: "Multidisciplinary arts",
    },
  ];

  // Student statistics
  const studentStats = [
    { icon: <Users className="w-6 h-6" />, value: "1,200+", label: "Students" },
    {
      icon: <Globe className="w-6 h-6" />,
      value: "32",
      label: "Nationalities",
    },
    {
      icon: <Award className="w-6 h-6" />,
      value: "98%",
      label: "Graduation Rate",
    },
    {
      icon: <HeartHandshake className="w-6 h-6" />,
      value: "15+",
      label: "Community Programs",
    },
  ];

  // Facilities data
  const facilities = [
    {
      icon: <LibraryBig className="w-8 h-8" />,
      title: "Learning Resource Center",
      description:
        "Two-story library with 20,000+ books, digital resources, and collaborative study spaces",
    },
    {
      icon: <Layout className="w-8 h-8" />,
      title: "Smart Classrooms",
      description:
        "Technology-enhanced classrooms with interactive whiteboards and digital learning tools",
    },
    {
      icon: <School className="w-8 h-8" />,
      title: "Science Complex",
      description:
        "Modern laboratories for physics, chemistry, biology, and robotics",
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Performing Arts Center",
      description:
        "500-seat auditorium with professional sound and lighting systems",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
        {/* Hero Section */}
        <div className="relative py-20 bg-gradient-to-r from-emerald-700 to-teal-800 text-white">
          <div className="absolute inset-0 bg-[url('/school-building.jpg')] bg-cover bg-center opacity-30"></div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 bg-amber-400 text-emerald-900 px-4 py-1 rounded-full mb-6">
                  <School className="w-5 h-5" />
                  <span className="font-medium">Since 1982</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                  About Discovery Academy
                </h1>
                <p className="text-lg md:text-xl mb-8 max-w-3xl">
                  Where tradition meets innovation in education. For over four
                  decades, we've been nurturing curious minds and building
                  character in a vibrant learning community.
                </p>
                <div className="flex gap-4">
                  <button className="bg-amber-400 hover:bg-amber-300 text-emerald-900 font-medium px-6 py-3 rounded-full transition-all">
                    Our History
                  </button>
                  <button className="border-2 border-white hover:bg-white/10 px-6 py-3 rounded-full font-medium">
                    Virtual Tour
                  </button>
                </div>
              </div>
              <div className="mt-10 md:mt-0">
                <div className="bg-white/20 backdrop-blur-sm p-2 rounded-2xl">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-64 h-64 md:w-80 md:h-80" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <section className="py-16 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission & Vision
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-700">
                  At Discovery Academy, our mission is to provide an exceptional
                  educational experience that empowers students to become
                  compassionate, creative, and critical thinkers.
                </p>
                <p className="text-lg text-gray-700">
                  We envision a learning community where every student discovers
                  their unique potential and develops the courage to make a
                  positive impact in the world.
                </p>
                <div className="p-6 bg-gradient-to-r from-amber-50 to-emerald-50 rounded-xl border-l-4 border-emerald-500">
                  <h3 className="font-bold text-emerald-700 mb-2">
                    Core Values
                  </h3>
                  <ul className="grid grid-cols-2 gap-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-500">✓</span>Integrity
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-500">✓</span>Curiosity
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-500">✓</span>Respect
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-500">✓</span>Resilience
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-500">✓</span>Empathy
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-500">✓</span>Excellence
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl overflow-hidden h-64 flex items-end p-6">
                <div className="text-white">
                  <h3 className="font-bold text-xl mb-1">Our Campus</h3>
                  <p className="text-sm">12-acre learning environment</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-amber-500 to-yellow-400 rounded-2xl overflow-hidden h-64 flex items-end p-6">
                <div className="text-white">
                  <h3 className="font-bold text-xl mb-1">Global Recognition</h3>
                  <p className="text-sm">IB World School since 2005</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl overflow-hidden h-64 flex items-end p-6">
                <div className="text-white">
                  <h3 className="font-bold text-xl mb-1">Sustainability</h3>
                  <p className="text-sm">Solar-powered campus</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-amber-600 to-yellow-500 rounded-2xl overflow-hidden h-64 flex items-end p-6">
                <div className="text-white">
                  <h3 className="font-bold text-xl mb-1">Alumni Network</h3>
                  <p className="text-sm">5,000+ global members</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="py-16 bg-gradient-to-br from-emerald-50 to-amber-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-2 rounded-full mb-4">
                <UserSquare className="w-5 h-5" />
                <span>Guiding Vision</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Leadership Team
              </h2>
              <p className="text-lg text-gray-700">
                Experienced educators dedicated to creating an exceptional
                learning environment
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {leadership.map((leader, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-start gap-6">
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {leader.name}
                        </h3>
                        <div className="inline-block bg-emerald-100 text-emerald-800 text-sm px-3 py-1 rounded-full mb-2">
                          {leader.role} • {leader.experience}
                        </div>
                        <p className="text-gray-700 mb-4">{leader.bio}</p>
                        <blockquote className="border-l-4 border-amber-400 pl-4 text-gray-600 italic">
                          "{leader.quote}"
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Teachers Section */}
        <section className="py-16 max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Distinguished Faculty
            </h2>
            <p className="text-lg text-gray-700">
              85+ certified educators with an average of 12 years teaching
              experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teachers.map((teacher, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-emerald-100 text-center"
              >
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-24 h-24 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900">
                  {teacher.name}
                </h3>
                <div className="text-emerald-700 font-medium mb-1">
                  {teacher.subject}
                </div>
                <div className="text-sm text-gray-600 mb-2">
                  {teacher.experience} experience
                </div>
                <div className="inline-block bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full">
                  {teacher.specialty}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="inline-flex items-center gap-2 text-emerald-700 font-medium group">
              Meet all our educators
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 group-hover:translate-x-1 transition-transform"
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
        </section>

        {/* Students Section */}
        <section className="py-16 bg-gradient-to-br from-amber-100 to-yellow-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Student Community
              </h2>
              <p className="text-lg text-gray-700">
                A diverse, vibrant community of learners who inspire us every
                day
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {studentStats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow"
                >
                  <div className="text-emerald-600 mb-3 mx-auto flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-700">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Student Development Programs
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">•</span>
                      <span>
                        Leadership training through student council and clubs
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">•</span>
                      <span>Social-emotional learning curriculum</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">•</span>
                      <span>
                        University and career counseling starting from Grade 9
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">•</span>
                      <span>Global citizenship initiatives and Model UN</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">•</span>
                      <span>Entrepreneurship incubator program</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-8 flex items-center justify-center">
                  <div className="text-white">
                    <h3 className="text-xl font-bold mb-4">
                      Student Achievements
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <div className="font-bold">
                          2023 National Science Fair
                        </div>
                        <div>1st Place - Senior Division</div>
                      </div>
                      <div>
                        <div className="font-bold">
                          International Robotics Challenge
                        </div>
                        <div>Top 10 Finalists</div>
                      </div>
                      <div>
                        <div className="font-bold">
                          Regional Debating Championship
                        </div>
                        <div>Best Speaker Award</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Classes Section */}
        <section className="py-16 max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Academic Programs & Classes
            </h2>
            <p className="text-lg text-gray-700">
              Comprehensive curriculum designed to meet diverse learning needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-emerald-700 to-teal-800 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Our Curriculum</h3>
              <p className="mb-6">
                We offer a balanced curriculum that combines academic rigor with
                creative expression and physical development. Our approach
                includes:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-amber-300 mr-2">•</span>
                  <span>IB Primary Years Programme (PYP)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-300 mr-2">•</span>
                  <span>Cambridge Lower Secondary</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-300 mr-2">•</span>
                  <span>IGCSE for Grades 9-10</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-300 mr-2">•</span>
                  <span>IB Diploma Programme (DP)</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Class Structure
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">
                        Early Years (Pre-K - K)
                      </h4>
                      <p className="text-gray-700">
                        Play-based learning with focus on social skills,
                        language development, and sensory experiences. Maximum
                        class size: 18 students.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">
                        Elementary (Grades 1-5)
                      </h4>
                      <p className="text-gray-700">
                        Thematic units integrating core subjects. Emphasis on
                        foundational skills and inquiry-based learning.
                        Student-teacher ratio: 15:1.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">
                        Middle School (Grades 6-8)
                      </h4>
                      <p className="text-gray-700">
                        Departmentalized instruction with subject specialists.
                        Advisory program and exploratory courses. Average class
                        size: 22 students.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">
                        High School (Grades 9-12)
                      </h4>
                      <p className="text-gray-700">
                        Comprehensive college-preparatory program with honors
                        and AP courses. Individualized academic planning and
                        mentorship.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Facilities Section */}
        <section className="py-16 bg-gradient-to-br from-emerald-50 to-amber-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Campus & Facilities
              </h2>
              <p className="text-lg text-gray-700">
                State-of-the-art facilities designed to enhance learning and
                development
              </p>
            </div>

            {/* Playground Section */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Our Playground & Sports Facilities
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Our expansive 3-acre playground and sports complex provides
                    students with exceptional opportunities for physical
                    development and team building.
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">
                        Main Features
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-emerald-500 mr-2">•</span>
                          <span>Olympic-sized swimming pool</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-emerald-500 mr-2">•</span>
                          <span>FIFA-standard football field</span>
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
                      <h4 className="font-bold text-gray-900 mb-2">
                        Safety Features
                      </h4>
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
                <div className="bg-gradient-to-br from-amber-400 to-yellow-500 min-h-[300px] flex items-center justify-center">
                  <div className="text-white text-center p-4">
                    <div className="bg-white/30 backdrop-blur-sm p-2 rounded-xl inline-block">
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-64 h-48" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Other Facilities */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {facilities.map((facility, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-emerald-600 mb-4">{facility.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {facility.title}
                  </h3>
                  <p className="text-gray-700">{facility.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="py-16 bg-gradient-to-r from-emerald-700 to-teal-800 text-white">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Experience Our Campus
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Schedule a personalized tour to see our facilities and meet our
              community
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-emerald-700 hover:bg-amber-50 text-lg px-8 py-4 rounded-full font-medium transition-all hover:scale-105">
                Book a Campus Tour
              </button>
              <button className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-4 rounded-full font-medium">
                Contact Admissions
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
