import React from "react";

const ContactButton = (props) => {

    const chooseContact = () => {
        props.chooseButton(props.contactButtons.nr)
    }

    return (
            <button 
                id={props.contactButtons.id}
                onClick={chooseContact}
                className="contactbtn toggle"
                title={props.contactButtons.title}
                >
                <i className={props.contactButtons.icon}></i>
                <h2 className="contact-details">{props.contactButtons.txt}</h2>
            </button>
    )
}

export default ContactButton;