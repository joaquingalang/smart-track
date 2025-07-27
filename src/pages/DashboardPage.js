import '../styles/DashboardPage.css';
import Sidebar from "../components/Sidebar";
import { useState } from 'react';

function DashboardPage() {

    const [selectedView, setSelectedView] = useState("dashboard");

    function handleClick(view) {
        setSelectedView(view);
    }

    return (
        <div className="dashboard">
            <Sidebar view={selectedView} onSelect={handleClick}></Sidebar>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
        </div>
    );
}

export default DashboardPage;