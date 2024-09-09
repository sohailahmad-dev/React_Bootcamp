import React from 'react'
import './Card.css'
import defaultImg from '../../assets/imgs/img3.png'
import Btn from '../btn/Btn'


export default function Card({ img, status, currentStatus }) {
    return (
        <div className='card' >
            <div className="card-img"
                style={{ backgroundImage: `url(${img ?? defaultImg})` }}
            >
                <span className='card-status'>{status ?? 'Tenant Occupied'}</span>
                {currentStatus && <div
                    className='card-current-status'
                    style={{
                        backgroundColor: currentStatus === 'New' ? '#4DAD49' : currentStatus === 'Sold' ? 'red' : 'orange'
                    }}
                >{currentStatus}</div>}
            </div>
            <div className="card-distribution">
                <div className='card-section' >
                    <div className="card-text">Initial Investment</div>
                    <div className="card-figures">$45,120</div>
                </div>
                <hr />
                <div className='card-section' >
                    <div className="card-text">Potential ROI</div>
                    <div className="card-figures">37%</div>
                </div>
            </div>
            <div className="card-main-content">
                <div className="">$1239,300</div>
            </div>
            <Btn
                label='Login to Make an offer'
            />
        </div>
    )
}
