import React from 'react'

const Login = () => {
    return (
        <div className='flex justify-center flex-row'>   
            <div className='flex flex-col'>
                <h1>welcom back</h1>
                <h6>continue where you left off</h6>
                    <div className=''>
                        <button className=''>google</button>
                        <button>facebook</button>
                    </div>
                    <div className=''>
                        <input placeholder='Email' className='px-10 py-2 my-2 w-full'/>
                        <input placeholder='password' className='px-10 py-2 my-2  w-full'/>
                    </div>
                    <div className=''>
                        <button>Signin</button>
                        <button>signup</button>
                    </div>
            </div>
        </div>
    )
}

export default Login
