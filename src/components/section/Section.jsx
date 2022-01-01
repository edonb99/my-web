import React from 'react';
import './section.css'

const Section = () => {
    return (
        <div className="s-section-container">
            <div className="s-section-container-image"></div>
                <div className="s-section-container-text">
                    <h1>Explore Our Nukes Story Archive</h1>
                    <hr />
                    <button>Read more</button>
                </div>
        </div>
    );
}

export default Section;
