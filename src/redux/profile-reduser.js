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
  let stateCopy = Object.assign({}, state);
  switch(action.type) {
    case ADD_POST:
      let newPost = {
        id: 3,
        message: state.newPostText
      };
      stateCopy.postsData.push(newPost);
      stateCopy.newPostText = '';
      return stateCopy;
    case UPDATE_NEW_POST_TEXT: 
      stateCopy.newPostText = action.newText;
      return stateCopy;
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