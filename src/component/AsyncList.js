import React,{lazy, Suspense} from 'react'

const Signin = lazy(() => import('./auth/Signin'));
const Signup = lazy(() => import('./auth/Signup'));
const Home = lazy(()=> import('./pages/Home'))

export const SigninPage = ()=>{
    <Suspense fallback={<div>loading....</div>}>
        <Signin/>
    </Suspense>
} 

export const SignupPage = ()=>{
    <Suspense fallback={<div>loading....</div>}>
        <Signup/>
    </Suspense>
} 


export const HomePage = ()=>{
    <Suspense fallback={<div>loading....</div>}>
        <Home/>
    </Suspense>
} 

