import React from "react";
import { FaChalkboardTeacher, FaBriefcase, FaTrophy } from "react-icons/fa"; // Importing icons

// DirectorMessage component
const DirectorMessage = () => {
  return (
    <section className="py-16 px-8 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-8">Director's Message</h2>
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Section for Introduction */}
          <div className="text-lg text-gray-700">
            <p className="mb-4">
              It was a long-cherished desire of the Shanaya Training Institute (STI) to establish a Technical Training Institute to benefit the
              engineering graduates and make them ready for job opportunities. In this highly competitive age, with the rising problem of
              unemployment, we realized the pressing need to prepare engineering graduates and professionals to meet the requirements of the
              industry. This vision led to the establishment of STI in 2021, and since then, we have been making significant strides towards
              providing industry-ready training.
            </p>
            <p className="mb-4">
              With unwavering dedication and commitment, we have gathered momentum and are now accelerating our efforts towards the development
              of Shanaya Training Institute Pvt Ltd. We are proud to say that we are shaping the future of engineering talent and empowering our
              students with the skills they need to succeed in the competitive job market.
            </p>
          </div>

          {/* Section for icons */}
          <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
            {/* Icon 1 - Teaching */}
            <div className="flex flex-col items-center md:w-1/3">
              <FaChalkboardTeacher className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Quality Education</h3>
              <p className="text-center">
                We focus on delivering top-notch education, guided by experienced instructors, ensuring students are well-prepared for their
                careers.
              </p>
            </div>

            {/* Icon 2 - Industry Connection */}
            <div className="flex flex-col items-center md:w-1/3">
              <FaBriefcase className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Industry-Oriented Training</h3>
              <p className="text-center">
                Our programs are designed in collaboration with industry leaders, ensuring that our graduates are ready for the demands of the
                workforce.
              </p>
            </div>

            {/* Icon 3 - Success */}
            <div className="flex flex-col items-center md:w-1/3">
              <FaTrophy className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Achieving Success Together</h3>
              <p className="text-center">
                We celebrate the success of our students, providing them with the tools, guidance, and resources needed to excel in their
                professional careers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectorMessage;
