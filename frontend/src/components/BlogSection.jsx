import React from "react";
import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";
import Avatar1 from "../assets/Avatar1.png";
import Avatar2 from "../assets/Avatar2.png";
import Avatar3 from "../assets/Avatar3.png";

const BlogSection = () => {
  const blogs = [
    {
      category: "Design",
      title: "UX review presentations",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      author: "Olivia Rhye",
      date: "20 Jan 2024",
      image: blog1,
    },
    {
      category: "Product",
      title: "Migrating to Linear 101",
      description:
        "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
      author: "Phoenix Baker",
      date: "19 Jan 2024",
      image: blog2,
    },
    {
      category: "Software Engineering",
      title: "Building your API stack",
      description:
        "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
      author: "Lana Steiner",
      date: "18 Jan 2024",
      image: blog3,
    },
  ];

  return (
    <div className="bg-white py-12 px-4 sm:px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div className="mb-6 md:mb-0">
            <h2 className="text-sm font-semibold font-inter text-red-500 uppercase">
              Our Blog
            </h2>
            <h1 className="text-3xl sm:text-4xl font-bold font-inter text-gray-900 mb-4">
              Latest Blog Posts
            </h1>
            <p className="text-gray-600 font-inter text-sm sm:text-base">
              Tools and strategies modern teams need to help their companies grow.
            </p>
          </div>
          <button className="px-4 py-2 md:px-6 md:py-3 border-2 border-red-500 text-white font-semibold rounded-lg bg-red-500 transition">
            View all posts
          </button>
        </header>
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {blogs.map((blog, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-56 sm:h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="mt-4">
                <p className="text-sm text-red-500 font-semibold font-inter">
                  {blog.category}
                </p>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-red-500 transition-colors duration-300">
                  {blog.title} <span aria-hidden="true">↗</span>
                </h3>
                <p className="text-gray-600 mt-2 text-sm sm:text-base">
                  {blog.description}
                </p>
                <div className="flex items-center mt-4">
                  <img
                    src={
                      index === 0
                        ? Avatar1
                        : index === 1
                        ? Avatar2
                        : Avatar3
                    }
                    alt={blog.author}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div className="ml-3 text-sm">
                    <p className="font-medium text-gray-900">{blog.author}</p>
                    <p className="text-gray-500">{blog.date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
