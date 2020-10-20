import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Dialog from './Dialog/Dialog';
import style from './Dialogs.module.css';
import Message from './Message/Message';


const Dialogs = (props) => {
  let dialogsElements = props.dialogs.map(dialog => <Dialog name={dialog.name} id={dialog.id} key={dialog.id}/>);
  let messagesElements = props.messages.map(message => <Message text={message.message} key={message.id}/>);

  let onSendMessage = (formData) => { 
    props.sendMessage(formData.message);
  }

  return (
    <div className={style.dialogsContainer}>
      <div className={style.dialogs}>
        {dialogsElements}
      </div>
      <div className={style.messages}>
        {messagesElements}
      </div>
      <AddMessageReduxForm onSubmit={onSendMessage}/>
    </div>
  );
}

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field component={"textarea"} name="message"/>
      <button>Send</button>
    </form>
  )
}

const AddMessageReduxForm = reduxForm({
  form: 'addMessage'
})(AddMessageForm)

export default Dialogs;
