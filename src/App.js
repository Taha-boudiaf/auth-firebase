import React from 'react';
import {BrowserRouter as Router,Routes ,Route } from "react-router-dom";

import {  SigninPage,HomePage,SignupPage } from './component/AsyncList';
import { UserAuthContextProvider } from './context/AuthContext';

import ProtectedRoute from './component/pages/ProtectedRoute';
import Chat from './component/Chat'

import './App.css';


function App() {
  return (
    <>
      <div className="container mx-auto">
        <UserAuthContextProvider>
          <Router>
            <Routes>
              <Route exact path='/home' element={<HomePage/>}/>
              <Route element={<ProtectedRoute/>}>
                <Route path='/chat' element={<Chat/>} />
              </Route>
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
