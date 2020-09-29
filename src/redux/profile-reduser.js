const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  postsData: [
    { id: 1, message: "Hi, how are you?" },
    { id: 2, message: "Its my fists post!" },
  ],
  newPostText: ''
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
    default: 
      return state;
  }
}


export const addPostActionCreator = () => ({ type: ADD_POST })
export const onPostChangeActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})

export default profileReducer;