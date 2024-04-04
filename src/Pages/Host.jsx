import React from 'react'
import { NavLink } from 'react-router-dom';
// import Logo from '../assets/Images/logo.png'



const Host = () => {
    const NavLinks = [
        { name: "Income", path: "/Host/Income" },
        { name: "Vans", path: "/Host/Vans" },
        { name: "Reviews", path: "/Host/Reviews" },
      ];
  return (
    <div>
        
        <div className='right-nav mx-6 items-baseline py-5 px-4 text-xs lg:space-x-5 space-x-5 md:text-sm' style={{backgroundColor: "#fff7ed"}}> 
        <NavLink to ={"/Host/Dashboard"} className={({isActive}) =>
          isActive ? "underline" : "no-underline"
        }>
          <div>
            <a href="">Dashboard</a>
          </div>
          </NavLink>

        <NavLink to ={"/Host/Income"} className={({isActive}) =>
          isActive ? "underline" : "no-underline"
        }>
          <div>
            <a href="">Income</a>
          </div>
          </NavLink>
          <NavLink to = {"/Host/Vans"} className={({isActive}) =>
          isActive ? "underline" : "no-underline"
        }>
          <div>
            <a href="">Vans</a>
          </div>
          </NavLink>
          <NavLink to = {"/Host/Reviews"} className={({isActive}) =>
          isActive ? "underline" : "no-underline"
        }>
          <div>
            <a href="">Reviews</a>
          </div>
          </NavLink>
          </div>

       

    </div>
  )
}

export default Host