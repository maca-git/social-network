import React from 'react';
import Dialog from './Dialog/Dialog';
import style from './Dialogs.module.css';
import Message from './Message/Message';
import { sendMessageActionCreator, onMessageChangeActionCreator } from './../../redux/state';


const Dialogs = (props) => {

  let textarea = React.createRef();

  let sendMessage = () => { 
    props.dispatch(sendMessageActionCreator());
  }

  let onMessageChange = () => {
    let text = textarea.current.value;
    props.dispatch(onMessageChangeActionCreator(text));
  }


  let dialogsElements = props.state.dialogsData.map(dialog => <Dialog name={dialog.name} id={dialog.id} />);
  let messagesElements = props.state.messagesData.map(message => <Message text={message.message} />);

  return (
    <div className={style.dialogsContainer}>
      <div className={style.dialogs}>
        {dialogsElements}
      </div>
      <div className={style.messages}>
        {messagesElements}
      </div>

      <textarea ref={textarea} onChange={onMessageChange} value={props.newMessageText}/>
      <button onClick={sendMessage}>Send</button>

    </div>
  );
}

export default Dialogs;
