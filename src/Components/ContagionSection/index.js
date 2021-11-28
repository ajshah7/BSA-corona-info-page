import React from "react";
import SymptompsIllu from "../../Assets/Images/symptomps.svg";
import Cough from "../../Assets/Images/cough.svg";
import HandWash from "../../Assets/Images/handWash.svg";
import CupImage from "../../Assets/Images/cup.svg";
import paleVirus from "../../Assets/Images/paleVirus.svg";
import PinkPetalLeft from "../../Assets/Images/pink-petal-left.svg";
import PinkPetalRight from "../../Assets/Images/pink-petal-right.svg";

import "./styles.scss";

const ContagionSection = () => {
  return (
    <div className="contagion-section-component">
      {/* session Contagion starts from here */}
      <div className="section one" id="contagion">
        <div className="data-wrapper-center">
          <div className="sub-heading">COVID-19</div>
          <div className="header">Contagion</div>
          <div className="text-content">
            Corona viruses are a type of virus. There are many different kinds,{" "}
            <br />
            and some cause disease. A newly identified type
          </div>
          <div className="card-wrapper">
            <div className="card">
              <img
                className="card-image"
                alt="card-images"
                src={Cough}
                loading="lazy"
              />
              <div className="card-header">Air Transmission</div>
              <div className="text-content">
                Objectively evolve tactical expertise before extensible
                initiatives. Efficiently simplify
              </div>
            </div>
            <div className="card">
              <img
                className="card-image"
                alt="card-images"
                src={HandWash}
                loading="lazy"
              />
              <div className="card-header">Human Contacts</div>
              <div className="text-content">
                Washing your hands is one of thesimplest ways you can protect
              </div>
            </div>
            <div className="card">
              <img
                className="card-image"
                alt="card-images"
                src={CupImage}
                loading="lazy"
              />
              <div className="card-header">Containted Objects</div>
              <div className="text-content">
                Use the tissue while sneezing,In this way, you can protect your
                droplets.
              </div>
            </div>
            <img
              className="virus-image-card"
              alt="virus"
              src={paleVirus}
              loading="lazy"
            />
          </div>
        </div>
      </div>
      {/*section Symptomps starts from here  */}
      <div className="section two" id="symptoms">
        <div className="data-wrapper-center">
          <div className="sub-heading">COVID-19</div>
          <div className="header">Symptomps</div>
          <div className="text-content">
            Corona viruses are a type of virus. There are many different kinds,
            and some cause disease.
            <br />A newly identified type has caused a recent outbreak of
            respiratory
          </div>
        </div>
        <div className="illustration-wrapper">
          <img
            src={PinkPetalLeft}
            alt="petal"
            className="petal-image left"
            loading="lazy"
          />
          <img
            alt="illustration"
            className="illustration-image"
            src={SymptompsIllu}
            loading="lazy"
          />
          <img
            src={PinkPetalRight}
            alt="petal"
            className="petal-image right"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};
export default ContagionSection;
