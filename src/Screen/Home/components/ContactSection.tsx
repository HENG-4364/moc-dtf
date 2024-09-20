"use client";
import React from "react";
import "tiny-slider/dist/tiny-slider.css";
import { Phone, Home, Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative md:py-24 py-16 bg-[#e9f2f8] dark:bg-[#151f36]"
    >
      <div className="container-fluid relative">
        <div className="grid grid-cols-1 pb-6 text-center">
          <h3 className="font-semibold text-2xl md:text-3xl leading-normal mb-4">
            <span className="text-[#2980B9]">Contact</span> Information
          </h3>
        </div>

        <div className="border-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.9049183395314!2d104.86180297584438!3d11.558673644276592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951c61568547b%3A0x656b9ad0261365e4!2z4Z6A4Z-S4Z6a4Z6f4Z694Z6EIOGeluGetuGejuGet-Geh-GfkuGeh-GegOGemOGfkuGemA!5e0!3m2!1skm!2skh!4v1726113623232!5m2!1skm!2skh"
            width="100%"
            height="400"
            loading="lazy"
            allowFullScreen={true}
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ContactItem
              icon={<Phone className="w-8 h-8 text-[#2980B9]" />}
              title="Call Us"
              content="1266"
            />
            <ContactItem
              icon={<Home className="w-8 h-8 text-[#2980B9]" />}
              title="Address"
              content={
                <>
                  No. 19-61, Confederation de la Russie Blvd (110)
                  <br />
                  Phnom Penh, Cambodia 12200
                </>
              }
            />
            <ContactItem
              icon={<Mail className="w-8 h-8 text-[#2980B9]" />}
              title="Email Us"
              content="cabinet.info@moc.gov.kh"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
function ContactItem({ icon, title, content }: any) {
  return (
    <div className="flex flex-col items-center text-center mt-[4rem]">
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{content}</p>
    </div>
  );
}
