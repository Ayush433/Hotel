import React from "react";
import app from "./App.css";
import Header from "./Components/Header.js";
import About from "./Components/About.js";
import Shop from "./Components/Shop.js";
import Menu from "./Components/Menu.js";
import Clients from "./Components/Clients.js";
import Prices from "./Components/Prices.js";
function App() {
  return (
    <div>
      <Header />
      <About />
      <Shop />
      <Menu />
      <Clients />
      <Prices />
      {/* <img className="profile-photo" src={"./Images/food.jpeg"} alt={"Carlie Anglemire"}/> */}
    </div>);
}

export default App;
