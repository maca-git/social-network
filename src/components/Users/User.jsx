import React from 'react';
import style from './Users.module.css';
import userPhoto from './../../assets/images/user.svg';
import { NavLink } from 'react-router-dom';

let User = ({ user,  followingInProgress, follow, unfollow}) => {

  return (
    <div>
      <div>
        <NavLink to={'/profile/' + user.id}>
          <img className={style.userPhoto} src={user.photos.small || userPhoto} alt="" />
        </NavLink>
      </div>
      <div>
        {user.followed
          ? <button disabled={followingInProgress.some(id => id === user.id)}
            onClick={() => { unfollow(user.id) }}
          >Unfollowed</button>
          : <button disabled={followingInProgress.some(id => id === user.id)}
            onClick={() => { follow(user.id); }}
          >Followed</button>
        }
      </div>
      <span>
        <div>{user.name}</div>
        <div>{user.status}</div>
      </span>
      <span>
        {/* <div>{u.location.country}</div>
                <div>{u.location.city}</div> */}
      </span>
    </div>
  )
}

export default User;