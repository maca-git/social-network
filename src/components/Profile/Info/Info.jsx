import React from 'react';
import style from './Info.module.css';

const Info = () => {
  return (
    <div>
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
    </div>

  )
}

export default Info;