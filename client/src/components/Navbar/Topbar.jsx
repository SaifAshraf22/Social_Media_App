import React from 'react'
import './Topbar.css'
// import person from'/client/src/assets/person.jpg'
import {Search,Person,Chat,NotificationAdd} from'@mui/icons-material'
import { Link } from 'react-router-dom'
function Topbar() {
  return (
    <div className='topbarContainer'>
        <div className='topbarLeft'>
            <span className='logo'>Facebook</span>
        </div>
        <div className='topbarCenter'>
            <div className='searchbar'>
                <Search className='searchIcon'/>
                <input placeholder='Search for friends,posts or video'className='searchInput'/>
            </div>
        </div>
        <div className='topbarRight'>
            <div className='topbarLinks'>
                <span className='topbarLink'>Homepage</span>
                <Link to="/signup">
                <span className='topbarLink'>Log out</span>
                </Link>
            </div>
            <div className='topbarIcon'>
                <div className='topbarIconItem'>
                    <NotificationAdd/>
                <span className='topbarIconBadge'>5</span>
                </div>
                <div className='topbarIconItem'>
                    <Chat/>
                <span className='topbarIconBadge'>2</span>
                </div>
                <div className='topbarIconItem'>
                    <Person/>
                <span className='topbarIconBadge'>1</span>
                </div>
            </div>
            <img src="https://th.bing.com/th/id/R.da1ce16d58c86a77cfc5bdeb8d5faedc?rik=JEHfqc%2fff5c67A&pid=ImgRaw&r=0" className='topbarImg'/>
        </div>
    </div>
  )
}

export default Topbar