import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import style from './Info.module.css';
import ProfileStatus from './ProfileStatus';
import userPhoto from './../../../assets/images/user.svg';

const Info = (props) => {
  debugger
  if (!props.profile) {
    return <Preloader/>
  }
  return (
    <div>
      {/* <div className={style.banner}>
        <img src="http://www.rknec.edu/Students/img/srceventdbanner.jpg" alt="banner" />
      </div> */}
      <div className={style.infoconteiner}>
        <div className={style.avatar}>
          <img src={props.profile.photos.large || userPhoto} alt="" />
        </div>
        <div className={style.personalinfo}>
          <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
          <p className={style.name}>
            {props.profile.fullName}
          </p>
          <p>
            {props.profile.aboutMe}
          </p>
          <p>
            {props.profile.contacts.twitter}
          </p>
          
        </div>
      </div>
    </div>

  )
}

export default Info;