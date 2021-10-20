import React from 'react';
import Login from './components/Login/Login.js';
import { useState } from 'react';
import Dashboard from './components/Dashboard/Dashboard.js';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [activeUser, setActiveUser] = useState('')

  function handleLogin(username) {
    setIsLoggedIn(!isLoggedIn);
    setActiveUser(username)
  }

  return (
    <div className="App">
      {
      !isLoggedIn
      ? <Login onLogin={handleLogin}/>
      // : <p>Herzlich willkommen, {activeUser}</p>
      : <Dashboard letActiveUser={activeUser}/>
      }
    </div>
  );
}

export default App;