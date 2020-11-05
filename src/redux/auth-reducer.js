import { stopSubmit } from "redux-form";
import { authAPI, securityAPI } from "../api/api";


const SET_AUTH_USER_DATA = 'auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL_SUCCESS';

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
    case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_AUTH_USER_DATA, payload: { userId, email, login, isAuth } })
export const getCaptchaUrlSuccess = (captchaUrl) => ({ type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl} })

export const getAuthUserData = () => async (dispatch) => {
  const response = await authAPI.auth();
  if (response.resultCode === 0) {
    const { id, email, login } = response.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
  const response = await authAPI.login(email, password, rememberMe, captcha);
  if (response.resultCode === 0) {
    dispatch(getAuthUserData());
  } else {
    if (response.resultCode === 10) {
      dispatch(getCaptchaUrl());
    }

    const massage = response.messages.length > 0 ? response.messages[0] : "Some error";
    dispatch(stopSubmit('login', { _error: massage }));
  }
}
export const getCaptchaUrl = () => async (dispatch) => {
  const response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.url;
  dispatch(getCaptchaUrlSuccess(captchaUrl));
}
  
export const logout = () => async (dispatch) => {
  const response = await authAPI.logout();
  if (response.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
}

export default authReducer;