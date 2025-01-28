import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import add_product_icon from '../../assets/Product_Cart.svg';
import list_product_icon from '../../assets/Product_list_icon.svg';

const Sidebar = () => {
  const [hide, setHide] = useState(false);

  const toggleSidebar = () => {
    setHide(!hide);
  };

  return (
    <section id="sidebar" className={hide ? 'hide' : ''}>
      <button onClick={toggleSidebar} className="toggle-btn">
        {hide ? 'Show' : 'Hide'}
      </button>
      <ul className="side-menu top">
        <li>
          <Link to="/addproduct" style={{ textDecoration: "none" }}>
            <div className="sidebar-item">
              <img src={add_product_icon} alt="Add Product" />
              <p>Add Product</p>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/listproduct" style={{ textDecoration: "none" }}>
            <div className="sidebar-item">
              <img src={list_product_icon} alt="Product List" />
              <p>Product List</p>
            </div>
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default Sidebar;
