import React from 'react';
import style from './Users.module.css';
import userPhoto from './../../assets/images/user.svg';

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