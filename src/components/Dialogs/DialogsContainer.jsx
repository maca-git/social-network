import React from 'react';
import StoreContext from '../../StoreContext';
import { sendMessageActionCreator, onMessageChangeActionCreator } from './../../redux/dialogs-reduser';
import Dialogs from './Dialogs';


const DialogsContainer = () => {
  return (
    <StoreContext.Consumer> 
      {
        (store) => {
          let state = store.getState();

          let onSendMessage = () => {
            store.dispatch(sendMessageActionCreator());
          }

          let onMessageChange = (text) => {
            store.dispatch(onMessageChangeActionCreator(text));
          }
          return <Dialogs
                  updateNewMessageText={onMessageChange}
                  sendMessage={onSendMessage}
                  dialogs={state.messagesPage.dialogsData}
                  messages={state.messagesPage.messagesData}
                  newPostText={state.messagesPage.newMessageText}
                />
        }
      }
    </StoreContext.Consumer>
  );
}

export default DialogsContainer;
