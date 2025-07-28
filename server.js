const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 5000;
const DATA_PATH = path.join(__dirname, 'src', 'employees.json');

app.use(cors());
app.use(express.json());

// Get all employees
app.get('/api/employees', (req, res) => {
  const data = fs.readFileSync(DATA_PATH, 'utf8');
  res.json(JSON.parse(data));
});

// Add new employee
app.post('/api/employees/add', (req, res) => {
  try {
    const newEmployee = req.body;
    let employees = JSON.parse(fs.readFileSync(DATA_PATH, 'utf8'));
    // Assign a new id (max id + 1)
    const maxId = employees.length > 0 ? Math.max(...employees.map(emp => emp.id || 0)) : 0;
    newEmployee.id = maxId + 1;
    employees.push(newEmployee);
    fs.writeFileSync(DATA_PATH, JSON.stringify(employees, null, 2));
    res.json(employees);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Delete employees by IDs
app.post('/api/employees/delete', (req, res) => {
  const { ids } = req.body;
  let employees = JSON.parse(fs.readFileSync(DATA_PATH, 'utf8'));
  employees = employees.filter(emp => !ids.includes(emp.id));
  fs.writeFileSync(DATA_PATH, JSON.stringify(employees, null, 2));
  res.json({ success: true, employees });
});

// Edit employees
app.post('/api/employees/edit', (req, res) => {
  try {
    const updatedEmployee = req.body;
    let employees = JSON.parse(fs.readFileSync(DATA_PATH, 'utf8'));
    employees = employees.map(emp =>
      emp.id === updatedEmployee.id ? { ...emp, ...updatedEmployee } : emp
    );
    fs.writeFileSync(DATA_PATH, JSON.stringify(employees, null, 2));
    res.json(employees);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
