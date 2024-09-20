"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Link as Link1 } from "react-scroll";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  let [scroll, setScroll] = useState(false);
  let [manu, setManu] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        setScroll(window.scrollY > 50);
      });
    };
  }, []);

  if (pathname === "/register") {
    return (
      <nav
        className={`navbar ${
          scroll ? "is-sticky bg-white dark:bg-black " : ""
        }`}
        id="navbar"
      >
        <div className="container relative flex flex-wrap items-center justify-between">
          <Link className="navbar-brand md:me-8" href="/">
            <Image
              src="/logo/moc-logo.png"
              width={5000}
              height={5000}
              className="inline-block dark:hidden w-[200px]"
              alt=""
            />
            <Image
              src="/logo/moclogo-dark.png"
              width={5000}
              height={5000}
              className="hidden dark:inline-block w-[200px]"
              alt=""
            />
          </Link>

          <div className="nav-icons flex items-center lg_992:order-2 ms-auto md:ms-8">
            <ul className="list-none menu-social mb-0">
              <li className="inline">
                <Link
                  href="/register"
                  className="h-8 px-4 text-[12px] tracking-wider inline-flex items-center justify-center font-medium rounded-md bg-[#2980B9] text-white uppercase"
                >
                  Register
                </Link>
              </li>
            </ul>
            <button
              data-collapse="menu-collapse"
              type="button"
              className="collapse-btn inline-flex items-center ms-2 text-dark dark:text-white lg_992:hidden"
              onClick={() => setManu(!manu)}
            >
              <span className="sr-only">Navigation Menu</span>
              <i className="mdi mdi-menu text-[24px]"></i>
            </button>
          </div>

          <div
            className={`navigation lg_992:order-1 lg_992:flex  ms-auto ${
              manu ? "" : "hidden"
            }`}
            id="menu-collapse"
          >
            <ul className="navbar-nav" id="navbar-navlist">
              <li className="nav-item ms-0">
                <Link
                  className="nav-link font-extrabold text-black dark:text-white"
                  href="/"
                >
                  Home
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav
      className={`navbar ${scroll ? "is-sticky bg-white dark:bg-black  " : ""}`}
      id="navbar"
    >
      <div className="container relative flex flex-wrap items-center justify-between">
        <Link className="navbar-brand md:me-8" href="/">
          <Image
            src="/logo/moc-logo.png"
            width={5000}
            height={5000}
            className="inline-block dark:hidden w-[200px]"
            alt=""
          />
          <Image
            src="/logo/moclogo-dark.png"
            width={5000}
            height={5000}
            className="hidden dark:inline-block w-[200px]"
            alt=""
          />
        </Link>

        <div className="nav-icons flex items-center lg_992:order-2 ms-auto md:ms-8">
          <ul className="list-none menu-social mb-0">
            <li className="inline">
              <Link
                href="/register"
                className="h-8 px-4 text-[12px] tracking-wider inline-flex items-center justify-center font-medium rounded-md bg-[#2980B9] text-white uppercase"
              >
                Register
              </Link>
            </li>
          </ul>
          <button
            data-collapse="menu-collapse"
            type="button"
            className="collapse-btn inline-flex items-center ms-2 text-dark dark:text-white lg_992:hidden"
            onClick={() => setManu(!manu)}
          >
            <span className="sr-only">Navigation Menu</span>
            <i className="mdi mdi-menu text-[24px]"></i>
          </button>
        </div>

        <div
          className={`navigation lg_992:order-1 lg_992:flex  ms-auto ${
            manu ? "" : "hidden"
          }`}
          id="menu-collapse"
        >
          <ul className="navbar-nav" id="navbar-navlist ">
            <li className="nav-item ms-0">
              <Link1
                className="nav-link font-extrabold text-black dark:text-white"
                to="home"
                smooth={true}
                duration={200}
                activeClass="active"
                spy={true}
              >
                Home
              </Link1>
            </li>

            <li className="nav-item ms-0">
              <Link1
                className="nav-link font-extrabold text-black dark:text-white"
                to="about"
                smooth={true}
                duration={200}
                activeClass="active"
                spy={true}
              >
                About
              </Link1>
            </li>

            <li className="nav-item ms-0">
              <Link1
                className="nav-link font-extrabold text-black dark:text-white"
                to="speakers"
                smooth={true}
                duration={200}
                activeClass="active"
                spy={true}
              >
                Speakers
              </Link1>
            </li>
            <li className="nav-item ms-0">
              <Link1
                className="nav-link font-extrabold text-black dark:text-white"
                to="schedules"
                smooth={true}
                duration={200}
                activeClass="active"
                spy={true}
              >
                Schedules
              </Link1>
            </li>
            <li className="nav-item ms-0">
              <Link1
                className="nav-link font-extrabold text-black dark:text-white"
                to="supporters"
                smooth={true}
                duration={200}
                activeClass="active"
                spy={true}
              >
                Supporters
              </Link1>
            </li>

            <li className="nav-item ms-0">
              <Link1
                className="nav-link font-extrabold text-black dark:text-white"
                to="contact"
                smooth={true}
                duration={200}
                activeClass="active"
                spy={true}
              >
                Contact
              </Link1>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
