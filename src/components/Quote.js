import React from "react";

const Quote = (props) => {
    return (
        <div className="mySlides">
            <q>{props.customerQuote.quote}</q>
            <p className="author">{props.customerQuote.author}</p>
        </div>
    )
}

export default Quote;