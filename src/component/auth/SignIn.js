import React from 'react'
import { Link } from 'react-router-dom'
// import Email from '../../assets/svg/Email.svg'
const Login = () => {
    return (
        <div className='flex justify-center mt-28'>   
            <form className='flex flex-col bg-white rounded px-10 py-10 shadow-lg content-center'>
                <h1>welcome back</h1>
                <h6>continue where you left off</h6>
                    <div className='mt-6'>
                        <button className='border-solid border px-8 py-3 rounded border-cyan-500 w-full mb-4'>
                            <i class="fab fa-google text-red-500"></i>
                            Sign in with Google
                        </button>
                        <button className='border-solid border px-8 py-3 rounded border-cyan-500 w-full mb-4'>
                            <i class="fab fa-facebook text-sky-500 border-sky-500"></i>
                            Sign in with Facebook
                        </button>
                    </div>
                    <div className='mt-6'>
                        <label className='mt-4'>Email</label>
                        <div className='relative'>
                            <i className="fas fa-at absolute h-full w-12 justify-center flex items-center text-gray-400 "></i>
                            <input type="email" placeholder='example@email.com' className='border-solid border shadow-sm border-slate-300 px-4 py-4 my-2 w-full rounded pl-10'/>
                        </div>
                        <label className='mt-4'>Password</label>
                        <div className='relative'>
                            <i className="fas fa-fingerprint absolute h-full w-12 justify-center flex items-center text-gray-400 "></i>
                            <input type="password" placeholder='********' className='border-solid border shadow-sm border-slate-300 px-4 py-4 my-2  w-full rounded pl-10'/>
                        </div> 
                        <span className='text-gray-300 flex justify-end'>forget your <Link to="#"><u className='hover:text-blue-600'> password ?</u></Link> </span>                      
                    </div>
                    <div className='flex justify-between'>
                        <button className='border-solid border mt-6 px-16 py-3 rounded border-blue-600  shadow-sm text-blue-600'>Signin</button>
                        <button className='border-solid border mt-6 px-16 py-3 rounded bg-blue-600 shadow-sm text-white'>signup</button>
                    </div>
            </form>
        </div>
    )
}

export default Login
