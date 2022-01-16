import React from 'react';
import {BrowserRouter as Router,Routes ,Route } from "react-router-dom";
// import {  SigninPage } from './component/AsyncList';
import Signin from './component/auth/Signin'
import Home from './component/pages/Home'
import './App.css';
function App() {
  return (
    <>
      <div className="container mx-auto">
        <Router>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/signin' element={<Signin/>}/>  
          </Routes>    
        </Router>
      </div>
    </>
    
  );
}

export default App;
