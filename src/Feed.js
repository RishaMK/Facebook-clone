import React from 'react'
import './Feed.css'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'

function Feed() {
  return (
    <div className='feed'>
        <StoryReel />
        <MessageSender />
        
        <Post profilepic='images/pp3.jpg' uname='it_gurl' timestamp='11:54' message='hellooo' />
        <Post profilepic='images/pp2.jpg' img='/images/postimg1.jpg' uname='that@estheticgirl' timestamp='10:35' message='In loove' />
        <Post profilepic='images/pp2.jpg' uname='that@estheticgirl' timestamp='10:33' message='Hi guys' />
    </div>
  )
}

export default Feed