import React from 'react';
import style from './Users.module.css';

const Users = (props) => {

  if (props.users.length === 0) {
    props.setUsers([
      { id: 1, photoUrl: 'https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/128771571/original/c540edc5830213c6de3243d97061c3f12cdc2d3b/design-a-digital-icon-of-your-roblox-character.png', followed: true, fullName: "Anatoliy", status: "Im fine", location: { country: "Ukraine", city: "Odessa" } },
      { id: 2, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRuCwcYJIQnwXyQcyN8DdYfM0UDCUd_gprKEQ&usqp=CAU', followed: true, fullName: "Anna", status: "Hello everyone", location: { country: "Ukraine", city: "Kiev" } },
      { id: 3, photoUrl: 'https://pm1.narvii.com/6544/9e5275d11654e09a0786ea750c4c9f64ccee5a58_hq.jpg', followed: false, fullName: "Michael", status: "What your doing, girl?", location: { country: "France", city: "Marseille" } },]);
  }

  return (
    <div className={style.users}>
      {
        props.users.map(u =>
          <div key={u.id}>
            <div>
              <img className={style.userPhoto} src={u.photoUrl} alt="" />
            </div>
            <div>
              {u.followed
                ? <button onClick={() => { props.unfollow(u.id) }}>Followed</button>
                : <button onClick={() => { props.follow(u.id) }}>Unfollowed</button>
              }
            </div>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </div>
        )
      }
    </div>
  )
}

export default Users;