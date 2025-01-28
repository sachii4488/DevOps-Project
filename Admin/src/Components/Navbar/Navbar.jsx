import React, { useState } from 'react';
import { FaSearch, FaBell, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import navlogo from '../../assets/Infinity-Store.png';
import navProfile from '../../assets/yash.jpeg';

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <nav className='navbar'>
      <FaBars className="bx bx-menu" onClick={() => document.getElementById('sidebar').classList.toggle('hide')} />
      <img src={navlogo} alt="Logo" className="nav-logo" />
      <a href="#" className="nav-link">Categories</a>
      <form action="#" className={showSearch ? 'show' : ''}>
        <div className="form-input">
          {showSearch && (
            <input
              type="search"
              placeholder="Search..."
              onBlur={() => setShowSearch(false)}
            />
          )}
          <button
            type="button"
            className="search-btn"
            onClick={() => setShowSearch(!showSearch)}
          >
            {showSearch ? <FaTimes /> : <FaSearch />}
          </button>
        </div>
      </form>
      <input type="checkbox" id="switch-mode" hidden />
      <label htmlFor="switch-mode" className="switch-mode"></label>
      <a href="#" className="notification">
        <FaBell />
        <span className="num">8</span>
      </a>
      <a href="#" className="profile">
        <img src={FaUser} alt="Profile" />
      </a>
    </nav>
  );
}

export default Navbar;
