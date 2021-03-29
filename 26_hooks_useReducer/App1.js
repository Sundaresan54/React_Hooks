import React, { useState, useRef } from 'react';

const initialState = {
	employees: [
		{
			name: 'Ram',
			email: 'ram@mail.com',
			manager: false
		}
	]
}

const EmployeesComponent = () => {
	const [employees, setEmployees] = useState(initialState.employees);
	const nameRef = useRef(null);
	const emailRef = useRef(null);
	const managerRef = useRef(null);

	const addNewEmployee = () => {
        setEmployees([...employees, {
            'name': nameRef.current.value,
            'email': emailRef.current.value,
            'manager': managerRef.current.value
        }]);
	}

	const deleteEmployee = (name) => {
        setEmployees(employees.filter(emp => emp.name !== name));
    }
    
	return (
		<>
			<h3>Employees List - useState hook</h3>
			<input type="text" ref={nameRef} placeholder="Enter name" />
			<input type="email" ref={emailRef} placeholder="Enter email" />
			<input type="checkbox" ref={managerRef} />
			<button onClick={() => addNewEmployee()}>Add Employee</button>
			<ul>
				{employees.map((employee, index) => (
					<li key={index}  onClick={() => deleteEmployee(employee.name)}>
						{employee.name}, {employee.email}, {employee.manager ? "Manager" : "Employee"}
					</li>
				))}
			</ul>
		</>);
}

const App = (props) => {
	return (
		<>
			<EmployeesComponent />
		</>);
}

export default App;
