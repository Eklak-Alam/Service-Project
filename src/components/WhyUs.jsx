import React from "react";
import { FaUsers, FaRocket, FaRegLightbulb, FaHandsHelping, FaBookOpen, FaChartLine } from "react-icons/fa"; // Importing additional icons

// WhyUs component
const WhyUs = () => {
  return (
    <section className="py-16 px-8 bg-gradient-to-r from-blue-50 via-blue-100 to-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-blue-700 mb-8">Why Choose Shanaya Training?</h2>
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Section for Core Values with icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 border border-gray-300 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
              <FaUsers className="text-4xl text-blue-600 mb-4 hover:text-blue-800 transition-colors duration-300" />
              <h3 className="text-2xl font-semibold text-blue-600 mb-2">We Are Dedicated Professionals</h3>
              <p className="text-gray-700">
                Our team is composed of seasoned engineering professionals from top MNCs, delivering industry-leading training and mentorship.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 border border-gray-300 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
              <FaRegLightbulb className="text-4xl text-blue-600 mb-4 hover:text-blue-800 transition-colors duration-300" />
              <h3 className="text-2xl font-semibold text-blue-600 mb-2">Our Vision</h3>
              <p className="text-gray-700">
                To become a global leader in technical training, specializing in engineering design skills, and shaping the best professionals.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 border border-gray-300 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
              <FaRocket className="text-4xl text-blue-600 mb-4 hover:text-blue-800 transition-colors duration-300" />
              <h3 className="text-2xl font-semibold text-blue-600 mb-2">Our Mission</h3>
              <p className="text-gray-700">
                Preparing the next generation of engineers by equipping them with the skills needed to excel as industry-ready design professionals.
              </p>
            </div>
          </div>

          {/* Section for additional information */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-blue-600 mb-6">Why Choose Shanaya Training?</h3>
            <p className="text-lg text-gray-700">
              Our instructors are actively practicing professionals in the engineering field. This ensures that our training is always relevant,
              practical, and up-to-date with the latest industry standards and trends. Whether you're an engineering graduate or a professional
              looking to upskill, we are here to guide you on your journey to success.
            </p>
          </div>

          {/* Bonus Info with icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center text-center p-6 border border-gray-300 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
              <FaHandsHelping className="text-4xl text-blue-600 mb-4 hover:text-blue-800 transition-colors duration-300" />
              <h3 className="text-2xl font-semibold text-blue-600 mb-2">Supportive Learning</h3>
              <p className="text-gray-700">
                We believe in hands-on learning with continuous support throughout your journey. From personalized mentorship to career guidance, we’ve got you covered.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 border border-gray-300 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
              <FaBookOpen className="text-4xl text-blue-600 mb-4 hover:text-blue-800 transition-colors duration-300" />
              <h3 className="text-2xl font-semibold text-blue-600 mb-2">Comprehensive Courses</h3>
              <p className="text-gray-700">
                Our courses cover all aspects of engineering design, ensuring a thorough understanding and practical experience to excel in the industry.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 border border-gray-300 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
              <FaChartLine className="text-4xl text-blue-600 mb-4 hover:text-blue-800 transition-colors duration-300" />
              <h3 className="text-2xl font-semibold text-blue-600 mb-2">Career Growth</h3>
              <p className="text-gray-700">
                Our training is not just about skills; it’s about career advancement. We help you unlock new opportunities and progress in your engineering career.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
