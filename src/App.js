import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import FriendListContainer from './components/FriendList/FriendListContainer';
import Header from './components/Header/Header';
import NavbarContainer from './components/Navbar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';
import PortalsContainer from './components/Portals/PortalsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <NavbarContainer />
        <div className="app-wrapper-content">
          <Route path="/profile"
            render={() => <ProfileContainer />} />
          <Route path="/dialogs"
            render={() => <DialogsContainer />} />
          <Route path="/news"
            render={() => <div />} />
          <Route path="/music"
            render={() => <div />} />
          <Route path="/portals"
            render={() => <PortalsContainer />} />
          <Route path="/users"
            render={() => <UsersContainer />} />
          <Route path="/friends"
            render={() => <FriendListContainer  />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;