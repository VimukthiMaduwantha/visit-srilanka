import { Box, Typography } from '@mui/material'
import React from 'react'
import fam from '../assets/fam.jpg'

function FamilyTour() {
    return (
        <>
            <Box sx={{ width: '100%' }}>
                <img
                    src={fam}
                    width='100%'
                    height='auto'
                />

            </Box>
        </>
    )
}

export default FamilyTour