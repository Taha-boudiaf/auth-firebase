import React from 'react';
import {useAuth} from "../../context/AuthContext"
const Chat = () => {
  const {Signout} = useAuth()
  const handellogout = async ()=> {
    try {
      await Signout()
    } catch (error) {
      
    }
  }
  return ( 
  <div>
    <p>chat page </p>
    <button className='px-5 py-5 bg-blue-600 text-white' onClick={handellogout}>Logout</button>
  </div>
  )
};

export default Chat;
