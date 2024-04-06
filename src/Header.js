import React from 'react'
import './Header.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Avatar } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SmoothIconButton from './Components/SmoothIconButton';
import {useStateValue} from './StateProvider';

function Header() {
    const [{user},dispatch] = useStateValue();

  return (
    <div className='header'>


        <div className='header__left'>

            <img src="/images/fb-logo.png" alt="Facebook Logo"/>

            <div className='header__left_search'>

                <i class="fa-solid fa-magnifying-glass"></i>
                <input placeholder='Search Facebook'></input>

            </div>

        </div>


        <div className='header__center'>

            <div className='header__center_option opn_1'><i class="fa-solid fa-house"></i></div>
            <div className='header__center_option'><i class="fa-solid fa-tv"></i></div>
            <div className='header__center_option'><i class="fa-solid fa-store"></i></div>
            <div className='header__center_option'><i class="fa-solid fa-user-group"></i></div>
            <div className='header__center_option'><i class="fa-solid fa-flag"></i></div>
        
        </div>

        <div className='header__right'>

            <div className='header__info'>
                <Avatar src={user.photoURL}/>
                <h4>{user.displayName}</h4>
            </div>

            <SmoothIconButton>
                <AddIcon />
            </SmoothIconButton>
            <SmoothIconButton>
                <ForumIcon />
            </SmoothIconButton>
            <SmoothIconButton>
                <NotificationsActiveIcon />
            </SmoothIconButton>
            <SmoothIconButton>
                <ExpandMoreIcon />
            </SmoothIconButton>

        </div>
    </div>
  )
}

export default Header