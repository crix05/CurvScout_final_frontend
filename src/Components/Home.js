import React from "react";
import { useNavigate } from 'react-router-dom';
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/back_1.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import Logo from "../Assets/logo.png";


const Home = () => {

  const navigate = useNavigate();
  function handleClick(){
    navigate('/entry')
  }

  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">


        {/* <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div> */}
        <div className="home-text-section">
          
          <h1 className="primary-heading">
            <div>Stand Tall.</div>
          <div>Stand Out.</div><div>Know Your Curve.</div>
          </h1>
          <p className="primary-text">
          Confidence starts from within. Our Spinal anomaly detection platform empowers you to understand your spine, achieve optimal posture, and project your best self.
          </p>
          <button className="secondary-button" onClick={handleClick}>
          Assess Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img className="manImg" src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
