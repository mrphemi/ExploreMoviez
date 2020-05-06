import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import styles from "./SideNav.module.scss";

const SideNav = ({ genres = [], isOpen, toggleNav }) => {
  let categoryLinks = [
    { name: "popular", path: "/categories/popular" },
    { name: "top rated", path: "/categories/toprated" },
    { name: "upcoming", path: "/categories/upcoming" },
  ];
  return (
    <div className={`${styles.wrapper} ${isOpen ? styles.show : ""}`}>
      <ul>
        {categoryLinks.length !== 0 &&
          categoryLinks.map((link, i) => (
            <li key={i}>
              <NavLink
                activeClassName={styles.active}
                to={link.path}
                onClick={toggleNav}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
      </ul>
      <hr />
      <ul className={styles.genres}>
        {genres.length !== 0 &&
          genres.map((genre) => (
            <li key={genre.id}>
              <NavLink
                activeClassName={styles.active}
                to={`/genres/${genre.id}`}
                onClick={toggleNav}
              >
                {genre.name}
              </NavLink>
            </li>
          ))}
      </ul>
    </div>
  );
};

SideNav.propTypes = {
  genres: PropTypes.array,
  isOpen: PropTypes.bool.isRequired,
  toggleNav: PropTypes.func.isRequired,
};

export default SideNav;
