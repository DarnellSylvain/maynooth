import React from 'react';
import {Link} from 'react-router-dom'

import './home.css'

import rightImage from '../Assets/Images/pexels-mark-mccammon-2724749.jpg'
// import left1Image from '../Assets/Images/pexels-pixabay-271743.jpg'
// import left2Image from '../Assets/Images/pacific-office-interiors-GDz5SJ3fuAQ-unsplash.jpg'
// import left3Image from '../Assets/Images/steve-johnson-MqP5vi4IuSU-unsplash.jpg'
// import left4Image from '../Assets/Images/pexels-vecislavas-popa-1571459.jpg'

const InspirationIdeas = () => {
    return ( 
        <div id="inspirationIdeas-container">
                <div id="inspiration-text">
                    <h1>Get inspired</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur semper nunc in molestie. </p>
                    <Link to="/">Read More</Link>
                </div>
                <div id="inspiration-image">
                    <img src={rightImage} alt=""/>
                </div>
        </div>
     );
}
 
export default InspirationIdeas;