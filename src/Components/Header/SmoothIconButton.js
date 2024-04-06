import React from 'react';
import IconButton from '@mui/material/IconButton';

const SmoothIconButton = ({ children }) => {
  return (
    <IconButton
      sx={{
        '&:hover': {
          transition: 'transform 0.3s ease', // Smoother transition
        },
      }}
    >
      {children}
    </IconButton>
  );
};

export default SmoothIconButton;
