import { Box, Card, Grid, Typography } from '@mui/material'
import React from 'react'
import adventure from '../data/adventure.json'
import CardView from './CardView'

function Adventure() {
    return (
        <>
            <Box
                sx={{ width: '100%' }}
            >
                <Typography
                    sx={{
                        fontSize: { md: '16px', xs: '10px' },
                        textAlign: 'center'
                    }}>
                    Thinking of adrenaline rush and adventure, Sri Lanka might not be the first name that pops in your head. However,
                    you may be surprised to learn that it is fast becoming one of the most popular destinations for travelers looking for an adventure-packed holiday.
                    Adventure tourism in Sri Lanka is growing at a fast pace and adrenaline junkies from all over the world make their way to the
                    beautiful island every year to get a dose of thrill and excitement from a wide range of adventure sports.
                </Typography>

                <Box sx={{ flexGrow: '1', marginTop: '15px' }}>
                    <Grid container spacing={2}>
                        {adventure.map((e, i) => (
                            <Grid key={i} item md={3} xs={6}>
                                <CardView
                                    image={e.image}
                                    name={e.name}
                                    description={e.description}
                                />
                            </Grid>
                        ))}


                    </Grid>

                </Box>

            </Box>

        </>
    )
}

export default Adventure