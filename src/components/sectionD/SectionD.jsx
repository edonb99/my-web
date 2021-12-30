import React from 'react';
import './sectionD.css';

const SectionD = () => {
    return (
        <div className="sectiond">
            <div className="sectiond-cont">
                <div className="sectiond-img-cont">
                    <a href="/nuclear-weapons/interactive/bomb-blast" target="">
                        <div className="sectiond-img">
                            <img src="https://cms.outrider.org/sites/default/files/styles/wide_lg/public/2018-03/us-nuclear-weapons-test-at-eniwetok-in-1952_7936245684_o.jpg?itok=WkjA590x" alt=""></img>
                        </div>
                        <div className="sectiond-text">
                            <p>Interactive</p>
                            <h1>What happens in a bomb blast</h1>
                        </div>
                        <div className="sectiond-sign">
                            <button className="sectiond-btn">
                                <span></span>
                            </button>   
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default SectionD;
