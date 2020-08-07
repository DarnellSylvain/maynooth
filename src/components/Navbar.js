import React from 'react';
import logo from "../Assets/Images/Logo-Maynooth-Option1.png"
import searchImage from "../Assets/Images/Path2.png"
import userImage from "../Assets/Images/user.png"
import shoppingBagImage from "../Assets/Images/shopping-bag.png"

const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="navbar-logo">
                <img src={logo} alt="" />
            </div>
            
            <div className="navbar-search">
                <input type="text" placeholder="Search..."/>
                <img src={searchImage} alt=""></img> 
            </div>

            <ul className="navbar-category">
                <li><a href="/">Living</a></li>
                <li><a href="/">Bedroom</a></li>
                <li><a href="/">Kitchen &amp; Dining</a></li>
                <li><a href="/">Contact Us</a></li>
            </ul>
            <ul className="navbar-rightmenu">
                <li><img src={userImage} alt=""/></li>
                <li><img src={shoppingBagImage} alt=""/></li>
            </ul>
        </div>
       
    )
}

export default Navbar