import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import './styles.css'
import './Components/cart.css'
import './Components/shop.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Shop from "./Components/Shop";
import Cart from "./Components/Cart";
import nineeleven from './Components/assets/911.webp'
import cayenne from './Components/assets/cayenne.png'
import boxster from './Components/assets/boxster.png'

const cars = [
  { src: nineeleven, name: "911 turbo s", price: "180.000$"},
  { src: cayenne, name: "cayenne", price:"110.000$" },
  { src: boxster, name: "boxster", }
]




function App() {

  const [cart, setcart] = useState([])

  const handleClick = (e) => {
    
    if(e.target.id !== "") {
      for(let i=0; i < cars.length; i++) {
        if(e.target.id === cars[i].name) {
         let car =   cars[i]
          addToCart(car)
        }
      }
    }

    
  }

 
  function addToCart(car) {
    setcart((prevCart) => [...prevCart, car])
  }

 
  console.log(cart)

  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shop" element={<Shop handleClick={handleClick}   />} />
          <Route path="/Cart" element={<Cart cart={cart}  />} />
        </Routes>
      <Footer />  
    
    </BrowserRouter>
    
    
  );
}

export default App;
