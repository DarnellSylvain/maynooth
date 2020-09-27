import React from "react";

import "./productpage.css";

import ProductDisplay from "../sharedComponents/ProductDisplay";

import blacksofa from "../Assets/Images/blacksofa.jpg";
import starImage from "../Assets/Images/star.svg";
import starEmptyImage from "../Assets/Images/starempty.png";

import heartImage from "../Assets/Images/Heart.png";
import heartEmptyImage from "../Assets/Images/Heart-1.png";
import arrowImage from "../Assets/Images/Forward-arrow-small.png";

const ProductPage = () => {
	return (
		<div className="productpage-container">
			<h1>Praensent Integer</h1>
			<main>
				<div className="box1">
					<img src={blacksofa} alt="" />
				</div>
				<div className="box2">
					<div className="product-name">
						<h2>Praensent Integer</h2>
						<img src={heartImage} alt="" />
					</div>
					<div className="product-rating-container">
						<img src={starImage} alt="" />
						<img src={starImage} alt="" />
						<img src={starImage} alt="" />
						<img src={starImage} alt="" />
						<img src={starEmptyImage} alt="" />
					</div>

					<p>
						Product Description - Lorem ipsum dolor sit amet, consectetur
						adipiscing elit donec consectetur semper nunc in molestie.{" "}
					</p>
					<span>
						<h3>£500</h3>
						<p>£600</p>
					</span>

					<div className="product-size">
						<p>Size</p>
						<p>Large</p>
						<img src={arrowImage} alt="" className="arrowLeft" />
					</div>

					<p>Choose Colour/Fabric</p>
					<div
						className="productpage-colour-container"
						style={{ marginTop: 0 }}
					>
						<div
							className="colorCircle"
							style={{ backgroundColor: "black" }}
						></div>
						<div
							className="colorCircle"
							style={{ background: "#324A5F" }}
						></div>
						<div
							className="colorCircle"
							style={{ background: "#1B2A41" }}
						></div>
						<div
							className="colorCircle"
							style={{ background: "#0C1821" }}
						></div>
						<div
							className="colorCircle"
							style={{ background: "#0C1821" }}
						></div>
						<div
							className="colorCircle"
							style={{ background: "#0C1821" }}
						></div>
					</div>
					<p>Item in Stock/Delivery Details</p>
					<button>
						<a href="/">Add to Wishlist</a>
					</button>
					<button>
						<a href="/">Add to Bag</a>
					</button>
				</div>
				<div className="box3">
					<img src={blacksofa} alt="" />
					<img src={blacksofa} alt="" />
					<img src={blacksofa} alt="" />
					<img src={blacksofa} alt="" />
				</div>
			</main>

			<section>
				<div className="product-description">
					<h3>Description</h3>
					<p>
						Product Description - Lorem ipsum dolor sit amet, consectetur
						adipiscing elit donec consectetur semper nunc in molestie.
						<br />
						<br />
						Sed velit lectus, porttitor eu convallis sit amet, semper eget
						mauris. Integer in pulvinar mauris. Donec facilisis placerat magna
						sed cursus. Mauris vel tristique arcu. Duis congue orci id libero
						dictum sollicitudin. Curabitur dapibus arcu leo, condimentum tempus
						augue condimentum sed. Aliquam sed auctor ex. Nunc quis neque non
						eros dictum scelerisque ut ac urna. Etiam vel felis molestie,
						malesuada neque tempus, bibendum mauris
					</p>
				</div>
				<div className="product-dimensions">
					<h3>Dimensions &amp; Details</h3>
					<p>
						Product Description - Lorem ipsum dolor sit amet, consectetur
						adipiscing elit donec consectetur semper nunc in molestie.
						<br />
						<br />
						Sed velit lectus, porttitor eu convallis sit amet, semper eget
						mauris. Integer in pulvinar mauris. Donec facilisis placerat magna
						sed cursus. Mauris vel tristique arcu. Duis congue orci id libero
						dictum sollicitudin. Curabitur dapibus arcu leo, condimentum tempus
						augue condimentum sed. Aliquam sed auctor ex. Nunc quis neque non
						eros dictum scelerisque ut ac urna. Etiam vel felis molestie,
						malesuada neque tempus, bibendum mauris
					</p>
				</div>
			</section>

			<div className="product-maylike">
				<h3>You may also like</h3>
				<ProductDisplay />
			</div>
		</div>
	);
};

export default ProductPage;
