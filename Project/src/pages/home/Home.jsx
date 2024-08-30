import React from 'react'
import './Home.css'
import Navbar from '../../components/navbar/Navbar'
import Btn from '../../components/btn/Btn'
import Footer from '../../components/footer/Footer'
import { Grid } from '@mui/material'
import Card from '../../components/card/Card'

export default function Home() {
    return (
        <div>
            <Navbar />
            {/* section 1 : hero  */}
            <section className="padding h-sec1">
                <div className="h-sec1-subHeading">Insiders Off-Market Inventory</div>
                <div className="h-sec1-mainHeading"> Your <span>Next Opportunity</span> Awaits</div>
                <div className="h-sec1-text">Unlock Exclusive Opportunities at Insider's Inventory, specializing in Buy & Hold, Owner-Occupied Retail, and Lucrative Flip Ventures. Discover your path to profitable real estate investments period.</div>
                <div className="h-sec1-btns">
                    <Btn
                        label='Submit an Off-Market Property'
                    />
                    <Btn
                        style={{
                            background: 'transparent',
                            color: '#4DAD49',
                            border: '1px solid #4DAD49'
                        }}
                        label='View our Off-Market Inventory'
                    />
                </div>
            </section>
            {/* section 2  */}
            <section className="padding">
                <Grid container spacing={3}>
                    <Grid item sm={4} xs={12}>
                        <Card />
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <Card />
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <Card />
                    </Grid>

                </Grid>
            </section>
            <div className="h-sec2 padding"></div>
            {/* footer  */}
            <Footer />
        </div>
    )
}
