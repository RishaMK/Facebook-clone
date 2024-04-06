import React from 'react'
import SidebarRow from './SidebarRow'
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import GroupIcon from '@mui/icons-material/Group';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {useStateValue} from '../../State/StateProvider';


function SideBar() {
  const [{user},dispatch] = useStateValue();
  return (
    <div className='sidebar'>
      <SidebarRow src={user.photoURL} title={user.displayName}/>
      <SidebarRow Icon={EmojiFlagsIcon} title='Pages'/>
      <SidebarRow Icon={GroupIcon} title='Friends'/>
      <SidebarRow Icon={ChatBubbleIcon} title='Messenger'/>
      <SidebarRow Icon={StorefrontIcon} title='Marketplace'/>
      <SidebarRow Icon={VideoLibraryIcon} title='Videos'/>
      <SidebarRow Icon={ExpandMoreIcon} title='More'/>
    </div>
  )
}

export default SideBar