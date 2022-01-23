import React from "react";
import AboutPage from "../pages/AboutPage";
import AuthPage from "../pages/AuthPage";
import PrivacyPolicyPage from "../pages/PrivacyPolicyPage";
import FaqsPage from "../pages/FaqsPage";
import ServicesPage from "../pages/ServicesPage";
import ForgetPassword from "../pages/ForgetPassword";
import HomePage from "../pages/HomePage";
import PricingPage from "../pages/PricingPage";
import TermsConditionsPage from "../pages/TermsConditionsPage";
import ContactUsPage from "../pages/ContactUsPage";
import { Routes, Route } from "react-router-dom";
import ProfilePage from "../pages/user/ProfilePage";

const CustomRoutes = () => {
  return (
    <Routes>
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/contact-us" element={<ContactUsPage />} />
      <Route path="/terms-conditions" element={<TermsConditionsPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/about-us" element={<AboutPage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/faqs" element={<FaqsPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/forget-password" element={<ForgetPassword />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default CustomRoutes;
