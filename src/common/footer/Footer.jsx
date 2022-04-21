import React from "react"
import "./style.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
            <h1>EcoMart</h1>
            <p>
            EcoKonnect(Eco Network App), an application visualizes the carbon footprint created by different aspects of daily life, particularly food consumption and public transportation, and encourages end-users to reduce it while also including a social interaction element.
            </p>
            <div className='icon d_flex'>
              
            </div>
          </div>

          <div className='box'>
            <h2></h2>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div className='box'>
            <h2>Customer Care</h2>
            <ul>
              <li>Help Center </li>
              <li>How to Buy </li>
              <li>Track Your Order </li>
              <li>Corporate & Bulk Purchasing </li>
              <li>Returns & Refunds </li>
            </ul>
          </div>
          <div className='box'>
            <h2>Contact Us</h2>
            <ul>
              <li>Email: ecokonnect.org@gmail.com</li>
              <li>Phone: +91-9136369441</li>
              <li>Phone: +91-7045292206</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
