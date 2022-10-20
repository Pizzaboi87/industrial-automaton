import React from "react";

const Details = (props) => {

    const close = () => {
        props.setClose("")
    }

    return (
            <>
                <i className="close fa-solid fa-rectangle-xmark" onClick={close}></i>
                <h4 className="details--title">{props.productDetails.title}</h4>
                <div className="details">
                    <img src={props.productDetails.img} alt="product" />
                    <div className="parameters">
                        <p className="price">{props.productDetails.price}</p>
                        {props.productDetails.details}
                    </div>
                </div>
            </>
    )
}

export default Details;