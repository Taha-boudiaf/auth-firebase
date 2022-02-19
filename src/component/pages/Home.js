import React from 'react';
import {useAuth} from "../../context/AuthContext"
const Home = () => {
  const {Signout} = useAuth()
  const handellogout = async ()=> {
    try {
      await Signout()
    } catch (error) {
      
    }
  }
  return ( 
    <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex justify-center	mt-28 space-x-4"> 
      <div className='text-center'>
          <div class="text-xl font-medium text-black">Home Page</div>
          <p class="text-slate-500 my-5">Click button to log out</p>
          <button className='px-8 py-2 bg-blue-600 text-white rounded' onClick={handellogout}>Logout</button>
      </div>
    </div>
  )
};

export default Home;
