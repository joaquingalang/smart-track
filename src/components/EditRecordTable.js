import React from 'react';

const EditRecordTable = ({ employees, onEditClick }) => {
  return (
    <div className="table-wrapper">
      <div className="table-header">
        <span>Employee_ID</span>
        <span>Name</span>
        <span>Department</span>
        <span>Position</span>
        <span></span>
      </div>

      <div className="table-body">
        {employees.map((emp) => (
          <div key={emp.id} className="table-row">
            <span>{emp.id}</span>
            <span>{emp.name}</span>
            <span>{emp.department}</span>
            <span>{emp.position}</span>
            <button className="m-0" onClick={() => onEditClick(emp)}>✎</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EditRecordTable;