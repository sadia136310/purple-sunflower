import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
     <div>
   <h1 className='purple'>Purple Sunflower</h1>
     </div>
     <div>
     <NavLink to='/'>Home</NavLink>
     <NavLink to='/statistics'>Statistics</NavLink>
     <NavLink to='/blog'>Blog</NavLink>
     </div>
        </nav>
    );
};

export default Header;