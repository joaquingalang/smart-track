import "../styles/LandingPage.css";
import { useNavigate } from "react-router-dom";
import databaseImg from "../assets/database.png";
import blueAsteriskImg from "../assets/blue-asterisk.png";
import brownSquiggle from "../assets/brown-squiggle.png";

function LandingPage() {
  const navigate = useNavigate();

  function navigateToLogin(e) {
    e.preventDefault();
    navigate("/login");
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
        <h1 className="title-lg tilt-warp-regular">
          Smart Track: <br /> Your Gateway to Smarter Records
        </h1>
        <p className="body-md borel-regular">
          Manage your data with ease using SmartTrack — a streamlined system for
          adding, editing, deleting, and reporting records in one intuitive
          dashboard. Designed for efficiency, built for clarity.
        </p>
        <button className="dashboard-btn borel-regular" onClick={navigateToLogin}>
          <p>Go to Dashboard</p>
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
