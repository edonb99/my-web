import React from 'react';
import './header1.css'
const Header1 = () => {
    return (
        <div className="header" style={{ overflow: 'hidden', position: 'relative'}}>
            <div className="header-container">
                <div className="header-container-image">
                </div>
                    <div className="header-container-text">
                        <div className="header-container-circle">
                            <p>Explore</p>
                                <circle cx='50%' cy="50%" r="49%">
                                <i class="fa fa-arrow-down"></i>
                                </circle>
                        </div>
                        <h3>Challenge</h3>
                        <h1>Nuclear Weapons</h1>
                        <p>The threat of nuclear confrontation is growing. But even unused, nuclear weapons have a destructive impact. What will it take for world leaders to abandon nuclear arms? And how can you help?</p>
                    </div>     
            </div>
        </div>
    );
}

export default Header1;
