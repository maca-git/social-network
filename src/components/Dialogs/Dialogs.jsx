import React from 'react';
import Dialog from './Dialog/Dialog';
import style from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = () => {
  let dialogsData = [
    { id: 1, name: "Dimich" },
    { id: 2, name: "Alexey" },
    { id: 3, name: "Igor" },
    { id: 4, name: "Sergey" }
  ]
  let dialogsElements = dialogsData.map(dialog => <Dialog name={dialog.name} id={dialog.id} />);

  let messagesData = [
    { id: 1, message: "Hello!" },
    { id: 2, message: "Yo!" },
  ]
  let messagesElements = messagesData.map(message => <Message text={message.message} />);

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
