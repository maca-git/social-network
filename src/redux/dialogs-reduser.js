const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogReducer = (state, action) => {
  switch(action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 3,
        message: state.newMessageText
      };
      state.messagesData.push(newMessage);
      state.newMessageText = '';
      return state;
    case UPDATE_NEW_MESSAGE_TEXT: 
      state.newMessageText = action.newText;
      return state;
    default:
      return state;
  }
}

export const sendMessageActionCreator = () => ({ type: ADD_MESSAGE })
export const onMessageChangeActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text
})

export default dialogReducer;