import React from 'react'
import './Footer.css'
import facebook1 from '../Assets/facebook1.png'
import whatsapp9 from '../Assets/whatsapp9.png'
import instagram from '../Assets/instagram.png'




const Footer = () => {
  return (
    
    <div className='footer'>
        

        <ul className="footer-links">About
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Careers</li>
            

        </ul>
        <ul className="footer-links">Contact
            <li>Payments</li>
            <li>Shipping</li>
            <li>Faq</li>
            

        </ul>
        <ul className="footer-links">Customer Policy
            <li>Cancelation & Returns</li>
            <li>Terms of Use</li>
            <li>Security & Privacy</li>
            

        </ul>
    
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={instagram} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={facebook1} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={whatsapp9} alt="" />
            </div>
        </div>
        
    </div>
  )
}

export default Footer