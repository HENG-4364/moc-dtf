import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BsFacebook, BsTelegram, BsTwitterX, BsYoutube } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="relative bottom-0">
      <footer className="footer bg-dark-footer relative text-gray-200 dark:text-gray-200">
        <div className="py-[30px] px-0 border-t border-slate-800">
          <div className="container relative text-center">
            <div className="grid lg:grid-cols-12 md:grid-cols-3 grid-cols-1 items-center">
              <div className="lg:col-span-3 md:text-start text-center">
                <Link href="#" className="text-[22px] focus:outline-none">
                  <Image
                    src="/logo/moclogo-dark.png"
                    width={5000}
                    height={5000}
                    className=" w-[200px]"
                    alt=""
                  />
                </Link>
              </div>

              <div className="lg:col-span-5 text-center mt-6 md:mt-0">
                <p className="mb-0">
                  © {new Date().getFullYear()} Ministry of Commerce. All rights
                  reserved by{" "}
                  <Link
                    href="https://moc.gov.kh"
                    target="_blank"
                    className="text-reset"
                  >
                    Ministry of Commerce
                  </Link>
                  .
                </p>
              </div>

              <ul className="lg:col-span-4 list-none md:text-end text-center mt-6 md:mt-0 space-x-1">
                <li className="inline">
                  <Link
                    href="https://www.facebook.com/moc.gov.kh"
                    target="_blank"
                    className="size-8 inline-flex justify-center items-center border border-gray-800 rounded-md hover:border-[#2980B9] dark:hover:border-[#2980B9] hover:bg-[#2980B9] dark:hover:bg-[#2980B9]"
                  >
                    <BsFacebook
                      className="size-4 align-middle"
                      title="Facebook"
                    />
                  </Link>
                </li>
                <li className="inline">
                  <Link
                    href="https://t.me/mocnewsfeed"
                    target="_blank"
                    className="size-8 inline-flex justify-center items-center border border-gray-800 rounded-md hover:border-[#2980B9] dark:hover:border-[#2980B9] hover:bg-[#2980B9] dark:hover:bg-[#2980B9]"
                  >
                    <BsTelegram
                      className="size-4 align-middle"
                      title="Telegram"
                    />
                  </Link>
                </li>
                <li className="inline">
                  <Link
                    href="https://twitter.com/MoCCambodia"
                    target="_blank"
                    className="size-8 inline-flex justify-center items-center border border-gray-800 rounded-md hover:border-[#2980B9] dark:hover:border-[#2980B9] hover:bg-[#2980B9] dark:hover:bg-[#2980B9]"
                  >
                    <BsTwitterX
                      className="size-4 align-middle"
                      title="X (Twitter)"
                    />
                  </Link>
                </li>
                <li className="inline">
                  <Link
                    href="https://www.youtube.com/@mocgovkhcambodia"
                    target="_blank"
                    className="size-8 inline-flex justify-center items-center border border-gray-800 rounded-md hover:border-[#2980B9] dark:hover:border-[#2980B9] hover:bg-[#2980B9] dark:hover:bg-[#2980B9]"
                  >
                    <BsYoutube
                      className="size-4 align-middle"
                      title="YouTube"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
