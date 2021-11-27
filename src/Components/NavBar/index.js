import React from "react";
import { HashLink } from "react-router-hash-link";
import FooterVirus from "../../Assets/Images/footerVirus.svg";
import "./styles.scss";

export default function NavbarComp() {
  return (
    <div className="navbar-component">
      <div className="logo-wrapper">
        <img className="logo" src={FooterVirus} alt="logo" />
        <div className="heading">Covid - 19</div>
      </div>

      <div className="nav-items">
        <HashLink to="#Overview">
          <div className="selected-item">
            Overview <div className="selection-dot">•</div>{" "}
          </div>
        </HashLink>
        <HashLink to="#contagion">
          <div className="items">Contagion</div>
        </HashLink>
        <HashLink to="#symptoms">
          <div className="items">Symptoms</div>
        </HashLink>
        <HashLink to="#prevention">
          <div className="items">Prevention</div>
        </HashLink>
        <div className="contact-button">Contact</div>
      </div>
    </div>
  );
}
