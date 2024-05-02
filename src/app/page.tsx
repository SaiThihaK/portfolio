"use client";
// Home.tsx
import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import useMousePosition from "@/lib/useMousePosition"; // Ensure this path is correct

const Home: React.FC = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  return (
    <main className="h-screen w-full relative">
      <motion.div
        className="absolute w-full h-full flex items-center justify-center text-black"
        style={{
          WebkitMaskImage: "url('/mask.svg')", // Updated path for mask image
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
          WebkitMaskRepeat: "no-repeat",
          backgroundColor: "orange", // Semi-transparent red background
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      >
        <p
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="w-[1000px] p-10 text-6xl leading-[66px] cursor-default"
        >
          A full-stack developer - wielding a tech stack that even A.I
          can&apos;t outcode (yet) - crafting seamless applications only when
          the compensation is as robust as their code.
        </p>
      </motion.div>
      <div className="w-full h-full flex items-center justify-center text-6xl leading-[66px] text-[#afa18f] cursor-default">
        <div className="w-full flex-col">
          <div className="w-full text-start">
            I&apos;m a <span className="text-red-500">selectively skilled</span>{" "}
            full-stack developer
          </div>
          <div className="text-start ps-20 w-full">
            -committed to building robust
          </div>
          <div className="text-end">and impactful web solutions.</div>
        </div>
      </div>
    </main>
  );
};

export default Home;
