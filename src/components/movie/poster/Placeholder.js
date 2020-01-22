import React from "react";

import placeholder from "../../images/film-placeholder.png";

import styles from "./Placeholder.module.scss";

// Placeholder for loading images
const Placeholder = ({ height = "auto" }) => (
  <img
    src={placeholder}
    className={styles.placeholder}
    alt="placeholder"
    style={{ height: height }}
  />
);

export default Placeholder;
