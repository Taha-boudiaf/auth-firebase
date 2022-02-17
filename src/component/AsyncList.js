import React,{lazy, Suspense} from 'react'
import Loading from './pages/Loading'

const Signin = lazy(() => import('./auth/Signin'));
const Signup = lazy(() => import('./auth/Signup'));
const Home = lazy (()=> import('./pages/Home'))
const PageNotFound = lazy (()=> import('./pages/PageNotFound'))

export const HomePage = () =>(
    <Suspense fallback={<Loading/>}>
        <Home/>
    </Suspense>
)

export const SigninPage = () =>(
    <Suspense fallback={<Loading/>}>
        <Signin/>
    </Suspense>
)
    
export const SignupPage = () =>(
    <Suspense fallback={<Loading/>}>
        <Signup/>
    </Suspense>
)
    


export const NotFoundPage = () =>(
    <Suspense fallback={<Loading/>}>
        <PageNotFound/>
    </Suspense>
)
    

