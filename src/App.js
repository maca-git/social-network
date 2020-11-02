import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import store from './redux/redux-store';
import Navbar from './components/Navbar/Navbar';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import Preloader from './components/common/Preloader/Preloader';
import { initializeApp } from './redux/app-reducer';
import { connect, Provider } from 'react-redux';
import { compose } from 'redux';

const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const Settings = React.lazy(() => import('./components/Settings/Settings'));
const News = React.lazy(() => import('./components/News/News'));
const Music = React.lazy(() => import('./components/Music/Music'));


class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    const renderProfile = () => <ProfileContainer/>
    const renderDialogs = () => <DialogsContainer/>
    const renderUsers = () => <UsersContainer/>

    return (
        <div className="app">
          <HeaderContainer />
          <Navbar/>
          {/* <Navbar state={props.state.navbarState}/> */}
          <div className="content">
            <React.Suspense fallback={<Preloader />}>
              <Route path='/profile/:userId?' render={renderProfile} />
              <Route path='/dialogs' render={renderDialogs} />
              <Route path='/users' render={renderUsers} />
              <Route path='/music' component={Music} />
              <Route path='/news' component={News} />
              <Route path='/settings' component={Settings} />
              <Route path='/login' component={Login} />
            </React.Suspense>
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