import React, { useState } from "react";
import NewsletterAnswer from "./NewsletterAnswer";

const Newsletter = () => {

  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    confirm: false
  })

  const handleChange = (event) => {
    setFormData(prevData => {
      return {
        ...prevData,
        [event.target.name]: event.target.value
      }
    })
  }

  const answer = <NewsletterAnswer formData={formData} reset={setFormData} />
  const validName = new RegExp(/^[A-ZÉÁÍÓÚÜŰÖŐ][A-ZÉÁÍÓÚÜŰÖŐa-záéíóöőúüű ]*/)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (validName.test(formData.firstName)){
    setFormData(prevData => {
      return {
        ...prevData,
        confirm: true
      }
    })
  } else { 
    alert("Enter a valid name, starts with capital letter.")
  }
}

    return (
        <div className="newsletter">
        <div className="modal" style={{display: formData.confirm ? "block" : "none"}}>{answer}</div>
          <form id="form" onSubmit={handleSubmit}>
            <fieldset>
              <legend>Subscribe For Our Monthly Newsletter!</legend>
              <input 
                type="text" 
                placeholder="Your first name" 
                onChange={handleChange} 
                value={formData.firstName} 
                name="firstName" 
                required 
                maxLength={20}
              />
              
              <input
                type="email" 
                placeholder="Your email address" 
                onChange={handleChange} 
                value={formData.email} 
                name="email" 
                required
                maxLength={64}
              />
              
              <button className="submit toggle">Subscribe!</button>
            </fieldset>
          </form>
        </div>
    )
}

export default Newsletter;