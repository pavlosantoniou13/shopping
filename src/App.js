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
import panamera from './Components/assets/panamera.png'
import taycan from './Components/assets/taycan.png'


const cars = [
  { src: nineeleven, name: "911 turbo s", price: "200.100,00 €"},
  { src: cayenne, name: "cayenne", price:"115.600,00 €" },
  { src: boxster, name: "boxster", price:"83.700,00 €" },
  { src: panamera, name: "panamera", price:"138.100,00 €" },
  { src: taycan, name: "taycan", price:"92.400,00 €" }
]




function App() {

  const [cart, setcart] = useState([])
  const [subTotal, setSubTotal] = useState(0)

  const handleClick = (e) => {
    
    if(e.target.id !== "") {
      for(let i=0; i < cars.length; i++) {
        if(e.target.id === cars[i].name) {
         let car =   cars[i]
          addToCart(car)
        }
      }
    }

    sub()
  }

 
  function addToCart(car) {
    setcart((prevCart) => [...prevCart, car])
  }

  function sub() {

  }

 
  console.log(cart)

  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shop" element={<Shop handleClick={handleClick} cars={cars}  />} />
          <Route path="/Cart" element={<Cart cart={cart}  />} />
        </Routes>
      <Footer />  
    
    </BrowserRouter>
    
    
  );
}

export default App;
