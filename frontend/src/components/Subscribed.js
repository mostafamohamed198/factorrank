import React, { useState } from "react";
import { Helmet } from 'react-helmet';

export default function Subscribed() {
  return (
    <div>
      <Helmet>
        <title>FactorRank: Coming Soon</title>
        <link rel="stylesheet" type="text/css" href="../static/css/splashpage.css"/>
      </Helmet>
      <ul id="nav_bar">
        <li><a href="/">Home</a></li>
        <li><a href="about">About</a></li>
        <li><a href="contact">Contact</a></li>
      </ul>
  
      <div id="home">
            <h1>COMING SOON</h1>
            <h2>FactorRank: Top-tier stock picks, from your pocket.</h2>
            <p>
                Sit tight; exciting things are in the making. Sign up to get notified when we launch our free trial.<br/>
            </p>
            <h2 id="after_ml_reg">
                <br/>Thanks! We'll be in touch (you may need to check your spam folder)
            </h2>
      </div>
    </div>
  );
}