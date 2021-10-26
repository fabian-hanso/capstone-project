import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from './components/Login/Login.js';
import { useState } from 'react';
import Dashboard from './components/Dashboard/Dashboard.js';
import Chat from './components/Chat/Chat';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [activeUser, setActiveUser] = useState('')

  function handleLogin(username) {
    setIsLoggedIn(!isLoggedIn);
    setActiveUser(username)
  }

  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {
          !isLoggedIn
          ? <Login onLogin={handleLogin}/>
          : <Dashboard letActiveUser={activeUser}/> // Umbenennen
          }
        </Route>
        <Route path="/chat">
          <Chat activeUser={activeUser}/>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;