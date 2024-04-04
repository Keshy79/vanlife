import React from 'react'
import Navbar from './Components/Navbar'
import Home from "./Pages/Home"
import About from "./Pages/About"
import Van from "./Pages/Van"
import Signin from "./Pages/Signin"
import Footer from "./Pages/Footer"
import Dashboard from './Pages/Dashboard'
import Notfound from './Pages/Notfound'
import Income from './Pages/Income'
import Reviews from './Pages/Reviews'
import Vans from './Pages/Vans'
import Host from './Pages/Host'
import Pricing from './Pages/Pricing'
import Photos from './Pages/Photo'
import Modest from './Pages/Modest'
import { Navigate, Route, Routes } from 'react-router-dom'


const App = () => {
  return (
  <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path="/Home" element={<Navigate to="/" />} />
      <Route path='/about' element={<About />} />
      {/* <Route path='/Home' element={<Home />}></Route> */}
      <Route path='/van' element={<Van />} />
      <Route path='/Signin' element={<Signin />} />
      <Route path='/Host' element={<Host />} />
      <Route path='/Host/dashboard' element={<Dashboard />} />
      <Route path='/Host/Income' element={<Income />} />
      <Route path='/Host/Reviews' element={<Reviews />} />
      <Route path='/Host/Vans' element={<Vans />} />
      <Route path='/Host/Vans/Modest' element={<Modest />} />
      <Route path='/Host/Vans/Pricing' element={<Pricing />} />
      <Route path='/Host/Vans/Photos' element={<Photos />} />
      <Route path='*' element={<Notfound />} />
      {/* <Route path='/Footer' element={<Footer />} /> */}
    </Routes>
    <Footer />
  </>
   
  )
}

export default App