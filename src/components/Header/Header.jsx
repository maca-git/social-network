import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.css';

const Header = (props) => {
  return (
    <div className={style.header}>
      logo
      <div className={style.login}>
        {
          props.isAuth 
          ? <div> {props.login} - <button onClick={props.logout}>Log out</button></div>
          : <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </div>
  );
}

export default Header;
