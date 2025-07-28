import React from 'react';

function DeleteRecordTable({ employees, selectedIds, onCheckboxChange }) {
  return (
    <div className="record-table">
      <div className="record-table-header">
        <span>Employee ID</span>
        <span>Name</span>
        <span>Department</span>
        <span>Position</span>
        <span>Select</span>
      </div>

      <div className="record-table-body">
        {employees.map((emp) => (
          <div key={emp.id} className="record-table-row">
            <span>{emp.id}</span>
            <span>{emp.name}</span>
            <span>{emp.department}</span>
            <span>{emp.position}</span>
            <span>
              <input
                type="checkbox"
                checked={selectedIds.includes(emp.id)}
                onChange={() => onCheckboxChange(emp.id)}
              />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DeleteRecordTable;
