import { profileAPI } from "../api/api";

const ADD_POST = 'profile/ADD-POST';
const DELETE_POST = 'profile/DELETE_POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_USER_STATUS = 'profile/SET_USER_STATUS';

let initialState = {
  postsData: [
    { id: 1, message: "Hi, how are you?" },
    { id: 2, message: "Its my fists post!" },
  ],
  profile: null,
  status: ''
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        postsData: [...state.postsData, { id: 3, message: action.post }]
      }
    case DELETE_POST:
      return {
        ...state,
        postsData: state.postsData.filter(post => post.id !== action.postId)
      }
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      }
    case SET_USER_STATUS:
      return {
        ...state,
        status: action.status
      }
    default:
      return state;
  }
}


export const addPostActionCreator = (post) => ({ type: ADD_POST, post })
export const deletePost = (postId) => ({ type: DELETE_POST, postId })

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status })

export const getUserProfile = (userId) => async (dispatch) => {
  const response = await profileAPI.getProfile(userId);
  dispatch(setUserProfile(response));
}

export const getUserStatus = (status) => async (dispatch) => {
  const response = await profileAPI.getStatus(status);
  dispatch(setUserStatus(response));
}

export const updateUserStatus = (status) => async (dispatch) => {
  const response = await profileAPI.updateStatus(status);
  if (response.resultCode === 0) {
    dispatch(setUserStatus(status));
  }
}

export default profileReducer;