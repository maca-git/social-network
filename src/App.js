import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import Music from './components/Music/Music';

const App = (props) => {
  
  const renderProfile = () => <Profile postsData={props.postsData}/>

  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Navbar />
        <div className="content">
          <Route path='/profile' render={renderProfile} />
          <Route path='/dialogs' component={Dialogs} />
          <Route path='/music' component={Music} />
          <Route path='/news' component={News} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
