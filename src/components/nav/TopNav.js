import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import styles from "./TopNav.module.scss";

const TopNav = ({ toggleNav, toggleSearch, isOpen }) => (
  <div className={styles.topnav}>
    <div className={styles.logo}>
      <Link to="/" className={styles.link}>
        <i className="icon ion-ios-tv" />
      </Link>
    </div>
    <div className={styles.right}>
      <div className={styles.search} onClick={toggleSearch}>
        <i className="icon ion-ios-search" />
      </div>

      <div className={`${styles.burger} ${isOpen ? styles.open : ""}`} onClick={toggleNav}>
        <span />
        <span />
        <span />
      </div>
    </div>
  </div>
);

TopNav.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toogleSearch: PropTypes.func.isRequired,
  toggleNav: PropTypes.func.isRequired
};

export default TopNav;
