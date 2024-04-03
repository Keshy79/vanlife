import React from 'react'
import second from "../assets/Images/image 54.png";


const About = () => {
  return (
    <div className='container-fluid px-0 overflow-hidden'>
        <div className='row'>
        <div className='col-sm-12 col-lg-12 col-md-12'>
        <img  src={second} className='img-fluid' style={{width: "100%",height: "45vh"}} alt="" />
        </div>
        </div>

        <div className='col-sm-12 col-lg-12 col-md-12 pt-4 pb-4 p-3 '>
            <h2 >Don’t squeeze in a sedan when you could relax in a van.</h2>
        </div>
        <div className='col-sm-12 col-lg-12 col-md-12 p-4 '>
            <h5>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure <br /> your travel plans can go off without a hitch. <br />
            (Hitch costs extra 😉)</h5>

            <h4 className='pt-4'>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</h4>
        </div>

        <div className='col-sm-12 col-lg-12 col-md-12 p-4 px-2 fw-bolder' style={{backgroundColor: "#ffcc8d", borderRadius: "10px", width: "90%", marginBottom: "40px", marginLeft: "25px"}}>
            <p className='mx-5'>Your destination is waiting. <br />
           Your van is ready</p>

           <button className='btn btn-dark mx-5'>Explore our vans</button>
        </div>

        
    </div>
  )
}

export default About