import React from 'react';
import './section1.css'

const Section1 = () => {
    return (
        <div className="section">
            <div className="section-container">
                <div className="container-text">
                    <h3>Solutions</h3>
                    <div className="line"></div>
                    <p>It is possible to dismantle our nuclear weapons. Over the years, the U.S. and Russia have reduced their arsenals to less than one-sixth of what they were during the Cold War. The current security climate threatens to undo all that work, but we can choose another path. Learn how you can help.</p>
                </div>

                <div className="content-pic">
                    <div className="pic">
                        <div className="picture-container">
                        <img src="https://cms.outrider.org/sites/default/files/styles/near_square_md/public/2020-05/Screen%20Shot%202019-03-28%20at%202.42.27%20PM.png?h=8f74817f&amp;itok=vKIgW4LX" 
                            alt="hand smashes warhead model" />
                        </div>

                        <div className="content-p">How to Dismatle a Nuclear Bomb</div>
                        <div className="play-btn">
                            <button className="btn">
                            </button>    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section1;
