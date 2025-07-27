import "../styles/Fonts.css";

const RecordTable = ({ employees }) => {
  return (
    <div className="table-wrapper">
      <div className="table-header">
        <span className="delius-regular">Employee_ID</span>
        <span className="delius-regular">Name</span>
        <span className="delius-regular">Department</span>
        <span className="delius-regular">Position</span>
      </div>

      <div className="table-body-max">
        {employees.map((emp) => (
          <div key={emp.id} className="table-row">
            <span className="delius-regular">{emp.id}</span>
            <span className="delius-regular">{emp.name}</span>
            <span className="delius-regular">{emp.department}</span>
            <span className="delius-regular">{emp.position}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecordTable;