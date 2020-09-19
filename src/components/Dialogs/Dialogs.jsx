import React from 'react';
import style from './Dialogs.module.css';

const Dialogs = () => {
  return (
    <div className={style.dialogsContainer}>
      <div className={style.dialogs}>
        <div className={style.dialog + ' ' + style.active}>
          Dimych
        </div>
        <div className={style.dialog}>
          Andrey
        </div>
        <div className={style.dialog}>
          Vasiliy
        </div>
        <div className={style.dialog}>
          Eldar
        </div>
      </div>
      <div className={style.messages}>
        <div className={style.message}>
          Hi
        </div>
        <div className={style.message}>
          How your name?
        </div>
        <div className={style.message}>
          Yo!
        </div>
      </div>

    </div>
  );
}

export default Dialogs;
