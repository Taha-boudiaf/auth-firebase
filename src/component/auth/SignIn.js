import React from 'react'
import { Link } from 'react-router-dom'
// import Email from '../../assets/svg/Email.svg'
const Login = () => {
    return (
        <div className='flex justify-center mt-28'>   
            <form className='flex flex-col bg-white rounded px-10 py-10 shadow-lg content-center'>
                <h1>welcome back</h1>
                <h6>continue where you left off</h6>
                    <div className=''>
                        <button className='border-solid border px-8 py-3 rounded border-cyan-500 w-full mb-4'>Sign in with Google</button>
                        <button className='border-solid border px-8 py-3 rounded border-cyan-500 w-full mb-4'>Sign in with Facebook</button>
                    </div>
                    <div className=''>
                        <label>Email</label>
                        <div className='relative'>
                            <i className="fas fa-at absolute h-full w-12 justify-center flex items-center text-gray-400 "></i>
                            <input type="email" placeholder='example@email.com' className='border-solid border shadow-sm border-slate-300 px-4 py-4 my-2 w-full rounded pl-10'/>
                        </div>
                        <label>Password</label>
                        <div className='relative'>
                            <i className="fas fa-fingerprint absolute h-full w-12 justify-center flex items-center text-gray-400 "></i>
                            <input type="password" placeholder='********' className='border-solid border shadow-sm border-slate-300 px-4 py-4 my-2  w-full rounded pl-10'/>
                        </div> 
                        <span>forget your <Link to="#"><u>password ?</u></Link> </span>                      
                    </div>
                    <div className='flex justify-between'>
                        <button className='border-solid border px-16 py-3 rounded border-lime-500  shadow-sm'>Signin</button>
                        <button className='border-solid border px-16 py-3 rounded border-lime-500 bg-lime-500 shadow-sm'>signup</button>
                    </div>
            </form>
        </div>
    )
}

export default Login
