import React from "react";
import { FaUser, FaEnvelope, FaPen, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

function Contact() {
  return (
    <section className="bg-gradient-to-r from-blue-200 via-blue-300 to-white py-16 px-6 md:px-16 lg:px-32">
      <div className="container mx-auto text-center md:text-left">
        {/* Breadcrumb */}
        <p className="text-sm text-blue-600 font-medium">
          <a href="/" className="hover:underline">Shanaya Training</a> &gt; Contact
        </p>

        {/* Section Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 mt-8 mb-6">
          Get in Touch with Us
        </h1>

        {/* Contact Form */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold text-blue-800 mb-6">Contact Form</h3>
            <form action="mailto:sawrabh2009@gmail.com" method="POST" enctype="multipart/form-data">
              {/* Name */}
              <div className="mb-6">
                <label htmlFor="name" className="block text-lg font-medium text-gray-700">
                  <FaUser className="inline-block text-blue-600 mr-2" />
                  Your Name (required)
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  required
                  placeholder="Enter your name"
                />
              </div>

              {/* Email */}
              <div className="mb-6">
                <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                  <FaEnvelope className="inline-block text-blue-600 mr-2" />
                  Your Email (required)
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  required
                  placeholder="Enter your email"
                />
              </div>

              {/* Subject */}
              <div className="mb-6">
                <label htmlFor="subject" className="block text-lg font-medium text-gray-700">
                  <FaPen className="inline-block text-blue-600 mr-2" />
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Enter the subject"
                />
              </div>

              {/* Message */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-lg font-medium text-gray-700">
                  <FaPen className="inline-block text-blue-600 mr-2" />
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Enter your message"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
              >
                <FaPaperPlane className="inline-block mr-2" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold text-blue-800 mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-blue-600 text-2xl mr-4" />
                <div>
                  <h4 className="text-xl font-semibold text-blue-700">Office Location</h4>
                  <p className="text-gray-600">Godrej Building (IBT Campus), Harimohan Lane, Salempur, Chapra, Bihar 841301</p>
                </div>
              </div>

              <div className="flex items-center">
                <FaPhoneAlt className="text-blue-600 text-2xl mr-4" />
                <div>
                  <h4 className="text-xl font-semibold text-blue-700">Phone</h4>
                  <p className="text-gray-600">9990111835</p>
                </div>
              </div>

              <div className="flex items-center">
                <FaEnvelope className="text-blue-600 text-2xl mr-4" />
                <div>
                  <h4 className="text-xl font-semibold text-blue-700">Email</h4>
                  <p className="text-gray-600">sawrabh2009@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
