import React from 'react';
import Info from './Info/Info';
import PostsContainer from './Posts/PostsContainer';
import style from './Profile.module.css';


const Profile = (props) => {

  return (
    <div className={style.profile}>
      <Info 
        isOwner={props.isOwner} 
        profile={props.profile}
        status={props.status}
        updateUserStatus={props.updateUserStatus}
        savePhoto={props.savePhoto}
        saveProfile={props.saveProfile}
      />
      <PostsContainer/>
    </div>
  )
}

export default Profile;