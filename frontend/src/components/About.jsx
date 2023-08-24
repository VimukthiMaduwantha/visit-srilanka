import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
// import Video from './video'
import ee from '../assets/eee.jpg'
import videoNew from '../video/new.mp4'
import 'animate.css'

function About() {

    const videoSrc = videoNew;
    const post = ee
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                        <Box sx={{ marginX: '10px', overflow: 'hidden' }}>
                            <Typography className='animate__animated animate__backInDown animate__delay-0.2s' sx={{ fontFamily: 'Audiowide, cursive', fontSize: { md: '35px', xs: '20px' }, fontWeight: 'bold', textTransform: 'uppercase' }}>#visitsrilanka</Typography>
                            <Typography className='animate__animated animate__backInUp animate__delay-0.3s' sx={{ fontFamily: 'Audiowide, cursive', fontSize: { md: '60px', xs: '30px' }, fontWeight: 'bold' }}>Love <span style={{ color: '#800000' }}>S</span><span style={{ color: 'orange' }}>R</span><span style={{ color: 'green' }}>I</span> <span style={{ color: 'black' }}>LANKA</span></Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <Box sx={{ marginX: '10px', backgroundColor: '#F7FFE5', padding: '10px', borderRadius: '5px' }}>
                            <Typography sx={{ textTransform: 'capitalize', fontSize: { md: '25px', xs: '15px' }, fontWeight: 'bold' }}>
                                an island of spectacular historic wonders and mesmerising sceanes of nature you don't want to miss
                            </Typography>
                            <Typography sx={{ fontSize: { md: '15px', xs: '11px' } }}>
                                In the 13th century, explorer Marco Polo described Sri Lanka as “La più bella isola delle sue dimensioni in tutto il mondo” – the finest island of its size in all the world.
                            </Typography>
                            <br />
                            <Typography sx={{ fontSize: { md: '15px', xs: '11px' } }}>
                                Sri Lanka is an island of Serendipity, a land of chance encounters and adventures, the home of innumerable treasures. An island deeply rooted in nature, history, heritage and values. It offers a myriad of experiences to truly immerse in authentic culture and unspoiled nature, a genuine excitement to the senses, a tug at one’s emotions.
                            </Typography>
                            <br />
                            <Typography sx={{ fontSize: { md: '15px', xs: '11px' } }}>
                                Sri Lanka is an island of Serendipity, a land of chance encounters and adventures, the home of innumerable treasures. An island deeply rooted in nature, history, heritage and values. It offers a myriad of experiences to truly immerse in authentic culture and unspoiled nature, a genuine excitement to the senses, a tug at one’s emotions.
                            </Typography>
                            <br />
                            <Typography sx={{ fontSize: { md: '15px', xs: '11px' } }}>
                                Tourism is back to normal and is playing a key role in our economic recovery. So come, visit our Paradise Island and fall in love with Sri Lanka all over again.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Box sx={{ marginX: '10px', display: 'flex', justifyContent: 'center' }}>
                            <video
                                muted="true"
                                loop='true'
                                id="my-player"
                                className="video-js"
                                autoPlay
                                preload="auto"
                                poster={post}
                                style={{ width: '90%', height: 'auto' }}

                            >
                                <source src={videoSrc} type='video/mp4' />
                            </video>
                        </Box>
                    </Grid>
                </Grid>
            </Box >
        </>
    )
}

export default About