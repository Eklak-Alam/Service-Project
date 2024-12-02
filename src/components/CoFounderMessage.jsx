import React from "react";
import { FaQuoteLeft, FaRegHandshake } from "react-icons/fa"; // Importing quote and handshake icons

// CoFounderMessage component
const CoFounderMessage = () => {
  return (
    <section className="py-16 px-8 bg-gradient-to-r from-indigo-50 via-indigo-100 to-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-indigo-700 mb-8">Message from the Co-Founder</h2>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Co-founder message with quote and name */}
          <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8 bg-white p-8 rounded-xl shadow-xl">
            <div className="md:w-1/2 flex flex-col items-center">
              <FaQuoteLeft className="text-5xl text-indigo-600 mb-4" />
              <p className="text-lg text-gray-700 italic mb-6">
                "Shanaya Training is more than just a training institute; it’s a place where dreams meet reality. Together, we shape the future
                of engineering professionals who will lead with innovation, creativity, and precision."
              </p>
              <div className="text-xl font-semibold text-indigo-700">John Doe</div>
              <p className="text-lg text-indigo-600">Co-Founder, Shanaya Training Institute</p>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://i.pinimg.com/736x/e7/5d/cd/e75dcd29951a3bce5e1d1541e4d8021d.jpg" // Placeholder image, replace with the co-founder's image
                alt="Co-founder"
                className="rounded-full shadow-lg w-40 h-40 object-cover mx-auto md:mx-0"
              />
            </div>
          </div>

          {/* Additional Section for Impact */}
          <div className="bg-indigo-700 text-white p-8 rounded-lg shadow-lg">
            <div className="flex flex-col items-center md:flex-row justify-center md:space-x-8">
              <div className="md:w-1/3 text-center mb-8 md:mb-0">
                <FaRegHandshake className="text-6xl text-white mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Our Commitment</h3>
                <p>
                  We are committed to empowering engineering graduates with the skills and knowledge necessary to succeed in the ever-evolving
                  tech industry.
                </p>
              </div>

              <div className="md:w-1/3 text-center mb-8 md:mb-0">
                <FaQuoteLeft className="text-6xl text-white mb-4" />
                <h3 className="text-2xl font-semibold mb-2">A Future Ready Vision</h3>
                <p>
                  Our vision is to prepare our students to become not only industry-ready but also future leaders who will innovate and create
                  new paths in engineering.
                </p>
              </div>

              <div className="md:w-1/3 text-center">
                <FaRegHandshake className="text-6xl text-white mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Join Us on This Journey</h3>
                <p>
                  Together, we can shape the future of engineering and make a lasting impact in the industry. Join us, and let's grow together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoFounderMessage;
