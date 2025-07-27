import "../styles/Sidebar.css";
import "../styles/Fonts.css";
import boxIconImg from "../assets/box-icon.png";
import addIconImg from "../assets/add-icon.png";
import editIconImg from "../assets/edit-icon.png";
import deleteIconImg from "../assets/delete-icon.png";

function Sidebar({view, onSelect}) {

    return (
        <div className="sidebar">
            <div className="sidebar-content">
                <p className="greeting delius-regular">Hello, Joshua!</p>
                <p className="label delius-regular">General</p>
                <div onClick={() => onSelect("dashboard")} className={"report-dashboard" + (view == "dashboard" ? " selected" : "")}>
                    <img src={boxIconImg} alt="Dashboard"/>
                    <p className="delius-regular">Report Dashboard</p>
                </div>
                <p className="label delius-regular">CRUD</p>
                <div onClick={() => onSelect("add")} className={"crud-option" + (view == "add" ? " selected" : "")}>
                    <img src={addIconImg} alt="Add"/>
                    <p className="delius-regular">Add</p>
                </div>
                <div onClick={() => onSelect("edit")} className={"crud-option" + (view == "edit" ? " selected" : "")}>
                    <img src={editIconImg} alt="Edit"/>
                    <p className="delius-regular">Edit</p>
                </div>
                <div onClick={() => onSelect("delete")} className={"crud-option" + (view == "delete" ? " selected" : "")}>
                    <img src={deleteIconImg} alt="Delete"/>
                    <p className="delius-regular">Delete</p>
                </div>
                {/* Move logout outside sidebar-content for flex alignment */}
            </div>
            <div 
                onClick={() => onSelect("logout")} 
                className={"crud-option logout-option" + (view == "logout" ? " selected" : "")}
            >
                <img src={deleteIconImg} alt="Logout"/>
                <p className="delius-regular">Logout</p>
            </div>
        </div>
    );
}

export default Sidebar;