import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EmployeesComponent = () => {
    const [employees, setEmployees] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:4000/employees')
            .then(response => setEmployees(response.data))
            .catch(error => console.log(error))

    }, []);

	return (
		<>
			<h3>Employees List</h3>
            <ul>
                {employees.map(employee => (
                    <li key={employee.id}>{employee.id}. {employee.name}</li>
                ))}
            </ul>
		</>);
}

const EmployeeComponent = () => {
    const [employee, setEmployee] = useState({});
    const [id, setId] = useState(1);
    
    useEffect(() => {
        axios.get(`http://localhost:4000/employees/${id}`)
            .then(response => setEmployee(response.data))
            .catch(error => console.log(error))
    }, [id]);

	return (
		<>
			<h3>Employee Details</h3>
            <label>Enter employee ID: 
            <input type="number" value={id} min={1} max={3} onChange={(e) => setId(e.target.value)}/>
            </label>
            <p>{employee.id}. {employee.name}, {employee.location}</p>
		</>);
}


const App = (props) => {
	return (
		<>
			<h2>Effects Demo using React Hooks - Fetching server data</h2>
			<EmployeesComponent />
			<EmployeeComponent />
		</>);
}

export default App;
