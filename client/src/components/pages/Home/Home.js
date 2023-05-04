import React from 'react'
import Topbar from '../../Navbar/Topbar'
import './home.css'
import Feeds from '../Feeds/Feeds'

function Home() {
  return (
    <>
    <Topbar/>
      <div className='homeContainer'>
        <Feeds/>
      </div>
      </>
  )
}

export default Home