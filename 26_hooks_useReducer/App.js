import React, { useReducer, useRef } from 'react';

const initialState = {
	employees: [
		{
			name: 'Ram',
			email: 'ram@mail.com',
			manager: false
		}
	]
}

const reducer = (state, action) => {
	switch (action.type) {
		case 'ADD_EMPLOYEE':
			return {
				employees: [
					...state.employees,
					action.payload
				]
			}
		case 'DELETE_EMPLOYEE':
			return {
				employees: state.employees.filter(emp => emp.name !== action.payload.name)
			}
		default:
			return state;
	}
}


const EmployeesComponent = () => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const nameRef = useRef(null);
	const emailRef = useRef(null);
	const managerRef = useRef(null);

	const addNewEmployee = () => {
		dispatch({
			type: 'ADD_EMPLOYEE',
			payload: {
				'name': nameRef.current.value,
				'email': emailRef.current.value,
				'manager': managerRef.current.value
			}
		});
	}

	const deleteEmployee = (name) => {
		dispatch({
			type: 'DELETE_EMPLOYEE',
			payload: {
				'name': name
			}
		})
	}
	return (
		<>
			<h3>Employees List - useReducer hook</h3>
			<input type="text" ref={nameRef} placeholder="Enter name" />
			<input type="email" ref={emailRef} placeholder="Enter email" />
			<input type="checkbox" ref={managerRef} />
			<button onClick={() => addNewEmployee()}>Add Employee</button>
			<ul>
				{state.employees.map((employee, index) => (
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
