import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Dialog.module.css';

const Dialog = (props) => {
  return (
    <div className={style.dialog + ' ' + style.active}>
      <NavLink to={"/dialogs/" + props.id}> {props.name} </NavLink>
    </div>

  );
}

export default Dialog;
