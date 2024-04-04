import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react'
import Logo from '../assets/Images/logo.png'

const Navbar = () => {
  const [moreAdditionalLink, setmoreAdditionalLink] = useState(false)
  const toggleAdditionalLink = () => {
    setmoreAdditionalLink(!moreAdditionalLink)
  }
    const NavLinks = [
      { name: "About", path: "/about" },
      { name: "Vans", path: "/van" },
    ];
    return (
      <>
    <div className='max-w-8xl mx-auto px-4 sm:px-6 lg:px-8' style={{backgroundColor: "#fff7ed"}}>
        <div className='navbar items-center justify-between'>
          <div className='item-center'>
            <NavLink to='/' style={{ textDecoration: 'none', color: "black", fontSize: "30px", fontWeight: "bold"}}>
              #VANLIFE
            </NavLink>
          </div>
        <div className='right-nav mx-6 items-baseline text-xs lg:space-x-5 space-x-5 md:text-sm'> 
        {moreAdditionalLink && (
          <NavLink
          to='/Host/Dashboard'
          className={({isActive}) =>
          isActive ? "underline" : "no-underline"
        }>
            Host
          </NavLink>
        )}
          <NavLink to ={"/about"} className={({isActive}) =>
          isActive ? "underline" : "no-underline"
        }>
          <div>
            <a href="">About</a>
          </div>
          </NavLink>
          <NavLink to = {"/van"} className={({isActive}) =>
          isActive ? "underline" : "no-underline"
        }>
          <div>
            <a href="">Vans</a>
          </div>
          </NavLink>
        <NavLink to='/signin' onClick={toggleAdditionalLink} style={{ textDecoration: 'none', color: "black", fontSize: "30px", fontWeight: "bold"}}>
             <img src={Logo} alt="" />
            </NavLink>
        </div>
        </div>
    </div>
    
    </>
  )
}

export default Navbar