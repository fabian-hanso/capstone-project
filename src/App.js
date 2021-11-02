import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Login from "./components/Login/Login.js";
import Inbox from "./components/Inbox/Inbox.js";
import { useState } from "react";
import Dashboard from "./components/Dashboard/Dashboard.js";
import Chat from "./components/Chat/Chat";
import Book from "./components/books/books";
import Subjects from "./components/Subjects/Subjects";
import Tasks from "./components/tasks/tasks";
import Plan from "./components/plan/Plan";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeUser, setActiveUser] = useState("");

  function handleLogin(username) {
    setIsLoggedIn(!isLoggedIn);
    setActiveUser(username);
  }

  function onHandleLogout() {
    setIsLoggedIn(!isLoggedIn);
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
                <Dashboard
                  letActiveUser={activeUser}
                  onHandleLogout={onHandleLogout}
                />
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
            <Tasks activeUser={activeUser} />
          </Route>
          <Route path="/plan">
            <Plan />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
