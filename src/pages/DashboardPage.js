import '../styles/DashboardPage.css';
import Sidebar from "../components/Sidebar";
import { useState } from 'react';
import DashboardView from './DashboardView';
import AddView from './AddView';
import EditView from './EditView';
import DeleteView from './DeleteView';

function DashboardPage() {

    const [selectedView, setSelectedView] = useState("dashboard");

    function handleClick(view) {
        setSelectedView(view);
    }

    function renderView(view) {
        switch (view) {
            case "dashboard":
                return <DashboardView></DashboardView>;
            case "add":
                return <AddView></AddView>;
            case "edit":
                return <EditView></EditView>;
            case "delete":
                return <DeleteView></DeleteView>;
            default:
                return null;
        }
    }

    return (
        <div className="dashboard">
            <Sidebar view={selectedView} onSelect={handleClick}></Sidebar>
            <div className="content">
                {renderView(selectedView)}
            </div>
        </div>
    );
}

export default DashboardPage;