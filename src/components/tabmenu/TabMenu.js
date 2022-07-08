import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { alpha, styled } from '@mui/material/styles';

const CustomTabs = styled(Tabs)(({ theme }) => ({
  fontFamily: 'Nunito',  
  width: '100%', 
  height:'40px', 
  backgroundColor: 'var(--tab-background)', 
  borderRadius:'5px' ,
    '& .MuiTabs-scroller': {
        minHeight: '0px !important',
        maxHeight: '40px;',
        '& .MuiTabs-flexContainer': {
            minHeight: '0px !important',
            maxHeight: '40px;',
            '& .MuiButtonBase-root': {
                background: 'transparent',
                 borderRadius: '5px',
                flex: 1,
                minHeight: '40px',
                fontFamily: 'Nunito',
                fontWeight: 'bold',
                color: 'var(--secondary-content-color)',
                '&.Mui-selected': {
                  background: 'var(--tab-highlight)',
                  color: 'white',
                }
            }
            
        }
  },
  '& .MuiOutlinedInput-root': {
    maxHeight: '40px'
  }
}));

const CustomTab = styled(Tab)(({ theme }) => ({
  fontFamily: 'Nunito',  
  width: '100%', 
  height:'40px', 
  borderRadius:'5px' ,
  '& .MuiTabs-root': {
    height: '40px',
    fontFamily: 'Nunito',  
    display: 'flex',
    '& .MuiTabs-scroller': {
        minHeight: '0px !important',
        maxHeight: '40px;',
        '& .MuiTabs-flexContainer': {
            minHeight: '0px !important',
            maxHeight: '40px;',
            '& .MuiButtonBase-root': {
                background: '#41504D',
                color: 'white',
                bordeRadius: '5px',
                flex: 1,
                minHeight: '40px',
                fontFamily: 'Nunito',
                fontWeight: 'bold'
            }
        }
    }
  },
  '& .MuiOutlinedInput-root': {
    maxHeight: '40px'
  }
}));

export default function CTabs(config) {
  return <>
      <CustomTabs value={config.value} onChange={config.onChange} centered={config.centered}>
      {
          config.tabMenuList.map((label, index) => {
              return <CustomTab key={index} style= {config.tabStyle} label={label}/>
          })
      }
      </CustomTabs>
  </>
}
