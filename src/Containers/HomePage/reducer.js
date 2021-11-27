import { GET_LIVE_COIVID_DATA, SET_LIVE_COIVID_DATA } from "./constants";
import { API_LOADING_STATUS_CONSTANTS } from "../../constants";
const initialState = {
  coivdData: {
    data: null,
    status: API_LOADING_STATUS_CONSTANTS.init,
  },
};

const HomePage = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_LIVE_COIVID_DATA: {
      return {
        ...state,
        coivdData: {
          data: {},
          status: API_LOADING_STATUS_CONSTANTS.loading,
        },
      };
    }
    case SET_LIVE_COIVID_DATA: {
      return {
        ...state,
        coivdData: {
          data: payload.data,
          status: payload.status,
        },
      };
    }

    default:
      return state;
  }
};

export default HomePage;
