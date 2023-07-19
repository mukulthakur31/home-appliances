import React from 'react'
import Top from '../../assets/topheading.jpg'
import './nav.css'

const Nav = () => {
  return (
    <div className='container' id='home' >
        <div className='top-headings'>
            <img src={Top} alt="" />
        <h1>Harvest</h1>
    </div>
        <hr />      
        <nav className='nav-container'>
               <a href="#home">Home</a>
              <a href="#shop">Shop</a>
              <a href="#benches">Benches</a>
              <a href="#blogs">Blogs</a>
              <a href="#register">Register</a>
        </nav>
    </div>
  )
}

export default Nav