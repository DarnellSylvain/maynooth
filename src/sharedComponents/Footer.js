import React from 'react';
import logoAlternate from '../Assets/Images/logo-alternate.png'

import './navbarfooter.css'

const Footer = () => {
    return ( 
        <div id="footer-container">
            <ul className="footer-links">
                <li><h6>Contact us</h6></li>
                <li><a href="/">++44 35 678 903</a></li>
                <li><a href="/">maynooth@mail.com</a></li>
                <li><a href="/">Find a Store</a></li>
            </ul>
            <ul className="footer-links">
                <li><h6>Customer Service</h6></li>
                <li><a href="/">Contact Us</a></li>
                <li><a href="/">Ordering &amp; Payment</a></li>
                <li><a href="/">Shipping</a></li>
                <li><a href="/">Returns</a></li>
                <li><a href="/">FAQ</a></li>
            </ul>
            <ul className="footer-links">
                <li><h6>Information</h6></li>
                <li><a href="/">About maynooth</a></li>
                <li><a href="/">Work With Us</a></li>
                <li><a href="/">Privacy</a></li>
                <li><a href="/">Terms &amp; Conditions</a></li>
                <li><a href="/">Press Enquiries</a></li>
            </ul>
            <div className="footer-links">
                <h6>Subscribe to Maynooth via Email</h6>
                <p>Excepteur sint occaecat cupidatat non</p>
                <input type="text" placeholder="Email Adress" id="footer-input"/>
                <a href="/" id="footer-button">subscribe</a>
            </div>
            <div id="footer-logo">
                <img src={logoAlternate}></img>

            </div>
        </div>
     );
}
 
export default Footer;