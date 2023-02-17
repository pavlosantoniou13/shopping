import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import './styles.css'
import './Components/cart.css'
import './Components/shop.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Nav } from "react-bootstrap";
import Shop from "./Components/Shop";
import Cart from "./Components/Cart";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      <Footer />  
    
    </BrowserRouter>
    
    
  );
}

export default App;
