import React from 'react';
import {BrowserRouter as Router,Routes ,Route } from "react-router-dom";
import {  SigninPage,HomePage,SignupPage,ChatPage } from './component/AsyncList';
import { UserAuthContextProvider } from './context/AuthContext';

import ProtectedRoute from './component/pages/ProtectedRoute';

import './App.css';


function App() {
  return (
    <>
      <div className="container mx-auto">
        <UserAuthContextProvider>
          <Router>
            <Routes>
              <Route exact path='/' element={<HomePage/>}/> 
              <Route path='/chat' element={<ChatPage/>}/> 
              <Route path='/chat' element={<ProtectedRoute><ChatPage/></ProtectedRoute>} />
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
