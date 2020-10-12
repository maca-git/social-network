import React from 'react';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { sendMessageActionCreator, onMessageChangeActionCreator } from './../../redux/dialogs-reduser';
import Dialogs from './Dialogs';


const mapStateToProps = (state) => {
  return {
    dialogs: state.messagesPage.dialogsData,
    messages: state.messagesPage.messagesData,
    newPostText: state.messagesPage.newMessageText
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

let AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;
