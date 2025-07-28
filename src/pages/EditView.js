import React, { useEffect, useState } from 'react';
import EditRecordTable from '../components/EditRecordTable';
import EditRecordForm from '../components/EditRecordForm';
import '../styles/EditView.css';

function EditView() {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

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

  const handleEditClick = (employee) => {
    setSelectedEmployee(employee);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedEmployee({ ...selectedEmployee, [name]: value });
  };

  const handleUpdate = () => {
    fetch('http://localhost:5000/api/employees/edit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(selectedEmployee)
    })
      .then(res => res.json())
      .then(data => {
        setEmployees(
          data.map((user) => ({
            id: user.id,
            name: user.name,
            department: user.department,
            position: user.position,
          }))
        );
        setSelectedEmployee(null);
      });
  };

  return (
    <div className="container">
      <h1>Edit Record</h1>

      <EditRecordTable 
        employees={employees} 
        onEditClick={handleEditClick} 
      />

      <h2>Update Employee Details</h2>
      
      <EditRecordForm
        selectedEmployee={selectedEmployee}
        onChange={handleChange}
        onUpdate={handleUpdate}
      />
    </div>
  );
}

export default EditView;