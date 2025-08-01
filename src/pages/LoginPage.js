import "../styles/LoginPage.css";
import "./LandingPage";
import { useNavigate } from "react-router-dom";
import databaseImg from "../assets/database.png";
import blueAsteriskImg from "../assets/blue-asterisk.png";
import brownSquiggle from "../assets/brown-squiggle.png";

function LoginPage() {
  const navigate = useNavigate();

  function navigateToDashboard(e) {
    e.preventDefault();
    navigate("/dashboard");
  }

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
          />
        </form>
        <form>
          <input
            type="text"
            class="login-text-field body-md delius-regular"
            placeholder="Email"
          />
        </form>
        <form>
          <input
            type="password"
            class="login-text-field body-md delius-regular"
            placeholder="Password"
          />
        </form>

        <button
          className="login-btn delius-regular"
          onClick={navigateToDashboard}
        >
          <p>Log In</p>
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
