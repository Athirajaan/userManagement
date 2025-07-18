import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
  return (
    <>
    <Header/>
    <main className='flex-1'>
        <Outlet/>
    </main>
    </>
  )
}

export default UserLayout