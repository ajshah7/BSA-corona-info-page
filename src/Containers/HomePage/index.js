/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import OverviewSection from "../../Components/overviewSection";
import ContagionSection from "../../Components/ContagionSection";
import PreventionSection from "../../Components/PreventionSection";
import LiveReportsSection from "../../Components/LiveReportsSection";
import Footer from "../../Components/Footer";
import { fetchCovidData } from "./thunks";

import "./styles.scss";

const HomePage = (props) => {
  useEffect(() => {
    props.fetchCovidData();
  }, []);
  return (
    <>
      <OverviewSection />
      <ContagionSection />
      <PreventionSection />
      <LiveReportsSection />
      <Footer />
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCovidData: () => dispatch(fetchCovidData()),
});
export default connect(null, mapDispatchToProps)(HomePage);
