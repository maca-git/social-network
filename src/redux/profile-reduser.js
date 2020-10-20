import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

let initialState = {
  postsData: [
    { id: 1, message: "Hi, how are you?" },
    { id: 2, message: "Its my fists post!" },
  ],
  profile: null,
  status: ''
}

const profileReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_POST:
      return  {
        ...state,
        postsData: [...state.postsData, {id: 3, message: action.post}]
      }
    case SET_USER_PROFILE:
      return  {
        ...state,
        profile: action.profile
      }
    case SET_USER_STATUS:
      return  {
        ...state,
        status: action.status
      }
    default: 
      return state;
  }
}


export const addPostActionCreator = (post) => ({ type: ADD_POST, post })

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status })

export const getUserProfile = (userId) => {
  return (dispatch) => {
    profileAPI.getProfile(userId).then(data => {
        dispatch(setUserProfile(data));
      })
  }
}
export const getUserStatus = (status) => {
  return (dispatch) => {
    profileAPI.getStatus(status).then(data => {
        dispatch(setUserStatus(data));
    })
  }
}
export const updateUserStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status).then(data => {
      if (data.resultCode === 0) {
        dispatch(setUserStatus(status));
      }
    })
  }
}

export default profileReducer;