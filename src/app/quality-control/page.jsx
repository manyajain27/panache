import React from "react";
import { Award } from "lucide-react";

export default function QualityControlPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative min-h-[100vh] bg-cover bg-center bg-no-repeat flex items-center justify-center bg-[#f9f2eb]"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(251, 146, 60, 0.1), rgba(253, 186, 116, 0.1)), url('/qbg.jpg')`,
        }}
      >
        <div className="relative z-10 text-center text-white px-4 w-full">
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
      <section className="py-20 bg-[#f9f2eb]">
        <div className="max-w-6xl mx-auto px-12">
          {/* Header */}
          <div className="mb-16">
            <h2 className="text-5xl font-bold text-blue-500 mb-8 tracking-wide">
              QUALITY PROCESS
            </h2>
            <div className="w-full h-1 bg-blue-500 mb-12"></div>
            <p className="text-gray-700 text-lg max-w-3xl leading-relaxed">
              lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam
              aliquam nisl nisl, eu imperdiet ex ullamcorper eu
            </p>
          </div>

          <div className="w-full h-px bg-blue-400 my-8"></div>

          <div className="space-y-0">
            {/* Step 1 */}
            <div className="flex items-center gap-8">
              <div className="flex-1 flex items-center">
                <span className="text-lg font-bold text-blue-600 mr-4 min-w-max">
                  STEP 1
                </span>
                <span className="text-base text-gray-700">
                  lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  aliquam aliquam nisi nisi, eu imperdiet ex ullamcorper eu
                </span>
              </div>
              <div
                className="w-48 h-32 flex-shrink-0 rounded bg-cover bg-center"
                style={{ backgroundImage: "url('/q1.jpg')" }}
              />
            </div>
            <div className="w-full h-px bg-blue-400 my-8"></div>

            {/* Step 2 */}
            <div className="flex items-center gap-8">
              <div className="flex-1 flex items-center">
                <span className="text-lg font-bold text-blue-600 mr-4 min-w-max">
                  STEP 2
                </span>
                <span className="text-base text-gray-700">
                  lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  aliquam aliquam nisl nisl, eu imperdiet ex ullamcorper eu
                </span>
              </div>
              <div
                className="w-48 h-32 flex-shrink-0 rounded bg-cover bg-center"
                style={{ backgroundImage: "url('/q1.jpg')" }}
              />
            </div>
            <div className="w-full h-px bg-blue-400 my-8"></div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-36 bg-[#FFFDF9]">
        <div className="max-w-6xl mx-auto px-8">
          <div className="mb-12">
            <h2 className="text-6xl font-medium text-gray-800 mb-4">
              CERTIFICATIONS
            </h2>
            <p className="text-gray-600 mb-8 text-2xl">
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
              <h3 className="font-medium text-gray-800 mb-2 text-2xl">
                BIS CERTIFIED
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
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
              <h3 className="font-medium text-gray-800 mb-2 text-2xl">
                ISO CERTIFIED
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
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
              <h3 className="font-medium text-gray-800 mb-2 text-2xl">OTHER</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                certification description/ metrics etc lorem ipsum dolor sit
                amet,
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lab Equipment Section */}
      <section className="py-24 bg-[#f9f2eb]">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex gap-12 items-end">
            <div className="w-1/3 self-end">
              <h2 className="text-6xl font-medium text-blue-600 mb-4 leading-tight">
                LAB
                <br />
                EQUIPMENT
              </h2>
              <p className="text-gray-600 leading-relaxed text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, aliquam
                aliquam nisl nisl, eu imperdiet ex ullamcorper eu.
              </p>
            </div>

            <div className="w-2/3">
              <div className="grid grid-cols-2 gap-3">
                {/* Lab Equipment Image 1 - q2.jpg */}
                <div
                  className="h-56 w-full bg-cover bg-center shadow"
                  style={{ backgroundImage: "url('/q2.jpg')" }}
                />
                {/* Lab Equipment Image 2 - q3.jpg */}
                <div
                  className="h-56 w-full bg-cover bg-center shadow"
                  style={{ backgroundImage: "url('/q3.jpg')" }}
                />
                {/* Lab Equipment Image 3 - q4.jpg */}
                <div
                  className="h-56 w-full bg-cover bg-center shadow"
                  style={{ backgroundImage: "url('/q4.jpg')" }}
                />
                {/* Lab Equipment Image 4 - q5.jpg */}
                <div
                  className="h-56 w-full bg-cover bg-center shadow"
                  style={{ backgroundImage: "url('/q5.jpg')" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
