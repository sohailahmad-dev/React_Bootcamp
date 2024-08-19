import React from 'react'
import './Card.css'
import img1 from '../../assets/imgs/img21.png'

export default function Card() {
    return (
        <div>
            <img src={img1} alt="img" className='card-img' />
        </div>
    )
}
