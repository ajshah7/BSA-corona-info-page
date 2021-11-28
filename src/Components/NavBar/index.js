import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import FooterVirus from "../../Assets/Images/footerVirus.svg";
import SidebarIcon from "../../Assets/Images/sidebar.svg";
import CloseIcon from "../../Assets/Images/closeIcon.svg";
import { isMobile } from "react-device-detect";
import "./styles.scss";

const NavBar = () => {
  const [openNav, setOpenNav] = useState(false);

  //   open close sidebar
  const closeOpenMobileNav = () => {
    setOpenNav(!openNav);
  };
  //   on touch/ scroll hide sidebar
  document.body.ontouchstart = function (e) {
    if (isMobile && openNav) {
      setOpenNav(false);
    }
  };

  //   render sidebar/navbar
  const getNavbar = () => (
    <div className="nav-items">
      {isMobile && (
        <div
          className="mobile-nav-close-icon"
          onClick={() => closeOpenMobileNav()}
        >
          <img src={CloseIcon} alt="close sidebar" />
        </div>
      )}
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
  );

  return (
    <div className="navbar-component">
      <div className="logo-wrapper">
        <img className="logo" src={FooterVirus} alt="logo" loading="lazy" />
        <div className="heading">Covid - 19</div>
      </div>
      {isMobile ? (
        <div className="mobile-nav-icon" onClick={() => closeOpenMobileNav()}>
          <img src={SidebarIcon} alt="open sidebar" loading="eager" />
        </div>
      ) : null}

      {isMobile ? (openNav ? getNavbar() : null) : getNavbar()}
    </div>
  );
};
export default NavBar;
