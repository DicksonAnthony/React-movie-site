import React from "react";
// Styles
import { image } from "./Thumb.styles";

const Thumb = ({ image, movieId, clickable }) => (
  <div>
    <image src={image} alt="movie-thumb" />
  </div>
);

export default Thumb