import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import Music from './components/Music/Music';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';

const App = (props) => {
  const renderProfile = () => <Profile/>
  const renderDialogs = () => <DialogsContainer/>
  const renderUsers = () => <UsersContainer/>

  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Navbar/>
        {/* <Navbar state={props.state.navbarState}/> */}
        <div className="content">
          <Route path='/profile' render={renderProfile} />
          <Route path='/dialogs' render={renderDialogs} />
          <Route path='/users' render={renderUsers} />
          <Route path='/music' component={Music} />
          <Route path='/news' component={News} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
