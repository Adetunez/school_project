import React from "react";
import "./Styles.scss";
import img from "../../assets/image/leaf.png";

const Index = () => {
  return (
    <main className="mainner">
      <div className="overlay"></div>
      <div className="herosection">
        <h1>Connecting Farmers to Consumers</h1>
        <p>
          <img src={img} alt="" />
          Welcome to ChriscrownFarm
        </p>
        <div className="sect">
          <small>
            Creating a platform for farmers to display their produce easily and
            consumers having easy access to the produce
          </small>
        </div>
      </div>
    </main>
  );
};

export default Index;
