import React, { useEffect, useState } from 'react';
import DeleteRecordTable from '../components/DeleteRecord';
import '../styles/DeletePage.css';

function DeleteView() {
  const [employees, setEmployees] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);

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

  const handleCheckboxChange = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id)
        ? prev.filter((sid) => sid !== id)
        : [...prev, id]
    );
  };

  const handleDelete = () => {
    fetch('http://localhost:5000/api/employees/delete', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ids: selectedIds })
    })
      .then(res => res.json())
      .then(data => {
        setEmployees(
          data.employees.map((user) => ({
            id: user.id,
            name: user.name,
            department: user.department,
            position: user.position,
          }))
        );
        setSelectedIds([]);
      });
  };

  return (
    <div className="delete-view-container">
      <div className="view-header delius-regular">
        <h1>Delete Records</h1>
        <h1>{employees.length}</h1>
      </div>

      <DeleteRecordTable
        employees={employees}
        selectedIds={selectedIds}
        onCheckboxChange={handleCheckboxChange}
      />

      <div className="selected-count-bar">
        <span className="selected-count"> {selectedIds.length} selected </span>
      </div>
      <div className="bottom-bar">
        <button onClick={handleDelete} className="delete-btn" disabled={selectedIds.length === 0}> Delete Record/s </button>
      </div>
    </div>
  );
}

export default DeleteView;