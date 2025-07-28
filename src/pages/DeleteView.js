import React, { useEffect, useState } from 'react';
import DeleteRecordTable from '../components/DeleteRecord';
import '../styles/DeletePage.css';

function DeleteView() {
  const [employees, setEmployees] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) =>
        setEmployees(
          data.map((user, index) => ({
            id: index + 1,
            name: user.name,
            department: 'BS Computer Science',
            position: 'Software Developer',
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
    const remaining = employees.filter((emp) => !selectedIds.includes(emp.id));
    const renumbered = remaining.map((emp, idx) => ({ ...emp, id: idx + 1 }));
    setEmployees(renumbered);
    setSelectedIds([]);
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
