import React from 'react'
import porsheLogo from "./assets/porsche-logo.jpg"
import house from './assets/house-solid.svg'
import cart from './assets/cart-shopping-solid.svg'
import bag from './assets/bag-shopping-solid.svg'
import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    <div className="navContainer">
        <div className="navbar">
            <div className="logo">
                <Link to='/' >
                <img src={porsheLogo} alt="" />
                </Link>
                
            </div>
            <div className="links">
                <ul className='navItems' >
                    <Link to='/' className='nav-item'>
                        <img src={house} alt="" />
                        <a href="">Home</a>
                    </Link>
                </ul>
                <ul className='navItems' >
                    <Link to='/Shop' className='nav-item'>
                        <img src={bag} alt="" />
                        <a href="">Shop</a>
                    </Link>
                </ul>
                <ul className='navItems' >
                    <Link to='/Cart' className='nav-item'>
                        <img src={cart} alt="" />
                        <a href="">Cart</a>
                    </Link>
                </ul>
            </div>
        </div>
    </div>
   
  )
}
