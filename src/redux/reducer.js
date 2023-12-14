import { POST_LOGIN_SUCCESS, POST_SIGNUP_SUCCESS } from "./actionType";

const listStates = {
  status: "",
};

function reducer(state = listStates, { type, payload }) {
  switch (type) {
    case POST_SIGNUP_SUCCESS:
      return {
        ...state, status: payload
      };

    case POST_LOGIN_SUCCESS:
      return {
        ...state, status: payload
      };

    default:
      return state;
  }
}

export default reducer;
