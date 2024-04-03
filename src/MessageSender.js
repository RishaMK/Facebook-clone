import React, { useState } from 'react'
import './MessageSender.css'
import { Avatar } from '@mui/material'
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import TagFacesIcon from '@mui/icons-material/TagFaces';

function MessageSender() {

    const [input,setInput] = useState('');
    const [imgurl,setImgurl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        //add in the list
        setInput('');
        setImgurl('');

    };
  return (

    <div className='messageSender'>

        <div className='messageSender__top'>

            <Avatar src='/images/profile_pic.jpg'/>

            <form>

                <input
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                className='messageSender__input' 
                placeholder={`What's on your mind?`} 
                />

                <input 
                placeholder='Image URL (Optional)'
                value={imgurl}
                onChange={(e) => setImgurl(e.target.value)}
                />

                <button onClick={handleSubmit} type='submit'>hidden submit</button>

                </form>
        </div>

        <div className='messageSender__bottom'>

            <div className='messageSender__option'>
                <VideoCameraFrontIcon style={{color:'red'}}/>
                <h4>Go Live</h4>
            </div>

            <div className='messageSender__option'>
                <PhotoLibraryIcon style={{color:'green'}}/>
                <h4>Photo/Video</h4>
            </div>

            <div className='messageSender__option'>
                <TagFacesIcon style={{color:'rgb(209, 209, 101)'}}/>
                <h4>Feeling/Activity</h4>
            </div>

        </div>
    </div>
  )
}

export default MessageSender