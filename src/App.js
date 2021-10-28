import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login.js";
import Inbox from "./components/Inbox/Inbox.js";
import { useState } from "react";
import Dashboard from "./components/Dashboard/Dashboard.js";
import Chat from "./components/Chat/Chat";
import Book from "./components/books/books";
import Subjects from "./components/Subjects/Subjects";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeUser, setActiveUser] = useState("");

  function handleLogin(username) {
    setIsLoggedIn(!isLoggedIn);
    setActiveUser(username);
  }

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {
              !isLoggedIn ? (
                <Login onLogin={handleLogin} />
              ) : (
                <Dashboard letActiveUser={activeUser} />
              ) // Umbenennen
            }
          </Route>
          <Route name="chat" path="/inbox/:chatPartner">
            <Chat activeUser={activeUser} />
          </Route>
          <Route path="/inbox">
            <Inbox activeUser={activeUser} />
          </Route>
          <Route name="books" path="/subjects/:bookname">
            <Book />
          </Route>
          <Route path="/subjects">
            <Subjects />
          </Route>
          <Route path="/tasks">
            <p>plan</p>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
