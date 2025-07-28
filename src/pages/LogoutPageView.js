import { useNavigate } from "react-router-dom";
import "../styles/LogoutPage.css"

function LogoutPageView(){
    const navigate = useNavigate();

    const navigateToLanding = (e) =>{
       e.preventDefault();
        navigate("/");
    };

    const handleCancel = () => {
        //To navigate Dashboard with the records
    };

    return(
    <div className="main-container">
            <div className="headers">
                <h1 className="logout-header">Are you sure you <br /> want to log out? </h1>
                <p className="sub-heading">Your current session will end. Any unsaved changes may be lost.</p>
            </div>

            <div className="buttons">
                <button className="logout-button" onClick={navigateToLanding}>Yes, Log Out</button>
                <button className="cancel-button" onClick={handleCancel}>Cancel</button>
            </div>
        </div>
    );
}

export default LogoutPageView;