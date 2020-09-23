import React from 'react';
import Info from './Info/Info';
import Posts from './Posts/Posts';
import style from './Profile.module.css';

const Profile = (props) => {

  return (
    <div className={style.profile}>
      <Info />
      <Posts postsData={props.state.postsData} newPostText={props.state.newPostText} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
    </div>
  )
}

export default Profile;