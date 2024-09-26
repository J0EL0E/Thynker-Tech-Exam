import React from 'react'
import Tooltip from '@mui/material/Tooltip';
import InfoIcon from '@mui/icons-material/Info';

const InfoButton = () => {
  return (
    <Tooltip title=' This webviewer could only browse urls that allows iframe and embedded url.'
     placement='left-start' arrow>
      <button className='info-btn'>
        <InfoIcon sx={{color: '#FFFFFF'}}/>
      </button>
    </Tooltip> 
  )
}

export default InfoButton
