import React from 'react'
import Email from '../../assets/svg/Email'
const Login = () => {
    return (
        <div className='flex content-center justify-center'>   
            <div className='flex flex-col bg-white rounded px-10 py-10 shadow-lg'>
                <h1>welcome back</h1>
                <h6>continue where you left off</h6>
                    <div className=''>
                        <button className=''>google</button>
                        <button>facebook</button>
                    </div>
                    <div className=''>
                        <Email/>
                        <input placeholder='Email' className='border-solid border-2 border-slate-300 px-2 py-3 my-2 w-full rounded'/>
                        <input placeholder='password' className='border-solid border-2 border-slate-300 px-2 py-3 my-2  w-full rounded'/>
                    </div>
                    <div className='flex justify-between'>
                        <button className='border-solid border-2 px-16 py-3 rounded border-cyan-500 '>Signin</button>
                        <button className='border-solid border-2 px-16 py-3 rounded border-cyan-500 bg-cyan-500'>signup</button>
                    </div>
            </div>
        </div>
    )
}

export default Login
