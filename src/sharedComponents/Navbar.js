import React, {useState} from 'react';
import {Link} from 'react-router-dom'

import './navbarfooter.css'


import logo from "../Assets/Images/Logo-Maynooth-Option1.png"
import searchImage from "../Assets/Images/Path2.png"
import userImage from "../Assets/Images/user.png"
import shoppingBagImage from "../Assets/Images/shopping-bag.png"

const Navbar = () => {
    const [menuSelected, setMenuSelected] = useState(false);

    return (
        <React.Fragment>
            <div id="navbar-container">
                <div id="navbar-logo">
                    <Link to="/"><img src={logo} alt="" /></Link>
                </div>
                
                <div id="navbar-search">
                    <input type="text" placeholder="Search..."/>
                    <img src={searchImage} alt=""></img>
                </div>

                <ul id="navbar-category">
                    <li><Link to="/livingroom">Living Room</Link></li>
                    <li><Link to="/">Bedroom</Link></li>
                    <li><Link to="/">Kitchen &amp; Dining</Link></li>
                    <li><Link to="/contactus">Contact Us</Link></li>
                </ul>
                <ul id="navbar-rightmenu">
                    <li><Link to="/"><img src={userImage} alt=""/></Link></li>
                    <li><Link to="/"><img src={shoppingBagImage} alt=""/></Link></li>
                </ul>

                <div className= {menuSelected ? "navbar-btn open" : "navbar-btn"} onClick={() => setMenuSelected(prevState => !prevState)}>
                    <div className="navbar-btn_burger" ></div>
                </div>
                
            </div> 
        </React.Fragment>

       
    )
}

export default Navbar