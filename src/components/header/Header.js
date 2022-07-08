import { useState,useEffect } from 'react';
import './Header.scss';
import { Divide as Hamburger } from 'hamburger-react'
import Switch from '@mui/material/Switch';
import { Theme } from '../../utilities/constants.js';

function Header({config,setConfig}) {

  const setWindowDimension = () => {
    setMobileMode(window.innerWidth<=600);
  }
  useEffect(() => (window.onresize = setWindowDimension), []);

  const [isHMenuOpen, setHMenuOpen] = useState(false)
  const [isMobileMode, setMobileMode] = useState(true);
  const [theme, setTheme] = useState(false);

  const onMenuSelection = (menuItem) => {
    config.navList.forEach(navItem => navItem.selected = false);
    menuItem.selected = true;
    setConfig(config);
  }

  const handleChangeTheme = (event, theme) => {
    setTheme(theme);
    changeTheme(theme);
  }

  const changeTheme = (theme) => {
      document.body.setAttribute('data-theme', theme ? Theme.DARK : Theme.LIGHT);
  }
  
  return (
        <div className="Header">
            
            <div className="Header__Logo">
              Quran 
            </div>

            {
              (isHMenuOpen || !isMobileMode) &&
              <nav className={isHMenuOpen ? "Header__Nav menuOpen" : "Header__Nav menuClose"}>
                <ul>
                  {
                    config.navList.map(navItem => {
                      return <>
                          <li onClick={() => { onMenuSelection(navItem) }} key={navItem.label}>
                            {navItem.label}
                            { navItem.selected && <span className='selected'></span> }
                          </li> 
                        </>
                      })
                  }           
                </ul> 
              </nav>
            }

            <div className="Header__Settings">
                  <Switch checked={!!theme} onChange={handleChangeTheme} 
                          inputProps={{ 'aria-label': 'controlled' }}/>
            </div>

            <div className="Header__Mobile_view">
                <Hamburger size={20} color="#FFFFFF" toggled={isHMenuOpen} toggle={setHMenuOpen} />
            </div>    

        </div>
  );
}

export default Header;
