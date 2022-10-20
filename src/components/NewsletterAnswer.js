import React from "react";

const NewsletterAnswer = (props) => {

    const closeAnswer = () => {
        props.reset({
            firstName: "",
            email: "",
            confirm: false
        })
    }

    return (
        <div className="modal--newsletter">
            <i className="close fa-solid fa-rectangle-xmark" onClick={closeAnswer}></i>
            <h1>Bad News...</h1>
            <img src="../images/error.png" alt="error"/>
            <h2>Dear {props.formData.firstName}!</h2>
            <h3>It seems, that your email address: {props.formData.email}<br />was not created in a galaxy far, far away. </h3>
            <h6>Or maybe it's just a fan-page of a movie, and everything went well. ¯\_(ツ)_/¯</h6>
        </div>
    )
}

export default NewsletterAnswer;