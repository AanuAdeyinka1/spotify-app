import "./LandingPageHeader.css";
import { Component } from "react";
import { Logo } from "../logo";
import { Features } from "../FeatureSection/FeatureSection.jsx"
import { SectionOne } from "../SectionOne/SectionOne.jsx"
import { PricingSection } from "../Pricing/index.jsx";
import { LoginPage } from "../LoginPage/Login.jsx"

export const LandingPageHeader = () => {
  return (
    <div>
      <header className="header">
        <div className="logo">
          <Logo useWhite={true} />
        </div>

        <div className="menu">
          <ul>
            <li>
              <a href="/premium">Premium</a>
            </li>

            <li>
              <a href="/support">Support</a>
            </li>

            <li>
              <a href="/download">Download</a>
            </li>

            <li>|</li>

            <li className="active">
              <a href="/signup">Sign up</a>
            </li>
            <li className="active">
              <a href="/login">Log in</a>
            </li>
          </ul>
        </div>
      </header>
      <SectionOne />
      <Features />
      <PricingSection />
      <LoginPage />
    </div>
  );
};
