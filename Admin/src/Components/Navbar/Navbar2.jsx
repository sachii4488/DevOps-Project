import React, { useState } from 'react';
import { FaSearch, FaBell, FaUser, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ()=> {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <nav>
      <FaBars className="bx bx-menu" onClick={() => document.getElementById('sidebar').classList.toggle('hide')} />
      <a href="#" className="nav-link">Categories</a>
      <form action="#">
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
        <img src="img/people.png" alt="Profile" />
      </a>
    </nav>
  );
}

export default Navbar;
