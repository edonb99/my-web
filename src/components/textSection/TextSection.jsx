import React from 'react';
import './textSection.css'

const Textsection = (props) => {
    const { style, h3, p, className='' } = props;
    return (
            <div className={`section-container-text ${className}`} style={style}>
                <h3>{h3}</h3>
                <hr />
                <p>{p}</p>
            </div>
    );
}

export default Textsection;

