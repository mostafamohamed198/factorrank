import React from "react";
import { Helmet } from 'react-helmet';

export default function Oops() {  
    return (
      <div>
        <Helmet>
          <title>FactorRank</title>
          <link rel="stylesheet" type="text/css" href="../static/css/accounts.css"/>
        </Helmet>
        <ul id='nav_bar'>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        <div class="main-prompt">
            <h2>Oops, something went wrong</h2>
            <p>
                This page hasn't loaded correctly. Please try again later or <a href="/contact">contact us</a>.
            </p>
        </div>
      </div>
    );
}