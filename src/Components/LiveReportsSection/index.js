import React, { useState } from "react";
import { connect } from "react-redux";
import Map from "../../Assets/Images/map.svg";
import RedArrow from "../../Assets/Images/redArrow.svg";
import GreenArrow from "../../Assets/Images/greenArrow.svg";
import { API_LOADING_STATUS_CONSTANTS } from "../../constants";
// import MapComponent from "../MapComponent";

import "./styles.scss";
const LiveReportsSection = (props) => {
  const { covidLiveData } = props;
  const [page, setPage] = useState(1);

  function paginate(array, page_size) {
    return array.slice((page - 1) * page_size, page * page_size);
  }

  const getDayRecoverdToNewCaseRatio = (recoverdCount, caseCount) => {
    if (parseInt(recoverdCount > caseCount)) {
      return true;
    }
    return false;
  };
  const RenderCountryList = () => {
    if (covidLiveData.data?.length > 0) {
      return paginate(covidLiveData?.data, 6).map((item) => {
        return (
          <div className="data-table">
            <div className="country-details">
              <img
                className="country-image"
                src={item.countryInfo?.flag}
                alt="flag"
                loading="lazy"
              />
              <div className="name">{item.country}</div>
            </div>
            <div className="count">
              {item.active?.toLocaleString()}{" "}
              {getDayRecoverdToNewCaseRatio(
                item.todayRecovered,
                item.todayCases
              ) ? (
                <img
                  src={RedArrow}
                  alt="arrow"
                  className="arrows"
                  loading="lazy"
                />
              ) : (
                <img
                  src={GreenArrow}
                  alt="arrow"
                  className="arrows"
                  loading="lazy"
                />
              )}
            </div>
          </div>
        );
      });
    }
    return null;
  };

  return (
    <div className="livereport-component">
      <img alt="map" src={Map} className="map-image" loading="lazy" />
      <div className="report-wrapper">
        <div className="report-list">
          <div className="actions">
            <div className="header-medium">Live Reports</div>
            <div className="pagination">
              <button
                className={`action-button ${
                  covidLiveData.data?.length / 6 < page ? "red" : "grey"
                }`}
                onClick={() => setPage(page !== 1 ? page - 1 : 1)}
              >
                &lt;
              </button>{" "}
              <div className="line" />
              <button
                className={`action-button ${
                  covidLiveData.data?.length / 6 > page ? "red" : "grey"
                }`}
                onClick={() =>
                  setPage(
                    covidLiveData.data?.length / 6 < page ? page : page + 1
                  )
                }
              >
                &gt;
              </button>
            </div>
          </div>
          {covidLiveData.status === API_LOADING_STATUS_CONSTANTS.loading ? (
            "Loading data..."
          ) : (
            <>
              <RenderCountryList />

              {covidLiveData.data?.length / 6 < page ? (
                <div className="text-content">"You have reached the End!" </div>
              ) : null}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  covidLiveData: state.HomePage.coivdData,
});

export default connect(mapStateToProps, null)(LiveReportsSection);
