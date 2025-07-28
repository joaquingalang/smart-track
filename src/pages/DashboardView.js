import React, { useEffect, useState } from 'react';
import RecordTable from '../components/RecordTable';
import "../styles/Fonts.css";
import "../styles/DashboardView.css";

function DashboardView() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/employees')
      .then((res) => res.json())
      .then((data) =>
        setEmployees(
          data.map((user) => ({
            id: user.id,
            name: user.name,
            department: user.department,
            position: user.position,
          }))
        )
      );
  }, []);

  return (
    <div className="dashboard-view">
        <div className="view-header delius-regular">
            <h1>All Records</h1>
            <h1>{employees.length}</h1>
        </div>
        <RecordTable employees={employees} />
    </div>
  );
}

export default DashboardView;