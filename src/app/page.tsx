import AboutPageComponent from "@/page-containers/about";
import ContactPage from "@/page-containers/contact";
import HomePageComponent from "@/page-containers/home";
import { NextPage } from "next";
import React from "react";

const page: NextPage = () => {
  return (
    <>
      <HomePageComponent />
      <AboutPageComponent />
      <ContactPage />
    </>
  );
};

export default page;
