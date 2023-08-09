import { Box, Button, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'
import slll from '../assets/slll.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
    return (
        <>
            <Box sx={{ marginBottom: { md: 0, xs: 0 }, backgroundColor: '#A4BC92' }}>
                <Box sx={{ flexGrow: '1' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={4} md={3}>
                            <img
                                src={slll}
                                width='100%'
                                height='auto'

                            />
                            <Box>
                                <Typography sx={{ fontSize: { md: '29px', xs: '18px' }, textAlign: 'center', fontWeight: '700' }}>visit<span style={{ color: 'red' }}>SriLanka</span></Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={8} md={6}>
                            <Box >
                                <Typography sx={{ fontSize: '20px', textAlign: 'center' }}>Quick Links</Typography>
                                <br />
                                <Box sx={{ display: { md: 'grid', xs: 'grid' }, justifyContent: { md: 'center', xs: 'center' }, }}>
                                    <Button sx={{ color: 'Black', marginRight: '10px' }}>Home</Button>
                                    <Button sx={{ color: 'Black', marginRight: '10px' }}>About Us</Button>
                                    <Button sx={{ color: 'Black', marginRight: '10px' }}>Places</Button>
                                    <Button sx={{ color: 'Black', marginRight: '10px' }}>Feedback and reviews</Button>
                                    <Button sx={{ color: 'Black', marginRight: '10px' }}>Blog</Button>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Box>
                                <Typography sx={{ fontSize: '20px', textAlign: 'center' }}>Social Media</Typography>

                                <Box sx={{ display: { md: 'grid', xs: 'flex' }, justifyContent: { md: 'center', xs: 'center' } }}>
                                    <IconButton><FacebookIcon sx={{ color: 'black' }} /></IconButton>
                                    <IconButton><InstagramIcon sx={{ color: 'black' }} /></IconButton>
                                    <IconButton><YouTubeIcon sx={{ color: 'black' }} /></IconButton>
                                    <IconButton><LinkedInIcon sx={{ color: 'black' }} /></IconButton>
                                    <IconButton><TwitterIcon sx={{ color: 'black' }} /></IconButton>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Box>
                    <Typography sx={{ textAlign: 'center', fontSize: { xs: '8px', md: '10px' } }}>
                        © 2023visitSriLanka™. All Rights Reserved.
                    </Typography>
                </Box>
            </Box>
        </>
    )
}

export default Footer