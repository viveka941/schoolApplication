import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MessageSquare,
  HelpCircle,
  Send,
  Bus
} from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Contact() {
  // FAQ data
  const faqItems = [
    {
      question: "What are your office hours?",
      answer:
        "Our main office is open Monday-Friday from 8:00 AM to 6:00 PM, and Saturdays from 9:00 AM to 1:00 PM.",
    },
    {
      question: "How quickly do you respond to inquiries?",
      answer:
        "We typically respond to all inquiries within 24 business hours. For urgent matters, please call our main office.",
    },
    {
      question: "Can I schedule a campus tour online?",
      answer:
        "Yes! Use our online tour scheduler or contact our admissions office to arrange a personalized tour.",
    },
    {
      question: "Do you have parking available for visitors?",
      answer:
        "Yes, we have dedicated visitor parking in Lot B near the main entrance. Parking passes are available at the security booth.",
    },
  ];

  // Department contacts
  const departments = [
    {
      name: "Admissions",
      email: "admissions@example.edu",
      phone: "(555) 123-4567",
    },
    {
      name: "Academic Support",
      email: "academics@example.edu",
      phone: "(555) 123-4568",
    },
    {
      name: "Student Services",
      email: "studentservices@example.edu",
      phone: "(555) 123-4569",
    },
    {
      name: "Financial Aid",
      email: "finaid@example.edu",
      phone: "(555) 123-4570",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <div className="relative py-32 bg-gradient-to-r from-green-800 to-indigo-900 text-white">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-30"></div>
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 bg-blue-500 text-white px-6 py-2 rounded-full mb-6">
              <MessageSquare className="w-5 h-5" />
              <span className="font-medium">We're Here to Help</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 max-w-4xl mx-auto">
              Connect With Our Community
            </h1>
            <p className="text-xl mb-10 max-w-3xl mx-auto">
              Have questions? Our team is ready to assist you with any inquiries
              about admissions, programs, or campus life.
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <section className="py-16 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-blue-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Get in Touch
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-5">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1">
                      Phone
                    </h3>
                    <p className="text-gray-700">(555) 123-4567</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Monday-Friday, 8am-6pm
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1">
                      Email
                    </h3>
                    <p className="text-gray-700">info@example.edu</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Response within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1">
                      Address
                    </h3>
                    <p className="text-gray-700">
                      123 Education Lane
                      <br />
                      Learning City, LC 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Clock className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1">
                      Office Hours
                    </h3>
                    <p className="text-gray-700">
                      Monday-Friday: 8:00 AM - 6:00 PM
                      <br />
                      Saturday: 9:00 AM - 1:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>

                <div className="pt-6">
                  <h3 className="font-bold text-gray-900 text-lg mb-4">
                    Follow Us
                  </h3>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="bg-blue-100 hover:bg-blue-200 text-blue-700 p-3 rounded-full transition-colors"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="bg-blue-100 hover:bg-blue-200 text-blue-700 p-3 rounded-full transition-colors"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="bg-blue-100 hover:bg-blue-200 text-blue-700 p-3 rounded-full transition-colors"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="bg-blue-100 hover:bg-blue-200 text-blue-700 p-3 rounded-full transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-xl p-8 border border-blue-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Send a Message
              </h2>
              <p className="text-gray-700 mb-8">
                Have questions? Fill out the form below and our team will get
                back to you as soon as possible.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="department"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Department
                  </label>
                  <select
                    id="department"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition bg-white"
                  >
                    <option value="">Select a department</option>
                    <option value="admissions">Admissions</option>
                    <option value="academics">Academic Programs</option>
                    <option value="financial">Financial Aid</option>
                    <option value="student">Student Services</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-bold py-4 px-8 rounded-xl transition-all flex items-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Department Contacts */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Department Contacts
              </h2>
              <p className="text-lg text-gray-700">
                Connect directly with specific departments for specialized
                inquiries
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {departments.map((dept, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-blue-100"
                >
                  <div className="bg-blue-100 text-blue-700 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {dept.name}
                  </h3>
                  <div className="space-y-2 mt-4">
                    <div className="flex items-center gap-2 text-gray-700">
                      <Mail className="w-4 h-4 text-blue-600" />
                      <span>{dept.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <Phone className="w-4 h-4 text-blue-600" />
                      <span>{dept.phone}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Map & Location */}
        <section className="py-16 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Location
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Our campus is conveniently located in the heart of the city with
                excellent transportation links and accessible facilities.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-full mt-1">
                    <MapPin className="w-5 h-5 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-700">
                      123 Education Lane, Learning City, LC 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-full mt-1">
                    <Bus className="w-5 h-5 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      Public Transportation
                    </h3>
                    <p className="text-gray-700">
                      Bus routes 72, 105, 220 | Metro Line 3 - Education Station
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-full mt-1">
                    <Clock className="w-5 h-5 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      Visiting Hours
                    </h3>
                    <p className="text-gray-700">
                      Monday-Friday: 8:00 AM - 6:00 PM
                      <br />
                      Saturday: 9:00 AM - 1:00 PM
                    </p>
                  </div>
                </div>

                <button className="mt-6 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-bold py-3 px-6 rounded-xl transition-all flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Get Directions
                </button>
              </div>
            </div>

            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-blue-600 mx-auto" />
                <p className="mt-4 text-gray-700 font-medium">
                  Campus Map Location
                </p>
                <p className="text-sm text-gray-500">
                  Interactive map would appear here
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-6 py-2 rounded-full mb-6">
                <HelpCircle className="w-5 h-5" />
                <span>Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-700">
                Find answers to our most common inquiries below
              </p>
            </div>

            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-sm p-6 border border-blue-100 transition-all hover:shadow-md"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.question}
                  </h3>
                  <p className="text-gray-700">{item.answer}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-700 mb-6">
                Still have questions? We're here to help!
              </p>
              <button className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-bold py-3 px-8 rounded-xl transition-all flex items-center gap-2 mx-auto">
                <MessageSquare className="w-5 h-5" />
                Contact Support
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
