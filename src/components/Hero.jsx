import React from "react";
import Amazon from "../images/amazon.png";
import Flipkart from "../images/flipkart.svg";
import Shoe from "../images/shoe_image.png";

export default function Hero() {
  return (
    <main className="hero">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>

        <div className="hero-button">
          <button>Shop now</button>
          <button className="category-button">Category</button>
        </div>

        <div className="shopping">
          <p>Available On</p>

          <div className="brand-icons">
            <img src={Amazon} alt="amazon-logo" className="amazon-logo" />
            <img src={Flipkart} alt="flipkart-logo" className="flipkart-logo" />
          </div>
        </div>
      </div>

      <div className="hero-image">
        <img src={Shoe} alt="shoe-image" className="shoe-image" />
      </div>
    </main>
  );
}
