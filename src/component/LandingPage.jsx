import "./LandingPageHeader.css";
import { Component } from "react";
import { Logo } from "./logo";

export const LandingPageHeader = () => {
  return (
    <header className="header">
      <div className="logo">
        <Logo useWhite={true} />
      </div>

      <div className="menu">
        <ul>
          <li>
            <a href="#">Premium</a>
          </li>

          <li>
            <a href="#">Support</a>
          </li>

          <li>
            <a href="#">Download</a>
          </li>

          <li>|</li>

          <li className="active">
            <a href="#">Sign up</a>
          </li>
          <li className="active">
            <a href="#">Log in</a>
          </li>
        </ul>
      </div>
      {/* <div>Premium</div>
        <div>Support</div>
        <div>Download</div>
        <div className="line"></div>
        <div>Sign up</div>
        <div>Log in</div>
        <div></div> */}
    </header>
  );
};
