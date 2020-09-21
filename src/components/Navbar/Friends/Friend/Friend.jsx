import React from 'react';
import style from './Friend.module.css';

const Friend = (props) => {
  return (
    <div className={style.friend}>
      <img src={props.avatar} alt=""/>
      <p>{props.name}</p>
    </div>
  )
}

export default Friend;