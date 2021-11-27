import React from "react";
import { HashLink } from "react-router-hash-link";
import PaleVirus from "../../Assets/Images/paleVirus.svg";
import PaleRedVirusRight from "../../Assets/Images/paleVirusRight.svg";
import FooterVirus from "../../Assets/Images/footerVirus.svg";
import FaceBook from "../../Assets/Images/faceBook.svg";
import Youtube from "../../Assets/Images/youtube.svg";
import Vimeo from "../../Assets/Images/vimeo.svg";
import Twitter from "../../Assets/Images/twitter.svg";
import "./styles.scss";

const Footer = () => {
  return (
    <div className="footer-component">
      <div className="contact-us-container">
        <img
          className="half-virus-img"
          alt="virus"
          src={PaleRedVirusRight}
          loading="lazy"
        />
        <img
          className="full-virus-img"
          alt="virus"
          src={PaleVirus}
          loading="lazy"
        />
        <div className="heading">
          Have Question in mind?
          <br />
          Let us help you
        </div>
        <div className="input-wrapper">
          <input className="input-ele" placeholder="snmonydemo@gmail.com" />
          <button className="submit-btn">Send</button>
        </div>
      </div>
      <div className="footer-navigation">
        <div className="footer-logo">
          <img className="logo" alt="logo" src={FooterVirus} loading="lazy" />
          <div className="logo-heading">Covid - 19</div>
        </div>
        <div className="footer-nav-items">
          <HashLink to="#Overview">
            <div className="items">Overview</div>
          </HashLink>{" "}
          <HashLink to="#symptoms">
            <div className="items">Symptoms</div>{" "}
          </HashLink>{" "}
          <HashLink to="#prevention">
            <div className="items">Prevention</div>{" "}
          </HashLink>{" "}
          <HashLink to="#contagion">
            <div className="items">Treatment</div>{" "}
          </HashLink>
        </div>
        <div className="footer-nav-items">
          <img
            className="logo-item"
            alt="FaceBook"
            src={FaceBook}
            loading="lazy"
          />
          <img
            className="logo-item"
            alt="Youtube"
            s
            src={Youtube}
            loading="lazy"
          />
          <img className="logo-item" alt="Vimeo" src={Vimeo} loading="lazy" />
          <img
            className="logo-item"
            alt="Twitter"
            src={Twitter}
            loading="lazy"
          />
        </div>
      </div>
      <div className="copy-right-text">
        2020 @ All rights reserved by pixelspark.co
      </div>
    </div>
  );
};

export default Footer;
