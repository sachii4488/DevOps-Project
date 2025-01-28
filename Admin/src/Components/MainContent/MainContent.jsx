import React from 'react';
import { FaCloudDownload } from 'react-icons/fa';

const MainContent=() => {
  return (
    <main>
      <div className="head-title">
        <div className="left">
          <h1>Dashboard</h1>
          <ul className="breadcrumb">
            <li><a href="#">Dashboard</a></li>
            <li><FaChevronRight /></li>
            <li><a className="active" href="#">Home</a></li>
          </ul>
        </div>
        <a href="#" className="btn-download">
          <FaCloudDownload />
          <span className="text">Download PDF</span>
        </a>
      </div>

      <ul className="box-info">
        <li>
          <FaCalendarCheck />
          <span className="text">
            <h3>1020</h3>
            <p>New Order</p>
          </span>
        </li>
        <li>
          <FaUsers />
          <span className="text">
            <h3>2834</h3>
            <p>Visitors</p>
          </span>
        </li>
        <li>
          <FaDollarSign />
          <span className="text">
            <h3>$2543</h3>
            <p>Total Sales</p>
          </span>
        </li>
      </ul>

      <div className="table-data">
        <div className="order">
          <div className="head">
            <h3>Recent Orders</h3>
            <FaSearch />
            <FaFilter />
          </div>
          <table>
            <thead>
              <tr>
                <th>User</th>
                <th>Date Order</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {/* Example rows, replace with dynamic data */}
              <tr>
                <td>
                  <img src="img/people.png" alt="User" />
                  <p>John Doe</p>
                </td>
                <td>01-10-2021</td>
                <td><span className="status completed">Completed</span></td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
        <div className="todo">
          <div className="head">
            <h3>Todos</h3>
            <FaPlus />
            <FaFilter />
          </div>
          <ul className="todo-list">
            <li className="completed">
              <p>Todo List</p>
              <FaEllipsisV />
            </li>
            {/* Add more todo items as needed */}
          </ul>
        </div>
      </div>
    </main>
  );
}

export default MainContent;
