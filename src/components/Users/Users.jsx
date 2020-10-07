import React from 'react';
import style from './Users.module.css';
import userPhoto from './../../assets/images/user.svg';
import { NavLink } from 'react-router-dom';
import axios from "axios";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={style.users}>
      {
        props.users.map(u =>
          <div key={u.id}>
            <div>
              <NavLink to={'/profile/' + u.id}>
                <img className={style.userPhoto} src={u.photos.small || userPhoto} alt="" />
              </NavLink>
            </div>
            <div>
              {u.followed
                ? <button onClick={() => {
                  axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                    withCredentials: true,
                    headers: {
                      "api-key": "ef667c3a-04cf-47c8-bb11-3913cb6c41de"
                    }
                  })
                    .then(res => {
                      if (res.data.resultCode === 0) {
                        props.unfollow(u.id);
                      }
                    })
                }}>Unfollowed</button>
                : <button onClick={() => {
                  axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, { 
                    withCredentials: true, 
                    headers: { 
                      "api-key": "ef667c3a-04cf-47c8-bb11-3913cb6c41de" 
                    } 
                  })
                    .then(res => {
                       if (res.data.resultCode === 0) { 
                         props.follow(u.id); 
                    }})
                }}>Followed</button>
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
      <div className={style.pagination}>
        {
          pages.map(page =>
            <span
              className={props.currentPage === page && style.selectedPage}
              onClick={(e) => { props.onPageChanged(page) }}
            >{page}</span>
          )
        }
      </div>
    </div>
  )
}

export default Users;