import React from 'react'
import brown from "../assets/Images/brown.png";
import van from "../assets/Images/van.png";
import red from "../assets/Images/red.png";
import pink from "../assets/Images/pink.png";


const Van = () => {
  return (
    <>
    <div className='container-fluid'>
    <div>
        <h3 className='explore'>Explore our van options</h3>
    </div>

    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3 col-sm-2"><button className='simple'>Simple</button></div>
        <div className="col-lg-3 col-sm-2"><button className='simple'>Luxuy</button></div>
        <div className="col-lg-3 col-sm-2"><button className='simple'>Rugged</button></div>
        <div className="col-lg-3 col-sm-2"><span className='clear text-decoration-underline '>Clear fitter</span></div>
      </div>
    </div>
</div>

    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-sm-6 col-lg-3 col-md-6 mb-4">
          <img src={brown} className='img-fluid' style={{width: '%'}} alt="" />
          <div className='d-flex justify-content-between'>
            <h4>Modest Explorer</h4>
            <p>$60 <br /><span>/day</span></p>
          </div>
          <button className='btn btn text-white' style={{backgroundColor: "#e17654", marginTop: '-8%'}}>Simple</button>
        </div>
        <div className="col-sm-6 col-lg-3 col-md-6">
          <img src={brown} className='img-fluid' style={{width: '%'}} alt="" />
          <div className='d-flex justify-content-between'>
            <h4>Modest Explorer</h4>
            <p>$60 <br /><span>/day</span></p>
          </div>
          <button className='btn btn text-white' style={{backgroundColor: "#e17654", marginTop: '-8%'}}>Simple</button>
        </div>
        <div className="col-sm-6 col-lg-3 col-md-6">
          <img src={brown} className='img-fluid' style={{width: '%'}} alt="" />
          <div className='d-flex justify-content-between'>
            <h4>Modest Explorer</h4>
            <p>$60 <br /><span>/day</span></p>
          </div>
          <button className='btn btn text-white' style={{backgroundColor: "#e17654", marginTop: '-8%'}}>Simple</button>
        </div>
        <div className="col-sm-6 col-lg-3 col-md-6">
          <img src={brown} className='img-fluid' style={{width: '%'}} alt="" />
          <div className='d-flex justify-content-between'>
            <h4>Modest Explorer</h4>
            <p>$60 <br /><span>/day</span></p>
          </div>
          <button className='btn btn text-white' style={{backgroundColor: "#e17654", marginTop: '-8%'}}>Simple</button>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Van