const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
  postsData: [
    { id: 1, message: "Hi, how are you?" },
    { id: 2, message: "Its my fists post!" },
  ],
  newPostText: '',
  profile: null
}

const profileReducer = (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_NEW_POST_TEXT: 
      return  {
        ...state,
        newPostText: action.newText
      }
    case ADD_POST:
      return  {
        ...state,
        postsData: [...state.postsData, {id: 3, message: state.newPostText}],
        newPostText: ''
      }
    case SET_USER_PROFILE:
      return  {
        ...state,
        profile: action.profile
      }
    default: 
      return state;
  }
}


export const addPostActionCreator = () => ({ type: ADD_POST })
export const onPostChangeActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export default profileReducer;