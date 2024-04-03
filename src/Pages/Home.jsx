import React from 'react'
import first from "../assets/Images/image 53.png";

const Home = () => {
  return (
    <>
    <div style={{overflow: "hidden"}}>
        
        <div className='container-fluid px-0 text-white' >
       <img src={first} style={{height: "80vh", backgroundSize: "cover", position: "relative"}} className='img-fluid cover ' width="100%" alt=''/>
        <div className='row' id="rw" style={{position: "absolute"}}>
        <div className="col-sm-12 col-lg-12 col-md-12" id="text">
          <h1 className='travel'>You got the travel plans, we <br/> got the travel vans.</h1>
          <p className=''>Add adventure to your life by joining the #vanlife movement. <br/> Rent the perfect van to make your perfect road trip.</p>
        </div>
        <button className='van btn' id="text" style={{backgroundColor: "#ff8c38",  width: "100%", height: "60px", borderRadius: "10px", display: "flex", justifyContent: "center", alignItems: "center", color: "white"}}>Find your van</button>
        </div>
        </div>
    </div>
    </>
  )
}

export default Home;