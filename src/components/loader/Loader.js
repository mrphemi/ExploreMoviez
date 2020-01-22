import React from "react";
import { useSelector } from "react-redux";
import "./loader.scss";

const Loader = () => {
  const isLoading = useSelector(state => state.isLoading);
  return (
    <div className={`loader ${isLoading ? "show" : ""}`}>
      <div className="rect1" />
      <div className="rect2" />
      <div className="rect3" />
      <div className="rect4" />
      <div className="rect5" />
    </div>
  );
};

export default Loader;
