import React from "react";

const ProductCard = (props) => {

    const change = () => {
        props.setChange(props.productCards.id)
    }

    return (
        <div className="card">
	        <div className="imgback">
                <img onClick={change} className="zoom" src={props.productCards.src}  alt={props.productCards.altntitle} />
            </div>
            <div className="container">
              <h4><b>{props.productCards.altntitle}</b></h4> 
              <p className="price">{props.productCards.price}</p>
              <button className="cardbutton toggle" onClick={change}>Learn More</button>
            </div>
        </div>
        
    )
}

export default ProductCard;