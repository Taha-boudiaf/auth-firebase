import React from 'react'

const PageNotFound = () => {
    return (
        <div className='flex flex-col justify-center	h-screen items-center  bg-white'>
            <div className='text-center'>
                <h1 className='mt-4 text-6xl font-semibold '>OOPS</h1>
                <h1 className='mt-4 text-9xl font-extrabold '>404</h1>
                <p className='mt-4 text-4xl font-semibold '>Something Went Wrong</p>
            </div>
            <a href='/' className='mt-8 font-normal px-8 py-4 bg-blue-600 rounded shadow-blue-600/50 text-white'>Back To Home </a>
        </div>
    )
}

export default PageNotFound
