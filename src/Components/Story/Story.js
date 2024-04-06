import React from 'react'
import './Story.css'
import { Avatar } from '@mui/material'

function Story({bgimg, profileSrc, title}) {
  return (
    <div style={{backgroundImage:`url(${bgimg})`}} className='story'>
        <Avatar src={profileSrc} className='avatar'/>
        <h4>{title}</h4>
    </div>
  )
}

export default Story