"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function SpeakerSection() {
  let [activeIndex, setActiveIndex] = useState(1);
  return (
    <section className="realtive md:py-24 py-16">
      <div className="container relative">
        <div className="grid grid-cols-1 pb-6 text-center">
          <h3 className="font-semibold text-2xl md:text-3xl leading-normal mb-4">
            <span className="text-[#2980B9]">High Profile</span> Speaker
          </h3>
        </div>

        <div className="grid md:grid-cols-12 grid-cols-1 mt-6 gap-6">
          <div className="lg:col-span-1 col-span-0"></div>

          {/* Sidebar Mobile */}
          <div className="lg:col-span-4 md:col-span-5 block md:hidden">
            <div className="sticky top-20">
              <ul className="flex-column p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                {/* Chea Vandeth Button */}
                <li role="presentation">
                  <button
                    className={`px-4 py-2 text-start text-base font-medium rounded-md w-full hover:text-[#2980B9] duration-500 ${
                      activeIndex === 1
                        ? "text-white bg-[#2980B9] hover:text-white"
                        : ""
                    }`}
                    onClick={() => setActiveIndex(1)}
                  >
                    <span className="text-lg mt-2 block font-bold">
                      Minister of Post and Telecommunication
                    </span>
                    <span className="block mt-2">H.E. Dr. Chea Vandeth</span>
                  </button>
                </li>

                {/* Chea Serey Button */}
                <li role="presentation" className="mt-6">
                  <button
                    className={`px-4 py-2 text-start text-base font-medium rounded-md w-full hover:text-[#2980B9] duration-500 ${
                      activeIndex === 2
                        ? "text-white bg-[#2980B9] hover:text-white"
                        : ""
                    }`}
                    onClick={() => setActiveIndex(2)}
                  >
                    <span className="text-lg mt-2 block font-bold">
                      Governor of the National Bank of Cambodia
                    </span>
                    <span className="block mt-2">H.E. Dr. Chea Serey</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Content Section */}
          <div className="shadow-md dark:shadow-gray-700 lg:col-span-6 md:col-span-7">
            <div
              id="myTabContent"
              className="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md"
            >
              {/* Chea Vandeth Content */}
              <div className={activeIndex === 1 ? "" : "hidden"}>
                <Image
                  src="/images/HE_Chea_Vandeth.png"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  className="shadow dark:shadow-gray-700 rounded-md"
                  alt="Minister of Post and Telecommunication"
                />
              </div>

              {/* Chea Serey Content */}
              <div className={activeIndex === 2 ? "" : "hidden"}>
                <Image
                  src="/images/HE_Chea_Serey.png"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  className="shadow dark:shadow-gray-700 rounded-md"
                  alt="Governor of the National Bank of Cambodia"
                />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="hidden md:block lg:col-span-4 md:col-span-5">
            <div className="sticky top-20">
              <ul className="flex-column p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                {/* Chea Vandeth Button */}
                <li role="presentation">
                  <button
                    className={`px-4 py-2 text-start text-base font-medium rounded-md w-full hover:text-[#2980B9] duration-500 ${
                      activeIndex === 1
                        ? "text-white bg-[#2980B9] hover:text-white"
                        : ""
                    }`}
                    onClick={() => setActiveIndex(1)}
                  >
                    <span className="text-lg mt-2 block font-bold">
                      Minister of Post and Telecommunication
                    </span>
                    <span className="block mt-2">H.E. Dr. Chea Vandeth</span>
                  </button>
                </li>

                {/* Chea Serey Button */}
                <li role="presentation" className="mt-6">
                  <button
                    className={`px-4 py-2 text-start text-base font-medium rounded-md w-full hover:text-[#2980B9] duration-500 ${
                      activeIndex === 2
                        ? "text-white bg-[#2980B9] hover:text-white"
                        : ""
                    }`}
                    onClick={() => setActiveIndex(2)}
                  >
                    <span className="text-lg mt-2 block font-bold">
                      Governor of the National Bank of Cambodia
                    </span>
                    <span className="block mt-2">H.E. Dr. Chea Serey</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-1 col-span-0"></div>
        </div>
      </div>
    </section>
  );
}
