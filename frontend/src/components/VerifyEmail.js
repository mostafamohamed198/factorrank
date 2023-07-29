import React from "react";
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function VerifyEmail() {
    const navigate = useNavigate();
    const { email, token } = useParams();
    console.log('email param found:', email);
    console.log('token param found:', token);
    fetch(`/api/verify?email=${encodeURIComponent(email)}&token=${encodeURIComponent(token)}`)
      .then((response) => {
        if (response.ok) {
          const waiting_block = document.getElementById('waiting');
          const verified_block = document.getElementById('verified');
          waiting_block.style.display = 'none';
          verified_block.style.display = 'block';
        } else {
          navigate(`/oops`);
        }
      })
      .catch((error) => {
        navigate(`/oops`);
      });
  
    return (
      <div>
        <Helmet>
          <title>Welcome to FactorRank</title>
          <link rel="stylesheet" type="text/css" href="../../../static/css/accounts.css"/>
        </Helmet>
        <ul id='nav_bar'>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        <div class="main-prompt">
          <div id="waiting" style={{ display: 'block' }}>
            <h2>Verifying your email</h2>
            <p>
              Hold on a moment - you're nearly verified!
            </p>
          </div>
          <div id="verified" style={{ display: 'none' }}>
            <h2>Welcome to FactorRank</h2>
            <p>
              Awesome, your email has been verified! <a href="/home">Click here</a> to get started.
            </p>
          </div>
        </div>
      </div>
    );
}