const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
  dialogsData: [
    { id: 1, name: "Dimich" },
    { id: 2, name: "Alexey" },
    { id: 3, name: "Igor" },
    { id: 4, name: "Sergey" },
  ],
  messagesData: [
    { id: 1, message: "Hello!" },
    { id: 2, message: "Yo!" },
  ],
  newMessageText: ''
}

const dialogReducer = (state = initialState, action) => {
  let stateCopy = Object.assign({}, state);
  switch(action.type) {
    case ADD_MESSAGE: 
      let newMessage = {
        id: 3,
        message: state.newMessageText
      };
      stateCopy.messagesData.push(newMessage);
      stateCopy.newMessageText = '';
      return stateCopy;
    case UPDATE_NEW_MESSAGE_TEXT: 
      stateCopy.newMessageText = action.newText;
      return stateCopy;
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