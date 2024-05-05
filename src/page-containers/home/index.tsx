"use client";
// Home.tsx
import { ArrowRight } from "lucide-react";
import React from "react";

const HomePageComponent: React.FC = () => {
  return (
    <main className="h-screen w-full flex flex-col justify-between">
      <div className="w-full flex justify-between top-0 items-center py-2">
        <div className="flex justify-end w-full gap-x-2 hover:gap-x-4 transition-all duration-200 ease-linear items-center">
          <ArrowRight className="w-4 h-4" />
          <span>Let's talk</span>
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <h2 className="text-7xl font-extrabold">SAI - KYAW</h2>
      </div>
      <div className="flex justify-center gap-x-8">
        <div className="flex flex-col uppercase font-semibold py-7">
          <span>Freelance FullStack Developer</span>
          <span>based in BangKok,Thailand</span>
        </div>
        <div className="flex flex-col uppercase font-semibold py-7">
          <span>specialized in </span>
          <span>Web and Mobile application</span>
        </div>
      </div>
    </main>
  );
};

export default HomePageComponent;
