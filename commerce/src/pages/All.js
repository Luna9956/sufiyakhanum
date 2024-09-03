import React from 'react'
import Home from './Home'
import Gallery from './Gallery'
import Arrivals from './Arrivals'
import AboutUs from './AboutUs'
import Addition from './Addition'
import Navbar from '../components/Navbar'
import SocialMedia from './SocialMedia'
import { Box, Link as MuiLink,} from '@mui/material';

const All = () => (
    <>
    <Box 
    sx={{
        width: { xs:330, sm: 600, md: '1366px',xl:"2366px"}
    }}>
        <Navbar />
        <Home />
        <Gallery />
        <Arrivals />
        <Addition />
        <AboutUs />
        </Box>
    </>
)

export default All