import React, { Component } from 'react'
import './CSS/Cart.css'
import Footer from '../Components/Footer/Footer'

export const Cart = () => {
  return (
<div className="cart">
  <table>
    <tr>
      <th>Product</th>
      <th>Quantity</th>
      <th>Subtotal</th>
    </tr>
    <td className='ab'>Null</td>
    <td><input className='abc' type="number" value="0" /></td>
    <td>$0</td>
  </table>
</div>  )
}
export default Cart