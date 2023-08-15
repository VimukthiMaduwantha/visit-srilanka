import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import CardView from './CardView'
import nature from '../data/nature.json'

function Nature() {
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
                    Looks like a big tropical rainforest amidst the blue ocean, the teardrop island of Sri Lanka is brimming with natural wonders and astounding attractions. From stirring mountains to golden beaches, lush green tea gardens to herds of wild elephants, Sri Lanka has plenty to offer that make your nature escape a memorable one. Here’s a look at the list of best natural places to visit in this serene country which have thoroughly picked by our experts
                </Typography>

                <Box sx={{ flexGrow: '1', marginTop: '15px' }}>
                    <Grid container spacing={2}>
                        {nature.map((e, i) => (
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

export default Nature