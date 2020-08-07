import React from 'react';
import arrowImage from '../Assets/Images/Forward-arrow-small.png'
import blackSofaImage from '../Assets/Images/pexels-pixabay-279719.jpg'
import bookcaseImage from '../Assets/Images/pexels-祝-鹤槐-683929.jpg'

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

                    </div>
                    <div className="card">
                        <div className="card-image">
                            <img src={bookcaseImage} alt=""/>
                        </div>
                        <p>STRANDON</p>
                        <p>£1533</p>
                    </div>
                    <div className="card">
                        <div className="card-image">
                            <img src={blackSofaImage} alt=""/>
                        </div>
                        <p>STRANDON</p>
                        <p>£1533</p>
                    </div>
                    <div className="card">
                        <div className="card-image">
                            <img src={blackSofaImage} alt=""/>
                        </div>
                        <p>STRANDON</p>
                        <p>£1533</p>
                    </div>

                </div>
                <img src={arrowImage} alt="" className="arrowRight"/>
            </div>
        </div>
     );
}
 
export default NewInStore;