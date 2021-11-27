import { GET_LIVE_COIVID_DATA, SET_LIVE_COIVID_DATA } from "./constants";

export const getLiveCovidData = () => ({
  type: GET_LIVE_COIVID_DATA,
});

export const setLiveCovidData = (data) => ({
  type: SET_LIVE_COIVID_DATA,
  payload: data,
});
