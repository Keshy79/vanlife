import React from 'react'
import Host from './Host'
import { NavLink } from 'react-router-dom';
import chart from '../assets/Images/chart.png'


const Income = () => {
  return (
    // <Host/>
    <div>
        <Host/>
        <div className='p-4 income'>
        <h1>Income</h1>
            <p className='pt-5'>Last <span><NavLink to ={"/Host/Income"} style={{color: "gray", fontWeight: "800"}}>30 days</NavLink></span></p>
            <h1 style={{fontWeight: "900"}}>$2,260</h1>

            <img className='pt-5' style={{width: "90%"}} src={chart} alt="" />
            <div className='d-flex justify-content-between align-items-center p-3'>
                <p style={{fontWeight: "800", fontSize: "20px"}}>Your transactions (3)</p>
                <p className='align-content-center  '>Last 30 days</p>
            </div>
            <div className="container-fluid pt-4 ">
                <div className='d-flex justify-content-between align-items-center p-3 mb-4 ' style={{backgroundColor: "white", borderRadius: "10px"}}>$720 <span>1/12/22</span></div>
                <div className='d-flex justify-content-between align-items-center p-3 pt-4 mb-4' style={{backgroundColor: "white", borderRadius: "10px"}}>$560 <span>1/11/22</span></div>
                <div className='d-flex justify-content-between align-items-center p-3' style={{backgroundColor: "white", borderRadius: "10px"}}>$980 <span>23/11/22</span></div>
            </div>
        
        </div>


    </div>
  )
}

export default Income