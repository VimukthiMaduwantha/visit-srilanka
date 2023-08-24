import { Box, Card, CardActionArea, CardContent, CardHeader, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import his from '../assets/history.jpg'
import history from '../data/history.json'
import { useNavigate } from 'react-router-dom'

function History() {
    const navigate = useNavigate();

    const movePage = (e) => {
        console.log("E", e)
        navigate(e.path)
    }
    return (
        <>
            <Box sx={{ width: '100%' }}>
                <img
                    src={his}
                    width='100%'
                    height='auto'
                />
                <Box>
                    <Typography sx={{ fontFamily: 'Caveat Brush, cursive', textAlign: 'center', fontSize: { md: '40px', xs: '15px' } }}> _______History and Culture of Sri Lanka_______</Typography>
                </Box>
                <Typography sx={{ marginX: '20px', textAlign: 'center', fontSize: { md: '15px', xs: '8px' } }} >
                    Discover the stories, myths and legends that make up the beautiful Pearl of Asia; the centuries old relics, the connections to the wider world and how they have shaped the island now known as Sri Lanka. Travel across the country as you piece together a tale of kings, queens, love, betrayal, war, conquest and defeat paired with the intertwining thread of the main religion of Buddhism binding everything together.
                    For the cultural trip of a lifetime you can visit anytime, but if you want to witness the world famous pageant known as Esala Perehera August is the best time to visit. Make your way across the country uncovering the relics, and world heritage sites that remain, only slightly worn down by time.
                </Typography>
                <br />
                <Box sx={{ flexGrow: 1, marginX: '20px' }}>
                    <Grid container spacing={2}>
                        {history.map((e, i) => (
                            <Grid key={i} item xs={6} md={6}>
                                <CardActionArea onClick={() => movePage(e)}>
                                    <Card>
                                        <Box sx={{ overflow: 'hidden' }}>
                                            <CardMedia
                                                component='img'
                                                src={e.image}
                                                className='imgHover'
                                            />
                                        </Box>
                                        <Typography sx={{ marginX: '10px', fontSize: { xs: '13px', md: '20px' }, fontFamily: 'Wellfleet, cursive', fontWeight: 'bold' }} >{e.title} </Typography>
                                        <Typography sx={{ marginX: '10px', fontSize: { xs: '9px', md: '15px' } }}>
                                            {e.description.substring(0, 250) + ' ...'}
                                        </Typography>
                                    </Card>
                                </CardActionArea>
                            </Grid>
                        ))}


                    </Grid>
                </Box>

            </Box >
        </>
    )
}

export default History