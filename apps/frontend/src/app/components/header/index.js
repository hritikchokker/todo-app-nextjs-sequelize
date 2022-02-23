import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
function Header() {
  return (
    <ul className="navbar df-ac-jc">
      <li className="navbar__list">
        <Link className="navbar__list__item" to="/dashboard/add">
          Add a task
        </Link>
      </li>
      <li className="navbar__list">
        <Link className="navbar__list__item" to="/dashboard/edit/1832d2">
          edit a dummy task
        </Link>
      </li>
      <li className="navbar__list">
        <Link className="navbar__list__item" to="/dashboard/user/1832dsdsd2">
          dummy user Details
        </Link>
      </li>
      <li className="navbar__list">
        <Link className="navbar__list__item" to="/dashboard/389183131">
          To Task details
        </Link>
      </li>
    </ul>
  );
}

export default Header;
