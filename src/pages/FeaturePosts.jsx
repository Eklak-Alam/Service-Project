import React from "react";
import { FaUser, FaCalendarAlt, FaComments } from "react-icons/fa";

const featuredPosts = [
  {
    id: 1,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWZZ5LTNN5FcR1dfLq_roEi5X8Adal-Rc9gw&s",
    category: "Web Development",
    title: "Mastering React.js for Beginners",
    date: "November 28, 2024",
    author: "John Doe",
    comments: 12,
    link: "#",
  },
  {
    id: 2,
    image: "https://content3.jdmagicbox.com/comp/chapra/t6/9999p6152.6152.210716140016.s5t6/catalogue/shanaya-tranning-insitute-pvt-ltd-chapra-ho-chapra-institutes-v3y64ulekf.jpg",
    category: "Data Science",
    title: "Python for Data Analysis",
    date: "October 10, 2024",
    author: "Jane Smith",
    comments: 8,
    link: "#",
  },
  {
    id: 3,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHKSmBUUhKVO5vCzuRS1ohzMnmhQ2MK5QpjQ&s",
    category: "Design",
    title: "Figma for UI/UX Designers",
    date: "September 5, 2024",
    author: "Alex Brown",
    comments: 5,
    link: "#",
  },
  {
    id: 4,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT56XDZVyrGvIOLPG9fky55V3BQila2ij3CFg&s",
    category: "Mobile Development",
    title: "Building Apps with Flutter",
    date: "August 22, 2024",
    author: "Chris Green",
    comments: 10,
    link: "#",
  },
  {
    id: 5,
    image: "https://i.ytimg.com/vi/iHbh6lLARoI/hqdefault.jpg",
    category: "AI & ML",
    title: "Intro to Machine Learning",
    date: "July 15, 2024",
    author: "Emma White",
    comments: 18,
    link: "#",
  },
  {
    id: 6,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPuDEc8-c0YC2kTtSHhKRDjyQoVueTJi6DTA&s",
    category: "Cybersecurity",
    title: "Ethical Hacking Basics",
    date: "June 10, 2024",
    author: "Sophia Brown",
    comments: 20,
    link: "#",
  },
];

function FeaturePosts() {
    return (
      <div className="px-4 md:px-10 py-8 overflow-x-hidden">
        {/* Heading */}
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-left">
            Best Courses Ever
          </h2>
          <div className="w-1/2 h-1 bg-blue-500 mt-2 transition-transform hover:scale-105"></div>
        </div>
        {/* Posts Grid */}
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {featuredPosts.map((post) => (
            <a
              href={post.link}
              key={post.id}
              className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
            >
              {/* Image Section */}
              <div
                className="relative h-64 bg-cover bg-center group-hover:scale-105 transition-transform"
                style={{ backgroundImage: `url(${post.image})` }}
              >
                {/* Category Badge */}
                <button
                  className="absolute top-4 left-4 bg-blue-500 text-xs uppercase px-3 py-1 rounded-full text-white hover:bg-blue-600 transition-colors"
                >
                  {post.category}
                </button>
              </div>
              {/* Content Section */}
              <div className="p-4">
                {/* Title */}
                <h3 className="text-lg font-bold mb-4 group-hover:text-blue-500 transition-colors">
                  {post.title}
                </h3>
                {/* Metadata */}
                <div className="flex justify-between text-sm text-gray-600">
                  <div className="flex items-center">
                    <FaCalendarAlt className="mr-2 text-blue-500" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <FaUser className="mr-2 text-blue-500" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <FaComments className="mr-2 text-blue-500" />
                    {post.comments} Comments
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    );
  }
  
  export default FeaturePosts;