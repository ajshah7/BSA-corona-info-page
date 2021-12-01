import React from "react";
import VirusGreenRight from "../../Assets/Images/virus-green-right.svg";
import VirusGreenLeft from "../../Assets/Images/virus-green-left.svg";
import RedVirusRight from "../../Assets/Images/virus-red-right.svg";
import { PREVENTION_DATA } from "./constants";

import "./styles.scss";

const PreventionSection = () => {
  return (
    <div className="prevention-component">
      <div id="prevention">
        <div className="data-wrapper-center">
          <div className="sub-heading">COVID-19</div>
          <div className="header">What should we do</div>
          <div className="text-content">
            Corona viruses are a type of virus. There are many different kinds,
            and some cause
            <br /> disease. A newly identified type has caused
          </div>
        </div>
      </div>
      {PREVENTION_DATA.map((data, index) =>
        (index + 1) % 2 === 0 ? (
          // odd index will render text on left and image on right
          <div className="content-wrapper right" key={index}>
            <img
              className="illustration-image"
              src={data.coverImage}
              alt="cover"
              loading="lazy"
            />
            <div className="data-wrapper odd">
              <div className="text-items">
                {" "}
                {/* if its final element render accent virus background images as follows */}
                {index === PREVENTION_DATA.length - 1 ? (
                  <>
                    <img
                      className="right-virus"
                      alt="virus"
                      src={RedVirusRight}
                      loading="lazy"
                    />
                    <img
                      className="virus-green-right-small "
                      alt="virus"
                      src={VirusGreenRight}
                      loading="lazy"
                    />
                  </>
                ) : null}
                <div className="number-val">{index + 1}</div>
                <div className="desc">
                  <div className="header">{data.heading}</div>
                  <div className="text-content">{data.description}</div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // even index will render text on right and image on left
          <div className="content-wrapper left" key={index}>
            <div className="data-wrapper even">
              <div className="text-items">
                {/* if its first element render accent virus background image as follows*/}
                {index + 1 === 1 ? (
                  <img
                    className="left-virus"
                    alt="virus"
                    src={VirusGreenLeft}
                    loading="lazy"
                  />
                ) : null}
                <div className="number-val">{index + 1}</div>
                <div className="desc">
                  <div className="header">{data.heading}</div>
                  <div className="text-content">{data.description}</div>
                </div>
              </div>
            </div>
            <img
              className="illustration-image"
              src={data.coverImage}
              alt="cover"
              loading="lazy"
            />
          </div>
        )
      )}
    </div>
  );
};
export default PreventionSection;
