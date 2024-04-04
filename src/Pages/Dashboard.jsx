import React from 'react'
import Host from './Host'
import { NavLink } from 'react-router-dom';
// import Income from './Income';
import brown from "../assets/Images/brown.png";
import star from '../assets/Images/star.png'
import van from "../assets/Images/van.png";
import pink from "../assets/Images/pink.png";

const Dashboard = () => {
  return (
    <div>
        <Host/>
         <div className='container-fluid welcome'>
            <div className='row px-4 pt-4 '>
            <h1>Welcome!</h1>
            <div className='d-flex justify-content-between'>
            <p>Income last <span><NavLink to ={"/Host/Income"} style={{color: "gray", fontWeight: "800"}}>30 days</NavLink></span></p>
          <NavLink to ={"/Host/Income"} style={{color: "black", fontWeight: "800", textDecoration: "none"}}>
            <p className='details'>Details</p>
            </NavLink>
            </div>
            <h2>$2,260</h2>
            </div>
        </div>
        
        <div className='container-fluid score px-4 pt-4'>
           <div className='d-flex'>
            <h2>Review score </h2>
            <img src={star} alt="" />
            <span>5.0/5</span>
           </div>
            <p className='details justify-content-between '><NavLink to ={"/Host/Reviews"} style={{color: "black", fontWeight: "800", textDecoration: "none"}}>Details</NavLink></p>
        </div>

        <div className='container-fluid host'>
            <div className='px-4 pt-4 d-flex all'>
            <p className='listed'>Your listed vans</p>
            <p className='view'><NavLink to ={"/Van"} style={{color: "black", fontWeight: "800", textDecoration: "none"}}>View all</NavLink></p>
            </div>
        <div className='dev mb-5'>
            <div className='d-flex align-items-center '>
            <div><img src={brown} alt="" /></div>
            <div className='ms-4'>
            <h2>Modest Explorer</h2>
                <span className='fs-4'>$60/day</span>
            </div>
            </div>
            <div className='fw-bold fs-5'>
                Edit
            </div>
        </div>

        <div className='dev mb-5'>
            <div className='d-flex align-items-center '>
            <div><img src={van} alt="" /></div>
            <div className='ms-4'>
            <h2>Beach Bum</h2>
                <span className='fs-4'>$80/day</span>
            </div>
            </div>
            <div className='fw-bold fs-5'>
                Edit
            </div>
        </div>

        <div className='dev mb-5'>
            <div className='d-flex align-items-center '>
            <div><img src={pink} alt="" /></div>
            <div className='ms-4'>
            <h2>Green Wonder</h2>
                <span className='fs-4'>$70/day</span>
            </div>
            </div>
            <div className='fw-bold fs-5'>
                Edit
            </div>
        </div>
        </div>

    </div>
  )
}

export default Dashboard