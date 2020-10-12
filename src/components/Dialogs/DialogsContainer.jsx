import React from 'react';
import { connect } from 'react-redux';
import { sendMessageActionCreator, onMessageChangeActionCreator } from './../../redux/dialogs-reduser';
import Dialogs from './Dialogs';


const mapStateToProps = (state) => {
  return {
    dialogs: state.messagesPage.dialogsData,
    messages: state.messagesPage.messagesData,
    newPostText: state.messagesPage.newMessageText,
    isAuth: state.auth.isAuth
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageText: (text) => {
      dispatch(onMessageChangeActionCreator(text));
    },
    sendMessage: () => {
      dispatch(sendMessageActionCreator());
    }

  }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
