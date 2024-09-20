import Image from "next/image";
import Link from "next/link";
import React from "react";
import style from "./home.module.scss";
// import SpeakerSection from "./components/SpeakerSection";
// import OpenCeremonySection from "./components/OpenCeremonySection";
// import SchedulingSection from "./components/SchedulingSection";
// import ContactSection from "./components/ContactSection";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import SupportSection from "./components/SupportSection";
import SpeakerSection from "./components/SpeakerSection";
import SchedulingSection from "./components/SchedulingSection";
import OpenCeremonySection from "./components/OpenCeremonySection";
import ContactSection from "./components/ContactSection";

const HomeScreen = () => {
  const words = `1st Cambodian Digital Trade Forum`;
  return (
    <>
      <section
        className="relative overflow-hidden md:py-28 py-32 bg-sky-100 dark:bg-sky-100/20"
        id="home"
      >
        <div className="container relative mt-8">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 items-center">
            <div>
              <TextGenerateEffect  words={words} />
              {/* <ForumTitle /> */}
              <p className="text-slate-400 text-lg max-w-xl">
                The 1st Cambodian Digital Trade Forum & Online Expo is designed
                to be a landmark event that will showcase Cambodia’s digital
                trade capabilities and inspire a movement to promote locally
                made products globally
              </p>

              <div className="mt-6">
                <Link
                  href="/register"
                  className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-[#2980B9] text-white"
                >
                  Register <i className="mdi mdi-chevron-right ms-1"></i>
                </Link>
              </div>
            </div>

            <div className="lg:ms-8">
              <div className="relative">
                <Image
                  src="/images/dtf-frontpage.png"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  className="relative"
                  alt=""
                />
                {/* <div className="overflow-hidden absolute md:size-[500px] size-[400px] bg-gradient-to-tl to-sky-100/20 via-sky-100/70 from-sky-100 bottom-1/2 translate-y-1/2 md:start-0 start-1/2 ltr:md:translate-x-0 ltr:-translate-x-1/2 rtl:md:translate-x-0 rtl:translate-x-1/2 -z-1 shadow-md shadow-sky-100/10 rounded-full"></div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative md:py-24 py-16" id="about">
        <div className="container relative">
          <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
            <div className="md:col-span-6">
              <div className="lg:me-8">
                <div className="relative ">
                  <Image
                    src="/images/about.png"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full max-w-sm h-auto rounded-full shadow dark:shadow-gray-700 m-auto"
                    alt=""
                  />

                  <Link href="https://cambodiatrade.com" target="_blank">
                    <div
                      className={`absolute top-1/2 -translate-y-1/2 start-0 end-0 mx-auto size-56 flex justify-center items-center bg-white dark:bg-white rounded-full shadow `}
                    >
                      <div className="text-center flex flex-col justify-center items-center">
                        <Image
                          src="/logo/cambodia_trade_logo.jpg"
                          width={120}
                          height={120}
                          sizes="100vw"
                          alt=""
                        />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="md:col-span-6">
              <div className="lg:ms-8">
                <h6 className="text-[#2980B9] text-sm font-semibold uppercase mb-2">
                  Campaign Overview
                </h6>
                <h3 className="font-semibold text-2xl leading-normal mb-4">
                  From Local Made to Global Trade (Local2Global)
                </h3>

                <p className="text-slate-400 max-w-xl mb-6">
                  The “From Local Made to Global Trade (Local2Global)” campaign
                  aims to evaluate Cambodia&apos;s products on the global stage
                  by leveraging the power of e-commerce through
                  CambodiaTrade.com and other eCommerce Marketplaces to promote
                  Cambodia Local Products. The campaign will culminate in an
                  online expo on December 13-16, 2024. This event will serve as
                  both a showcase of Cambodia&apos;s rich cultural heritage and
                  a platform for innovation in digital trade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <OpenCeremonySection />

      <SchedulingSection />

      <SpeakerSection />
      <SupportSection />

      <ContactSection />
    </>
  );
};

export default HomeScreen;
