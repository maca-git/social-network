import thunkMiddleware from "redux-thunk";
import {applyMiddleware, combineReducers, createStore} from "redux";
import authReducer from "./auth-reducer";
import dialogReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import appReducer from "./app-reducer";
import {reducer as formReducer} from 'redux-form';

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: dialogReducer,
  navbarState: navbarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;