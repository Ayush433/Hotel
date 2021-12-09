import React from 'react'

const Menu = () => {
    return (
        <div className="menu">
            <div className="containers">
                <div className="row">
                  <div className="col-6">
                    <div className="menu__img">
                        <img src="/Images/pizu.jpeg" alt="pizza" />
                    </div>
                    </div>
                    <div className="col-6 p-26">
                    <h3>The Pizza Menu</h3>
                <h1>CHICAGO THIN CRUST</h1>
                <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum exercitationem maiores recusandae, est fuga repellendus! Dolorum molestiae illo recusandae esse!</p>
                <div className="menu__btn">
                    <a href="#" className="btn btn-smarts">Read More</a>
                </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu
