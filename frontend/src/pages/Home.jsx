import { Box } from '@mui/material'
import React from 'react'
import homeImg from '../assets/elep3.png'
import About from '../components/About'
import Map from '../components/Map'

function Home() {
    return (
        <Box
            sx={{ width: '100%' }}
        >
            <img
                src={homeImg}
                width='100%'
                height='auto'
            />
            <About />
            <Box sx={{ width: '100%', marginTop: '10px', display: 'flex', justifyContent: 'center' }}>
                <Map />
            </Box>

        </Box >
    )
}

export default Home