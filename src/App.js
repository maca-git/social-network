import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import store from './redux/redux-store';
import Navbar from './components/Navbar/Navbar';
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import Music from './components/Music/Music';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { initializeApp } from './redux/app-reducer';
import { connect, Provider } from 'react-redux';
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';


class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if(!this.props.initialized) {
      return <Preloader/>
    }
    const renderProfile = () => <ProfileContainer/>
    const renderDialogs = () => <DialogsContainer/>
    const renderUsers = () => <UsersContainer/>

    return (
        <div className="app">
          <HeaderContainer />
          <Navbar/>
          {/* <Navbar state={props.state.navbarState}/> */}
          <div className="content">
            <Route path='/profile/:userId?' render={renderProfile} />
            <Route path='/dialogs' render={renderDialogs} />
            <Route path='/users' render={renderUsers} />
            <Route path='/music' component={Music} />
            <Route path='/news' component={News} />
            <Route path='/settings' component={Settings} />
            <Route path='/login' component={Login} />
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

const AppContainer = compose(connect(mapStateToProps, {initializeApp}))(App);

const MainApp = (props) => {
  return (
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer/>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
  )
}

export default MainApp;