import React from "react";
import "./Styles.scss";

const Card = ({ width, height, background }) => {
  return (
    <div className="card_container" style={{ width, height, background }}>
      Hi
    </div>
  );
};

Card.defaultProps = {
  width: "500px",
  height: "500px",
  background: "#fff",
};
export default Card;
