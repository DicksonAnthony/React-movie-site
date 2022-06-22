import React from "react";
import { Link } from "react-router-dom";
// Styles
import { image } from "./Thumb.styles";

const Thumb = ({ image, movieId, clickable }) => (
  <div>
    {clickable ? (
      <Link to={`/${movieId}`}>
        <image src={image} alt="movie-thumb" />
      </Link>
    ) : (
      <image src={image} alt="movie-thumb" />
    )}
  </div>
);

export default Thumb;
