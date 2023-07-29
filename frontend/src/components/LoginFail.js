import React from "react";
import { Helmet } from 'react-helmet';

export default function LoginFail() {  
  return (
      <div>
        <Helmet>
          <title>Log in · FactorRank</title>
          <link rel="stylesheet" type="text/css" href="../static/css/accounts.css"/>
        </Helmet>
        <ul id="nav_bar">
          <li><a href="/">Home</a></li>
          <li><a href="about">About</a></li>
          <li><a href="contact">Contact</a></li>
        </ul>
        <div class='main-prompt'>
            <h2>Log in to FactorRank</h2>
            <p>
                Oops, we don't seem to have an account with those details.<br/>
                Would you like to <a href="/signup">sign up </a>
                or <a href="/reset-password">reset your password</a> instead?
            </p>
        </div>
      </div>
    );
  }