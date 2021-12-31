import React from 'react';
import './textSection.css'

const Textsection = (props) => {
    return (
            <div className="section-container-text" style={props.style}>
                <h3>{props.h3}</h3>
                <hr />
                <p>{props.p}</p>
            </div>
    );
}

export default Textsection;
