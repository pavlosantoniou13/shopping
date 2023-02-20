import React from 'react'


export default function Cart( props ) {
  return (
    <div className='cart-container'>

      <div className="shopping-cart">
        Shopping cart
      </div>

      {props.cart.map(cart => {
        return  <div className="items-container">
          <div className="card-car">
            <div className="car-button">
              <div className="cart-image"><img src={cart.src} alt="" /></div>
              <div className="remove"><button id={cart.name}  >Remove</button></div>
            </div>
              <div className="items-header">
                <div className='item' ><p>{cart.name}</p></div>
                <div className='item' ><p>{cart.price}</p></div>
              </div>
            </div>
          
          </div>
      })}
      <div className="clear-div">
          <button className='clear' onClick={props.clear} >Clear All</button>
        </div>
      <div className="sub-total">
        <div className="total">
          <h3>Subtotal</h3>
          <h2> {props.subTotal}00,00€ </h2>
        </div>
      </div>

    </div>
  )
}
