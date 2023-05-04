import React from 'react'
import './posts.css'
import { MoreVert } from '@mui/icons-material'
function Posts() {
  return (
    <div className='post'>
        <div className='postWrapper'>
            <div className='postTop'>
                <div className='postTopLeft'>
                    <img className='postProfileImg' src='https://th.bing.com/th/id/R.da1ce16d58c86a77cfc5bdeb8d5faedc?rik=JEHfqc%2fff5c67A&pid=ImgRaw&r=0'alt=''/>
                    <span className='postUsername'>M.Salah</span>
                    <span className='postDate'>5 minute ago</span>
                </div>
                <div className='postTopRight'>
                    <MoreVert/> 
                </div>
            </div>
                <div className='postConter'>
                    <span className='postText'>Hey! It's my first post :)</span>
                    <img className='postImg'src='https://th.bing.com/th/id/R.01e3baa4c4bdc804646f002d458e4554?rik=h%2feSikKKiHwjJg&pid=ImgRaw&r=0' alt=''/>
                </div>
                    <div className='postBottom'>
                        <div className='postBottomLeft'>
                            <img className='likeIcon'src='https://th.bing.com/th/id/OIP.B_1kCxCxAYaHJ7rzGEruCwHaHa?w=206&h=205&c=7&r=0&o=5&dpr=1.3&pid=1.7'alt=''/>
                            <img className='likeIcon'src='https://th.bing.com/th/id/OIP.OWQ2aXmzjmNXmeXFvv0ztwHaHa?pid=ImgDet&w=207&h=207&c=7&dpr=1.3'alt=''/>
                            <span className='postLikeCounter'>32 people like it</span>
                        </div>
                        <div className='postBottomRight'>
                            <span className='postCommentText'>9 comments </span>
                        </div>
                    </div>
                
            </div>
         </div>
   
    )
}

export default Posts