import {Link,Outlet} from "react-router-dom";
import React from 'react';
import classes from './Header.module.css';

const Header = () => {
  return (
    <header>
      <nav>
        <ul className={classes.headerList}>
          <li className={classes.headerItem}>
            <Link to="/" className={classes.headerLink}>Blog</Link>
          </li>
          <li className={classes.headerItem}>
            <Link to="/contact" className={classes.headerLink}>お問い合わせ</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
