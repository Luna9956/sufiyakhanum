import React from 'react'
import Home from './Home'
import Gallery from './Gallery'
import Arrivals from './Arrivals'
import AboutUs from './AboutUs'
import Addition from './Addition'
import Navbar from '../components/Navbar'
import SocialMedia from './SocialMedia'

const All = () => (
    <>
        <Navbar />
        <Home />
        <Gallery />
        <Arrivals />
        <Addition />
        <AboutUs />
    </>
)

export default All