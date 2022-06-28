import React from "react";
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";


function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
