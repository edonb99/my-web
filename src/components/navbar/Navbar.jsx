import React from 'react';
import './navbar.css';
<script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>


const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-links">
                <div className="logo-container">
                    <span className="circle-1"></span>
                    <span className="circle-2"></span>
                </div>
                <div className="navbar-links_container">
                    <button className="container-1">
                        <i className="fas fa-globe-americas"></i>
                        <span>Espanol</span>
                    </button>
                    <button className="container-2">
                        <svg viewBox="0 0 100 80" width="20" height="20" fill="white">
                        <rect width="100" height="5" ></rect>
                        <rect y="30" width="100" height="5"></rect>
                        <rect y="60" width="100" height="5"></rect>
                        </svg>
                        <p>Menu</p>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
