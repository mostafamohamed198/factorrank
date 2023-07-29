import React from "react";
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';

export default function Unsubscribe() {
    const { email, token } = useParams();
    console.log('email param found:', email);
    console.log('token param found:', token);
    fetch(`/api/unsubscribe?email=${encodeURIComponent(email)}&token=${encodeURIComponent(token)}`)
        .then((response) => response.json())
        .then((data) => {
          console.log("HTTP Response:", data)
        });
  
    return (
      <div>
        <Helmet>
          <title>Unsubscribe Successful</title>
          <link rel="stylesheet" type="text/css" href="../../static/css/accounts.css"/>
        </Helmet>
        <ul id='nav_bar'>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        <div class="main-prompt">
            <h2>We're sorry to see you go</h2>
            <p>
                You've successfully unsubscribed from all FactorRank emails.<br/>
                If you'd like to resubscribe, <a href="/">join our mailing list</a> or <a
                href="/signup">create a new account</a>.
            </p>
        </div>
      </div>
    );
}