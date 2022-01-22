import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react/cjs/react.development'
import { useAuth } from '../../context/AuthContext'

const Login = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState('')
    const {Signin} =  useAuth();
    const handleSubmit = async(e)=>{
        e.preventDefault();
        setError('')
        try {
           await Signin(email,password);

        } catch (error) {
            setError(error.message)
        }
    }
    return (
        <div className='flex justify-center mt-16 mb-16'>   
            <form className='flex flex-col bg-white rounded px-10 py-10 shadow-lg content-center'>
                <h1 className='text-5xl font-bold mb-6 text-center'>Sign In</h1>
                    <div className='relative mt-6 flex justify-between '>
                        <button className='font-semibold shadow-sm border-solid border px-8 py-3 rounded border-red-500  mb-4 hover:bg-red-500 hover:text-white w-1/2 mr-1'>
                            <img src="https://img.icons8.com/color/48/000000/google-logo.png" className='w-6 h-6 inline-block mr-2'/> 
                            Sign in with Google
                        </button>
                        <button className='font-semibold shadow-sm border-solid border px-8 py-3 rounded border-cyan-500  mb-4 hover:bg-blue-600 hover:text-white w-1/2 ml-1 whitespace-nowrap text-center'>
                            <img src="https://img.icons8.com/color/48/000000/facebook-new.png" className='w-6 h-6 inline-block  mr-2'/>
                            Sign in with Facebook
                        </button>
                    </div>
                    <div className="relative  mt-6">
                        <div className="w-full h-px bg-gray-300"></div>
                        <span className="bg-white text-sm text-semibold text-gray-400 px-4 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 flex justify-center">OR</span>
                    </div>
                    <div className='mt-2'>
                        <div className='mt-4'>
                            <label className='text-gray-600 font-semibold'>Email</label>
                            <div className='relative'>
                                <i className="fas fa-at absolute h-full w-12 justify-center flex items-center text-gray-400 "></i>
                                <input type="email" value={email} onChange={(e)=>e.target.value} placeholder='example@email.com' className='focus:border-blue-500 focus:ring-1 focus:ring-blue-600 border-solid border shadow-sm border-slate-300 px-4 py-4 my-2 w-full rounded pl-10'/>
                            </div>
                        </div>
                        <div className='mt-4'>
                            <label className='text-gray-600 font-semibold'>Password</label>
                            <div className='relative'>
                                <i className="fas fa-fingerprint absolute h-full w-12 justify-center flex items-center text-gray-400 "></i>
                                <input type="password" value={password} onChange={(e)=> e.target.value} placeholder='********' className='focus:ring-blue-600 border-solid border shadow-sm border-slate-300 px-4 py-4 my-2  w-full rounded pl-10'/>
                            </div> 
                        </div>
                        <span className='text-gray-400 flex justify-end'>Forget your <a href='#' className='ml-1 text-blue-600 underline underline-offset-2'> Password ?</a> </span>                      
                    </div>
                    <div className='mt-6 flex justify-between'>
                        <button type='submit' onClick={handleSubmit} className='font-semibold border-solid border mt-6 px-16 py-3 rounded border-blue-600 bg-blue-600  shadow-sm text-white w-full'>Sign in</button>
                    </div>
                    <p className='mt-6 text-center font-semibold'>don't have an account ? <Link to="/signup" className='underline underline-offset-2 text-blue-600'>Sign Up</Link> </p>
            </form>
        </div>
    )
}

export default Login
