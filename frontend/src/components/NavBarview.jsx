import React, { useState } from "react";

function NavBarview() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="Navbar">

                <span className="nav-logo"><a href="/" style={{ textDecoration: 'none' }}><span style={{ fontFamily: 'Audiowide, cursive', color: 'black', textTransform: 'uppercase' }}>visit</span><span style={{ fontFamily: 'Audiowide, cursive', color: '#800000' }}>S</span><span style={{ fontFamily: 'Audiowide, cursive', color: 'orange', }}>R</span><span style={{ fontFamily: 'Audiowide, cursive', color: 'green' }}>I</span><span style={{ fontFamily: 'Audiowide, cursive', color: 'black' }}>LANKA</span></a></span>

                <div className={`nav-items ${isOpen && "open"}`}>
                    <a href="/">Home</a>
                    <a href="/historyAndCulture">History and Culture</a>
                    <a href="/places">Places</a>
                    <a href="/feedback">Reviews</a>
                    <a href="/journal">Journal</a>
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