import React from 'react';
import './sectionE.css'

const SectionE = () => {
    return (
        <div className="sectione-container">
            <div className="sectione-container-text">
                <h3>Politics</h3>
                <hr />
                <p>A lack of political will is the main barrier to getting rid of nuclear weapons. The technical know-how is there, but countries believe they need their nuclear weapons for security. Learn more about the rivalries that drive countries to pursue nuclear weapons.</p>
            </div>
            
            <div className=" sectione-container-img">
                    <a href="/nuclear-weapons/articles/us-and-russia-arms-race-nowhere" target="">
                        <div className="sectione-img">
                            <img src="https://cms.outrider.org/sites/default/files/styles/wide_lg/public/2018-02/ARC_CL_BQ_GTY_170982266_master.jpg?h=5098d91f&itok=o664takg" alt=""></img>
                        </div>
                        <div className="sectione-text">
                            <p>Article</p>
                            <h1>U.S. and Russia: Arms Race to Nowhere</h1>
                        </div>
                        <div className="sectione-sign">
                            <button className="sectione-btn">
                                <span></span>
                            </button>   
                        </div>
                    </a>
            </div>
        </div>
    );
}

export default SectionE;
