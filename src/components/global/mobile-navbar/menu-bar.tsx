"use client";

import gsap, { Power2 } from "gsap";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import styles from "./styles.module.css";
import { useGSAP } from "@gsap/react";
import { ModeToggle } from "../mode-toggle";

type Props = {};

const Menubar = (props: Props) => {
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const fullPageRef = useRef<HTMLDivElement>(null);
  const fullMenuRef = useRef<HTMLDivElement>(null);
  const mainMenuRef = useRef<HTMLUListElement>(null);
  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    const menuBar = gsap.timeline({ paused: true });
    const tl = gsap.timeline();
    if (!menuToggleRef.current) {
      return;
    }

    // Animating the first bar to rotate into a "/" shape
    menuBar.to(
      ".bar-1",
      0.5,
      {
        attr: { d: "M8,2 L2,8" },
        x: 1,
        ease: Power2.easeInOut,
      },
      "start"
    );

    // Hiding the middle bar
    menuBar.to(
      ".bar-2",
      0.5,
      {
        autoAlpha: 0,
      },
      "start"
    );

    menuBar.to(
      ".bar-3",
      0.5,
      {
        attr: { d: "M8,8 L2,2" },
        x: 1,
        ease: Power2.easeInOut,
      },
      "start"
    );

    tl.to(fullPageRef.current, { display: "block" }); // This uses gsap.set for immediate changes

    tl.from(".span-menu span", {
      duration: 0.7,
      x: "100%",
      stagger: 0.1,
      ease: "Expo.easeInOut",
    });

    tl.from(".link a", {
      duration: 0.5,
      y: "100%",
      stagger: 0.1,
      ease: "Expo.easeInOut",
    });

    menuBar.reverse();
    tl.reverse();
    const toggleButton = menuToggleRef.current;
    toggleButton.addEventListener("click", () => {
      menuBar.reversed(!menuBar.reversed());
      tl.reversed(!tl.reversed());
    });
    mainMenuRef.current?.addEventListener("click", () => {
      menuBar.reversed(!menuBar.reversed());
      tl.reversed(!tl.reversed());
    });

    return () => {
      menuBar.revert();
      tl.revert();
    };
  }, {});

  return (
    <>
      <div
        className="fullPage fixed w-full left-0 top-0 h-screen z-[99] hidden"
        ref={fullPageRef}
      >
        <div
          className="flex items-center h-full px-5 py-[60px]"
          ref={fullMenuRef}
        >
          <div className="h-full w-full absolute top-0 left-0 span-menu z-[8]">
            <span className="h-1/3 w-full  dark:bg-white bg-black block"></span>
            <span className="h-1/3 w-full  dark:bg-white bg-black block"></span>
            <span className="h-1/3 w-full  dark:bg-white bg-black block"></span>
          </div>
          <nav className="relative z-[10] w-full">
            <ul ref={mainMenuRef}>
              <li
                className="link overflow-hidden mt-5 hover:translate-x-[50px]"
                style={{
                  transition: "transform 500ms ease-in-out 0s",
                }}
              >
                <Link
                  href="/"
                  className="dark:text-black text-white font-extrabold text-6xl inline-block uppercase leading-[1]"
                >
                  Home
                </Link>
              </li>
              <li
                className=" link overflow-hidden mt-5 hover:translate-x-[50px]"
                style={{
                  transition: "transform 500ms ease-in-out 0s",
                }}
              >
                <Link
                  href="#about"
                  className=" dark:text-black text-white  text-6xl font-extrabold  inline-block uppercase leading-[1]"
                >
                  About
                </Link>
              </li>
              <li
                className="link overflow-y-hidden  mt-5 hover:translate-x-[50px]"
                style={{
                  transition: "transform 500ms ease-in-out 0s",
                }}
              >
                <Link
                  href="#contact"
                  className=" dark:text-black text-white font-extrabold   text-6xl inline-block uppercase leading-[1]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <button
        className="block  bg-red-600 border-none cursor-pointer p-3 rounded-full z-[999]"
        ref={menuToggleRef}
      >
        <svg
          viewBox="0 0 12 10"
          className={styles.hamburger}
          height="30px"
          width="30px"
        >
          <path d="M10,2 L2,2" className="bar-1" id="bar-1"></path>
          <path d="M2,5 L10,5" className="bar-2" id="bar-2"></path>
          <path d="M10,8 L2,8" className="bar-3" id="bar-3"></path>
        </svg>
      </button>
    </>
  );
};

export default Menubar;
