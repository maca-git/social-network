import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { sendMessageActionCreator } from './../../redux/dialogs-reducer';
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
    sendMessage: (message) => {
      dispatch(sendMessageActionCreator(message));
    }
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
