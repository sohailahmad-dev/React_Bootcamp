import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Properties from '../../assets/data/Properties'
import Card from '../../components/card/Card'
import { Grid } from '@mui/material'

export default function Buyers() {
    return (
        <div>
            <Navbar />
            <section className="buyers-cards-box padding">
                <Grid container spacing={3}>
                    {Properties.map((item, index) => (
                        <Grid
                            key={index}
                            item md={4} sm={4} xs={12}>
                            <Card
                                img={item.img}
                                status={item.status}
                                currentStatus={item.currentStatus}
                            />
                        </Grid>
                    ))}
                </Grid>

            </section>
            <Footer />
        </div>
    )
}
