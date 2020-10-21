import React from 'react';
import Field from 'redux-form/lib/Field';
import reduxForm from 'redux-form/lib/reduxForm';
import { required } from '../../utils/validators/validators';
import { Element } from '../common/FormsControls/FormsControls';

const Input = Element("input");

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Input} name={"login"} placeholder={"Login"} validate={[required]}/>
      </div>
      <div>
        <Field component={Input} name={"password"} type={"password"} placeholder={"Password"} validate={[required]}/>
      </div>
      <div>
        <Field component={Input} name={"rememberMe"} type={"checkbox"}/> remember me
      </div>
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

  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
}

export default Login;