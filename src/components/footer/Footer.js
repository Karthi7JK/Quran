import { useState,useEffect } from 'react';
import './Footer.scss';

function Footer({config}) {

  const setWindowDimension = () => {
    setMobileMode(window.innerWidth<=600);
  }

  useEffect(() => (window.onresize = setWindowDimension), []);

  const [isMobileMode, setMobileMode] = useState(true);
  console.log('Footer Content : ', config);
  return (
    <div className="Footer">
        <p>{config.content}</p>    
    </div>
  );
}

export default Footer;
