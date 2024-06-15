import React, { useState } from 'react'
import './Navbar.css'
import carticon1 from '../Assets/carticon1.png' 
import { Link } from 'react-router-dom'
const Navbar=() => {
    const [menu,setMenu]=useState("Electronics")
    return (
        <div className='navbar'>
            <div className="nav-logo">
                <p>EasyBuy</p>
            </div>
        <ul className="nav-menu">
        <li onClick={()=>{setMenu("Home")}}><Link style={{textDecoration:'none'}} to='/'>Home</Link>{menu==="Home"?<hr/>:<></>} </li>
        <li onClick={()=>{setMenu("Electronics")}}><Link style={{textDecoration:'none'}} to='/Electronics'>Electronics</Link>{menu==="Electronics"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Fashion")}}><Link style={{textDecoration:'none'}} to='/Fashion'>Fashion</Link>{menu==="Fashion"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Grocery")}}><Link style={{textDecoration:'none'}} to='/Grocery'>Grocery</Link>{menu==="Grocery"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
           

            <div class="search-box">
                <div class="row">

                <input className='b' type="text" id="input-box" placeholder='Search Here' />
            </div>
                  </div>            
              <Link to='/Sign in'> <button className="a">Sign in</button></Link>
            <Link to='/cart'><img class="cartimg" src={carticon1} alt="" /></Link>
            <div className="nav-cart-count">0</div>
        </div>
        </div>

    )
}

export default Navbar