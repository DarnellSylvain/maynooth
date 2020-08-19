import React from 'react';

import image1 from '../Assets/Images/h-yingz-n9xvUJ5pUzw-unsplash.jpg'
import image2 from '../Assets/Images/julian-zett-P5QwE5i4sog-unsplash.jpg'
import image3 from '../Assets/Images/pexels-pixabay-276534.jpg'


const Clearance = () => {
    return ( 
        <div id="clearance-container">
            <div id="clearance-images">
                <img src={image1}></img>
                <img src={image2}></img>
                <img src={image3}></img>
            </div>
            <div id="overlay"></div>
            <div id="clearance-content">
                <h2>Clearance Deals</h2>
                <a href="/">Take a look</a>
            </div>
        </div>
     );
}
 
export default Clearance;