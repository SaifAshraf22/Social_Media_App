import React from 'react'
import Share from '../Share/Share'
import Posts from '../posts/Posts'

function Feeds() {
  return (
    <>
    <div className='feed'>
      <div className='feedWrapper'>
        <Share/>
        <Posts/>
        <Posts/>
        <Posts/>
      </div>
    </div>
    </>
    )
}

export default Feeds