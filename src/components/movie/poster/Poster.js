import React, { useState } from "react";
import PropTypes from "prop-types";

import Placeholder from "./Placeholder";

const Poster = ({ size, poster_path, alt, height = "auto" }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <>
      {/* Show placeholder when image is loading, replace with image when image has loaded */}
      {!imageLoaded ? <Placeholder height={height} /> : null}
      <img
        src={`https://image.tmdb.org/t/p/${size}${poster_path}`}
        alt={alt}
        style={{
          height: height,
          display: !imageLoaded ? "none" : "block"
        }}
        onLoad={() => setImageLoaded(true)}
      />
    </>
  );
};

Poster.propTypes = {
  size: PropTypes.string.isRequired,
  poster_path: PropTypes.string,
  alt: PropTypes.string,
  height: PropTypes.string
};

export default Poster;
