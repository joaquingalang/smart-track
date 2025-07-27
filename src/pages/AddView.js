import "../styles/AddView.css";
import "../styles/Fonts.css";
import { useState } from "react";

const API_URL = 'https://jsonplaceholder.typicode.com/users';


function AddView() {
  const [employeeId, setEmployeeId] = useState("");
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [position, setPosition] = useState("");
  const [users, setUsers] = useState([]);

  
  const addUser = async () => {
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          employeeId,
          name,
          department,
          position 
        }),
      });
      const newUser = await res.json();
      setUsers((prev) => [...prev, newUser]);
      setEmployeeId("");
      setName("");
      setDepartment("");
      setPosition("");
    } catch (err) {
      alert("Failed to add user.");
    }
  };

  return (
    <div class="label_view delius-regular">
      <h1>Add Record</h1>
      <div class="input_view">
        <div class=""></div>
        <h2>Please Input Details</h2>
        <div class="input_details">
          <form>
            <h3>Employee ID</h3>
            <input
              value={employeeId}
              onChange={(e) => setEmployeeId(e.target.value)}
            ></input>
          </form>
          <form>
            <h3>Name</h3>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </form>
          <form>
            <h3>Department</h3>
            <input
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            ></input>
          </form>
          <form>
            <h3>Position</h3>
            <input
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            ></input>
          </form>
        </div>
        <button class="delius-regular" onClick={addUser}>Add</button>
      </div>
    </div>
  );
}

export default AddView;
