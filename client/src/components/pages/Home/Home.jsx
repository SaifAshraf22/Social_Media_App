import React from 'react'
import Topbar from '../../Navbar/Topbar'
import './home.css'
import Feeds from '../Feeds/Feeds'
import Sidebar from '../Sidebar/Sidebar'
import Rightbar from '../Rightbar/Rightbar'

function Home() {
  return (
    <>
    <Topbar/>
      <div className='homeContainer'>
        <Sidebar/>
        <Feeds/>
        <Rightbar/>
      </div>
      </>
  )
}

export default Home