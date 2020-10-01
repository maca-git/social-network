import axios from "axios";
import React from 'react';
import style from './Users.module.css';
import userPhoto from './../../assets/images/user.svg';

const Users = (props) => {

  if (props.users.length === 0) {
    axios.get("https://social-network.samuraijs.com/api/1.0/users")
      .then(res => {
        props.setUsers(res.data.items);
      })
  }

  return (
    <div className={style.users}>
      {
        props.users.map(u =>
          <div key={u.id}>
            <div>
              <img className={style.userPhoto} src={u.photos.small || userPhoto} alt="" />
            </div>
            <div>
              {u.followed
                ? <button onClick={() => { props.unfollow(u.id) }}>Followed</button>
                : <button onClick={() => { props.follow(u.id) }}>Unfollowed</button>
              }
            </div>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              {/* <div>{u.location.country}</div>
              <div>{u.location.city}</div> */}
            </span>
          </div>
        )
      }
    </div>
  )
}

export default Users;