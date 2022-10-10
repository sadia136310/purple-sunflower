import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
     <div>
   <h1 className='purple'>Purple Sunflower</h1>
     </div>
     <div>
     <Link to='/home'>Home</Link>
     <Link to='/topics'>Topics</Link>
     <Link to='/statistic'>Statistic</Link>
     <Link to='/blog'>Blog</Link>
     </div>
        </nav>
    );
};

export default Header;