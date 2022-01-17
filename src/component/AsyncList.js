import React,{lazy, Suspense} from 'react'
import Loading from './pages/Loading'

const Home = lazy(() => import('./pages/Home'));
const Signin = lazy(() => import('./auth/Signin'));
const Signup = lazy(() => import('./auth/Signup'));


export const SigninPage = () =>(
    <Suspense fallback={<Loading/>}>
        <Signin/>
    </Suspense>
)
    

export const SignupPage = () =>(
<Suspense fallback={<Loading/>}>
        <Signup/>
    </Suspense>)
    



export const HomePage = () =>(
<Suspense fallback={<Loading/>}>
    <Home/>
</Suspense>
)
    

