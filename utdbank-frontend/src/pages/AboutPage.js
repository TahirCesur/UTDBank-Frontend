import React from "react";
import About from "../components/about/About";
import Retail from "../components/about/Retail";
import PageHeader from "../components/common/PageHeader";

const AboutPage = () => {
  return (
    <>
      <PageHeader title="About Us" />
      <About />
      <Retail />
    </>
  );
};

export default AboutPage;
