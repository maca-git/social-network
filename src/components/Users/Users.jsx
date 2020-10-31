import React from 'react';
import style from './Users.module.css';
import Paginator from '../common/Paginator/Paginator';
import User from './User';

let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {

  return (
    <div className={style.users}>
      {
        users.map(user => <User 
          user={user}
          followingInProgress={props.followingInProgress}
          follow={props.follow}
          unfollow={props.unfollow}
          key={user.id} />)
      }
      <Paginator currentPage={currentPage} totalUsersCount={totalUsersCount} pageSize={pageSize} onPageChanged={onPageChanged}/>
    </div>
  )
}

export default Users;