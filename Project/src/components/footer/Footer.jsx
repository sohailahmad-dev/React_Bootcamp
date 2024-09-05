import React, { useState } from 'react'
import './Footer.css'
import building from '../../assets/imgs/building.png'
import { Grid } from '@mui/material'
import Btn from '../btn/Btn'
import InputField from '../InputField/InputField'
import useDeviceType from '../../hooks/useDeviceType'

export default function Footer() {
    let [userObj, setUserObj] = useState({});
    let isMobile = useDeviceType();

    const handleInput = (key, value) => {
        userObj[key] = value;
        setUserObj({ ...userObj });

    }

    const handleBtnClick = () => {
        console.log(userObj)
    }

    return (
        <div className='footer'>
            <div className="footer-upper footer-building-margin">
                <img src={building} alt="building-img" className='footer-building' />
                <Grid container spacing={5}>
                    {!isMobile && <Grid item xs={4} sx={{ color: 'white' }}>
                    </Grid>}
                    <Grid item sm={8} xs={12}>
                        <div className='footer-upper-right'>
                            <div className="footer-heading">Signup for the Latest Deals</div>
                            <div className="footer-text">By joining our mailing list, you'll receive the latest updates and opportunities in investment properties directly to your inbox.</div>
                            <div style={{ width: '100%' }} >
                                <Grid container spacing={2}>
                                    <Grid item sm={6} xs={12}>
                                        <InputField
                                            placeholder='First Name'
                                            onChange={(e) => handleInput('firstName', e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item sm={6} xs={12}>
                                        <InputField
                                            placeholder='Last Name'
                                            onChange={(e) => handleInput('lastName', e.target.value)}

                                        />
                                    </Grid>

                                    <Grid item sm={6} xs={12}>
                                        <InputField
                                            placeholder='Email'
                                            onChange={(e) => handleInput('email', e.target.value)}

                                        />
                                    </Grid>
                                    <Grid item sm={6} xs={12}>
                                        <InputField
                                            placeholder='Phone Number'
                                            onChange={(e) => handleInput('phoneNumber', e.target.value)}
                                        />
                                    </Grid>
                                </Grid>
                            </div>
                            <Btn
                                label='Sign up for the Latest Deals'
                                onClick={handleBtnClick}
                            />

                        </div>
                    </Grid>

                </Grid>
            </div>
            <div className="footer-lower">
            </div>
        </div>
    )
}
