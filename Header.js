import React from 'react'
import Navbar from "./Navbar"

const Header = () => {
    return (
        <>
        <div className="banner">
            <Navbar />
        <div className="banner_content">
        <div className="container">
                 <h1>Pizza Delivery</h1>
                <h3>Hmro Pizza
                     Ramro Pizza</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, illo.</p>
                <div className="banner__btn">
                    <a href="" className=" btn btn-smart">DeliveryNow</a>
                </div>
            </div>
        <img className="bannera" src={"./Images/bg.jpg"} alt={"Carlie Anglemire"}/>
        </div>
        </div>
            
        </>
    )
}

export default Header
