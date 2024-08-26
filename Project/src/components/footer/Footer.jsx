import React from 'react'
import './Footer.css'
import building from '../../assets/imgs/building.png'
import { Grid } from '@mui/material'

export default function Footer() {
    return (
        <div className='footer'>
            <div className="footer-upper">
                <Grid container spacing={2} >
                    <Grid item xs={4}>
                        <img src={building} alt="building-img" className='footer-building' />
                    </Grid>
                    <Grid item xs={8}> <div className='box' /> </Grid>

                </Grid>
            </div>
            <div className="footer-lower">
            </div>
        </div>
    )
}
