import React from 'react';
import showcaseImage from '../Assets/Images/showcasev3.png'

const Showcase = () => {
    return ( 
        <div id="showcase-container">
            <img src={showcaseImage} alt=""/>
            <div id="content">
                <h1>Discover The Spring Sale</h1>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
                    At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                </p>
                <a href="/" id="showcase-button">Show now</a>
            </div>
        </div>
     );
    
}
 
export default Showcase;