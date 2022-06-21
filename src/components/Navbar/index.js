import React, {useState} from 'react';
import { Link } from "react-router-dom";

import './navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import { Button } from '@mui/material';







function Navbar (){
    const [click, setClick] = useState(false);
const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

const showButton = () => {
    if(window.innerWidth <= 960){
        setButton(false);
     }else{
         setButton(true);
     }
}

    return (
        <nav className='navbar'>
            <div className='navbar-container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                <BubbleChartIcon/>
               INTERNETART
            <i class='fab fa-typo3' />
          </Link>
                <div className='ReorderIcon' onClick={handleClick}>
                    <i className={click ?'fas fa-times' : 'fas fa-bar'}/>
                    
                </div>
          <ul className={click ?'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'></li>
              <Link to= '/' className='nav-links' onClick={closeMobileMenu}>Homepage</Link>
              <li className='nav-item'></li>
              <Link to= '/blogposts' className='nav-links' onClick={closeMobileMenu}>Blogposts</Link>
              <li className='nav-item'></li>
              <Link to= '/designsection' className='nav-links' onClick={closeMobileMenu}>Designsection</Link>
              <li className='nav-item'></li>
              <Link to= '/internetart' className='nav-links' onClick={closeMobileMenu}>Internetart</Link>
          </ul>
      {button && <Button buttonStyle='btn--outline'>Menu</Button>}
      <ReorderIcon/>
          </div>
      </nav>
      )
}
export default Navbar;