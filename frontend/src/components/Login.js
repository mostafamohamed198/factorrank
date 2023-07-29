import React, { useState } from "react";
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmission = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    };
    fetch("/api/login", requestOptions)
      .then((response) => {
        if (response.ok) {
          navigate(`/home`);
        } else {
          navigate(`/login-fail`);
        }
      })
      .catch((error) => {
        navigate(`/login-fail`);
      });
  };

  return (
    <div>
      <Helmet>
        <title>Log in · FactorRank</title>
        <link rel="stylesheet" type="text/css" href="../static/css/accounts.css" />
      </Helmet>
      <ul id="nav_bar">
        <li><a href="/">Home</a></li>
        <li><a href="about">About</a></li>
        <li><a href="contact">Contact</a></li>
      </ul>
      <div className='main-prompt'>
        <h2>Log in to FactorRank</h2>
        <p>Don't have an account with us yet? <a href="/signup">Sign up</a> instead</p>
        <div id="login_form_div">
          <form id="login_form" onSubmit={handleSubmission}>
            <input required type="email" id="email" name="email" placeholder="Email address" onChange={handleEmail}/><br />
            <input required type="password" id="password" name="password" placeholder="Password" onChange={handlePassword}/><br />
            <input type="submit" id="submit_button" value="Log in" />
          </form>
          <p id="grecaptcha_notice">This site is protected by reCAPTCHA and the Google
            <a href="https://policies.google.com/privacy"> Privacy Policy</a> and
            <a href="https://policies.google.com/terms"> Terms of Service</a> apply.</p>
        </div>
      </div>
    </div>
  );
}