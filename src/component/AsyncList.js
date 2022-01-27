import React,{lazy, Suspense} from 'react'
import Loading from './pages/Loading'

const Home = lazy(() => import('./pages/Home'));
const Signin = lazy(() => import('./auth/Signin'));
const Signup = lazy(() => import('./auth/Signup'));
const Chat = lazy (()=> import('./pages/Chat'))
const PageNotFound = lazy (()=> import('./pages/PageNotFound'))

export const ChatPage = () =>(
    <Suspense fallback={<Loading/>}>
        <Chat/>
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
    
export const HomePage = () =>(
    <Suspense fallback={<Loading/>}>
        <Home/>
    </Suspense>
)

export const NotFoundPage = () =>(
    <Suspense fallback={<Loading/>}>
        <PageNotFound/>
    </Suspense>
)
    

