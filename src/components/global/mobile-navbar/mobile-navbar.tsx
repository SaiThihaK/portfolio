"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

import React, { useEffect, useRef, useState } from "react";
import Menubar from "./menu-bar";

type Props = {};

const MobileNavbar: React.FC<Props> = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (Math.abs(currentScrollY - lastScrollY) > 50) {
        if (currentScrollY < lastScrollY) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
        setLastScrollY(currentScrollY);
      }
    };
    if (window) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (window) {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [lastScrollY]);
  return (
    <div
      className={cn(
        "flex relative justify-end container  items-center w-full bg-transparent py-3",
        {
          "hidden w-full": !isVisible,
        }
      )}
    >
      <Menubar />
    </div>
  );
};

export default MobileNavbar;
