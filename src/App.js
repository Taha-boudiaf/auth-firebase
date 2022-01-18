import React from 'react';
import {BrowserRouter as Router,Routes ,Route } from "react-router-dom";
import {  SigninPage,HomePage,SignupPage } from './component/AsyncList';

import './App.css';

function App() {
  return (
    <>
      <div className="container mx-auto">
        <Router>
          <Routes>
            <Route exact path='/' element={<HomePage/>}/>
            <Route path='/signin' element={<SigninPage/>}/>  
            <Route path='/signup' element={<SignupPage/>}/>  
          </Routes>    
        </Router>
      </div>
    </>
    
  );
}

export default App;
