import React, { useState } from "react";
import { FaPhone, FaSearch, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaGoogle, FaBars } from "react-icons/fa";
import { MdEmail, MdLocationPin } from "react-icons/md";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev); // Toggle state for mobile menu
  const closeMenu = () => setIsMenuOpen(false); // Close mobile menu

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Why Us", href: "/why-us" },
    { name: "Director Message", href: "/director-message" },
    { name: "Co-founder Message", href: "/co-founder-message" },
    { name: "Contact", href: "/contact" },
  ];

  const socialIcons = [
    { icon: <FaFacebookF />, href: "https://www.facebook.com/STI4designengineer/" },
    { icon: <FaTwitter />, href: "https://www.instagram.com/shanayatraininginstitute/" },
    { icon: <FaInstagram />, href: "https://www.instagram.com/shanayatraininginstitute/" },
    { icon: <FaLinkedinIn />, href: "https://www.linkedin.com/company/shanaya-training-institute-pvt-ltd/?originalSubdomain=in" },
    { icon: <FaYoutube />, href: "https://www.youtube.com/channel/UC3E78XDnKksPUZzWFtdBX1A/videos" },
    { icon: <FaGoogle />, href: "https://shanayatraining.com/" },
  ];

  return (
    <>
      {/* Upper Navbar */}
      <div className="py-4 px-10 border-b border-gray-200 hidden sm:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <FaPhone className="text-blue-500" />
              <span className="text-sm">+91 9990111835</span>
            </div>
            <div className="flex items-center space-x-2">
              <MdEmail className="text-blue-500" />
              <span className="text-sm">sawrabh2009@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <MdLocationPin className="text-blue-500" />
              <span className="text-sm">Godrej Building, Harimohan Lane, Chapra</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {socialIcons.map(({ icon, href }, index) => (
              <a key={index} href={href} className="text-black hover:text-blue-500 transition duration-300" aria-label={`Social link ${index + 1}`}>
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="sticky top-0 bg-white z-10 py-4 px-10 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <img
              src="https://media.licdn.com/dms/image/v2/C4D0BAQGmD_8n6YCHhg/company-logo_200_200/company-logo_200_200/0/1634873866249/shanaya_training_institute_pvt_ltd_logo?e=2147483647&v=beta&t=z31-RYlmJCqpwFEPIZHzcKeb6iof1dv25_4DiN_vTVU"
              alt="Shanaya Training Pvt Ltd Logo"
              className="w-10 h-10"
            />
            <span className="text-lg font-bold text-black">Shanaya Training Pvt Ltd</span>
          </div>

          {/* Search Bar */}
          <div className="hidden sm:flex flex-grow items-center px-8">
            <input
              type="text"
              placeholder="Search here..."
              className="w-full px-4 py-2 h-10 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            />
            <button
              className="px-4 h-10 bg-blue-500 text-white rounded-r-md hover:bg-blue-700 flex items-center justify-center transition duration-300"
              aria-label="Search"
            >
              <FaSearch />
            </button>
          </div>

          {/* Links for Larger Screens */}
          <div className="hidden sm:flex items-center space-x-4">
            {navLinks.map(({ name, href }, index) => (
              <a
                key={index}
                href={href}
                className="px-4 py-2 text-sm bg-gray-100 text-black font-medium rounded-md hover:bg-blue-500 hover:text-white transition duration-300"
              >
                {name}
              </a>
            ))}
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="sm:hidden flex items-center" onClick={toggleMenu} aria-label="Toggle menu">
            <FaBars className="text-black text-2xl cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Side Menu for Mobile */}
      {isMenuOpen && (
        <div className="fixed top-0 right-0 w-64 bg-white z-20 shadow-lg h-full p-6">
          <div className="flex justify-between items-center mb-6">
            <span className="text-xl font-semibold">Menu</span>
            <button onClick={closeMenu} className="text-black text-2xl" aria-label="Close menu">
              &times;
            </button>
          </div>
          <div className="flex flex-col space-y-4">
            {navLinks.map(({ name, href }, index) => (
              <a
                key={index}
                href={href}
                className="text-black hover:text-blue-500 font-medium"
                onClick={closeMenu}
              >
                {name}
              </a>
            ))}
          </div>
          <div className="flex flex-col space-y-4 mt-6">
            <div className="flex items-center space-x-2">
              <FaPhone className="text-blue-500" />
              <span className="text-sm">+91 9990111835</span>
            </div>
            <div className="flex items-center space-x-2">
              <MdEmail className="text-blue-500" />
              <span className="text-sm">sawrabh2009@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <MdLocationPin className="text-blue-500" />
              <span className="text-sm">Godrej Building, Harimohan Lane, Chapra</span>
            </div>
          </div>
          <div className="flex space-x-4 mt-6">
            {socialIcons.map(({ icon, href }, index) => (
              <a
                key={index}
                href={href}
                className="text-black hover:text-blue-500 transition duration-300"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
