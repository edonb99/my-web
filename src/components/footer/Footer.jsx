import React from 'react';
import './footer.css'

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-container-text">
                <p>SIGN UP FOR OUTRIDER EMAILS</p>
                <h1>Get the Latest Articles from Outrider</h1>
              
                <div className="footer-container-form">
                    <input type="text" placeholder="Your email address"></input>
                    <button type="submit">Sign me up!</button>
                </div>

                <div className="footer-container-icons">
                    <a href="/" className="fa fa-twitter fa-icon-background"></a>
                    <a href="#" className="fa fa-facebook fa-icon-background"></a>
                    <a href="#" className="fa fa-instagram fa-icon-background"></a>
                    <a href="#" className="fa fa-linkedin fa-icon-background"></a>
                </div>
            </div>  
        </div>
    );
}

export default Footer;
