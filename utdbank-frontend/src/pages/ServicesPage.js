import React from "react";
import Footer from "../components/common/Footer";
import PageHeader from "../components/common/PageHeader";
import TopBar from "../components/common/TopBar";
import Service from "../components/services/Service";

const ServicesPage = () => {
  return (
    <div>
      <TopBar />
      <PageHeader title="Services" />
      <Service />
      <Footer />
    </div>
  );
};

export default ServicesPage;
