import React from 'react'
import Navbar  from './Components/Navbar/Navbar'
import Admin from './Pages/Admin/Admin'
import AdminHome from './Pages/Admin/AdminHome'
import LoginSignup from './Pages/Admin/login/LoginSignup'

const App = () => {
  // <Routes>
  //         <Route path='/admin' element={<Admin/>}/>
  // </Routes>
  return (
    
    <div>
      <Navbar/>
      <Admin/>
    </div>
  )
}

export default App