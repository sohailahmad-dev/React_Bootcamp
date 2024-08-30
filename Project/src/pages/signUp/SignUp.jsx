import React from 'react'
import { useNavigate } from 'react-router-dom'
import Btn from '../../components/btn/Btn'

export default function SignUp() {
    const navigate = useNavigate()
    return (
        <div className='sign-box' >
            <h1>Sign Up</h1>
            <Btn
                onClick={() => navigate('/')}
                label='Go Back to Home'
            />
        </div>
    )
}
