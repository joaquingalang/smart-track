import "../styles/AddView.css";
import "../styles/Fonts.css";
import { useState, useEffect } from "react";

const API_URL = "http://localhost:5000/api/employees";

function AddView() {
  const [users, setUsers] = useState([]);
  const [department, setDepartment] = useState("");
  const [position, setPosition] = useState("");
  const [nextEmployeeId, setNextEmployeeId] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [newUserName, setNewUserName] = useState("");

  // ---------- GET: Fetch all users ----------
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error("Failed to fetch users");
      const data = await res.json();
      setUsers(data);
      // Find the max ID and set the next available ID
      const maxId = data.reduce((max, user) => (user.id > max ? user.id : max), 0);
      setNextEmployeeId(maxId + 1);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // ---------- POST: Add new user ----------
  const addUser = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_URL}/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: nextEmployeeId,
          name: newUserName,
          department: department,
          position: position,
        }),
      });
      const updatedUsers = await res.json();
      setUsers(updatedUsers);
      setNextEmployeeId(prevId => prevId + 1);
      setNewUserName("");
      setDepartment("");
      setPosition("");
    } catch (err) {
      alert("Failed to add user.");
    }
  };

  return (
    <div className="label_view delius-regular">
      <h1>Add Record</h1>
      <div className="input_view">
        <h2>Please Input Details</h2>
        <div className="input_details">
          <form onSubmit={addUser}>
            <h3>Name</h3>
            <input
              value={newUserName}
              onChange={(e) => setNewUserName(e.target.value)}
              required
            />
            <h3>Department</h3>
            <input
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              required
            />
            <h3>Position</h3>
            <input
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              required
            />
            <button className="delius-regular" type="submit">
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddView;