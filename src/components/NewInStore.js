 import React from 'react';
import arrowImage from '../Assets/Images/Forward-arrow-small.png'
import blackSofaImage from '../Assets/Images/pexels-pixabay-279719.jpg'
import bookcaseImage from '../Assets/Images/pexels-祝-鹤槐-683929.jpg'
import blueChairImage from '../Assets/Images/lucas-raggers-oHQa6uOBosg-unsplash.jpg'
import beigeChairImage from '../Assets/Images/homepageshowcase.jpg'

const NewInStore = () => {
    return ( 
        <div className="newinStore-container">
            <h1>New In Store</h1>
            <div className="productCard-container">
                <img src={arrowImage} alt="" className="arrowLeft"/>
                <div className="productCards">
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
                        </div>

                    </div>
                    <div className="card">
                        <div className="card-image">
                            <img src={bookcaseImage} alt=""/>
                        </div>
                        <p>STRANDON</p>
                        <p>£1533</p>
                        <div className="colorCircle-container">
                            <div className="colorCircle" style={{background: "#25291C"}}></div>
                            <div className="colorCircle" style={{background: "#E6E49F"}}></div>
                            <div className="colorCircle" style={{background: "#191919"}}></div>  
                        </div>
                        


                    </div>
                    <div className="card">
                        <div className="card-image">
                            <img src={blueChairImage} alt=""/>
                        </div>
                        <p>STRANDON</p>
                        <p>£1533</p>
                        <div className="colorCircle-container">
                            <div className="colorCircle" style={{background: "blue"}}></div>
                            <div className="colorCircle" style={{background: "cyan"}}></div>
                            <div className="colorCircle" style={{background: "brown"}}></div>  
                        </div>
                        
                    </div>
                    <div className="card">
                        <div className="card-image">
                            <img src={beigeChairImage} alt=""/>
                        </div>
                        <p>STRANDON</p>
                        <p>£1533</p>
                        <div className="colorCircle-container">
                            <div className="colorCircle" style={{background: "#F15025"}}></div>
                            <div className="colorCircle" style={{background: "#E6E8E6"}}></div>
                            <div className="colorCircle" style={{background: "#CED0CE"}}></div>  
                        </div>
                    </div>

                </div>
                <img src={arrowImage} alt="" className="arrowRight"/>
            </div>
        </div>
     );
}
 
export default NewInStore;