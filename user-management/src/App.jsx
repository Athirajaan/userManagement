import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Signin from "./pages/auth/Signin"
import Signup from "./pages/auth/Signup"
import Home from "./pages/user/Home"
import Profile from "./pages/user/Profile";
import Dashboard from "./pages/admin/Dashboard";
import AdminLogin from "./pages/admin/AdminLogin";


const App = () => {
  return (
    <BrowserRouter>
     <Routes>
      {/* user route */}
      <Route path='/login' element={<Signin/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/profile' element={<Profile/>}/>
      {/* admin routes */}
      <Route path='/admin/login' element={<AdminLogin/>}/>
      <Route path='/admin/dashboard' element={<Dashboard/>}/>

      <Route path="*" element={<div>404 - Page Not Found</div>} />
     </Routes>
    </BrowserRouter>
  )
}

export default App
