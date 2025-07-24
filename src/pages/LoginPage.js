import "../styles/LoginPage.css";
import './LandingPage'
import { useNavigate } from "react-router-dom";
import databaseImg from '../assets/database.png'
import blueAsteriskImg from '../assets/blue-asterisk.png';
import brownSquiggle from '../assets/brown-squiggle.png';

function LoginPage() {

    const navigate = useNavigate();
    
     function navigateToLanding(e) {
    e.preventDefault();
    navigate("/");
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
        <p className="body-md borel-regular">
          Please enter your credentials to access the dashboard.
        </p>
          <form>
            <input
              type="text"
              class="login-text-field body-md borel-regular"
              placeholder="Username"
            />
          </form>
          <form>
            <input
              type="text"
              class="login-text-field body-md borel-regular"
              placeholder="Email"
            />
          </form>
          <form>
            <input
              type="password"
              class="login-text-field body-md borel-regular"
              placeholder="Password"
            />
          </form>

        <button className="dashboard-btn borel-regular" onClick={navigateToLanding}>
          <p>Log In</p>
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
