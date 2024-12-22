import React from "react";
import "./mytest.css";
import Navbar from "../components/Navbar1/navbar";
import Main from "../components/Main/main";
import Project from "../components/Project/project";
import Portfolio from "../components/Portfolio/Portfolio";
import Services from "../components/Services/services";
import Feadback from "../components/Feadback/feadback";
import Appointment from "../components/Appointment/appointment";
import Footer from "../components/Footer/footer";
import cave from "./newimg/s1.jpg";
import background from "./newimg/background.mp4";
import school from "./newimg/s4.jpg";
import galaxy from "./newimg/s3.jpg";
import emaar from "./newimg/w4.jpg";
import logo from "./newimg/logo1.png";


function Home() {

  return (
      <header>
        <Navbar />
        <Main />
        <Project />
        <Portfolio />
        <Services />
        <Feadback />
        <Appointment />
        <Footer />
      </header>
  );
}

export default Home;
