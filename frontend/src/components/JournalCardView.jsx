import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import React, { useState } from 'react'
import JournalDialogBox from './JournalDialogBox';


function JournalCardView({ name, image, pDate, description, sectionOneHeading, sectionOneDes, sectionTwoHeading, sectionTwoDes, sectionThreeHeading, sectionThreeDes, sectionFourHeading, sectionFourDes }) {
    const [open, setOpen] = useState(false);
    const isOpenDialogBox = () => {
        setOpen(true)
    }
    const isCloseDialogBox = () => {
        setOpen(false);
    }

    const data = { name, image, pDate, description, sectionOneHeading, sectionOneDes, sectionTwoHeading, sectionTwoDes, sectionThreeHeading, sectionThreeDes, sectionFourHeading, sectionFourDes }
    return (
        <>
            <CardActionArea onClick={isOpenDialogBox}>
                <Card sx={{ height: { md: "32.31vh", xs: "16.15vh" } }}>
                    <Box sx={{ overflow: 'hidden', height: { md: "15.23vh", xs: "6.69vh" } }}>
                        <CardMedia
                            component='img'
                            src={image}
                            className='imgHover'
                        />
                    </Box>

                    <Box paddingX={1}>
                        <Typography sx={{ fontSize: { xs: '11px', md: '15px' }, fontWeight: 'bold', fontFamily: 'Carrois Gothic SC, sans-serif' }}>{name.substring(0, 34) + "..."}</Typography>
                        <Typography sx={{ fontSize: { xs: '8px', md: '13px' } }}>{pDate}</Typography>
                        {/* <CardContent > */}
                        <Typography sx={{ /* fontFamily: 'Kulim Park, sans-serif', */ fontSize: { md: '16px', xs: '11px' }, /* display: { xs: 'none', md: 'contents' }, */ overflow: 'hidden' }}>
                            {description/* .substring(0, 65) + "..." */}
                        </Typography>
                        {/* </CardContent> */}
                    </Box>
                </Card >
            </CardActionArea >

            {/*Dialog popup box */}
            <JournalDialogBox open={open} isCloseDialogBox={isCloseDialogBox} data={data} />
        </>
    )
}

export default JournalCardView

