import React from 'react'
// import Email from '../../assets/svg/Email.svg'
const Login = () => {
    return (
        <div className='flex content-center justify-center'>   
            <form className='flex flex-col bg-white rounded px-10 py-10 shadow-lg'>
                <h1>welcome back</h1>
                <h6>continue where you left off</h6>
                    <div className=''>
                        <button className=''>google</button>
                        <button>facebook</button>
                    </div>
                    <div className='relative'>
                    <i className='far fa-lock w-12 h-full absolute flex justify-center items-center text-gray-400 pointer-events-none'></i>
                        <input placeholder='Email' className='border-solid border-2 border-slate-300 px-2 py-3 my-2 w-full rounded'/>
                        <input placeholder='password' className='border-solid border-2 border-slate-300 px-2 py-3 my-2  w-full rounded'/>
                    </div>
                    <div className='flex justify-between'>
                        <button className='border-solid border-2 px-16 py-3 rounded border-cyan-500 '>Signin</button>
                        <button className='border-solid border-2 px-16 py-3 rounded border-cyan-500 bg-cyan-500'>signup</button>
                    </div>
            </form>
        </div>
    )
}

export default Login
