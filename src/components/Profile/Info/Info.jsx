import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import style from './Info.module.css';
import ProfileStatus from './ProfileStatus';
import userPhoto from './../../../assets/images/user.svg';

const Info = ({profile, status, updateUserStatus, isOwner, savePhoto}) => {
  if (!profile) {
    return <Preloader/>
  }

  const onMyPhotoSelected = (e) => {
    if(e.target.files.length) {
      savePhoto(e.target.files[0])
    }
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
        {
          isOwner && <input type="file" onChange={onMyPhotoSelected}/>
        }
      </div>
    </div>

  )
}

export default Info;