import React from 'react';
import "./header.css"

const Header = () => {
    return (
        <div className="header">
            <div className="header-container">
                <div className="header-image"></div>
                    <div className="text-container">
                        <div className="text-content">
                            <div className="text">
                                <span>Challenge</span>
                                <h1>Nuclear Weapons</h1>
                                <p>The threat of nuclear confrontation is growing. But even unused, nuclear weapons have a destructive impact. What will it take for world leaders to abandon nuclear arms? And how can you help?</p>
                            </div>                    
                        </div>
                        {/*
                        <button className="btn-1">
                            <p>Explore</p>
                            <span>
                                <svg>
                                    <circle cx="50%" cy="50%" r="49%"></circle>
                                </svg>
                            </span>
                        </button>
                        */}
                </div>
            </div>

            <div className="header-container-2">
            
            </div>

        </div>
    );
}

export default Header;
