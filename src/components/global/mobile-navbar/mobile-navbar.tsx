"use client";

import Image from "next/image";

import React, { useEffect, useRef } from "react";
import Menubar from "./menu-bar";

type Props = {};

const MobileNavbar: React.FC<Props> = (props) => {
  return (
    <div className="flex relative justify-end container items-center w-full bg-transparent py-3">
      <Menubar />
    </div>
  );
};

export default MobileNavbar;
