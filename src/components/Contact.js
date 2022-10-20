import React, { useState } from "react";
import contactButtons from "../data/contactButtons";
import ContactButton from "./ContactButton";
import contactDetails from "../data/contactDetails";
import ContactDetails from "./ContactDetails";

const Contact = () => {

  const [contactModal, setContactModal] = useState(0)

  const buttons = contactButtons.map(contactButtons => {
    return (
      <ContactButton 
      key={contactButtons.id}
      contactButtons={contactButtons}
      chooseButton={setContactModal}
      />
    )
})

  const contact = contactDetails.map(contactDetails => {
    return (
      <ContactDetails 
      key={contactDetails.id}
      contactDetails={contactDetails}
      chooseButton={setContactModal}
      />
    )
  })

    return (
        <div className="contact">
          {buttons}
          <div className="modal cntdetail" style={{display: contactModal ? "block" : "none"}}>{contact[contactModal - 1]}</div>
        </div>
    )
}

export default Contact;