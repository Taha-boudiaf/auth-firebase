import React,{lazy, Suspense} from 'react'

const Signin = lazy(() => import('./auth/Signin'));
const Signup = lazy(() => import('./auth/Signup'));


export const SignIn = ()=>{
    <Suspense fallback={<div>loading....</div>}>
        <Signin/>
    </Suspense>
} 

export const SignUp = ()=>{
    <Suspense fallback={<div>loading....</div>}>
        <Signup/>
    </Suspense>
} 
