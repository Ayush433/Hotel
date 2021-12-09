import React from 'react'

const About = () => {
    return (
        <div className="about">
            <div className="containers">
                <div className="row">
                    <div className="col-6 p-25">
                    <h3>About Us</h3>
                <h1 >The Pizza Menu</h1>
                <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum exercitationem maiores recusandae, est fuga repellendus! Dolorum molestiae illo recusandae esse!</p>
                <div className="about__btn">
                    <a href="#" className="btn btn-smarts">Read More</a>
                </div>
                    </div>
                    <div className="col-6">
                    <div className="about__img">
                        <img src="/Images/pizza.jpeg" alt="pizza" />
                    </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default About
