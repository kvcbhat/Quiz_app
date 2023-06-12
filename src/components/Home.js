import React from "react";
import { useNavigate } from "react-router-dom";
import baground from "../Images/background.jpg";

const Home = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/Quiz");
  };

  return (
    <div
      style={{
        backgroundImage: `url(${baground})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
      }}
    >
      <div>
        <div className="d-flex justify-content-center align-item-center">
          <h1 style={{ color: "white" }}>Welcome to the quiz</h1>
        </div>
        <div className="d-flex justify-content-center">
          <button className="btn btn-primary btn-lg" onClick={handleSubmit}>
            Start quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
