import React from "react";
import PropTypes from "prop-types";

import Slider from "react-slick";

import placeholder from "../../images/person.png";
import "./slider.scss";

const Cast = ({ cast }) => {
  var settings = {
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          arrows: false
        }
      }
    ]
  };
  return (
    <div className="cast">
      {cast && (
        <>
          <h3>The Cast</h3>
          <div className="slider">
            <Slider {...settings}>
              {cast.map(char => {
                return char.profile_path ? (
                  <img
                    className="character"
                    key={char.id}
                    src={`https://image.tmdb.org/t/p/w185${char.profile_path}`}
                    alt={char.name}
                    title={char.name}
                  />
                ) : (
                  <img
                    className="character"
                    key={char.id}
                    src={placeholder}
                    alt={char.name}
                    title={char.name}
                  />
                );
              })}
            </Slider>
          </div>
        </>
      )}
    </div>
  );
};

Cast.propTypes = {
  cast: PropTypes.array.isRequired
};

export default Cast;
