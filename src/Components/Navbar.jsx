import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const NavLinks = [
        { name: "#VANLIFE", path: "/" },
        { name: "About", path: "/about" },
        { name: "Vans", path: "/van" },
        { name: "Sign-in", path: "/Signin" },
      ];
  return (
    <>
    <div className='px-5 py-3 text-black' style={{backgroundColor: "#fff7ed"}}>
        <ul className='navbar'>
        <div className='nav flex-row gap-5'> 
        {NavLinks.map((link)=>(
          <NavLink
            className={({ isActive }) =>
              isActive 
              ? "fw-bold text-dark text-decoration-underline" 
              : null
            }
            key={link.name}
            to={link.path}
            style={{textDecoration: 'none', color: "#908d89"}}
          >
            <li>{link.name}</li>
          </NavLink>
        )

        )}
        </div>
    </ul>
    </div>
    
    </>
  )
}

export default Navbar