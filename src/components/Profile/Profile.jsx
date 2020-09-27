import React from 'react';
import Info from './Info/Info';
import PostsContainer from './Posts/PostsContainer';
import style from './Profile.module.css';

const Profile = (props) => {

  return (
    <div className={style.profile}>
      <Info />
      <PostsContainer store={props.store}/>
    </div>
  )
}

export default Profile;