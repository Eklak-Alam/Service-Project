import React from "react";
import { FaChalkboardTeacher, FaTools, FaGraduationCap, FaBriefcase, FaHandsHelping } from "react-icons/fa";

function About() {
  return (
    <section className="bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 py-16 px-6 md:px-16 lg:px-32">
      <div className="container mx-auto text-center md:text-left">
        {/* Breadcrumb */}
        <p className="text-sm text-blue-500 font-medium">
          <a href="/" className="hover:underline">Shanaya Training</a> &gt; About
        </p>

        {/* Section Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-800 mt-8 mb-6">
          About Shanaya Training Institute Pvt. Ltd.
        </h1>

        {/* Section Description */}
        <div className="text-gray-700 text-base leading-relaxed">
          <p className="mb-6 text-lg">
            <strong>Shanaya Training Institute Pvt. Ltd. (STIPL)</strong>, an ISO 9001:2015 Certified Company, was established in 2021 with a vision to provide job-oriented training and skill development for design and detailed engineering services. We specialize in equipping engineers from various disciplines like <strong>Electronics & Instrumentation</strong>, <strong>Electrical</strong>, <strong>Civil</strong>, <strong>Mechanical</strong>, and other core engineering domains with industry-relevant skills.
          </p>

          <div className="flex justify-center mb-8">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRznpjqiSbNxV8TfN82X2iyPfpfAbYdJG_eWJ5niVEI_S9CvNbahjAE8H7M7rUFtNIJGJk&usqp=CAU" alt="Training" className="rounded-lg shadow-lg max-w-full h-auto"/>
          </div>

          <p className="mb-6 text-lg">
            Our training programs are meticulously designed to bridge the gap between academic knowledge and industry requirements. Whether you are a <strong>fresh graduate entering the workforce</strong> or an <strong>experienced professional seeking to transition into design engineering</strong>, our comprehensive courses will help you achieve your goals.
          </p>

          <p className="mb-6 text-lg">
            In today’s competitive landscape, thousands of engineering students graduate each year, but securing a job through campus placements or off-campus opportunities remains a challenge. Our programs focus on preparing students for the demands of the industry by covering essential aspects such as:
          </p>

          {/* Icon List */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            <div className="flex items-center space-x-4">
              <FaChalkboardTeacher className="text-indigo-600 text-4xl" />
              <div>
                <h3 className="text-lg font-semibold">Understanding Work Culture</h3>
                <p className="text-gray-600">We prepare you for professional work environments and engineering practices.</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <FaTools className="text-indigo-600 text-4xl" />
              <div>
                <h3 className="text-lg font-semibold">Hands-On Training</h3>
                <p className="text-gray-600">We provide practical training to help you create critical engineering deliverables.</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <FaGraduationCap className="text-indigo-600 text-4xl" />
              <div>
                <h3 className="text-lg font-semibold">Skill Development</h3>
                <p className="text-gray-600">Our courses help you gain the skills highly sought after by top companies globally.</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <FaBriefcase className="text-indigo-600 text-4xl" />
              <div>
                <h3 className="text-lg font-semibold">Industry-Ready Professionals</h3>
                <p className="text-gray-600">We equip you with the skills to stand out in the competitive job market.</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <FaHandsHelping className="text-indigo-600 text-4xl" />
              <div>
                <h3 className="text-lg font-semibold">Career Support</h3>
                <p className="text-gray-600">We help bridge the gap for fresh graduates with career support and job opportunities.</p>
              </div>
            </div>
          </div>

          <p className="mb-6 text-lg">
            Companies often prefer experienced candidates but rarely offer opportunities for freshers to gain that experience. Our <strong>practical, hands-on training approach</strong> helps participants overcome this barrier, enabling them to thrive in their professional journeys.
          </p>

          {/* Testimonial Section */}
          <blockquote className="italic text-lg text-gray-600 border-l-4 border-indigo-500 pl-4 mb-8">
            "At Shanaya Training, we empower engineers to unlock their potential, bridge skill gaps, and succeed in the ever-evolving world of design and engineering."
            <footer className="mt-4 font-semibold text-indigo-700">- Shanaya Training Team</footer>
          </blockquote>

          {/* Call to Action */}
          <div className="bg-indigo-700 text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4">Ready to take the next step in your career?</h2>
            <p className="mb-4 text-lg">Join Shanaya Training today and gain the skills that will make you a standout engineer in your field.</p>
            <a href="/contact" className="inline-block bg-white text-indigo-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition duration-300">Contact Us</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
