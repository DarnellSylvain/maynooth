import React from 'react';
import {Link} from 'react-router-dom'


import logo from "../Assets/Images/Logo-Maynooth-Option1.png"
import searchImage from "../Assets/Images/Path2.png"
import userImage from "../Assets/Images/user.png"
import shoppingBagImage from "../Assets/Images/shopping-bag.png"

const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="navbar-logo">
                <Link to="/"><img src={logo} alt="" /></Link>
            </div>
            
            <div className="navbar-search">
                <input type="text" placeholder="Search..."/>
                <img src={searchImage} alt=""></img> 
            </div>

            <ul className="navbar-category">
                <li><Link to="/livingroom">Living Room</Link></li>
                <li><Link to="/">Bedroom</Link></li>
                <li><Link to="/">Kitchen &amp; Dining</Link></li>
                <li><Link to="/">Contact Us</Link></li>
            </ul>
            <ul className="navbar-rightmenu">
                <li><Link to="/"><img src={userImage} alt=""/></Link></li>
                <li><Link to="/"><img src={shoppingBagImage} alt=""/></Link></li>
            </ul>
        </div>
       
    )
}

export default Navbar