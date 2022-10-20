import { useEffect, useState } from "react";
import customerQuote from "../data/customerQuote";
import Quote from "./Quote";

const Customers = () => {

    const quote = customerQuote.map(customerQuote => {
        return (
            <Quote 
            key={customerQuote.id}
            customerQuote={customerQuote}
            />
        )
    })
 
    const [slide, setSlide] = useState(0)

    useEffect(() => {

        let current = slide;
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
      
        if (current > slides.length - 1) {
            current = 0;
            setSlide(current)
        }
        else if (current < 0) {
            current = slides.length - 1
            setSlide(current)
        }

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        slides[current].style.display = "block";  
        dots[current].className += " active";
    }, [slide])

    const dots = customerQuote.map(item => {
        return (
            <span key={item.id} className="dot" onClick={() => setSlide(`${item.id}`- 1)}></span>
        )
    })

    return (
        <div className="customers">
            <div className="slideshow-container">
                    {quote}
                <p className="prev" onClick={() => setSlide(slide-1)}>❮</p>
                <p className="next" onClick={() => setSlide(slide+1)}>❯</p>
            </div>

            <div className="dot-container">
                {dots}
            </div>
        </div>
    )
}

export default Customers;