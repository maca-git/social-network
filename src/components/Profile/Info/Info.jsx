import React, { useState } from 'react';
import Preloader from '../../common/Preloader/Preloader';
import style from './Info.module.css';
import ProfileStatus from './ProfileStatus';
import ProfileDataForm from './ProfileDataForm';
import userPhoto from './../../../assets/images/user.svg';

const Info = ({ profile, status, updateUserStatus, isOwner, savePhoto, saveProfile }) => {

  let [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader />
  }

  const onMyPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0])
    }
  }

  const onSubmit = (formData) => {
    saveProfile(formData).then(() => setEditMode(false));
  }

  return (
    <div>
      <div className={style.infoconteiner}>
        <div className={style.avatar}>
          <img src={profile.photos.large || userPhoto} alt="" />
        </div>

        <div className={style.personalinfo}>
          <ProfileStatus status={status} updateUserStatus={updateUserStatus} />

          {editMode
            ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
            : <ProfileData profile={profile} isOwner={isOwner} toEditMode={ ()=> setEditMode(true)} />
          }

        </div>
        {
          isOwner && <input type="file" onChange={onMyPhotoSelected} />
        }
      </div>
    </div>

  )
}

const ProfileData = ({ profile, isOwner, toEditMode }) => {
  return (
    <div>
      {
        isOwner && <button onClick={toEditMode}>Edit</button>
      }
      <div>
        Full name: {profile.fullName}
      </div>
      <div>
        Looking for a job: {profile.lookingForAJob ? "yes" : "no"}
      </div>
      {
        profile.lookingForAJob &&
        <div>
          Skills: {profile.lookingForAJobDescription}
        </div>
      }
      <div>
        About me: {profile.aboutMe}
      </div>
      <div>
        Contacts: {Object.keys(profile.contacts).map(key => {
        return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
      })}
      </div>
    </div>
  )
}

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div>
      {contactTitle}: {contactValue}
    </div>
  )
}

export default Info;