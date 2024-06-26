import React from 'react'
import './Post.css'
import { Avatar, IconButton } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import PersonIcon from '@mui/icons-material/Person';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import NearMeIcon from '@mui/icons-material/NearMe';

function Post({profilePic,image,username,timestamp,message}) {
  return (
    <div className='post'>

        <div className='post__top'>

            <Avatar src={profilePic} className='post__avatar' />

            <div className='post__topInfo'>

                <h3>{username}</h3>

                <div className='timestamp'>
                    <p>{timestamp && new Date(timestamp?.toDate()).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}</p>
                    <FiberManualRecordIcon style={{fontSize:'xx-small',padding:'8px'}}/>
                    <PersonIcon style={{fontSize:'large',paddingTop:'3px'}}/>
                </div>

            </div>

            <IconButton>
                <MoreHorizIcon/>
            </IconButton>

        </div>

        <div className='post__bottom'>
            {message && <p>{message}</p>}
        </div>

        <div className='post__image'>
            {image && <img src={image} alt=""></img>}
        </div>

        <div className='post__options'>
            <div className='post__option'>
                <ThumbUpIcon />
                <h5>Like</h5>
            </div>
            <div className='post__option'>
                <QuestionAnswerIcon />
                <h5>Comment</h5>
            </div>
            <div className='post__option'>
                <NearMeIcon />
                <h5>Share</h5>
            </div>
        </div>
        
    </div>
  )
}

export default Post