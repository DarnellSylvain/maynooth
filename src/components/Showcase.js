import React from 'react';
import showcaseImage from '../Assets/Images/showcasev3.png'

const Showcase = () => {
    return ( 
        <div className="showcase-container">
            <img src={showcaseImage} alt=""/>
            <div className="content">
                <h1>Discover The Spring Sale</h1>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
                    At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                </p>
                <a href="/" className="showcase-button">Show now</a>
            </div>
            
            <h1></h1>
        </div>
     );
    
}
 
export default Showcase;