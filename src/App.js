import React from 'react';
import {BrowserRouter as Router,Routes ,Route } from "react-router-dom";
import {  SigninPage,SignupPage,HomePage,NotFoundPage } from './component/AsyncList';
import { UserAuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './component/pages/ProtectedRoute';
import Footer from './component/layout/Footer'
import './App.css';


function App() {
  return (
    <>
      <div className="container mx-auto">
        <UserAuthContextProvider>
          <Router>
            <Routes>
              <Route path='/' element={<ProtectedRoute><HomePage/></ProtectedRoute>} />
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
