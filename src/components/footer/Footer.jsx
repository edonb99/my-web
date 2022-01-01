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
                    <a href="#" class="fa fa-twitter"></a>
                    <a href="#" class="fa fa-facebook"></a>
                    <a href="#" class="fa fa-instagram"></a>
                    <a href="#" class="fa fa-linkedin"></a>
                </div>
            </div>  
        </div>
    );
}

export default Footer;
