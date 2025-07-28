import "../styles/LogoutPage.css"
import { useNavigate } from "react-router-dom";

function DeleteView() {
    return (
        <div className="main-container">
            <div className="headers">
                <h1 className="logout-header">Are you sure you <br /> want to log out? </h1>
                <p className="sub-heading">Your current session will end. Any unsaved changes may be lost.</p>
            </div>

            <div className="buttons">
                <button className="logout-button">Yes, Log Out</button>
                <button className="cancel-button">Cancel</button>
            </div>
        </div> 

    );
}

export default DeleteView;