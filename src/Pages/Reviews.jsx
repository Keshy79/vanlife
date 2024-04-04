import React from 'react'
import Host from './Host'
import Group from '../assets/Images/Group.png'
import star from '../assets/Images/star.png'
// import { NavLink } from 'react-router-dom';

const Reviews = () => {
  return (
    <div>
        <Host/>
        <div className='d-flex justify-content-between align-items-center p-3 pb-5'>
        <h1>Your reviews</h1>
        <p>last 30 days</p>
        </div>

        <img className='p-4' style={{width:'90%'}} src={Group} alt="" />
        <div className='p-4'>
          <p>Reviews (2)</p>
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />

          <p className='pt-4'>Elliot <span style={{color: "gray"}}>December 1, 2022</span></p>
          <p>The beach bum is such as awesome van! Such as comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!</p>
          <hr />
        </div>
        <div className='p-4'>
        <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />

          <p className='pt-4'>Sandy  <span style={{color: "gray"}}>November 23, 2022</span></p>
          <p>This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!</p>
          <hr />
        </div>
    </div>
  )
}

export default Reviews