import Story from "./Story";
import Products from "./Products";
import Customers from "./Customers";
import Contact from "./Contact";
import Newsletter from "./Newsletter";

const Main = () => {

    return (
        <div className="main">
            <div className="territory">
                <div className="content">
                    <h1 className="title" id="story">OUR STORY</h1>
                    <Story />
                    <h1 className="title" id="product">OUR PRODUCTS</h1>
                    <Products />
                    <h1 className="title" id="customer">OUR CUSTOMERS</h1>
                    <Customers />
                    <h1 className="title" id="contact">OUR CONTACT DETAILS</h1>
                    <Contact />
                    <Newsletter />
                    <p className="make">Designed by Peter Weiser - 2022</p>
                    
                </div>
            </div>
            
        </div>
    )
}

export default Main;