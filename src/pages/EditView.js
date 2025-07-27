import React, { useEffect, useState } from 'react';
import EditRecordTable from '../components/EditRecordTable';
import EditRecordForm from '../components/EditRecordForm';
import '../styles/EditView.css';

function EditView() {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) =>
        setEmployees(
          data.map((user) => ({
            id: user.id,
            name: user.name,
            department: 'BS Computer Science',
            position: 'Software Developer',
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
    setEmployees((prev) =>
      prev.map((emp) =>
        emp.id === selectedEmployee.id ? selectedEmployee : emp
      )
    );
    setSelectedEmployee(null);
  };

  return (
    <div class="container">
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