import React from 'react';
import Field from 'redux-form/lib/Field';
import reduxForm from 'redux-form/lib/reduxForm';
import { Element } from './../../common/FormsControls/FormsControls';
import styles from "./../../common/FormsControls/FormsControls.module.css";

const Input = Element("input");
const Textarea = Element("textarea");

const ProfileDataForm = ({profile, handleSubmit, error}) => {
  return (
    <form onSubmit={handleSubmit}>
      {
        <button>save</button>
      }
      {
        error && 
        <div className={styles.formError}>
          {error}
        </div>
      }
      <div>
        Full name:  <Field component={Input} name={"fullName"}/>
      </div>
      <div>
        Looking for a job: <Field component={Input} name={"lookingForAJob"} type="checkbox"/>
      </div>
      <div>
        Skills: <Field component={Textarea} name={"lookingForAJobDescription"}/>
      </div>
      <div>
        About me: <Field component={Textarea} name={"aboutMe"}/>
      </div>
      {
        profile.lookingForAJob &&
        <div>
          Skills: <Field component={Textarea} name={"lookingForAJob"}/>
        </div>
      }
      <div>
        Contacts: {Object.keys(profile.contacts).map(key => {
        return (
          <div key={key}>
            {key}: <Field component={Input} name={"contacts."+ key}/>
          </div>
        )
      })}
      </div>
    </form>
  )
}
const ProfileReduxForm = reduxForm({
  form: 'edit-profile'
})(ProfileDataForm)

export default ProfileReduxForm;