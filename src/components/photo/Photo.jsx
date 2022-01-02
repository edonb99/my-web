import React from 'react';
import './photo.css'

const Photo = (props) => {
    return (
            <div className=" section-container-img"  style={props.style}>
                <a href="/#" target="">
                    <div className="section-img" style={props.s}>
                        <img src={props.logo} alt=""></img>
                    </div>
                    <div className="section-text">
                        <p>{props.p}</p>
                        <h1>{props.h1}</h1>
                    </div>
                    <div className="section-sign">
                            <svg>
                                <circle cx='50%' cy="50%" r="49%">
                                <i class="fa fa-play"></i>
                                </circle>
                            </svg>
                      
                    </div>
                </a>
            </div>
            
    );
}

export default Photo;
