"use client";
import React from "react";
import Image from "next/image";
import "tiny-slider/dist/tiny-slider.css";
import { companyData } from "@/data/data";


interface CompanyData {
  logo: string;
}
export default function SupportSection() {
  return (
    <section id="supporters" className="relative md:py-24 py-16">
      <div className="container relative">
        <div className="grid grid-cols-1 pb-6 text-center">
          <h3 className="font-semibold text-2xl md:text-3xl leading-normal mb-4">
            <span className="text-[#2980B9]">Supported</span> by
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6">
          {companyData.map((item, index) => {
            return (
              <div
                key={index + 1}
                className="content dark:bg-white relative rounded-lg shadow-md p-6 transition-transform hover:scale-105 dark:shadow-gray-700 m-2 bg-white flex items-center justify-center"
              >
                <Image
                  src={item.logo}
                  width={300}
                  height={260}
                  style={{
                    width: "200px",
                    height: "auto",
                  }}
                  alt={`Company Logo ${index + 1}`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
