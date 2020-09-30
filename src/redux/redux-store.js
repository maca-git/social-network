import {combineReducers, createStore} from "redux";
import dialogReducer from "./dialogs-reduser";
import navbarReducer from "./navbar-reduser";
import profileReducer from "./profile-reduser";
import usersReducer from "./users-reduser";

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: dialogReducer,
  navbarState: navbarReducer,
  usersPage: usersReducer
});

let store = createStore(reducers);

export default store;