"use client";
import { ModeToggle } from "@/components/global/mode-toggle";
import { useGSAP } from "@gsap/react";
import gsap, { Power0 } from "gsap";
// Home.tsx
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React, { useCallback, useMemo, useRef } from "react";

const HomePageComponent: React.FC = () => {
  const containerRef = useRef(null);
  const homeTitleRef = useRef<HTMLDivElement>(null);
  const talkRef = useRef<HTMLDivElement>(null);
  const bottomLeftTextRef = useRef<HTMLDivElement>(null);
  const bottomRightTextRef = useRef<HTMLDivElement>(null);
  const titleText = useMemo(() => "SAI - KYAW", []);
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
      const homeTitletl = gsap.timeline({ pause: true });
      homeTitletl.from("#char", {
        opacity: 0.3,
        stagger: 0.1,
      });
      gsap.from(talkRef.current, {
        x: 100,
        duration: 1,
        opacity: 0,
      });

      gsap.from(bottomLeftTextRef.current, {
        x: -100,
        opacity: 0,
        duration: 1,
      });
      gsap.from(bottomRightTextRef.current, {
        x: 100,
        opacity: 0,
        duration: 1,
      });
    },
    { scope: containerRef }
  );
  return (
    <main
      className="h-screen w-full flex flex-col justify-between"
      ref={containerRef}
    >
      <div
        className="w-full flex justify-between gap-x-4 top-0 items-center py-2"
        ref={talkRef}
      >
        <Link
          href={"#contact"}
          className="flex justify-end  w-full gap-x-2 hover:gap-x-4 transition-all duration-200 ease-linear items-center cursor-pointer"
        >
          <ArrowRight className="w-4 h-4" />
          <span>Let&apos;s talk</span>
        </Link>
        <ModeToggle />
      </div>
      <div className="w-full flex justify-center items-center">
        <h2 className="text-5xl md:text-7xl font-extrabold" ref={homeTitleRef}>
          {returnTitleText()}
        </h2>
      </div>
      <div className="flex justify-center gap-x-8 items-top">
        <div
          className="flex flex-col uppercase font-semibold text-sm md:text-md py-3 md:py-7"
          ref={bottomLeftTextRef}
        >
          <span>Freelance FullStack Developer</span>
          <span>based in BangKok,Thailand</span>
        </div>
        <div
          className="flex flex-col uppercase font-semibold text-sm md:text-md py-3 md:py-7"
          ref={bottomRightTextRef}
        >
          <span>specialized in </span>
          <span>Web and Mobile application</span>
        </div>
      </div>
    </main>
  );
};

export default HomePageComponent;
