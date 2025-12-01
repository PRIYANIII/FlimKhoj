import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='m-0 p-0'>
      <div className="h-14 p-[10px] flex justify-between items-center">
        <Link to="/" className="name px-10 text-black text-4xl font-bold font-serif hover:text-yellow-50">
          FlimKhoj
        </Link>
        <div className="buttons pr-10 text-lg flex justify-around"> 
          {/* <button className='nav-button mr-5 font-serif'>Watchlist</button>  */}
          <Link to="/watch" className="nav-button">Trending Shows</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
