import React from 'react'
import AdminHeader from '../components/AdminHeader'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <>
    <AdminHeader/>
    <main className='p-4'>
        <Outlet/>
    </main>
    </>
  )
}

export default AdminLayout