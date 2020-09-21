import React from 'react';
import Dialog from './Dialog/Dialog';
import style from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {  
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

    </div>
  );
}

export default Dialogs;
