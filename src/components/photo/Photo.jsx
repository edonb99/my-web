import React from 'react';
import './photo.css'

const Photo = (props) => {
    const { style, s, logo, p='', h1, className='' } = props;
    return (
            <div className={`section-container-img ${className}`}  style={style}>
                <a href="/#" target="">
                    <div className="section-img" style={s}>
                        <img src={logo} alt=""></img>
                    </div>
                    <div className="section-text">
                        <p>{p}</p>
                        <h1>{h1}</h1>
                    </div>
                    <div className="section-sign">
                                <circle cx='50%' cy="50%" r="49%">
                                <i class="fa fa-play"></i>
                                </circle>
                    </div>
                </a>
            </div>
            
    );
}

export default Photo;
