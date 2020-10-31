import { usersAPI } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
  usersData: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
  switch(action.type) {
    case FOLLOW:
      return {
        ...state,
        usersData: state.usersData.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: true}
          }
          return u;
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        usersData: state.usersData.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: false}
          }
          return u;
        })
      }

    case SET_USERS:
      return {
        ...state,
        usersData: action.usersData
      }

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      }
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount
      }
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      }
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.followingInProgress 
          ? [...state.followingInProgress, action.userId] 
          : state.followingInProgress.filter(id => id !== action.userId)
      }

    default: 
      return state;
  }
}

// ACTIONS CREATOR
export const followSuccess = (userId) => ({ type: FOLLOW, userId  })
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (usersData) => ({ type: SET_USERS, usersData })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (followingInProgress, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, followingInProgress, userId})

// THUNK
export const requestUsers = (page, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));
    usersAPI.getUsers(page, pageSize).then(data => {
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
    })
  }
}

export const follow = (id) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, id));
    usersAPI.follow(id).then(data => {
      if (data.resultCode === 0) { 
        dispatch(followSuccess(id)); 
      }
      dispatch(toggleFollowingProgress(false, id));
    })
  }
}
export const unfollow = (id) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, id));
    usersAPI.unfollow(id).then(data => {
      if (data.resultCode === 0) { 
        dispatch(unfollowSuccess(id)); 
      }
      dispatch(toggleFollowingProgress(false, id));
    })
  }
}


export default usersReducer;