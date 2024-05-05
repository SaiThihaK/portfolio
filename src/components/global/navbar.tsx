"use client";

import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { ModeToggle } from "./mode-toggle";

type Props = {};

const NavbarLinks: {
  title: string;
  path: string;
}[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

const Navbar = (props: Props) => {
  const pathname = usePathname();

  const getPathName = useCallback(() => {
    const navigateRoute = NavbarLinks.find((nav) => nav.path === pathname);
    if (navigateRoute) return navigateRoute.title;
    return "Home";
  }, [pathname]);
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
      className={cn("hidden", {
        "w-full flex items-center justify-center": isVisible,
      })}
    >
      <div className="flex  rounded-lg p-1 bg-[#4d4d4d] shadow-lg md:gap-x-[2px]">
        <div className="p-2  flex items-center bg-[#222222] rounded-lg text-white">
          {getPathName()}
          <Menu size="16" />
        </div>
        <div className="flex gap-x-1 bg-[#3e3e3e] px-2 py-1 rounded-lg">
          {NavbarLinks.map((navbar) => (
            <Link href={navbar.path} key={navbar.path}>
              <div
                className={cn(
                  "flex justify-center p-2 cursor-pointer items-center   rounded-lg",
                  {
                    "border-[0.5px] border-[#4e4e4e] hover:border-white ":
                      navbar.path !== pathname,
                  }
                )}
              >
                <span className="text-white ">{navbar.title}</span>
              </div>
            </Link>
          ))}
          <div>
            <ModeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
