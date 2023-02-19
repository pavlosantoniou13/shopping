import React from 'react'

export default function Cart( props ) {
  return (
    <div className='cart-container'>
      {props.cart.map(cart => {
        return  <h1>{cart.name}</h1>
      })}
      
    </div>
  )
}
