import '../styles/DashboardPage.css';
import Sidebar from "../components/Sidebar";
import { useState } from 'react';
import DashboardView from './DashboardView';
import AddView from './AddView';
import EditView from './EditView';
import DeleteView from './DeleteView';
import ReportView from './ReportView';
import LogoutPageView from './LogoutPageView';
import { useLocation } from "react-router-dom";

function DashboardPage() {
    const [selectedView, setSelectedView] = useState("dashboard");
    const location = useLocation();
    const {username} = location.state || "Guest";

    function handleClick(view) {
        setSelectedView(view);
    }

    function renderView(view) {
        switch (view) {
            case "dashboard":
                return <DashboardView></DashboardView>;
            case "report":
                return <ReportView></ReportView>;
            case "add":
                return <AddView></AddView>;
            case "edit":
                return <EditView></EditView>;
            case "delete":
                return <DeleteView></DeleteView>;
            case "logout":
                return <LogoutPageView></LogoutPageView>;
            default:
                return null;
        }
    }

    return (
        <div className="dashboard">
            <Sidebar view={selectedView} onSelect={handleClick} username={username}></Sidebar>

            <div className="view-content">
                {renderView(selectedView)}
            </div>                                             

        </div>
    );
}

export default DashboardPage;