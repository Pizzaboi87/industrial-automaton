import React, { useState } from "react";
import productCards from "../data/productCards";
import ProductCard from "./ProductCard";
import productDetails from "../data/productDetails";
import Details from "./Details";

const Products = () => {
    
    const [modalNumber, setModalNumber] = useState("")

    const details = productDetails.map(productDetails => {
        return (
            <Details 
            key={productDetails.id}
            productDetails={productDetails}
            setClose={setModalNumber}
            />
        )
    })

    const cards = productCards.map(productCards => {
        return (
            <ProductCard 
            key={productCards.id}
            productCards={productCards}
            setChange={setModalNumber}
            />
        )
    })

    return (
        <div>
            <div className="products">{cards}</div>
            <div className="modal" style={{display: modalNumber ? "block" : "none"}}>{details[modalNumber - 1]}</div>
        </div>
    )
}

export default Products;