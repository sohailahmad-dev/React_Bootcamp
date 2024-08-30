import React from 'react'
import './SignIn.css'
import Btn from '../../components/btn/Btn'
import { useNavigate } from 'react-router-dom'

export default function SignIn() {
    const navigate = useNavigate();
    return (
        <div className='sign-box' >
            <h1>SignIn</h1>
            <Btn
                onClick={() => navigate('/SignUp')}
                label='Sign Up'
            />
        </div>
    )
}
