import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import SignIn from '../pages/signIn/SignIn'
import SignUp from '../pages/signUp/SignUp'

export default function AppRouter() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/SignIn' element={<SignIn />} />
                    <Route path='/SignUp' element={<SignUp />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

