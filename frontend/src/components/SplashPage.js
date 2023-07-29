import React, { useState } from "react";
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

export default function SplashPage() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmission = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
      }),
    };
    fetch("/api/subscribe", requestOptions)
      .then((response) => {
        if (response.ok) {
          navigate(`/subscribed`);
        } else {
          navigate(`/oops`);
        }
      })
      .catch((error) => {
        navigate(`/oops`);
      });
  };

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
              Sit tight; exciting things are in the making. Sign up to get notified when we launch our free trial.
          </p>

          <div id="mailinglist_signup_form_div">
              <form id="mailinglist_signup_form" onSubmit={handleSubmission}>
                  <input required type="email" id="email" name="email" placeholder="Email address" onChange={handleEmail}/>
                  <input type="submit" id="submit_button" value="Sign Up!"/>
              </form>
                <p id="grecaptcha_notice">This site is protected by reCAPTCHA and the Google
                  <a href="https://policies.google.com/privacy"> Privacy Policy</a> and
                  <a href="https://policies.google.com/terms"> Terms of Service</a> apply.
                </p>
          </div>
      </div>
    </div>
  );
}