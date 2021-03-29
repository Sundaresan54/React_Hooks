import React, { useState } from 'react';
import MultipleStateDataComponent from './MultipleStateDataComponent';

const CheckboxComponent = () => {
	const [checked, setChecked] = useState(false);
	const handleCheckBox = () => setChecked(!checked);
//	const handleCheckBox = () => setChecked(prevChecked => !prevChecked);

	let currentState = checked ? " Checked" : " Unchecked";
	return (
		<>
			<h3>useState - boolean</h3>
			<input type="checkbox" onChange={handleCheckBox} defaultChecked={checked} />
			<span>{currentState} state</span>
		</>);
}

const TitleComponent = () => {
	const [title, setTitle] = useState('');

	const handleTitle = (e) => setTitle(e.target.value);
	return (
		<>
			<h3>useState - string</h3>
			<label>
				Enter Title:
				<input type="text" onChange={handleTitle} defaultValue={title} />
			</label>
			<span>Title: {title}</span>
		</>);
}
// useState does not merge values, manually merge it. setState in Class component merges values.
const FullNameComponent = () => {
	const [fullName, setFullName] = useState({ firstName: '', lastName: '' });

	const handleFirstName = (e) => setFullName({ ...fullName, firstName: e.target.value });
	const handleLastName = (e) => setFullName({ ...fullName, lastName: e.target.value });

	return (
		<>
			<h3>useState - object</h3>
			<label>
				Enter First Name:
					<input type="text" onChange={handleFirstName} defaultValue={fullName.firstName} />
			</label>
			<label>
				Enter Last Name:
					<input type="text" onChange={handleLastName} defaultValue={fullName.lastName} />
			</label>
			<span>Full Name: {fullName.firstName} {fullName.lastName}</span>
		</>);
}

const EmployeesComponent = () => {
	const [employees, setEmployees] = useState([]);

	const addNewEmployee = () => setEmployees([...employees, `Emp${employees.length}`]);

	return (
		<>
			<h3>useState - array</h3>
			<button onClick={() => addNewEmployee()}>Add Employee</button>
			<ul>
				{employees.map((employee,index) => (
					<li key={index}>{employee}	</li>
				))}	 
			</ul>
		</>);
}

const App = (props) => {
	return (
		<>
			<h2>State Demo using React Hooks</h2>
			<CheckboxComponent />
			<TitleComponent />
			<FullNameComponent />
			<EmployeesComponent />
			<MultipleStateDataComponent />
		</>);
}

export default App;
