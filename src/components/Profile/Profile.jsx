import React from 'react';
import Post from './Post/Post';
import style from './Profile.module.css';

const Profile = () => {
  return (
    <div className={style.profile}>
      <div className={style.banner}>
        <img src="http://www.rknec.edu/Students/img/srceventdbanner.jpg" alt="banner" />
      </div>
      <div className={style.infoconteiner}>
        <div className={style.avatar}>
          <img src="https://www.kindpng.com/picc/m/137-1370686_anime-avatar-png-transparent-avatar-gaming-logo-png.png" alt="" />
        </div>
        <div className={style.personalinfo}>
          <p className={style.name}>
            Dmitriy Schupalenko
        </p>
          <p className={style.birth}>
            Date of Birth: 2 january
        </p>
          <p className={style.city}>
            City: Minsk
        </p>
        </div>
      </div>
      <div className={style.posts}>
        <div className={style.create}>
          <textarea></textarea>
          <button>Send</button>
        </div>
        <Post message='Hi, how are you?'/>
        <Post message='Its my fists post!'/>
      </div>

    </div>
  )
}

export default Profile;