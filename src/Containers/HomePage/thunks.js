import { getLiveCovidData, setLiveCovidData } from "./actions";
import axios from "axios";
import { API_LOADING_STATUS_CONSTANTS, COVID_DATA_API } from "../../constants";

// load user
export const fetchCovidData = () => async (dispatch) => {
  dispatch(getLiveCovidData());
  try {
    const response = await axios.get(COVID_DATA_API);

    if (response.status === 200) {
      dispatch(
        setLiveCovidData({
          status: API_LOADING_STATUS_CONSTANTS.success,
          data: response.data,
        })
      );
    } else {
      dispatch(
        setLiveCovidData({
          status: API_LOADING_STATUS_CONSTANTS.failed,
          data: null,
        })
      );
    }
  } catch (err) {
    dispatch(
      setLiveCovidData({
        status: API_LOADING_STATUS_CONSTANTS.failed,
        data: null,
      })
    );
  }
};
