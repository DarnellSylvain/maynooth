import React from 'react';

import './livingroom.css'

import livingShowcase from '../Assets/Images/livingroomshowcase.png'
import ProductDisplay from '../sharedComponents/ProductDisplay';
import searchImage from "../Assets/Images/Path2.png"
import starImage from "../Assets/Images/star.svg"
import productView from "../Assets/Images/productview.png"
import ProductCard from '../sharedComponents/ProductCard';



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
            <div className="filters">
                <div className="filters-search">
                    <input type="text" placeholder="Search here..."/>
                    <img src={searchImage} alt=""/>
                </div>
                <div className="filter-category-categories">
                    <h1>Categories</h1>
                    <p>Sofas</p>
                    <ul>
                        <li>2 Seater Sofas</li>
                        <li>3 Seater Sofas</li>
                        <li>4 Seater Sofas</li>
                        <li>Corner Sofas</li>
                    </ul>
                    <p>Chairs</p>
                    <p>Lighting</p>
                    <p>Rugs</p>
                    <p>Accessories</p>
                </div>
                <div className="filter-category-price">
                    <h1>Price</h1>
                    <p>Price Range £300 - £5000</p>
                        <div className="price-range-slider">
                            <div className="price-bar"></div>
                        </div>

                </div>
                <div className="filter-category-rating">
                    <h1>Rating</h1>
                    <p>4 or more Stars</p>
                        <div className="rating-container">
                            <img src={starImage} alt=""/>
                            <img src={starImage} alt=""/>
                            <img src={starImage} alt=""/>
                            <img src={starImage} alt=""/>
                            <img src={starImage} alt=""/>
                        </div>

                </div>
                <div className="filter-category-colours">
                    <h1>Colours</h1>
                    </div>
                <div className="colours-container" style={{marginTop:0}}>
                    <span><p>Black<div className="colorCircle" style={{backgroundColor: "black"}}></div></p></span>
                    <p>Blue<div className="colorCircle"  style={{backgroundColor: "blue"}}></div></p>
                    <p>Cream<div className="colorCircle"  style={{backgroundColor: "cream"}}></div></p>
                    <p>Pink<div className="colorCircle"  style={{backgroundColor: "pink"}}></div></p>
                    <p>Orange<div className="colorCircle"  style={{backgroundColor: "orange"}}></div></p>
                    <p>Yellow<div className="colorCircle"  style={{backgroundColor: "Yellow"}}></div></p>
                    <p>Gold<div className="colorCircle"  style={{backgroundColor: "Gold"}}></div></p>
                    <p>Green<div className="colorCircle"  style={{backgroundColor: "Green"}}></div></p>
                </div>

            </div>


            <div className="product-view">
                <div className="product-view-topbar">
                    <img src={productView} alt=""/>
                    <p>Showing 12 of 46 results</p>
                </div>

                <div className="product-view-products">
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                </div>
            </div>
        </div>
        </React.Fragment>
     );
}
 
export default LivingRoom;