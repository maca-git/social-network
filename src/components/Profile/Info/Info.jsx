import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import style from './Info.module.css';

const Info = (props) => {
  if (!props.profile) {
    return <Preloader/>
  }
  return (
    <div>
      <div className={style.banner}>
        <img src="http://www.rknec.edu/Students/img/srceventdbanner.jpg" alt="banner" />
      </div>
      <div className={style.infoconteiner}>
        <div className={style.avatar}>
          <img src={props.profile.photos.large} alt="" />
        </div>
        <div className={style.personalinfo}>
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