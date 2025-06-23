"use client";
import React, { useState } from "react";
import { Settings, Award, Heart, Phone, Mail, MapPin } from "lucide-react";

const MainContent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="bg-white">
      {/* Hero Section with Background Image */}
      <section
        className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(59, 130, 246, 0.8), rgba(147, 197, 253, 0.6)), url('/bgimg.jpg')`,
        }}
      >
        <div className="container mx-auto px-6 text-center text-white relative z-10">
          <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
            TAGLINE/HEADING
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
        </div>
      </section>

      {/* Logo & Short Intro Section */}
      <section className="py-20" style={{ backgroundColor: "#f9f2eb" }}>
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-16 max-w-4xl mx-auto">
            {/* Intro Text */}
            <div className="max-w-md">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 uppercase tracking-wide">
                SHORT INTRO
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                aliquam nisi nisi, eu imperdiet ex ullamcorper eu. Pellentesque
                quis turpis cursus, vestibulum magna sed, tincidunt nunc.
              </p>
            </div>
            {/* Logo Image */}
            <div className="flex-shrink-0">
              <img
                src="/logo.png"
                alt="Logo"
                className="w-64 h-64 object-contain drop-shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: "#f9f2eb" }}>
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-blue-600 mb-6 uppercase tracking-wider">
              OUR CAPABILITIES
            </h2>
            <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation.
            </p>

            {/* Exact Flex Layout */}
            <div className="flex flex-wrap justify-between gap-6 max-w-6xl mx-auto">
              {/* Left Column */}
              <div className="flex flex-col gap-6 w-[30%]">
                {/* Blue Card */}
                <div className="bg-white rounded-xl p-6 shadow-md h-[250px] flex flex-col justify-between">
                  <div>
                    <h3 className="text-3xl font-bold text-blue-600">500K</h3>
                    <h4 className="text-xl font-bold text-blue-600 uppercase">
                      FURNACES
                    </h4>
                  </div>
                  <p className="text-blue-400 text-sm">
                    lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                {/* Bottom Left Industrial Image */}
                <div className="rounded-xl overflow-hidden shadow-md h-[250px]">
                  <img
                    src="/h1.jpg"
                    alt="industrial"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Center Column */}
              <div className="flex flex-col gap-6 w-[35%]">
                {/* Top B/W Text Card */}
                <div className="relative bg-black rounded-xl p-6 shadow-md overflow-hidden h-[120px]">
                  <img
                    src="/h2.jpg"
                    alt="BW"
                    className="absolute inset-0 w-full h-full object-cover opacity-30"
                  />
                  <div className="relative text-white">
                    <h3 className="text-xl font-bold">500K</h3>
                    <h4 className="text-sm font-bold uppercase">FURNACES</h4>
                    <p className="text-xs mt-1">lorem ipsum dolor sit amet,</p>
                  </div>
                </div>

                {/* Middle Full Color Image */}
                <div className="rounded-xl overflow-hidden shadow-md h-[250px]">
                  <img
                    src="/h3.jpg"
                    alt="Industrial Color"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Bottom B/W Card */}
                <div className="relative bg-black rounded-xl p-6 shadow-md overflow-hidden h-[120px]">
                  <img
                    src="/h2.jpg"
                    alt="BW2"
                    className="absolute inset-0 w-full h-full object-cover opacity-30"
                  />
                  <div className="relative text-white">
                    <h3 className="text-xl font-bold">500K</h3>
                    <h4 className="text-sm font-bold uppercase">FURNACES</h4>
                    <p className="text-xs mt-1">
                      lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="flex flex-col gap-6 w-[30%]">
                {/* Blue Card */}
                <div className="bg-blue-600 text-white rounded-xl p-6 shadow-md h-[350px] flex flex-col justify-between">
                  <div>
                    <p className="text-sm uppercase font-bold">Since</p>
                    <p className="text-4xl font-bold mb-4">1920</p>
                  </div>
                  <p className="text-sm">
                    lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    aliquam aliquam nisi nisi, eu imperdiet ex ullamcorper eu.
                    pellentesque quis turpis cursus,
                  </p>
                </div>

                {/* Orange Gear Card */}
                <div className="bg-orange-500 rounded-xl flex items-center justify-center shadow-md h-[120px]">
                  <Settings className="text-white w-10 h-10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20" style={{ backgroundColor: "#FFFDF9" }}>
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-6 uppercase tracking-wider">
            WHY CHOOSE US?
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all group-hover:scale-110">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 uppercase tracking-wide">
                SUSTAINABILITY
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all group-hover:scale-110">
                <Settings className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 uppercase tracking-wide">
                CUSTOMIZATION
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all group-hover:scale-110">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 uppercase tracking-wide">
                QUALITY
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-[#f7f3ed]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-600 mb-12 text-center">
            REACH OUT TO US
          </h2>

          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    PHONE
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your phone"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    SUBJECT
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter subject"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    INQUIRY
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Type of inquiry"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  MESSAGE
                </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your message"
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-md transition-colors"
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainContent;
