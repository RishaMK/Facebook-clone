import React from 'react'
import './SidebarRow.css'
import { Avatar, IconButton} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function SidebarRow({src,Icon,title}) {
  return (
    <div className='sidebarRow'>
        {src && <Avatar src={src}/>}    {/* the && means the expression after && is evaluated only if the expression before holds true*/}
        {Icon && Icon !== ExpandMoreIcon && <Icon />}
      {Icon && Icon === ExpandMoreIcon && <IconButton><ExpandMoreIcon /></IconButton>}
        <h4>{title}</h4>
    </div>
  )
}

export default SidebarRow