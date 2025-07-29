import "../styles/LoginPage.css";
import "./LandingPage";
import { useNavigate } from "react-router-dom";
import databaseImg from "../assets/database.png";
import blueAsteriskImg from "../assets/blue-asterisk.png";
import brownSquiggle from "../assets/brown-squiggle.png";
import React, { useState } from "react";

function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function navigateToDashboard(e) {
    e.preventDefault();
    navigate("/dashboard", {state:{username}});
  }

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      prompt("All fields are required.");
      return;
    }

    if (
      username === "STAdmin" &&
      email === "smarttrack@gmail.com" &&
      password === "ST@123456"
    ) {
      navigateToDashboard(e);
    } else {
      prompt("Invalid credentials. Please try again.");
    }
  };

  return (
    <div>
      <div className="db-img">
        <img src={databaseImg}></img>
      </div>
      <div className="blue-asterisk">
        <img src={blueAsteriskImg}></img>
      </div>
      <div className="brown-squiggle">
        <img src={brownSquiggle}></img>
      </div>
      <div className="content">
        <h1 className="title-lg tilt-warp-regular">Log In</h1>
        <p className="body-md delius-regular">
          Please enter your credentials to access the dashboard.
        </p>
        <form>
          <input
            type="text"
            class="login-text-field body-md delius-regular"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </form>
        <form>
          <input
            type="text"
            class="login-text-field body-md delius-regular"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </form>
        <form>
          <input
            type="password"
            class="login-text-field body-md delius-regular"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>

        <button
          className="login-btn delius-regular"
          onClick={handleLogin}
        >
          <p>Log In</p>
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
