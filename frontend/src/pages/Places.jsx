import { Box, Tab, Typography, Tabs } from '@mui/material'
import React from 'react'
import anu from '../assets/anuu.jpg'
import PropTypes from 'prop-types';
import Adventure from '../components/Adventure';
import Beaches from '../components/Beaches';
import Cultural from '../components/Cultural';
import Nature from '../components/Nature'
import Wildlife from '../components/Wildlife';

function LinkTab(props) {
    return (
        <Tab
            sx={{
                height: "50px",
                color: "#ffffff",
                fontWeight: 400,
                fontSize: { md: '20px', xs: '15px' },
                textTransform: "none",
                fontFamily: 'Stylish, sans-serif',
                // "&.Mui-selected": { backgroundColor: "#FFA800", color: "#fff" },
            }}
            component="a"
            onClick={(event) => {
                event.preventDefault();
            }}
            {...props}
        />
    );
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ padding: { xs: "1em 1em", md: "2em 3em" } }}>{children}</Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function allyProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

function Places() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Box sx={{ width: '100%' }}>
                <Box >
                    <img
                        src={anu}
                        width='100%'
                        height='auto'
                    />
                    <Box>
                        <Typography sx={{ fontFamily: 'Caveat Brush, cursive', textAlign: 'center', fontSize: { md: '40px', xs: '15px' } }}> _______Best Places to Visit In Sri Lanka_______</Typography>
                    </Box>
                </Box>
                <Box sx={{ width: '100%' }}>
                    {/* tabs */}
                    <Box sx={{
                        width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'black'
                    }}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            aria-label="nav tabs example"
                            variant="scrollable"
                            textColor='primary'
                            scrollButtons={false}
                            // centered
                            indicatorColor="none"
                            sx={{
                                // color: "#fff",
                                height: "50px",
                                // backgroundColor: 'red',
                            }}
                        >
                            <LinkTab label="Adventure" href="/" {...allyProps(0)} />
                            <LinkTab label="Beach" href="/" {...allyProps(1)} />
                            <LinkTab label="Culture" href="/" {...allyProps(2)} />
                            <LinkTab label="Nature" href="/" {...allyProps(3)} />
                            <LinkTab label="Wildlife" href="/" {...allyProps(4)} />
                        </Tabs>
                    </Box>

                    {/* Tab panel */}
                    <TabPanel value={value} index={0}>
                        <Adventure />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <Beaches />
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <Cultural />
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        <Nature />
                    </TabPanel>
                    <TabPanel value={value} index={4}>
                        <Wildlife />
                    </TabPanel>

                </Box>
            </Box>


        </>
    )
}

export default Places
