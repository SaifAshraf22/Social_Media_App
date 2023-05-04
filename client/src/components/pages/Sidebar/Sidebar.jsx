import React from 'react'
import './sidebar.css'
import { Bookmark, Chat, Event, Group, HelpOutline, RssFeed, School, VideoCall, WorkOutline } from '@mui/icons-material'
function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebarWrapper'>
                <ul className='sidebarList'>
                    <li className='sidebarListItem'>
                        <RssFeed className='sidebarIcon' />
                        <span className='sidebarListItemText'> Feeds</span>
                    </li>
                    <li className='sidebarListItem'>
                        <Chat className='sidebarIcon' />
                        <span className='sidebarListItemText'> Chats</span>
                    </li>
                    <li className='sidebarListItem'>
                        <Group className='sidebarIcon' />
                        <span className='sidebarListItemText'> Groups</span>
                    </li>
                    <li className='sidebarListItem'>
                        <Bookmark className='sidebarIcon' />
                        <span className='sidebarListItemText'> Bookmarks</span>
                    </li>
                    <li className='sidebarListItem'>
                        <WorkOutline className='sidebarIcon' />
                        <span className='sidebarListItemText'> Jobs</span>
                    </li>
                    <li className='sidebarListItem'>
                        <VideoCall className='sidebarIcon' />
                        <span className='sidebarListItemText'> Videos</span>
                    </li>
                    <li className='sidebarListItem'>
                        <HelpOutline className='sidebarIcon' />
                        <span className='sidebarListItemText'> Questions</span>
                    </li>
                    <li className='sidebarListItem'>
                        <Event className='sidebarIcon' />
                        <span className='sidebarListItemText'> Events</span>
                    </li>
                    <li className='sidebarListItem'>
                        <School className='sidebarIcon' />
                        <span className='sidebarListItemText'> Courses</span>
                    </li>
                </ul>
                <button className='sidebarButton'>Show More</button>
                <hr className='sidebarHr' />
                <h5>Friends :</h5>
                <ul className='sidebarFriendList'>
                    <li className='sidebarFriend'>
                        <img className='sidebarFriendImg' src='https://th.bing.com/th/id/OIP.eD3e6ZbiSY0fkFbgDsOktgAAAA?pid=ImgDet&rs=1' alt='' />
                        <span className='sidebarFriendName'>M.Aboutrika</span>                    
                    </li>
                    <li className='sidebarFriend'>
                        <img className='sidebarFriendImg' src='https://th.bing.com/th/id/OIP.0PEorHWydpiGQCXjQ0ElzQHaEK?pid=ImgDet&w=207&h=116&c=7&dpr=1.3' alt='' />
                        <span className='sidebarFriendName'>M.Elneny</span>                    
                    </li>
                    <li className='sidebarFriend'>
                        <img className='sidebarFriendImg' src='https://th.bing.com/th/id/OIP.YnMDa-OEH4A0KOg7VD1xuQHaEK?pid=ImgDet&rs=1' alt='' />
                        <span className='sidebarFriendName'>M.Trezeguet</span>                    
                    </li>
                    <li className='sidebarFriend'>
                        <img className='sidebarFriendImg' src='https://s.hs-data.com/bilder/spieler/gross/368977.jpg' alt='' />
                        <span className='sidebarFriendName'>O.Marmosh</span>                    
                    </li>
                    <li className='sidebarFriend'>
                        <img className='sidebarFriendImg' src='https://www.kingfut.com/wp-content/uploads/2018/03/GettyImages-937198518-610x406.jpg' alt='' />
                        <span className='sidebarFriendName'>A.Hegazy</span>                    
                    </li>
                    <li className='sidebarFriend'>
                        <img className='sidebarFriendImg' src='https://media.gettyimages.com/photos/of-egypt-during-the-semifinal-match-between-burkina-faso-and-egypt-at-picture-id640864694?s=594x594' alt='' />
                        <span className='sidebarFriendName'>A.Elsaid</span>                    
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar