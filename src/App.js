import React from 'react';
import {BrowserRouter as Router,Routes ,Route } from "react-router-dom";
import {  SigninPage,HomePage,SignupPage } from './component/AsyncList';

import './App.css';
import { UserAuthContextProvider } from './context/AuthContext';

function App() {
  return (
    <>
      <div className="container mx-auto">
        <UserAuthContextProvider>
          <Router>
            <Routes>
              <Route exact path='/' element={<HomePage/>}/>
              <Route path='/signin' element={<SigninPage/>}/>  
              <Route path='/signup' element={<SignupPage/>}/>  
            </Routes>    
          </Router>
        </UserAuthContextProvider>  
      </div>
    </>
    
  );
}

export default App;
