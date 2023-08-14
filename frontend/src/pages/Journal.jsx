import { Box, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import jnal from '../assets/22.jpg'
import journal from '../data/journal.json'
import JournalCardView from '../components/JournalCardView'

function Journal() {
    return (
        <>
            <Box
                sx={{ width: '100%' }}
            >
                <img
                    src={jnal}
                    width='100%'
                    height='auto'
                />
                <Box>
                    <Typography sx={{ fontFamily: 'Caveat Brush, cursive', textAlign: 'center', fontSize: { md: '40px', xs: '15px' } }}> _______Journals About the Sri Lanka_______</Typography>
                </Box>
                <Box padding={2}>
                    <Grid container spacing={2}>
                        {journal.map((e, i) => (
                            <Grid key={i} item xs={6} md={3}>
                                <JournalCardView
                                    name={e.name}
                                    image={e.image}
                                    pDate={e.pDate}
                                    description={e.description}
                                    sectionOneHeading={e.sectionOneHeading}
                                    sectionOneDes={e.sectionOneDes}
                                    sectionTwoHeading={e.sectionTwoHeading}
                                    sectionTwoDes={e.sectionTwoDes}
                                    sectionThreeHeading={e.sectionThreeHeading}
                                    sectionThreeDes={e.sectionThreeDes}
                                    sectionFourHeading={e.sectionFourHeading}
                                    sectionFourDes={e.sectionFourDes}
                                />
                            </Grid>

                        ))}
                    </Grid>
                </Box>
            </Box >

        </>
    )
}

export default Journal