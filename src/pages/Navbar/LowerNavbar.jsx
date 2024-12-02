import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

function LowerNavbar() {
  return (
    <div className="sticky top-0 bg-white z-10 py-4 px-4 md:px-10 shadow-md">
      <div className="w-full flex flex-wrap justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <img
            src="https://media.licdn.com/dms/image/v2/C4D0BAQGmD_8n6YCHhg/company-logo_200_200/company-logo_200_200/0/1634873866249/shanaya_training_institute_pvt_ltd_logo?e=2147483647&v=beta&t=z31-RYlmJCqpwFEPIZHzcKeb6iof1dv25_4DiN_vTVU"
            alt="Logo"
            className="w-10 h-10"
          />
          <span className="text-lg font-bold text-black">
            Shanaya Training Pvt Ltd
          </span>
        </div>

        {/* Search Section */}
        <div className="flex items-center flex-grow px-4 md:px-10 mt-4 md:mt-0">
          <input
            type="text"
            placeholder="Search here..."
            className="w-full px-4 py-2 h-10 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
          />
          <button
            className="px-4 h-10 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-700 flex items-center justify-center transition duration-300"
          >
            <FaSearch />
          </button>
        </div>

        {/* Links Section */}
        <div className="flex items-center space-x-2 md:space-x-4 mt-4 md:mt-0">
          <Link
            to="/"
            className="px-2 md:px-4 py-2 bg-gray-100 text-black font-medium rounded-md hover:bg-blue-500 hover:text-white transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="px-2 md:px-4 py-2 bg-gray-100 text-black font-medium rounded-md hover:bg-blue-500 hover:text-white transition duration-300"
          >
            About
          </Link>
          <Link
            to="/why-us"
            className="px-2 md:px-4 py-2 bg-gray-100 text-black font-medium rounded-md hover:bg-blue-500 hover:text-white transition duration-300"
          >
            Why Us
          </Link>
          <Link
            to="/director-message"
            className="px-2 md:px-4 py-2 bg-gray-100 text-black font-medium rounded-md hover:bg-blue-500 hover:text-white transition duration-300"
          >
            Director Message
          </Link>
          <Link
            to="/cofounder-message"
            className="px-2 md:px-4 py-2 bg-gray-100 text-black font-medium rounded-md hover:bg-blue-500 hover:text-white transition duration-300"
          >
            Co-founder Message
          </Link>
          <Link
            to="/contact"
            className="px-2 md:px-4 py-2 bg-gray-100 text-black font-medium rounded-md hover:bg-blue-500 hover:text-white transition duration-300"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LowerNavbar;
