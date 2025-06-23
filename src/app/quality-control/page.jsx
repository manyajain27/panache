import React from "react";
import { Award } from "lucide-react";

export default function QualityControlPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-200 via-orange-300 to-gray-300">
          {/* Abstract curved shapes to mimic the design */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-1/3 left-1/4 w-64 h-96 bg-orange-400 rounded-full transform rotate-45 opacity-80"></div>
              <div className="absolute top-1/2 right-1/3 w-48 h-72 bg-gray-400 rounded-full transform -rotate-12 opacity-70"></div>
              <div className="absolute bottom-1/4 left-1/2 w-32 h-48 bg-orange-300 rounded-full transform rotate-30 opacity-60"></div>
            </div>
          </div>
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-wide">
            QUALITY CONTROL
          </h1>
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto">
            Our commitment to excellence drives our comprehensive quality
            assurance processes and state-of-the-art testing facilities
          </p>
        </div>
      </section>

      {/* Quality Process Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-8">
          {/* Header */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-blue-600 mb-6">
              QUALITY PROCESS
            </h2>
            <div className="w-full h-px bg-blue-600 mb-8"></div>
            <p className="text-gray-700 text-center max-w-md mx-auto leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, aliquam
              aliquam nisl nisl, eu imperdiet ex ullamcorper eu
            </p>
          </div>

          <div className="space-y-12">
            {/* Step 1 */}
            <div className="flex items-start gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-blue-600 mb-4">
                  STEP 1
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  aliquam aliquam nisl nisl, eu imperdiet ex ullamcorper eu
                </p>
              </div>
              <div className="w-48 h-24">
                <div className="bg-gradient-to-br from-gray-700 to-gray-900 h-full flex items-center justify-center">
                  <div className="flex space-x-1">
                    {[...Array(10)].map((_, i) => (
                      <div
                        key={i}
                        className="w-1 bg-white/70 transform rotate-12"
                        style={{ height: `${16 + (i % 4) * 8}px` }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-px bg-blue-300"></div>

            {/* Step 2 */}
            <div className="flex items-start gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-blue-600 mb-4">
                  STEP 2
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  aliquam aliquam nisl nisl, eu imperdiet ex ullamcorper eu
                </p>
              </div>
              <div className="w-48 h-24">
                <div className="bg-gradient-to-br from-gray-700 to-gray-900 h-full flex items-center justify-center">
                  <div className="flex space-x-1">
                    {[...Array(12)].map((_, i) => (
                      <div
                        key={i}
                        className="w-px bg-white/70 h-16 transform rotate-12"
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-px bg-blue-300"></div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              CERTIFICATIONS
            </h2>
            <p className="text-gray-600 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, aliquam
              aliquam nisl nisl, eu imperdiet ex ullamcorper eu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* BIS Certified */}
            <div className="text-left">
              <div className="w-16 h-16 mb-4">
                <div className="w-full h-full border-2 border-orange-500 rounded flex items-center justify-center relative">
                  <div className="w-8 h-8 bg-orange-500 rounded-sm flex items-center justify-center">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-6 bg-orange-500 transform rotate-12"></div>
                </div>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">BIS CERTIFIED</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                certification description/ metrics etc lorem ipsum dolor sit
                amet,
              </p>
            </div>

            {/* ISO Certified */}
            <div className="text-left">
              <div className="w-16 h-16 mb-4">
                <div className="w-full h-full border-2 border-orange-500 rounded flex items-center justify-center relative">
                  <div className="w-8 h-8 bg-orange-500 rounded-sm flex items-center justify-center">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-6 bg-orange-500 transform rotate-12"></div>
                </div>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">ISO CERTIFIED</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                certification description/ metrics etc lorem ipsum dolor sit
                amet,
              </p>
            </div>

            {/* Other */}
            <div className="text-left">
              <div className="w-16 h-16 mb-4">
                <div className="w-full h-full border-2 border-orange-500 rounded flex items-center justify-center relative">
                  <div className="w-8 h-8 bg-orange-500 rounded-sm flex items-center justify-center">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-6 bg-orange-500 transform rotate-12"></div>
                </div>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">OTHER</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                certification description/ metrics etc lorem ipsum dolor sit
                amet,
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lab Equipment Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-8">
          <div className="flex gap-12">
            <div className="w-1/3">
              <h2 className="text-4xl font-bold text-blue-600 mb-4 leading-tight">
                LAB
                <br />
                EQUIPMENT
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, aliquam
                aliquam nisl nisl, eu imperdiet ex ullamcorper eu.
              </p>
            </div>

            <div className="w-2/3">
              <div className="grid grid-cols-2 gap-3">
                {/* Lab Equipment Image 1 - Bronze/brown equipment */}
                <div className="h-32 bg-gradient-to-br from-amber-700 to-amber-900 flex items-center justify-center">
                  <span className="text-white text-xs opacity-75">
                    Equipment Image 1
                  </span>
                </div>

                {/* Lab Equipment Image 2 - Blue light rays */}
                <div className="h-32 bg-gradient-to-br from-blue-800 to-purple-900 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform rotate-12"></div>
                  <span className="text-white text-xs opacity-75 relative z-10">
                    Equipment Image 2
                  </span>
                </div>

                {/* Lab Equipment Image 3 - Blue digital/tech */}
                <div className="h-32 bg-gradient-to-br from-cyan-600 to-blue-800 flex items-center justify-center">
                  <span className="text-white text-xs opacity-75">
                    Equipment Image 3
                  </span>
                </div>

                {/* Lab Equipment Image 4 - Blue geometric */}
                <div className="h-32 bg-gradient-to-br from-blue-600 to-indigo-800 flex items-center justify-center">
                  <span className="text-white text-xs opacity-75">
                    Equipment Image 4
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
