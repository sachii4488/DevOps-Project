import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSmile, FaDashboard, FaShoppingBag, FaChartPie, FaRegEnvelope, FaUsers, FaCog, FaSignOutAlt, FaSearch, FaPlus, FaFilter } from 'react-icons/fa';

const Sidebar = ()=> {
  const [hide, setHide] = useState(false);

  return (
    <section id="sidebar" className={hide ? 'hide' : ''}>
      <a href="#" className="brand">
        <FaSmile />
        <span className="text">AdminHub</span>
      </a>
      <ul className="side-menu top">
        <li className="active">
          <Link to="#">
            <FaDashboard />
            <span className="text">Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="#">
            <FaShoppingBag />
            <span className="text">My Store</span>
          </Link>
        </li>
        <li>
          <Link to="#">
            <FaChartPie />
            <span className="text">Analytics</span>
          </Link>
        </li>
        <li>
          <Link to="#">
            <FaRegEnvelope />
            <span className="text">Message</span>
          </Link>
        </li>
        <li>
          <Link to="#">
            <FaUsers />
            <span className="text">Team</span>
          </Link>
        </li>
      </ul>
      <ul className="side-menu">
        <li>
          <Link to="#">
            <FaCog />
            <span className="text">Settings</span>
          </Link>
        </li>
        <li>
          <Link to="#" className="logout">
            <FaSignOutAlt />
            <span className="text">Logout</span>
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default Sidebar;
