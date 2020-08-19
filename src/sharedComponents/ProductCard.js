import React from 'react';

import blackSofaImage from '../Assets/Images/pexels-pixabay-279719.jpg'

const ProductCard = ({img}) => {
    return ( 
    <div className="card">
        <div className="card-image">
            <img src={blackSofaImage} alt=""/>
        </div>
        <p>STRANDON</p>
        <p>£1533</p>
        <div className="colorCircle-container">
            <div className="colorCircle" style={{background: "#324A5F"}}></div>
            <div className="colorCircle" style={{background: "#1B2A41"}}></div>
            <div className="colorCircle" style={{background: "#0C1821"}}></div>  
            <div className="colorCircle" style={{background: "#0C1821"}}></div>  
            <div className="colorCircle" style={{background: "#0C1821"}}></div>  
        </div>
</div> );
}
 
export default ProductCard;

