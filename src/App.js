import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import MainComp from './Components/MainComp';

function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/" component={MainComp}></Route>
    </Switch>
  </Router>
  );
}

export default App;
