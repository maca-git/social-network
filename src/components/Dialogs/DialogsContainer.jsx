import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
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

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
