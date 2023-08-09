import React, { useState } from "react";
import { Button } from "@mui/material";

function NavBarview() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="Navbar">
                <span className="nav-logo">visit<span style={{ color: 'red' }}>SriLanka</span></span>
                <div className={`nav-items ${isOpen && "open"}`}>
                    <a href="/">Home</a>
                    <a href="/about">AboutUs</a>
                    <a href="/service">Places</a>
                    <a href="/contact">Feedback and reviews</a>
                    <a href="/contact">Blog</a>
                    {/* <Button sx={{
                        color: 'red',
                        backgroundColor: 'white',
                        marginRight: '15px',
                        width: { md: '210px', xs: '100px' }

                    }} variant="text">Text</Button> */}
                </div>
                <div
                    className={`nav-toggle ${isOpen && "open"}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className="bar"></div>
                </div>
            </div>
        </>
    )
}

export default NavBarview