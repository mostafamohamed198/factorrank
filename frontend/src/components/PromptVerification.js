import React, { Component } from "react";
import { Helmet } from "react-helmet";

export default function PromptVerification() {  
  return (
    <div>
      <Helmet>
        <title>Sign up · FactorRank</title>
        <link rel="stylesheet" type="text/css" href="../static/css/accounts.css"/>
      </Helmet>
      <ul id='nav_bar'>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <div class="main-prompt">
      <div id="verification_prompt">
            <h2>Check your inbox!</h2>
            <p>We've just sent you a confirmation email - click the link to
              verify your account. If you don't receive an email, please <a href="/contact">contact us.</a></p>
            <p>(P.S., you may need to check your spam!)</p>
          </div>
      </div>
    </div>
  );
}