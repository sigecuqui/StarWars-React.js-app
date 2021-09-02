import React from "react";

import "./index.scss";

import {yoda, chewie, troopers} from "../../../assets";

const Home = () => {
  return (
    <section className="App-homepage">
      <img src={yoda} alt="yoda" />
      <img src={chewie} alt="chewie" />
      <img src={troopers} alt="troopers" />
      <h1>Everything You Need to Know About STAR WARS</h1>
    </section>
  );
};

export default Home;
