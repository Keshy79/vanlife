import React from 'react'
import brown from "../assets/Images/brown.png";
import van from "../assets/Images/van.png";
import pink from "../assets/Images/pink.png";
import { NavLink } from 'react-router-dom';
import Host from './Host';
// import star from '../assets/Images/star.png'

const Vans = () => {
  return (
    <>
    <div>
    <Host/>
    <div className='p-4 listed'>
        <h1 className='pt-2 pb-5'>Your listed vans</h1>
    <div className="dev mb-4 ">
      <NavLink to ={"/Host/Vans/Modest"} style={{color: "black", fontWeight: "800", textDecoration: "none"}}>
       <div className='d-flex align-items-center '>
            <div><img src={brown} alt="" /></div>
            <div className='ms-4'>
            <h2>Modest Explorer</h2>
                <span className='fs-4' style={{color: "gray"}}>$60/day</span>
            </div>
            </div>
            </NavLink>
    </div>

    <div className="dev mb-4">
    <div className='d-flex align-items-center '>
            <div><img src={pink} alt="" /></div>
            <div className='ms-4'>
            <h2>Beach Bum</h2>
                <span className='fs-4' style={{color: "gray"}}>$80/day</span>
            </div>
            </div>
    </div>

    <div className="dev mb-4">
    <div className='d-flex align-items-center '>
            <div><img src={van} alt="" /></div>
            <div className='ms-4'>
            <h2>Green Wonder</h2>
                <span className='fs-4' style={{color: "gray"}}>$70/day</span>
            </div>
            </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Vans