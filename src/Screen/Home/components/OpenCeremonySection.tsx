"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function OpenCeremonySection() {
  let [activeIndex, setActiveIndex] = useState(1);
  return (
    <section
      id="speakers"
      className="realtive md:py-24 py-16 bg-[#e9f2f8] dark:bg-[#151f36]"
    >
      <div className="container relative">
        <div className="grid grid-cols-1 pb-6 text-center">
          <h3 className="font-semibold text-2xl md:text-3xl leading-normal mb-4">
            <span className="text-[#2980B9]">Opening Ceremony</span> By
          </h3>
        </div>

        <div className="grid md:grid-cols-12 grid-cols-1 mt-6 gap-6">
          <div className="lg:col-span-1 col-span-0"></div>

          {/* Sidebar */}
          <div className="lg:col-span-4 md:col-span-5">
            <div className="sticky top-20">
              <ul className="flex-column p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                {/* Prime Minister Button */}
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
                      Prime Minister of Cambodia
                    </span>
                    <span className="block mt-2">
                      Samdech Moha Borvor Thipadei Hun Manet
                    </span>
                  </button>
                </li>

                {/* Minister of Commerce Button */}
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
                      Minister of Commerce
                    </span>
                    <span className="block mt-2">LCT. CHAM Nimul</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Content */}
          <div className="shadow-md dark:shadow-gray-700 lg:col-span-6 md:col-span-7">
            <div
              id="myTabContent"
              className="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md"
            >
              {/* Prime Minister Content */}
              <div className={activeIndex === 1 ? "" : "hidden"}>
                <Image
                  src="/images/HE_Hun_Maneth.png"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  className="shadow dark:shadow-gray-700 rounded-md"
                  alt="Prime Minister of Cambodia"
                />
              </div>

              {/* Minister of Commerce Content */}
              <div className={activeIndex === 2 ? "" : "hidden"}>
                <Image
                  src="/images/HE_Cham_Nimul.png"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  className="shadow dark:shadow-gray-700 rounded-md"
                  alt="Minister of Commerce"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 col-span-0"></div>
        </div>
      </div>
    </section>
  );
}
