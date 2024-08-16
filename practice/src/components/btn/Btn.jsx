import React from 'react'
import './Btn.css'

export const Btn = ({ label = 'Click Me', func }) => {

    return (
        <button
            className='btn'
            onClick={func}
        >
            {label}
        </button>
    )
}
