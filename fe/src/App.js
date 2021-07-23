import React from "react";
import Chat from "./components/Chat";
import Login from "./components/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/room">
          <Chat />
        </Route>
      </Router>
    </div>
  );
}

export default App;
