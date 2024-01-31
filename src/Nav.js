import React from 'react';
const Nav = ({ year }) => {


    return (
        <nav className="navbar ">
            <div className="navbar-left">
                Fermi Simulation
            </div>
            {/* offset to the left by 20px */}
            <div className="navbar-center" style={{ marginLeft: "-200px" }}>
                Cosmic Year: {year}
            </div>
            <div className="navbar-right"></div> {/* Invisible spacer */}
        </nav>
    );
};

export default Nav;
