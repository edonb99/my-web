import React from 'react';
import './footer2.css'

const Footer2 = () => {
    return (
        <div className="footer2">
        <div className="footer2-container">

            <div className="footer2-container-text1">
                <h1>Outrider Foundation</h1>
                <h3>834 E. Washington Ave., Suite 333 Madison, WI 53703</h3>
                <p>Among the greatest threats to the future of humankind are nuclear weapons and global climate change. Outrider makes the bold claim that both threats can be overcome — and not just by policy makers but by people with the right tools and inspiration.</p>
                <div className="footer2-container-text1-links">
                    <a href="/#">About Us</a>
                    <a href="/#">Contact Us</a>
                    <a href="/#">608.237.3489</a>
                </div>
                <div className="footer2-container-icons">
                    <a href="#" className="fa fa-twitter"></a>
                    <a href="#" className="fa fa-facebook"></a>
                    <a href="#" className="fa fa-instagram"></a>
                    <a href="#" className="fa fa-linkedin"></a>
                </div>
            </div>

            <div className="footer2-container-text2">
                <div className="footer2-container-text2-logo"></div>
                <h1>Get the Latest Articles from Outrider</h1>
              
                <div className="footer2-container-form">
                    <input type="text" placeholder="Your email address"></input>
                    <button type="submit">Sign me up!</button>
                </div>
            </div>  
        </div>
        </div>
    );
}

export default Footer2;
