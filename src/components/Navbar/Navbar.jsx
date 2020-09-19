import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <ul>
        <li>
          <NavLink to="/profile" activeClassName={style.active}>Profile</NavLink>
        </li>
        <li>
          <NavLink to="/dialogs" activeClassName={style.active}>Messages</NavLink>
        </li>
        <li>
          <NavLink to="/news" activeClassName={style.active}>News</NavLink>
        </li>
        <li>
          <NavLink to="/music" activeClassName={style.active}>Music</NavLink>
        </li>
        <li>
          <NavLink to="/settings" activeClassName={style.active}>Settings</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar;