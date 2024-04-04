import React from 'react'
import first from "../assets/Images/image 53.png";
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <>
        <div className='bg'>
          <img src={first} alt="" />
        </div>
        <div className='hero'>
          <h1>You got the travel plans, we got the travel vans.</h1>
          <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
          <NavLink to ={"/van"}>
          <button>Find your van</button>
          </NavLink>

        </div>
    </>
  )
}

export default Home;