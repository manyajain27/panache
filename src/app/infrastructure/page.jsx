import React from "react";

const InfrastructurePlant = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative min-h-[100vh] bg-cover bg-center bg-no-repeat flex items-center text-white py-32 overflow-hidden bg-[#f7f3ed]"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(59,130,246,0.1), rgba(147,197,253,0.1)), url('/infrabg.jpg')`,
        }}
      >
        <div className="container mx-auto px-6 relative z-10 max-w-6xl flex flex-col items-center justify-center text-center">
          <h1 className="text-6xl font-bold mb-6 tracking-wide">
            INFRASTRUCTURE
          </h1>
          <p className="text-lg max-w-2xl leading-relaxed opacity-90">
            Complete turnkey renewable energy solutions and cutting-edge
            technology solutions tailored to all climates and environments
            worldwide
          </p>
        </div>
      </section>

      {/* Plant Overview Section */}
      <section className="py-28 bg-[#f7f3ed]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
            <div className="space-y-8 self-end">
              <div>
                <h2 className="text-5xl font-medium text-blue-600 mb-2">PLANT</h2>
                <h3 className="text-5xl font-medium text-blue-600 mb-8">
                  OVERVIEW
                </h3>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-500 mb-4 tracking-wide">
                  LOCATION
                </h4>
                <p className="text-gray-600 leading-relaxed text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <div className="h-80 flex items-center justify-center shadow-lg overflow-hidden bg-white">
              <img
                src="/q2.jpg"
                alt="Plant"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Machinery Details Section */}
      <section className="py-24 bg-[#f7f3ed]">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex gap-12 items-end">
            <div className="w-2/3">
              <div className="grid grid-cols-2 gap-3">
                <div
                  className="h-56 w-full bg-cover bg-center shadow"
                  style={{ backgroundImage: "url('/q3.jpg')" }}
                />
                <div
                  className="h-56 w-full bg-cover bg-center shadow"
                  style={{ backgroundImage: "url('/q4.jpg')" }}
                />
                <div
                  className="h-56 w-full bg-cover bg-center shadow"
                  style={{ backgroundImage: "url('/q5.jpg')" }}
                />
                <div
                  className="h-56 w-full bg-cover bg-center shadow"
                  style={{ backgroundImage: "url('/q1.jpg')" }}
                />
              </div>
            </div>
            <div className="w-1/3 pt-24">
              <h2 className="text-4xl font-bold text-blue-600 mb-4 leading-tight">
                MACHINERY
                <br />
                DETAILS
              </h2>
              <p className="text-gray-600 leading-relaxed text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Workflow Section */}
      <section className="py-20 bg-[#FFFDF9]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              MANUFACTURING WORKFLOW
            </h2>
            <p className="text-gray-600 leading-relaxed text-base max-w-4xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea.
            </p>
          </div>

          <div className="flex justify-between items-start relative">
            {/* Connecting line */}
            <div className="absolute top-8 left-16 right-16 h-0.5 bg-gray-300 z-0"></div>

            <div className="text-center relative z-10 max-w-xs">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg transform rotate-12">
                <div className="w-8 h-8 bg-white rounded-lg opacity-30"></div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 tracking-wide">
                STEP 1
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                certification development/ analysis of forum ipsum dolor sit
                amet tempor adipiscing elit
              </p>
            </div>

            <div className="text-center relative z-10 max-w-xs">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg transform rotate-12">
                <div className="w-8 h-8 bg-white rounded-lg opacity-30"></div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 tracking-wide">
                STEP 2
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                certification development/ analysis of forum ipsum dolor sit
                amet tempor adipiscing elit
              </p>
            </div>

            <div className="text-center relative z-10 max-w-xs">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg transform rotate-12">
                <div className="w-8 h-8 bg-white rounded-lg opacity-30"></div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 tracking-wide">
                STEP 3
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                certification development/ analysis of forum ipsum dolor sit
                amet tempor adipiscing elit
              </p>
            </div>

            {/* Arrow pointing right */}
            <div className="absolute right-0 top-6 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-[#f7f3ed]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">GALLERY</h2>
            <p className="text-gray-600 text-sm max-w-md leading-relaxed">
              lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br />
              aliquam aliquam nisi nisi,
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {/* Left Column */}
            <div className="flex flex-col gap-4">
              <div className="h-[420px] overflow-hidden">
                <img
                  src="/qbg.jpg"
                  alt="Gallery 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[205px] overflow-hidden">
                <img
                  src="/q1.jpg"
                  alt="Gallery 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[539px] overflow-hidden">
                <img
                  src="/q2.jpg"
                  alt="Gallery 3"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Middle Column */}
            <div className="flex flex-col gap-4">
              <div className="h-[554px] overflow-hidden">
                <img
                  src="/q3.jpg"
                  alt="Gallery 4"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[361px] overflow-hidden">
                <img
                  src="/q4.jpg"
                  alt="Gallery 5"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[249px] overflow-hidden">
                <img
                  src="/q5.jpg"
                  alt="Gallery 6"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-4">
              <div className="h-[279px] overflow-hidden">
                <img
                  src="/p1.jpg"
                  alt="Gallery 7"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[523px] overflow-hidden">
                <img
                  src="/p2.jpg"
                  alt="Gallery 8"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[362px] overflow-hidden">
                <img
                  src="/p3.jpg"
                  alt="Gallery 9"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Extrusion Process Section */}
      <section className="py-20 bg-[#f7f3ed]">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Header */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-blue-600 mb-8 tracking-wide">
              EXTRUSION PROCESS
            </h2>
            <div className="text-right">
              <h3 className="text-blue-600 text-xl font-medium mb-2">
                why panache is the right extrusion partner?
              </h3>
              <p className="text-gray-600 text-lg max-w-md ml-auto">
                consectetur adipiscing elit, aliquam aliquam nisi nisi, eu
                <br />
                imperdiet ex ullamcorper eu .
              </p>
            </div>
            <div className="w-full h-px bg-blue-600 mt-8"></div>
          </div>

          {/* Steps */}
          <div className="space-y-16">
            {/* Step 1 */}
            <div className="flex items-center justify-between">
              <div className="flex gap-12 max-w-2xl items-start">
                <h3 className="text-2xl font-bold text-blue-600 mb-4 min-w-max">
                  STEP 1
                </h3>
                <p className="text-gray-700 text-xl leading-relaxed max-w-xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  aliquam aliquam nisi nisi, eu imperdiet ex ullamcorper eu.
                </p>
              </div>
              <div className="flex-shrink-0 ml-8">
                {/* Step 1 Icon - Circular process with arrows */}
                <div className="relative w-32 h-32">
                  <div className="absolute inset-0 border-4 border-blue-600 rounded-full"></div>
                  <div className="absolute inset-4 bg-blue-600 rounded-full"></div>
                  {/* Arrows around circle */}
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                    <div className="w-0 h-0 border-l-4 border-r-4 border-b-6 border-transparent border-b-blue-600"></div>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 rotate-180">
                    <div className="w-0 h-0 border-l-4 border-r-4 border-b-6 border-transparent border-b-blue-600"></div>
                  </div>
                  <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 -rotate-90">
                    <div className="w-0 h-0 border-l-4 border-r-4 border-b-6 border-transparent border-b-blue-600"></div>
                  </div>
                  <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 rotate-90">
                    <div className="w-0 h-0 border-l-4 border-r-4 border-b-6 border-transparent border-b-blue-600"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-px bg-gray-300"></div>

            {/* Step 2 */}
            <div className="flex items-center justify-between">
              <div className="flex gap-12 max-w-2xl items-start">
                <h3 className="text-2xl font-bold text-blue-600 mb-4 min-w-max">
                  STEP 2
                </h3>
                <p className="text-gray-700 text-xl leading-relaxed max-w-xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  aliquam aliquam nisi nisi, eu imperdiet ex ullamcorper eu.
                </p>
              </div>
              <div className="flex-shrink-0 ml-8">
                {/* Step 2 Icon - Geometric shape */}
                <div className="relative w-32 h-24">
                  <div className="absolute inset-0 bg-blue-600 transform skew-y-12 rotate-12"></div>
                  <div className="absolute top-2 left-2 right-4 bottom-4 bg-blue-500 transform skew-y-6 rotate-6"></div>
                  <div className="absolute top-4 left-4 right-8 bottom-8 bg-blue-400 transform skew-y-3 rotate-3"></div>
                </div>
              </div>
            </div>

            <div className="w-full h-px bg-gray-300"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InfrastructurePlant;
