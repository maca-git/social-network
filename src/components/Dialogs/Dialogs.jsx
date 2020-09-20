import React from 'react';
import Dialog from './Dialog/Dialog';
import style from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = () => {
  return (
    <div className={style.dialogsContainer}>
      <div className={style.dialogs}>
        <Dialog name="Dimich" id="1"/>
        <Dialog name="Alexey" id="2"/>
        <Dialog name="Igor" id="3"/>
        <Dialog name="Sergey" id="4"/>
      </div>
      <div className={style.messages}>
        <Message text="Hello!"/>
        <Message text="Yo!"/>
      </div>

    </div>
  );
}

export default Dialogs;
