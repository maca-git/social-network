import React from 'react';
import Dialog from './Dialog/Dialog';
import style from './Dialogs.module.css';
import Message from './Message/Message';


const Dialogs = (props) => {
  let dialogsElements = props.dialogs.map(dialog => <Dialog name={dialog.name} id={dialog.id} key={dialog.id}/>);
  let messagesElements = props.messages.map(message => <Message text={message.message} key={message.id}/>);

  let textarea = React.createRef();

  let onSendMessage = () => { 
    props.sendMessage();
  }

  let onMessageChange = () => {
    let text = textarea.current.value;
    props.updateNewMessageText(text);
  }

  return (
    <div className={style.dialogsContainer}>
      <div className={style.dialogs}>
        {dialogsElements}
      </div>
      <div className={style.messages}>
        {messagesElements}
      </div>

      <textarea ref={textarea} onChange={onMessageChange} value={props.newMessageText}/>
      <button onClick={onSendMessage}>Send</button>

    </div>
  );
}

export default Dialogs;
