import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Box, Card, CardMedia, Grid } from '@mui/material';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
    "& .MuiDialog-paper": {
        maxWidth: "87.84vw",
        minWidth: "73.20vw"
    },
}));

function BootstrapDialogTitle(props) {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
}

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

export default function JournalDialogBox({ open, isCloseDialogBox, data }) {

    return (
        <div>
            <BootstrapDialog
                onClose={isCloseDialogBox}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={isCloseDialogBox}>
                    <Typography sx={{ fontSize: { xs: '13px', md: '18px' }, fontWeight: 'bold', fontFamily: 'Raleway, sans-serif' }}>{data.name}</Typography>
                </BootstrapDialogTitle>
                <DialogContent >
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2} >
                            <Grid item xs={12} md={12}>
                                <Card sx={{ height: 'auto', width: '100%', objectFit: 'contain' }}>
                                    <CardMedia
                                        component="img"
                                        src={data.image}
                                        sx={{ height: 'auto', width: '100%' }}
                                    />
                                </Card>
                                <Box>
                                    <Typography sx={{ fontSize: '10px', textAlign: 'right' }}>{data.pDate}</Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <Typography gutterBottom sx={{ fontSize: { xs: '13px', md: '15px' }, textAlign: 'justify' }}>
                                    {data.description}
                                </Typography>
                                <br />
                                <Box>
                                    <Typography sx={{ fontWeight: 'bold' }}>{data.sectionOneHeading}</Typography>
                                    <Typography sx={{ textAlign: 'justify', fontSize: { xs: '13px', md: '15px' } }}>{data.sectionOneDes}</Typography>
                                    <br />
                                    <Typography sx={{ fontWeight: 'bold' }}>{data.sectionTwoHeading}</Typography>
                                    <Typography sx={{ textAlign: 'justify', fontSize: { xs: '13px', md: '15px' } }}>{data.sectionTwoDes}</Typography>
                                    <br />
                                    <Typography sx={{ fontWeight: 'bold' }}>{data.sectionThreeHeading}</Typography>
                                    <Typography sx={{ textAlign: 'justify', fontSize: { xs: '13px', md: '15px' } }}>{data.sectionThreeDes}</Typography>
                                    <br />
                                    <Typography sx={{ fontWeight: 'bold' }}>{data.sectionFourHeading}</Typography>
                                    <Typography sx={{ textAlign: 'justify', fontSize: { xs: '13px', md: '15px' } }}>{data.sectionFourDes}</Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </DialogContent>
            </BootstrapDialog>
        </div >
    );
}