import { Box, Card, Grid, Typography } from '@mui/material'
import React from 'react'
import beach from '../data/beach.json'
import CardView from './CardView'
function Beaches() {
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
                    Sri Lanka is very famous for its beaches. The entire island is surrounded by blue crystal clear ocean. As a matter of fact, a lot of hotels are based near the beaches.
                    Some beaches even have a historical significance. The beautiful, breath-taking and panoramic views of the western, southern, eastern and northern coastlines are
                    yet another proof of choosing this island as your ultimate holiday destination. Sun-bathing and sea-bathing all year round due to the fact that the country is a tropical one.
                    The beaches around the northern coastline are fringed with palm trees whereas the rest of the coastlines are bordered with coconut trees and thereby providing a best chance to learn how to
                    produce toddy.
                </Typography>

                <Box sx={{ flexGrow: '1', marginTop: '15px' }}>
                    <Grid container spacing={2}>
                        {beach.map((e, i) => (
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

export default Beaches