import React from 'react'
import './InputField.css'

export default function InputField({ type, placeholder, onChange, label, value }) {
    return (
        <input
            className='input'
            type={type}
            placeholder={placeholder}
            onChange={onChange}
        ></input>
    )
}
