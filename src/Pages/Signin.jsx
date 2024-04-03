import React from 'react'

const Signin = () => {
  return (
    <div>
      <h2 className='text-center mt-5 '>Sign in to your account</h2>

      <div className="container-fluid mt-5 justify-content-center mx-auto">
        <div className="row mx-auto ">
        <input className='my-2' style={{width: "100%"}} type="email" placeholder='Email Address' />

        <input style={{width: "100%"}} type="password" placeholder='Password' />
        </div>
       <button className='btn mt-5' style={{width: "100%", backgroundColor: "#ff8c38"}}>Sign in</button>
      </div>
      <p className='text-center mt-5'>Don’t have an account? <span style={{color: "#ff8c38"}}>Create one now</span></p>
    </div>
  )
}

export default Signin