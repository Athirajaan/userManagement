import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import ToastProvider from "./components/toastProvider";
import 'react-toastify/dist/ReactToastify.css';
import Signin from "./pages/auth/Signin"
import Signup from "./pages/auth/Signup"
import Home from "./pages/user/Home"
import Profile from "./pages/user/Profile";
import Dashboard from "./pages/admin/Dashboard";
import AdminLogin from "./pages/admin/AdminLogin";
import Header from "./components/Header";
import UserLayout from "./layouts/UserLayout";
import AdminLayout from "./layouts/AdminLayout";

const App = () => {
  return (
   
    <BrowserRouter>
     <ToastProvider/>
     <Routes>
      {/* auth route */}
      <Route path='/login' element={<Signin/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login-admin' element={<AdminLogin/>}/>

       {/* user routes */}
       <Route element={<UserLayout/>}>
         <Route path='/' element={<Home/>}/>
         <Route path='/profile' element={<Profile/>}/>
       </Route>
         
      {/* admin routes */}
      <Route element={<AdminLayout/>}>
         <Route path='/admin/dashboard' element={<Dashboard/>}/>
      </Route>
     
      {/* 404 */}
      <Route path="*" element={<div>404 - Page Not Found</div>} />
     </Routes>
    </BrowserRouter>
  )
}

export default App
