import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {  SigninPage,HomePage } from './component/AsyncList';
import './App.css';
function App() {
  return (
    <div className="container mx-auto">
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/signin' component={SigninPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
