import React from 'react'
import './StoryReel.css'
import Story from '../Story/Story';

function StoryReel() {
  return (
    <div className='storyReel'>
        <Story profileSrc='/images/profile_pic.jpg' title='risha_keerthi' bgimg='/images/bgimg1.jpg'/>
        <Story profileSrc='/images/pp1.jpg' title='risk._.yy' bgimg='/images/bgimg2.jpg'/>
        <Story profileSrc='/images/pp2.jpg' title='that@stheticgirl' bgimg='/images/bgimg3.jpg'/>
        <Story profileSrc='/images/pp3.jpg' title='it_gurl' bgimg='/images/bgimg4.jpg'/>
    </div>
  )
}

export default StoryReel