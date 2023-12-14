import { POST_LOGIN_SUCCESS, POST_SIGNUP_SUCCESS } from "./actionType";

const signup_url = "https://nomadicroots.apponward.com/v1/api/user/satvikgyan/registration";
const login_url = "https://nomadicroots.apponward.com/v1/api/user/satvikgyan/login";

export const PostItemsData = (user) => async (dispatch) => {
  try {
    const res = await fetch(signup_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    dispatch({ type: POST_SIGNUP_SUCCESS, payload: res.status });
  } catch (error) {
    console.log(error);
  }
};


/*For Loogin API */
export const LoginItemsData = (user) => async (dispatch) => {
  console.log(user)
  try {
    const response = await fetch(login_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user)
    });
    console.log(response.status)
    dispatch({ type: POST_LOGIN_SUCCESS, payload: response.status })
  } catch (error) {
    console.log(error)
  }
}
