import React from "react";
import { Helmet } from "react-helmet";

export default function EmailExists() {
    return (
      <div>
        <Helmet>
          <title>Sign up · FactorRank</title>
          <link rel="stylesheet" type="text/css" href="../static/css/accounts.css"/>
        </Helmet>
        <ul id="nav_bar">
              <li><a href="/">Home</a></li>
              <li><a href="about">About</a></li>
              <li><a href="contact">Contact</a></li>
            </ul>
        <div class="main-prompt">
           <div id="email_exists_prompt">
             <h2>Oops, looks like that email already exists!</h2>
             <p>Would you like to <a href="/login">log in</a> instead?</p>
           </div>
        </div>
      </div>
    );
  }