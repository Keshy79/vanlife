import React from 'react'
import brown from "../assets/Images/brown.png";
import van from "../assets/Images/van.png";
import red from "../assets/Images/red.png";
import carton from "../assets/Images/carton.png";
import white from "../assets/Images/white.png";
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
        <div className="col-lg-3 col-sm-2 col-sm-pt-3"><button className='simple'>Simple</button></div>
        <div className="col-lg-3 col-sm-2 col-sm-pt-3"><button className='simple'>Luxuy</button></div>
        <div className="col-lg-3 col-sm-2 col-sm-pt-3"><button className='simple'>Rugged</button></div>
        <div className="col-lg-3 col-sm-2 "><span className='clear text-decoration-underline '>Clear fitter</span></div>
      </div>
    </div>
</div>

    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-sm-6 col-lg-3 col-md-6 mb-4">
          <img src={brown} className='img-fluid' style={{width: '100%'}} alt="" />
          <div className='d-flex justify-content-between'>
            <p>Modest Explorer</p>
            <p>$60 <br /><span>/day</span></p>
          </div>
          <button className='btn btn text-white' style={{backgroundColor: "#e17654", marginTop: '-8%'}}>Simple</button>
        </div>

        <div className="col-sm-6 col-lg-3 col-md-6">
          <img src={van} className='img-fluid' style={{width: '100%'}} alt="" />
          <div className='d-flex justify-content-between'>
            <h4>Beach Bum</h4>
            <p>$80 <br /><span>/day</span></p>
          </div>
          <button className='btn btn text-white' style={{backgroundColor: "#115E59",
            marginTop: '-8%'}}>Rugged</button>
        </div>

        <div className="col-sm-6 col-lg-3 col-md-6">
          <img src={red} className='img-fluid' style={{width: '100%'}} alt="" />
          <div className='d-flex justify-content-between'>
            <h4>Reliable Red</h4>
            <p>$100 <br /><span>/day</span></p>
          </div>
          <button className='btn btn text-white' style={{backgroundColor: "black", marginTop: '-8%'}}>Luxury</button>
        </div>

        <div className="col-sm-6 col-lg-3 col-md-6">
          <img src={carton} className='img-fluid' style={{width: '100%'}} alt="" />
          <div className='d-flex justify-content-between'>
            <h4>Dreamfinder</h4>
            <p>$65 <br /><span>/day</span></p>
          </div>
          <button className='btn btn text-white' style={{backgroundColor: "#e17654", marginTop: '-8%'}}>Simple</button>
        </div>

        <div className="col-sm-6 col-lg-3 col-md-6">
          <img src={white} className='img-fluid' style={{width: '100%'}} alt="" />
          <div className='d-flex justify-content-between'>
            <h4>The Cruiser</h4>
            <p>$120 <br /><span>/day</span></p>
          </div>
          <button className='btn btn text-white' style={{backgroundColor: "black", marginTop: '-8%'}}>Luxury</button>
        </div>

        <div className="col-sm-6 col-lg-3 col-md-6 mb-5">
          <img src={pink} className='img-fluid' style={{width: '100%'}} alt="" />
          <div className='d-flex justify-content-between'>
            <h4>Green Wonder</h4>
            <p>$70 <br /><span>/day</span></p>
          </div>
          <button className='btn btn text-white' style={{backgroundColor: "#115E59", marginTop: '-8%'}}>Rugged</button>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Van