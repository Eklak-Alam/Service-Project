import React from "react";
import { FaPhone } from "react-icons/fa";
import { MdEmail, MdLocationPin } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaGoogle } from "react-icons/fa";

function UpperNavbar() {
  return (
    <div className="py-4 px-4 md:px-10 border-b border-gray-200 bg-gray-50 overflow-x-hidden">
      <div className="w-full flex flex-wrap justify-between items-center">
        {/* Left Section: Contact Information */}
        <div className="flex items-center space-x-6 flex-wrap mb-4 md:mb-0">
          <div className="flex items-center space-x-2 group">
            <FaPhone className="text-blue-500 group-hover:text-blue-700 transition duration-200" />
            <span className="text-sm font-medium group-hover:text-blue-400 transition duration-200">
              +91 9990111835
            </span>
          </div>
          <div className="flex items-center space-x-2 group">
            <MdEmail className="text-blue-500 group-hover:text-blue-700 transition duration-200" />
            <span className="text-sm font-medium group-hover:text-blue-400 transition duration-200">
              sawrabh2009@gmail.com
            </span>
          </div>
          <div className="flex items-center space-x-2 group">
            <MdLocationPin className="text-blue-500 group-hover:text-blue-700 transition duration-200" />
            <span className="text-sm font-medium group-hover:text-blue-400 transition duration-200">
              Godrej Building (IBT Campus), Harimohan Lane, Salempur, Chapra
            </span>
          </div>
        </div>

        {/* Right Section: Social Media Links */}
        <div className="flex items-center space-x-4">
          {[
            { icon: FaFacebookF, link: "https://www.facebook.com/STI4designengineer/" },
            { icon: FaTwitter, link: "https://twitter.com" },
            { icon: FaInstagram, link: "https://www.instagram.com/shanayatraininginstitute/" },
            { icon: FaLinkedinIn, link: "https://www.linkedin.com/company/shanaya-training-institute-pvt-ltd/" },
            { icon: FaYoutube, link: "https://www.youtube.com/channel/UC3E78XDnKksPUZzWFtdBX1A/videos" },
            { icon: FaGoogle, link: "https://shanayatraining.com/" },
          ].map(({ icon: Icon, link }, index) => (
            <a
              key={index}
              href={link}
              className="text-black hover:text-blue-500 transition duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UpperNavbar;
