import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";


const SET_AUTH_USER_DATA = 'auth/SET_USER_DATA';

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.payload
      }

    default:
      return state;
  }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_AUTH_USER_DATA, payload: { userId, email, login, isAuth } })

export const getAuthUserData = () => async (dispatch) => {
  const response = await authAPI.auth();
  if (response.resultCode === 0) {
    const { id, email, login } = response.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
  const response = await authAPI.login(email, password, rememberMe);
  if (response.resultCode === 0) {
    dispatch(getAuthUserData());
  } else {
    const massage = response.messages.length > 0 ? response.messages[0] : "Some error";
    dispatch(stopSubmit('login', { _error: massage }));
  }
}

export const logout = () => async (dispatch) => {
  const response = await authAPI.logout();
  if (response.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
}

export default authReducer;