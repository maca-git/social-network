import React from 'react';
import Info from './Info/Info';
import Posts from './Posts/Posts';
import style from './Profile.module.css';

const Profile = () => {
  return (
    <div className={style.profile}>
      <Info/>
      <Posts/>
    </div>
  )
}

export default Profile;