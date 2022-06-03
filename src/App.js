import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Login } from "./components/Login";
import { Scientists } from "./components/Scientists";
import { Users } from "./components/Users";
import { AddBook } from "./components/AddBook";
import { MyFavorite } from "./components/MyFavorite";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/scientists">
            <Scientists />
          </Route>
          <Route exact path="/users">
            <Users />
          </Route>
          <Route exact path="/favorite">
            <MyFavorite />
          </Route>
          <Route exact path="/book">
            <AddBook />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
