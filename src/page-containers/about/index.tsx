"use client";

import { useGSAP } from "@gsap/react";
import gsap, { Expo, Power0 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef } from "react";
import Marquee from "react-fast-marquee";
const company: { company: string; duration: string; position: string }[] = [
  {
    company: "Viabells",
    duration: "4 Months",
    position: "Senior FullStack Developer",
  },
  {
    company: "Sprite",
    duration: "8 months",
    position: "Senior Frontend Developer",
  },
  { company: "BMPS", duration: "8months", position: "React Developer" },
  {
    company: "Dynasity",
    duration: "1yr & 8 months",
    position: "Junior React Developer",
  },
];
const skill1: string[] = [
  "reactjs",
  "nextjs",
  "vuejs",
  "reactnativejs",
  "nodejs",
  "mongodb",
  "mysql",
];
const skill2: string[] = [
  "tailwind",
  "shadcn",
  "mui",
  "antd",
  "framermotion",
  "gsap",
  "swr",
  "reactquery",
  "drizzle",
  "prisma",
];
const AboutPageComponent = () => {
  gsap.registerPlugin(ScrollTrigger);
  const containerRef = useRef<HTMLDivElement>(null);
  const aboutTitleRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const titleText = "Building the Interface of the Future";
  const returnTitleText = useCallback(() => {
    return titleText.split("").map((char, index) => (
      <span
        id="char"
        key={index}
        className="inline-block"
        style={{ whiteSpace: "pre" }}
      >
        {char}
      </span>
    ));
  }, [titleText]);

  useGSAP(
    () => {
      const aboutTitletl = gsap.timeline({ pause: true });
      aboutTitletl.from("#char", {
        y: 20,
        opacity: 0,
        stagger: 0.05,
        scrollTrigger: {
          trigger: "#char",
          scrub: 1,
          start: "top bottom",
        },
      });
    },
    { scope: containerRef }
  );

  useGSAP(
    () => {
      const experienceTl = gsap.timeline({ paused: true });
      if (experienceRef.current) {
        experienceTl.from(".company-text", {
          x: -50,
          stagger: 0.5,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".company-text",
            scrub: 1,
            start: "top bottom",
          },
        });
      }
    },
    { scope: experienceRef }
  );

  return (
    <main className="w-full flex flex-col py-5" ref={containerRef}>
      <div className="w-full flex justify-center py-20   flex-col gap-y-6">
        <div className=" text-4xl md:text-8xl leading-20" ref={aboutTitleRef}>
          {returnTitleText()}
        </div>
        <div className="font-normal text-xs md:text-xl w-full">
          Hello! I’m Sai Thiha Kyaw, a passionate full-stack developer with a
          solid foundation in both front-end and back-end technologies. With
          three years of hands-on experience, I specialize in turning complex
          problems into simple, beautiful, and intuitive designs.
        </div>
        <Link href="/contact">
          <div className="w-full border-2 border-black dark:border-white rounded-full flex justify-center items-center p-2 md:p-5 uppercase font-normal text-md md:text-xl dark:hover:bg-slate-800 hover:bg-slate-200">
            Let&apos; Connect With Me
          </div>
        </Link>
      </div>
      <div className="w-full flex flex-col gap-y-6 py-20  justify-center">
        <Marquee speed={100}>
          {skill1.map((skill, index) => (
            <div
              className="px-2 md:px-6 uppercase text-2xl md:text-4xl font-thin"
              key={index}
            >
              {skill}
            </div>
          ))}
        </Marquee>
        <Marquee speed={100} direction="right">
          {skill2.map((skill, index) => (
            <div
              className="px-6 uppercase text-2xl md:text-4xl font-thin"
              key={index}
            >
              {skill}
            </div>
          ))}
        </Marquee>
      </div>
      <div className="w-full" ref={experienceRef}>
        <h2 className="text-start text-2xl md:text-4xl tracking-wider font-extrabold uppercase">
          Experience
        </h2>
        {company.map((exp, index) => (
          <div
            className="flex flex-col  py-4 border-b-[7px] border-b-black dark:border-b-white"
            key={index}
          >
            <div className="flex justify-between items-start flex-col md:flex-row w-full">
              <div className="font-bold">
                {(index + 1).toString().padStart(2, "0")}
              </div>
              <div
                className="text-6xl md:text-8xl text-start md:center py-4 hover:translate-x-6 transition duration-500 "
                id={`comapny-text${index}`}
              >
                <p className="company-text">{exp.company}</p>
              </div>
              <div className="flex flex-col">
                <div className="font-bold  text-start md:text-end">
                  {exp.duration}
                </div>
                <div className="opacity-70 text-start md:text-end">
                  {exp.position}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default AboutPageComponent;
