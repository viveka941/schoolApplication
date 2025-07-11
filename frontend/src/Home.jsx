import React from "react";
import { Button } from "@/components/ui/button";
import Navbar from "./pages/Navbar";
import {
  BookOpen,
  GraduationCap,
  Globe,
  HeartHandshake,
  Star,
  ArrowRight,
  Trophy,
  Server,
  Activity,
} from "lucide-react";
import Footer from "./pages/Footer";

const Home = () => {
  // Features data
  const features = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Holistic Curriculum",
      description:
        "Integrated learning approach combining academics, arts, and physical development",
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Expert Educators",
      description:
        "Certified teachers with average 12+ years of teaching experience",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Perspective",
      description: "International programs and cultural exchange opportunities",
    },
    {
      icon: <HeartHandshake className="w-8 h-8" />,
      title: "Inclusive Community",
      description: "Diverse student body with comprehensive support systems",
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      quote:
        "Discovery transformed our child's learning experience. The personalized attention is unmatched.",
      author: "Sarah Johnson",
      role: "Parent of Grade 3 student",
    },
    {
      quote:
        "The innovative STEM programs gave our daughter the confidence to pursue engineering.",
      author: "Michael Chen",
      role: "Parent of Alumni",
    },
    {
      quote:
        "As an educator, I'm impressed by their professional development programs for teachers.",
      author: "Dr. Emily Rodriguez",
      role: "Visiting Professor",
    },
  ];

  // Programs data
  const programs = [
    {
      title: "Early Childhood",
      age: "2-5 years",
      description: "Play-based learning with sensory development",
    },
    {
      title: "Elementary School",
      age: "6-11 years",
      description: "Core academics with exploratory learning",
    },
    {
      title: "Middle School",
      age: "12-14 years",
      description: "Specialized tracks with mentorship",
    },
    {
      title: "High School",
      age: "15-18 years",
      description: "College prep with AP/IB programs",
    },
  ];

  // Top Students data
  const topStudents = [
    { name: "Amit Sharma", grade: 5, percentage: 92, year: 2024 },
    { name: "Priya Patel", grade: 7, percentage: 95, year: 2024 },
    { name: "Rahul Verma", grade: 6, percentage: 89, year: 2024 },
    { name: "Sneha Gupta", grade: 8, percentage: 91, year: 2024 },
    { name: "Arjun Kumar", grade: 5, percentage: 87, year: 2024 },
    { name: "Neha Singh", grade: 7, percentage: 93, year: 2024 },
    { name: "Vikram Joshi", grade: 6, percentage: 90 ,year : 2024},
    { name: "Ananya Reddy", grade: 8, percentage: 94 ,year : 2024},
    { name: "Karan Malhotra", grade: 5, percentage: 88,year : 2024 },
    { name: "Isha Choudhary", grade: 7, percentage: 96,year : 2024 },
  ];

  // Services data
  const services = [
    {
      icon: <Server className="w-8 h-8" />,
      title: "Transportation",
      description:
        "Safe and reliable school bus service covering all neighborhoods",
    },
    {
      icon: <HeartHandshake className="w-8 h-8" />,
      title: "Counseling",
      description:
        "Professional guidance for academic and personal development",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Library",
      description:
        "20,000+ books and digital resources with dedicated reading spaces",
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Tutoring",
      description: "After-school academic support in all subjects",
    },
  ];

  // Activities data
  const activities = [
    {
      title: "Sports",
      description:
        "Football, basketball, swimming, athletics, and martial arts",
      icon: "⚽",
    },
    {
      title: "Arts",
      description: "Painting, pottery, theater, dance, and music classes",
      icon: "🎨",
    },
    {
      title: "STEM Club",
      description: "Robotics, coding, science experiments, and math olympiad",
      icon: "🔬",
    },
    {
      title: "Eco Club",
      description:
        "Gardening, recycling initiatives, and environmental awareness",
      icon: "🌱",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fff9e7] overflow-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-16 py-16 w-full max-w-7xl mx-auto">
        {/* Left Text */}
        <div className="max-w-xl space-y-6 text-center lg:text-left mt-10 lg:mt-0">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-1 rounded-full mb-4">
            <Star className="w-4 h-4" />
            <span className="text-sm font-medium">Ranked #1 in the region</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            Where Bright <br className="hidden md:block" />
            <span className="text-emerald-700">Futures Begin</span>
          </h1>

          <p className="flex justify-center lg:justify-start items-center gap-2 text-gray-700 text-lg">
            <span className="text-2xl">🏫</span>
            Discovery is a school where young minds are encouraged to explore.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button className="bg-emerald-700 hover:bg-emerald-600 text-white text-lg px-6 py-4 rounded-full transition-all hover:scale-105">
              Our Principles
            </Button>
            <Button
              variant="outline"
              className="text-emerald-700 border-emerald-700 hover:bg-emerald-50 text-lg px-6 py-4 rounded-full transition-all"
            >
              Book a Tour
            </Button>
          </div>
        </div>

        {/* Right Image */}
        <div className="mb-10 lg:mb-0 relative">
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-yellow-200 rounded-full -z-10 animate-pulse"></div>
          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-emerald-200 rounded-full -z-10"></div>

          <img
            src="/heroGirl.webp"
            alt="Student"
            className="w-[300px] md:w-[400px] lg:w-[450px] object-contain mx-auto transition-transform duration-700 hover:scale-105"
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gradient-to-r from-amber-100 to-yellow-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <h3 className="text-4xl font-bold text-emerald-700">42+</h3>
            <p className="text-gray-700">Years Established</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-4xl font-bold text-emerald-700">1,200+</h3>
            <p className="text-gray-700">Students Enrolled</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-4xl font-bold text-emerald-700">98%</h3>
            <p className="text-gray-700">Graduation Rate</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-4xl font-bold text-emerald-700">15:1</h3>
            <p className="text-gray-700">Student-Teacher Ratio</p>
          </div>
        </div>
      </section>

      {/* Top Students Section */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-200 to-yellow-100 px-6 py-2 rounded-full mb-4">
            <Trophy className="w-5 h-5 text-amber-800" />
            <span className="text-amber-800 font-medium">
              Academic Excellence
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Top Performing Students
          </h2>
          <p className="text-lg text-gray-700">
            Celebrating our outstanding achievers who have excelled academically
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl shadow-lg border border-amber-100">
          <table className="min-w-full bg-white">
            <thead className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white">
              <tr>
                <th className="py-4 px-6 text-left">Rank</th>
                <th className="py-4 px-6 text-left">Student Name</th>
                <th className="py-4 px-6 text-left">Class</th>
                <th className="py-4 px-6 text-left">Percentage</th>
                <th className="py-4 px-6 text-left">Year</th>
              </tr>
            </thead>
            <tbody>
              {topStudents.map((student, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-white" : "bg-amber-50"}
                >
                  <td className="py-4 px-6 font-medium">
                    <span className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white w-8 h-8 rounded-full flex items-center justify-center">
                      {index + 1}
                    </span>
                  </td>
                  <td className="py-4 px-6 font-medium text-gray-900">
                    {student.name}
                  </td>
                  <td className="py-4 px-6 text-gray-700">
                    Grade {student.grade}
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-emerald-700">
                        {student.percentage}%
                      </span>
                      <div className="w-24 bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2.5 rounded-full"
                          style={{ width: `${student.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-gray-700">
                     {student.year}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Families Choose Discovery
          </h2>
          <p className="text-lg text-gray-700">
            Our innovative approach to education nurtures creativity, critical
            thinking, and character development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-amber-50"
            >
              <div className="text-emerald-700 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gradient-to-br from-emerald-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Support Services
            </h2>
            <p className="text-lg text-gray-700">
              Comprehensive services to support students' learning journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-emerald-100"
              >
                <div className="text-emerald-700 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Learning Programs
            </h2>
            <p className="text-lg text-gray-700">
              Age-appropriate curricula designed to inspire lifelong learners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="h-2 bg-gradient-to-r from-emerald-500 to-amber-400"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {program.title}
                  </h3>
                  <div className="inline-block bg-amber-100 text-amber-800 text-sm px-3 py-1 rounded-full mb-4">
                    {program.age}
                  </div>
                  <p className="text-gray-700 mb-4">{program.description}</p>
                  <Button
                    variant="link"
                    className="text-emerald-700 p-0 font-medium group"
                  >
                    Learn more
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-16 bg-gradient-to-r from-amber-100 to-yellow-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-2 rounded-full mb-4">
              <Activity className="w-5 h-5" />
              <span>Beyond the Classroom</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Playground & School Activities
            </h2>
            <p className="text-lg text-gray-700">
              Our vibrant campus life fosters creativity, teamwork, and physical
              wellness
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Playground Section */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="h-64 bg-gradient-to-r from-emerald-400 to-amber-300 relative">
                <div className="absolute inset-0 bg-[url('/playground.jpg')] bg-cover bg-center opacity-80"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <h3 className="text-2xl font-bold text-white">
                    Our Playground
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Our state-of-the-art playground spans 2 acres with dedicated
                  areas for different age groups. Features include:
                </p>
                <ul className="grid grid-cols-2 gap-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="mr-2">✓</span> Olympic-sized track
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✓</span> Swimming pool
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✓</span> Basketball courts
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✓</span> Climbing structures
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✓</span> Soccer field
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✓</span> Sand play area
                  </li>
                </ul>
              </div>
            </div>

            {/* Activities Section */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Student Activities
              </h3>
              <div className="space-y-6">
                {activities.map((activity, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <span className="text-3xl">{activity.icon}</span>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">
                        {activity.title}
                      </h4>
                      <p className="text-gray-700">{activity.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700">
                  View Activity Calendar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Community Says
          </h2>
          <p className="text-lg text-gray-700">
            Hear from parents, students, and educators about their Discovery
            experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md border border-amber-100 relative"
            >
              <div className="absolute -top-4 left-6 bg-amber-100 w-8 h-8 rounded-full flex items-center justify-center">
                <span className="text-amber-800 text-2xl">“</span>
              </div>
              <p className="text-gray-700 italic mb-6 mt-4">
                {testimonial.quote}
              </p>
              <div>
                <h4 className="font-bold text-gray-900">
                  {testimonial.author}
                </h4>
                <p className="text-gray-600 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-700 to-teal-800 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Begin Your Discovery Journey?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Schedule a personalized campus tour and see our learning environment
            in action
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-emerald-700 hover:bg-amber-50 text-lg px-8 py-6 rounded-full font-medium transition-all hover:scale-105">
              Book a Campus Tour
            </Button>
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white/10 text-lg px-8 py-6 rounded-full font-medium"
            >
              Download Prospectus
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
