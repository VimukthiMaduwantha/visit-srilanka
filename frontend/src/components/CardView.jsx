import { Card, CardActionArea, CardContent, CardMedia, Dialog, Typography } from '@mui/material'
import React, { useState } from 'react'
import DialogBox from './DialogBox'

function CardView({ image, name, description }) {

    const [open, setOpen] = useState(false);
    const handleOpenDialog = () => {
        setOpen(true)
    }
    const handleCloseDialog = () => {
        setOpen(false)
    }

    const data = { image, name, description };

    return (
        <>
            <Card sx={{ height: { md: '33.11vh', xs: '24.23vh', } }}>
                <CardActionArea onClick={handleOpenDialog}>
                    <CardMedia
                        component="img"
                        src={image}
                        sx={{ width: '100%', height: { md: '25.84vh', xs: '19.38vh' }, }}
                    />
                    <CardContent >
                        <Typography>
                            {name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            {/* popup dialog box */}
            <DialogBox open={open} handleCloseDialog={handleCloseDialog} data={data} />

        </>
    )
}

export default CardView