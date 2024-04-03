import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const NavLinks = [
      { name: "About", path: "/about" },
      { name: "Vans", path: "/van" },
      { name: "Sign-in", path: "/Signin" },
    ];
    return (
      <>
    <div className='max-w-8xl mx-auto px-4 sm:px-6 lg:px-8' style={{backgroundColor: "#fff7ed"}}>
        <div className='navbar items-center justify-between'>
          <div className='item-center'>
            <NavLink to='/' style={{ textDecoration: 'none', color: "black", fontSize: "30px", fontWeight: "bold"}}>
              #vanlife
            </NavLink>
          </div>
        <div className='mx-6 items-baseline text-xs lg:space-x-5 space-x-5 md:text-sm'> 
        {NavLinks.map((link)=>(
          <NavLink
            className={({ isActive }) =>
              isActive 
              ? " underline" 
              : "no-underline"
            }
            key={link.name}
            to={link.path}
            // style={{textDecoration: 'none', color: "#908d89"}}
            activeclassname="text-gray-300"
          >
            {link.name}
          </NavLink>
        )

        )}
        </div>
        </div>
    </div>
    
    </>
  )
}

export default Navbar