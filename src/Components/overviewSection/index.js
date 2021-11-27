import React from "react";

import Illustration1 from "../../Assets/Images/illustration.svg";
import CoronaIllustration from "../../Assets/Images/coronaIllustration.svg";
import paleVirus from "../../Assets/Images/paleVirus.svg";
import paleVirusHalf from "../../Assets/Images/paleVirusRight.svg";
import "./styles.scss";

const OverviewSection = () => {
  return (
    <div className="landing-section-component">
      <div className="landing-section one" id="Overview">
        <div className="data-wrapper left">
          <div className="sub-heading">COVID-19 Alert</div>
          <div className="header">
            Stay at Home quarantine
            <br />
            To stop Corona virus
          </div>
          <div className="text-content">
            There is no specific medicine to prevent or treat coronavirus
            disease (COVID-19). People may need supportive care to .
          </div>
          <div className="button-wrapper">
            <div className="solid-button">Let Us Help</div>
          </div>
        </div>

        <img
          className="illustration"
          src={Illustration1}
          alt="IllustrationContainer"
          loading="lazy"
        />
      </div>

      {/* What is Covid */}
      <div className="landing-section two">
        <img
          className="virus-image full"
          alt="virus"
          src={paleVirus}
          loading="lazy"
        />
        <img
          className="virus-image half"
          alt="virus-half"
          src={paleVirusHalf}
          loading="lazy"
        />
        <img
          className="illustration"
          src={CoronaIllustration}
          loading="lazy"
          alt="IllustrationContainer"
        />

        <div className="data-wrapper right">
          <div className="sub-heading">What Is Covid-19</div>
          <div className="header">Coronavirus</div>
          <div className="text-content">
            Corona viruses are a type of virus. There are many different kinds,
            and some cause disease. A newly identified type has caused a recent
            outbreak of respiratory illness now called COVID-19.Lauren Sauer,
            M.S., the director of operations with the Johns Hopkins Office of
            Critical Event Preparedness and Response
          </div>
          <div className="button-wrapper">
            <div className="light-button">Learn More</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewSection;
