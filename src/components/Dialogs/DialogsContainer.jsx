import React from 'react';
import { sendMessageActionCreator, onMessageChangeActionCreator } from './../../redux/dialogs-reduser';
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {
  let state = props.store.getState();

  let onSendMessage = () => { 
    props.store.dispatch(sendMessageActionCreator());
  }

  let onMessageChange = (text) => {
    props.store.dispatch(onMessageChangeActionCreator(text));
  }

  return (
    <Dialogs
      updateNewMessageText={onMessageChange}
      sendMessage={onSendMessage}
      dialogs={state.messagesPage.dialogsData}
      messages={state.messagesPage.messagesData}
      newPostText={state.messagesPage.newMessageText}
    />
  );
}

export default DialogsContainer;
