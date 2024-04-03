import React from 'react'
import { NavLink } from 'react-router-dom'

const Notfound = () => {
  return (
    <div className='container-fluid'>
        <div className="row">
        <div className='col-lg-12 col-sm-12 fw-bold mx-5 text-dark sorry'>
        <h2 style={{paddingTop: "10%"}}>Sorry, the page you were </h2>
        </div>
        
        <div className='col-lg-12 col-sm-12 fw-bold mx-5  text-dark notfound'>
        <h2>looking for was not found.</h2>
        </div>
        </div>
        <NavLink to='/'><button className='btn btn-dark w-75 mt-5 fw-bold mx-5 return' style={{padding: "10px 10px 20px 10px", borderRadius: "10px", marginBottom: "10.6%", }}>Return to home</button></NavLink>
        
    </div>
  )
}

export default Notfound