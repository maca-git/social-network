import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import style from './Info.module.css';
import ProfileStatus from './ProfileStatus';
import userPhoto from './../../../assets/images/user.svg';

const Info = ({profile, status, updateUserStatus}) => {
  if (!profile) {
    return <Preloader/>
  }
  return (
    <div>
      <div className={style.infoconteiner}>
        <div className={style.avatar}>
          <img src={profile.photos.large || userPhoto} alt="" />
        </div>
        <div className={style.personalinfo}>
          <ProfileStatus status={status} updateUserStatus={updateUserStatus}/>
          <p className={style.name}>
            {profile.fullName}
          </p>
          <p>
            {profile.aboutMe}
          </p>
          <p>
            {profile.contacts.twitter}
          </p>
        </div>
      </div>
    </div>

  )
}

export default Info;