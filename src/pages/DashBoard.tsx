import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Header from '../component/Header'
import SideBar from '../component/SideBar'
import User from '../component/User'
import UserDetails from '../component/UserDetails'
import '../styles/dashboard.scss'

const DashBoard = () => {
  return (
    <main id="dashboard">
        <Header/>
        <section className="page-body">
            <SideBar/>
            <section className="content">
                <Routes>
                    <Route path='user' element={<User/>} />
                    <Route path='user' element={<UserDetails/>} />
                </Routes>
            </section>
        </section>
    </main>
  )
}

export default DashBoard