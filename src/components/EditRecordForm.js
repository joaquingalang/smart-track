import React from 'react';

const EditRecordForm = ({ selectedEmployee, onChange, onUpdate }) => {
  return (
    <div className="form">
      <input
        type="text"
        name="id"
        value={selectedEmployee?.id || ''}
        readOnly
        disabled
        placeholder="Employee ID*"
      />
      <input
        type="text"
        name="name"
        value={selectedEmployee?.name || ''}
        onChange={onChange}
        placeholder="Name*"
      />
      <input
        type="text"
        name="department"
        value={selectedEmployee?.department || ''}
        onChange={onChange}
        placeholder="Department*"
      />
      <input
        type="text"
        name="position"
        value={selectedEmployee?.position || ''}
        onChange={onChange}
        placeholder="Position*"
      />
      <button className="update-btn" onClick={onUpdate}>
        Update Record
      </button>
    </div>
  );
};

export default EditRecordForm;