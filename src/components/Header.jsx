import {Link,Outlet} from "react-router-dom";
import React from 'react';
import '../css/header.css';
const Header = () => {
  return (
    <header>
      <nav>
        <ul className="header__list">
          <li className="header__list-item">
            <Link to="/" className="header__link">Blog</Link>
          </li>
          <li className="header__list-item">
            <Link to="/contact" className="header__link">お問い合わせ</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
