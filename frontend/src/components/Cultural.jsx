import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import CardView from './CardView'
import culture from '../data/culture.json'

function Cultural() {
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
                    Sri Lanka’s cultural depth is recognized by UNESCO, which has declared six archaeological World Heritage Sites in the country:
                    The sacred city of Anuradhapura, The ancient city of Polonnaruwa, The golden temple of Dambulla, The ancient city of Sigiriya, The sacred city of Kandy,
                    The old town of Galle and its fortifications, From enormous dagobas (dome-shaped structures) and remains of ancient buildings in the ruined cities of Anuradhapura and Polonnaruwa,
                    to the awesome stairway to the temple at Dambulla and the sensual frescoes of heavenly maidens at the palace at the rock of Sigiriya, visitors can experience these World Heritage
                    Sites within a compact area called the Cultural Triangle. In the hill country lies the former royal capital of Kandy, home to the Dalada Maligawa or Sacred Temple of the Tooth,
                    which houses the sacred tooth relic of the Buddha. With its distinctive architecture, art and music, Kandy is a bastion of traditional culture.
                    In contrast, experience the colonial heritage of the country by heading south to the mid-17th c. Dutch fort at Galle, the best preserved in Asia. With 14 massive bastions,
                    a grid system of streets, and some original Dutch bungalows, the fort bustles with life just as it did when Galle was the country’s main port. It’s simply one of the most unique attractions in Sri Lanka.
                </Typography>

                <Box sx={{ flexGrow: '1', marginTop: '15px' }}>
                    <Grid container spacing={2}>
                        {culture.map((e, i) => (
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

export default Cultural