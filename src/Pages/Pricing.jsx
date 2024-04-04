import Host from './Host'
import React from 'react'
import brown from "../assets/Images/brown.png";
import arrow from "../assets/Images/arrow.png";
import { NavLink } from 'react-router-dom';
import Modest from './Modest';

const Pricing = () => {
    const NavLinks = [
        { name: "Pricing", path: "/Host/Vans/Pricing" },
        { name: "Photos", path: "/Host/Vans/Photos" },
       
      ];
  return (
    <div>
        <Host/>

        <div className='d-flex align-items-center p-3' style={{backgroundColor: "#FFF7ED"}}>
            <img style={{width: "25px", height: "15px", alignItems:"center"}} src={arrow} alt="" />
            <NavLink to ={"/Van"} style={{color: "black", fontWeight: "800", textDecoration: "none"}}>
        <p className='px-3 pt-3 ' style={{textDecoration: "underline"}}>Back to all vans</p>
            </NavLink>
        </div>

        <div className='d-flex align-items-center '>
            <div><img className='pt-4 px-4 mb-5' style={{width: "250px", height: "250px"}} src={brown} alt="" /></div>
            <div className=''>
            <button className='btn btn text-white' style={{backgroundColor: "#115E59", marginTop: '-30%'}}>Rugged</button>
            <h2 className='m'>Modest Explorer</h2>
                <span className='fs-4' style={{color: "gray"}}>$60/day</span>
            </div>
            </div>

            <div className='right-nav mx-6 items-baseline py-5 px-4 text-xs lg:space-x-5 space-x-5 md:text-sm' style={{backgroundColor: "white"}}> 
        <NavLink to ={"/Host/Vans/Modest"} className={({isActive}) =>
          isActive ? "underline" : "no-underline"
        }>
          <div>
            <a className='' href="">Details</a>
          </div>
          </NavLink>

        <NavLink to ={"/Host/Vans/Pricing"} className={({isActive}) =>
          isActive ? "underline" : "no-underline"
        }>
          <div>
            <a href="">Pricing</a>
          </div>
          </NavLink>
          <NavLink to = {"/Host/Vans/Photo"} className={({isActive}) =>
          isActive ? "underline" : "no-underline"
        }>
          <div>
            <a href="">Photos</a>
          </div>
          </NavLink>

          </div>
            {/* <Modest/> */}

            <h5 className='fw-bold fw-400 px-4'>$60.00 <span className='fw-normal fw-400 '>/day</span></h5>
        </div>
  )
}

export default Pricing