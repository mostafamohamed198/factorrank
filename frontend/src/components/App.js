import React from "react";
import { render } from "react-dom";
import SplashPage from "./SplashPage";
import Login from "./Login";
import LoginFail from "./LoginFail";
import SignUp from "./SignUp";
import PromptVerification from "./PromptVerification";
import VerifyEmail from "./VerifyEmail";
import EmailExists from "./EmailExists";
import UserHome from "./UserHome";
import Unsubcribe from "./Unsubcribe";
import Subscribed from "./Subscribed";
import Oops from "./Oops";
import {BrowserRouter as Router,
       Routes, Route } from "react-router-dom";

export default function App() {  
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<SplashPage />} />
        <Route path="/subscribed" element={<Subscribed />} />
        <Route path="/unsubscribe/:email/:token" element={<Unsubcribe />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login-fail" element={<LoginFail />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signup/verification-needed" element={<PromptVerification />} />
        <Route path="/signup/verify/:email/:token" element={<VerifyEmail />} />
        <Route path="/signup/accountexists" element={<EmailExists />} />
        <Route path="/home" element={<UserHome />} />
        <Route path="/oops" element={<Oops />} />
      </Routes>
    </Router>
  );
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);