import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaGoogle, FaInfoCircle, FaThList, FaEnvelope, FaImage } from "react-icons/fa";
import { IoMdArrowUp } from "react-icons/io";

const Footer = () => {
  // Scroll to Top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-white text-black pt-16 relative">
      <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-blue-600 flex items-center">
            <FaInfoCircle className="mr-2" size={20} /> About
          </h3>
          <p className="text-gray-600">
            Shanaya Training Institute Pvt Ltd (STIPL), an ISO 9001:2015 Certified Company, was established in 2021 with a vision to provide job-oriented training and skill development.
          </p>
        </div>

        {/* Categories Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-blue-600 flex items-center">
            <FaThList className="mr-2" size={20} /> Categories
          </h3>
          <ul className="space-y-2">
            <li><a href="/main-course" className="text-gray-500 hover:text-blue-600 transition">Main Course</a></li>
            <li><a href="/" className="text-gray-500 hover:text-blue-600 transition">Course 1</a></li>
            <li><a href="/" className="text-gray-500 hover:text-blue-600 transition">Course 2</a></li>
            <li><a href="/" className="text-gray-500 hover:text-blue-600 transition">Course 3</a></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-blue-600 flex items-center">
            <FaEnvelope className="mr-2" size={20} /> Newsletter
          </h3>
          <form className="flex flex-col space-y-4">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="p-3 rounded-lg bg-gray-200 border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            <button 
              type="submit" 
              className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Sign Up
            </button>
          </form>
        </div>

        {/* Gallery Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-blue-600 flex items-center">
            <FaImage className="mr-2" size={20} /> Gallery
          </h3>
          <div className="grid grid-cols-3 gap-2">
            <img src="https://repository-images.githubusercontent.com/260096455/47f1b200-8b2e-11ea-8fa1-ab106189aeb0" alt="" className="w-full h-20 object-cover rounded-md" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXm60ff_vfnrHuacwNYLtw6HAjCLrdCKgbkTNDDtP62dqVX_4P7h3Y14NLblclHFS2aq0&usqp=CAU" alt="" className="w-full h-20 object-cover rounded-md" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6MeeFobchrenNYbjz-oBB3Q6cguQyvqrP_iUEQqmwXDc4NgNGH2Y4CWdvKSOOwfEnVP4&usqp=CAU" alt="" className="w-full h-20 object-cover rounded-md" />
          </div>
        </div>
      </div>

      {/* Lower Part: Social Media Icons with Background Color */}
      <div className="bg-blue-600 py-8 mt-12 relative">
        <div className="container mx-auto flex flex-col items-center space-y-4">
          <div className="flex space-x-6">
            <a
              href="https://www.facebook.com/STI4designengineer/"
              className="text-white hover:text-blue-400 transition duration-300 p-3 bg-blue-500 rounded-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://www.instagram.com/shanayatraininginstitute/"
              className="text-white hover:text-blue-400 transition duration-300 p-3 bg-blue-500 rounded-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://www.instagram.com/shanayatraininginstitute/"
              className="text-white hover:text-blue-400 transition duration-300 p-3 bg-blue-500 rounded-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.linkedin.com/company/shanaya-training-institute-pvt-ltd/?originalSubdomain=in"
              className="text-white hover:text-blue-400 transition duration-300 p-3 bg-blue-500 rounded-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="https://www.youtube.com/channel/UC3E78XDnKksPUZzWFtdBX1A/videos"
              className="text-white hover:text-blue-400 transition duration-300 p-3 bg-blue-500 rounded-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube size={20} />
            </a>
            <a
              href="https://shanayatraining.com/"
              className="text-white hover:text-blue-400 transition duration-300 p-3 bg-blue-500 rounded-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGoogle size={20} />
            </a>
          </div>

          {/* Footer Text */}
          <div className="text-center text-xs mt-4 text-white">
            <p>
              Gutener Theme by{" "}
              <a href="https://keonthemes.com/" target="_blank" rel="noreferrer" className="text-blue-300">
                Keon Themes
              </a>
            </p>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <div
          className="absolute bottom-6 right-10 bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition duration-300 cursor-pointer"
          onClick={scrollToTop}
        >
          <IoMdArrowUp size={24} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
