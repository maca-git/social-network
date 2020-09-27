import {combineReducers, createStore} from "redux";
import dialogReducer from "./dialogs-reduser";
import navbarReducer from "./navbar-reduser";
import profileReducer from "./profile-reduser";

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: dialogReducer,
  navbarState: navbarReducer
});

let store = createStore(reducers);

export default store;