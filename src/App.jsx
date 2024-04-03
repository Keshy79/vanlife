import React from 'react'
import Navbar from './Components/Navbar'
import Home from "./Pages/Home"
import About from "./Pages/About"
import Van from "./Pages/Van"
import Signin from "./Pages/Signin"
import Footer from "./Pages/Footer"
import Notfound from './Pages/Notfound'
import Host from './Pages/Host'
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
      <Route path='*' element={<Notfound />} />
      {/* <Route path='/Footer' element={<Footer />} /> */}
    </Routes>
    <Footer />
  </>
   
  )
}

export default App