import React from "react";

const ContactDetails = (props) => {

    const closeContact = () => {
        props.chooseButton("")
    }

    return (
        <>
            <i className="close fa-solid fa-rectangle-xmark" onClick={closeContact}></i>
            <h1 className="contact--title">{props.contactDetails.title}</h1>
            {props.contactDetails.src && <img className="contact--img" src={props.contactDetails.src} alt="contactimg" />}
            {props.contactDetails.email && <h4><a href="mailto:contact@peterweiser.com">{props.contactDetails.email}</a></h4>}
            {props.contactDetails.id && <div>{props.contactDetails.video}</div>}
        </>
    )
}

export default ContactDetails;