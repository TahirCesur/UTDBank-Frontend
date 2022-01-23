import React from "react";
import PageHeader from "../components/common/PageHeader";
import Spacer from "../components/common/Spacer";
import PrivacyPolicy from "../components/PrivacyPolicy";

const PrivacyPolicyPage = () => {
  return (
    <>
      <PageHeader title="Privacy Policy" />
      <Spacer />
      <PrivacyPolicy />
      <Spacer />
    </>
  );
};

export default PrivacyPolicyPage;
