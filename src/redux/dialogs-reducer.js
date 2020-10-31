const ADD_MESSAGE = 'ADD-MESSAGE';

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
  switch(action.type) {
    case ADD_MESSAGE: 
      return {
        ...state,
        messagesData: [...state.messagesData, {id: 3, message: action.message}]
      }
    default:
      return state;
  }
}

export const sendMessageActionCreator = (message) => ({ type: ADD_MESSAGE, message })

export default dialogReducer;