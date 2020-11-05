import React from 'react';
import { connect } from 'react-redux';
import Field from 'redux-form/lib/Field';
import reduxForm from 'redux-form/lib/reduxForm';
import { required } from '../../utils/validators/validators';
import { Element } from '../common/FormsControls/FormsControls';
import { login } from '../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';
import styles from "./../common/FormsControls/FormsControls.module.css";

const Input = Element("input");

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field component={Input} name={"email"} placeholder={"email"} validate={[required]}/>
      </div>
      <div>
        <Field component={Input} name={"password"} type={"password"} placeholder={"Password"} validate={[required]}/>
      </div>
      <div>
        <Field component={Input} name={"rememberMe"} type={"checkbox"}/> remember me
      </div>

      {
        captchaUrl && <img src={captchaUrl} alt="captcha"/>
      }
      {
        captchaUrl && <Field component={Input} name={"captcha"} placeholder={"Enter captcha"} validate={[required]}/>
      }

      {
        error && 
        <div className={styles.formError}>
          {error}
        </div>
      }
      
      <div>
        <button>Login</button>
      </div>
    </form>
  );
}

const LoginReduxForm = reduxForm({
  form: 'login'
})(LoginForm)

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
  }
  if(props.isAuth) {
    return <Redirect to={"/profile"}/>
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
  );
}
const mapStateToProps = (state) => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);