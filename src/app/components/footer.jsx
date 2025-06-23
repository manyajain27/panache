"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-[#F7F3ED] to-[#E8E4D9] text-black py-16">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center group">
              <div className="relative">
                <img
                  src="logo.png"
                  alt="Palanche Industries Logo"
                  className="h-10 w-auto mr-4 transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-blue-500/20 rounded-lg blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent">
                Palanche Industries
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
              Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua
            </p>
            <button className="relative px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl font-medium shadow-xl shadow-blue-500/25 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/40 group overflow-hidden">
              <span className="relative z-10">Contact Us</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Navigation */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-gray-800">Navigation</h4>
            <ul className="space-y-3">
              {[
                { path: "/", label: "Home" },
                { path: "/about-us/quality-control", label: "About Us" },
                { path: "/products", label: "Our Projects" },
                { path: "/Contact", label: "Contact Us" },
                { path: "#", label: "Contact Us" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-all duration-300 hover:translate-x-2 group"
                  >
                    <span className="w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-4 mr-0 group-hover:mr-2"></span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect With Us */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-gray-800">Connect With Us</h4>
            <div className="space-y-4">
              {[
                {
                  icon: Instagram,
                  label: "Instagram",
                  color: "hover:text-pink-500",
                },
                {
                  icon: Facebook,
                  label: "Facebook",
                  color: "hover:text-blue-600",
                },
                {
                  icon: Twitter,
                  label: "Twitter",
                  color: "hover:text-sky-500",
                },
                {
                  icon: Linkedin,
                  label: "LinkedIn",
                  color: "hover:text-blue-700",
                },
              ].map(({ icon: Icon, label, color }) => (
                <a
                  key={label}
                  href="#"
                  className={`flex items-center text-gray-600 ${color} transition-all duration-300 hover:translate-x-2 group`}
                >
                  <div className="relative mr-3">
                    <Icon
                      size={20}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300">
                      <Icon size={20} />
                    </div>
                  </div>
                  <span className="font-medium">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
