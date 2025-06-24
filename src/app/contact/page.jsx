"use client";
import React from "react";

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen bg-[#F7F3ED]">
      {/* Hero Section */}
      <div className="relative min-h-[100vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/contact.jpg" className="w-full" />
        </div>
        <div className="relative z-10 container mx-auto px-6 flex flex-col items-center">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 text-center">
            CONTACT US
          </h1>
          <p className="text-xl text-white/90 max-w-2xl text-center">
            lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam
            aliquam nisi nisi, eu imperdiet ex ullamcorper eu. pellentesque quis
            turpis cursus.
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="py-20">
        <div className="container mx-auto px-6 max-w-2xl">
          <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">
            REACH OUT TO US
          </h2>
          <div className="grid grid-cols-4 gap-y-4">
            <div className="text-right pr-8">
              <label className="text-gray-700 font-medium">NAME</label>
            </div>
            <div className="col-span-3">
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded text-black"
                placeholder="name"
              />
            </div>

            <div className="text-right pr-8">
              <label className="text-gray-700 font-medium">EMAIL</label>
            </div>
            <div className="col-span-3">
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded text-black"
                placeholder="email"
              />
            </div>

            <div className="text-right pr-8">
              <label className="text-gray-700 font-medium">NUMBER</label>
            </div>
            <div className="col-span-3">
              <input
                type="tel"
                className="w-full p-2 border border-gray-300 rounded text-black"
                placeholder="number"
              />
            </div>

            <div className="text-right pr-8">
              <label className="text-gray-700 font-medium">MESSAGE</label>
            </div>
            <div className="col-span-3">
              <textarea
                className="w-full p-2 border border-gray-300 rounded h-24 resize-none text-black"
                placeholder="type here..."
              ></textarea>
            </div>

            <div className="col-span-4 flex justify-center mt-6">
              <button
                onClick={handleSubmit}
                className="bg-blue-600 text-white px-10 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300 font-medium"
              >
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Our Locations Section */}
      <div className="py-20 bg-[#FFFDF9]">
        <div className="container mx-auto px-6">
          <h2 className="text-6xl font-medium text-center text-gray-900 mb-12">
            OUR LOCATIONS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-5xl mx-auto rounded-lg overflow-hidden">
            <div className="p-8 border-r border-gray-600">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Office 1
              </h3>
              <p className="text-gray-700 leading-relaxed">
                lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam
                aliquam nisi nisi, eu imperdiet ex ullamcorper eu. pellentesque
                quis turpis cursus.
              </p>
            </div>
            <div className="p-8 border-r border-gray-600">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Office 2
              </h3>
              <p className="text-gray-700 leading-relaxed">
                lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam
                aliquam nisi nisi, eu imperdiet ex ullamcorper eu. pellentesque
                quis turpis cursus.
              </p>
            </div>
            <div className="p-8 border-r border-gray-600">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Plant 1</h3>
              <p className="text-gray-700 leading-relaxed">
                lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam
                aliquam nisi nisi, eu imperdiet ex ullamcorper eu. pellentesque
                quis turpis cursus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
