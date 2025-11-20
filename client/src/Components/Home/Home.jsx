import React from "react";
// import '../../Components/Login/Login.css';
import { useNavigate } from "react-router-dom";
import images from "../../Components/Logo/nec.avif";
import { Link } from "react-router-dom";
import Navbarr from "../Navbarr/Navbarr";
import "./Home.css"
const Home = () => {
  const navigate = useNavigate();
  const plainlot = () =>{
    navigate("/plainlot");
  }

  const beadsEnamellot = () =>{
     navigate("/beadsenamellot");
  }

  return (
    <>
    <Navbarr/>
    <div className="home-root">
      <div className="lot">
        <div className="plain-lot" onClick={()=>plainlot()}>
          <p >Plain Lot</p>
        </div>
        <div className="beadsenamel-lot" onClick={()=>beadsEnamellot()}>
          <p>beads & Enamel Lot</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
