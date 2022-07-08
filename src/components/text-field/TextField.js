import * as React from 'react';
import TextField from '@mui/material/TextField';
import { alpha, styled } from '@mui/material/styles';

const CustomTextField = styled(TextField)(({ theme }) => ({
  height: 40,
  fontFamily: 'Nunito',  
  fontWeight: 700, 
  fontSize: '18px', 
  lineHeight: '25px', 
  color: '#41504D',
  flexBasis: "48.5%",
  '& .MuiInputLabel-root': {
    fontFamily: 'Nunito',  
    color: 'var(--secondary-content-color)',
    fontWeight: 700,
    top: '-7px',
    '&.Mui-focused': {
      top: '0px'
    }
  },
  '& .MuiOutlinedInput-root': {
    maxHeight: '40px',
    background: 'var(--tab-background)'
  }
}));

export default function CTextField(config) {
  return <CustomTextField style={config.style} fullWidth={config.fullWidth} id={config.id} label={config.label} variant={config.variant}/>
}
