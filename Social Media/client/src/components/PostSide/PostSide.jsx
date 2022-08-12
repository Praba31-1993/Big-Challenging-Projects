import React from 'react'
import Posts from '../Posts/Posts'
import PostShare from '../PostShare/PostShare'
// import RightSide from '../RightSide/RightSide'
import './PostSide.css'

const PostSide = () => {
  return (
    <div className='PostSide'>
        <PostShare/>
        <Posts/>
        {/* <RightSide/> */}
    </div>
  )
}

export default PostSide
