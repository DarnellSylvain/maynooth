import React from 'react';

import livingShowcase from '../Assets/Images/livingroomshowcase.png'
import ProductDisplay from '../Home/ProductDisplay';


const LivingRoom = () => {
    return ( 
        <React.Fragment>
        <div className="living-showcase-container">
            <img src={livingShowcase} alt=""/>
            <div className="living-overlay"></div>
                <h1 className="living-content">Living room</h1>
                <span className="living-links"><a href="/">HOME</a> / <a href="/livingroom">LIVING ROOM</a></span>    
        </div>

        <ProductDisplay title="Most Popular"/>


        <div className="grid">
            <h1>h1</h1>
            <h1>h1</h1>

        </div>

        </React.Fragment>
     );
}
 
export default LivingRoom;