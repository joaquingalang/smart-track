import React, { useEffect, useState } from 'react';
import RecordTable from '../components/RecordTable';
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import "../styles/Fonts.css";
import "../styles/DashboardView.css";

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#0088FE', '#00C49F'];

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

  // Grouping function to count by key (e.g., department or position)
  const groupBy = (arr, key) =>
    arr.reduce((acc, obj) => {
      const val = obj[key];
      acc[val] = (acc[val] || 0) + 1;
      return acc;
    }, {});

  // Convert grouped object to array format for charts
  const formatChartData = (groupedData) =>
    Object.entries(groupedData).map(([name, value]) => ({ name, value }));

  const departmentData = formatChartData(groupBy(employees, 'department'));
  const positionData = formatChartData(groupBy(employees, 'position'));

  return (
    <div className="dashboard-view">
      <div className="view-header delius-regular">
        <h1>All Records</h1>
        <h1>{employees.length}</h1>
      </div>

      <div className="charts-section">
        <div className="chart-container">
          <h2>Department Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={departmentData}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {departmentData.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-container">
          <h2>Position Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={positionData}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
                fill="#82ca9d"
                label
              >
                {positionData.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="table-scroll-container">
  <RecordTable employees={employees} />
</div>

    </div>
  );
}

export default DashboardView;
