import React from 'react'
import './Btn.css'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

export default function Btn({ label, onClick, style }) {
    return (
        <div className='btn' style={style}>
            {label}
            <ArrowOutwardIcon
                fontSize='small'
            />
        </div>
    )
}
