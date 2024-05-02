"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import React, { useMemo, useState } from "react";

type Props = {
  children: React.ReactNode;
};

const PageWrapper = ({ children }: Props) => {
  const pathname = usePathname();
  const { theme } = useTheme();

  const backgroundColor = useMemo(() => {
    const color = theme === "dark" ? "#020817" : "#fff";
    return color;
  }, [theme]);

  return (
    // <AnimatePresence mode="wait">
    //   <motion.div
    //     key={pathname}
    //     className="container relative"
    //     initial="initialState"
    //     animate="animateState"
    //     exit="exitState"
    //     transition={{
    //       duration: 0.8,
    //     }}
    //     variants={{
    //       initialState: {
    //         opacity: 0,
    //         backgroundColor, // Apply theme-based background color
    //         clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
    //       },
    //       animateState: {
    //         opacity: 1,
    //         backgroundColor, // Maintain consistent background color during animation
    //         clipPath: [
    //           "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
    //           "polygon(75% 0, 100% 0, 100% 100%, 75% 100%)",
    //           "polygon(50% 0, 75% 0, 75% 100%, 50% 100%)",
    //           "polygon(25% 0, 50% 0, 50% 100%, 25% 100%)",
    //           "polygon(0 0, 100% 0, 100% 100%, 0 100%)", // Full page coverage in the final step
    //         ],
    //       },
    //       exitState: {
    //         opacity: 0,
    //         backgroundColor,
    //         // clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
    //       },
    //     }}
    //   >
    //     {children}
    //   </motion.div>
    // </AnimatePresence>
    <div className="container relative">{children}</div>
  );
};

export default PageWrapper;
