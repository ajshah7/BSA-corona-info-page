import React, { useState } from "react";
import { connect } from "react-redux";
import RedArrow from "../../Assets/Images/redArrow.svg";
import GreenArrow from "../../Assets/Images/greenArrow.svg";
import { API_LOADING_STATUS_CONSTANTS } from "../../constants";
import MapComponent from "../MapComponent";

import "./styles.scss";

const LiveReportsSection = (props) => {
  const { covidLiveData } = props;
  const [page, setPage] = useState(1);

  //   paginate function which slices entire report array into page of 6
  function paginate(array, page_size) {
    return array.slice((page - 1) * page_size, page * page_size);
  }

  //   function to render red arrow or green arrow based on : if today recoved < todays count then green arrow (cases droping) else red arrow (cases increasing).
  const getDayRecoverdToNewCaseRatio = (recoverdCount, caseCount) => {
    if (recoverdCount > caseCount || recoverdCount === caseCount) {
      return true;
    }
    return false;
  };
  const RenderCountryList = () => {
    if (covidLiveData.data?.length > 0) {
      // calling paginate function to structure data into 6 contents per page
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
              {item.active?.toLocaleString()}
              {/* rendering green and red based on live case increase/decrease  */}
              {getDayRecoverdToNewCaseRatio(
                item.todayRecovered,
                item.todayCases
              ) ? (
                <img
                  src={GreenArrow}
                  alt="arrow"
                  className="arrows"
                  loading="lazy"
                />
              ) : (
                <img
                  src={RedArrow}
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
    <div className="livereport-component" id="report">
      {/* rendering google global map */}
      <MapComponent />
      <div className="report-wrapper">
        <div className="report-list">
          <div className="actions">
            <div className="header-medium">Live Reports</div>
            <div className="pagination">
              <button
                className={`action-button ${page !== 1 ? "red" : "grey"}`}
                // setting pages  (decrementing on click of left arrow till its 1 page)
                onClick={() => setPage(page !== 1 ? page - 1 : 1)}
              >
                &lt;
              </button>{" "}
              <div className="line" />
              <button
                className={`action-button ${
                  covidLiveData.data?.length / 6 > page ? "red" : "grey"
                }`}
                // setting pages  (increment on click of right arrow till its last page)
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
              {/* rendering the live reports */}
              <RenderCountryList />
              {covidLiveData.data?.length / 6 < page ? (
                <div className="text-content">You have reached the End!</div>
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
