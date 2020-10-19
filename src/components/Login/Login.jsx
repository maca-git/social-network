import React from 'react';
import Field from 'redux-form/lib/Field';
import reduxForm from 'redux-form/lib/reduxForm';

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={"input"} name={"login"} placeholder={"Login"}/>
      </div>
      <div>
        <Field component={"input"} name={"password"} type={"password"} placeholder={"Password"}/>
      </div>
      <div>
        <Field component={"input"} name={"rememberMe"} type={"checkbox"}/> remember me
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