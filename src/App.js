import React from 'react';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import Music from './components/Music/Music';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { initializeApp } from './redux/app-reduser';
import { connect } from 'react-redux';
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
      <BrowserRouter>
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
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(connect(mapStateToProps, {initializeApp}))(App);