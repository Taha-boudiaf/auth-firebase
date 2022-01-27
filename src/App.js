import React from 'react';
import {BrowserRouter as Router,Routes ,Route } from "react-router-dom";
import {  SigninPage,HomePage,SignupPage,ChatPage,NotFoundPage } from './component/AsyncList';
import { UserAuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './component/pages/ProtectedRoute';
import Footer from './component/layout/Footer'
import Navbar from './component/layout/Navbar'
import './App.css';


function App() {
  return (
    <>
      <div className="container mx-auto">
        <Navbar/>
        <UserAuthContextProvider>
          <Router>
            <Routes>
              <Route exact path='/' element={<HomePage/>}/> 
              <Route path='/chat' element={<ProtectedRoute><ChatPage/></ProtectedRoute>} />
              <Route path='/signin' element={<SigninPage/>}/>  
              <Route path='/signup' element={<SignupPage/>}/>  
              <Route path='*' element={<NotFoundPage/>}/>
            </Routes>    
          </Router>
        </UserAuthContextProvider>  
        <Footer/>
      </div>
    </>
    
  );
}

export default App;
