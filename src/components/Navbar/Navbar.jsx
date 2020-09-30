import React from 'react';
import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';
import style from './Navbar.module.css';

const Navbar = (props) => {
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
          <NavLink to="/users" activeClassName={style.active}>Users</NavLink>
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
      {/* <Friends friendsData={props.state.friendsData}/> */}
    </div>
  )
}

export default Navbar;